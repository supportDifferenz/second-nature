"use client";

import Typography from "@/components/atoms/typography/Typography";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

interface ReadyToServeProps {
  image: string;
  text: string;
}

interface TipItem {
  icon: string;
  title: string;
  description: string;
}

const readyToServeData: ReadyToServeProps[] = [
  {
    image: "/images/thermometer-cold.svg",
    text: "Freeze",
  },
  {
    image: "/images/snow.svg",
    text: "Thaw",
  },
  {
    image: "/images/package-open.svg",
    text: "Open",
  },
  {
    image: "/images/rice-bowl.svg",
    text: "Serve",
  },
];

const thawingTips: TipItem[] = [
  {
    icon: "/icons/snow.svg",
    title: "Refrigerate Overnight",
    description:
      "Place the portion from the freezer into the refrigerator to thaw safely overnight.",
  },
  {
    icon: "/icons/timer.svg",
    title: "Quick Thaw Option",
    description:
      "In a hurry? Place the sealed portion in a bowl of cold water and allow it to thaw for 30 minutes to an hour.",
  },
  {
    icon: "/icons/rice-bowl.svg",
    title: "Pour & Devour",
    description:
      "Place the meal portion in your pet’s bowl and watch her or him enjoy, do it hot or cold.",
  },
];

const handlingTips: TipItem[] = [
  {
    icon: "/icons/cleaning-bucket.svg",
    title: "Clean Surfaces",
    description:
      "Always clean feeding bowls, utensils, and preparation surfaces before and after handling Second Nature.",
  },
  {
    icon: "/icons/hand-sanitizer.svg",
    title: "Wash Hands",
    description:
      "Thoroughly wash your hands with soap and warm water after <br> handling the food.",
  },
  {
    icon: "/icons/refrigerator.svg",
    title: "Store Properly",
    description:
      "Any unused thawed food should be refrigerated and consumed within 24 hours.",
  },
];

function TipsList({ tips }: { tips: TipItem[] }) {
  return (
    <>
      {tips.map((tip, index) => (
        <React.Fragment key={index}>
          <motion.div
            className="flex flex-col gap-2 lg:w-[21.35vw] items-center justify-center"
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.6,
              delay: index * 0.2,
              ease: "easeOut",
            }}
          >
            <div className="flex gap-2.5 items-center">
              <div className="w-[var(--space-30-40)] relative">
                <Image
                  src={tip.icon}
                  fill
                  alt={tip.title}
                  className="!static w-full h-full object-cover object-center"
                />
              </div>
              <Typography
                tag="h6"
                text={tip.title}
                className="text-secondary-1 font-bold"
              />
            </div>
            <p
              className="text-black text-center lg:w-[86%]"
              dangerouslySetInnerHTML={{ __html: tip.description }}
            ></p>
          </motion.div>
          {index < tips.length - 1 && (
            <hr className="w-[110px] border-secondary-2" />
          )}
        </React.Fragment>
      ))}
    </>
  );
}

