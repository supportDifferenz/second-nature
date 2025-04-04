import Typography from "@/components/atoms/typography/Typography";
import { InputLabeled } from "@/components/molecules/inputLabeled/InputLabeled";
import DashboardLayout from "@/components/templates/DashboardLayout";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";

export default function PasswordManagement() {
  return (
    <DashboardLayout>
      <Typography
        tag="h5"
        text="Password Management"
        className="capitalize !font-normal mb-6 text-black"
      />
      {/* password management */}
      <div className="bg-[#FDFFF4] border border-[#E4E7D3] rounded-xl p-6 flex flex-col items-start sm:flex-row gap-5 ">
        <div className="grow ">
          <form action="">
            <div className="grid  gap-x-5 gap-y-6 ">
              {/* Your Password */}
              <InputLabeled
                label="Your Password"
                type="password"
                placeholder="******************"
                className="max-w-[400px]"
              />
              {/* Repeat Password  */}
              <InputLabeled
                label="Repeat Password "
                type="password"
                placeholder="******************"
                className="max-w-[400px]"
              />
            </div>
          </form>
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
      {/*if Edit password management */}
      {/* <EditPasswordManagement/> */}
    </DashboardLayout>
  );
}
