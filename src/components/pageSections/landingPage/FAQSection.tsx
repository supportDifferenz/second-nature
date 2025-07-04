import { SecondaryBlockTitle } from "@/components/molecules/titleSyles/Title";
import FAQS from "@/components/organism/faq/FAQS";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

const faqsData = [
  {
    question: "Why should I feed fresh?",
    answer:
      "We believe pets deserve to thrive, not just survive. With rising obesity, cancer, and diabetes, science shows the undeniable health benefits of fresh food and the risks of commercial pet diets. Whether your pet is picky, dealing with health issues, or perfectly healthy, we’ve seen firsthand how fresh food transforms lives—ours and our customers’.",
  },
  {
    question: "What are the recipes and ingredients?",
    answer:
      "Our meals are made from high-quality, human-grade ingredients, carefully selected to provide balanced nutrition. Each recipe is crafted by pet nutritionists, using real meat, fresh vegetables, and essential nutrients to keep your pet happy and healthy.",
  },
  {
    question: "How do you know what kind of food my pet needs?",
    answer:
      "We personalize meals based on your pet’s breed, age, weight, activity level, and health goals. Our expert-designed quiz helps determine the perfect meal plan tailored to your pet’s unique needs.",
  },
  {
    question: "How does the meal delivery and schedule work?",
    answer:
      "We offer a flexible meal subscription service that delivers fresh meals straight to your door. Choose your schedule, and we ensure your pet never runs out of nutritious food. You can pause, modify, or cancel anytime.",
  },
];

export default function FAQSection() {
  return (
    < motion.section
      initial={{ opacity: 0, y: 40 }
      }
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
   >
      <div className="container flex flex-col-reverse sm:flex-row gap-(--space-30-60)">
        <div className="flex-1 relative">
          <div className="sm:-ml-[16%] lg:-ml-[2%] xl:-ml-[16%] h-fit sm:sticky top-[5%]">
            <Image
              src="/images/faqs-section-vector.svg"
              alt="frequently asked questions "
              fill
              className="!static"
            />
          </div>
        </div>
        <div className="flex-2">
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-end mb-(--space-27-34)">
            <SecondaryBlockTitle
              title="frequently asked"
              highlight="questions "
              textAlign="text-center sm:text-left lg:text-left"
            />
            <Button variant="linkSecondary" className="mt-4 sm:mt-0">
              More FAQs
              <Image
                src="/icons/secondary-1-chevron-right.svg"
                alt="icon"
                fill
                className="!static"
              />
            </Button>
          </div>
          <FAQS faqs={faqsData} defaultOpenIndex={0} />
        </div>
      </div>
    </motion.section >
  );
}
