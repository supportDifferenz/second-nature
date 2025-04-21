import HeroSection from '@/components/pageSections/transitionDiet/HeroSection'
import TransitionPlan from '@/components/pageSections/transitionDiet/TransitionPlan'
import MainLayout from '@/components/templates/MainLayout'
import React from 'react'

export default function TransitionDiet() {
  return (
    <MainLayout>
        <HeroSection />
        <TransitionPlan />
    </MainLayout>
  )
}
