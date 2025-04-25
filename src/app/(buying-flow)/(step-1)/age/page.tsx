"use client";
import { useState } from "react";
import Typography from "@/components/atoms/typography/Typography";
import DateOfBirthPicker from "@/components/molecules/datePicker/DatePicker";
import BuyingFlowLayout from "@/components/templates/BuyingFlowLayout";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Counter from "@/components/molecules/counterBuyingFlow/Counter";
// import PetLocationForm from "@/components/organisms/petLocationForm";
import { useRouter } from "next/navigation";

export default function Age() {

  const [mode, setMode] = useState<"dob" | "approx">("dob");

  const router = useRouter();

  return (
    <BuyingFlowLayout step={1}>
      <form action="" className="flex-1 flex flex-col ">
        {/* title,content */}
        <div className="h-full  flex-1 flex flex-col justify-center items-center ">
          <Typography
            tag="h2"
            text="How old is Jackey?"
            className="text-primary-dark mb-4 text-center"
          />

          <div className="flex justify-center mb-4 ">
            <button
              onClick={() => setMode("dob")}
              type="button"
              className={`subtitle3 sm:h6 px-4 py-2 font-medium ${
                mode === "dob"
                  ? "border-b-2 border-primary-dark text-primary-dark"
                  : "text-[#818181] cursor-pointer"
              }`}
            >
              DATE OF BIRTH
            </button>
            <button
              onClick={() => setMode("approx")}
              type="button"
              className={`subtitle3 sm:h6 px-4 py-2 font-medium ${
                mode === "approx"
                  ? "border-b-2 border-primary-dark text-primary-dark"
                  : "text-[#818181] cursor-pointer"
              }`}
            >
              APPROXIMATE AGE
            </button>
          </div>

          {mode === "dob" ? (
            <DateOfBirthPicker />
          ) : (
            <div className="w-full mx-auto items-center justify-center flex flex-col lg:flex-row gap-4">
              <Counter label="Months" />
              <Counter label="Years" />
            </div>
          )}
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
              router.push("/weight");
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
      </form>
      {/* <PetLocationForm /> */}
    </BuyingFlowLayout>
  );
}
