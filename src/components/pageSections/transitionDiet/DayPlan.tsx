// DayPlan.tsx
import React from "react";
import Image from "next/image";
import Typography from "@/components/atoms/typography/Typography";

interface DayPlanProps {
  image: string;
  days: string;
  text: string;
}

export default function DayPlan({ image, days, text }: DayPlanProps) {
  return (
    <div className="flex flex-col gap-6 w-[79.43vw] sm:w-[35vw] lg:w-[17.7vw] lg:h-[13.6vw] p-9 rounded-xl bg-primary-light">
      <div className="w-40 relative "> {/* You need to specify a height when using next/image with fill */}
        <Image
          src={image}
          fill
          alt={`Transition plan for ${days}`}
          className="!static w-full h-full object-cover object-center"
        />
      </div>
      <div className="flex flex-col gap-2.5"> 
        <Typography
          tag="h5"
          text={`Day ${days}`}
          className="uppercase text-primary-dark"
        />
        <div className="w-10 border-b border-[#949494]"></div>
        <Typography tag="h6" text={text} />
      </div>
    </div>
  );
}
