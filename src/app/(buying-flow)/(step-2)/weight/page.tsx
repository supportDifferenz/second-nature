"use client";

import Typography from "@/components/atoms/typography/Typography";
import BuyingFlowLayout from "@/components/templates/BuyingFlowLayout";
import React,{ useState } from "react";
import Counter from "@/components/molecules/counterBuyingFlow/Counter";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { usePetStore } from "@/zustand/store/petDataStore";

export default function Page() {

  const router = useRouter();

  const { pets, selectedPetIndex, setPetDetails } = usePetStore();
  const selectedPet = selectedPetIndex !== null ? pets[selectedPetIndex] : null; // Handle null case for selectedPetIndex
  const currentPetId = selectedPet ? selectedPet.id : null; // Get the current pet ID
  const selectedPetName = selectedPet ? selectedPet.name : null;
  const currentWeightFromStore = selectedPet ? selectedPet.currentWeight : 0;
  const targetWeightFromStore = selectedPet ? selectedPet.targetWeight : 0;

  const [ currentWeight, setCurrentWeight ] = useState(currentWeightFromStore);
  const [ targetWeight, setTargetWeight ] = useState(targetWeightFromStore);

  console.log("Selected pet in weight page is", selectedPet);

  const handleNext = (e: React.FormEvent) => {
    e.preventDefault();
    if (currentWeight && targetWeight &&currentPetId) {
      setPetDetails(currentPetId, { currentWeight: currentWeight, targetWeight: targetWeight });
      router.push("/activity");
    }
  }

  return (
    <BuyingFlowLayout step={2}>

        <div className="flex flex-col items-center gap-8 bg-white"  >
          <Typography 
            tag="h3" 
            // text="Jackey’s Weight and Target Weight"
            text={`${selectedPetName}'s Weight and Target Weight`}
            className="text-center text-primary-dark" 
          />
          <div className="w-full mx-auto items-center justify-center flex flex-col lg:flex-row gap-4">
          <Counter label="Weight" min={0} max={100} value={currentWeight} setValue={setCurrentWeight} />
          <Counter label="Target Weight" min={0} max={100} value={targetWeight} setValue={setTargetWeight} />
          </div>
        </div>

        {/* Navigation */}
        <div className="pb-[3dvh] flex  justify-between items-center gap-4 lg:gap-0 lg:items-end pt-[3dvh]">
          <Button
            variant={"outlineSecondaryBtn"}
            className="gap-2.5  lg:ml-[-55px]"
            onClick={(e) => {
              e.preventDefault();
              router.push("/age");
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
            disabled={!currentWeight || !targetWeight}
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

    </BuyingFlowLayout>
  );
}