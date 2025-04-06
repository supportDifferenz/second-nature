import Image from "next/image";
import React from "react";

export default function GuidelinesCard() {
  return (
    <div className="w-full">
      <div>
        <Image
          src="/images/guidlines-card-web.webp"
          alt="mission"
          className="!static inset-0 w-full !h-full object-cover object-center"
          fill
          priority
        />
      </div>
      <div></div>
    </div>
  );
}
