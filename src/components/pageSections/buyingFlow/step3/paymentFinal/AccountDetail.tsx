"use client";

import Typography from "@/components/atoms/typography/Typography";
import AlertBar from "@/components/molecules/alertBar/AlertBar";
import { InputLabeled } from "@/components/molecules/inputLabeled/InputLabeled";
import { Button } from "@/components/ui/button";
import React,{ useState} from "react";
import ShippingDetail from "./ShippingDetail";

export default function AccountDetail() {

  const [ showShippingDetails, setShowShippingDetails ] = useState(false);

  const handleContinue = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setShowShippingDetails(true);
  }

  return (
    <div className="flex flex-col gap-[var(--space-30-60)]">

      <div>
        <Typography
          tag="h5"
          text="Account Details"
          className="uppercase text-primary-dark"
        />
        <Typography
          tag="h6"
          text="Easily manage your plan, deliveries and profile from your online account."
          className="!font-normal pr-2.5 text-primary-dark"
        />
      </div>
      <form className="flex flex-col gap-[var(--space-30-52)] pb-14 border-b border-secondary-2">
        <InputLabeled label="First Name" placeholder="Enter your first name" variant="roundedEdgeInput" />
        <InputLabeled label="Last Name" placeholder="Enter your last name" variant="roundedEdgeInput" />
        <InputLabeled label="Email Address" placeholder="Enter your email address" variant="roundedEdgeInput" type="email"/>
        <InputLabeled label="Mobile Number" placeholder="Enter your mobile number" variant="roundedEdgeInput" />
        <AlertBar text="Email me with exclusive offers, new arrival alerts and cart reminders." />
        <InputLabeled label="Password" placeholder="Enter your password" variant="roundedEdgeInput" type="password"/>
        <InputLabeled label="Repeat Password" placeholder="Repeat your password" variant="roundedEdgeInput" type="password"/>
        <Button 
          className="w-full"
          onClick={handleContinue}
        >
          Continue
        </Button>
      </form>

      { showShippingDetails && <ShippingDetail /> }
      
    </div>
  );
}
