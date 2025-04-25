"use client";

import Typography from "@/components/atoms/typography/Typography";
import BuyingFlowLayout from "@/components/templates/BuyingFlowLayout";
import React from "react";
import Counter from "@/components/molecules/counterBuyingFlow/Counter";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Page() {

  const router = useRouter();

  return (
    <BuyingFlowLayout step={2}>

        <div className="flex flex-col items-center gap-8 bg-white"  >
          <Typography tag="h3" text="Jackey’s Weight and Target Weight" className="text-center text-primary-dark" />
          <div className="w-full mx-auto items-center justify-center flex flex-col lg:flex-row gap-4">
          <Counter label="Weight" />
          <Counter label="Target Weight" />
          </div>
        </div>

        {/* Navigation */}
        <div className="pb-[3dvh] flex  justify-between items-center gap-4 lg:gap-0 lg:items-end pt-[3dvh]">
          <Button
            variant={"outlineSecondaryBtn"}
            className="gap-2.5  lg:ml-[-55px] "
          >
            <div className="w-5 relative">
              <Image
                src="/icons/arrow-prev-long-primary-dark.svg"
                alt="icon"
                fill
                className="!static w-full object-contain"
              />
            </div>
            Back
          </Button>
          <Button 
            className="gap-2.5 lg:ml-auto lg:mr-[-55px]" 
            // disabled
            onClick={(e) => {
              e.preventDefault();
              router.push("/activity");
            }}
          >
            Next
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
  );
}