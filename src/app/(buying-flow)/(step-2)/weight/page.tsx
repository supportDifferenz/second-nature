import Typography from "@/components/atoms/typography/Typography";
import BuyingFlowLayout from "@/components/templates/BuyingFlowLayout";
import React from "react";
import Counter from "@/components/molecules/counterBuyingFlow/Counter";

export default function page() {
  return (
    <BuyingFlowLayout step={2}>
      <div className="flex flex-col items-center gap-8 bg-white"  >
        <Typography tag="h3" text="Jackey’s Weight and Target Weight" className="text-center text-primary-dark" />
        <div className="w-full mx-auto items-center justify-center flex flex-col lg:flex-row gap-4">
        <Counter label="Weight" />
        <Counter label="Target Weight" />
        </div>
      </div>
    </BuyingFlowLayout>
  );
}