"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";
import Typography from "@/components/atoms/typography/Typography";

export default function HeroSection() {
  const banner = {
    id: "1",
    image: {
      web: "/images/about-us.webp",
      tablet: "/images/about-us-mob.webp",
      mobile: "/images/about-us-mob.webp",
    },
    caption: "ABOUT US",
    captionColor: "#00683D",
    title: "Helping fur babies thrive",
    halfTitle: "One Bowl at a Time",
    paragraph: "Crafted with Care for Healthier, Happier Pets",
    paragraphColor: "#944446",
    bannerThemeColor: "#00683D",
    buttonText: "Learn More",
    buttonTextColor: "#944446",
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
        {/* Background Image */}
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-full h-full max-w-[var(--max-w)] z-[-1]">
          <Image
            src={activeImage}
            alt={banner.title}
            className="!static inset-0 w-full !h-full object-cover object-center"
            fill
            priority
          />
        </div>

        {/* Content */}
        <div className="relative flex pt-[--space-46-95] sm:pt-0 sm:items-center w-full min-h-[500px] h-[90dvh] sm:min-h-[400px] s m:h-[d50vh] lg:min-h-[520px] sm:h-[90dvh] lg:h-[80dvh] lg:max-h-[1200px] bg-cover bg-center transition-all container sm:justify-end sm:text-left text-center justify-center items-center">
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left mt-auto pb-9 lg:pb-0 lg:mt-0 lg:w-[43%]">

            <Typography
              tag="h1"
              className="capitalize highlight mb-[--space-10-20] w-[82%] lg:w-auto"
              text={banner.title}
              role="heading"
              ariaLabel={banner.title}
              ariaLabelledBy="title"
            >
              <span className="h2 block capitalize normalize whitespace-nowrap text-center  lg:max-w-[65%]">
                {banner.halfTitle}
              </span>
            </Typography>

            <Typography
              tag="h6"
              text={banner.paragraph}
              className="first-letter:capitalize mb-[--space-20-30] mt-4 lg:whitespace-nowrap max-w-[47%] sm:max-w-[45%] lg:max-w-full mr-0"
              style={{ color: banner.paragraphColor }}
              role="paragraph"
              ariaLabel={banner.paragraph}
              ariaLabelledBy="sub paragraph"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
