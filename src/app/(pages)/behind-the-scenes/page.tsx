import FooterCtaCard from "@/components/organism/footerCtaCard/FooterCtaCard";
import GuidelinesCard from "@/components/pageSections/behindTheScenes/GuidelinesCard";
import HeroSection from "@/components/pageSections/behindTheScenes/HeroSection";
import NutritionalGuidelines from "@/components/pageSections/behindTheScenes/NutritionalGuidelines";
import FooterBannerCta from "@/components/pageSections/howToFeed/FooterBannerCta";
import MainLayout from "@/components/templates/MainLayout";
import React from "react";

export default function BehindTheScenes() {
  const footerCtaData = {
    mealTransition: {
      title: "Meal",
      highlight: "Transition",
      paragraph:
        "Gradually introduce our fresh meals to ensure a smooth adjustment and lasting benefits for your furry child",
      imageSrc: "/images/meal-transition-red.webp",
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
    <div>
      <MainLayout>
        <HeroSection />

        <NutritionalGuidelines />
        <GuidelinesCard />

        <div className="py-(--space-120-180)">
          <FooterBannerCta />
        </div>
        <div className="pb-(--space-120-180) overflow-x-hidden">
                <FooterCtaCard
                  mealTransition={footerCtaData.mealTransition}
                  petFood={footerCtaData.petFood}
                  ImageWrapperClassName="sm:w-[29.9vw]"
                />
              </div>
      </MainLayout>
    </div>
  );
}
