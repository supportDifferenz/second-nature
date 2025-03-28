import React from "react";
import HeroBanner from "@/components/organism/heroBanner/HeroBanner";

export default function HeroSection() {
  const banners = [
    {
      id: "1",
      image: {
        web: "/images/hero-carousel-banner-web.webp",
        tablet: "/images/hero-carousel-banner-mob.webp",
        mobile: "/images/hero-carousel-banner-mob.webp",
      },
      caption: "introducing",
      captionColor: "#424242",
      title: "real food,",
      halfTitle: "just as nature intended",
      paragraph:
        "freshly prepared and delivered to your door that fuels a life full of happy tails",
      paragraphColor: "#424242",
      buttonText: "know more",
      buttonTextColor: "#944446",
      buttonLink: "#",
      bannerThemeColor: "#00683D",
    },
    {
      id: "2",
      image: {
        web: "/images/hero-carousel-banner-web.webp",
        tablet: "/images/hero-carousel-banner-mob.webp",
        mobile: "/images/hero-carousel-banner-mob.webp",
      },
      caption: "new arrivals",
      captionColor: "#1A1A1A",
      title: "healthy treats,",
      halfTitle: "crafted with love",
      paragraph:
        "wholesome ingredients for a delicious and nutritious experience for your furry friends",
      paragraphColor: "#333333",
      buttonText: "shop now",
      buttonLink: "#",
      bannerThemeColor: "blue",
    },
    {
      id: "3",
      image: {
        web: "/images/hero-carousel-banner-web.webp",
        tablet: "/images/hero-carousel-banner-mob.webp",
        mobile: "/images/hero-carousel-banner-mob.webp",
      },
      caption: "limited edition",
      captionColor: "#0F0F0F",
      title: "seasonal delights,",
      halfTitle: "taste the freshness",
      paragraph:
        "handpicked seasonal ingredients to bring extra joy to every mealtime",
      paragraphColor: "#3A3A3A",
      buttonText: "explore",
      buttonLink: "#",
      bannerThemeColor: "green",
    },
    {
      id: "4",
      image: {
        web: "/images/hero-carousel-banner-web.webp",
        tablet: "/images/hero-carousel-banner-mob.webp",
        mobile: "/images/hero-carousel-banner-mob.webp",
      },
      caption: "special offer",
      captionColor: "#141414",
      title: "exclusive deals,",
      halfTitle: "for your furry companion",
      paragraph:
        "great savings on nutritious meals, because health and happiness should be affordable",
      paragraphColor: "#383838",
      buttonText: "grab now",
      buttonLink: "#",
      bannerThemeColor: "orange",
    },
  ];
  return (
    <section>
      <HeroBanner banners={banners} align="left" isCarousel />
    </section>
  );
}
