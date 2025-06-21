import Image from "next/image";
import React from "react";
import {
  MealTransitionTitle,
  PetFoodLookingTitle,
} from "@/components/molecules/titleSyles/Title";
import { Button } from "@/components/ui/button";

// Define the prop types for the component
interface FooterCtaCardProps {
  mealTransition: {
    title: string;
    highlight: string;
    paragraph: string;
    imageSrc: string;
  };
  petFood: {
    title: string;
    highlight: string;
    paragraph: string;
    imageSrc: string;
  };
  ImageWrapperClassName?: string;
}

export default function FooterCtaCard({
  mealTransition,
  petFood,
}: FooterCtaCardProps) {
  return (
    <div className="flex flex-col sm:flex-row gap-[var(--space-30-60)] w-fit mx-auto">
      {/* Meal Transition Card */}
      <div className="flex items-center justify-center h-[93.45vw] sm:h-[31.2vw] w-[90vw] sm:w-[38.5vw] relative">
        <div className=" absolute h-[93.45vw] sm:h-auto top-0 z-[-1]">
          <Image
            src={mealTransition.imageSrc}
            alt="Meal Transition"
            className="!static inset-0 w-full !h-full rounded-2xl object-cover object-center"
            fill
            priority
          />
        </div>
        <div className="flex flex-col items-center gap-[var(--space-20-45)]">
          <MealTransitionTitle
            highlight={mealTransition.highlight}
            className="text-white w-auto px-8 sm:px-24"
            title={mealTransition.title}
            paragraph={mealTransition.paragraph}
            paragraphColor="#fff"
            textAlign="text-center jj"
            textColor="#fff"
          />
          <Button size={"md"} variant={"secondaryGreenBtn"}>
            Learn more about transitioning
          </Button>
        </div>
      </div>

      {/* Pet Food Card */}
      <div className="flex flex-col items-center justify-center  h-[175vw] sm:h-[31.2vw] w-[90vw] sm:w-[38.5vw] relative">
        <div className="bg-[#FBE5C7] sm:px-[3.12vw] py-[var(--space-52-86)] w-full rounded-t-2xl h-[80%]">
          <PetFoodLookingTitle
            className="text-secondary-1 px-12 sm:pl-0 sm:pr-[35%]"
            title={petFood.title}
            highlight={petFood.highlight}
            paragraph={petFood.paragraph}
            textColor="text-secondary-1"
            textAlign="left"
          />
          <Button
            variant={"primaryBtn"}
            className="mx-auto mt-[8.4vw] sm:hidden"
          >
            Know More
          </Button>
        </div>
        <div className="flex items-center px-[3.12vw] w-full h-[20%] rounded-b-2xl bg-secondary-1">
          <Button size={"md"} variant={"secondaryBtnTextSecondary1"} className="hidden sm:block">
            Learn More
          </Button>
        </div>
        <div className="absolute top-[38%] sm:top-[10%] left-[-5%] sm:left-[42%] inset-0 w-[99.5vw] sm:w-[26.3vw] lg:w-max h-[124vw] sm:h-[32.8vw]">
          <Image
            alt=""
            src={petFood.imageSrc}
            fill
            className={"!static inset-0 !h-full"}
          />
        </div>
      </div>
    </div>
  );
}
