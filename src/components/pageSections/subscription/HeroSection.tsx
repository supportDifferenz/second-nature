"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import Typography from "@/components/atoms/typography/Typography";
import { Button } from "@/components/ui/button";

export default function HeroSection() {
  const banner = {
    id: "1",
    image: {
      web: "/images/subscription-hero-banner-web.webp",
      tablet: "/images/subscription-hero-banner-web.webp",
      mobile: "/images/subscription-hero-banner-mob.webp",
    },
    titlePart1: "Healthy,",
    titlePart2: "Ready-to-Serve",
    subtitle: "Premium Pet Food Delivered",
    bannerThemeColor: "#00683D",
    buttonText: "Sign Up Today",
    buttonTextColor: "#00683D",
  };

  const [activeImage, setActiveImage] = useState(banner.image.mobile);

  useEffect(() => {
    const updateImage = () => {
      if (typeof window === "undefined") return;
      if (window.innerWidth <= 574) setActiveImage(banner.image.mobile);
      else if (window.innerWidth <= 991) setActiveImage(banner.image.tablet);
      else setActiveImage(banner.image.web);
    };

    updateImage();
    window.addEventListener("resize", updateImage);
    return () => window.removeEventListener("resize", updateImage);
  }, []);

  return (
    <section className="relative w-full overflow-hidden">
      <div className="relative" style={{ color: banner.bannerThemeColor }}>
        {/* BG image */}
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-full h-full max-w-[var(--max-w)] z-[-1]">
          <Image
            src={activeImage}
            alt="Healthy Ready-to-Serve"
            className="!static inset-0 w-full !h-full object-cover object-center"
            fill
            priority
          />
        </div>

        {/* Content */}
        <div className="relative flex pt-[--space-46-95] sm:pt-0 lg::items-center w-full min-h-[500px] h-[90dvh] sm:min-h-[400px] lg:min-h-[520px] sm:h-[70dvh] lg:max-h-[1200px] bg-cover bg-center transition-all container sm:justify-end sm:text-left text-center justify-center ">
          <div className="flex flex-col items-center sm:items-start lg:justify-center mt-[85%] sm:mt-[20%] lg:mt-0 lg:w-[50%]">
            <Typography
              tag="h1"
              className="text-primary-dark capitalize highlight mb-[--space-4-10]"
              text={banner.titlePart1}
              role="heading"
              ariaLabel={banner.titlePart1}
            />
            <Typography
              tag="h1"
              className="text-primary-dark capitalize highlight mb-[--space-10-20]"
              text={banner.titlePart2}
              role="heading"
              ariaLabel={banner.titlePart2}
            />

            <Typography
              tag="h3"
              className="capitalize block max-w-[80%] sm:max-w-[50%] lg:max-w-[65%] mb-[--space-20-30]"
              text={banner.subtitle}
              role="heading"
              ariaLabel={banner.subtitle}
            />

            <Button
              variant="primaryBtn"
              className="mx-auto sm:m-0 mt-4"
              size={"md"}
            >
              {banner.buttonText}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
