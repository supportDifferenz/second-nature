import Typography from "@/components/atoms/typography/Typography";
import { SecondaryBlockTitle } from "@/components/molecules/titleSyles/Title";
import Image from "next/image";
import React from "react";

const HowItWorkHowItWork = [
  {
    id: 1,
    icon: "/icons/how-It-work-steps-icon-1.svg",
    title: "Pick the perfect plan",
    description:
      "We’ll create a meal plan tailored to your pet’s unique needs. Choosing favourite recipes and portion sizes.",
  },
  {
    id: 2,
    icon: "/icons/how-It-work-steps-icon-2.svg",
    title: "Get fresh meals delivered",
    description:
      "Your pet’s meals are delivered straight to your door, and we’ll keep you updated every step of the way.",
  },
  {
    id: 3,
    icon: "/icons/how-It-work-steps-icon-3.svg",
    title: "Stay in control",
    description:
      "Skip a delivery, pause, or cancel your subscription anytime—it’s completely flexible to suit you and your pet!",
  },
];
export default function HowItWorks() {
  return (
    <section>
      <div className="container 2xl:py-30">
        <SecondaryBlockTitle
          caption="How it Works"
          title="Your subscription in"
          highlight="3 easy HowItWorkSteps"
          className="mb-(--space-44-120)"
        />
        <div className="flex justify-between ">
          {HowItWorkHowItWork.map((step, index) => (
            <div
              key={step.id}
              className="relative flex flex-col items-center text-center border border-secondary-2 rounded-lg p-6 w-[calc(100%/3.5)] "
            >
              <Typography
                tag="span"
                text={`STEP ${step.id}`}
                className="absolute -top-3.5 bg-secondary-2 text-white px-4 py-1 rounded-full  font-semibold"
              />
              <div className="w-(--space-66-100) mt-8">
                <Image src={step.icon} alt="icon" fill className="!static" />
              </div>
              <Typography tag="h5" text={step.title} className="mt-3  text-secondary-1"/>
                
              <Typography tag="p" text={step.description} className="mt-3"/>
              {index !== HowItWorkHowItWork.length - 1 && (
                <div className="absolute top-1/2 left-[113%] w-[26%] transform -translate-x-1/2 -translate-y-1/2 hidden lg:block z-[1]">
                 <Image src="/icons/long-arrow-right-secondary-2.svg" alt="arrow-left" fill className="!static"/>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
