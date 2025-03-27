import Typography from "@/components/atoms/typography/Typography";
import { HealthBenefitTitle } from "@/components/molecules/titleSyles/Title";
import Image from "next/image";
import React from "react";

export default function HealthBenefits() {
  const mealContent = {
    beef: {
      description: "",
    },
    chicken: {
      description: "",
    },
    lamb: {
      description: "",
    },
  };
  return (
    <div className="flex flex-col gap-[var(--space-40-80)] w-full sm:w-[80%] mx-auto mt-[var(--space-64-145)] bg-[#F9FAF1] sm:rounded-[1.04vw] px-[var(--space-20-120)] py-[var(--space-60-100)] ">
      <HealthBenefitTitle
        title="Health Benefits"
        paragraph="A protein-packed meal rich in iron, fiber, and omega-3s to support strong muscles, healthy digestion, and a shiny coat."
      />
      <div className="flex flex-wrap">
        <div className="flex flex-col sm:flex-row gap-[var(--space-8-30)] pr-[var(--space-22-43)] pb-[var(--space-22-43)] border-secondary-2 border-b border-r w-[50%]">
          <div className="w-[22vw] sm:w-[12.25vw]  ">
            <Image
              src="/icons/heart-hand.svg"
              alt="benefits"
              className="!static hidden sm:block inset-0 w-full !h-full object-cover object-center"
              fill
              priority
            />
          </div>
          <Typography
            tag="h6"
            className="capitalize highlight text-primary-dark mb-[var(--space-10-20)]"
            text="Heart Health"
            role="title"
            ariaLabel="{highlight}"
            ariaLabelledBy="title"
          >
            <span
              className="normalize"
              role=""
              aria-label=""
              aria-labelledby=""
            >
              :Rich in Coenzyme, aiding heart health and cellular energy
              production.
            </span>
          </Typography>
        </div>
        <div className="flex flex-col sm:flex-row gap-[var(--space-8-30)] w-[50%] pl-[var(--space-22-43)] pb-[var(--space-22-43)] border-secondary-2 border-b">
          <div className="w-[22vw] sm:w-[12.25vw] ">
            <Image
              src="/icons/eye-plus.svg"
              alt="benefits"
              className="!static hidden sm:block inset-0 w-full !h-full object-cover object-center"
              fill
              priority
            />
          </div>
          <Typography
            tag="h6"
            className="capitalize highlight text-primary-dark mb-[var(--space-10-20)]"
            text="Heart Health"
            role="title"
            ariaLabel="{highlight}"
            ariaLabelledBy="title"
          >
            <span
              className="normalize"
              role=""
              aria-label=""
              aria-labelledby=""
            >
              :Rich in Coenzyme, aiding heart health and cellular energy
              production.
            </span>
          </Typography>
        </div>
        <div className="flex flex-col sm:flex-row gap-[var(--space-8-30)] w-[50%] pr-[var(--space-22-43)] pt-[var(--space-22-43)] border-secondary-2 border-r">
          <div className="w-[22vw] sm:w-[12.25vw] ">
            <Image
              src="/icons/carrot.svg"
              alt="benefits"
              className="!static hidden sm:block inset-0 w-full !h-full object-cover object-center"
              fill
              priority
            />
          </div>
          <Typography
            tag="h6"
            className="capitalize highlight text-primary-dark mb-[var(--space-10-20)]"
            text="Heart Health"
            role="title"
            ariaLabel="{highlight}"
            ariaLabelledBy="title"
          >
            <span
              className="normalize"
              role=""
              aria-label=""
              aria-labelledby=""
            >
              :Rich in Coenzyme, aiding heart health and cellular energy
              production.
            </span>
          </Typography>
        </div>
        <div className="flex flex-col sm:flex-row gap-[var(--space-8-30)] w-[50%] pl-[var(--space-22-43)] pt-[var(--space-22-43)]">
          <div className="w-[22vw] sm:w-[12.25vw] ">
            <Image
              src="/icons/brain-03.svg"
              alt="benefits"
              className="!static hidden sm:block inset-0 w-full !h-full object-cover object-center"
              fill
              priority
            />
          </div>
          <Typography
            tag="h6"
            className="capitalize highlight text-primary-dark mb-[var(--space-10-20)]"
            text="Heart Health"
            role="title"
            ariaLabel="{highlight}"
            ariaLabelledBy="title"
          >
            <span
              className="normalize"
              role=""
              aria-label=""
              aria-labelledby=""
            >
              :Rich in Coenzyme, aiding heart health and cellular energy
              production.
            </span>
          </Typography>
        </div>
      </div>
    </div>
  );
}
