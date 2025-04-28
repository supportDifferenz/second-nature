"use client";

import { useState } from "react";
import BuyingFlowLayout from "@/components/templates/BuyingFlowLayout";
import Typography from "@/components/atoms/typography/Typography";
import {  Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useRouter } from "next/navigation";

const breedOptions = [
  "Affenpoo (Affenpinscher Puppy)",
  "Beagle",
  "Golden Retriever",
  "German Shepherd",
];
export default function Breed() {

  const [selectedBreed, setSelectedBreed] = useState<string>(""); // <-- start empty
  const router = useRouter();

  return (
    <BuyingFlowLayout step={1}>
      <form className="flex-1 flex flex-col">
        {/* Content Section */}
        <div className="h-full  flex-1 flex flex-col justify-center items-center">
          <Typography
            tag="h2"
            text="Jackey’s Breed"
            className="text-primary-dark portrait:mb-[5dvh] landscape:mb-[3dvh] text-center"
          />

          <div className="max-w-[800px] w-[90%] sm:w-[50%] lg:w-[40%]">
            {/* Breed Selector */}
            <Select value={selectedBreed} onValueChange={setSelectedBreed}>
              <SelectTrigger
                variant="roundedEdgeInputLgSecondary"
                className="text-primary-dark data-[placeholder]:text-[#9B9B9B]"
              >
                <SelectValue placeholder="Select a breed" />
              </SelectTrigger>
              <SelectContent className="bg-white border-secondary-1 rounded-2xl text-primary-dark">
                {breedOptions.map((breed) => (
                  <SelectItem
                    key={breed}
                    value={breed}
                    className="px-4 py-2 text-sm hover:bg-gray-100 focus:bg-gray-100 data-[state=checked]:bg-white"
                  >
                    {breed}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            {/* Add a cross-breed */}
            <Button variant={"secondaryBtn"} type="button" className="w-full mt-3 text-primary-dark">
              Add a cross-breed <Plus className="w-4 h-4" />
            </Button>
            {/* Unknown breed */}

            <Button
              type="button"
              variant={"outlineSecondaryBtn"}
              className="mx-auto portrait:mt-[10dvh] landscape:mt-[6dvh]"
            >
              I don’t know the breed
            </Button>
          </div>
        </div>

        {/* Navigation */}
        <div className="pb-[3dvh] flex  justify-between items-center gap-4 lg:gap-0 lg:items-end pt-[3dvh]">
          <Button
            variant={"outlineSecondaryBtn"}
            className="gap-2.5 lg:ml-[-55px]"
            onClick={(e) => {
              e.preventDefault();
              router.push("/gender");
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
            // disabled
            onClick={(e) => {
              e.preventDefault();
              router.push("/age");
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
    </BuyingFlowLayout>
  );
}
