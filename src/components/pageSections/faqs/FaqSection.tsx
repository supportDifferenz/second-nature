"use client";
import Typography from "@/components/atoms/typography/Typography";
import { SecondaryBlockTitle } from "@/components/molecules/titleSyles/Title";
import FAQS from "@/components/organism/faq/FAQS";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import React, { useRef } from "react";

const faqsData = [
  {
    question: "Why should I feed fresh?",
    answer:
      "We believe pets deserve to thrive, not just survive. With rising obesity, cancer, and diabetes, science shows the undeniable health benefits of fresh food and the risks of commercial pet diets. Whether your pet is picky, dealing with health issues, or perfectly healthy, we've seen firsthand how fresh food transforms lives—ours and our customers'.",
  },
  {
    question: "What are the recipes and ingredients?",
    answer:
      "Our meals are made from high-quality, human-grade ingredients, carefully selected to provide balanced nutrition. Each recipe is crafted by pet nutritionists, using real meat, fresh vegetables, and essential nutrients to keep your pet happy and healthy.",
  },
  {
    question: "How do you know what kind of food my pet needs?",
    answer:
      "We personalize meals based on your pet's breed, age, weight, activity level, and health goals. Our expert-designed quiz helps determine the perfect meal plan tailored to your pet's unique needs.",
  },
  {
    question: "How does the meal delivery and schedule work?",
    answer:
      "We offer a flexible meal subscription service that delivers fresh meals straight to your door. Choose your schedule, and we ensure your pet never runs out of nutritious food. You can pause, modify, or cancel anytime.",
  },
  {
    question: "How does the meal delivery and schedule work?",
    answer:
      "We offer a flexible meal subscription service that delivers fresh meals straight to your door. Choose your schedule, and we ensure your pet never runs out of nutritious food. You can pause, modify, or cancel anytime.",
  },
  {
    question: "How does the meal delivery and schedule work?",
    answer:
      "We offer a flexible meal subscription service that delivers fresh meals straight to your door. Choose your schedule, and we ensure your pet never runs out of nutritious food. You can pause, modify, or cancel anytime.",
  },
];

interface FaqSectionProps {
  onAskUsClick: () => void;
}

export default function FaqSection({ onAskUsClick }: FaqSectionProps) {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: 200, // Adjust scroll distance as needed
        behavior: "smooth",
      });
    }
  };

  return (
    <section>
      <div className="container flex flex-col sm:flex-row gap-[var(--space-30-60)] lg:justify-between">
        <div className="relative">
          <div className="sm:-ml-[16%] lg:-ml-[2%] xl:-ml-[16%] h-fit sm:sticky top-[5%]">
            <SecondaryBlockTitle
              title="frequently asked"
              highlight="questions "
              textAlign="text-center sm:text-left lg:text-left"
              className="whitespace-nowrap"
            />

            <div className="relative">
              {/* Scrollable container */}
              <div
                ref={scrollContainerRef}
                className="flex flex-row sm:flex-col gap-[var(--space-10-15)] mt-[var(--space-34-42)] pr-11 sm:pr-0 overflow-x-auto scrollbar-hide"
              >
                <Button
                  size={"md"}
                  variant={"primaryBtn"}
                  className="w-fit text-white"
                >
                  Our Food
                </Button>
                <Button
                  size={"md"}
                  variant={"primaryBtnGrey"}
                  className="w-fit  text-white"
                >
                  Creating Your Plan
                </Button>
                <Button
                  size={"md"}
                  variant={"primaryBtnGrey"}
                  className="w-fit text-white"
                >
                  Subscription
                </Button>
                <Button
                  size={"md"}
                  variant={"primaryBtnGrey"}
                  className="w-fit text-white"
                >
                  Packaging and Shipping
                </Button>
              </div>

              {/* Gradient overlay and scroll button - hidden on small screens */}
              <div className="absolute top-0 right-[-2px] h-full w-20 sm:hidden pointer-events-none">
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-l from-white via-white/80 to-transparent"></div>

                {/* Scroll button */}
                <button
                  onClick={scrollRight}
                  className="absolute top-1/2 right-2 -translate-y-1/2 w-8 h-8 transition-shadow pointer-events-auto flex items-center justify-center"
                  aria-label="Scroll right"
                >
                  <Image
                    src="/icons/push-right.svg"
                    alt="Scroll right"
                    width={32}
                    height={32}
                  />
                </button>
              </div>
            </div>

            <div className="mt-6 lg:mt-7 lg:w-[16vw]">
              <Typography
                tag="h6"
                text="Got a question we haven't answered,"
                className="text-secondary-1"
              >
                <span onClick={onAskUsClick} className="cursor-pointer">
                  <Typography tag="span" text="Ask us" className="underline" />
                </span>
              </Typography>
            </div>
          </div>
        </div>
        <div className="lg:w-[49.2vw]">
          <FAQS faqs={faqsData} defaultOpenIndex={0} />
        </div>
      </div>
    </section>
  );
}
