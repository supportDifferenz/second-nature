import Typography from '@/components/atoms/typography/Typography'
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import React from 'react'

export default function Payment() {
  return (
    <div className="flex flex-col gap-[var(--space-30-60)]">
      <Typography
        tag="h5"
        text="Shipping Details"
        className="uppercase text-primary-dark"
      />
      <div className='w-[300px]'>
        <Image className='!static inset-0 w-full !h-full object-cover object-center' src="/images/payment-card.webp" alt='payment-card' fill/>
      </div>
      <Button className="w-full">Continue</Button>
    </div>
  )
}
