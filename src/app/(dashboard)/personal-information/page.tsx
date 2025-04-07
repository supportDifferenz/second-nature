import Typography from "@/components/atoms/typography/Typography";
import DashboardLayout from "@/components/templates/DashboardLayout";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";

export default function PersonalInformation() {
  return (
    <DashboardLayout>


      <Typography
        tag="h5"
        text="personal information"
        className="capitalize !font-normal mb-6 text-black"
      />
      {/* personal information */}
      <div className="bg-[#FDFFF4] border border-[#E4E7D3] rounded-xl p-6 flex flex-col items-start sm:flex-row gap-5 ">
        <div className="grow ">
          <Typography
            tag="h5"
            text="Faheed Ahmed"
            className="capitalize  mb-3"
          />
          <Typography
            tag="span"
            text="faheed.admin@instavista.qa"
            className="h6  block mb-1"
          />
          <Typography tag="span" text="+974-665-556-09" className="h6 block" />
        </div>
        <Button variant={"nullBtn"} className="  text-secondary-1">
          <div className="w-(--size-14-22) gap-2.5">
            <Image
              src="/icons/edit.svg"
              alt="Edit "
              fill
              className="!static w-full object-contain"
            />
          </div>
          Edit
        </Button>
      </div>
      {/*if Edit Personal Information */}
      {/* <EditPersonalInformation/> */}
    </DashboardLayout>
  );
}
