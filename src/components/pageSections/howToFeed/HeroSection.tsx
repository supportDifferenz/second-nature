"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import Typography from "@/components/atoms/typography/Typography";

const bannerBaseClass = cn(
  "relative flex  text-center items-center w-full min-h-[500px] h-[90dvh] sm:min-h-[400px] sm:h-[d50vh] lg:min-h-[520px] sm:h-[70dvh] lg:max-h-[1200px] bg-cover bg-center transition-all"
);

export default function StaticHeroBanner() {
  const [imageSrc, setImageSrc] = useState("/images/how-to-feed-banner-mob.webp");

  useEffect(() => {
    const updateImage = () => {
      const width = window.innerWidth;
      if (width <= 575) {
        setImageSrc("/images/how-to-feed-banner-mob.webp");
      } else if (width <= 991) {
        setImageSrc("/images/how-to-feed-banner-mob.webp");
      } else {
        setImageSrc("/images/how-to-feed-banner.webp");
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
        <div className=" lg:w-[50%] lg:ml-auto">
          <Typography
            tag="h4"
            className="text-center lg:text-left text-primary-dark"
            text="Feeding Your Pet"
            role="caption"
            ariaLabel="Feeding Your Pet"
          />
          <Typography
            tag="h1"
            className="capitalize highlight mb-20 lg:mb-0 text-center lg:text-left text-primary-dark"
            text="the Natural Way"
            role="heading"
            ariaLabel="the Natural Way"
          />
        </div>
      </div>
    </div>
  );
}
