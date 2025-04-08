import React from "react";

type Step = {
  number: number;
  label: string;
};

interface CheckoutProgressBarPropsTypes {
  currentStep: number;
}

export default function CheckoutProgressBar({
  currentStep,
}: CheckoutProgressBarPropsTypes) {
  const steps: Step[] = [
    { number: 1, label: "Pet's Information" },
    { number: 2, label: "Pet's Health" },
    { number: 3, label: "Plan & Checkout" },
  ];

  return (
    <div className="relative flex items-center justify-between sm:w-[85%] lg:w-[60%] mx-auto max-w-[643px]">
      {/* Progress Line */}
      <div className="absolute h-[1px] bg-[#A1A1A1] left-1/2 w-[80%] top-[13px] sm:top-[15px] -translate-y-1/2 -translate-x-1/2 z-[-1]"></div>
      {/* Steps */}
      {steps.map((step) => (
        <div key={step.number} className="flex flex-col items-center ">
          {/* Step Circle */}
          <div
            className={` flex items-center justify-center py-0.5 px-2.5 sm:py-1 sm:px-3 rounded-full  text-white mb-(--space-6-12) ${
              step.number <= currentStep ? "bg-primary-dark" : "bg-[#818181]"
            }`}
          >
            STEP {step.number}
          </div>
          {/* Step Label */}
          <span
            className={` ${
              step.number <= currentStep
                ? "text-primary-dark font-medium"
                : "text-[#818181]"
            }`}
          >
            {step.label}
          </span>
        </div>
      ))}
    </div>
  );
}
