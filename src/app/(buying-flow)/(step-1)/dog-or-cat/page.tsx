"use client";
import { useState } from "react";
import BuyingFlowLayout from "@/components/templates/BuyingFlowLayout";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Typography from "@/components/atoms/typography/Typography";
import { Input } from "@/components/ui/input";

export default function DogOrCat() {
  const [selectedPet, setSelectedPet] = useState("");
  const [, setCatName] = useState("");
  return (
    <BuyingFlowLayout step={1}>
      <form action="" className="flex-1 flex flex-col ">
        {/* content */}
        <div className="flex-1 h-full flex flex-col sm:flex-row items-center justify-center w-full max-w-3xl mx-auto gap-4 sm:gap-8">
          {/* Dog Selection */}
          <div className="flex flex-col w-[70%] lg:w-[30%] xl:w-[35%] 2xl:w-full max-w-[381px]">
            <div
              className={`relative border rounded-2xl w-[55%] sm:w-[80%] mx-auto   cursor-pointer overflow-hidden ${
                selectedPet === "dog"
                  ? "border-secondary-1 border-[1.5px]"
                  : "border-[#E8E8E8]"
              }`}
              onClick={() => setSelectedPet("dog")}
            >
              <div className="flex justify-center">
                <div className="flex items-center justify-center">
                  <Image
                    src="/images/dog-or-cat-section-dog-thumb.webp"
                    alt="Brown dog with white chest"
                    fill
                    className="!static w-full "
                  />
                </div>
              </div>

              {selectedPet === "dog" && (
                <div className="absolute top-1 sm:top-2 sm:right-2 right-1 w-8 h-8 sm:w-10 sm:h-10 rounded-full p-1">
                  <Image
                    src="/icons/checked.svg"
                    alt="Dog"
                    fill
                    className="!static w-fit h-full"
                  />
                </div>
              )}
            </div>

            <div className="mt-[-5%] relative bg-white w-full">
              <Input
                type="text"
                // value=""
                disabled={selectedPet !== "dog"}
                variant={"roundedEdgeInputLg"}
                className="w-full border border-gray-300 rounded-full text-center"
                placeholder="Type Your Dogs’s Name"
              />
            </div>
          </div>

          {/* Or divider */}
          <Typography tag="span" text="Or" className="!text-[#A1A1A1] block" />

          {/* Cat Selection */}
          <div className="flex flex-col w-[70%] lg:w-[30%] xl:w-[35%] 2xl:w-full max-w-[381px]">
            <div
              className={`relative border rounded-2xl w-[55%] sm:w-[80%] mx-auto   cursor-pointer overflow-hidden ${
                selectedPet === "cat"
                  ? "border-secondary-1 border-[1.5px]"
                  : "border-[#E8E8E8]"
              }`}
              onClick={() => setSelectedPet("cat")}
            >
              <div className="flex justify-center">
                <div className="flex items-center justify-center">
                  <Image
                    src="/images/dog-or-cat-section-cat-thumb.webp"
                    alt="Cat"
                    fill
                    className="!static w-full "
                  />
                </div>
              </div>

              {selectedPet === "cat" && (
                <div className="absolute top-1 sm:top-2 sm:right-2 right-1 w-8 h-8 sm:w-10 sm:h-10 rounded-full p-1">
                  <Image
                    src="/icons/checked.svg"
                    alt="Brown dog with white chest"
                    fill
                    className="!static w-fit h-full"
                  />
                </div>
              )}
            </div>

            <div className="mt-[-5%] w-full relative bg-white">
              <Input
                type="text"
                // value={catName}
                onChange={(e) => setCatName(e.target.value)}
                placeholder="Type Your Cat's Name"
                variant={"roundedEdgeInputLg"}
                className="w-full border border-gray-300 rounded-full text-center"
                disabled={selectedPet !== "cat"}
              />
            </div>
          </div>
        </div>
        <Button variant={"linkPrimaryDark"} className="justify-start mx-auto mt-[2.5dvh]">
          Add More Pets
          <div className="w-4">
            <Image
              src="/icons/add-primary-dark.svg"
              alt="Add new shipping address"
              fill
              className="!static w-full object-contain"
            />
          </div>
        </Button>

        {/* navigation */}
        <div className="pb-[3dvh] flex flex-col lg:flex-row items-center gap-4 lg:gap-0  lg:items-end pt-[3dvh]">
          <Button className="gap-2.5 lg:ml-auto lg:mr-[-55px]" disabled>
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
    </BuyingFlowLayout>
  );
}
