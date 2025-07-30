"use client";

import React, { useState, useEffect, useCallback, startTransition } from "react";
import { motion, easeInOut, AnimatePresence } from "framer-motion";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import Fade from "embla-carousel-fade";
import { cn } from "@/lib/utils";
import { cva } from "class-variance-authority";
import Typography from "@/components/atoms/typography/Typography";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import useAuthStore from "@/zustand/store/authDataStore";

const bannerVariants = cva(
  "relative flex pt-8 sm:pt-0 sm:items-center w-full bg-cover bg-center transition-all",
  {
    variants: {
      align: {
        left: "text-center justify-center sm:justify-start sm:text-left",
        center: "text-center justify-center sm:justify-center sm:[&_*_*]:mx-auto text-center",
        right: "text-center justify-center sm:justify-end sm:text-left",
      },
      bannerHeight: {
        mainHero:
          "min-h-[400px] h-[600px] sm:min-h-[300px] sm:h-[50dvh] lg:min-h-[480px] 2xl:min-h-[720px] lg:h-[75dvh]  lg:max-h-[1000px]",
        subHero:
          "min-h-[500px] h-[90dvh] sm:min-h-[400px] sm:h-[50dvh] lg:min-h-[520px] sm:h-[70dvh] lg:max-h-[1200px]",
      },
    },
    defaultVariants: {
      align: "center",
      bannerHeight: "subHero",
    },
  }
);

const fadeUp = (delay = 0, y = 30, duration = 0.6) => ({
  initial: { opacity: 0, y },
  animate: {
    opacity: 1,
    y: 0,
    transition: { delay, duration, ease: easeInOut },
  },
  exit: {
    opacity: 0,
    y,
    transition: { duration: 0.4, ease: easeInOut },
  },
});

