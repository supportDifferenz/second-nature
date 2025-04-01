import HeroBanner from "@/components/organism/heroBanner/HeroBanner";
import React from "react";

export default function HeroSection() {
  const banners = [
    {
      id: "1",
      image: {
        web: "/images/about-us.webp",
        tablet: "/images/about-us-mob.webp",
        mobile: "/images/about-us-mob.webp",
      },
      captionColor: "#00683D",
      title: "Delivering Love & Nutrition,",
      halfTitle: "One Bowl at a Time",
      paragraph: "From our kitchen to your doorstep,nutrition made simple",
      paragraphColor: "#fff",
      bannerThemeColor: "#fff",
    },
  ];
  return <HeroBanner banners={banners} align="right" />;
}
