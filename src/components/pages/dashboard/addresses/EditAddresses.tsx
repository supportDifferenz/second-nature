import { InputLabeled } from "@/components/molecules/inputLabeled/InputLabeled";
import { Button } from "@/components/ui/button";
import React from "react";

export default function EditAddresses() {
  return (
    <form action="">
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
        <Button
          type="submit"
          variant={"whiteBtnSecondary2BorderAndText"}
          className="w-fit"
        >
          Update your address
        </Button>
      </div>
    </form>
  );
}
