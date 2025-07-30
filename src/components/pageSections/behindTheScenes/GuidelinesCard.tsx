"use client";

import Typography from "@/components/atoms/typography/Typography";
import Image from "next/image";
import { motion } from "framer-motion";
import React from "react";

export default function GuidelinesCard() {
  return (
    <section>
      <div className="container">
        <div className="flex flex-col lg:flex-row border border-primary rounded-2xl overflow-hidden  mt-[var(--space-100-200)]">
          <div className="w-full lg:w-[50%] relative ">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              viewport={{ once: true }}
              className="h-full"
            >
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
                  className=" text-white whitespace-nowrap "
                />
                <Typography
                  tag="h2"
                  text="Driven By Love"
                  className="highlight  text-white text-center  "
                />
              </div>

            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="w-full relative lg:w-[50%] gap-[var(--space-30-40)] p-6 sm:p-16 flex flex-col "
          >
            <div className="flex flex-col items-center max-[575px]:mt-[-75px] mt-[-100px] sm:mt-0 lg:items-center sm:flex-row gap-7">
              <div className="w-[15.6vw] sm:w-[8.6vw] lg:w-[70px]">
                <Image
                  src="/images/fediaf.webp"
                  alt="mission"
                  className="!static w-full inset-0 z-100 h-full object-contain object-center"
                  fill
                />
              </div>
              <Typography
                tag="p"
                text=""
                className="text-primary-dark  text-center sm:text-start lg:max-w-[352px]"
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

            <div className="flex flex-col gap-[var(--space-10-15)] ">
              <Typography tag="text" text="" className="text-start max-[575px]:text-center">
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

              <Typography tag="text" text="" className="text-start max-[575px]:text-center">
                They are rooted in rigorous research and incorporate the latest
                advancements in pet nutrition science. By working closely with
                professionals across Europe,
                <Typography tag="span" text=" FEDIAF" className="font-bold" />{" "}
                ensures that their standards provide safe, balanced, and
                high-quality nutrition for cats and dogs at every life stage.
              </Typography>
            </div>

            <div className="flex flex-wrap justify-center sm:justify-between gap-y-7 sm:gap-y-0">

              <div className="flex items-center gap-2 lg:gap-3 pr-5 sm:pr-[var(--space-8-17)]">
                <div className="w-10 h-10 lg:w-10 lg:h-10">
                  <Image
                    src="/icons/safe.svg"
                    alt="mission"
                    className="!static  w-full !h-full  object-center"
                    fill
                  />
                </div>
                <Typography tag="p" text="Safe" className="uppercase font-bold text-secondary-1 text-start lg:text-sm max-[575px]:text-[14px]" />
              </div>

              <div className="border-r border-[#79D2A7] my-1.5"></div>

              <div className="flex items-center pl-5 sm:px-[var(--space-8-17)]  gap-2 lg:gap-3 ">
                <div className="w-10 h-10 lg:w-10 lg:h-10">
                  <Image
                    src="/icons/balance-scale.svg"
                    alt="mission"
                    className="!static w-full !h-full  object-center"
                    fill
                  />
                </div>
                <Typography tag="text" text="Balanced" className="uppercase font-bold text-secondary-1 text-start max-[575px]:text-[14px] lg:text-sm" />
              </div>

              <div className="sm:border-r border-[#79D2A7] my-1.5"></div>

              <div className="flex items-center pl-[var(--space-8-17)]  gap-2 lg:gap-3 ">
                <div className="w-10 h-10 lg:w-10 lg:h-10">
                  <Image
                    src="/icons/nutritional-carrot.svg"
                    alt="mission"
                    className="!static w-full !h-full  object-center"
                    fill
                  />
                </div>
                <Typography tag="text" text="High-Quality" className="uppercase font-bold text-secondary-1 text-start lg:text-sm max-[575px]:text-[14px]" />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
