import GuidelinesCard from "@/components/pageSections/behindTheScenes/GuidelinesCard";
import HeroSection from "@/components/pageSections/behindTheScenes/HeroSection";
import NutritionalGuidelines from "@/components/pageSections/behindTheScenes/NutritionalGuidelines";
import MainLayout from "@/components/templates/MainLayout";
import React from "react";

export default function BehindTheScenes() {
  return (
    <div>
      <MainLayout>
        <HeroSection />

         <NutritionalGuidelines/>
        <GuidelinesCard />
      </MainLayout>
    </div>
  );
}
