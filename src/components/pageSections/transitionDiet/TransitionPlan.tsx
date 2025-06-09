// TransitionPlan.tsx
import Typography from "@/components/atoms/typography/Typography";
import React from "react";
import DayPlan from "./DayPlan";

export default function TransitionPlan() {
  const planData = [
    {
      image: "/icons/day1-3.svg",
      days: "1 - 3",
      text: "Replace 25% of your pet’s current food with Second Nature’s natural food. Mix well and serve.",
    },
    {
      image: "/icons/day4-6.svg",
      days: "4 - 6",
      text: "Replace 50% of your pet’s current food with Second Nature’s food. Mix and serve.",
    },
    {
      image: "/icons/day7-9.svg",
      days: "7 - 9",
      text: "Replace 75% of your pet’s food. Your pet is almost there!",
    },
    {
      image: "/icons/day10.svg",
      days: "10",
      text: "Serve 100% Second Nature’s food. Transition complete!",
    },
  ];

  return (
    <div
      style={{
        background: "linear-gradient(to bottom, #F9FAF1 20%, #FFFFFF 100%)",
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

      <div className="flex flex-col gap-[var(--space-30-60)] max-w-[90.65vw] lg:max-w-[80.2vw] mx-auto items-center justify-center border border-secondary-1 rounded-2xl pt-[var(--space-40-60)] pb-[var(--space-24-45)] px-[var(--space-24-45)]">
        <div className="flex flex-col gap-[var(--space-13-16)] items-center justify-center">
          <Typography
            tag="h4"
            text="Your 10-Day Plan for Transitioning"
            className="text-center text-secondary-1"
          />
          <Typography
            tag="h6"
            text="The 10-day transition process gradually increases the portions every few days, ensuring your pet adjusts comfortably and enjoys a seamless dietary change."
            className="text-center w-[80%] lg:w-[57%]"
          />
        </div>
        <div className="flex flex-wrap items-stretch justify-center gap-5">
          {planData.map((plan, index) => (
            <DayPlan
              key={index}
              image={plan.image}
              days={plan.days}
              text={plan.text}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
