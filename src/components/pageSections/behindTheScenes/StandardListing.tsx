import Typography from "@/components/atoms/typography/Typography";
import Image from "next/image";
import React from "react";

interface StandardListingProps {
  image: string;
  title: string;
  description: string;
}

export default function StandardListing({
  image,
  title,
  description,
}: StandardListingProps) {
  return (
    <div className="flex flex-col items-center w-[var(--space-310-400)] gap-5 sm:gap-7">
      <div className="flex flex-col w-fit items-center border-b border-primary">
        <div className="w-[var(--space-66-80)]">
          <Image
            src={image}
            alt="doctor and pet owner"
            className="!static inset-0 !h-full object-cover object-center"
            fill
          />
        </div>
        <Typography
          tag="h6"
          text={title}
          className="uppercase whitespace-nowrap px-2.5 sm:px-5 py-2.5"
        />
      </div>
      <Typography tag="text" text={description} className="text-center" />
    </div>
  );
}
