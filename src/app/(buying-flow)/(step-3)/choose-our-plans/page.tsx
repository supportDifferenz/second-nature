import Typography from "@/components/atoms/typography/Typography";
import PlanCard from "@/components/pageSections/buyingFlow/step3/choosePlan/PlanCard";
import BuyingFlowLayout from "@/components/templates/BuyingFlowLayout";
import React from "react";

export default function page() {
  return (
    <BuyingFlowLayout step={2}>
      <div className="flex flex-col gap-16">
        <Typography tag="h3" text="Choose Our Plan" className="text-center text-primary-dark" />
        <div className="flex flex-col lg:flex-row justify-center gap-16 lg:gap-[var(--space-20-30)]">
          <PlanCard
            bgColour="bg-[#FDFFF0]"
            offerBadge="Enjoy 25% Off Your First Month!"
          />
          <PlanCard bgColour="bg-white" />
        </div>
      </div>
    </BuyingFlowLayout>
  );
}
