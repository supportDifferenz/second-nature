import Image from "next/image";
import React from "react";
import { PetFoodLookingTitle } from "../molecules/titleSyles/Title";
import { Button } from "../ui/button";

export default function PetFoodLooking() {
  return (
    <div className="flex flex-col items-center justify-center rounded-2xl overflow-hidden h-[175vw] sm:h-[31.2vw] w-[90vw] sm:w-[38.5vw] relative">
      <div className="bg-[#FBE5C7] sm:px-[3.12vw] py-[var(--space-52-86)] w-full h-[80%]">
        <PetFoodLookingTitle
          className="text-secondary-1"
          title="Looking for"
          highlight="Cat Food?"
          paragraph="Check out our nutrient-rich and irresistibly delicious Cat Bowls for optimal feline health and wellness!"
          textColor="text-secondary-1"
          textAlign="left"
        />
        <Button variant={"primaryBtn"} className="mx-auto mt-[8.4vw] sm:hidden">
          Know More
        </Button>
      </div>
      <div className="flex items-center px-[3.12vw] w-full h-[20%] bg-secondary-1">
        <Button variant={"secondaryGreenBtn"} className="hidden sm:block">
          Know More
        </Button>
      </div>
      <div className="absolute top-[38%] sm:top-[10%] sm:left-[40%] inset-0 w-[99.5vw] sm:w-[26.3vw] h-[124vw] sm:h-[32.8vw]">
        <Image
          alt=""
          src={"/images/cat.webp"}
          fill
          className={"!static inset-0 !h-full"}
        />
      </div>
    </div>
  );
}
