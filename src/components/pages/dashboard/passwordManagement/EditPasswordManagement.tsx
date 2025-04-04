import { InputLabeled } from "@/components/molecules/inputLabeled/InputLabeled";
import { Button } from "@/components/ui/button";
import React from "react";

export default function EditPasswordManagement() {
  return (
    <form action="">
      <div className="grid sm:grid-cols-2 gap-x-5 gap-y-(--space-22-43) ">
        <InputLabeled
          label="Your Password"
          type="password"
          placeholder="******************"
          className="max-w-[400px]"
        />
        {/* Repeat Password  */}
        <InputLabeled
          label="Repeat Password "
          type="password"
          placeholder="******************"
          className="max-w-[400px]"
        />
        <Button
          type="submit"
          variant={"whiteBtnSecondary2BorderAndText"}
          className="w-fit"
        >
          Update Password
        </Button>
      </div>
    </form>
  );
}
