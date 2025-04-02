"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import { useCallback } from "react";
import { cn } from "@/lib/utils";
import { cva } from "class-variance-authority";
import "./carousel.css";
import Typography from "@/components/atoms/typography/Typography";
import { Button } from "@/components/ui/button";
import { BannerCarouselPropsType } from "../type";
import { HeroBannersPropsType } from "@/components/pages/landingPage/type";

const bannerVariants = cva(
  // "relative flex pt-(--space-46-95) sm:pt-0 sm:items-center w-full min-h-[500px] h-[90dvh] sm:min-h-[400px] sm:h-[d50vh] lg:min-h-[600px] sm:h-[70dvh] lg:max-h-[1200px]   bg-cover bg-center transition-all",
    "relative flex pt-(--space-46-95) sm:pt-0 sm:items-center w-full   bg-cover bg-center transition-all",

  {
    variants: {
      align: {
        left: "text-center justify-center sm:justify-start sm:text-left",
        center:
          "text-center justify-center sm:justify-center sm:[&_*_*]:mx-auto text-center",
        right: "text-center justify-center sm:justify-end sm:text-left",
      },
      bannerHeight:{
        mainHero:"min-h-[500px] h-[90dvh] sm:min-h-[400px] sm:h-[d50vh] lg:min-h-[520px] sm:h-[70dvh] lg:max-h-[1200px] ",
        subHero:"",
      }
    },
    defaultVariants: {
      align: "center",
      bannerHeight:"subHero"
    },
  },
);

