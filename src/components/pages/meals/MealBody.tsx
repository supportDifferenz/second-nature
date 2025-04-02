"use client";

import { SecondaryBlockTitle } from "@/components/molecules/titleSyles/Title";
import IngredientTable from "@/components/organism/IngredientTable";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import React, { useState } from "react";
import HealthBenefits from "./HealthBenefits";
import FooterCtaCard from "@/components/organism/FooterCtaCard";

// Define the content for each meal type
const mealContent = {
  beef: {
    title1: "A Hearty Beef Feast,",
    title2: "Straight from The Farm",
    description:
      "Our Beef Bowl is made up of 85% lean ground beef and nutrient-rich beef liver, is a protein-packed feast designed to fuel your dog's lifestyle enhanced with fresh carrots and spinach for fiber and antioxidants supporting healthy muscles, digestion, and a shiny coat.",
    ingredients: [
      { image: "/images/ground-beef.webp", name: "Lean Ground Beef" },
      { image: "/images/beef-liver.webp", name: "Beef Liver" },
      { image: "/images/beef-liver.webp", name: "Carrot" },
      { image: "/images/beef-liver.webp", name: "Spinach" },
      { image: "/images/beef-liver.webp", name: "Egg Yolk" },
      { image: "/images/beef-liver.webp", name: "Beef Liver" },
      { image: "/images/beef-liver.webp", name: "Carrot" },
      { image: "/images/beef-liver.webp", name: "Beef Liver" },
      { image: "/images/beef-liver.webp", name: "Beef Liver" },
    ],
    healthBenefits: {
      paragraph:
        "A protein-packed beef meal rich in iron, omega-3s, and essential nutrients to support strong muscles, healthy digestion, and a vibrant coat.",
      benefits: [
        {
          icon: "/icons/heart-hand.svg",
          title: "Heart Health",
          description:
            "Packed with CoQ10, supporting cardiovascular function and cellular energy.",
        },
        {
          icon: "/icons/eye-plus.svg",
          title: "Eye Health Booster",
          description:
            "Contains zinc and vitamin A to promote eye health and maintain clear vision.",
        },
        {
          icon: "/icons/carrot.svg",
          title: "Muscle Strength",
          description:
            "High-quality protein aids in muscle development and maintenance.",
        },
        {
          icon: "/icons/brain-03.svg",
          title: "Cognitive Function",
          description:
            "Rich in B-vitamins to support brain health and mental sharpness.",
        },
      ],
    },
  },
  chicken: {
    title1: "Fresh-Off-the-Coop",
    title2: "Chicken in Every Bite",
    description:
      "Our Chicken Bowl combines gently cooked chicken, nutrient-rich liver, and wholesome vegetables for a balanced, flavorful meal. Packed with essential vitamins, omega-3s, and natural calcium, it supports strong bones, digestion, and a healthy coat. Perfect nutrition to keep your dog thriving",
    ingredients: [
      { image: "/images/beef-meat.webp", name: "Lean Ground Beef" },
      { image: "/images/beef-liver.webp", name: "Beef Liver" },
      { image: "/images/carrot.webp", name: "Carrot" },
      { image: "/images/spinach.webp", name: "Spinach" },
      { image: "/images/egg-yolk.webp", name: "Egg Yolk" },
      { image: "/images/seasoning.webp", name: "Seasoning" },
      { image: "/images/lean-ground-beef.webp", name: "Lean Ground Beef" },
      { image: "/images/egg-yolk.webp", name: "Egg Yolk" },
      { image: "/images/seasoning.webp", name: "Seasoning" },
    ],
    healthBenefits: {
      paragraph:
        "A nutrient-dense chicken meal packed with proteins, vitamins, and minerals to boost immunity, support joint health, and promote overall wellness.",
      benefits: [
        {
          icon: "/icons/heart-hand.svg",
          title: "Balanced Protein & Fats",
          description:
            "White and dark chicken meat provides amino acids and healthy fats for sustained energy.",
        },
        {
          icon: "/icons/eye-plus.svg",
          title: "Gut-Friendly Nutrition",
          description:
            "Butternut squash and cauliflower offer fiber and prebiotics for smooth digestion and gut health.",
        },
        {
          icon: "/icons/carrot.svg",
          title: "Shiny Coat & Strong Joints",
          description:
            "Omega-3s from cod liver oil and egg yolk nourish the skin, coat, and joints.",
        },
        {
          icon: "/icons/brain-03.svg",
          title: "Natural Detox & Immunity",
          description:
            "Kelp and nutritional yeast deliver trace minerals and antioxidants to support immune function and metabolism.",
        },
      ],
    },
  },
  lamb: {
    title1: "Grass-Fed Lamb,",
    title2: "Shepherd-Approved",
    description:
      "Our Lamb Bowl is a delicious blend of lean lamb and liver, with sweet potatoes and broccoli to add fiber, antioxidants, and natural sweetness to every bite. This recipe offers a nutrient-dense and flavorful experience for your dog. With every bowl, your dog gets hearty, satisfying nutrition designed to keep them thriving.",
    ingredients: [
      // Add lamb-specific ingredients
    ],
    healthBenefits: {
      paragraph:
        "A nutrient-dense recipe ideal for sensitive dogs, promoting joint health, immune function, and balanced metabolism with anti-inflammatory and thyroid-supporting ingredients.",
      benefits: [
        {
          icon: "/icons/heart-hand.svg",
          title: "Joint Support",
          description:
            "Lamb, a natural source of conjugated linoleic acid, reduces supports healthy joints  for active or aging dogs.",
        },
        {
          icon: "/icons/eye-plus.svg",
          title: "Sensitive Stomachs",
          description:
            "Less likely to trigger allergies or sensitivities, lamb is perfect for dogs with dietary restrictions.",
        },
        {
          icon: "/icons/carrot.svg",
          title: "Immune-Boosting",
          description:
            "Sweet potatoes and broccoli deliver high levels of antioxidants, vitamins C and E, and beta-carotene.",
        },
        {
          icon: "/icons/brain-03.svg",
          title: "Thyroid and Metabolic Health",
          description:
            "Iodine rich kelp supports thyroid function, helping to regulate metabolism.",
        },
      ],
    },
  },
};

