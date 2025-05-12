"use client";

import Typography from "@/components/atoms/typography/Typography";
import DashboardLayout from "@/components/templates/DashboardLayout";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";
import { useGetUserDetails} from "@/hooks/userHooks/getUserDetailsHook";
import { useUserStore} from "@/zustand/store/userDataStore";

export default function PersonalInformation() {

  const { userDetails } = useUserStore();
  const { data: getUserDetails, isLoading } = useGetUserDetails(userDetails.userId);
  console.log("User details from get customer by ID API", getUserDetails);

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
            // text={`${getUserDetails?.firstName} ${getUserDetails?.lastName}`}
            text={ 
              isLoading
              ? "User Name"
              : `${getUserDetails?.result?.firstname} ${getUserDetails?.result?.lastname}`.trim() || "Name not available"
            }
            className="capitalize mb-3"
          />
          <Typography
            tag="span"
            // text="faheed.admin@instavista.qa"
            text={
              isLoading
              ? "User Email"
              : getUserDetails?.result?.emailId || "Email not available"
            }
            className="h6  block mb-1"
          />
          <Typography 
            tag="span" 
            // text="+974-665-556-09"
            text={
              isLoading
              ? "Phone Number"
              : getUserDetails?.result?.contactNo || "Phone number is not available"
            }
            className="h6 block" 
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
      {/*if Edit Personal Information */}
      {/* <EditPersonalInformation/> */}
      
    </DashboardLayout>
  );
}
