import Typography from "@/components/atoms/typography/Typography";
import Image from "next/image";
import React from "react";

export default function PetInfoCard() {
  return (
    <div className="flex flex-col  bg-[#FDFFF4] w-[300px] rounded-lg h-auto">
      <div className="flex justify-between border-b p-5 border-[#E4E7D3]">
        <div className="flex items-center gap-2">
          <div className="">
            <Image
              src="/icons/pet-info-id1.svg"
              alt="dog"
              fill
              className="!static w-full !h-full object-cover"
            />
          </div>
          <Typography tag="h5" text="Jacky" />
        </div>
        <div className="">
          <Typography
            tag="h6"
            text="Girl"
            className="text-primary bg-[#F3F5E8] rounded-lg py-1.5 px-2.5"
          />
        </div>
      </div>
      <div className="flex justify-between border-b p-7 border-[#E4E7D3]">
        <div className="flex flex-col gap-0.5">
          <Typography tag="h5" text="7 Years Old" className="!font-medium" />
          <Typography tag="h6" text="03-10-2018" className="!font-medium" />
        </div>
        <div className="flex flex-col gap-0.5">
          <Typography tag="h5" text="Weight" className="!font-medium" />
          <Typography tag="h6" text="4 kg" className="!font-medium" />
        </div>
      </div>
      <div className="flex justify-center items-center py-3 gap-1">
        <div>
          <Image
            src="/icons/pencil-edit.svg"
            alt="dog"
            fill
            className="!static w-full !h-full object-cover"
          />
        </div>
        <Typography tag="h5" text="Edit" className="text-secondary-1" />
      </div>
    </div>
  );
}
