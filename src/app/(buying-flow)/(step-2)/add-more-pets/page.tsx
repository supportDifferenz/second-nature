import Typography from '@/components/atoms/typography/Typography'
import BuyingFlowLayout from '@/components/templates/BuyingFlowLayout'
import React from 'react'

export default function page() {
  return (
    <BuyingFlowLayout step={2}>
      <div className="flex flex-col items-center gap-8 bg-white"  >
        <Typography tag="h3" text="Add more pets?" className="text-center text-primary-dark" />
        <div className="w-full mx-auto items-center justify-center flex flex-wrap lg:gap-14 ">
          sjdsakj
        </div>
      </div>
    </BuyingFlowLayout>
  )
}
