import { DropDownLabeled } from "@/components/molecules/dropDownLabeled/DropDownLabeled";
import { InputLabeled } from "@/components/molecules/inputLabeled/InputLabeled";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import React,{ useState} from "react";
import DateOfBirthPicker from "@/components/molecules/datePicker/DatePicker";
import Counter from "@/components/molecules/counterBuyingFlow/Counter";

interface EditPetInfoProps {
  setIsEditPetInfo: (value: boolean) => void;
}

export default function EditPetInfo({ setIsEditPetInfo }: EditPetInfoProps) {

  const [ dateOfBirth, setDateOfBirth ] = useState("");
  const [ month, setMonth ] = useState(0);
  const [ year, setYear ] = useState(0);

  return (
      <div className="lg:w-[100%] grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-4 mt-5 mb-[var(--space-30-60)]">
        <InputLabeled
          label="Pet Name"
          placeholder="Type your Pet Name"
          // className="sm:col-span-2"
        />
        <DropDownLabeled
          placeholder="Select gender"
          label="Boy or Girl?"
          options={[
            { value: "Boy", label: "Boy" },
            { value: "Girl", label: "Girl" },
          ]}
        />
        <DropDownLabeled
          placeholder="Select species"
          label="Dog or Cat?"
          options={[
            { value: "Dog", label: "Dog" },
            { value: "Cat", label: "Cat" },
          ]}
        />
        <InputLabeled label="Weight" placeholder="" />
        {/* <InputLabeled label="Birthday" placeholder="" /> */}

        <div className="w-full">
          <Label>Birthday</Label>
          <DateOfBirthPicker dateOfBirth={dateOfBirth} setDateOfBirth={setDateOfBirth} className="!w-full !h-14 !rounded-xl" />
        </div>

        <div className="flex flex-col">
          <Label>Age</Label>
          <div className="flex flex-col lg:flex-row gap-3">
            <Counter label="Months" min={0} max={12} value={month} setValue={setMonth} colorClass="!text-black" className1="!rounded-xl !h-14 !px-3" className2="!gap-1" className3="!w-7" />
            <Counter label="Years" min={0} max={100} value={year} setValue={setYear} colorClass="!text-black" className1="!rounded-xl !h-14 !px-3" className2="!gap-1" className3="!w-7" />
          </div>
        </div>

        <div className="flex gap-3">
          <Button 
            variant={"whiteBtnSecondary2BorderAndText"} 
            size={"md"} 
            className="w-fit mt-6"
            onClick={() => setIsEditPetInfo(false)}
          >
            Update Pet Information
          </Button>
          <Button 
            variant={"outlineSecondaryBtn"} 
            size={"md"}
            className="w-fit mt-6"
            onClick={() => setIsEditPetInfo(false)}
          >
            Cancel
          </Button>
        </div>
      </div>
  );
}