import FeaturesItems from "@/components/pages/subscription/FeaturesItems";
import HeroSection from "@/components/pages/subscription/HeroSection";
import HowItWorks from "@/components/pages/subscription/HowItWorks";
import OurMealPlans from "@/components/pages/subscription/OurMealPlans";
import MainLayout from "@/components/templates/MainLayout";
import React from "react";

export default function page() {
  return (
    <MainLayout>
      <HeroSection />
      <div className="py-(--space-120-180) ">
        <FeaturesItems />
      </div>
      <div className="bg-[linear-gradient(180deg,#F9FAF1_39.88%,#F5F5F5_100%)] pb-(--space-120-180)">
        <HowItWorks />
        <OurMealPlans />
      </div>
    </MainLayout>
  );
}
