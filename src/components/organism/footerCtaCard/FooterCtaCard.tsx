"use client";

import Image from "next/image";
import React from "react";
import {
  MealTransitionTitle,
  PetFoodLookingTitle,
} from "@/components/molecules/titleSyles/Title";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

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
  const router = useRouter();

  return (
    <div className="flex flex-col sm:flex-row gap-[var(--space-30-60)] w-fit mx-auto max-[991px]:overflow-hidden">
      {/* Meal Transition Card */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        viewport={{ once: true }}
      >
        <div className="flex items-center justify-center h-[93.45vw] sm:h-[55vw] lg:h-[31.2vw] w-[90vw] sm:w-[38.5vw] relative">
          <div className=" absolute h-[93.45vw] sm:h-[55vw] lg:h-auto top-0 z-[-1]">
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
            <Button
              size={"md"}
              variant={"secondaryGreenBtn"}
              onClick={() => router.push("/transition-diet")}
            >
              Learn more about transitioning
            </Button>
          </div>
        </div>
      </motion.div>

      {/* Pet Food Card */}
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="flex flex-col items-center justify-center  h-[142vw] sm:h-[55vw] lg:h-[31.2vw] w-[90vw] sm:w-[38.5vw] relative">
          <div className="bg-[#FBE5C7] sm:px-[3.12vw] max-[575px]:pt-8 py-[var(--space-52-86)] lg:py-10 w-full rounded-t-2xl h-[70%] sm:h-[80%]">
            <PetFoodLookingTitle
              className="text-secondary-1 px-6 sm:px-12 sm:pl-0 sm:pr-[35%] xl:pr-[40%]"
              title={petFood.title}
              highlight={petFood.highlight}
              paragraph={petFood.paragraph}
              textColor="text-secondary-1"
              textAlign="left"
            />
            <Button
              variant={"primaryBtn"}
              className="mx-auto sm:mt-[8.4vw] sm:hidden"
              onClick={() => router.push("/transition-diet")}
            >
              Know More
            </Button>
          </div>
          <div className="flex items-center px-[3.12vw] w-full h-[20%] rounded-b-2xl bg-secondary-1">
            <Button
              size={"md"}
              variant={"secondaryBtnTextSecondary1"}
              className="hidden sm:block"
              onClick={() => router.push("/transition-diet")}
            >
              Learn More
            </Button>
          </div>
          <div className="absolute top-[58%] sm:top-[35%] lg:top-[16%] left-[17%] sm:left-[48%] inset-0 w-[60.5vw] sm:w-[26.3vw] lg:w-max h-auto sm:h-[28vw]">
            <Image
              alt=""
              src={petFood.imageSrc}
              fill
              className={"!static inset-0 !h-full object-contain"}
            />
          </div>
        </div>
      </motion.div>
    </div>
  );
}
