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
    answer: [
      "Formulated by veterinary nutritionists to meet 100% of FEDIAF standards, our meals combine clean, human-grade proteins with whole foods, balanced by essential vitamins and minerals. No feed-grade ingredients. No processing for shelf stability. Just fresh, natural nutrients to fuel your dog’s best life.",
      "We source all ingredients from trusted suppliers, local farms, and purveyors meeting human-grade standards. Explore your custom ingredient list in the “For Cats/ For Dogs” pages."
    ],
  },
  {
    question: "How do you know what kind of food my pet needs?",
    answer:
      "We work closely with veterinary medical doctors to figure out the optimal meal plans for different combinations of breed, age, activity level, and ideal weight. That way, we can ask you the right questions to select a plan that’s a great fit for your pet’s characteristics and needs. ",
  },
  {
    question: "How does the meal delivery and schedule work?",
    answer:
      "Once you subscribe, your pet’s meals are freshly prepared and delivered straight to your doorstep based on your preferred cadence. Our packaging ensures the meals stay fresh, and you can easily adjust, pause, or reschedule deliveries anytime to fit your needs.",
  },
];

export default function FAQSection() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <div className="container flex flex-col-reverse sm:flex-row gap-(--space-30-60)">
        <div className="flex-1 relative">
          <div className="sm:-ml-[16%] lg:-ml-[2%] xl:-ml-[16%] h-fit sm:sticky top-[5%]">
            <Image
              src="/images/faqs-section-vector.webp"
              alt="frequently asked questions"
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
    </motion.section>
  );
}
