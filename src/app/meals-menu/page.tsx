import HeroSection from '@/components/pages/mealsMenu/HeroSection'
import MealBody from '@/components/pages/mealsMenu/MealBody'
import MainLayout from '@/components/templates/MainLayout'
import React from 'react'

export default function page() {
  return (
    <MainLayout>
        <HeroSection />
        <MealBody/>
    </MainLayout>
  )
}
