import FooterCTASection from "@/components/pageSections/transitionDiet/FooterCTASection";
import HeroSection from "@/components/pageSections/transitionDiet/HeroSection";
import TransitionPlan from "@/components/pageSections/transitionDiet/TransitionPlan";
import MainLayout from "@/components/templates/MainLayout";
import React from "react";

export default function TransitionDiet() {
  return (
    <MainLayout>
      <HeroSection />
      <div className="flex flex-col gap-[var(--space-110-140)]">
        <TransitionPlan />
        <FooterCTASection />
      </div>
    </MainLayout>
  );
}
