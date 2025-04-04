import Typography from "@/components/atoms/typography/Typography";
import PetInfoCard from "@/components/organism/petInfo/PetInfoCard";
import DashboardLayout from "@/components/templates/DashboardLayout";
import React from "react";

export default function page() {
  return (
    <DashboardLayout>
      <section className="flex flex-col gap-14 lg:px-8 lg:py-5">
        <Typography tag="h5" text="Edit Pet Information" />
        <div>
          <div className="flex flex-wrap  sm:gap-6">
            <PetInfoCard />
            <PetInfoCard />
            <PetInfoCard />
          </div>

          <div></div>
        </div>
      </section>
    </DashboardLayout>
  );
}
