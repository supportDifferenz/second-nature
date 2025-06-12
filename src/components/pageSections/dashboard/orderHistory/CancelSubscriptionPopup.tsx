import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Popup } from '@/components/molecules/popupSkelton/popup';
import Typography from '@/components/atoms/typography/Typography';
import { Textarea } from '@/components/ui/textarea';

interface CancelSubscriptionPopupProps {
  isOpen: boolean;
  onClose: () => void;
  onCancel: (reason: string) => void;
  reasonOptions?: string[];
}

export const CancelSubscriptionPopup: React.FC<CancelSubscriptionPopupProps> = ({
  isOpen,
  onClose,
  onCancel,
  reasonOptions = [
    "Delivery frequency",
    "Portion size",
    "Recipe selection",
    "Dietary restrictions",
    "Other reasons"
  ],
}) => {
  const [reason, setReason] = useState("");
  const [additionalInfo, setAdditionalInfo] = useState("");

  const handleCancel = () => {
    if (reason) {
      const fullReason = additionalInfo 
        ? `${reason}: ${additionalInfo}` 
        : reason;
      onCancel(fullReason);
      onClose();
    }
  };

  // Reset form when popup opens
  React.useEffect(() => {
    if (isOpen) {
      setReason("");
      setAdditionalInfo("");
    }
  }, [isOpen]);

  return (
    <Popup
      isOpen={isOpen}
      onClose={onClose}
      title="Cancel Subscription"
      size={"md"}
      footer={
        <div className="flex justify-center w-full px-7 border-t border-[#E4E7D3] py-7 pt-5 mt-5">
          <Button
            onClick={handleCancel}
            disabled={!reason}
            className="w-full" 
            size={"md"}
          >
            Submit
          </Button>
        </div>
      }
    >
      <div className="flex flex-col">
        <div className="space-y-3">
          {reasonOptions.map((option, index) => {
            const id = `cancel-reason-${index}`;
            return (
              <div key={option} className="flex items-center space-x-3">
                <input
                  type="radio"
                  id={id}
                  name="cancelReason" // Same name for all radio buttons
                  value={option}
                  checked={reason === option}
                  onChange={(e) => setReason(e.target.value)}
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 focus:ring-2 cursor-pointer"
                />
                <label 
                  htmlFor={id}
                  className="text-sm font-normal cursor-pointer flex-1 select-none"
                >
                  {option}
                </label>
              </div>
            );
          })}
        </div>

        <div className="relative mt-5">
          <Typography 
            tag="label" 
            text="Tell us more" 
            className="font-normal uppercase whitespace-nowrap absolute bg-white subtitle2 text-secondary-1 -top-[7px] left-1/2 transform -translate-x-1/2 px-1"
          />
          <Textarea 
            value={additionalInfo}
            onChange={(e) => setAdditionalInfo(e.target.value)}
            placeholder="Please provide additional details..."
            className="mt-2"
          />
        </div>
      </div>
    </Popup>
  );
};