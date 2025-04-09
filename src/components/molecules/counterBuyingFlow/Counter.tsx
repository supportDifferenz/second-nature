import Typography from '@/components/atoms/typography/Typography'
import React from 'react'

interface CounterProps {
  label: string
}

export default function Counter({ label }: CounterProps) {
  return (
    <div className='flex items-center justify-between w-full max-w-80 sm:max-w-96 px-7 h-[var(--space-60-80)] bg-white rounded-full border border-[#A1A1A1] shadow-sm'>
      <div className='flex items-center'>
        <button className='text-primary-dark font-medium text-lg focus:outline-none'>
          <Typography tag='h3' text='-' className='text-primary-dark' />
        </button>
        <input className='w-12 text-center font-bold text-primary-dark bg-transparent border-none focus:outline-none focus:ring-0' />
        <button className='text-primary-dark font-medium text-lg focus:outline-none'>
          <Typography tag='h3' text='+' className='text-primary-dark' />
        </button>
      </div>
      <div>
        <Typography tag='h6' text={label} className='text-primary-dark' />
      </div>
    </div>
  )
}
