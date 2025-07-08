
"use client";
import { useState } from "react";
import { Accordion, AccordionItem } from "@/components/ui/accordion";
import { ChevronDown } from "lucide-react";
import Typography from "@/components/atoms/typography/Typography";
import { MealsFAQSPropsTypes } from "@/components/types/type";
import { useSearchParams } from "next/navigation";

const faqsData = {
  dog: {
    beef: [
      {
        question: "How would a beef-based diet impact heart health?",
        answer: "Packed with essential amino acids and low in sodium, our Beef Bowl is an excellent choice for supporting your dog’s heart health.",
      },
      {
        question: "How does the Beef Bowl support my dog’s dental health?",
        answer: "Eggshell powder, a bioavailable source of calcium strengthens tooth enamel and  integrity of teeth.",
      },
      {
        question: "Is the Beef Bowl recommended by veterinarians?",
        answer: "Formulated to meet FEDIAF standards, crafted using guidance from veterinary medical doctors.",
      },
      {
        question: "Is the Beef Bowl made with human-grade ingredients?",
        answer: "Every ingredient in the Beef Bowl is human-grade, sourced from trusted suppliers to ensure the highest quality for your dog.",
      },
      {
        question: "Does the Beef Bowl help with joint health?",
        answer: " Cod liver oil in the Beef Bowl is rich in omega-3 fatty acids, which help reduce inflammation and support joint health.",
      },
      {
        question: "Is the Beef Bowl free from artificial additives?",
        answer: "No artificial preservatives, colors, or flavors are in our recipes, ensuring a natural and wholesome meal for your dog.",
      },
    ],
    chicken: [
      {
        question: "How does the Chicken Bowl support muscle development?",
        answer: "A balanced mix of white and dark chicken meat provides high-quality protein and essential amino acids for strong muscles.",
      },
      {
        question: "Is the Chicken Bowl suitable for dogs with sensitive stomachs?",
        answer: "Butternut squash and cauliflower contain prebiotics and fiber to support digestion and gut health.",
      },
      {
        question: "How does the Chicken Bowl promote skin and coat health?",
        answer: "Omega-3s from cod liver oil and egg yolk nourish the skin, reduce dryness, and promote a healthy, shiny coat.",
      },
      {
        question: "Does the Chicken Bowl support brain function?",
        answer: "Choline from egg yolks plays a key role in brain health, cognitive function, and nervous system support.",
      },
      {
        question: "Is the Chicken Bowl made with human-grade ingredients?",
        answer: "Yes, all ingredients are human-grade and sourced from trusted suppliers to ensure the highest quality for your dog.",
      },
      {
        question: "Is the Chicken Bowl free from artificial additives?",
        answer: "Absolutely! Our recipe contains no artificial preservatives, colors, or flavors—just real, wholesome nutrition.",
      },
    ],
    lamb: [
      {
        question: "How does the Lamb Bowl support heart health?",
        answer: "Grass-fed lamb, which is naturally rich in taurine and conjugated linoleic acid, promotes cardiovascular health.",
      },
      {
        question: "How does the Lamb Bowl benefit dogs with food sensitivities?",
        answer: "Lamb is an excellent choice for dogs with sensitivities or allergies to more common proteins.",
      },
      {
        question: "Is the Lamb Bowl recommended for senior dogs?",
        answer: "The recipe has anti-inflammatory properties supporting joint health and reduce discomfort in aging dogs.",
      },
      {
        question: "How does the Lamb Bowl support thyroid health?",
        answer: "The addition of kelp provides a natural source of iodine, supporting healthy thyroid function and metabolism.",
      },
      {
        question: "Is the Lamb Bowl made with human-grade ingredients?",
        answer: "Yes, every ingredient in the Lamb Bowl is human-grade, sourced from trusted suppliers to ensure the highest quality for your dog.",
      },
      {
        question: "Is the Lamb Bowl free from artificial additives?",
        answer: "No artificial preservatives, colors, or flavors are in our recipes, ensuring a natural and wholesome meal for your dog.",
      },
    ], 
  },
  cat: {
    beef: [
      {
        question: "How would a beef-based diet impact heart health?",
        answer: "Packed with essential amino acids and low in sodium, our Beef Bowl is an excellent choice for supporting your dog’s heart health.",
      },
      {
        question: "How does the Beef Bowl support my dog’s dental health?",
        answer: "Eggshell powder, a bioavailable source of calcium strengthens tooth enamel and  integrity of teeth.",
      },
      {
        question: "Is the Beef Bowl recommended by veterinarians?",
        answer: "Formulated to meet FEDIAF standards, crafted using guidance from veterinary medical doctors.",
      },
      {
        question: "Is the Beef Bowl made with human-grade ingredients?",
        answer: "Every ingredient in the Beef Bowl is human-grade, sourced from trusted suppliers to ensure the highest quality for your dog.",
      },
      {
        question: "Does the Beef Bowl help with joint health?",
        answer: "Cod liver oil in the Beef Bowl is rich in omega-3 fatty acids, which help reduce inflammation and support joint health.",
      },
      {
        question: "Is the Beef Bowl free from artificial additives?",
        answer: "No artificial preservatives, colors, or flavors are in our recipes, ensuring a natural and wholesome meal for your dog.",
      },
    ],
    chicken: [
      {
        question: "How does the Chicken Bowl support muscle development?",
        answer: "A balanced mix of white and dark chicken meat provides high-quality protein and essential amino acids for strong muscles.",
      },
      {
        question: "Is the Chicken Bowl suitable for dogs with sensitive stomachs?",
        answer: "Butternut squash and cauliflower contain prebiotics and fiber to support digestion and gut health.",
      },
      {
        question: "How does the Chicken Bowl promote skin and coat health?",
        answer: "Omega-3s from cod liver oil and egg yolk nourish the skin, reduce dryness, and promote a healthy, shiny coat.",
      },
      {
        question: "Does the Chicken Bowl support brain function?",
        answer: "Choline from egg yolks plays a key role in brain health, cognitive function, and nervous system support.",
      },
      {
        question: "Is the Chicken Bowl made with human-grade ingredients?",
        answer: "Yes, all ingredients are human-grade and sourced from trusted suppliers to ensure the highest quality for your dog.",
      },
      {
        question: "Is the Chicken Bowl free from artificial additives?",
        answer: "Absolutely! Our recipe contains no artificial preservatives, colors, or flavors—just real, wholesome nutrition.",
      },
    ],
    lamb: [
      {
        question: "How does the Lamb Bowl support heart health?",
        answer: "Grass-fed lamb, which is naturally rich in taurine and conjugated linoleic acid, promotes cardiovascular health.",
      },
      {
        question: "How does the Lamb Bowl benefit dogs with food sensitivities?",
        answer: "Lamb is an excellent choice for dogs with sensitivities or allergies to more common proteins.",
      },
      {
        question: "Is the Lamb Bowl recommended for senior dogs?",
        answer: "The recipe has anti-inflammatory properties supporting joint health and reduce discomfort in aging dogs.",
      },
      {
        question: "How does the Lamb Bowl support thyroid health?",
        answer: "The addition of kelp provides a natural source of iodine, supporting healthy thyroid function and metabolism.",
      },
      {
        question: "Is the Lamb Bowl made with human-grade ingredients?",
        answer: "Yes, every ingredient in the Lamb Bowl is human-grade, sourced from trusted suppliers to ensure the highest quality for your dog.",
      },
      {
        question: "Is the Lamb Bowl free from artificial additives?",
        answer: "No artificial preservatives, colors, or flavors are in our recipes, ensuring a natural and wholesome meal for your dog.",
      },
    ], 
  },
}

const MealsFaqs: React.FC<MealsFAQSPropsTypes> = ({ defaultOpenIndex = 0, className = "" }) => {

  const searchParams = useSearchParams();
  const pet = searchParams.get("pet");
  const protein = searchParams.get("protein");

  // Type-safe access to faqsData
  const validPets = ["dog", "cat"] as const;
  const validProteins = ["beef", "chicken", "lamb"] as const;

  function isValidPet(p: string | null): p is typeof validPets[number] {
    return !!p && validPets.includes(p as typeof validPets[number]);
  }

  function isValidProtein(pr: string | null): pr is typeof validProteins[number] {
    return !!pr && validProteins.includes(pr as typeof validProteins[number]);
  }

  let faqs: { question: string; answer: string }[];
  if (isValidPet(pet) && isValidProtein(protein)) {
    faqs = faqsData[pet][protein];
  } else {
    faqs = faqsData.dog.beef;
  }

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

export default MealsFaqs;
