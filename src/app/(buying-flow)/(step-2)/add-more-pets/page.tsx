"use client";

import Typography from "@/components/atoms/typography/Typography";
import BuyingFlowLayout from "@/components/templates/BuyingFlowLayout";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { usePetStore } from "@/zustand/store/petDataStore";
import { startTransition } from "react";
import clsx from "clsx";

export default function Page() {
  const router = useRouter();
  const [selectedOption, setSelectedOption] = useState<"yes" | "no" | null>(null);
  const { selectedPetIndex, setSelectedPetIndex } = usePetStore();

  const handleAddAnotherPet = () => {
    setSelectedPetIndex((selectedPetIndex ?? 0) + 1);
    startTransition(() => {
      router.push("/dog-or-cat");
    });
  };

  const handleCheckout = () => {
    startTransition(() => {
      router.push("/checkout");
    });
  };

  const options = [
    {
      value: "no",
      label: "No",
      description: "I don't want to add another pet",
    },
    {
      value: "yes",
      label: "Yes",
      description: "I want to add another pet",
    },
  ];


  return (
    <BuyingFlowLayout step={2}>
      <div className="flex flex-1 flex-col items-center justify-center gap-8 bg-white">
        <Typography tag="h3" text="Add more pets?" className="text-center text-primary-dark" />

        <div className="flex items-center gap-2.5 sm:gap-8 w-full sm:w-[70%] lg:w-[30%] xl:w-[25%] 2xl:w-full max-w-[683px] ">
          {options.map((option, index) => {
            const isSelected = selectedOption === option.value;
            return (
              <div className="flex-1"  key={index}>
                <button
                  key={option.value}
                  type="button"
                  onClick={() => {
                    setSelectedOption(option.value as "yes" | "no");
                    if (option.value === "yes") handleAddAnotherPet();
                  }}
                  className={clsx(
                    "flex-1 flex items-center w-full justify-between px-4 sm:px-6 h-13 cursor-pointer rounded-full transition-colors duration-200 ",
                    isSelected
                      ? "bg-primary-dark text-white border-primary-dark"
                      : "bg-gray-100 text-primary-dark"
                  )}
                >
                  <Typography
                    tag="span"
                    text={option.label}
                    className="h6 caption block grow text-left"
                  />
                  <div className="min-w-min w-[22px] h-[22px] relative shrink-0">
                    <Image
                      src={
                        isSelected
                          ? "/icons/checked-primary-dark.svg"
                          : "/icons/unchecked-default.svg"
                      }
                      alt="selection"
                      fill
                      className="!static w-full object-contain"
                    />
                  </div>
                </button>
                <span className="text-[12px] text-[#818181] text-center block mt-1 max-w-[90px] mx-auto leading-snug">
                  {option.description}
                </span>
              </div>
            );
          })}
        </div>
      </div>

      {/* Navigation */}
      <div className="pb-[3dvh] flex justify-center items-center gap-4 lg:gap-0 lg:items-end pt-[3dvh]">
        <Button
          className="gap-2.5"
          disabled={selectedOption !== "no"}
          onClick={(e) => {
            e.preventDefault();
            handleCheckout();
          }}
        >
          <Typography tag="h6" text="Checkout" className="text-center" />
          <div className="w-5 relative">
            <Image
              src="/icons/arrow-next-long.svg"
              alt="icon"
              fill
              className="!static w-full object-contain"
            />
          </div>
        </Button>
      </div>
    </BuyingFlowLayout>
  );
}
