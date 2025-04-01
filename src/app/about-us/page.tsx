import AboutUsBody from '@/components/pages/aboutUs/AboutUsBody'
import HeroSection from '@/components/pages/aboutUs/Herosection'
import MainLayout from '@/components/templates/MainLayout'
import React from 'react'

export default function page() {
  return (
    <MainLayout>
                <HeroSection />
                <AboutUsBody />
        
    </MainLayout>
  )
}
