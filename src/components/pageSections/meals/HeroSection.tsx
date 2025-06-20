"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";
import Typography from "@/components/atoms/typography/Typography";

export default function HeroSection() {
  const banner = {
    id: "1",
    image: {
      web: "/images/meal-beef-banner.webp",
      tablet: "/images/meal-beef-banner-mob.webp",
      mobile: "/images/meal-beef-banner-mob.webp",
    },
    caption: "NEW",
    captionColor: "#424242",
    title: "Delivering Love & Nutrition,",
    halfTitle: "One Bowl at a Time",
    paragraph: "From our kitchen to your doorstep, nutrition made simple",
    paragraphColor: "#ffffff",
    bannerThemeColor: "#ffffff",
    buttonText: "Get Started",
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
      <div className="relative text-center" style={{ color: banner.bannerThemeColor }}>
        {/* Background Image */}
        <div className="absolute top-0 left-0 w-full h-full z-[-1]">
          <Image
            src={activeImage}
            alt={banner.title}
            className="!static inset-0 w-full !h-full object-cover object-center"
            fill
            priority
          />
        </div>

        {/* Content Container */}
        <div className="relative flex flex-col items-center justify-center w-full min-h-[500px] h-[90dvh] sm:min-h-[400px] sm:h-[d50vh] lg:min-h-[520px] sm:h-[70dvh] lg:max-h-[1200px] container">
          <div className="lg:w-[55%]">
            <Typography
              tag="h1"
              className="capitalize highlight mb-[var(--space-10-20)]"
              text={banner.title}
              role="heading"
              ariaLabel={banner.title}
              ariaLabelledBy="title"
            >
              <span className="h2 block capitalize normalize sm:max-w-[50%] lg:max-w-[65%] mx-auto">
                {banner.halfTitle}
              </span>
            </Typography>

            <Typography
              tag="h6"
              text={banner.paragraph}
              className="first-letter:capitalize mb-[var(--space-20-30)] sm:max-w-[45%] lg:max-w-[65%] mx-auto"
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
