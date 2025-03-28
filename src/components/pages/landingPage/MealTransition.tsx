import Image from "next/image";
import { Button } from "@/components/ui/button";
import Typography from "@/components/atoms/typography/Typography";
import {  SecondaryInlineTitle } from "@/components/molecules/titleSyles/Title";

export default function MealTransition() {
  return (
    <section>
      <div className="container  flex flex-col lg:flex-row  gap-(--space-33-42)">
        <SecondaryInlineTitle
        
          highlight="Transition"
          title="Meal"
          textAlign="center"
          textColor="#00683D"
          
          className="lg:hidden text-white"
        />
        {/* Image Section */}
        <div className="lg:flex-1 sm:h-150 lg:h-auto lg:min-h-full ">
          <Image
            src="/images/landing-meal-treat-badge.webp"
            alt="Woman feeding a cat"
            fill
            className="!static !h-full rounded-(--space-40-60) object-cover object-center"
          />
        </div>

        {/* Content Section */}
        <div className="lg:flex-1 ">
          <SecondaryInlineTitle
            highlight="Transition"
            title="Meal"
            textAlign="left"
            textColor="#00683D"
            className="hidden lg:block &>text-white"
          />

          <Typography
            tag="h5"
            text="Transitioning To Second Nature Is Simple:"
            className="mb-6"
          />

          <ul>
            <li className="flex items-center gap-(--space-16-24)">
              <Typography
                tag="h4"
                text="1"
                className="text-center text-secondary-2 font-bold border-b border-primary px-1.5 py-(--space-13-19)"
              />
              <Typography
                tag="h6"
                text="Gradually reduce your pet’s current diet while introducing our
                fresh."
              />
            </li>
            <li className="flex items-center gap-(--space-16-24)">
              <Typography
                tag="h4"
                text="2"
                className="text-center text-secondary-2 font-bold border-b border-primary px-1.5 py-(--space-13-19)"
              />

              <Typography
                tag="h6"
                text="  Wholesome meals over a 10-day period. You’ll soon notice
                increased energy."
              />
            </li>
            <li className="flex items-center gap-(--space-16-24)">
              <Typography
                tag="h4"
                text="3"
                className="text-center text-secondary-2 font-bold  border-primary px-1.5 pt-(--space-13-19)"
              />
              <Typography
                tag="h6"
                text="Improved digestion, and a shinier, healthier coat."
              />
            </li>
          </ul>

          <div className="mt-6 sm:p-10 py-5 px-[5%] sm:py-8 bg-primary-light rounded-(--space-30-60)">
            <Typography
              tag="h5"
              text="Gradually Introduce Our Fresh Meals For Lasting Benefits."
              className="text-primary-dark mb-6 text-center sm:text-left"
            />
            <Button
              variant="primaryBtn"
              size={"md"}
              className="mt-3 mx-auto sm:ml-0"
            >
              Learn More About Transitioning
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
