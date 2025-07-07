"use client";

import FooterBannerCTA from "@/components/organism/footerBannerCTA/FooterBannerCTA";
import FooterCtaCard from "@/components/organism/footerCtaCard/FooterCtaCard";
import HeroSection from "@/components/pageSections/howToFeed/HeroSection";
import ReadyToServe from "@/components/pageSections/howToFeed/ReadyToServe";
import MainLayout from "@/components/templates/MainLayout";
import React from "react";
import { motion } from "framer-motion";

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
      <div className="py-(--space-50-99) max-w-[90.65vw] lg:max-w-[80.2vw] mx-auto">
        <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
        <ReadyToServe />
        </motion.div>
      </div>

      <div className="mt-[var(--space-120-180)]">
        <FooterBannerCTA
          id="footer-banner"
          image={{
            web: "/images/WebHowToFeedCTABanner.webp",
            tablet: "/images/WebHowToFeedCTABanner.webp",
            mobile: "/images/MobHowToFeedCTABanner.webp",
          }}
          caption="get started with us"
          captionColor="#fff"
          title="Start Feeding"
          subTitle="Naturally Today!"
          paragraph="Click below to explore our range and start your journey toward better pet nutrition today."
          paragraphColor="#FFFFFF"
          buttonText="Build your plan"
          buttonLink="/signup"
          bannerThemeColor="#fff"
          align="center"
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
