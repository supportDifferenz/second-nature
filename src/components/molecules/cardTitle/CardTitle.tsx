// CardTitle.tsx
import Typography from '@/components/atoms/typography/Typography'
import Image from 'next/image'
import React from 'react'

interface CardTitleProps {
  imageSrc: string
  imageAlt: string
  text: string
}

export default function CardTitle({ 
  imageSrc, 
  imageAlt, 
  text,
}: CardTitleProps) {
  return (
    <div className='flex flex-col items-center  w-[90vw] sm:w-[20.83vw] gap-[var(--space-20-30)]'>
        <div className="w-full">
          <Image
            src={imageSrc}
            alt={imageAlt}
            className="!static inset-0 w-full !h-full object-cover object-center"
            fill
            priority
          />
        </div>
        <Typography className='text-center sm:text-start font-bold lg:text-md' tag='text' text={text} />
    </div>
  )
}