export default function HeroSection() {

  const router = useRouter();

  const isAuthenticated = useAuthStore((state) => state.isAuthenticated);

  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [
    Autoplay({ delay: 4000 }),
    Fade(),
  ]);

  const [selectedIndex, setSelectedIndex] = useState(0);
  const [canScrollNext, setCanScrollNext] = useState(true);
  const [canScrollPrev, setCanScrollPrev] = useState(true);

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  const banners = [
    {
      id: "1",
      image: {
        web: "/images/hero-carousel-banner-web.webp",
        tablet: "/images/hero-carousel-banner-web.webp",
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
      buttonLink: isAuthenticated ? "/location" : "/user-details",
      // buttonLink: "/location",
      bannerThemeColor: "#00683D",
    },
    {
      id: "2",
      image: {
        web: "/images/hero-carousel-banner-2-web.webp",
        tablet: "/images/hero-carousel-banner-2-web.webp",
        mobile: "/images/hero-carousel-banner-2-mob.webp",
      },
      caption: "new Offer",
      captionColor: "#FFFFFF",
      title: "Get 10% off,",
      halfTitle: "On your first Subscription",
      paragraph:
        "Freshly prepared and delivered to your door that fuels a life full of happy tails",
      paragraphColor: "#ffff",
      buttonText: "Get Started",
      buttonLink: isAuthenticated ? "/location" : "/user-details",
      // buttonLink: "/location",
      bannerThemeColor: "#ffff",
      buttonTextColor: "#ffff",
    },
  ];

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
    setCanScrollPrev(emblaApi.canScrollPrev());
    setCanScrollNext(emblaApi.canScrollNext());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    emblaApi.on("select", onSelect);
    onSelect();
  }, [emblaApi, onSelect]);

  return (
    <section className="relative w-full overflow-hidden">
      <div className="embla w-full overflow-hidden" ref={emblaRef}>
        <div className="embla__container flex">
          {banners.map((banner, index) => {
            const isActive = index === selectedIndex;

            return (
              <div
                key={banner.id}
                className="embla__slide flex-[0_0_100%] min-w-0 relative"
                style={{ color: banner.bannerThemeColor }}
              >
                {/* Background Image */}
                <div className="h-full w-full max-w-[var(--max-w)] left-1/2 transform -translate-x-1/2 absolute top-0 z-[-1]">
                  <picture className="absolute inset-0 w-full h-full z-[-1]">
                    <source media="(max-width: 574px)" srcSet={banner.image.mobile} />
                    <source media="(max-width: 991px)" srcSet={banner.image.tablet} />
                    <img
                      src={banner.image.web}
                      alt={banner.title || "Hero Banner"}
                      className="w-full h-full object-cover object-center"
                      loading="eager"
                      fetchPriority="high"
                    />
                  </picture>
                </div>

                {/* Content */}
                <div
                  className={cn(
                    bannerVariants({ align: "left", bannerHeight: "mainHero" }),
                    "container"
                  )}
                >
                  <div className="lg:w-[55%]">
                    <AnimatePresence mode="wait">
                      {isActive && (
                        <motion.div
                          key={banner.id}
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          transition={{ duration: 0.5 }}
                        >
                          {banner.caption && (
                            <motion.div {...fadeUp(0.0, 20)}>
                              <Typography
                                tag="span"
                                className="subtitle uppercase"
                                text={banner.caption}
                                style={{ color: banner.captionColor }}
                              />
                            </motion.div>
                          )}
                          {banner.title && (
                            <motion.div {...fadeUp(0.2, 30)}>
                              <Typography
                                tag="h1"
                                className="capitalize highlight"
                                text={banner.title}
                              >
                                {banner.halfTitle && (
                                  <motion.span
                                    className="block h2 max-[587px]:!text-[26px] font-bellota-text capitalize sm:max-w-[50%] lg:max-w-[65%] mb-(--space-10-20)"
                                    {...fadeUp(0.4, 40)}
                                  >
                                    {banner.halfTitle}
                                  </motion.span>
                                )}
                              </Typography>
                            </motion.div>
                          )}
                          {banner.paragraph && (
                            <motion.div {...fadeUp(0.6, 40)}>
                              <Typography
                                tag="h6"
                                text={banner.paragraph}
                                className="first-letter:capitalize mb-(--space-20-30) sm:max-w-[45%] lg:max-w-[65%] ml-0"
                                style={{ color: banner.paragraphColor }}
                              />
                            </motion.div>
                          )}
                          {banner.buttonText && (
                            <motion.div {...fadeUp(0.8, 20)}>
                              <Button
                                variant="outlineSecondaryBtnHover"
                                className="mx-auto sm:m-0"
                                style={{
                                  borderColor: banner.buttonTextColor,
                                  color: banner.buttonTextColor,
                                }}
                                onClick={() => {
                                  startTransition(() => {
                                    if (banner.buttonLink) {
                                      router.push(banner.buttonLink);
                                    }
                                  });
                                }}
                              >
                                {banner.buttonText}
                              </Button>
                            </motion.div>
                          )}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Navigation Buttons */}
      <div className=" flex gap-4 ">
        <Button
          // variant="ghost"
          size="icon"
          onClick={scrollPrev}
          disabled={!canScrollPrev}
          className="rounded-full !border-0 text-white bg-transparent absolute top-1/2 left-[5px] lg:left-[1%] shadow-md  -translate-y-1/2 z-[5] hover:scale-110 transition-transform duration-300">
          <img src="/icons/arrow-left-nav-white.svg" alt="arrow" className="w-[50px]"/>
        </Button>
        <Button
          // variant="ghost"
          size="icon"
          onClick={scrollNext}
          disabled={!canScrollNext}
          className="rounded-full !border-0 text-white bg-transparent absolute top-1/2   -translate-y-1/2 z-[5] right-[5px] shadow-md lg:right-[1%] hover:scale-110 transition-transform duration-300"
        >
          <img src="/icons/arrow-right-nav-white.svg" alt="arrow" className="w-[50px]"/>
        </Button>
      </div>


    </section>
  );
}