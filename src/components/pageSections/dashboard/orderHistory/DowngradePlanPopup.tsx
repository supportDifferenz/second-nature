import React from "react";
import { Button } from "@/components/ui/button";
import { Popup } from "@/components/molecules/popupSkelton/popup";
import Typography from "@/components/atoms/typography/Typography";
import { Textarea } from "@/components/ui/textarea";

interface DowngradePlanPopupProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
  nextDeliveryDate?: string;
  newPlanDetails?: string;
  bowlSize?: string;
  isUpgrade?: boolean;
  isDowngrade?: boolean;
  planStartDate?: string;
  planChangeError?: string;
  planChangeReason?: string;
  isDowngradeLoading?: boolean;
  setPlanChangeReason?: (reason: string) => void;
  handleDowngrade?: () => void;
  handleUpgrade?: () => void;
}

export const DowngradePlanPopup: React.FC<DowngradePlanPopupProps> = ({
  isOpen,
  onClose,
  onConfirm,
  // nextDeliveryDate = "20th June 2025",
  // newPlanDetails = "Small Box (4 portions for 2 people)",
  bowlSize,
  isUpgrade,
  isDowngrade,
  planStartDate,
  planChangeError,
  planChangeReason,
  isDowngradeLoading,
  setPlanChangeReason,
  handleDowngrade,
  handleUpgrade,
}) => {

  const planStartedDate = new Date(planStartDate ?? "");
  const currentDate = new Date();
  const differenceInDays = Math.abs((currentDate.getTime() - planStartedDate.getTime()) / (1000 * 60 * 60 * 24));
  const is23DaysApart = differenceInDays <= 23;
  const lastValidDate = new Date(planStartedDate);
  // Add 23 days to the start date (since <= 23 is allowed)
  lastValidDate.setDate(lastValidDate.getDate() + 23);

  const showSubmitButton = () => {
    if(bowlSize === "half" && !isUpgrade) {
      return true
    } else if(bowlSize === "full" && !isDowngrade) {
      return true
    }
  }

  const handleSubmit = () => {
    onConfirm();
    setPlanChangeReason?.(planChangeReason ?? "");
    if(bowlSize === "half") {
      handleUpgrade?.();
    } else if(bowlSize === "full") {
      handleDowngrade?.();
    }
  }

  return (
    <Popup
      isOpen={isOpen}
      onClose={onClose}
      title={ bowlSize === "half" ? "Upgrade Plan" : "Downgrade Plan"}
      // title="Downgrade Plan"
      size={"md"}
      footer={
        <div className={`${showSubmitButton() ? "" : "hidden"} flex justify-center w-full px-7 border-t border-[#E4E7D3] py-7 pt-5 mt-5`}>
          <Button 
            onClick={handleSubmit} 
            className="w-full" size={"md"}
            disabled={planChangeReason === ""}
          >
            {isDowngradeLoading ? "Submitting..." : "Submit"}
          </Button>
          {
            planChangeError && 
              <Typography 
                tag="p" 
                text={planChangeError} 
                className="text-warning-meal-red text-center mt-2"
              />
          }
        </div>
      }
    >
      <div className="flex flex-col gap-5">
        <div className="relative">
          <Typography tag="label" text="kindly state your reason" className="font-normal uppercase whitespace-nowrap absolute bg-white subtitle2 text-secondary-1 -top-[7px] left-1/2 transform -translate-x-1/2 px-1"/>
          {
            is23DaysApart
            ? <Textarea
                value={planChangeReason}
                onChange={(e) => setPlanChangeReason?.(e.target.value)}
              />
            : <></>
          }
          {/* <Textarea /> */}
        </div>

        <Typography
          tag="p"
          text={`Downgrade to Half-Bowl effective until ${lastValidDate.toDateString()}`}
          className="text-warning-meal-red text-center"
        />
      </div>
    </Popup>
  );
};
