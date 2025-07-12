'use client';

import Typography from '@/components/atoms/typography/Typography';
import React from 'react';

interface CounterProps {
  label: string;
  min?: number;
  max?: number;
  // defaultValue?: number;
  value?: number;
  setValue: (value: number) => void;
  colorClass?: string;
  className1?: string;
  className2?: string;
  className3?: string;
}

export default function Counter({
  label,
  min,
  max,
  // defaultValue,
  value = 0,
  setValue,
  colorClass,
  className1,
  className2,
  className3
}: CounterProps) {

  // const [value, setValue] = useState<number>(defaultValue ?? 0);
  // const [value, setValue] = useState<number>(defaultValue);

  const handleDecrease = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if ((value ?? 0) > (min ?? 0)) setValue((value ?? 0) - 1);
  };

  // const handleDecrease = () => {
  //   if (value > (min ?? 0)) setValue(value - 1);
  // };

  const handleIncrease = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if ((value ?? 0) < (max ?? Infinity)) setValue((value ?? 0) + 1);
  };

  // const handleIncrease = () => {
  //   if (value < max) setValue(value + 1);
  // };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    const newValue = parseInt(e.target.value, 10);
    if (!isNaN(newValue)) {
      if (newValue >= (min ?? 0) && newValue <= (max ?? 100)) {
        setValue(newValue);
      }
      // if (newValue >= min && newValue <= max) {
      //   setValue(newValue);
      // }
    } else {
      setValue(0); // Reset if invalid
    }
  };

  return (
    <div className={`${className1} flex items-center justify-between w-full max-w-80 sm:max-w-96 px-7 h-13 bg-white rounded-full border border-[#A1A1A1]`}>
      <div className={`${className2} flex items-center gap-4`}>
        <button
          onClick={handleDecrease}
          className='text-primary-dark font-medium text-lg focus:outline-none cursor-pointer'
        >
          <Typography tag='h3' text='-' className={`${colorClass} text-primary-dark`} />
        </button>
        <input
          // type='number'
          value={value}
          onChange={handleInputChange}
          className={`${colorClass} ${className3} w-12 text-center font-bold text-primary-dark bg-transparent border-none focus:outline-none focus:ring-0`}
        />
        <button
          onClick={handleIncrease}
          className='text-primary-dark font-medium text-lg focus:outline-none cursor-pointer'
        >
          <Typography tag='h3' text='+' className={`${colorClass} text-primary-dark`} />
        </button>
      </div>
      <div>
        <Typography tag='label' text={label} className={`${colorClass} text-primary-dark h6  `} />
      </div>
    </div>
  );
}
