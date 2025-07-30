"use client";

import FooterBannerCTA from "@/components/organism/footerBannerCTA/FooterBannerCTA";
import FooterCtaCard from "@/components/organism/footerCtaCard/FooterCtaCard";
import FaqSection from "@/components/pageSections/subscription/FaqSection";
import FeaturesItems from "@/components/pageSections/subscription/FeaturesItems";
import HeroSection from "@/components/pageSections/subscription/HeroSection";
import HowItWorks from "@/components/pageSections/subscription/HowItWorks";
import OurMealPlans from "@/components/pageSections/subscription/OurMealPlans";
import MainLayout from "@/components/templates/MainLayout";
import React from "react";
import useAuthStore from "@/zustand/store/authDataStore";

export default function Subscription() {

  const isAuthenticated = useAuthStore((state) => state.isAuthenticated);

  const footerCtaData = {
    mealTransition: {
      title: "Meal",
      highlight: "Transition",
      paragraph:
        "Gradually introduce our fresh meals to ensure a smooth adjustment and lasting benefits for your furry child",
      imageSrc: "/images/meal-transition.webp",
    },
    petFood: {
      title: "Begin Your Pet’s",
      highlight: "Meal Journey",
      paragraph:
        "Check out our nutrient-rich and irresistibly delicious Cat Bowls for optimal feline health and wellness!",
      imageSrc: "/images/multiple-pet.webp",
    },
  };

  return (
    <MainLayout>
      <HeroSection />
      <div className="py-(--space-50-99)">
        <FeaturesItems />
      </div>
      <div className="bg-[linear-gradient(180deg,#F9FAF1_39.88%,#F5F5F5_100%)] pt-25">
        <HowItWorks />
        <div className="pt-(--space-120-180)">
          <OurMealPlans />
        </div>
      </div>
      <div className="mt-[var(--space-120-180)]">
        <FaqSection />
      </div>
      <div className="mt-[var(--space-120-180)]">
        <FooterBannerCTA
          id="footer-banner"
          image={{
            web: "/images/subscription-footer-CTA-banner-web.webp",
            tablet: "/images/subscription-footer-CTA-banner-mob.webp",
            mobile: "/images/subscription-footer-CTA-banner-mob.webp",
          }}
          caption="get started with us"
          captionColor="#fff"
          title="Give Your Fur Baby"
          subTitle="the Gift of Real Food Today!"
          paragraph="Pets deserve better than processed kibble or canned food. Second Nature believes in nourishing your fur baby with fresh meals made from real, human-grade ingredients."
          paragraphColor="#FFFFFF"
          buttonText="Build your plan"
          buttonLink={isAuthenticated ? "/location" : "/user-details"}
          // buttonLink="/location"
          bannerThemeColor="#fff"
          align="center"
          buttonTextColor="#FFFFFF"
          buttonBg="#00683D"
          buttonBorder="#FFFFFF"
        />
      </div>

      <div className="py-(--space-120-180) overflow-x-hidden">
        <FooterCtaCard
          mealTransition={footerCtaData.mealTransition}
          petFood={footerCtaData.petFood}
          ImageWrapperClassName="sm:w-[29.9vw]"
        />
      </div>
    </MainLayout>
  );
}
