import Typography from "@/components/atoms/typography/Typography";
import { HealthBenefitTitle } from "@/components/molecules/titleSyles/Title";
import Image from "next/image";
import React from "react";

// Define the type for health benefits
interface HealthBenefit {
  icon: string;
  title: string;
  description: string;
}

// Define props interface
interface HealthBenefitsProps {
  paragraph: string;
  benefits: HealthBenefit[];
}

export default function HealthBenefits({ paragraph, benefits }: HealthBenefitsProps) {
  return (
    <div className="flex flex-col gap-[var(--space-40-80)] w-full sm:w-[80%] mx-auto mt-[var(--space-64-145)] bg-[#F9FAF1] sm:rounded-[1.04vw] px-[var(--space-20-120)] py-[var(--space-60-100)] ">
      <HealthBenefitTitle
        title="Health Benefits"
        paragraph={paragraph}
      />
      <div className="flex flex-wrap">
        {benefits.map((benefit, index) => (
          <div 
            key={index} 
            className={`flex flex-col items-center sm:flex-row gap-[var(--space-8-30)] 
            ${index % 2 === 0 ? 'pr-[var(--space-22-43)] border-r' : 'pl-[var(--space-22-43)]'} 
            ${index < 2 ? 'pb-[var(--space-22-43)] border-b' : 'pt-[var(--space-22-43)]'} 
            w-[50%] border-secondary-2`}
          >
            <div className="w-[22vw] sm:w-[12.25vw]">
              <Image
                src={benefit.icon}
                alt={benefit.title}
                className="!static   inset-0 w-full !h-full object-cover object-center"
                fill
                priority
              />
            </div>
            <Typography
              tag="h6"
              className="capitalize font-bold text-center w-[85%] sm:w-auto"
              text={benefit.title}
              role="title"
              ariaLabel={benefit.title}
              ariaLabelledBy="title"
            >
              <span
                className="font-normal"
                role=""
                aria-label=""
                aria-labelledby=""
              >
                : {benefit.description}
              </span>
            </Typography>
          </div>
        ))}
      </div>
    </div>
  );
}
