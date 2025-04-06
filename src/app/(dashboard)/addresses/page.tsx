import Typography from "@/components/atoms/typography/Typography";
import EditAddresses from "@/components/pageSections/dashboard/addresses/EditAddresses";
import DashboardLayout from "@/components/templates/DashboardLayout";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";

export default function Address() {
  return (
    <DashboardLayout>
      <Typography
        tag="h5"
        text="addresses"
        className="capitalize !font-normal mb-6 text-black"
      />
      {/* personal information */}
      <div className="flex flex-col gap-15">
      {/* Shipping Address  */}
        <div>
          <div className="mb-5 flex flex-col sm:flex-row sm:items-center gap-4 sm:justify-between">
            <Typography tag="h6" text="Shipping Address " />
            <Button variant={'linkTextBlack'} className="justify-start">
              <div className="w-4">
                <Image src="/icons/add-icon.svg" alt="Add new shipping address" fill  className="!static w-full object-contain"/>
              </div>
              Add new shipping address
            </Button>
          </div>
          <div className="bg-[#FDFFF4] border border-[#E4E7D3] rounded-xl p-6 flex flex-col items-start sm:flex-row gap-5 lg:gap-[30%] ">
            <div className="grow ">
              <Typography
                tag="span"
                text="Shipping Address "
                className="h6 block !font-normal   mb-3"
              />

              <Typography
                tag="h5"
                text="Museum Park St, Old Salata, Corniche, Doha "
                className="capitalize"
              />
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
        </div>
        {/* Billing Address  */}
        <div>
          <div className="mb-5 flex flex-col sm:flex-row sm:items-center gap-4  sm:justify-between">
            <Typography tag="h6" text="Billing Address  "  />
            <Button variant={'linkTextBlack'} className="justify-start">
              <div className="w-4">
                <Image src="/icons/add-icon.svg" alt="Add new shipping address" fill  className="!static w-full object-contain"/>
              </div>
              Add new billing address
            </Button>
          </div>
          <div className="bg-[#FDFFF4] border border-[#E4E7D3] rounded-xl p-6 flex flex-col items-start sm:flex-row gap-5 lg:gap-[30%] ">
            <div className="grow ">
              <Typography
                tag="span"
                text="Billing Address "
                className="h6 block !font-normal   mb-3"
              />

              <Typography
                tag="h5"
                text="Museum Park St, Old Salata, Corniche, Doha"
                className="capitalize"
              />
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
        </div>
      </div>
      {/*if Edit Addresses */}
      {/* <EditAddresses/> */}
    </DashboardLayout>
  );
}
