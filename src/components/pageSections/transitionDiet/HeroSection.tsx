import HeroBanner from '@/components/organism/heroBanner/HeroBanner';
import React from 'react'

export default function HeroSection() {
    const banners = [
        {
          id: "1",
          image: {
            web: "/images/transition-diet-hero-banner-web.webp",
            tablet: "/images/transition-diet-hero-banner-mob.webp",
            mobile: "/images/transition-diet-hero-banner-mob.webp",
          },
          // captionColor: "#00683D",
          // title: "One Step at a Time",
          // caption: "Transition Diet",
          // bannerThemeColor: "#00683D",
          // buttonText: "sign up today",
          // buttonLink: "#",
        },
      ];
      return (
        <section>
          <HeroBanner banners={banners} align="center" bannerHeight="mainHero"  isCarousel />
        </section>
      );
    }
