"use client";

import Typography from "@/components/atoms/typography/Typography";
import BuyingFlowLayout from "@/components/templates/BuyingFlowLayout";
import { Button } from "@/components/ui/button";
import clsx from "clsx";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { usePetStore } from "@/zustand/store/petDataStore";

// type Gender = "Male" | "Female";

const GenderPage = () => {
  
  const options = ["Male", "Female"];

  const router = useRouter();

  const { pets, selectedPetIndex, setPetDetails } = usePetStore();
  const selectedPet = selectedPetIndex !== null ? pets[selectedPetIndex] : null; // Handle null case for selectedPetIndex
  console.log("Selected Pet in gender page is ", selectedPet);
  const currentPetId = selectedPet ? selectedPet.id : null; // Get the current pet ID
  const selectedPetName = selectedPet ? selectedPet.name : null;
  const selectedPetGender = selectedPet ? selectedPet.gender : "";
  const [gender, setGender] = useState("");

  const handleNext = (e: React.FormEvent) => {
    e.preventDefault();
    if (gender && currentPetId) {
      setPetDetails(currentPetId, { gender: gender.toLowerCase() as 'male' | 'female' });
      router.push("/breed");
    } else if ( selectedPetGender ) {
      router.push("/breed");
    } else {
      router.push("/gender");
    }
  };

  useEffect(() => {
    if (selectedPetGender) {
      setGender(selectedPetGender);
    }
  },[selectedPetGender])

  return (
    <BuyingFlowLayout step={1}>
      <form className="flex-1 flex flex-col">
        {/* Content Section */}
        <div className="h-full  flex-1 flex flex-col justify-center items-center">
          <Typography
            tag="h2"
            text={`${selectedPetName}'s Gender`}
            className="text-primary-dark mb-5 sm:mb-14 text-center"
          />

          {/* Gender Selector */}
          <div className="flex items-center gap-2.5 sm:gap-8   w-full sm:w-[70%] lg:w-[50%] xl:w-[45%] 2xl:w-full max-w-[683px]">
            {options.map((option) => {
              const isSelected = gender.toLowerCase() === option.toLowerCase();
              console.log("isSelected in gender page is", isSelected,"gender is", gender.toLowerCase(), "option is",option.toLowerCase());
              return (
                <button
                  key={option}
                  type="button"
                  onClick={() => setGender(option)}
                  className={clsx(
                    "flex-1 flex items-center justify-between   h-13 sm:h-15 px-4 sm:px-6 cursor-pointer rounded-full transition-colors duration-200",
                    isSelected
                      ? "bg-green-800 text-white"
                      : "bg-gray-100 text-green-800"
                  )}
                >
                  <Typography
                    tag="span"
                    text={option}
                    className="h5 block grow text-left"
                  />
                  <div className="min-w-min  w-6 h-6">
                    {isSelected ? (
                      <Image
                        src="/icons/checked-primary-dark.svg"
                        alt="checked"
                        fill
                        className="!static w-full"
                      />
                    ) : (
                      <Image
                        src="/icons/unchecked-default.svg"
                        alt="unchecked"
                        fill
                        className="!static w-full"
                      />
                    )}
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Navigation */}
        <div className="pb-[3dvh] flex  justify-between items-center gap-4 lg:gap-0 lg:items-end pt-[3dvh]">
          <Button
            variant={"outlineSecondaryBtn"}
            className="gap-2.5  lg:ml-[-55px]"
            onClick={(e) => {
              e.preventDefault();
              router.push("/dog-or-cat");
            }}
          >
            <div className="w-5 relative">
              <Image
                src="/icons/arrow-prev-long-primary-dark.svg"
                alt="icon"
                fill
                className="!static w-full object-contain"
              />
            </div>
            Back
          </Button>
          <Button 
            className="gap-2.5 lg:ml-auto lg:mr-[-55px]" 
            disabled={!gender}
            onClick={handleNext}
          >
            Next
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
      </form>
    </BuyingFlowLayout>
  );
};

export default GenderPage;
