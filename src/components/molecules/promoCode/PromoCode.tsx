import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import React from 'react'

export default function PromoCode() {
  return (
    <div className="relative w-full flex items-center gap-2">
    <Input
      placeholder="Referral or promo code"
      className="flex-1"
      variant='dottedInput'
    />
    <Button variant="primaryBtn" className='absolute right-1 ' >
      APPLY
    </Button>
  </div>
  )
}
