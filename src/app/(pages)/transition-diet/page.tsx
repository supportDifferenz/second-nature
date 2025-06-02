import Typography from "@/components/atoms/typography/Typography";
import FooterCTASection from "@/components/pageSections/transitionDiet/FooterCTASection";
import HeroSection from "@/components/pageSections/transitionDiet/HeroSection";
import TransitionPlan from "@/components/pageSections/transitionDiet/TransitionPlan";
import MainLayout from "@/components/templates/MainLayout";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";

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
        <div className="py-(--space-120-180) overflow-x-hidden">
          <div className="flex flex-col items-center justify-center  h-[175vw] sm:h-[31.2vw] w-[90vw] sm:w-full lg:max-w-[80.2vw] mx-auto relative">
            <div className="bg-[#FBE5C7] sm:px-[3.12vw] py-[var(--space-52-86)] w-full rounded-t-2xl h-[80%]">
              {/* <PetFoodLookingTitle
                className="text-secondary-1 px-12 sm:pl-0 sm:pr-[35%]"
                title={petFood.title}
                highlight={petFood.highlight}
                paragraph={petFood.paragraph}
                textColor="text-secondary-1"
                textAlign="left"
              /> */}
                  <div className=" w-fit flex flex-col px-[] items-center sm:items-start text-center sm:text-left mx-auto sm:mr-auto">
                    <Typography
                      tag="h2"
                      className="capitalize text-secondary-1 "
                      text="hjdgjsa"
                      role="title"
                      ariaLabelledBy="title"
                    >
                      <span
                        className="highlight block"
                        role="title"
                        aria-labelledby="title"
                      >
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      </span>
                    </Typography>

                    <Typography
                      tag="h6"
                      text="Lorem ipsum dolor sit amet consectetur adipisicing elit."
                      className=""
                    />
                  </div>
              <Button
                variant={"primaryBtn"}
                className="mx-auto mt-[8.4vw] sm:hidden"
              >
                Know More
              </Button>
            </div>
            <div className="flex items-center px-[3.12vw] w-full h-[20%] rounded-b-2xl bg-secondary-1">
              <Button
                size={"md"}
                variant={"secondaryBtnTextSecondary1"}
                className="hidden sm:block"
              >
                Learn More
              </Button>
            </div>
            <div className="absolute top-[38%] sm:top-[10%] left-[-5%] sm:left-[48%] inset-0 w-[99.5vw] sm:w-[26.3vw] h-[124vw] sm:h-[32.8vw]">
              <Image
                alt=""
                src={petFood.imageSrc}
                fill
                className={"!static inset-0 !h-full"}
              />
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}
