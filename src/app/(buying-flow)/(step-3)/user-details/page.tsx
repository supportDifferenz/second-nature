"use client";
import Typography from "@/components/atoms/typography/Typography";
import BuyingFlowLayout from "@/components/templates/BuyingFlowLayout";
// import { useState } from "react";
// import PetActiveCard from "@/components/molecules/petActiveCard/PetActiveCard";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { usePetStore } from "@/zustand/store/petDataStore";

export default function Page() {

  const router = useRouter();

  const { pets, selectedPetIndex } = usePetStore();
  const selectedPet = selectedPetIndex !== null ? pets[selectedPetIndex] : null; // Handle null case for selectedPetIndex
//   const currentPetId = selectedPet ? selectedPet.id : null;
//   const selectedPetName = selectedPet ? selectedPet.name : null;
//   const activityLevel = selectedPet ? selectedPet.activityLevel : "";

//   const [selectedActivity, setSelectedActivity] = useState(activityLevel);

  const handleNext = (e: React.FormEvent) => {
    e.preventDefault();
    // if (selectedActivity && currentPetId) {
    //   setPetDetails(currentPetId, { activityLevel: selectedActivity })
    //   router.push("/add-more-pets");
    // }
    router.push("/checkout");
  }

  console.log("Selected pet in activity page is", selectedPet);

  return (
    <BuyingFlowLayout step={2}>

      <div className="flex flex-col items-center gap-8 bg-white">
        <Typography
          tag="h3"
          text="Your Premium Pet Meal Journey a Click Away"
          className="text-center text-primary-dark"
        />
        <Input
            type="text"
            variant={"roundedEdgeInputLg"}
            className="max-w-[800px] w-[90%] sm:w-[50%] lg:w-[40%] block mx-auto bg-white"
            placeholder="Type Your Name"
            // value={location}
            onChange={() => {
            //   setLocation(e.target.value);
            //   setError(""); // Clear error when typing
            }}
        />
        <Input
            type="text"
            variant={"roundedEdgeInputLg"}
            className="max-w-[800px] w-[90%] sm:w-[50%] lg:w-[40%] block mx-auto bg-white"
            placeholder="Type Your Mail"
            // value={location}
            onChange={() => {
            //   setLocation(e.target.value);
            //   setError(""); // Clear error when typing
            }}
        />
      </div>

      {/* Navigation */}
      <div className="pb-[3dvh] flex justify-between items-center gap-4 lg:gap-0 lg:items-end pt-[3dvh]">
        <Button
          variant={"outlineSecondaryBtn"}
          className="gap-2.5  lg:ml-[-55px]"
          onClick={(e) => {
            e.preventDefault();
            router.push("/choose-our-plans");
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
        //   disabled={!selectedActivity}
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