import Typography from "@/components/atoms/typography/Typography";
import Image from "next/image";
import React from "react";

export default function GuidelinesCard() {
  return (
    <div className="flex flex-col lg:flex-row border border-primary rounded-2xl overflow-hidden mx-[4.67vw] sm:mx-[10vw]  mt-[var(--space-100-200)]">
      <div className="w-full lg:w-[50%] relative">
        <div className="h-full">
          <Image
            src="/images/guidlines-card.webp"
            alt="mission"
            className="!static w-full !h-full object-cover object-center"
            fill
            priority
          />
        </div>
        <div className="flex flex-col items-center lg:items-start gap-0 absolute top-7 lg:top-14  lg:left-14 w-full">
          <Typography
            tag="h3"
            text="Guided By Science"
            className=" text-white "
          />
          <Typography
            tag="h2"
            text="Driven By Love"
            className="highlight  text-white "
          />
        </div>
      </div>

      <div className="w-full lg:w-[50%] gap-[var(--space-30-40)] p-16 flex flex-col ">
        <div className="flex flex-col sm:flex-row gap-7">
          <div className="w-[15.6vw] sm:w-[6.6vw]">
            <Image
              src="/images/fediaf.webp"
              alt="mission"
              className="!static w-full inset-0 h-full object-contain object-center"
              fill
            />
          </div>
          <Typography
            tag="text"
            text=""
            className="text-primary-dark  text-center sm:text-start"
          >
            At{" "}
            <Typography tag="span" text="Second Nature" className="font-bold" />
            , we proudly align with{" "}
            <Typography
              tag="span"
              text="The FEDIAF Nutritional guidelines"
              className="font-bold"
            />{" "}
            to deliver meals that meet the highest benchmarks in pet care.
          </Typography>
        </div>

        <div className="flex flex-col gap-[var(--space-10-15)]">
          <Typography tag="text" text="" className="text-start">
            These guidelines are developed and regularly updated by,{" "}
            <Typography
              tag="span"
              text="The
            European Pet Food Industry Federation"
              className="font-bold"
            />{" "}
            in collaboration with independent scientific experts and veterinary
            nutritionists.
          </Typography>

          <Typography tag="text" text="" className="text-start">
            They are rooted in rigorous research and incorporate the latest
            advancements in pet nutrition science. By working closely with
            professionals across Europe,
            <Typography tag="span" text=" FEDIAF" className="font-bold" />{" "}
            ensures that their standards provide safe, balanced, and
            high-quality nutrition for cats and dogs at every life stage.
          </Typography>
        </div>

        <div className="flex flex-wrap whitespace-nowrap">

          <div className="flex items-center gap-2.5 pr-[var(--space-8-17)]">
            <div className="w-10 h-10">
              <Image
                src="/icons/safe.svg"
                alt="mission"
                className="!static  w-full !h-full  object-center"
                fill
              />
            </div>
            <Typography tag="text" text="Safe" className="uppercase font-bold text-secondary-1 text-start" />
          </div>

          <div className="flex items-center border-x border-primary px-[var(--space-8-17)] gap-2.5">
            <div className="w-10 ">
              <Image
                src="/icons/balance-scale.svg"
                alt="mission"
                className="!static w-full !h-full  object-center"
                fill
              />
            </div>
            <Typography tag="text" text="Balanced" className="uppercase font-bold   text-secondary-1 text-start" />
          </div>

          <div className="flex items-center pl-[var(--space-8-17)] gap-2.5">
            <div className="w-10 ">
              <Image
                src="/icons/nutritional-carrot.svg"
                alt="mission"
                className="!static w-full !h-full  object-center"
                fill
              />
            </div>
            <Typography tag="text" text="High-Quality" className="uppercase font-bold text-secondary-1 text-start" />
          </div>
        </div>
      </div>
    </div>
  );
}
