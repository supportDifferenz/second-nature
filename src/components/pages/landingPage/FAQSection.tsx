import FAQS from "@/components/organism/faq/FAQS";
import React from "react";

const faqsData = [
  {
    question: "What is your return policy?",
    answer: "You can return within 30 days.",
  },
  {
    question: "How do I track my order?",
    answer: "You can track it in your account section.",
  },
];

export default function FAQSection() {
  return (
    <div>
      <FAQS faqs={faqsData} defaultOpenIndex={0} className="mt-8" />;
    </div>
  );
}
