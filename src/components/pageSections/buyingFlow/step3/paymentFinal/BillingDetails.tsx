import Typography from "@/components/atoms/typography/Typography";
import { InputLabeled } from "@/components/molecules/inputLabeled/InputLabeled";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import React, { useState} from "react";
import Payment from "./Payment";

export default function BillingDetails() {

  const [ showPaymentDetails, setShowPaymentDetails ] = useState(false);

  const handleContinue = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setShowPaymentDetails(true);
  }

  return (
    <div className="flex flex-col gap-[var(--space-30-60)]">

      <Typography
        tag="h5"
        text="Billing Details"
        className="uppercase text-primary-dark"
      />
      <form className="flex flex-col gap-[var(--space-30-52)]  pb-14 border-b border-secondary-2">
        <InputLabeled
          label="First Name"
          placeholder="Enter your first name"
          variant="roundedEdgeInput"
        />
        <InputLabeled
          label="Last Name"
          placeholder="Enter your last name"
          variant="roundedEdgeInput"
        />
        <InputLabeled
          label="Mobile Number"
          placeholder="Enter your mobile number"
          variant="roundedEdgeInput"
        />

        <div className="flex flex-col gap-[var(--space-8-17)]">
          <InputLabeled
            label="Address"
            placeholder="Address*"
            variant="roundedEdgeInput"
          />
          <Input
            variant="roundedEdgeInput"
            placeholder="Apt, Suite*"
            className="bg-white"
          />
          <Input
            variant="roundedEdgeInput"
            placeholder="Municipality*"
            className="bg-white"
          />
        </div>
        <Button 
          className="w-full"
          onClick={handleContinue}
        >
          Continue
        </Button>
      </form>

      { showPaymentDetails && <Payment /> }

    </div>
  );
}
