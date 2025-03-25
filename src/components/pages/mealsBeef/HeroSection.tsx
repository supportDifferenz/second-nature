import HeroBanner from "@/components/organism/bannerCarousel/HeroBanner";
import React from "react";

export default function HeroSection() {
  const banners = [
    {
      id: "1",
      image: {
        web: "/images/meal-beef-banner.webp",
        tablet: "/images/meal-beef-banner-mob.webp",
        mobile: "/images/meal-beef-banner-mob.webp",
      },
      captionColor: "#424242",
      title: "Delivering Love & Nutrition,",
      halfTitle: "One Bowl at a Time",
      paragraph: "From our kitchen to your doorstep,nutrition made simple",
      paragraphColor: "#fff",
      bannerThemeColor: "#fff",
    },
  ];
  return <HeroBanner banners={banners} align="center" />;
}
