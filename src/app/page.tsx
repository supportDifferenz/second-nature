
"use client";

import BehindTheScenes from "@/components/pageSections/landingPage/BehindTheScenes";
import FAQSection from "@/components/pageSections/landingPage/FAQSection";
import FooterBannerCTASection from "@/components/pageSections/landingPage/FooterBannerCTASection";
import HeroSection from "@/components/pageSections/landingPage/HeroSection";
import Marquee from "@/components/pageSections/landingPage/Marquee";
import MealsAndTreats from "@/components/pageSections/landingPage/Meals&Treats";
import MealTransition from "@/components/pageSections/landingPage/MealTransition";
import OurIngredients from "@/components/pageSections/landingPage/OurIngredients";
import Testimonial from "@/components/pageSections/landingPage/Testimonial";
import TrustedByVets from "@/components/pageSections/landingPage/TrustedByVets";
import MainLayout from "@/components/templates/MainLayout";
import React from "react";

export default function Home() {

  return (
    <MainLayout>
      <div className="relative z-[6]">
        <HeroSection />
      </div>

      <div className="-mt-(--space-30-60) relative z-[6]">
        <Marquee speed={19} />
      </div>

      <div className=" pt-(--space-50-99) pb-(--space-120-180)">
        <OurIngredients />
      </div>

      <TrustedByVets />

      <div className="pt-(--space-120-180)">
        <MealsAndTreats />
      </div>

      <div className="py-(--space-120-180)">
        <MealTransition />
      </div>

      <BehindTheScenes />

      <div className="py-(--space-120-180)">
        <Testimonial />
      </div>

      <FooterBannerCTASection />

      <div className="py-(--space-120-180)">
        <FAQSection />
      </div>



    </MainLayout>
  );
}
