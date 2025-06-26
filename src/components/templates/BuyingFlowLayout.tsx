"use client";

import { ReactNode } from "react";
import Header from "../organism/header/Header";
import CheckoutProgressBar from "../molecules/checkoutProgressBar/CheckoutProgressBar";
import { usePetStore } from "@/zustand/store/petDataStore";
import { Button } from "@/components/ui/button";
import Typography from "../atoms/typography/Typography";

export default function BuyingFlowLayout({
  children,
  step,
}: {
  children: ReactNode;
  step: number;
}) {

  const { pets, selectedPetIndex, removePet } = usePetStore();
  // const petNames = Object.values(pets).map((pet) => pet.name);

  return (
    <>
      <Header isOnlyBrandHeader={true} />
      <main className="mt-3">
        <div className="portrait:min-h-[500px] portrait:h-[98dvh] landscape:min-h-[450px] landscape:h-[calc(95dvh-110px)] landscape:max-h-[800px] flex flex-col items-center justify-start ">
          <div className="container mb-4 text-center  w-full ">
            <CheckoutProgressBar currentStep={step} />
          </div>
          {/* pets name */}
          <ul className="flex items-center gap-5 pt-[5dvh] pb-[3dvh]">
            {pets.length > 0 ? (
              pets.map((pet, index) => (
                <Typography 
                  key={index} 
                  tag="p"
                  text={pet.name}
                  className={`relative px-2 font-bold text-[15px] sm:text-[20px] ${index === selectedPetIndex ? "text-[#944446] underline underline-[#944446]" : ""}`}
                >
                  <Button
                    type="button"
                    size={"icon"}
                    aria-label={`Remove ${name}`}
                    className="absolute -top-4 -right-1 px-1 py-0.5 text-[8px] rounded-full hover:text-[#944446] hover:bg-gray-200 transition"
                    onClick={() => removePet(pet.id)}
                  >
                    X
                  </Button>
                </Typography>
                // <li 
                //   key={index} 
                //   className={`relative px-2 font-bold underline ${ index === selectedPetIndex ? "text-[#944446] underline-[#944446]" : ""}`}
                // >
                //   {pet.name}
                //   <Button
                //     type="button"
                //     size={"icon"}
                //     aria-label={`Remove ${name}`}
                //     className="absolute -top-4 -right-1 px-1 py-0.5 text-[8px] rounded-full hover:text-[#944446] hover:bg-gray-200 transition"
                //     onClick={() => removePet(pet.id)}
                //   >
                //     X
                //   </Button>
                // </li>
              ))
            ) : (
              <Typography 
                tag="p"
                text="No pets added yet"
                className="font-bold"
              />
            )}     
          </ul>
          <div className="container  grow  flex flex-col">{children}</div>
        </div>
      </main>
    </>
  );
}
