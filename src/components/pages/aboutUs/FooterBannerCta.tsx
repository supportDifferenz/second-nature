import FooterBannerCTA from '@/components/organism/footerBannerCTA/FooterBannerCTA'
import React from 'react'

export default function FooterBannerCta() {
  return (
    <FooterBannerCTA
    id="footer-banner"
    image={{
      web: "/images/about-us-footer-cta.webp",
      tablet: "/images/about-us-footer-cta-mob.webp",
      mobile: "/images/about-us-footer-cta-mob.webp",
    }}
    caption="get started with us"
    captionColor="#fff"
    title="Give Your Fur Baby"
    subTitle="the Gift of Real Food Today!"
    paragraph="Pets deserve better than processed kibble or canned food. Second Nature believes in nourishing your fur baby with fresh meals made from real, human-grade ingredients."
    paragraphColor="#FFFFFF"
    buttonText="Build your plan"
    buttonLink="/signup"
    bannerThemeColor="#fff"
    align="center" // Can be "left", "center", or "right"
  />
  )
}
