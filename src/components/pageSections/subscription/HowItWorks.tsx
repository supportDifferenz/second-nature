"use client";

import Typography from "@/components/atoms/typography/Typography";
import Image from "next/image";
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

const HowItWorkHowItWork = [
  {
    id: 1,
    icon: "/icons/how-It-work-steps-icon-1.svg",
    title: "Pick the perfect plan",
    description:
      "We’ll create a meal plan tailored to your pet’s unique needs. Choosing favourite recipes and portion sizes.",
  },
  {
    id: 2,
    icon: "/icons/how-It-work-steps-icon-2.svg",
    title: "Get fresh meals delivered",
    description:
      "Your pet’s meals are delivered straight to your door, and we’ll keep you updated every step of the way.",
  },
  {
    id: 3,
    icon: "/icons/how-It-work-steps-icon-3.svg",
    title: "Stay in control",
    description:
      "Skip a delivery, pause, or cancel your subscription anytime—it’s completely flexible to suit you and your pet!",
  },
];

export default function HowItWorks() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref}>
      <div className="container 2xl:py-30">
        <div className="flex flex-col justify-center items-center mb-20">
          <Typography
            tag="h6"
            text="How it Works"
            className="text-secondary-1 uppercase whitespace-nowrap"
          />
          <Typography
            tag="h2"
            text="Your subscription in"
            className="text-primary-dark"
          />
          <Typography
            tag="h2"
            text="3 Easy Steps"
            className="text-primary-dark highlight whitespace-nowrap"
          />
        </div>
        <div className="flex flex-col lg:flex-row gap-32 sm:gap-36 lg:gap-0 justify-between">
          {HowItWorkHowItWork.map((step, index) => (
            <div
              key={step.id}
              className="relative !overflow-visible flex flex-col items-center text-center border border-secondary-2 rounded-lg p-6 lg:w-[calc(100%/3.5)]"
            >
              <Typography
                tag="span"
                text={`STEP ${step.id}`}
                className="absolute -top-3.5 bg-secondary-2 text-white px-4 py-1 rounded-full font-semibold"
              />
              <div className="w-20 mt-8 relative h-20">
                <Image src={step.icon} alt="icon" fill className="!static" />
              </div>
              <Typography
                tag="h5"
                text={step.title}
                className="mt-3 text-secondary-1"
              />
              <Typography
                tag="h6"
                text={step.description}
                className="mt-3 !font-normal"
              />
              {index !== HowItWorkHowItWork.length - 1 && (
                <>
                  {/* Desktop arrow */}
                  <div className="absolute top-1/2 left-[113%] w-[26%] transform -translate-x-1/2 -translate-y-1/2 hidden lg:block z-[1] overflow-hidden">
                    <motion.div
                      initial={{ width: "0%" }}
                      animate={{ width: isInView ? "100%" : "0%" }}
                      transition={{ duration: 1, ease: "easeInOut" }}
                      className="h-full relative"
                    >
                      <Image
                        src="/icons/long-arrow-right-secondary-2.svg"
                        alt="arrow-desktop"
                        fill
                        className="!static"
                      />
                    </motion.div>
                  </div>

                  {/* Mobile arrow */}
                  <div className="absolute top-[93%] mt-7 left-1/2 w-[12%] sm:w-[6%] transform -translate-x-1/2 lg:hidden z-[1] overflow-hidden">
                    <motion.div
                      initial={{ height: "0%" }}
                      animate={{ height: isInView ? "100%" : "0%" }}
                      transition={{ duration: 1, ease: "easeInOut" }}
                      className="w-full relative"
                    >
                      <Image
                        src="/icons/long-arrow-down-secondary-2.svg"
                        alt="arrow-mobile"
                        fill
                        className="!static"
                      />
                    </motion.div>
                  </div>

                </>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
