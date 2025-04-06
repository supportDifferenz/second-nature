"use client";

import React, { useState, useEffect } from "react";
import { cva, VariantProps } from "class-variance-authority";
import { FooterBannerCTAPropsType } from "@/components/types/type";
import Image from "next/image";
import Typography from "@/components/atoms/typography/Typography";
import { Button } from "@/components/ui/button";

const footerCTAVariants = cva(
  "relative flex flex-col w-full bg-cover bg-center transition-all",
  {
    variants: {
      align: {
        left: " items-start text-left ",
        center: "  items-center text-center ",
        right: "items-end text-right  ",
      },
    },
    defaultVariants: {
      align: "center",
    },
  }
);

const getResponsiveImage = (image: { web: string; mobile: string }) => {
  return window.innerWidth < 768 ? image.mobile : image.web;
};

const FooterBannerCTA: React.FC<
  FooterBannerCTAPropsType & VariantProps<typeof footerCTAVariants>
> = ({
  id,
  image,
  caption,
  captionColor,
  title,
  paragraph,
  paragraphColor,
  subTitle,
  buttonText,
  // buttonTextColor,
  buttonLink,
  align,
}) => {
  const [activeImage, setActiveImage] = useState(image.web);

  useEffect(() => {
    const updateImage = () => setActiveImage(getResponsiveImage(image));
    updateImage(); // Set correct image on mount
    window.addEventListener("resize", updateImage);
    return () => window.removeEventListener("resize", updateImage);
  }, [image]);

  return (
    <section id={id} className={` bg-blue-500 relative py-[35%] sm:py-[9%] lg:py-[6%]`}>
      <div className="w-full absolute top-0 left-0 h-full">
        <Image
          src={activeImage}
          alt="Footer CTA Banner"
          fill
          className="!static w-full !h-full object-cover"
        />
      </div>
      <div className={`relative z-10 container text-white ${footerCTAVariants({ align })}`}>
        <div className={`max-w-[95%] sm:max-w-[70%] lg:max-w-[55%] ${footerCTAVariants({ align })}`}>
          {caption && (
            <Typography
              tag="h5"
              text={caption}
              className="mb-2.5 uppercase subtitle !font-normal"
              style={{ color: captionColor }}
            />
          )}

          {title && <Typography tag="h2" text={title} className="highlight" />}

          {subTitle && (
            <Typography
              tag="h2"
              text={subTitle}
              className="supporting capitalize"
            />
          )}
          {paragraph && (
            <p className="mt-(--space-24-45)" style={{ color: paragraphColor }}>
              {paragraph}
            </p>
          )}
          {buttonText && buttonLink && (
            <Button
              // href={buttonLink}
              variant={"secondaryBtnTextPrimaryDark"}
              size={"md"}
              className="mt-(--space-24-45)"
            >
              {buttonText}
            </Button>
          )}
        </div>
      </div>
    </section>
  );
};

export default FooterBannerCTA;
