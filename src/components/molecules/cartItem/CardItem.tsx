import Typography from "@/components/atoms/typography/Typography";
import Image from "next/image";
import React from "react";

export default function CardItem() {
  return (
    <div className="flex">
      <div className="w-[23.3vw] lg:w-[13.22vw] h-full">
        <Image
          src="/images/cart-cardboard.webp"
          alt="meal bowl"
          className="!static inset-0 w-full !h-full object-cover object-center"
          fill
        />
      </div>
      <div className="flex flex-col gap-[var(--space-8-17)] mt-[var(--space-8-30)]">
        <div>
          <Typography
            tag="h6"
            text="Jackey’s Plan"
            className="text-primary-dark"
          />
          <Typography
            tag="sub"
            text="Regular Plan"
            className="text-primary-dark "
          />
        </div>
        <div>
          <Typography
            tag="sub"
            text="Chicken Bowl"
            className=""
          />
        </div>
      </div>
      <div className="ml-auto mt-[var(--space-8-30)]">
        <Typography tag="h6" text="400.00 QAR" className="text-primary-dark" />
      </div>
    </div>
  );
}