const footerCtaData = {
  mealTransition: {
    title: "Meal",
    highlight: "Transition",
    paragraph:
      "Gradually introduce our fresh meals to ensure a smooth adjustment and lasting benefits for your furry child",
    imageSrc: "/images/meal-transition.webp",
  },
  petFood: {
    title: "Looking for",
    highlight: "Cat Food?",
    paragraph:
      "Check out our nutrient-rich and irresistibly delicious Cat Bowls for optimal feline health and wellness!",
    imageSrc: "/images/cat.webp",
  },
};

export default function MealBody() {
  // State to manage the current selected meal type
  const [selectedMeal, setSelectedMeal] = useState<"beef" | "chicken" | "lamb">(
    "beef",
  );

  // Function to handle tab switching
  const handleMealSwitch = (meal: "beef" | "chicken" | "lamb") => {
    setSelectedMeal(meal);
  };

  // Get the current meal's content
  const currentMeal = mealContent[selectedMeal];

  return (
    <div className="w-full mt-[-3%] sm:mt-[-1.4%]">
      {/* Tab Buttons */}
      <div className="flex gap-[var(--space-8-13)] mb-[var(--space-97-130)] w-fit mx-auto relative z-20">
        <Button
          variant={selectedMeal === "beef" ? "primaryBtn" : "secondaryBtn"}
          onClick={() => handleMealSwitch("beef")}
          
        >
          Beef Bowl
        </Button>
        <Button
          variant={selectedMeal === "chicken" ? "primaryBtn" : "secondaryBtn"}
          onClick={() => handleMealSwitch("chicken")}
        >
          Chicken Bowl
        </Button>
        <Button
          variant={selectedMeal === "lamb" ? "primaryBtn" : "secondaryBtn"}
          onClick={() => handleMealSwitch("lamb")}
        >
          Lamb Bowl
        </Button>
      </div>

      <div className="w-[90%] sm:w-[62%] mx-auto mb-[var(--space-50-67)]">
        <Image
          src="/images/meal-bowl.webp"
          alt="meal bowl"
          className="!static hidden sm:block inset-0 w-full !h-full object-cover object-center"
          fill
          priority
        />
        <Image
          src="/images/meal-bowl-mob.webp"
          alt="meal bowl"
          className="!static block sm:hidden inset-0 w-full !h-full object-cover object-center"
          fill
          priority
        />
      </div>

      {/* Typography Section */}
      <SecondaryBlockTitle
        title={currentMeal.title1}
        highlight={currentMeal.title2}
        paragraph={currentMeal.description}
      />

      {/* Ingredient Table */}
      <IngredientTable ingredients={currentMeal.ingredients} />

      {/* Health Benefits */}
      <HealthBenefits
        paragraph={currentMeal.healthBenefits.paragraph}
        benefits={currentMeal.healthBenefits.benefits}
      />
      <div className="my-12">
        <FooterCtaCard
          mealTransition={footerCtaData.mealTransition}
          petFood={footerCtaData.petFood}
        />
      </div>
    </div>
  );
}
