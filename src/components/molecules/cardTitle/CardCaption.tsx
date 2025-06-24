// CardCaption.tsx
import Typography from "@/components/atoms/typography/Typography";
import Image from "next/image";
import React from "react";

interface CardCaptionProps {
  imageSrc: string
  imageAlt: string
  heading: string
  subText: string
}

export default function CardCaption({
  imageSrc,
  imageAlt,
  heading,
  subText,
}: CardCaptionProps) {
  return (
    <div className="flex flex-col items-center w-[90vw] sm:w-[30.93vw] gap-[var(--space-20-30)]">
      <div className="w-full">
        <Image
          src={imageSrc}
          alt={imageAlt}
          className="!static inset-0 w-full !h-full object-cover object-center"
          fill
          priority
        />
      </div>
      <div className="flex flex-col gap-2.5">
        <Typography
          className="text-start text-primary-dark !font-normal"
          tag="h5"
          text={heading}
        />
        <Typography
          className="text-start font-bold"
          tag="text"
          text={subText}
        />
      </div>
    </div>
  );
}