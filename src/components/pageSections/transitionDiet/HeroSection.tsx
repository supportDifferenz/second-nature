"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import Typography from "@/components/atoms/typography/Typography";

const bannerBaseClass = cn(
  "relative flex  justify-center text-center items-center w-full min-h-[500px] h-[90dvh] sm:min-h-[400px] sm:h-[d50vh] lg:min-h-[520px] sm:h-[70dvh] lg:max-h-[1200px] bg-cover bg-center transition-all"
);

export default function StaticHeroBanner() {
  const [imageSrc, setImageSrc] = useState("/images/transition-diet-hero-banner-mob.webp");

  useEffect(() => {
    const updateImage = () => {
      const width = window.innerWidth;
      if (width <= 575) {
        setImageSrc("/images/transition-diet-hero-banner-mob.webp");
      } else if (width <= 991) {
        setImageSrc("/images/transition-diet-hero-banner-mob.webp");
      } else {
        setImageSrc("/images/transition-diet-hero-banner-web.webp");
      }
    };

    updateImage(); // set on initial load
    window.addEventListener("resize", updateImage); // update on resize

    return () => window.removeEventListener("resize", updateImage);
  }, []);

  return (
    <div className={bannerBaseClass} style={{ color: "#ffffff" }}>
      {/* Background Image */}
      <div className="h-full w-full  left-1/2 transform -translate-x-1/2 absolute top-0 z-[-1]">
        <Image
          src={imageSrc}
          alt="Hero Banner"
          className="!static inset-0 w-full !h-full object-cover object-center"
          fill
          priority
        />
      </div>

      {/* Content */}
      <div className="w-full mt-auto lg:mt-0 lg:ml-auto">
        <div className="flex flex-col items-center lg:w-[50%] mb-12 lg:mx-auto lg:mb-28">
          <Typography
            tag="h4"
            className="text-center text-primary-dark w-[53%] lg:w-auto"
            text="Switching to Natural Nutrition,"
            role="caption"
            ariaLabel="Switching to Natural Nutrition,"
          />
          <Typography
            tag="h1"
            className="capitalize highlight  text-center text-primary-dark w-[82%] lg:w-auto"
            text="One Step at a Time"
            role="heading"
            ariaLabel="One Step at a Time"
          />
          <Typography
            tag="h6"
            className="text-center  text-secondary-1 mt-2 w-[65%] sm:w-[60%] lg:w-[68%]"
            text="Discover how simple it is to nourish your pet with wholesome, natural meals designed for their health and happiness. "
            role="paragraph"
            ariaLabel="Discover how simple it is to nourish your pet with wholesome, natural meals designed for their health and happiness."
          />
        </div>
      </div>
    </div>
  );
}


