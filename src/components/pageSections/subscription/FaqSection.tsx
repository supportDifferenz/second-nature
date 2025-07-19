"use client";

import { SecondaryBlockTitle } from '@/components/molecules/titleSyles/Title'
import FAQS from '@/components/organism/faq/FAQS'
import { Button } from '@/components/ui/button'
import { motion } from 'framer-motion'
import Image from 'next/image'
import React from 'react'

// const faqsData = [
//   {
//     question: "Why should I feed fresh?",
//     answer:
//       "We believe pets deserve to thrive, not just survive. With rising obesity, cancer, and diabetes, science shows the undeniable health benefits of fresh food and the risks of commercial pet diets. Whether your pet is picky, dealing with health issues, or perfectly healthy, we’ve seen firsthand how fresh food transforms lives—ours and our customers’.",
//   },
//   {
//     question: "What are the recipes and ingredients?",
//     answer:
//       "Our meals are made from high-quality, human-grade ingredients, carefully selected to provide balanced nutrition. Each recipe is crafted by pet nutritionists, using real meat, fresh vegetables, and essential nutrients to keep your pet happy and healthy.",
//   },
//   {
//     question: "How do you know what kind of food my pet needs?",
//     answer:
//       "We personalize meals based on your pet’s breed, age, weight, activity level, and health goals. Our expert-designed quiz helps determine the perfect meal plan tailored to your pet’s unique needs.",
//   },
//   {
//     question: "How does the meal delivery and schedule work?",
//     answer:
//       "We offer a flexible meal subscription service that delivers fresh meals straight to your door. Choose your schedule, and we ensure your pet never runs out of nutritious food. You can pause, modify, or cancel anytime.",
//   },
//   {
//     question: "How does the meal delivery and schedule work?",
//     answer:
//       "We offer a flexible meal subscription service that delivers fresh meals straight to your door. Choose your schedule, and we ensure your pet never runs out of nutritious food. You can pause, modify, or cancel anytime.",
//   },
//   {
//     question: "How does the meal delivery and schedule work?",
//     answer:
//       "We offer a flexible meal subscription service that delivers fresh meals straight to your door. Choose your schedule, and we ensure your pet never runs out of nutritious food. You can pause, modify, or cancel anytime.",
//   },
// ];

const faqsData = [
  {
    question: "Do you offer a trial box to start with?",
    answer: "Try our Starter Box,  it’s a great option if you’re not ready to commit or want to see how your pup enjoys our meals. anytime—no strings attached!",
  },
  {
    question: "Is there a minimum subscription time?",
    answer: "You’re in complete control. Pause, skip, or cancel your subscription anytime via your Second Nature account.",
  },
  {
    question: "When will I be charged?",
    answer: "Your payment is processed a few days before your meals are prepared and shipped, except for your first order, which is charged at checkout",
  },
  {
    question: "When do you deliver?",
    answer: "Deliveries are scheduled based on your needs. You’ll always see your next delivery date in your Second Nature account.",
  },
  {
    question: "Do I have to be home when it’s delivered?",
    answer: "Our cold-courier service ensures your meals arrive in an insulated box that keeps them fresh until you get home.",
  },
  {
    question: "What if I’m traveling or away on holiday?",
    answer: "You can adjust your delivery schedule or pause your subscription You can also request an additional box for travel.",
  },
];

export default function FaqSection() {
  return (
    <section className="container flex flex-col-reverse sm:flex-row gap-(--space-30-60)">
      <div className="flex-1 relative">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="sm:-ml-[17%] h-fit sm:sticky top-[5%]">
            <Image
              src="/images/faqs-section-boxer.webp"
              alt="frequently asked questions "
              fill
              className="!static"
            />
          </div>
        </motion.div>
      </div>
      <div className="flex-2">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
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
        </motion.div>
      </div>
    </section>
  )
}
