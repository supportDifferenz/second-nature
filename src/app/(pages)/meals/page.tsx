"use client";

import React from "react";
import { Suspense } from "react";
import HeroSection from "@/components/pageSections/meals/HeroSection";
import MealBody from "@/components/pageSections/meals/MealBody";
import MainLayout from "@/components/templates/MainLayout";

export default function Meals() {

  return (
    <MainLayout>
      <Suspense fallback={<div>Loading...</div>}>
        <HeroSection />
      </Suspense>
      <Suspense fallback={<div>Loading...</div>}>
        <MealBody />
      </Suspense>
    </MainLayout>
  );
}
