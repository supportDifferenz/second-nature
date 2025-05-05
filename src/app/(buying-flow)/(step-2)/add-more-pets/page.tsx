"use client";

import Typography from '@/components/atoms/typography/Typography'
import BuyingFlowLayout from '@/components/templates/BuyingFlowLayout'
import React, { useState} from 'react'
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useRouter } from "next/navigation";
// import { usePetStore } from "@/zustand/store/petDataStore";

export default function Page() {

  const router = useRouter();

  const [ checkout, setCheckout ] = useState(false);

  // const { selectedPetIndex, noOfPets, setSelectedPetIndex } = usePetStore();

  // const handleNextPet = (e: React.MouseEvent<HTMLDivElement>) => {
  //   e.preventDefault();

  //   if((selectedPetIndex ?? 0) < noOfPets - 1){
  //     setSelectedPetIndex((selectedPetIndex ?? 0) + 1);
  //     router.push("/gender")
  //   }
    
  // }

  return (
    <BuyingFlowLayout step={2}>

      <div className="flex flex-col items-center gap-8 bg-white" >
        <Typography tag="h3" text="Add more pets?" className="text-center text-primary-dark" />
        <div className="flex gap-3">
          <div 
            className="mx-auto items-center justify-center flex flex-wrap border border-[#A1A1A1] rounded-full px-[var(--space-80-100)] py-[var( --space-10-15)] gap-2.5 lg:gap-3.5 cursor-pointer"
            onClick={(e) => {
              e.preventDefault();
              setCheckout(true);
            }}
          >
            <Typography tag="h6" text="No, I don't want to add another pet" className="text-center text-primary-dark" />
            {/* <Typography tag="h3" text="+" className="text-center text-primary-dark" />   */}
          </div>
          <div 
            className="mx-auto items-center justify-center flex flex-wrap border border-[#A1A1A1] rounded-full px-[var(--space-80-100)] py-[var( --space-10-15)] py-3 gap-2.5 lg:gap-3.5 cursor-pointer"
            onClick={(e) => {
              e.preventDefault();
              router.push("/dog-or-cat");
            }}
          >
            <Typography tag="h6" text="Yes, I want to add another pet" className="text-center text-primary-dark" />
            {/* <Typography tag="h3" text="+" className="text-center text-primary-dark" />   */}
          </div>
          {/* <div 
            className="mx-auto items-center justify-center flex flex-wrap border border-[#A1A1A1] rounded-full px-[var(--space-80-100)] py-[var( --space-10-15)] gap-2.5 lg:gap-3.5 cursor-pointer"
            onClick={handleNextPet}
          >
            <Typography tag="h6" text="Next Pet" className="text-center text-primary-dark" />
            <div className="w-5 relative">
              <Image
                src="/icons/nextIcon.svg"
                alt="icon"
                fill
                className="!static w-full object-contain"
              />
            </div>
          </div> */}
        </div>
      </div>

      {/* Navigation */}
      <div className="pb-[3dvh] flex justify-end items-center gap-4 lg:gap-0 lg:items-end pt-[3dvh]">
        <Button 
          className="gap-2.5 lg:ml-auto lg:mr-[-55px]" 
          disabled={!checkout}
          onClick={(e) => {
            e.preventDefault();
            router.push("/checkout");
          }}
        >
          Checkout
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