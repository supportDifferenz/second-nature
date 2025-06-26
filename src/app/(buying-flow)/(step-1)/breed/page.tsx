"use client";

import { useEffect, useState } from "react";
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
import { usePetStore } from "@/zustand/store/petDataStore";
import { useGetBreedDetails } from "@/hooks/subscriptionHooks/getBreedDetailsHook";
import { useGetCrossBreedDetails } from "@/hooks/subscriptionHooks/getCrossBreedDetailsHook";
import { startTransition } from "react";

export default function Breed() {

  const [showCrossBreed, setShowCrossBreed] = useState<boolean>(false);
  const [iDontKnowBreed, setIDontKnowBreed] = useState<boolean>(false);
  const router = useRouter();

  const { pets, selectedPetIndex, setPetDetails } = usePetStore();
  const selectedPet = selectedPetIndex !== null ? pets[selectedPetIndex] : null; // Handle null case for selectedPetIndex
  const currentPetId = selectedPet ? selectedPet.id : null; // Get the current pet ID
  const selectedPetName = selectedPet ? selectedPet.name : null;
  const catOrDog = selectedPet ? selectedPet.catOrDog : ""; // Get the current pet type (cat or dog)
  const breed = selectedPet ? selectedPet?.breed : "";
  const crossBreed = selectedPet ? selectedPet?.crossBreed : "";

  const [selectedBreed, setSelectedBreed] = useState(breed);
  const [selectedCrossBreed, setSelectedCrossBreed] = useState(crossBreed);

  const getBreed = catOrDog === "cat" ? "getCatBreed" : "getDogBreed";
  const getCrossBreed = catOrDog === "cat" ? "getCatCrossBreed" : "getDogCrossBreed";
  const { data: breedData } = useGetBreedDetails(getBreed);
  const { data: crossBreedData } = useGetCrossBreedDetails(getCrossBreed);

  useEffect(() => {
    console.log("Breed is",breed,"Cross Breed is",crossBreed);
    if(selectedCrossBreed){
      setShowCrossBreed(true);
    }
  },[])
  //   if (breedData?.result && selectedPet?.breed) {
  //     // Find the exact match (case-insensitive)
  //     const matchedBreed = breedData.result.find(
  //       (opt: string) => opt.toLowerCase() === (selectedPet?.breed ?? "").toLowerCase()
  //     );
  //     setSelectedBreed(matchedBreed || "");
  //   }

  //   if (crossBreedData?.result && selectedPet?.crossBreed) {
  //     const matchedCrossBreed = crossBreedData.result.find(
  //       (opt: string) => opt.toLowerCase() === (selectedPet?.crossBreed ?? "").toLowerCase()
  //     );
  //     setSelectedCrossBreed(matchedCrossBreed || "");
  //     setShowCrossBreed(!!matchedCrossBreed);
  //   }
  // }, [breedData, crossBreedData, selectedPet]);

  useEffect(() => {
    if (breedData?.result && selectedPet?.breed) {
      // Normalize both the stored value and options for comparison
      const storedBreed = selectedPet?.breed;
      console.log("Stored breed:", storedBreed,breedData.result);
      const matchedBreed = breedData.result.find((opt: string) => 
        opt.trim() === storedBreed
      );
      
      if (matchedBreed) {
        setSelectedBreed(matchedBreed);
        console.log("Matched breed:", matchedBreed);
      } else {
        console.warn("No match found for breed:", selectedPet.breed);
        console.log("Available breeds:", breedData.result);
      }
    }
  }, [breedData, selectedPet?.breed]);

  useEffect(() => {
    if (crossBreedData?.result && selectedPet?.crossBreed) {
      const matchedCrossBreed = crossBreedData.result.find(
        (opt: string) => opt === (selectedPet.crossBreed ?? "")
      );
      setSelectedCrossBreed(matchedCrossBreed || "");
      setShowCrossBreed(!!matchedCrossBreed);
    }
  }, [crossBreedData, selectedPet?.crossBreed]);

  useEffect(() => {
    if ((selectedBreed || selectedCrossBreed) && iDontKnowBreed) {
      setIDontKnowBreed(false);
    }
  }, [selectedBreed, selectedCrossBreed]);

  // useEffect(() => {
  //   if(!selectedBreed && !iDontKnowBreed){
  //     setIDontKnowBreed(false);
  //   } else if (!selectedCrossBreed){
  //     setIDontKnowBreed(false);
  //   }
  // },[selectedBreed,selectedCrossBreed])

  const handleNext = (e: React.FormEvent) => {
    e.preventDefault();

    if (iDontKnowBreed) {
      startTransition(() => {
        router.push("/age");
      })
      // router.push("/age");
      return;
    }

    console.log("Selected Breed is", selectedBreed,"Selected Cross Breed is", selectedCrossBreed,"Selected pet ID is", currentPetId);
    if (selectedBreed && selectedCrossBreed && currentPetId) {
      setPetDetails(currentPetId, { breed: selectedBreed, crossBreed: selectedCrossBreed });
      startTransition(() => {
        router.push("/age");
      })
      // router.push("/age");
    }
  };

  const handleCrossBreed = () => {
    setShowCrossBreed(!showCrossBreed);
  };

  const handleIdontKnowBreed = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setSelectedBreed("");
    setSelectedCrossBreed("");
    setShowCrossBreed(false);
    setIDontKnowBreed(true);

    // if (currentPetId) {
    //   setPetDetails(currentPetId, { 
    //     breed: "", 
    //     crossBreed: "" 
    //   });
    // }

  }

  const handleRemoveCrossBreed = () => {
    setSelectedCrossBreed("");
    setShowCrossBreed(false);
  }

  console.log("I don't know breed is",iDontKnowBreed);

  return (
    <BuyingFlowLayout step={1}>
      <form className="flex-1 flex flex-col">
        {/* Content Section */}
        <div className="h-full  flex-1 flex flex-col justify-center items-center">
          <Typography
            tag="h2"
            // text="Jackey’s Breed"
            text={`${selectedPetName}'s Breed`}
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
              <SelectContent
                className="bg-white border-secondary-1 rounded-2xl text-primary-dark"
              >
                {breedData?.result?.map((breed: string) => (
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
            {
              !showCrossBreed && selectedBreed && (
                <Button 
                  variant={"secondaryBtn"} 
                  type="button" 
                  className="w-full mt-3 text-primary-dark"
                  onClick={handleCrossBreed}
                >
                  Add a cross-breed <Plus className="w-4 h-4" />
                </Button>
              )
            }

            {
              showCrossBreed && (
                <Select value={selectedCrossBreed} onValueChange={setSelectedCrossBreed}>
                  <SelectTrigger
                    variant="roundedEdgeInputLgSecondary"
                    className="text-primary-dark data-[placeholder]:text-[#9B9B9B] mt-3"
                  >
                    <SelectValue placeholder="Select a breed" />
                  </SelectTrigger>
                  <SelectContent
                    className="bg-white border-secondary-1 rounded-2xl text-primary-dark"
                  >
                    {crossBreedData?.result?.map((crossBreed: string) => (
                      <SelectItem
                        key={crossBreed}
                        value={crossBreed}
                        className="px-4 py-2 text-sm hover:bg-gray-100 focus:bg-gray-100 data-[state=checked]:bg-white"
                      >
                        {crossBreed}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              )
            }

            {/* Unknown breed */}
            <Button
              type="button"
              variant={"outlineSecondaryBtn"}
              className="mx-auto portrait:mt-[10dvh] landscape:mt-[6dvh]"
              onClick={handleIdontKnowBreed}
            >
              I don’t know the breed
            </Button>

            {
              selectedCrossBreed && (
                <Button
                  type="button"
                  variant={"outlineSecondaryBtn"}
                  className="mx-auto portrait:mt-[10dvh] landscape:mt-[6dvh]"
                  onClick={handleRemoveCrossBreed}
                >
                  Remove cross-breed
                </Button>
              )
            }
          </div>
        </div>

        {/* Navigation */}
        <div className="pb-[3dvh] flex  justify-between items-center gap-4 lg:gap-0 lg:items-end pt-[3dvh]">
          <Button
            variant={"outlineSecondaryBtn"}
            className="gap-2.5 lg:ml-[-55px]"
            onClick={(e) => {
              e.preventDefault();
              startTransition(() => {
                router.push("/gender");
              })
              // router.push("/gender");
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
            disabled={!iDontKnowBreed && !(selectedBreed && selectedCrossBreed)}
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
    </BuyingFlowLayout>
  );
}