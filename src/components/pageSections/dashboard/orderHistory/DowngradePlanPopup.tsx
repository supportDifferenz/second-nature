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
}

export const DowngradePlanPopup: React.FC<DowngradePlanPopupProps> = ({
  isOpen,
  onClose,
  onConfirm,
  // nextDeliveryDate = "20th June 2025",
  // newPlanDetails = "Small Box (4 portions for 2 people)",
}) => {
  return (
    <Popup
      isOpen={isOpen}
      onClose={onClose}
      title="Downgrade Plan"
      size={"md"}
      footer={
        <div className="flex justify-center w-full px-7 border-t border-[#E4E7D3] py-7 pt-5 mt-5">
          <Button onClick={onConfirm} className="w-full" size={"md"}>
            Submit
          </Button>
        </div>
      }
    >
      <div className="flex flex-col gap-5">
        <div className="relative">
          <Typography tag="label" text="kindly state your reason" className="font-normal uppercase whitespace-nowrap absolute bg-white subtitle2 text-secondary-1 -top-[7px] left-1/2 transform -translate-x-1/2 px-1"/>
          <Textarea />
        </div>

        <Typography
          tag="p"
          text={`Downgrade to Half-Bowl effective from Apr 24, 2025`}
          className="text-warning-meal-red text-center"
        />
      </div>
    </Popup>
  );
};
