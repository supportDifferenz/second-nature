"use client";

import React, { useState, useEffect } from "react";
import Typography from "@/components/atoms/typography/Typography";
import { useUserStore } from "@/zustand/store/userDataStore";
import { useGetSubscriptionDetailsByUserId } from "@/hooks/subscriptionHooks/getSubscriptionDetailsByUserIdHook";
import { useGetSubscriptionDetailsByUserIdAndPetId } from "@/hooks/subscriptionHooks/getSubscriptionDetailsBySubIdAndPetId";
import { useOrderHistoryStore } from "@/zustand/store/orderHistoryDataStore";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Image from "next/image";

const historyData = [
    {
        date: "18.08.2025",
        planType: "Regular",
        protein: "Chicken",
        bowlSize: "Half Bowl",
    },
    {
        date: "12.07.2025",
        planType: "Trial",
        protein: "Beef",
        bowlSize: "Full Bowl",
    },
    {
        date: "18.08.2025",
        planType: "Regular",
        protein: "Chicken",
        bowlSize: "Half Bowl",
    },
    {
        date: "12.07.2025",
        planType: "Regular",
        protein: "Beef",
        bowlSize: "Full Bowl",
    },
    {
        date: "18.08.2025",
        planType: "Regular",
        protein: "Chicken",
        bowlSize: "Half Bowl",
    },
    {
        date: "12.07.2025",
        planType: "Trial",
        protein: "Beef",
        bowlSize: "Full Bowl",
    },
    {
        date: "18.08.2025",
        planType: "Regular",
        protein: "Chicken",
        bowlSize: "Half Bowl",
    },

];



