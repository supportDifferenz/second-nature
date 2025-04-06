import HeroSection from "@/components/pageSections/meals/HeroSection";
import MealBody from "@/components/pageSections/meals/MealBody";
import MainLayout from "@/components/templates/MainLayout";
import React from "react";

export default function Meals() {
  return (
    <MainLayout>
      <HeroSection />
      <MealBody />
    </MainLayout>
  );
}
