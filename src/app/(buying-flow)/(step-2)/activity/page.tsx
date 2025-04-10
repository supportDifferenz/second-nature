"use client";
import Typography from "@/components/atoms/typography/Typography";
import BuyingFlowLayout from "@/components/templates/BuyingFlowLayout";
import { useState } from "react";
import PetActiveCard from "@/components/molecules/petActiveCard/PetActiveCard";

export default function Page() {
  const [selectedPet, setSelectedPet] = useState<
    "sedentary" | "less-active" | "active" | ""
  >("");
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
    </BuyingFlowLayout>
  );
}
