import Typography from "@/components/atoms/typography/Typography";
import Image from "next/image";
import React from "react";
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
    image: "icons/life-stage.svg",
    title: "Life Stage Support",
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

export default function NutritionalGuidelines() {
  return (
    <div className="relative">
      <div className="h-[var(--space-511-846)]"></div>

      {/* standard section */}
      <div className="relative flex w-full justify-center bg-[linear-gradient(to_bottom,_#F7F9EB_0%,_#FFFFFF_100%)] ">
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-[40%] w-[73%]">
          <Image
            src="/images/nutritional-guidelines.webp"
            alt="doctor and pet owner"
            className="!static inset-0 !h-full object-cover object-center"
            fill
          />
        </div>

        <div className="flex flex-col gap-14 items-center">
          <div className="flex flex-col  items-center gap-[var(--space-26-32)] w-[72%] sm:w-[50%] mt-[33%]">
            <div className="flex gap-2">
              <Typography tag="h3" text="Our" className="text-primary-dark" />
              <Typography
                tag="h3"
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
          </div>

          {/* standard list section */}
          <div className="flex flex-wrap justify-center gap-y-12 sm:gap-y-24 sm:gap-x-28">
            {standardsData.map((item, index) => (
              <StandardListing
                key={index}
                image={item.image}
                title={item.title}
                description={item.description}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
