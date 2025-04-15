import Typography from '@/components/atoms/typography/Typography'
import BuyingFlowLayout from '@/components/templates/BuyingFlowLayout'
import React from 'react'

export default function page() {
  return (
    <BuyingFlowLayout step={2}>
      <div className="flex flex-col items-center gap-8 bg-white"  >
        <Typography tag="h3" text="Add more pets?" className="text-center text-primary-dark" />
        <div className="mx-auto items-center justify-center flex flex-wrap border border-[#A1A1A1] rounded-full px-[var(--space-80-100)] py-[var( --space-10-15)] gap-2.5 lg:gap-3.5 ">
          <Typography tag="h6" text="Add more pets" className="text-center text-primary-dark" />
          <Typography tag="h3" text="+" className="text-center text-primary-dark" />
          
        </div>
      </div>
    </BuyingFlowLayout>
  )
}
