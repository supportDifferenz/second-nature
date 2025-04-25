"use client";

import Typography from '@/components/atoms/typography/Typography'
import BuyingFlowLayout from '@/components/templates/BuyingFlowLayout'
import React from 'react'
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function Page() {

  const router = useRouter();

  return (
    <BuyingFlowLayout step={2}>

      <div className="flex flex-col items-center gap-8 bg-white"  >
        <Typography tag="h3" text="Add more pets?" className="text-center text-primary-dark" />
        <div className="mx-auto items-center justify-center flex flex-wrap border border-[#A1A1A1] rounded-full px-[var(--space-80-100)] py-[var( --space-10-15)] gap-2.5 lg:gap-3.5 ">
          <Typography tag="h6" text="Add more pets" className="text-center text-primary-dark" />
          <Typography tag="h3" text="+" className="text-center text-primary-dark" />
          
        </div>
      </div>

      {/* Navigation */}
      <div className="pb-[3dvh] flex justify-end items-center gap-4 lg:gap-0 lg:items-end pt-[3dvh]">
        <Button 
          className="gap-2.5 lg:ml-auto lg:mr-[-55px]" 
          // disabled
          onClick={(e) => {
            e.preventDefault();
            router.push("/choose-our-plans");
          }}
        >
          Skip
          <div className="w-5 relative">
            <Image
              src="/icons/arrow-next-long.svg"
              alt="icon"
              fill
              className="!static w-full object-contain"
            />
          </div>
        </Button>
      </div>

    </BuyingFlowLayout>
  )
}
