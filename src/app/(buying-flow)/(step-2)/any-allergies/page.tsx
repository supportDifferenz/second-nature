"use client";
import BuyingFlowLayout from '@/components/templates/BuyingFlowLayout';
import { motion } from "framer-motion";
import Typography from '@/components/atoms/typography/Typography';
import { Button } from '@/components/ui/button';
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { cn } from '@/lib/utils';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { ChevronDownIcon } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { startTransition } from "react";
import { useGetAllAllergies } from '@/hooks/subscriptionHooks/getAllAllergiesHook';
import { usePetStore } from '@/zustand/store/petDataStore';

export default function AnyAllergies() {

    const router = useRouter();

    const { data: allergies, isLoading: isAllergiesLoading } = useGetAllAllergies();

    const { pets, selectedPetIndex, setPetDetails } = usePetStore();
    const selectedPet = selectedPetIndex !== null ? pets[selectedPetIndex] : null;
    const currentPetId = selectedPet ? selectedPet.id : null; // Get the current pet ID
    const selectedPetName = selectedPet ? selectedPet.name : null;
    const allergiesOrIntolerances = selectedPet ? selectedPet.allergiesOrIntolerances : []; // Get the current pet type (cat or dog)

    const [selectedSymptoms, setSelectedSymptoms] = useState<string[]>([]);

    let symptomOptions = [
        "Sneezing",
        "Runny Nose",
        "Itchy, Red Or Watery Eyes",
        "Nasal Congestion",
    ];

    if(!isAllergiesLoading){
        symptomOptions = allergies?.result;
    }

    const toggleOption = (option: string) => {
        setSelectedSymptoms((prev) =>
            prev.includes(option)
                ? prev.filter((item) => item !== option)
                : [...prev, option]
        );
    };

    const handleNext = (e: React.FormEvent) => {
        // if (selectedSymptoms.length === 0) return;
        e.preventDefault();
        if(currentPetId){
            setPetDetails(currentPetId, { allergiesOrIntolerances: selectedSymptoms });
            startTransition(() => {
            router.push("/eating-preference");
        })
        }
        // router.push("/eating-preference");
    };

    useEffect(() => {
        setSelectedSymptoms(allergiesOrIntolerances || []);
    },[allergiesOrIntolerances]);

    return (
        <BuyingFlowLayout step={1}>
            <form className="flex-1 flex flex-col">
                {/* Content Section */}
                <motion.div
                    className="h-full flex-1 flex flex-col justify-center lg:justify-center lg:mt-2 items-center relative overflow-visible"
                >
                    <Typography
                        tag="h2"
                        text={`Does ${selectedPetName} have allergies?`}
                        className="text-primary-dark portrait:mb-[5dvh] landscape:mb-[4dvh] capitalize text-center"
                    />

                    <div className="max-w-[800px] w-[90%] sm:w-[50%] lg:w-[40%] relative ">
                        {/* Custom Multi-select Dropdown with Checkbox Image */}
                        <Popover>
                            <PopoverTrigger asChild >
                                    <Button
                                        // variant="roundedEdgeInputLgSecondary"
                                        className={cn(
                                            "w-full !text-left justify-between bg-white hover:bg-white font-normal !text-primary-dark  rounded-full border border-[#A1A1A1] outline-none data-[state=open]:border-secondary-1 h-13   px-4 py-2 ",
                                            selectedSymptoms.length === 0 && "text-muted-foreground"
                                        )}
                                    >

                                        <span className='grow overflow-x-auto scrollbar-hide'>
                                            {selectedSymptoms.length > 0
                                                ? selectedSymptoms.join(", ")
                                                : "Select symptoms"}
                                        </span>
                                        <ChevronDownIcon className="size-4 text-primary-dark opacity-50" />

                                    </Button>
                            </PopoverTrigger>
                                    <span className='text-[14px]  text-[#999999] px-4 pt-1 block'>Multiple Selection possible</span>

                            <PopoverContent
                                className="bg-white border-secondary-1 max-w-[800px] w-[78vw] sm:w-[41vw] lg:w-[34vw] rounded-2xl text-primary-dark z-[9999] min-w-[240px] max-h-[300px] overflow-y-auto p-1"
                                sideOffset={5}
                                align="start"
                            >
                                {symptomOptions.map((option) => {
                                    const isChecked = selectedSymptoms.includes(option);
                                    return (
                                        <button
                                            key={option}
                                            type="button"
                                            onClick={() => toggleOption(option)}
                                            className={cn(
                                                "flex items-center justify-between w-full cursor-pointer text-primary-dark text-[14px] text-left px-4 py-2 rounded-md hover:bg-gray-100 gap-2",
                                                isChecked && "bg-white"
                                            )}
                                        >
                                            {option}

                                            <div className="w-4 h-4 relative flex-shrink-0">
                                                <Image
                                                    src={
                                                        isChecked
                                                            ? "/icons/checked-primary.svg"
                                                            : "/icons/unchecked-gray.svg"
                                                    }
                                                    alt={isChecked ? "Checked" : "Unchecked"}
                                                    fill
                                                    className="object-contain"
                                                />
                                            </div>
                                        </button>
                                    );
                                })}
                            </PopoverContent>
                        </Popover>
                    </div>
                </motion.div>

                {/* Navigation */}
                <div className="pb-[3dvh] flex justify-between items-center gap-4 lg:gap-0 lg:items-end pt-[3dvh]">
                    <Button
                        variant={"outlineSecondaryBtn"}
                        className="gap-2.5 lg:ml-[-55px] hover:scale-105 transition-transform duration-300 ease-in-out"
                        onClick={(e) => {
                            e.preventDefault();
                            startTransition(() => {
                                router.push("/activity")
                            })
                            // router.push("/activity")
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
                        onClick={handleNext}
                        className="gap-2.5 lg:ml-auto lg:mr-[-55px] hover:scale-105 transition-transform duration-300 ease-in-out">
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
