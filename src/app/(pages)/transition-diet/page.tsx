"use client";

import Typography from "@/components/atoms/typography/Typography";
import FooterCTASection from "@/components/pageSections/transitionDiet/FooterCTASection";
import HeroSection from "@/components/pageSections/transitionDiet/HeroSection";
import TransitionPlan from "@/components/pageSections/transitionDiet/TransitionPlan";
import MainLayout from "@/components/templates/MainLayout";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

const footerCtaData = {
  mealTransition: {
    title: "Meal",
    highlight: "Transition",
    paragraph:
      "Gradually introduce our fresh meals to ensure a smooth adjustment and lasting benefits for your furry child",
    imageSrc: "/images/meal-transition.webp",
  },
  petFood: {
    title: "Begin Your Pet’s",
    highlight: "Meal Journey",
    paragraph:
      "Check out our nutrient-rich and irresistibly delicious Cat Bowls for optimal feline health and wellness!",
    imageSrc: "/images/multiple-pet.webp",
  },
};

export default function TransitionDiet() {
  const petFood = footerCtaData.petFood;

  return (
    <MainLayout>
      <HeroSection />
      <div className="flex flex-col gap-[var(--space-110-140)]">
        <TransitionPlan />
        <FooterCTASection />
      </div>
      <motion.div
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <div className="pb-0 pt-[var(--space-110-140)] sm:py-(--space-120-180) lg:overflow-x-hidden">
          <div className="flex flex-col items-center justify-center  h-[142vw] sm:h-[28.2vw] lg:h-[18.38vw] w-[90vw] sm:w-full lg:max-w-[80.2vw] mx-auto relative">
            <div className="bg-[#FBE5C7] sm:px-[3.12vw] pt-10 sm:py-[var(--space-52-86)] lg:py-0  w-full rounded-t-2xl h-[110%] sm:h-[80%] flex flex-col sm:justify-center">
              {/* <PetFoodLookingTitle
                className="text-secondary-1 px-12 sm:pl-0 sm:pr-[35%]"
                title={petFood.title}
                highlight={petFood.highlight}
                paragraph={petFood.paragraph}
                textColor="text-secondary-1"
                textAlign="left"
              /> */}
              <div className=" w-fit flex flex-col sm:flex-row sm:gap-10 lg:gap-16 px-[] items-center sm:items-start  text-center sm:text-left mx-auto sm:mr-auto">
                <Typography
                  tag="h2"
                  className="capitalize text-secondary-1 lg:w-[35%]"
                  text="Begin Your Pet’s"
                  role="title"
                  ariaLabelledBy="title"
                >
                  <span
                    className="highlight block"
                    role="title"
                    aria-labelledby="title"
                  >
                    Meal Journey
                  </span>
                </Typography>

                <Typography
                  tag="h6"
                  text="Lorem ipsum dolor sit amet consectetur. Diam pharetra id aliquet ultricies nullam. Condimentum est lacinia gravida cursus nulla. Lorem ipsum dolor sit amet consectetur. "
                  className="w-[72%] max-sm:mt-5 sm:w-[35%] lg:w-[38%]"
                />
              </div>
              <Button
                variant={"primaryBtn"}
                className="mx-auto max-sm:mt-7 mt-[8.4vw] sm:hidden"
              >
                Know More
              </Button>
            </div>
            <div className="flex items-center px-[3.12vw]  sm:sm:px-[3.12vw] w-full h-[20%] lg:h-[30%] rounded-b-2xl bg-secondary-1">
              <div className="max-sm:hidden lg:w-[35%] lg:mr-16"></div>
              <Button
                size={"md"}
                variant={"secondaryBtnTextSecondary1"}
                className="hidden sm:block"
                // className="hidden sm:block lg:ml-[35%]"
              >
                Learn More
              </Button>
            </div>
            <div className="absolute top-[62%] sm:top-auto left-[16%] sm:left-auto sm:right-[-5%] bottom-[-5%] sm:bottom-[-10%] inset-0 w-[60.5vw] sm:w-[36vw] lg:w-[28.22vw]">
              <Image
                alt=""
                src={petFood.imageSrc}
                fill
                className={"!static inset-0 !h-full object-contain"}
              />
            </div>
          </div>
        </div>
      </motion.div>
    </MainLayout>
  );
}
