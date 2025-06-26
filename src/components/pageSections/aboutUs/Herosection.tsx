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

  const [activeImage, setActiveImage] = useState(banner.image.web);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const updateImage = () => {
      if (typeof window === "undefined") return;
      if (window.innerWidth <= 574) setActiveImage(banner.image.mobile);
      else if (window.innerWidth <= 991) setActiveImage(banner.image.tablet);
      else setActiveImage(banner.image.web);
    };

    setLoading(false);

    updateImage();
    window.addEventListener("resize", updateImage);
    return () => window.removeEventListener("resize", updateImage);
  }, []);

  return (
    <>
      {loading ? (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-white">
          <span className="w-12 h-12 block border-4 border-primary-dark border-t-transparent rounded-full animate-spin"></span>
        </div>
      ) : (
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
                // onLoadingComplete={() => setLoading(false)}
              />
            </div>

            {/* Content */}
            <div className="relative flex pt-[--space-46-95] lg:pt-0 sm:items-center w-full min-h-[200px] max-sm:max-h-[750px] h-[100vh] sm:min-h-[400px] sm:h-[120dvh] lg:min-h-[520px] lg:h-[80dvh] lg:max-h-[1200px] bg-cover bg-center transition-all container sm:justify-end sm:text-left text-center justify-center items-center">
              <div className="flex flex-col items-center lg:items-start text-center lg:text-left mt-auto pb-9 lg:pb-0 lg:mt-0 lg:w-[43%]">
                <Typography
                  tag="h1"
                  className="capitalize highlight mb-[--space-10-20] w-[95%] sm:w-[82%] lg:w-auto"
                  text={banner.title}
                  role="heading"
                  ariaLabel={banner.title}
                  ariaLabelledBy="title"
                >
                  <span className="h3 sm:h2 block capitalize normalize whitespace-nowrap text-center  lg:max-w-[65%]">
                    {banner.halfTitle}
                  </span>
                </Typography>

                <Typography
                  tag="h6"
                  text={banner.paragraph}
                  className="first-letter:capitalize mb-[--space-20-30] mt-4 lg:whitespace-nowrap max-w-[52%] sm:max-w-[45%] lg:max-w-full mr-0"
                  style={{ color: banner.paragraphColor }}
                  role="paragraph"
                  ariaLabel={banner.paragraph}
                  ariaLabelledBy="sub paragraph"
                />
              </div>
            </div>
          </div>
        </section>
      )}
    </>
  );
}
