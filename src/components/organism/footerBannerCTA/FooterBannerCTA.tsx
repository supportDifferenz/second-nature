"use client";

import React, { useState, useEffect, startTransition } from "react";
import { cva, VariantProps } from "class-variance-authority";
import { FooterBannerCTAPropsType } from "@/components/types/type";
import Image from "next/image";
import Typography from "@/components/atoms/typography/Typography";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";

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

const getResponsiveImage = (image: { web: string; tablet: string; mobile: string }) => {
  return window.innerWidth < 576 ? image.mobile : window.innerWidth < 992 ? image.tablet : image.web;
};

type FooterBannerCTAPropsWithSubParagraph = FooterBannerCTAPropsType & {
  subParagraph?: string;
};

const FooterBannerCTA: React.FC<
  FooterBannerCTAPropsWithSubParagraph & VariantProps<typeof footerCTAVariants>
> = ({
  id,
  image,
  caption,
  captionColor,
  title,
  paragraph,
  subParagraph,
  paragraphColor,
  subTitle,
  buttonText,
  // buttonTextColor,
  buttonLink,
  align,
}) => {

    const router = useRouter();

    const [activeImage, setActiveImage] = useState(image.web);

    useEffect(() => {
      const updateImage = () => setActiveImage(getResponsiveImage(image));
      updateImage(); // Set correct image on mount
      window.addEventListener("resize", updateImage);
      return () => window.removeEventListener("resize", updateImage);
    }, [image]);

    return (
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        id={id}
        className={` bg-blue-500 relative py-[35%] sm:py-[9%] lg:py-[6%]`}
      >
        <div className="w-full absolute top-0 left-0 h-full">
          <Image
            src={activeImage}
            alt="Footer CTA Banner"
            fill
            className="!static w-full !h-full object-cover"
          />
        </div>
        <div
          className={`relative z-10 container text-white ${footerCTAVariants({
            align,
          })}`}
        >
          <div
            className={`max-w-[95%] sm:max-w-[70%] lg:max-w-[70%] ${footerCTAVariants(
              { align }
            )}`}
          >
            {caption && (
              <Typography
                tag="h6"
                text={caption}
                className="uppercase subtitle !font-normal"
                style={{ color: captionColor }}
              />
            )}

            {title && <Typography tag="h1" text={title} className="highlight capitalize" />}

            {subTitle && (
              <Typography
                tag="h3"
                text={subTitle}
                className="supporting capitalize mb-(--space-20-30)"
              />
            )}
            {paragraph && (
              <Typography tag="h6" text={paragraph} style={{ color: paragraphColor }} className="xl:max-w-[70%]" />
            )}
            {subParagraph && (
              <Typography tag="p" text={subParagraph} className="!text-sm mt-(--space-24-45) " style={{ color: paragraphColor }} />
            )}
            {buttonText && buttonLink && (
              <Button
                variant={"whiteBtnSecondary2BorderAndText"}
                size={"md"}
                // className="mt-(--space-24-45)"
                className="mt-3.5 lg:mt-5 bg-primary-light"
                onClick={() => {
                  startTransition(() => {
                    router.push(buttonLink);
                  })
                }}
              >
                {buttonText}
              </Button>
            )}
          </div>
        </div>
      </motion.section>
    );
  };

export default FooterBannerCTA;
