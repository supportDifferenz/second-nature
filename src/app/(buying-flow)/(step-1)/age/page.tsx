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
import { usePetStore } from "@/zustand/store/petDataStore";

export default function Age() {

  const [ mode, setMode ] = useState<"dob" | "approx">("dob");

  const router = useRouter();

  // const { pets, selectedPetIndex, setPetDetails } = usePetStore();
  const { pets, selectedPetIndex, setPetDetails } = usePetStore();
  const selectedPet = selectedPetIndex !== null ? pets[selectedPetIndex] : null; // Handle null case for selectedPetIndex
  const currentPetId = selectedPet ? selectedPet.id : null; // Get the current pet ID
  const selectedPetName = selectedPet ? selectedPet.name : null;
  const ageMonth = selectedPet ? Number(selectedPet.ageMonth) : 0;
  const ageYear = selectedPet ? Number(selectedPet.ageYear) : 0;
  
  const [ month, setMonth ] = useState(ageMonth);
  const [ year, setYear ] = useState(ageYear);

  console.log("Selected Pet in age page is", selectedPet);

  const handleNext = (e: React.FormEvent) => {
    e.preventDefault();
    if (month && year &&currentPetId) {
      setPetDetails(currentPetId, { ageMonth: month.toString(), ageYear: year.toString() });
      router.push("/weight");
    }
  }

  return (
    <BuyingFlowLayout step={1}>
      <form action="" className="flex-1 flex flex-col ">
        {/* title,content */}
        <div className="h-full  flex-1 flex flex-col justify-center items-center ">
          <Typography
            tag="h2"
            // text="How old is Jackey?"
            text={`How old is ${selectedPetName}?`}
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
              <Counter label="Months" min={0} max={12} value={Number(month)} setValue={setMonth} />
              <Counter label="Years" min={0} max={100} value={Number(year)} setValue={setYear} />
            </div>
          )}
        </div>
        {/* Navigation */}
        <div className="pb-[3dvh] flex  justify-between items-center gap-4 lg:gap-0 lg:items-end pt-[3dvh]">
          <Button
            variant={"outlineSecondaryBtn"}
            className="gap-2.5  lg:ml-[-55px]"
            onClick={(e) => {
              e.preventDefault();
              router.push("/breed");
            }}
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
          disabled={ !( month || year )}
            onClick={handleNext}
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