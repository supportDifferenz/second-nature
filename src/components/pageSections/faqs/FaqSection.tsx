"use client";
import Typography from "@/components/atoms/typography/Typography";
import { SecondaryBlockTitle } from "@/components/molecules/titleSyles/Title";
import FAQS from "@/components/organism/faq/FAQS";
import { Button } from "@/components/ui/button";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import React, { useRef, useState } from "react";
import FaqForm from "./FaqForm";

// Define FAQ data for each category
const faqDataByCategory: Record<
  string,
  { question: string; answer: string }[]
> = {
  "Our Food": [
    {
      question: "What are the recipes and ingredients?",
      answer:
        "We create human-grade recipes that are simple, using different proteins and vegetables to meet dietary needs. Our board-certified veterinarians carefully formulate each recipe to be 100% complete and balanced.",
    },
    {
      question:
        "Do you have food suitable for pets that are adult, seniors, or have sensitivities?",
      answer:
        "We have recipe options suitable for pets at different stages of life.",
    },
    {
      question: "Why should I feed fresh?",
      answer:
        "Fresh is gently cooked just enough to get rid of dangerous pathogens while maintaining food integrity. There is a growing body of scientific evidence that points to the health benefits of a fresh food diet, and to the dangers of commercial pet food.",
    },
    {
      question: "Do I need to refrigerate the food?",
      answer:
        "Since our food is fresh and doesn’t contain any preservatives, itʼs essential that you treat it like real food (because it is!). Keep the food in the refrigerator or freezer.",
    },
  ],
  "Transitioning to fresh food": [
    {
      question: "How can I prepare to transition my dog’s food?",
      answer:
        "Before your box arrives, you can make sure you have a week’s worth of your dog’s old food on hand to mix with their new food. You’ll also need to clear some freezer space. Everything else you’ll need to know will be in your box.",
    },
    {
      question: "Do I need to cook the food?",
      answer:
        "No need, our food is ready-to-serve! You can serve it directly from the fridge or warm it up in the microwave.",
    },
    {
      question: "How do you determine my petʼs portions?",
      answer:
        "We work closely with our veterinary doctors to figure out the optimal calorie needs for different combinations of breed, age, activity level, and ideal weight.",
    },
    {
      question: "How does the transition work?",
      answer:
        "You’ll start with feeding meals of 25% Second Nature food, 75% old food. You’ll gradually increase the quantity of new food and decrease the old, until you’re feeding 100% Second Nature.",
    },
    {
      question: "How should I thaw the food?",
      answer:
        "When you receive your first box, store all of your packs in the freezer—except one, which you can put in the fridge to thaw. Frozen packs take ~12 hours to thaw in the fridge. We strongly recommend thawing frozen packs in the fridge. If you ever forget to thaw a pack in time for your dog’s meal time, you can speed up the process by thawing the pack under cold running water—but the fridge is the safest method.",
    },
    {
      question: "What if my dog doesn’t like the food?",
      answer:
        "If your dog doesn’t love our food, we can send you additional recipes to try during your trial period.",
    },
  ],
  "Pet Nutrition": [
    {
      question: "How do you know what kind of food my dog needs?",
      answer:
        "Our meal plans account for different combinations of breed, age, activity level, and ideal weight.",
    },
    {
      question: "Do I need to consult my vet to use Second Nature?",
      answer:
        "Please do! They will take comfort in the fact that we work alongside board-certified veterinarians. While many vets fight over different food trends, just about every vet agrees that freshly made, nutritionally-balanced food is best for pets.",
    },
  ],
  Subscription: [
    {
      question: "What does Second Nature cost?",
      answer:
        "Every pet is different, and your exact plan and price options will depend on your pet(s) and their food needs, factoring in age, weight, activity, recipe choice, and more (Delivery Included!). To see your exact pricing options, simply click “Start Now”.",
    },
    {
      question: "Do you offer a trial box to start with?",
      answer:
        "Try our Starter Box — it’s a great option if you’re not ready to commit or want to see how your pup enjoys our meals. Anytime—no strings attached!",
    },
    {
      question: "What if Iʼm not home at the time my box arrives?",
      answer:
        "Your boxes are packed with plenty of insulation for precisely this reason.",
    },
    {
      question: "How flexible are the deliveries?",
      answer:
        "Very! Once you’re signed up, you can easily make tweaks to your plan online to your personal preference.",
    },
    {
      question: "Is there a minimum subscription time?",
      answer:
        "Cancel your monthly subscription any time before your next billing date.",
    },
    {
      question:
        "I forgot my password - how can I reset it to log into my Customer Account?",
      answer: "You can reset your account password here.",
    },
    {
      question: "When will my orders arrive?",
      answer:
        "Click here to see a summary of your orders and the next delivery date.",
    },
    {
      question: "How will I be billed for my plan?",
      answer: "Monthly subscriptions are billed on a 28-day cycle.",
    },
    {
      question: "Can I cancel or reactivate my subscription anytime?",
      answer:
        "Yes, you can easily pause, cancel or reactivate your subscription. Click here to visit your Customer Account to do so.",
    },
    {
      question: "Can I change when my next order will arrive?",
      answer:
        "Yes! In the Subscription tab of your Customer Account you can reschedule your upcoming order to receive it sooner, or to delay the shipment. Click here to reschedule your orders.",
    },
  ],
};

interface FaqSectionProps {
  onAskUsClick: () => void;
}

export default function FaqSection({ onAskUsClick }: FaqSectionProps) {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [activeCategory, setActiveCategory] = useState("Our Food");

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 200, behavior: "smooth" });
    }
  };

  const categories = Object.keys(faqDataByCategory);

  return (
    <section>
      <div className="container flex flex-col sm:flex-row gap-[var(--space-30-60)] lg:justify-between">
        <div className="relative">
          <div className="lg:-ml-[2%] xl:-ml-[16%] h-fit sm:sticky top-[5%]">
            <motion.div
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <SecondaryBlockTitle
                title="frequently asked"
                highlight="questions "
                textAlign="text-center sm:text-left lg:text-left"
                className="whitespace-nowrap"
              />

              <div className="relative">
                <div
                  ref={scrollContainerRef}
                  className="flex flex-row sm:flex-col gap-[var(--space-10-15)] mt-[var(--space-34-42)] pr-11 sm:pr-0 overflow-x-auto scrollbar-hide"
                >
                  {categories.map((category) => (
                    <Button
                      key={category}
                      size={"md"}
                      variant={
                        activeCategory === category
                          ? "primaryBtn"
                          : "primaryBtnGrey"
                      }
                      className="w-fit text-white"
                      onClick={() => setActiveCategory(category)}
                    >
                      {category}
                    </Button>
                  ))}
                </div>

                <div className="absolute top-0 right-[-2px] h-full w-20 sm:hidden pointer-events-none">
                  <div className="absolute inset-0 bg-gradient-to-l from-white via-white/80 to-transparent"></div>
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
                    <Typography
                      tag="span"
                      text="Ask us"
                      className="underline"
                    />
                  </span>
                </Typography>
              </div>
            </motion.div>
          </div>
        </div>

        <div className="lg:w-[49.2vw]">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
            >
              <FAQS
                faqs={faqDataByCategory[activeCategory]}
                defaultOpenIndex={0}
              />
            </motion.div>
          </AnimatePresence>
              <div className="max-lg:hidden">
                <FaqForm />
              </div>
        </div>
      </div>
    </section>
  );
}
