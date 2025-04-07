import { DropDownLabeled } from "@/components/molecules/dropDownLabeled/DropDownLabeled";
import { InputLabeled } from "@/components/molecules/inputLabeled/InputLabeled";
import { Button } from "@/components/ui/button";
import React from "react";

export default function EditPetInfo() {
  return (
      <div className="lg:w-[85%] grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-4 mt-5 mb-[var(--space-30-60)]">
        <InputLabeled
          label="Pet Name"
          placeholder="Type your Pet Name"
          className="sm:col-span-2"
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
        <InputLabeled label="Birthday" placeholder="" />

        <Button variant={"whiteBtnSecondary2BorderAndText"} size={"md"} className="w-fit mt-6">
          Update Pet Information
        </Button>
      </div>
  );
}
