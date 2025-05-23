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
          captionColor: "#00683D",
          title: "One Step at a Time",
          caption: "Transition Diet",
          bannerThemeColor: "#00683D",
          buttonText: "sign up today",
          buttonLink: "#",
          paragraph: "lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque ut erat nec enim facilisis efficitur. Donec euismod, nisi vel consectetur interdum, nisl nisi aliquet nunc, eget bibendum nunc nisl euismod nisi.",
          
        },
      ];
      return (
        <section>
          <HeroBanner banners={banners}  bannerHeight="mainHero" hasButton={false} isCarousel />
        </section>
      );
    }
