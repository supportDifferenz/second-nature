"use client";

import { useState } from "react";
import { Accordion, AccordionItem } from "@/components/ui/accordion";
import { ChevronDown } from "lucide-react";
import { FAQSProps } from "../type";

const FAQS: React.FC<FAQSProps> = ({
  faqs,
  defaultOpenIndex = null,
  className = "",
}) => {
  const [openIndex, setOpenIndex] = useState(defaultOpenIndex);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className={`w-full max-w-2xl mx-auto ${className}`}>
      <Accordion type="single" collapsible>
        {faqs.map((faq, index) => (
          <AccordionItem
            key={index}
            value={index.toString()}
            className="border-b border-gray-200 last:border-b-0"
          >
            <button
              onClick={() => toggleAccordion(index)}
              className="w-full flex justify-between items-center p-4 text-left font-medium text-gray-900 hover:bg-gray-100"
            >
              {faq.question}
              <ChevronDown
                className={`h-5 w-5 transition-transform ${
                  openIndex === index ? "rotate-180" : ""
                }`}
              />
            </button>
            {openIndex === index && (
              <div className="p-4 text-gray-700 bg-gray-50">{faq.answer}</div>
            )}
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
};

export default FAQS;
