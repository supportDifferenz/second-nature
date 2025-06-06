import React from "react";
import HeroBanner from "@/components/organism/heroBanner/HeroBanner";

export default function HeroSection() {
  const banners = [
    {
      id: "1",
      image: {
        web: "/images/how-to-feed-banner.webp",
        tablet: "/images/how-to-feed-banner-mob.webp",
        mobile: "/images/how-to-feed-banner-mob.webp",
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
  ];
  return (
    <section>
      <HeroBanner banners={banners} align="right" bannerHeight="mainHero"  isCarousel />
    </section>
  );
}
