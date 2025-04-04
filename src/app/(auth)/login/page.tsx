import Typography from "@/components/atoms/typography/Typography";
import AuthLayout from "@/components/templates/AuthLayout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import React from "react";

export default function page() {
  return (
    <AuthLayout>
      <div className="flex flex-col justify-between bg-[#F3F5E8] h-full lg:w-[31.25vw] rounded-2xl  p-12">
        <div className="flex flex-col text-center sm:text-start border-b border-[#A1A1A1] pb-[var(--space-20-57)]">
          <div className=" pb-[var(--space-16-24)]">
            <Typography
              tag="h3"
              text="Welcome!"
              className="font-bold text-primary-dark"
            />
            <Typography
              tag="h3"
              text="Login to Your Account"
              className="highlight font-bold text-primary-dark"
            />
            <Typography tag="span" text="Magic is Pawsible!" className="" />
          </div>
          <div className="flex flex-col gap-2 sm:pr-7 pb-4 sm:pb-2">
            <Input variant="roundedEdgeInput" placeholder="Enter your mail" />
            <Input
              variant="roundedEdgeInput"
              type="password"
              placeholder="Enter your password"
            />
          </div>
          <Typography tag="span" text="Forgot Password" className="underline" />
          <Button
            size={"small"}
            variant={"primaryBtn"}
            className="mt-[var(--space-34-38)] mx-auto sm:ml-0"
          >
            Login
          </Button>
        </div>
        <div className="flex flex-row sm:flex-col mt-auto">
          <Typography
            tag="h6"
            text="Don’t have an account?"
            className="!font-medium text-primary-dark"
          />
          <Typography
            tag="h6"
            text="Build your plan"
            className="underline text-primary-dark"
          />
        </div>
      </div>
    </AuthLayout>
  );
}
