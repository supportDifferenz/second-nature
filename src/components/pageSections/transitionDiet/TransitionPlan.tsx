import Typography from "@/components/atoms/typography/Typography";
import React from "react";
import DayPlan from "./DayPlan";

export default function TransitionPlan() {
  return (
    <div
      style={{
        background: "linear-gradient(to right, #F9FAF1 20%, #FFFFFF 100%)",
      }}
      className="flex items-center justify-center flex-col gap-[var(--space-20-40)] pt-[var(--space-40-80)]"
    >
      <div className="flex flex-col items-center justify-center">
        <Typography
          tag="h3"
          text="Gradual Change"
          className="text-center text-primary-dark"
        />
        <Typography
          tag="h2"
          text="for a Happier, Healthier Pet"
          className="text-center w-[60%] sm:w-auto capitalize highlight text-primary-dark"
        />
      </div>
      <Typography
        tag="h5"
        text="Your pet can easily adapt to Second Nature
                by slowly introducing the meals alongside
                your pet’s current diet "
        className="text-center w-[80%] lg:w-[41%]"
      />




      {/* plan-card */}

      <div className="flex flex-col gap-[var(--space-30-60)] mx-auto items-center justify-center border border-secondary-1 pt-[var(--space-40-60)] pb-[var(--space-24-45)] px-[var(--space-24-45)]">
        <div className="flex flex-col gap-[var(--space-13-16)] items-center justify-center">
          <Typography tag="h4" text="Your 10-Day Plan for Transitioning" className="text-center text-secondary-1" />
          <Typography tag="h6" text="The 10-day transition process gradually increases the portions every few days, ensuring your pet adjusts comfortably and enjoys a seamless dietary change." 
          className="text-center w-[80%] lg:w-[43%]" />
        </div>
        <div className="flex gap-6">
            <DayPlan />
            <DayPlan />
            <DayPlan />
            <DayPlan />
        </div>

        
      </div>
    </div>
  );
}
