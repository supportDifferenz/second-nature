"use client";

import Typography from "@/components/atoms/typography/Typography";
import PlanCard from "@/components/pageSections/buyingFlow/step3/choosePlan/PlanCard";
import BuyingFlowLayout from "@/components/templates/BuyingFlowLayout";
import React,{ useState} from "react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useRouter } from "next/navigation";
import FAQS from "@/components/organism/faq/FAQS";
// import { usePetStore } from "@/zustand/store/petDataStore";

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

export default function Page() {

  const router = useRouter();

  const [selectedPlan, setSelectedPlan] = useState<string | null>(null);

  const plans = [
    {
      id: "regular",
      heading: "Regular Plan",
      description: "Auto-Renews Every 28 Days",
      price: 400,
      bgColour: "bg-[#FDFFF0]" as const,
      offerBadge: "Enjoy 25% Off Your First Month!"
    },
    {
      id: "trial",
      heading: "Trial Plan",
      description: "One-Time Purchase for 7 Days",
      price: 100,
      bgColour: "bg-white" as const
    }
  ]

  const handleNext = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    router.push("/add-more-pets");
  }

  return (
    <BuyingFlowLayout step={2}>
      <div className="flex flex-col gap-16">
        <Typography
          tag="h3"
          text="Choose Our Plan"
          className="text-center text-primary-dark"
        />
        <div className="flex flex-col lg:flex-row justify-center gap-16 lg:gap-[var(--space-20-30)]">
          {plans.map((plan) => (
            <PlanCard
              key={plan.id}
              {...plan}
              isSelected={selectedPlan === plan.id}
              onClick={() => setSelectedPlan(plan.id)}
            />
          ))}
        </div>
        <Typography
          tag="h3"
          text="Frequently Asked Questions"
          className="text-center text-primary-dark"
        />

        <FAQS faqs={faqsData} defaultOpenIndex={0} />

      </div>

      {/* Navigation */}
      <div className="pb-[3dvh] flex justify-between items-center gap-4 lg:gap-0 lg:items-end pt-[3dvh]">
        <Button
          variant={"outlineSecondaryBtn"}
          className="gap-2.5  lg:ml-[-55px]"
          onClick={(e) => {
            e.preventDefault();
            router.push("/add-more-pets");
          }}
        >
          <div className="w-5 relative">
            <Image
              src="/icons/arrow-prev-long-primary-dark.svg"
              alt="icon"
              fill
              className="!static w-full object-contain"
            />
          </div>
          Back
        </Button>
        <Button 
          className="gap-2.5 lg:ml-auto lg:mr-[-55px]" 
          // disabled={!selectedActivity}
          onClick={handleNext}
        >
          Next
          <div className="w-5 relative">
            <Image
              src="/icons/arrow-next-long.svg"
              alt="icon"
              fill
              className="!static w-full object-contain"
            />
          </div>
        </Button>
      </div>

    </BuyingFlowLayout>
  );
}










// import Typography from "@/components/atoms/typography/Typography";
// import PlanCard from "@/components/pageSections/buyingFlow/step3/choosePlan/PlanCard";
// import BuyingFlowLayout from "@/components/templates/BuyingFlowLayout";
// import React from "react";

// export default function page() {
//   return (
//     <BuyingFlowLayout step={2}>
//       <div className="flex flex-col gap-16">
//         <Typography
//           tag="h3"
//           text="Choose Our Plan"
//           className="text-center text-primary-dark"
//         />
//         <div className="flex flex-col lg:flex-row justify-center gap-16 lg:gap-[var(--space-20-30)]">
//           <PlanCard
//             heading="Regular Plan"
//             description="Auto-Renews Every 28 Days"
//             price={400}
//             bgColour="bg-[#FDFFF0]"
//             offerBadge="Enjoy 25% Off Your First Month!"
//           />
//           <PlanCard bgColour="bg-white" 
//           heading="Trail Plan"
//           description="One-Time Purchase for 7 Days"
//           price={100}
//           />
//         </div>
//       </div>
//     </BuyingFlowLayout>
//   );
// }
