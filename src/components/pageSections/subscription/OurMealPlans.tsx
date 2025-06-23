import { SecondaryInlineTitle } from "@/components/molecules/titleSyles/Title";
import Image from "next/image";
import React from "react";
import { MealCard } from "@/components/organism/mealCard/MealCard";
import { MealCardPropsType } from "@/components/types/type";
import Typography from "@/components/atoms/typography/Typography";

const mealsData: MealCardPropsType[] = [
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
      <div className="container flex flex-col lg:flex-row">
        <div className="flex-[42%] order-2 lg:order-1 relative ">
          <div className="sticky top-[13%] tall-screen  h-fit">
            <SecondaryInlineTitle
              title="Our"
              highlight="Meal Plans "
              textAlign="text-center sm:text-center  lg:text-left"
              textColor="#00683D"
              className="mb-10 sm:mx-auto lg:ml-0 hidden lg:block"
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
        <div className="flex-[58%] order-1 lg:order-2">
          <div className="flex flex-col items-center justify-center mb-10 lg:hidden">
            <Typography
              tag="h2"
              text="Our"
              className="text-primary-dark"
              ariaLabel=""
            />
            <Typography
              tag="h2"
              text="Subscription Plans"
              className="text-primary-dark highlight whitespace-nowrap"
              ariaLabel=""
            />
          </div>
          <ul className="hidden lg:flex items-center justify-center flex-wrap gap-6 gap-y-4">
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
          <div className="my-15 hidden lg:flex flex-col items-center justify-center">
            <div className="flex">
              <div className="">
                <div className="pr-11 border-r border-primary">
                  <Typography
                    tag="h3"
                    text="Regular Plan"
                    className="text-primary-dark highlight"
                  />
                  <Typography
                    tag="text"
                    text="Auto-Renews Every 28 Days"
                    className="text-black"
                  />
                </div>
                <div
                  className="w-fit ml-[10%] mt-2 text-white px-6 py-1 font-bold rounded-full"
                  style={{
                    backgroundImage:
                      "linear-gradient(to right, #00683D 0%, #09B870 54%, #00683D 100%)",
                  }}
                >
                  <Typography
                    tag="text"
                    text="Recommended"
                    className="text-white whitespace-nowrap"
                  />
                </div>
              </div>
              <div className="pl-11">
                <Typography
                  tag="h3"
                  text="Trial Plan"
                  className="text-primary-dark highlight"
                />
                <Typography
                  tag="text"
                  text="One-Time Purchase for 7 Days"
                  className="text-black"
                />
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-6 mt-4 pb-25">
            {mealsData.map((meal, index) => (
              <MealCard key={`${meal.title}-${index}`} {...meal} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
