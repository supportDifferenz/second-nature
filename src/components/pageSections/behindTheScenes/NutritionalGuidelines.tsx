"use client";

import Typography from "@/components/atoms/typography/Typography";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import StandardListing from "./StandardListing";

const standardsData = [
  {
    image: "icons/nutritional-balance.svg",
    title: "Nutritional Balance",
    description:
      "Complete and balanced nutrition to meet specific dietary needs of pets at various life stages.",
  },
  {
    image: "icons/life-stage.svg",
    title: "Life Stage Suitability",
    description:
      "Formulations must cater to the unique requirements of adult, senior, and sensitive dogs and cats.",
  },
  {
    image: "icons/scientific-basis.svg",
    title: "Scientific Basis",
    description:
      "Recipes are developed based on the latest scientific research.",
  },
  {
    image: "icons/ingredient-quality.svg",
    title: "Ingredient Quality",
    description:
      "All ingredients must meet stringent quality and safety standards, including those for human-grade ingredients.",
  },
  {
    image: "icons/digestibility.svg",
    title: "Digestibility and Palatability",
    description:
      "Pet food must be both digestible and appealing, encouraging consumption for proper nutrient intake.",
  },
  {
    image: "icons/safety-hygiene.svg",
    title: "Safety and Hygiene",
    description:
      "Products must comply with strict European Union regulations regarding food safety, including manufacturing under hygienic conditions.",
  },
  {
    image: "icons/drop-filler.svg",
    title: "No Harmful Additives",
    description:
      "Only approved additives that enhance nutritional value, safety, or palatability are permitted, with no harmful substances allowed.",
  },
  {
    image: "icons/transparency.svg",
    title: "Transparency",
    description:
      "Labels must clearly state the composition, feeding guidelines, and nutritional adequacy, empowering pet owners to make informed decisions.",
  },
];

const durations = [0.4, 0.8, 0.6, 0.7, 0.5, 0.9, 0.6, 0.8];

export default function NutritionalGuidelines() {
  return (
    <div className="relative ">
      <div className="container">
        <div className="relative h-[500px] lg:h-[45vw] lg:max-h-[650px]  ">
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-[40%] z-[10] flex flex-col items-center justify-center w-[460px] h-[460px]">
            {/* White Blurred Circle Behind */}
            <div className="absolute inset-0 rounded-full bg-white border border-primary z-0" />

            {/* Logo */}
            <div className="relative z-10 sm:mt-[-100px] w-[15.6vw] sm:w-[6.6vw]">
              <Image
                src="/images/fediaf.webp"
                alt="mission"
                className="!static w-full inset-0 h-full object-contain object-center"
                fill
              />
            </div>

            {/* Typography Content on Top of Blur */}
            <div className="absolute inset-0 bg-white opacity-100 blur-[25px] z-0 w-full lg:w-[50vw] h-[25vh] lg:h-[23vh] top-2/6 lg:top-2/6 lg:-translate-x-1/6 lg:rounded-3xl">
              {" "}
            </div>
            <div className="relative z-10 flex flex-col items-center justify-center gap-2 text-center px-4 lg:mt-10">
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <Typography
                  tag="h1"
                  text="Exceptional Nutrition."
                  className="highlight lg:whitespace-nowrap text-primary-dark"
                />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <Typography
                  tag="h2"
                  text="Built on FEDIAF Guidelines."
                  className="text-primary-dark text-center px-2"
                />
              </motion.div>
            </div>
          </div>
        </div>
      </div>


      {/* standard section */}
      <div className="bg-[linear-gradient(to_bottom,_#F7F9EB_0%,_#FFFFFF_100%)] ">
        <div className="relative flex w-full justify-center container">
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 max-[575px]:-translate-y-[60%] -translate-y-[40%] w-[95%] sm:w-[73%]">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Image
                src="/images/nutritional-guidelines.webp"
                alt="doctor and pet owner"
                className="!static inset-0 !h-full object-cover object-center"
                fill
              />
            </motion.div>
          </div>

          <div className="flex flex-col gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="flex flex-col  items-center gap-[var(--space-26-32)] w-[72%] sm:w-[50%] mt-[33%]"
            >
              <div className="flex gap-2">
                <Typography tag="h2" text="Our" className="text-primary-dark" />
                <Typography
                  tag="h2"
                  text="Standards"
                  className="highlight text-primary-dark"
                />
              </div>
              <Typography
                tag="h6"
                text="Second Nature"
                className="text-center font-bold"
              >
                <Typography
                  tag="span"
                  className="font-medium"
                  text=" proudly adheres to the FEDIAF Nutritional Guidelines, ensuring every meal we create is safe, balanced, and tailored to meet your pet's unique needs."
                />
              </Typography>
            </motion.div>

            {/* standards list section */}
            <div className="flex flex-wrap justify-center gap-y-12 sm:gap-y-[70px] sm:gap-x-[60px]">
              {standardsData.map((item, index) => (
                <StandardListing
                  key={index}
                  image={item.image}
                  title={item.title}
                  description={item.description}
                  motionProps={{
                    transition: { duration: durations[index] ?? 0.6 },
                  }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
