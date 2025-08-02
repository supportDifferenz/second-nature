"use client";

import React, { useState, useEffect, startTransition} from "react";
import { X } from "lucide-react"; // Optional, or swap it for anything you like
import Typography from "@/components/atoms/typography/Typography";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

const WelcomeBackPopUp = () => {

    const router = useRouter();

    const [isOpen, setIsOpen] = useState(true);

    useEffect(() => {
        if (isOpen) {
        document.body.style.overflow = 'hidden';
        } else {
        document.body.style.overflow = 'auto';
        }
        return () => {
        document.body.style.overflow = 'auto';
        };
    }, [isOpen]);

    const handleClose = () => {
        setIsOpen(false);
        startTransition(() => {
            router.push("/location");
        });
    };

    return (
        <div className="fixed inset-0 z-50 bg-[rgba(0,0,0,0.5)] flex items-center justify-center">
            <div className="relative bg-[#FDFFF4] rounded-xl shadow-xl  max-w-sm w-full text-center">
                <div className="flex flex-col items-center p-5">
                    <button
                        className="absolute top-[-4%] right-[-3%] bg-[#FDFFF4] text-primary-dark cursor-pointer border border-primary-dark rounded-full hover:text-gray-700"
                        onClick={handleClose}
                    >
                        <X size={24} />
                    </button>
                    <Typography tag="h4" text="Welcome Back" className="text-primary-dark mb-6 font-bold" />
                    <Typography tag="h6" text="Your email verified," className="text-text-color w-[90%]" />
                    <Typography tag="h6" text="click here to get started." className="text-text-color w-[90%]" />
                </div>
                <div className="p-5 border-t border-[#E4E7D3]">

                    <Button 
                        variant={"primaryBtn"}
                        className="w-full text-white"
                        onClick={() => {
                            startTransition(() => {
                                router.push("/location");
                            })
                        }}
                    >
                        Get Started
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default WelcomeBackPopUp;
