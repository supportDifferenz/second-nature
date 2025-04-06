import AboutUsBody from "@/components/pageSections/aboutUs/AboutUsBody";
import HeroSection from "@/components/pageSections/aboutUs/Herosection";
import MainLayout from "@/components/templates/MainLayout";
import React from "react";

export default function AboutUs() {
  return (
    <MainLayout>
      <HeroSection />
      <AboutUsBody />
    </MainLayout>
  );
}
