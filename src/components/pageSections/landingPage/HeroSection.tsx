"use client";

import React, { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import Fade from "embla-carousel-fade";
import { cn } from "@/lib/utils";
import { cva } from "class-variance-authority";
import Typography from "@/components/atoms/typography/Typography";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";

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
    buttonLink: "#",
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
    buttonLink: "#",
    bannerThemeColor: "#ffff",
    buttonTextColor: "#ffff",
  },
];

// Animation helper
const fadeUp = (delay = 0, y = 30, duration = 0.6) => ({
  initial: { opacity: 0, y },
  animate: {
    opacity: 1,
    y: 0,
    transition: { delay, duration, ease: "easeInOut" },
  },
  exit: {
    opacity: 0,
    y,
    transition: { duration: 0.4, ease: "easeInOut" },
  },
});

export default function HeroSection() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [
    Autoplay(),
    Fade(),
  ]);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const updateIndex = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    emblaApi.on("select", updateIndex);
    updateIndex();
  }, [emblaApi, updateIndex]);

  const getResponsiveImage = (banner: (typeof banners)[0]): string => {
    if (typeof window !== "undefined") {
      if (window.innerWidth <= 574) return banner.image.mobile;
      if (window.innerWidth <= 991) return banner.image.tablet;
      return banner.image.web;
    }
    return banner.image.mobile;
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
  }, []);

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
                  <Image
                    src={activeImages[index]}
                    alt={banner.title || "Hero Banner"}
                    className="!static inset-0 w-full !h-full object-cover object-center"
                    fill
                    priority
                  />
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
    </section>
  );
}
