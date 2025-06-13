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
        title="Make the Switch Today!"
        // subTitle="the Gift of Real Food Today!"
        paragraph="Your pet deserves the best. Start their transition to a healthier, natural diet today and see the difference in their energy, health, and happiness."
        paragraphColor="#FFFFFF"
        buttonText="Build your plan"
        buttonLink="/signup"
        bannerThemeColor="#fff"
        align="center" 

    />
  )
}
