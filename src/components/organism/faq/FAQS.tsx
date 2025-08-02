"use client";
import { useState } from "react";
import { Accordion, AccordionItem } from "@/components/ui/accordion";
import { ChevronDown } from "lucide-react";
import Typography from "@/components/atoms/typography/Typography";
import { FAQSPropsTypes } from "@/components/types/type";
import { motion, AnimatePresence } from "framer-motion";

const FAQS: React.FC<FAQSPropsTypes> = ({
  faqs,
  defaultOpenIndex = 0,
  className = "",
}) => {
  const [openIndex, setOpenIndex] = useState<number | null>(defaultOpenIndex);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className={`w-full mx-auto ${className}`}>
      <Accordion type="single" collapsible className="text-secondary-1">
        {faqs.map((faq, index) => {
          const isOpen = openIndex === index;
          return (
            <AccordionItem
              key={index}
              value={index.toString()}
              className={`border border-secondary-2 transition duration-75 data-[state=open]:bg-[#F9F9F9] overflow-hidden ${
                isOpen ? "bg-[#FBFBFB]" : "bg-white"
              } rounded-xl`}
            >
              <button
                onClick={() => toggleAccordion(index)}
                className="w-full flex justify-between items-center text-left px-6 py-4 cursor-pointer"
              >
                <Typography tag="h6" text={faq.question} className="w-[95%] !leading-[1.4]" />
                <ChevronDown
                  className={`h-5 w-5 transition-transform ${
                    isOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    key="content"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden"
                    
                  >
                    <div className="p-6 pt-0 pb-5 bg-[#FBFBFB] lg:w-[80%]">
                      {Array.isArray(faq.answer) ? (
                        faq.answer.map((para, idx) => (
                          <Typography
                            key={idx}
                            tag="p"
                            text={para}
                            className="mb-4 last:mb-0"
                          />
                        ))
                      ) : (
                        <Typography tag="p" text={faq.answer} className="text-[#424242]" />
                      )}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </AccordionItem>
          );
        })}
      </Accordion>
    </div>
  );
};

export default FAQS;
