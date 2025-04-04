"use client";
import Typography from "@/components/atoms/typography/Typography";
import AuthLayout from "@/components/templates/AuthLayout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import React, { useState } from "react";

export default function Page() {
  // Add state to track whether the reset link has been sent
  const [isLinkSent, setIsLinkSent] = useState(false);

  // Handle button click
  const handleResetClick = () => {
    setIsLinkSent(true);
    // Here you would also add your actual reset password API call
  };

  return (
    <AuthLayout>
      <div className="flex flex-col bg-[#F3F5E8] h-full lg:w-[31.25vw] rounded-2xl p-12">
        <div className="flex flex-col text-center sm:text-start pb-[var(--space-27-34)]">
          <div className="flex gap-2 pb-[var(--space-16-24)]">
            <Typography
              tag="h3"
              text="Reset Your"
              className="font-bold text-primary-dark"
            />
            <Typography
              tag="h3"
              text="Password"
              className="highlight font-bold text-primary-dark"
            />
          </div>
          
          {/* Conditionally render input and button or confirmation message */}
          {!isLinkSent ? (
            <div>
              <div className="flex flex-col gap-2 sm:pr-7 pb-[var(--space-16-24)]">
                <Input variant="roundedEdgeInput" placeholder="Account mail" />
              </div>
              <Button
                size={"small"}
                variant={"primaryBtn"}
                className="mx-auto sm:ml-0"
                onClick={handleResetClick}
              >
                Reset Password
              </Button>
            </div>
          ) : (
            <Typography
              tag="p"
              text="A reset password link has been sent to your email."
              className=" lg:w-[66%]"
            />
          )}
        </div>
        <Typography tag="span" text="Return to Login" className="underline text-center sm:text-start" />
      </div>
    </AuthLayout>
  );
}