import { InputLabeled } from "@/components/molecules/inputLabeled/InputLabeled";
import Typography from "@/components/atoms/typography/Typography";
import { Button } from "@/components/ui/button";
import React from "react";

interface EditAddressesProps {
  selectedAddress: string;
  setIsEditing: (isEditing: boolean) => void;
}

export default function EditAddresses({ selectedAddress, setIsEditing }: EditAddressesProps) {
  return (
    <form action="">
      <Typography
        tag="h6"
        text={selectedAddress === "shipping" ? "Shipping Address" : "Billing Address"}
        className="capitalize !font-normal mb-6 text-black"
      />
      <div className="grid sm:grid-cols-2 gap-x-5 gap-y-(--space-22-43) ">
        {/* First Name */}
        <InputLabeled
          label="First Name"
          type="text"
          placeholder="Faheed"
          //   error="not required "
        />
        {/* Last Name */}
        <InputLabeled label="Last Name" type="text" placeholder="Ahmed" />
        {/* Email */}
        <InputLabeled
          label="Email"
          type="email"
          placeholder="faheed.admin@instavista.qa"
        />
        {/* Alternative Email */}
        <InputLabeled
          label="Alternative Email"
          type="email"
          placeholder="Type your alternative email"
        />
        {/* Mobile Number*/}
        <InputLabeled
          label="Mobile Number"
          type="text"
          placeholder="+974-665-556-09"
        />
        {/* Mobile Number*/}
        <InputLabeled
          label="Alternative Phone Number"
          type="text"
          placeholder="Type your alternative phone number"
        />
        {/* Address line*/}
        <InputLabeled
          label="Address line"
          type="text"
          placeholder="Museum Park St, Old Salata, Corniche, Doha"
          className="sm:col-span-2"

        />
        {/* App/Suite*/}
        <InputLabeled
          label="App/Suite"
          type="text"
          placeholder="Type you App/Suite"
          className="sm:col-span-2"
        />
        <div className="flex gap-3">
          <Button
            type="submit"
            variant={"whiteBtnSecondary2BorderAndText"}
            className="w-fit"
            onClick={() => setIsEditing(false)}
          >
            Update your address
          </Button>
          <Button
            type="submit"
            variant="outlineSecondaryBtn"
            className="w-fit"
            onClick={() => setIsEditing(false)}
          >
            Cancel
          </Button>
        </div>
      </div>
    </form>
  );
}
