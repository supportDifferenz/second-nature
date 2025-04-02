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
      title: "Helping fur babies thrive ",
      halfTitle: "One Bowl at a Time",
      paragraph: "Crafted with Care for Healthier, Happier Pets",
      paragraphColor: "#944446",
      bannerThemeColor: "#00683D",
    },
  ];
  return <HeroBanner banners={banners} align="right" bannerHeight="subHero"/>;
}
