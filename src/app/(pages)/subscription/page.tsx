import FeaturesItems from "@/components/pageSections/subscription/FeaturesItems";
import HeroSection from "@/components/pageSections/subscription/HeroSection";
import HowItWorks from "@/components/pageSections/subscription/HowItWorks";
import OurMealPlans from "@/components/pageSections/subscription/OurMealPlans";
import MainLayout from "@/components/templates/MainLayout";
import React from "react";

export default function Subscription() {
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
