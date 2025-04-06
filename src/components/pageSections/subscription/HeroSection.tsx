import HeroBanner from "@/components/organism/heroBanner/HeroBanner";
import React from "react";

export default function HeroSection() {
  const banners = [
    {
      id: "1",
      image: {
        web: "/images/subscription-hero-banner-web.webp",
        tablet: "/images/subscription-hero-banner-web.webp",
        mobile: "/images/subscription-hero-banner-mob.webp",
      },
      captionColor: "#00683D",
      title: "Healthy, Ready-to-Serve ",
      halfTitle: "Premium Pet Food Delivered",
      bannerThemeColor: "#00683D",
      buttonText: "sign up today",
      buttonLink: "#",

    },
  ];
  return (
    <div>
    
        <HeroBanner banners={banners} align="right" isTitleHierarchyRegular = {true}  hasButton/>
    </div>
  );
}
