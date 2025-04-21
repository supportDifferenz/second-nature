import React from 'react'
import FooterBannerCTA from '@/components/organism/footerBannerCTA/FooterBannerCTA'

export default function FooterCTASection() {
  return (
    <FooterBannerCTA
     id="footer-banner"
        image={{
          web: "/images/transition-footer-CTA-banner-web.webp",
          tablet: "/images/transition-footer-CTA-banner-mob.webp",
          mobile: "/images/transition-footer-CTA-banner-mob.webp",
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
        align="center" 

    />
  )
}
