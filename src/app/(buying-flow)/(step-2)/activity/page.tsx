"use client";
import Typography from "@/components/atoms/typography/Typography";
import BuyingFlowLayout from "@/components/templates/BuyingFlowLayout";
import { useState, useEffect } from "react";
import PetActiveCard from "@/components/molecules/petActiveCard/PetActiveCard";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { usePetStore } from "@/zustand/store/petDataStore";

export default function Page() {

  const router = useRouter();

  const { pets, selectedPetIndex, setPetDetails } = usePetStore();
  const selectedPet = selectedPetIndex !== null ? pets[selectedPetIndex] : null; // Handle null case for selectedPetIndex
  const currentPetId = selectedPet ? selectedPet.id : null;
  const selectedPetName = selectedPet ? selectedPet.name : null;
  const activityLevel = selectedPet ? selectedPet.activityLevel : "";

  const [selectedActivity, setSelectedActivity] = useState("");

  const handleNext = (e: React.FormEvent) => {
    e.preventDefault();
    if (selectedActivity && currentPetId) {
      setPetDetails(currentPetId, { activityLevel: selectedActivity })
      router.push("/choose-our-plans");
    }
  }

  useEffect(() => {
    if (activityLevel) {
      setSelectedActivity(activityLevel);
    }
  },[activityLevel])

  console.log("Selected pet in activity page is", selectedPet);

  return (
    <BuyingFlowLayout step={2}>

      <div className="flex flex-col items-center gap-8 bg-white">
        <Typography
          tag="h3"
          // text="How active is Jackey?"
          text={`How active is ${selectedPetName}?`}
          className="text-center text-primary-dark"
        />
        <div className="w-full mx-auto items-center justify-center flex flex-wrap lg:gap-[var(--space-20-60)] ">
          <PetActiveCard
            image="/images/sedentary.webp"
            text="SEDENTARY"
            selectedPet={selectedActivity === "sedentary"}
            setSelectedCharacter={() => setSelectedActivity("sedentary")}
          />
          <PetActiveCard
            image="/images/less-acive.webp"
            text="LESS-ACTIVE"
            selectedPet={selectedActivity === "lessActive"}
            setSelectedCharacter={() => setSelectedActivity("lessActive")}
          />
          <PetActiveCard
            image="/images/active-pet.webp"
            text="ACTIVE"
            selectedPet={selectedActivity === "active"}
            setSelectedCharacter={() => setSelectedActivity("active")}
          />
        </div>
      </div>

      {/* Navigation */}
      <div className="pb-[3dvh] flex justify-between items-center gap-4 lg:gap-0 lg:items-end pt-[3dvh]">
        <Button
          variant={"outlineSecondaryBtn"}
          className="gap-2.5  lg:ml-[-55px]"
          onClick={(e) => {
            e.preventDefault();
            router.push("/weight");
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
          disabled={!selectedActivity}
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