export default function ReadyToServe() {
  return (
    <div className="flex flex-col gap-[var(--space-30-115)]">
      <div className="relative flex flex-col justify-center items-center bg-[#FDFEFA] border border-secondary-1 rounded-2xl pt-[var(--space-68-110)] pb-[107vw] sm:pb-[24.06vw] lg:pb-[14.06vw]">
        <div className="flex flex-col items-center mb-16 sm:mb-11 lg:mb-9 w-[79%] sm:w-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Typography
              tag="h5"
              text="From Our Kitchen to Yours:"
              className="text-primary-dark"
            />
            <Typography
              tag="h2"
              className="highlight text-primary-dark"
              text="Ready-to-Serve Meals"
            />
          </motion.div>
        </div>

        {/* Cold serve section */}
        <div className="flex max-[575px]:gap-2 gap-[var(--space-20-45)] mb-[var(--space-50-60)] items-center">
          {readyToServeData.map((item, index) => (
            <React.Fragment key={index}>
              <motion.div
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.2,
                }}
                viewport={{ once: true }}
              >
                <div className="flex flex-col sm:flex-row gap-[var(--space-8-17)] items-center">
                  <div className="max-[575px]:w-[30px] w-[var(--space-40-60)] relative">
                    <Image
                      src={item.image}
                      fill
                      alt={item.text}
                      className="!static w-full h-full object-cover object-center"
                    />
                  </div>
                  <Typography
                    tag="h6"
                    text={item.text}
                    className="text-secondary-1 max-[575px]:text-[12px]"
                  />
                </div>
              </motion.div>

              {index < readyToServeData.length - 1 && (
                <motion.div
                  className="w-[var(--space-15-30)] relative"
                  key={`arrow-${index}`}
                  initial={{ opacity: 0, y: 60 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.6,
                    delay: index * 0.2,
                  }}
                  viewport={{ once: true }}

                >
                  <Image
                    src="/images/rightArrow.svg"
                    fill
                    alt="Arrow"
                    className="!static w-full h-full object-cover object-center"
                  />
                </motion.div>
              )}
            </React.Fragment>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="flex justify-center"
        >
          <Typography
            tag="h6"
            className="text-center w-[82%] sm:w-[65%] lg:w-[54%]"
            text="Put the Bowl packages in the freezer once they are received. We suggest thawing your pet’s meals one night in advance."
          />
        </motion.div>

        <div className="absolute bottom-[-8%] sm:bottom-[-33%] lg:bottom-[-43%] w-[114%] sm:w-[45%] lg:w-[35%]">
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            viewport={{ once: true }}
            className="flex justify-center lg:justify-start w-full"
          >
            <Image
              src="/images/puppy-feeding.webp"
              fill
              alt="Dog image"
              className="!static w-full h-full object-cover object-center"
            />
          </motion.div>
        </div>
      </div>

      {/* Tips Sections */}
      <div className="flex flex-col sm:flex-row gap-7 sm:gap-0 justify-between items-center bg-[#FDFEFA] sm:border border-secondary-1 rounded-2xl sm:pt-[10.5vw] lg:pt-[17.03vw] pb-mob-60 sm:pb-[8.06vw] lg:pb-[7.08vw] lg:px-[9.79vw]">
        {/* Tips for Thawing */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="flex justify-center lg:justify-start w-full"
        >
          <div className="flex-1 border border-secondary-1 rounded-2xl sm:border-none sm:rounded-none pt-[23.8vw] sm:pt-0 pb-[14vw] sm:pb-0">
            <div className="w-fit mx-auto">
              <div className="flex flex-col gap-5 items-center justify-center px-3.5 border-b border-b-primary pb-2.5 w-[63%] sm:w-[72%] lg:w-auto mx-auto">
                <div className="w-[var(--space-80-120)] h-[var(--space-80-120)] relative ">
                  <Image
                    src="/images/thermometer-control.svg"
                    fill
                    alt="Tips for Thawing"
                    className="!static w-full h-full object-cover object-center"
                  />
                </div>
                <Typography
                  tag="h5"
                  text="Tips for Thawing"
                  className="text-black uppercase text-center"
                />
              </div>
              <div className="flex flex-col gap-[var(--space-30-40)] items-center justify-center mt-[var(--space-40-70)] px-3.5 w-[81%] lg:w-auto mx-auto">
                <TipsList tips={thawingTips} />
              </div>
            </div>
          </div>
        </motion.div>

        {/* Tips for Handling */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="flex justify-center lg:justify-start w-full"
        >
          <div className="flex-1 border border-secondary-1 rounded-2xl sm:border-none sm:rounded-none py-11 sm:py-0">
            <div className="w-fit mx-auto">
              <div className="flex flex-col gap-5 items-center justify-center px-3.5 border-b border-b-primary pb-2.5 w-[63%] sm:w-fit lg:w-auto mx-auto">
                <div className="w-[var(--space-80-120)] h-[var(--space-80-120)] relative ">
                  <Image
                    src="/icons/rice-bowl-hand.svg"
                    fill
                    alt="Tips for Handling"
                    className="!static w-full h-full object-cover object-center"
                  />
                </div>
                <Typography
                  tag="h5"
                  text="Tips for Handling"
                  className="text-black uppercase text-center"
                />
              </div>
              <div className="flex flex-col gap-[var(--space-30-40)] items-center justify-center mt-[var(--space-40-70)] px-3.5 w-[81%] lg:w-auto mx-auto">
                <TipsList tips={handlingTips} />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
