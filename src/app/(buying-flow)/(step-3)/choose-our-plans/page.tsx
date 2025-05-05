"use client";

import Typography from "@/components/atoms/typography/Typography";
import PlanCard from "@/components/pageSections/buyingFlow/step3/choosePlan/PlanCard";
import BuyingFlowLayout from "@/components/templates/BuyingFlowLayout";
import React,{ useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useRouter } from "next/navigation";
import FAQS from "@/components/organism/faq/FAQS";
import { usePetStore } from "@/zustand/store/petDataStore";

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

  const { pets, selectedPetIndex, noOfPets, setPetDetails } = usePetStore();
  const selectedPet = selectedPetIndex !== null ? pets[selectedPetIndex] : null; // Handle null case for selectedPetIndex
  const currentPetId = selectedPet ? selectedPet.id : null;
  // const selectedPetName = selectedPet ? selectedPet.name : null;
  const planType = selectedPet ? selectedPet.planType : "";
  const protein = selectedPet ? selectedPet.protein : "";
  const bowlSize = selectedPet ? selectedPet.bowlSize : "";

  const [ selectedPlan, setSelectedPlan ] = useState<string>("");
  // const [ selectedProtein, setSelectedProtein ] = useState<string>("");
  // const [ selectedBowlSize, setSelectedBowlSize ] = useState<string>("");
  const [ regularProtein, setRegularProtein ] = useState<string>();
  const [ regularBowlSize, setRegularBowlSize ] = useState<string>("");
  const [ trialProtein, setTrialProtein ] = useState<string>("");
  const [ trialBowlSize, setTrialBowlSize ] = useState<string>("");

  // const plans = [
  //   {
  //     id: "regular",
  //     heading: "Regular Plan",
  //     description: "Auto-Renews Every 28 Days",
  //     price: 400,
  //     bgColour: "bg-[#FDFFF0]" as const,
  //     offerBadge: "Enjoy 25% Off Your First Month!"
  //   },
  //   {
  //     id: "trial",
  //     heading: "Trial Plan",
  //     description: "One-Time Purchase for 7 Days",
  //     price: 100,
  //     bgColour: "bg-white" as const
  //   }
  // ]

  // useEffect(() => {
  //   setSelectedProtein("")
  //   setSelectedBowlSize("")
  // },[selectedPlan])

  useEffect(() => {
    if(planType === "regular") {
      setSelectedPlan("regular");
      setRegularProtein(protein);
      setRegularBowlSize(bowlSize || "");
    } else if(planType === "trial") {
      setSelectedPlan("trial");
      setTrialProtein(protein || "");
      setTrialBowlSize(bowlSize || "");
    }
  },[planType, protein, bowlSize])


  const handleNext = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    if(selectedPlan === "regular" && regularProtein && regularBowlSize && currentPetId) {
      // setSelectedProtein(regularProtein || "");
      // setSelectedBowlSize(regularBowlSize);
      setPetDetails(currentPetId, { planType: selectedPlan, protein: regularProtein, bowlSize: regularBowlSize });
      router.push("/add-more-pets");
    } else if(selectedPlan === "trial" && trialProtein && trialBowlSize && currentPetId) {
      // setSelectedProtein(trialProtein || "");
      // setSelectedBowlSize(trialBowlSize);
      setPetDetails(currentPetId, { planType: selectedPlan, protein: trialProtein, bowlSize: trialBowlSize });
      router.push("/add-more-pets");
    }

    // if( selectedProtein && selectedBowlSize && currentPetId ) {
    //   setPetDetails(currentPetId, { planType: selectedPlan, protein: selectedProtein, bowlSize: selectedBowlSize });
    //   router.push("/add-more-pets");
    // }

    // if(selectedPlan === "regular" && regularProtein && regularBowlSize && currentPetId) {
    //   setSelectedProtein(regularProtein || "");
    //   setSelectedBowlSize(regularBowlSize);
    //   setPetDetails(currentPetId, { planType: selectedPlan, protein: selectedProtein, bowlSize: selectedBowlSize });
    //   router.push("/add-more-pets");
    // } else if(selectedPlan === "trial" && trialProtein && trialBowlSize && currentPetId) {
    //   setSelectedProtein(trialProtein || "");
    //   setSelectedBowlSize(trialBowlSize);
    //   setPetDetails(currentPetId, { planType: selectedPlan, protein: selectedProtein, bowlSize: selectedBowlSize });
    //   router.push("/add-more-pets");
    // }

  }

  console.log("Selected pet in choose our plans page is", selectedPet);
  console.log("Current pet id in choose our plans page is", currentPetId);
  console.log("Selected Plan", selectedPlan);
  // console.log("Selected Protein", selectedProtein);
  // console.log("Selected Bowl Size", selectedBowlSize);
  console.log("Regular Protein", regularProtein);
  console.log("Regular Bowl Size", regularBowlSize);
  console.log("Trial Protein", trialProtein);
  console.log("Trial Bowl Size", trialBowlSize);
  
  return (
    <BuyingFlowLayout step={3}>
      <div className="flex flex-col gap-16">
        <Typography
          tag="h3"
          text="Choose Our Plan"
          className="text-center text-primary-dark"
        />
        <div className="flex flex-col lg:flex-row justify-center gap-16 lg:gap-[var(--space-20-30)]">
          {/* {plans.map((plan) => (
            <PlanCard
              key={plan.id}
              {...plan}
              isSelected={selectedPlan === plan.id}
              onClick={() => setSelectedPlan(plan.id)}
            />
          ))} */}

          <PlanCard
            heading="Regular Plan"
            description="Auto-Renews Every 28 Days"
            price={400}
            bgColour="bg-[#FDFFF0]"
            offerBadge="Enjoy 25% Off Your First Month!"
            isSelected={selectedPlan === "regular"}
            protein={regularProtein}
            setProtein={setRegularProtein}
            bowlSize={regularBowlSize}
            setBowlSize={setRegularBowlSize}
            onClick={() => {
              setSelectedPlan("regular");
              setTrialProtein("");
              setTrialBowlSize("");
            }}
          />
          <PlanCard bgColour="bg-white" 
            heading="Trail Plan"
            description="One-Time Purchase for 7 Days"
            price={100}
            isSelected={selectedPlan === "trial"}
            protein={trialProtein}
            setProtein={setTrialProtein}
            bowlSize={trialBowlSize}
            setBowlSize={setTrialBowlSize}
            onClick={() => {
              setSelectedPlan("trial");
              setRegularProtein("");
              setRegularBowlSize("");
            }}
          />
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
            router.push("/activity");
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
          disabled={ !( (regularProtein && regularBowlSize) || (trialProtein && trialBowlSize)) }
          // disabled={ !(selectedProtein && selectedBowlSize) }
          onClick={handleNext}
        >
          { (selectedPetIndex ?? 0) < noOfPets - 1 ? "Next" : "Checkout"}
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
