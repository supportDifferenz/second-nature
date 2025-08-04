import Typography from '@/components/atoms/typography/Typography'
import Image from 'next/image'
import React from 'react'

type AlertBarProps = {
  text: string
  selectedCheckBox?: boolean
  setSelectedCheckBox?: (selected: boolean) => void
}

export default function AlertBar({ text, selectedCheckBox, setSelectedCheckBox }: AlertBarProps) {

  return (
    <div className='flex items-center gap-3 bg-[#F7F9EB] rounded-2xl py-[var(--space-15-30)] px-5'>
          { selectedCheckBox
            ? 
              <div 
                className="w-[5.6vw] sm:w-[1.45vw]"
                onClick={() => setSelectedCheckBox && setSelectedCheckBox(!selectedCheckBox)}
              >
                <Image src="/icons/checked.svg" alt="tick" fill className="!static" />
              </div>
            : <div 
                className="w-[5.6vw] sm:w-[1.45vw]"
                onClick={() => setSelectedCheckBox && setSelectedCheckBox(!selectedCheckBox)}
              >
                <Image src="/icons/unChecked.svg" alt="tick" fill className="!static" />
              </div>
          }
        <div>
            <Typography tag="p" text={text} className='font-semibold'/>
        </div>
    </div>
  )
}
