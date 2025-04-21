import React from "react";
import Image from "next/image";
import Typography from "@/components/atoms/typography/Typography";

export default function DayPlan() {
  return (
    <div className="flex flex-col gap-6 w-[80%] lg:w-[17.7vw] p-9 rounded-xl bg-primary-light">
      <div className="w-40">
        <Image
          src="/icons/day1-3.svg"
          fill
          alt=""
          className="!static w-full h-full object-cover object-center"
        />
      </div>
      <div className="flex flex-col gap-2.5"> 
        <Typography
          tag="h5"
          text="Day "
          className=" uppercase text-primary-dark"
        >
          &nbsp;
          <Typography tag="span" text="1 - 4" />
        </Typography>
        <div className="w-10 border-b border-[#949494]"></div>
        <Typography
          tag="h6"
          text="Replace 25% of your pet’s current food with Second Nature’s natural food. Mix well and serve."
        />
      </div>
    </div>
  );
}