export default function OrderHistory() {

    const { selectedPetFromOrderHistory, selectedPetIndexFromOrderHistory, setSelectedPetIndexFromOrderHistory, setSelectedPetFromOrderHistory } = useOrderHistoryStore();


    const [selectedPetIndex, setselectedPetIndex] = useState(0);
    const [selectedPet, setSelectedPet] = useState<PetInfo | null>(null);

    const { userDetails } = useUserStore();
    const userId = userDetails?.userId;
    const { data: subscriptionDetails } = useGetSubscriptionDetailsByUserId(userId);
    const { data: subscriptionDetailsBySubIdAndPetId,  } = useGetSubscriptionDetailsByUserIdAndPetId(userId ?? "", selectedPet?.petId ?? "");

    const dataFromAPI = subscriptionDetailsBySubIdAndPetId?.result;
    const planDataFromAPI = subscriptionDetailsBySubIdAndPetId?.result?.pets[0]?.plan;
    const planStartDateFromAPI = dataFromAPI?.subscriptiondate;
    const planEndDateFromAPI = dataFromAPI?.subscriptionEndDate;
    // const formattedStartDate = "DD MM YY";
    // const formattedEndDate = "DD MM YY";
    if (typeof planStartDateFromAPI === "string") {
        // const [startYear, startMonth, startDay] = planStartDateFromAPI.split("-");
        // const startDate = new Date(
        //     Number(startYear),
        //     Number(startMonth) - 1,
        //     Number(startDay)
        // );
        // formattedStartDate = startDate.toLocaleDateString('en-GB', {
        //     day: 'numeric',
        //     month: 'short',
        //     year: 'numeric'
        // });

        if (typeof planEndDateFromAPI === "string") {
            // const [endYear, endMonth, endDay] = planEndDateFromAPI.split("-");
            // const endDate = new Date(
            //     Number(endYear),
            //     Number(endMonth) - 1,
            //     Number(endDay)
            // );
            // formattedEndDate = endDate.toLocaleDateString('en-GB', {
            //     day: 'numeric',
            //     month: 'short',
            //     year: 'numeric'
            // });
        }
    } 
    // else {
    //     formattedStartDate = 'Unknown';
    //     formattedEndDate = 'Unknown';
    // }

    console.log("Plan type in order history page is", planDataFromAPI?.type);




    type Pet = { petId?: string; name?: string };
    type SubscriptionRecord = { _id: string; pets?: Pet[] };
    type PetInfo = { name: string; petId: string; subId: string };

    function extractAllPetInfo(data: { result: SubscriptionRecord[] } | undefined): PetInfo[] {
        const petInfo: PetInfo[] = [];

        // Check if data and result exist
        if (data?.result && Array.isArray(data.result)) {
            // Iterate through each record in the result array
            data.result.forEach((record: SubscriptionRecord) => {
                // Check if pets array exists and iterate through it
                if (record.pets && Array.isArray(record.pets)) {
                    record.pets.forEach(pet => {
                        // Add pet info to the array if both name and petId exist
                        if (pet.name && pet.petId) {
                            petInfo.push({
                                name: pet.name,
                                petId: pet.petId,
                                subId: record._id,
                            });
                        }
                    });
                }
            });
        }

        return petInfo;
    }

    // Extract all pet info from subscriptionDetails
    const petInfoList = extractAllPetInfo(subscriptionDetails);
    console.log("petInfoList in order history", petInfoList);

    // const petNames = ["Dog1","Dog2","Cat1"];

    // const selectedPetIndex = 0;

    const [prevPetListLength, setPrevPetListLength] = useState(petInfoList.length);

    useEffect(() => {
        if (petInfoList.length > prevPetListLength) {
            // New pet added, select the last one
            const lastIndex = petInfoList.length - 1;
            const lastPet = petInfoList[lastIndex];
            setselectedPetIndex(lastIndex);
            setSelectedPetIndexFromOrderHistory(lastIndex);
            setSelectedPet(lastPet);
            setSelectedPetFromOrderHistory(lastPet);
        }
        setPrevPetListLength(petInfoList.length);
    }, [petInfoList.length]);

    useEffect(() => {
        if (selectedPetIndexFromOrderHistory) {
            setselectedPetIndex(selectedPetIndexFromOrderHistory)
        }
    }, [selectedPetIndexFromOrderHistory]);

    useEffect(() => {
        if (selectedPetFromOrderHistory) {
            setSelectedPet(selectedPetFromOrderHistory);
        }
    }, [selectedPetFromOrderHistory]);


    return (
        <>
            <Typography
                tag="h5"
                text="Orders & History"
                className="capitalize !font-normal mb-6 text-black" />

            {
                <div className="pb-6 sm:pb-[7dvh] flex flex-col sm:flex-row justify-between items-start sm:items-center">
                    <ul className="flex items-center gap-5  flex-wrap">
                        {petInfoList.length > 0 ? (
                            petInfoList.map((petData, index) => (
                                <li
                                    key={index}
                                    className={`font-bold cursor-pointer uppercase underline ${index === selectedPetIndex ? "text-[#944446] underline-[#944446]" : ""}`}
                                    onClick={() => {
                                        // setSubId(petData.subId);
                                        // setPetId(petData.petId);
                                        setselectedPetIndex(index);
                                        setSelectedPetIndexFromOrderHistory(index);
                                        setSelectedPet(petData);
                                        setSelectedPetFromOrderHistory(petData);
                                    }}
                                >
                                    {petData.name}
                                </li>
                            ))
                        ) : (
                            <li className="font-bold">No Subscriptions found</li>
                        )}
                    </ul>
                    <Button variant={'linkSecondary'} className="underline   font-normal decoration-1 hover:text-primary-dark max-[576px]:mt-8">
                        Back to current plan
                    </Button>
                </div>
            }

            <div className="mb-6">
                {/* <span className="block text-center pt-[15%] text-[16px] text-[#919191] capitalize">no previous history</span> */}
                <div className="overflow-x-auto ">
                    <div className="rounded-xl border border-[#A1A1A1] overflow-hidden bg-[#F6F6EC] w-fit">
                        <div className="max-h-[60dvh] overflow-y-auto overflow-x-auto">
                            <table className="min-w-[650px] text-sm text-left w-full">
                                <thead className="sticky top-0 z-10 bg-[#F6F6EC] border-b border-[#A1A1A1] text-[#4F4F4F]">
                                    <tr className="text-sm font-medium">
                                        <th className="px-4 py-3 text-[15px] text-text-color bg-[#F6F6EC]">Date</th>
                                        <th className="px-4 py-3 text-[15px] text-text-color bg-[#F6F6EC]">Plan Type</th>
                                        <th className="px-4 py-3 text-[15px] text-text-color bg-[#F6F6EC]">Protein</th>
                                        <th className="px-4 py-3 text-[15px] text-text-color bg-[#F6F6EC]">Bowl Size</th>
                                        <th className="px-4 py-3 text-[15px] text-text-color bg-[#F6F6EC]">Download Invoice</th>
                                    </tr>
                                </thead>
                                <tbody className="text-[14px] text-text-color">
                                    {historyData.map((item, index) => (
                                        <tr key={index} className="border-b border-[#A1A1A1] last:border-0 hover:bg-[#2BB673]/5">
                                            <td className="px-4 py-3">{item.date}</td>
                                            <td className="px-4 py-3">{item.planType}</td>
                                            <td className="px-4 py-3">{item.protein}</td>
                                            <td className="px-4 py-3">{item.bowlSize}</td>
                                            <td className="px-4 py-3">
                                                <a
                                                    href="#"
                                                    className={cn(
                                                        "flex items-center gap-1 text-green-700 hover:underline hover:text-green-800"
                                                    )}
                                                >
                                                    <div className="relative">
                                                        <Image src='/icons/download-primry.svg' width={18} height={18} alt="arrow"  />
                                                    </div>
                                                    INVOICE
                                                </a>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>



            </div>



        </>
    );
}
