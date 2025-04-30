"use client";

import Typography from "@/components/atoms/typography/Typography";
import BuyingFlowLayout from "@/components/templates/BuyingFlowLayout";
import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
import Image from "next/image";
import { useRouter } from "next/navigation";
// import PetLocationForm from "@/components/organisms/petLocationForm";
import { usePetStore } from "@/zustand/store/petDataStore";
import { useState } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function Location() {

  const router = useRouter();
  const { location, setLocation } = usePetStore();
  const [ error, setError ] = useState("");
  const [ selectedMunicipality, setSelectedMunicipality ] = useState<string>("");

  const qatarMunicipalities = [
    "Al Shamal",
    "Al Khor",
    "Al Shahaniya",
    "Umm Salal",
    "Al Daayen",
    "Ad Dawhah(Doha)",
    "Al Rayyan",
    "Al Wakrah",
  ]

  console.log("Location ", location);

  const handleNext = (e: React.FormEvent) => {
    e.preventDefault();

    // Validate the location field
    // if (!location.trim()) {
    //   setError("Please enter your pet's location"); // Show error if empty
    //   return; // Block navigation
    // }

    if(!selectedMunicipality) {
      setError("Please select a location"); // Show error if empty
      return; // Block navigation
    }

    if(selectedMunicipality){
      setLocation(selectedMunicipality);
      router.push("/dog-or-cat");
    }

  };

  return (
    <BuyingFlowLayout step={1}>
      <form
        action=""
        onSubmit={handleNext}
        className="flex-1 flex flex-col"
      >
        {/* title,content */}
        <div className="h-full flex-1 flex flex-col justify-center items-center ">
          <Typography
            tag="h2"
            text="Your Pet’s Location"
            className="text-primary-dark mb-4 text-center"
          />
          {/* <Input
            type="text"
            variant={"roundedEdgeInputLg"}
            className="max-w-[800px] w-[90%] sm:w-[50%] lg:w-[40%] block mx-auto bg-white"
            placeholder="Type your pet’s location"
            value={location}
            onChange={(e) => {
              setLocation(e.target.value);
              setError(""); // Clear error when typing
            }}
          /> */}
          <div className="max-w-[800px] w-[90%] sm:w-[50%] lg:w-[40%] block mx-auto bg-white">
            <Select 
              value={selectedMunicipality} 
              onValueChange={setSelectedMunicipality}
            >
              <SelectTrigger
                variant="roundedEdgeInputLgSecondary"
                className="text-primary-dark data-[placeholder]:text-[#9B9B9B]"
              >
                <SelectValue placeholder="Select a location" />
              </SelectTrigger>
              <SelectContent
                className="bg-white border-secondary-1 rounded-2xl text-primary-dark"
              >
                {qatarMunicipalities.map((municipality: string) => (
                  <SelectItem
                    key={municipality}
                    value={municipality}
                    className="px-4 py-2 text-sm hover:bg-gray-100 focus:bg-gray-100 data-[state=checked]:bg-white"
                  >
                    {municipality}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          {error && (
            <p className="text-red-500 text-sm mt-1 w-[90%] sm:w-[50%] lg:w-[40%]">
              {error}
            </p>
          )}
        </div>
        {/* navigation */}
        <div className="pb-[3dvh] flex flex-col lg:flex-row items-center gap-4 lg:gap-0  lg:items-end landscape:pt-[3dvh]">
          <div className="max-w-[900px] w-[95%] sm:w-[60%] lg:w-[50%] text-center mb-0.5 p-4 pt-3 border border-[#A1A1A1] rounded-2xl lg:mx-auto lg:mr-[-90px]">
            <Typography
              tag="span"
              text="Disclaimer:"
              className="block subtitle3 text-[#9B9B9B] "
            />
            <Typography
              tag="span"
              text="Please consult your veterinarian if your pet has specific dietary requirements, health issues, or weight targets before subscribing."
              className="block subtitle3 text-[#9B9B9B]"
            />
          </div>
          <Button
            type="submit" 
            className="gap-2.5 lg:ml-auto lg:mr-[-55px]"
            disabled={!selectedMunicipality}
            // onClick={(e) => {
            //   e.preventDefault();
            //   router.push("/dog-or-cat");
            // }}
          >
            Next
            <div className="w-5">
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
