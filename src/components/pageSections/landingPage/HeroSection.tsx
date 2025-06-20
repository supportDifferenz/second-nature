"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import { cn } from "@/lib/utils";
import { cva } from "class-variance-authority";
// import "./heroBanner.css";
import Typography from "@/components/atoms/typography/Typography";
import { Button } from "@/components/ui/button";

const bannerVariants = cva(
  "relative flex pt-(--space-46-95) sm:pt-0 sm:items-center w-full bg-cover bg-center transition-all",
  {
    variants: {
      align: {
        left: "text-center justify-center sm:justify-start sm:text-left",
        center:
          "text-center justify-center sm:justify-center sm:[&_*_*]:mx-auto text-center",
        right: "text-center justify-center sm:justify-end sm:text-left",
      },
      bannerHeight: {
        mainHero:
          "min-h-[500px] h-[90dvh] sm:min-h-[400px] sm:h-[d50vh] lg:min-h-[520px] sm:h-[70dvh] lg:max-h-[1200px]",
        subHero:
          "min-h-[500px] h-[90dvh] sm:min-h-[400px] sm:h-[d50vh] lg:min-h-[520px] sm:h-[70dvh] lg:max-h-[1200px]",
      },
    },
    defaultVariants: {
      align: "center",
      bannerHeight: "subHero",
    },
  }
);

export default function HeroSection() {
  const banners = [
    {
      id: "1",
      image: {
        web: "/images/hero-carousel-banner-web.webp",
        tablet: "/images/hero-carousel-banner-mob.webp",
        mobile: "/images/hero-carousel-banner-mob.webp",
      },
      caption: "introducing",
      captionColor: "#424242",
      title: "real food,",
      halfTitle: "just as nature intended",
      paragraph:
        "freshly prepared and delivered to your door that fuels a life full of happy tails",
      paragraphColor: "#424242",
      buttonText: "know more",
      buttonTextColor: "",
      buttonLink: "#",
      bannerThemeColor: "#00683D",
    },
    {
      id: "2",
      image: {
        web: "/images/hero-carousel-banner-web.webp",
        tablet: "/images/hero-carousel-banner-mob.webp",
        mobile: "/images/hero-carousel-banner-mob.webp",
      },
      caption: "new arrivals",
      captionColor: "#1A1A1A",
      title: "healthy treats,",
      halfTitle: "crafted with love",
      paragraph:
        "wholesome ingredients for a delicious and nutritious experience for your furry friends",
      paragraphColor: "#333333",
      buttonText: "shop now",
      buttonLink: "#",
      bannerThemeColor: "blue",
    },
  ];

  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });

  const getResponsiveImage = (banner: (typeof banners)[0]): string => {
    if (typeof window !== "undefined") {
      if (window.innerWidth <= 574) return banner.image.mobile;
      if (window.innerWidth <= 991) return banner.image.tablet;
      return banner.image.web;
    }
    return banner.image.mobile; // SSR fallback
  };

  const [activeImages, setActiveImages] = useState<string[]>(
    banners.map((b) => b.image.mobile)
  );

  useEffect(() => {
    const updateImages = () => {
      setActiveImages(banners.map(getResponsiveImage));
    };
    updateImages();
    window.addEventListener("resize", updateImages);
    return () => window.removeEventListener("resize", updateImages);
  }, [banners]);

  // Optional autoplay
  useEffect(() => {
    const interval = setInterval(() => {
      emblaApi?.scrollNext();
    }, 4000);
    return () => clearInterval(interval);
  }, [emblaApi]);

  return (
    <section className="relative w-full overflow-hidden">
      <div className="embla w-full overflow-hidden" ref={emblaRef}>
        <div className="embla__container flex">
          {banners.map((banner, index) => (
            <div
              key={banner.id}
              className="embla__slide flex-[0_0_100%] min-w-0 relative"
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
              <div
                className={cn(
                  bannerVariants({ align: "left", bannerHeight: "mainHero" }),
                  "container"
                )}
              >
                <div className="lg:w-[55%]">
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
                    >
                      {banner.halfTitle && (
                        <span className="block h2 font-bellota-text capitalize sm:max-w-[50%] lg:max-w-[65%] mb-(--space-10-20)">
                          {banner.halfTitle}
                        </span>
                      )}
                    </Typography>
                  )}
                  {banner.paragraph && (
                    <Typography
                      tag="h6"
                      text={banner.paragraph}
                      className={`first-letter:capitalize mb-(--space-20-30) sm:max-w-[45%] lg:max-w-[65%] ml-0`}
                      style={{ color: banner.paragraphColor }}
                      role="paragraph"
                      ariaLabel={banner.paragraph}
                      ariaLabelledBy="sub paragraph"
                    />
                  )}
                  {banner.buttonText && (
                    <Button
                      variant="outlineSecondaryBtnHover"
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
    </section>
  );
}
