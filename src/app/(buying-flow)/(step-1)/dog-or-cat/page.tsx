"use client";
import { useState, useEffect } from "react";
import BuyingFlowLayout from "@/components/templates/BuyingFlowLayout";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Typography from "@/components/atoms/typography/Typography";
import { Input } from "@/components/ui/input";
import { useRouter } from "next/navigation";
import { usePetStore } from "@/zustand/store/petDataStore";

export default function DogOrCat() {

  const router = useRouter();

  // const [selectedPet, setSelectedPet] = useState("");
  // const [, setCatName] = useState("");
  const { 
    pets, 
    // currentPetId,
    noOfPets,
    selectedPetIndex,
    setCurrentPet, 
    setPetDetails,
    addNewPet,
    setSelectedPetIndex
  } = usePetStore();

  console.log("Pets after adding new pet ", pets);

  useEffect(() => {
    setSelectedPetIndex(selectedPetIndex || 0); // Reset selected pet index
  }, [setSelectedPetIndex]);

  const [petType, setPetType] = useState<"dog" | "cat" | "">("");
  const [petName, setPetName] = useState("");

  console.log("###Pet Type is", petType);
  console.log("###Pet Name is", petName);

  // Get the current pet's details
  // const currentPetDetails = currentPetId ? pets[currentPetId] : null;

  const handlePetSelection = (type: "dog" | "cat") => {
    setPetType(type);
  };


  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPetName(e.target.value);
  };

  const handleAddMorePets = () => {
    if (petType && petName.trim() !== "") {
      const newPetId = addNewPet({ catOrDog: petType, name: petName });
      setCurrentPet(newPetId);
      setPetType("");
      setPetName("");
    }
  };

  const handleNext = (e: React.FormEvent) => {
    e.preventDefault();

    if (petType && petName.trim() !== "") {
      const newPetId = addNewPet({ catOrDog: petType, name: petName });
      setCurrentPet(newPetId);
      if(newPetId) {
        setPetDetails(newPetId, { catOrDog: petType, name: petName });
        // setPetType("");
        // setPetName("");
      }
    }

    if(noOfPets > 0) {
      if(selectedPetIndex === noOfPets) {
        if(petType && petName.trim() !== "") {
          setSelectedPetIndex(selectedPetIndex);
          router.push("/gender");
        } else {
          setSelectedPetIndex(selectedPetIndex - 1);
          router.push("/add-more-pets");
        }
      } else {
        setSelectedPetIndex(selectedPetIndex);
        router.push("/gender");
      }
    }else{
      setSelectedPetIndex(0); // Reset selected pet index
      router.push("/gender");
    }

    setPetType("");
    setPetName("");
    // if (petType && petName.trim() !== "") {
    //   const newPetId = addNewPet({ catOrDog: petType, name: petName });
    //   setCurrentPet(newPetId);
    //   setPetType("");
    //   setPetName("");
    // }
    
    // if (petType && petName.trim() !== "" && currentPetId) {
    //   setPetDetails(currentPetId, { catOrDog: petType, name: petName });
    //   router.push("/gender");
    // } else {
    //   router.push("/gender");
    // }

    // setSelectedPetIndex(0); // Reset selected pet index to 0
  };

  const isNextDisable = pets?.length > 0 ? false : !(petType && petName.trim() !== "");

  return (
    <BuyingFlowLayout step={1}>
      <form action="" className="flex-1 flex flex-col ">
        {/* content */}
        <div className="flex-1 h-full flex flex-col sm:flex-row items-center justify-center w-full max-w-3xl mx-auto gap-4 sm:gap-8">
          {/* Dog Selection */}
          <div className="flex flex-col w-[70%] lg:w-[30%] xl:w-[35%] 2xl:w-full max-w-[381px]">
            <div
              className={`relative border rounded-2xl w-[55%] sm:w-[80%] mx-auto   cursor-pointer overflow-hidden ${
                petType === "dog"
                  ? "border-secondary-1 border-[1.5px]"
                  : "border-[#E8E8E8]"
              }`}
              onClick={() => handlePetSelection("dog")}
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

              { petType === "dog" && (
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
                value={petType === "dog" ? petName : ""}
                onChange={handleNameChange}
                disabled={petType !== "dog"}
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
                petType === "cat"
                  ? "border-secondary-1 border-[1.5px]"
                  : "border-[#E8E8E8]"
              }`}
              onClick={() => handlePetSelection("cat")}
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

              {petType === "cat" && (
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
                value={petType === "cat" ? petName : ""}
                onChange={handleNameChange}
                disabled={petType !== "cat"}
                placeholder="Type Your Cat's Name"
                variant={"roundedEdgeInputLg"}
                className="w-full border border-gray-300 rounded-full text-center"
              />
            </div>
          </div>
        </div>
        
        {
          isNextDisable
          ? ""
          : <Button 
              variant={"linkPrimaryDark"} 
              className="justify-start mx-auto mt-[2.5dvh] disabled:!opacity-100 disabled:!bg-transparent disabled:!text-primary-dark"
              disabled={!petType || !petName.trim()}
              onClick={(e) => {
                e.preventDefault();
                handleAddMorePets();
              }}  
            >
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
        }

        {/* navigation */}
        <div className="pb-[3dvh] flex flex-col lg:flex-row items-center gap-4 lg:gap-0  lg:items-end pt-[3dvh]">
          <Button 
            className="gap-2.5 lg:ml-auto lg:mr-[-55px]" 
            disabled={ isNextDisable }
            onClick={handleNext}
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
    </BuyingFlowLayout>
  );
}