export default function HeroBanner({
  banners,
  isCarousel = false,
  autoplay = false,
  showNavigation = false,
  interval = 4000,
  hasButton = true,
  align,
  bannerHeight
}: BannerCarouselPropsType) {
  // carousel settings
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: isCarousel });
  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  const getResponsiveImage = (banner: HeroBannersPropsType): string => {
    if (typeof window !== "undefined") {
      if (window.innerWidth <= 574) return banner.image.mobile;
      if (window.innerWidth <= 991) return banner.image.tablet;
      return banner.image.web;
    }
    return banner.image.mobile; // Default for SSR
  };
  const [activeImages, setActiveImages] = useState<string[]>(
    banners.map((b) => b.image.mobile),
  ); // Default SSR-safe values

  useEffect(() => {
    const updateImages = () => {
      setActiveImages(banners.map(getResponsiveImage));
    };
    updateImages(); // Set correct images on mount
    window.addEventListener("resize", updateImages);
    return () => window.removeEventListener("resize", updateImages);
  }, []);

  // carousel settings
  useEffect(() => {
    if (!isCarousel || !autoplay || !emblaApi) return;
    const intervalId = setInterval(() => {
      emblaApi.scrollNext();
    }, interval);
    return () => clearInterval(intervalId);
  }, [emblaApi, autoplay, isCarousel, interval]);

  return (
    <>
      {isCarousel ? (
        <div className="embla" ref={emblaRef}>
          <div className="embla__container">
            {banners.map((banner, index) => (
              <div
                key={banner.id}
                className="embla__slide relative"
                style={{ color: banner.bannerThemeColor }}
              >
                <div className="h-full w-full max-w-[var(--max-w)] left-1/2 transform -translate-x-1/2 absolute top-0 z-[-1]">
                  <Image
                    src={activeImages[index]}
                    alt={banner.title || "Hero Banner"}
                    className="!static inset-0 w-full !h-full object-cover object-center"
                    fill
                    priority
                  />
                </div>
                <div className={cn(bannerVariants({ align, bannerHeight }), "container")}>
                  <div className="lg:w-[55%] ">
                    {banner.caption && (
                      <Typography
                        tag="span"
                        className="subtitle uppercase"
                        text={banner.caption}
                        style={{ color: banner.captionColor }}
                        role="caption"
                        ariaLabel={banner.caption}
                        ariaLabelledBy="caption"
                      />
                    )}

                    {banner.title && (
                      <Typography
                        tag="h1"
                        className="capitalize highlight"
                        text={banner.title}
                        role="heading"
                        ariaLabel={banner.title}
                        ariaLabelledBy="title"
                      />
                    )}
                    {banner.halfTitle && (
                      <Typography
                        tag="h2"
                        className="supporting capitalize sm:max-w-[50%] lg:max-w-[65%] mb-(--space-10-20)"
                        text={banner.halfTitle}
                        role="sub heading"
                        ariaLabel={banner.halfTitle}
                        ariaLabelledBy="sub title"
                      />
                    )}
                    {banner.paragraph && (
                      <Typography
                        tag="h6"
                        text={banner.paragraph}
                        className="first-letter:capitalize mb-(--space-20-30) sm:max-w-[45%] lg:max-w-[65%]  "
                        style={{ color: banner.paragraphColor }}
                        role="paragraph"
                        ariaLabel={banner.paragraph}
                        ariaLabelledBy="sub paragraph"
                      />
                    )}
                    {hasButton && banner.buttonText && (
                      <Button
                        variant={"outlinePrimaryBtn"}
                        className="mx-auto sm:m-0"
                        style={{
                          borderColor: banner.buttonTextColor,
                          color: banner.buttonTextColor,
                        }}
                      >
                        {banner.buttonText}
                      </Button>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div
          className="relative"
          style={{ color: banners[0].bannerThemeColor }}
        >
          <div className="h-full w-full max-w-[var(--max-w)] left-1/2 transform -translate-x-1/2 absolute top-0 z-[-1]">
            <Image
              src={activeImages[0]}
              alt={banners[0].title || "Hero Banner"}
              className="!static inset-0 w-full !h-full object-cover object-center"
              fill
              priority
            />
          </div>
          <div
            className={cn(bannerVariants({ align }), "container items-center")}
          >
            <div className="lg:w-[55%]">
              {banners[0].caption && (
                <Typography
                  tag="span"
                  className="subtitle uppercase"
                  text={banners[0].caption}
                  style={{ color: banners[0].captionColor }}
                  role="caption"
                  ariaLabel={banners[0].caption}
                  ariaLabelledBy="caption"
                />
              )}
              {banners[0].title && (
                <Typography
                  tag="h1"
                  className="capitalize highlight mb-(--space-10-20) "
                  text={banners[0].title}
                  role="heading"
                  ariaLabel={banners[0].title}
                  ariaLabelledBy="title"
                >
                  {banners[0].halfTitle && (
                    <Typography
                      tag="h2"
                      className="supporting capitalize normalize sm:max-w-[50%] lg:max-w-[65%]"
                      text={banners[0].halfTitle}
                      role="sub heading"
                      ariaLabel={banners[0].halfTitle}
                      ariaLabelledBy="sub title"
                    />
                  )}
                </Typography>
              )}
              {banners[0].paragraph && (
                <Typography
                  tag="h6"
                  text={banners[0].paragraph}
                  className="first-letter:capitalize mb-(--space-20-30) mx-auto max-w-[90%] sm:max-w-[45%] lg:max-w-[65%] "
                  style={{ color: banners[0].paragraphColor }}
                  role="paragraph"
                  ariaLabel={banners[0].paragraph}
                  ariaLabelledBy="sub paragraph"
                />
              )}
              {hasButton && banners[0].buttonText && (
                <Button
                  variant={"outlinePrimaryBtn"}
                  className="mx-auto sm:m-0"
                  style={{
                    borderColor: banners[0].buttonTextColor,
                    color: banners[0].buttonTextColor,
                  }}
                >
                  {banners[0].buttonText}
                </Button>
              )}
            </div>
          </div>
        </div>
      )}

      {isCarousel && showNavigation && (
        <>
          <button
            onClick={scrollPrev}
            className="absolute left-2 top-1/2 transform -translate-y-1/2 p-2 bg-white shadow-md rounded-full"
          >
            ◀️
          </button>
          <button
            onClick={scrollNext}
            className="absolute right-2 top-1/2 transform -translate-y-1/2 p-2 bg-white shadow-md rounded-full"
          >
            ▶️
          </button>
        </>
      )}
    </>
  );
}
