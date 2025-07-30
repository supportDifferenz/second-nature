import FooterBannerCTA from '@/components/organism/footerBannerCTA/FooterBannerCTA'
import React from 'react'

export default function FooterBannerCta() {
  return (
    <FooterBannerCTA
    id="footer-banner"
    image={{
      web: "/images/behind-footer-cta.webp",
      tablet: "/images/behind-footer-cta-mob.webp",
      mobile: "/images/behind-footer-cta-mob.webp",
    }}
    caption="get started with us"
    captionColor="#fff"
    title="Your Fur Baby"
    subTitle="Deserves the Best!"
    paragraph="Pets deserve more than processed food—that’s why Second Nature provides fresh, human-grade meals to nourish your fur baby."
    paragraphColor="#FFFFFF"
    buttonText="Build your plan"
    buttonLink="/location"
    bannerThemeColor="#fff"
    align="center" // Can be "left", "center", or "right"
       buttonTextColor="#FFFFFF"
    buttonBg="#944446"
    buttonBorder="#FFFFFF"
  />
  )
}
