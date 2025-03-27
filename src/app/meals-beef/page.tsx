import HeroSection from '@/components/pages/mealsBeef/HeroSection'
import MealBody from '@/components/pages/mealsBeef/MealBody'
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
