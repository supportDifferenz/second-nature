"use client";

import React, { useEffect } from "react";
import { X } from "lucide-react";
import Typography from "@/components/atoms/typography/Typography";
import { Button } from "@/components/ui/button";

interface ProceedCheckProps {
  isOpen?: boolean;
  setIsOpen?: (open: boolean) => void;
  setIsPausePopupOpen?: (open: boolean) => void; // Optional: if you want to control the open state from parent
  // onClose?: () => void;
  headingText: string;
  subText: string;
  firstButtonText: string;
  secondButtonText: string;
  dateRangeText?: string;
  handleSubmit?: () => void; // Optional: if you want to handle submit action
}

const ProceedCheck = ({
  isOpen = true,
  setIsOpen = () => {},
  setIsPausePopupOpen = () => {}, // Default to a no-op function
  // onClose = () => {},
  headingText,
  subText,
  firstButtonText,
  secondButtonText,
  dateRangeText,
  handleSubmit = () => {}, // Default to a no-op function
}: ProceedCheckProps) => {
  // const [isOpen, setIsOpen] = useState(true);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  const handleClose = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    e.preventDefault();
    if (setIsOpen) setIsOpen(false);
    // setIsOpen(false);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-75 bg-[rgba(0,0,0,0.5)] flex items-center justify-center">
      <div className="relative bg-[#FDFFF4] rounded-xl w-fit text-center pt-5 pb-6 px-10">
        <button
          className="absolute top-[-4%] right-[-3%] bg-[#FDFFF4] cursor-pointer text-primary-dark border border-primary-dark rounded-full hover:text-gray-700"
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
            <Button 
              variant={"primaryBtn"} 
              size={"small"}
              onClick={() => {
                if (setIsPausePopupOpen) setIsPausePopupOpen(true); // Close the popup when proceeding
                if (setIsOpen) setIsOpen(false); // Close the popup when proceeding
              }}
            >
              {firstButtonText}
            </Button>
            <Button 
              variant={"primaryBtn"} 
              size={"small"}
              onClick={() => {
                if (setIsOpen) setIsOpen(false); // Close the popup when proceeding
                if (handleSubmit) handleSubmit(); // Call the submit handler if provided
              }}
            >
              {secondButtonText}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProceedCheck;
