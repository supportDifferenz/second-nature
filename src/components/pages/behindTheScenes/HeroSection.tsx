import HeroBanner from "@/components/organism/heroBanner/HeroBanner";
import React from "react";

export default function HeroSection() {
 const banners = [
     {
       id: "1",
       image: {
         web: "/images/bts-hero-banner-web.webp",
         tablet: "/images/bts-hero-banner-mob.webp",
         mobile: "/images/bts-hero-banner-mob.webp",
       },
      
     },
   ];
   return (
     <section>
       <HeroBanner banners={banners} align="left" bannerHeight="mainHero"  isCarousel />
     </section>
   );
 }
