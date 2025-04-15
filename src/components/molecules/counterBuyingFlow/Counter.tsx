'use client';

import Typography from '@/components/atoms/typography/Typography';
import React, { useState } from 'react';

interface CounterProps {
  label: string;
  min?: number;
  max?: number;
  defaultValue?: number;
}

export default function Counter({
  label,
  min = 0,
  max = 100,
  defaultValue = 0
}: CounterProps) {
  const [value, setValue] = useState<number>(defaultValue);

  const handleDecrease = () => {
    if (value > min) setValue(value - 1);
  };

  const handleIncrease = () => {
    if (value < max) setValue(value + 1);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = parseInt(e.target.value, 10);
    if (!isNaN(newValue)) {
      if (newValue >= min && newValue <= max) {
        setValue(newValue);
      }
    } else {
      setValue(0); // Reset if invalid
    }
  };

  return (
    <div className='flex items-center justify-between w-full max-w-80 sm:max-w-96 px-7 h-[var(--space-60-80)] bg-white rounded-full border border-[#A1A1A1] '>
      <div className='flex items-center gap-4'>
        <button
          onClick={handleDecrease}
          className='text-primary-dark font-medium text-lg focus:outline-none cursor-pointer'
        >
          <Typography tag='h3' text='-' className='text-primary-dark' />
        </button>
        <input
          type='number'
          value={value}
          onChange={handleInputChange}
          className='w-12 text-center font-bold text-primary-dark bg-transparent border-none focus:outline-none focus:ring-0'
        />
        <button
          onClick={handleIncrease}
          className='text-primary-dark font-medium text-lg focus:outline-none cursor-pointer'
        >
          <Typography tag='h3' text='+' className='text-primary-dark' />
        </button>
      </div>
      <div>
        <Typography tag='h6' text={label} className='text-primary-dark' />
      </div>
    </div>
  );
}
