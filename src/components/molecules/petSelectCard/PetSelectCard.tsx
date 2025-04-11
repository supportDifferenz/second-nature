import Image from "next/image";
import React from "react";
import Typography from "@/components/atoms/typography/Typography";

interface PetSelectCardProps {
  imageSrc: string;
  altText?: string;
  label: string;
}

export default function PetSelectCard({ imageSrc, altText = "petSelectCard", label }: PetSelectCardProps) {
  return (
    <div className="flex flex-col items-center bg-[#FDFFF0] border border-secondary-1 rounded-2xl pt-[var(--space-34-38)] w-[var(--space-110-140)] h-[var(--space-110-140)]">
      <div className="flex flex-col items-center justify-center w-[38%] lg:w-[45%] relative">
        <Image
          src={imageSrc}
          alt={altText}
          className="!static inset-0 w-full !h-full object-cover object-center"
          fill
        />
      </div>
      <Typography
        tag="sub"
        text={label}
        className="text-center uppercase font-bold mt-[var(--space-3-5)]"
      />
    </div>
  );
}
