"use client";
import Typography from "@/components/atoms/typography/Typography";
import BuyingFlowLayout from "@/components/templates/BuyingFlowLayout";
import { useState } from "react";
import PetActiveCard from "@/components/molecules/petActiveCard/PetActiveCard";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function Page() {

  const [selectedPet, setSelectedPet] = useState<
    "sedentary" | "less-active" | "active" | ""
  >("");

  const router = useRouter();

  return (
    <BuyingFlowLayout step={2}>

      <div className="flex flex-col items-center gap-8 bg-white">
        <Typography
          tag="h3"
          text="How active is Jackey?"
          className="text-center text-primary-dark"
        />
        <div className="w-full mx-auto items-center justify-center flex flex-wrap lg:gap-[var(--space-20-60)] ">
          <PetActiveCard
            image="/images/sedentary.webp"
            text="Sedentary"
            selectedPet={selectedPet === "sedentary"}
            setSelectedCharacter={() => setSelectedPet("sedentary")}
          />
          <PetActiveCard
            image="/images/less-acive.webp"
            text="Sedentary"
            selectedPet={selectedPet === "less-active"}
            setSelectedCharacter={() => setSelectedPet("less-active")}
          />
          <PetActiveCard
            image="/images/active-pet.webp"
            text="Sedentary"
            selectedPet={selectedPet === "active"}
            setSelectedCharacter={() => setSelectedPet("active")}
          />
        </div>
      </div>

      {/* Navigation */}
      <div className="pb-[3dvh] flex justify-between items-center gap-4 lg:gap-0 lg:items-end pt-[3dvh]">
        <Button
          variant={"outlineSecondaryBtn"}
          className="gap-2.5  lg:ml-[-55px] "
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
          // disabled
          onClick={(e) => {
            e.preventDefault();
            router.push("/add-more-pets");
          }}
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
