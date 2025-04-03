import HeroSection from "@/components/pages/meals/HeroSection";
import MealBody from "@/components/pages/meals/MealBody";
import MainLayout from "@/components/templates/MainLayout";
import React from "react";

export default function page() {
  return (
    <MainLayout>
      <HeroSection />
      <MealBody />
    </MainLayout>
  );
}
