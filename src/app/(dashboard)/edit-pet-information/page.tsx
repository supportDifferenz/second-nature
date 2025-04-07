"use client"

import Typography from "@/components/atoms/typography/Typography";
import PetInfoCard from "@/components/organism/petInfo/PetInfoCard";
// import EditPetInfo from "@/components/pages/dashboard/editPetInformation/EditPetInfo";
import DashboardLayout from "@/components/templates/DashboardLayout";
import React from "react";

export default function Page() {
  return (
    <DashboardLayout>
    
    
          <Typography
            tag="h5"
            text="Edit Pet Information"
            className="capitalize !font-normal mb-6 text-black"
          />
          {/* personal information */}
          <div className="flex flex-wrap gap-5 sm:gap-6">
            <PetInfoCard />
            <PetInfoCard />
            <PetInfoCard />
          </div>

          
          {/*if Edit Pet Information */}
          {/* <EditPetInfo /> */}
        </DashboardLayout>
  );
}
