import React,{ useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
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

  const handleCancel = () => {
    if (reason) {
      onCancel(reason);
      onClose();
    }
  };

  // Only reset if the reason isn't already ''
  useEffect(() => {
    if (isOpen && reason !== '') {
      setReason('');
    }
  }, [isOpen, reason]);

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
            // disabled={!reason}
            className="w-full" size={"md"}>
            Submit
          </Button>
        </div>
      }
    >
      <div className="flex flex-col ">
        <RadioGroup value={reason} onValueChange={setReason} >
          {reasonOptions.map((r) => {
            const id = r.replace(/\s+/g, '-').toLowerCase();
            return (
              <div key={r} className="flex items-start gap-2.5">
                <RadioGroupItem value={r} id={id} />
                <Label htmlFor={id} >
                  {r}
                </Label>
              </div>
            );
          })}
        </RadioGroup>
        <div className="relative mt-5">
          <Typography tag="label" text="Tell us more" className="font-normal uppercase whitespace-nowrap absolute bg-white subtitle2 text-secondary-1 -top-[7px] left-1/2 transform -translate-x-1/2 px-1"/>
          <Textarea />
        </div>
      </div>
    </Popup>
  );
};
