import Typography from '@/components/atoms/typography/Typography'
import Image from 'next/image'
import React from 'react'

type AlertBarProps = {
  text: string
}

export default function AlertBar({ text }: AlertBarProps) {
  return (
    <div className='flex items-center gap-3 bg-[#F7F9EB] rounded-2xl py-[var(--space-15-30)] px-5'>
        <div className='w-[5.6vw] sm:w-[1.45vw]'>
            <Image src="/icons/secondary-1-tick.svg" alt="tick" fill className="!static" />
        </div>
        <div>
            <Typography tag="span" text={text} />
        </div>
    </div>
  )
}
