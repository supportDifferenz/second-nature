"use client";

import React, { useState, useEffect } from "react";
import { X } from "lucide-react";
import Typography from "@/components/atoms/typography/Typography";
import { Button } from "@/components/ui/button";

interface ProceedCheckProps {
  headingText: string;
  subText: string;
  firstButtonText: string;
  secondButtonText: string;
  dateRangeText?: string;
}

const ProceedCheck = ({
  headingText,
  subText,
  firstButtonText,
  secondButtonText,
  dateRangeText,
}: ProceedCheckProps) => {
  const [isOpen, setIsOpen] = useState(true);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  const handleClose = () => {
    setIsOpen(false);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-[rgba(0,0,0,0.5)] flex items-center justify-center">
      <div className="relative bg-[#FDFFF4] rounded-xl shadow-xl w-fit text-center pt-5 pb-6 px-10">
        <button
          className="absolute top-[-4%] right-[-3%] bg-[#FDFFF4] text-primary-dark cursor-pointer border border-primary-dark rounded-full hover:text-gray-700"
          onClick={handleClose}
        >
          <X size={24} />
        </button>
        <div className="flex flex-col items-center gap-6">
          <Typography tag="h5" text={headingText} className="text-primary-dark" />
          <div className="flex flex-col items-center">
            <Typography tag="text" text={subText} className="text-text-color font-semibold" />
            {dateRangeText && (
              <Typography tag="text" text={dateRangeText} className="text-text-color font-semibold" />
            )}
          </div>
          <div className="flex w-full gap-5">
            <Button variant={"primaryBtn"} size={"small"}>
              {firstButtonText}
            </Button>
            <Button variant={"primaryBtn"} size={"small"}>
              {secondButtonText}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProceedCheck;
