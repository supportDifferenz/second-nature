import Image from "next/image";
import React from "react";
import Typography from "@/components/atoms/typography/Typography";

interface PetProteinCardProps {
  imageSrc: string;
  altText?: string;
  label: string;
  selectedProtein: boolean;
  setSelectedProtein: () => void;
}

export default function PetProteinCard({ imageSrc, altText = "petSelectCard", label, selectedProtein, setSelectedProtein }: PetProteinCardProps) {
  return (
    <div 
      className={`relative flex flex-col items-center bg-[#FDFFF0] border border-secondary-1 rounded-2xl pt-[var(--space-34-38)] w-[var(--space-110-140)] h-[var(--space-110-140)]
      ${selectedProtein ? "border-secondary-1 border-[1.5px]" : "border-[#E8E8E8]"}`}
      onClick={setSelectedProtein}
    >
      <div className="flex flex-col items-center justify-center w-[38%] lg:w-[45%] relative">
        <Image
          src={imageSrc}
          alt={altText}
          className="!static inset-0 w-full !h-full object-cover object-center"
          fill
        />
      </div>
      <Typography
        tag="sub"
        text={label}
        className="text-center uppercase font-bold mt-[var(--space-3-5)]"
      />

      {selectedProtein ? 
      (
        <div className="absolute top-1 sm:top-2 sm:right-2 right-1 w-8 h-8 sm:w-8 sm:h-8 rounded-full p-1">
          <Image
            src="/icons/checked.svg"
            alt={`${label} checked`}
            fill
            className="!static w-fit h-full"
          />
        </div>
      ) : (
        <div className="absolute top-1 sm:top-2 sm:right-2 right-1 w-8 h-8 sm:w-8 sm:h-8 rounded-full p-1">
          <Image
            src="/icons/unChecked.svg"
            alt={`${label} un checked`}
            fill
            className="!static w-fit h-full"
          />
        </div>
      )
      }

    </div>
  );
}
