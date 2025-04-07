import { SecondaryInlineTitle } from "@/components/molecules/titleSyles/Title";
import Image from "next/image";
import React from "react";
import { MealCard } from "@/components/organism/mealCard/MealCard";
import { MealCardProps } from "@/components/types/type";

const mealsData: MealCardProps[] = [
  {
    tag: "MEALS",
    title: "Chicken Bowl",
    image: "/images/chicken-bowl-cat.webp",
    features: [
      "Balanced Protein Mix",
      "Omega-3 Rich Oil",
      "Calcium & Bone Support",
      "Organ Meat Benefits",
    ],
    buttons: [
      { label: "Get Started", route: "/get-started", variant: "primary" },
    ],
  },
  {
    tag: "MEALS",
    title: "Beef Bowl",
    image: "/images/beef-bowl-cat.webp",
    features: [
      "High Protein Content",
      "Healthy Fats for Energy",
      "Iron & Zinc for Immunity",
      "Essential Amino Acids",
    ],
    buttons: [
      { label: "Get Started", route: "/get-started", variant: "primary" },
    ],
  },
];

export default function OurMealPlans() {
  return (
    <section>
      <div className="container flex">
        <div className="flex-[42%] border relative bg-amber-400">
          <div className="sticky top-[13%] border">
            <SecondaryInlineTitle
              title="Our"
              highlight="Meal Plans "
              textAlign="text-center sm:text-center  lg:text-left"
              textColor="#00683D"
              className="mb-10 sm:mx-auto lg:ml-0"
            />
            <div className="ml-[-30%] ">
              <Image
                src="/images/our-meal-plan-thumb.webp"
                alt="Our Meal Plans"
                fill
                className="!static"
              />
            </div>
          </div>
        </div>
        <div className="flex-[58%] border">
          <ul className="flex items-center justify-center flex-wrap gap-6 gap-y-4">
            <li className="flex gap-2.5 items-center">
              <div className="w-7">
                <Image
                  src="/icons/our-meal-plan-icon-2.svg"
                  alt="icon"
                  fill
                  className="!static"
                />
              </div>
              <span className="uppercase text-secondary-1 font-semibold">
                Free delivery to your doorstep
              </span>
            </li>
            <li className="flex gap-2.5 items-center">
              <div className="w-7">
                <Image
                  src="/icons/our-meal-plan-icon-3.svg"
                  alt="icon"
                  fill
                  className="!static"
                />
              </div>
              <span className="uppercase text-secondary-1 font-semibold">
                Flexible subscriptions
              </span>
            </li>
            <li className="flex gap-2.5 items-center">
              <div className="w-7">
                <Image
                  src="/icons/our-meal-plan-icon-1.svg"
                  alt="icon"
                  fill
                  className="!static"
                />
              </div>
              <span className="uppercase text-secondary-1 font-semibold">
                Completely balanced meals
              </span>
            </li>
          </ul>
          <div className="mt-15">regular plan</div>
          <div className="flex flex-col gap-6 mt-4 ">
            {mealsData.map((meal, index) => (
              <MealCard key={`${meal.title}-${index}`} {...meal} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
