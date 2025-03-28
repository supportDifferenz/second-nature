import Image from "next/image";
import React from "react";
import { MealTransitionTitle } from "../molecules/titleSyles/Title";
import { Button } from "../ui/button";

export default function MealTransition() {
  return (
    <div className="flex items-center justify-center h-[93.45vw] sm:h-[31.2vw] w-[90vw] sm:w-[38.5vw] relative">
      <div className=" absolute h-[93.45vw] sm:h-auto top-0 z-[-1]">
        <Image
          src="/images/meal-transition.webp"
          alt="Hero Banner"
          className="!static inset-0 w-full !h-full rounded-2xl object-cover object-center"
          fill
          priority
        />
      </div>
      <div className="flex flex-col items-center gap-[var(--space-20-45)]">
        <MealTransitionTitle
          highlight="Transition"
          className="text-white"
          title="Meal"
          paragraph="Gradually introduce our fresh meals to ensure a smooth adjustment and lasting benefits for your furry child"
          textAlign="center"
          textColor="#fff"
        />
        <Button variant={"secondaryGreenBtn"}>Learn more about transitioning </Button>
      </div>
    </div>
  );
}
