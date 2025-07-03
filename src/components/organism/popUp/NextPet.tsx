"use client";

import React from "react";
import { X } from "lucide-react"; // Optional, or swap it for anything you like
import Typography from "@/components/atoms/typography/Typography";
import { Button } from "@/components/ui/button";

const NextPet = () => {
    return (
        <div className="fixed inset-0 z-50 bg-[rgba(0,0,0,0.5)] flex items-center justify-center">
            <div className="relative bg-[#FDFFF4] rounded-xl shadow-xl  max-w-sm w-full text-center">
                <div className="flex flex-col items-center p-5">
                    <button
                        className="absolute top-[-4%] right-[-3%] bg-[#FDFFF4] text-primary-dark border border-primary-dark rounded-full hover:text-gray-700"
                    >
                        <X size={24} />
                    </button>
                    <Typography tag="h4" text="Next Pet Details" className="text-primary-dark mb-6" />
                    <Typography tag="h6" text="Are you sure you want to move to the next pet?" className="text-text-color mb-5 w-[90%]" />
                </div>
                <div className="p-5 border-t border-[#E4E7D3]">

                    <Button variant={"primaryBtn"} className="w-full text-white">
                         Continue to the Next Pet Info
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default NextPet;
