'use client';

import React, { useEffect, useState } from 'react';
import Typography from '@/components/atoms/typography/Typography';

interface CounterProps {
  label: string;
  value?: number;
  setValue: (value: number) => void;
  colorClass?: string;
  className1?: string;
  className2?: string;
  className3?: string;
  step?: number;
  min?: number;
  max?: number;
}

export default function Counter({
  label,
  value = 0,
  setValue,
  colorClass = '',
  className1 = '',
  className2 = '',
  className3 = '',
  step = 0,
  min = 0,
  max = 1000,
}: CounterProps) {
  const [inputValue, setInputValue] = useState(value.toString());

  useEffect(() => {
    setInputValue(value.toString());
  }, [value]);

  const handleDecrease = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const newValue = value - step;
    if (newValue >= min) {
      setValue(newValue);
    } else if (newValue < min) {
      setValue(min);
    }
  };

  const handleIncrease = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const newValue = value + step;
    if (newValue <= max) {
      setValue(newValue);
    } else if (newValue > max) {
      setValue(max);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let raw = e.target.value;

    // Parse input
    const parsed = parseFloat(raw);

    // Clamp immediately if over max
    if (!isNaN(parsed) && parsed > max) {
      raw = max.toString();
      setInputValue(raw);
      setValue(max);
      return;
    }

    // Allow partial inputs like "10."
    setInputValue(raw);

    if (!isNaN(parsed)) {
      const clamped = Math.max(min, parsed);
      setValue(clamped);
    }
  };

  const handleBlur = () => {
    const parsed = parseFloat(inputValue);
    if (isNaN(parsed)) {
      setInputValue(min.toString());
      setValue(min);
    } else {
      const clamped = Math.max(min, Math.min(parsed, max));
      setInputValue(clamped.toString());
      setValue(clamped);
    }
  };

  return (
    <div
      className={`${className1} flex items-center justify-between w-full max-w-80 sm:max-w-96 px-7 h-13 bg-white rounded-full border border-[#A1A1A1]`}
    >
      <div className={`${className2} flex items-center gap-4`}>
        <button
          onClick={handleDecrease}
          disabled={value <= min}
          className={`text-primary-dark font-medium text-lg focus:outline-none cursor-pointer ${
            value <= min ? 'opacity-50 cursor-not-allowed' : ''
          }`}
        >
          <Typography tag='h3' text='-' className={`${colorClass} text-secondary-1`} />
        </button>

        <input
          type="number"
          step={step}
          value={
            parseFloat(inputValue) % 1 === 0
              ? parseFloat(inputValue).toFixed(0)
              : parseFloat(inputValue).toFixed(1)
          }
          onChange={handleInputChange}
          onBlur={handleBlur}
          min={min}
          max={max}
          className={`${colorClass} ${className3} w-12 lg:w-14 text-center font-bold text-[#6b6b6b] bg-transparent border-none input-no-spinner focus:outline-none focus:ring-0`}
        />

        <button
          onClick={handleIncrease}
          disabled={value >= max}
          className={`text-primary-dark font-medium text-lg focus:outline-none cursor-pointer ${
            value >= max ? 'opacity-50 cursor-not-allowed' : ''
          }`}
        >
          <Typography tag='h3' text='+' className={`${colorClass} text-secondary-1`} />
        </button>
      </div>
      <div>
        <Typography tag='label' text={label} className={`${colorClass} text-primary-dark h6`} />
      </div>
    </div>
  );
}
