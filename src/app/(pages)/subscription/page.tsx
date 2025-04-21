import FooterBannerCTA from "@/components/organism/footerBannerCTA/FooterBannerCTA";
import FooterCtaCard from "@/components/organism/footerCtaCard/FooterCtaCard";
import FaqSection from "@/components/pageSections/subscription/FaqSection";
import FeaturesItems from "@/components/pageSections/subscription/FeaturesItems";
import HeroSection from "@/components/pageSections/subscription/HeroSection";
import HowItWorks from "@/components/pageSections/subscription/HowItWorks";
import OurMealPlans from "@/components/pageSections/subscription/OurMealPlans";
import MainLayout from "@/components/templates/MainLayout";
import React from "react";

export default function Subscription() {
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
      <div className="py-(--space-120-180) ">
        <FeaturesItems />
      </div>
      <div className="bg-[linear-gradient(180deg,#F9FAF1_39.88%,#F5F5F5_100%)] pt-(--space-120-180)">
        <HowItWorks />
        <OurMealPlans />
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
          buttonLink="/signup"
          bannerThemeColor="#fff"
          align="center"
        />
      </div>

      <div className="py-(--space-120-180)">
        <FooterCtaCard
          mealTransition={footerCtaData.mealTransition}
          petFood={footerCtaData.petFood}
          ImageWrapperClassName="sm:w-[29.9vw]"
        />
      </div>
    </MainLayout>
  );
}
