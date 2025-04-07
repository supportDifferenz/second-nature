
"use client";
import { useState } from "react";
import { Accordion, AccordionItem } from "@/components/ui/accordion";
import { ChevronDown } from "lucide-react";
import Typography from "@/components/atoms/typography/Typography";
import { FAQSPropsTypes } from "@/components/types/type";



const FAQS: React.FC<FAQSPropsTypes> = ({ faqs, defaultOpenIndex = 0, className = "" }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(defaultOpenIndex);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className={`w-full  mx-auto ${className}`}>
      <Accordion type="single" collapsible className="text-secondary-1">
        {faqs.map((faq, index) => (
          <AccordionItem
            key={index}
            value={index.toString()}
            className={`border border-secondary-1 data-[state=open]:bg-[#F9FFFD] overflow-hidden ${
              openIndex === index ? "bg-[#F9FFFD]" : ""
            } rounded-xl`}
          >
            <button
              onClick={() => toggleAccordion(index)}
              className={`w-full flex justify-between items-center  text-left px-6  py-4 cursor-pointer`}
            >
              <Typography tag="h6" text={faq.question} className="w-[95%] "/>
              <ChevronDown
                className={`h-5 w-5 transition-transform ${
                  openIndex === index ? "rotate-180" : ""
                }`}
              />
            </button>
            {openIndex === index && (
              <Typography tag="p" text={faq.answer} className=" p-6 pb-5 pt-0 bg-[#F9FFFD] lg:w-[80%]"/>
            )}
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
};

export default FAQS;
