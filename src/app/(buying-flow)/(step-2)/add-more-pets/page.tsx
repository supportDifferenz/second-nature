"use client";

import Typography from '@/components/atoms/typography/Typography'
import BuyingFlowLayout from '@/components/templates/BuyingFlowLayout'
import React, { useState} from 'react'
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { usePetStore } from "@/zustand/store/petDataStore";
import useAuthStore from '@/zustand/store/authDataStore';
import { startTransition } from "react";

export default function Page() {

  const router = useRouter();

  const [ checkout, setCheckout ] = useState(false);

  const isAuthenticated = useAuthStore((state) => state.isAuthenticated);

    const { selectedPetIndex, setSelectedPetIndex } = usePetStore();

  const handleAddAnotherPet = (e: React.MouseEvent<HTMLDivElement>) => {
    e.preventDefault();
    setSelectedPetIndex((selectedPetIndex ?? 0) + 1); // Reset selected pet index
    startTransition(() => {
      router.push("/dog-or-cat");
    })
    // router.push("/dog-or-cat");
  }

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

      <div className="flex flex-1 flex-col items-center justify-center gap-8 bg-white" >
        <Typography tag="h3" text="Add more pets?" className="text-center text-primary-dark" />
        <div className="flex gap-3">
          <div 
            className={`${checkout ? "bg-primary-light text-primary-dark border-primary-dark" : ""} mx-auto items-center justify-center flex flex-wrap border border-[#A1A1A1] rounded-full px-[var(--space-80-100)] py-[var( --space-10-15)] gap-2.5 lg:gap-3.5 cursor-pointer`}
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
            onClick={handleAddAnotherPet}
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
            if(isAuthenticated){
              startTransition(() => {
                router.push("/checkout");
              })
              // router.push("/checkout");
            } else {
              startTransition(() => {
                router.push("/user-details");
              })
              // router.push("/user-details");
            }
          }}
        >
          {/* Checkout */}
          <Typography tag="h6" text="Checkout" className="text-center" />
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