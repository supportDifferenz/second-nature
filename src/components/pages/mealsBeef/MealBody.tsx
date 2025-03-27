"use client";

import { SecondaryBlockTitle } from "@/components/molecules/titleSyles/Title";
import IngredientTable from "@/components/organism/IngredientTable";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import React, { useState } from "react";
import HealthBenefits from "./HealthBenefits";

// Define the content for each meal type
const mealContent = {
  beef: {
    title1: "A Hearty Beef Feast,",
    title2: "Straight from The Farm",
    description:
      "Our Beef Bowl is made up of 85% lean ground beef and nutrient-rich beef liver, is a protein-packed feast designed to fuel your dog's lifestyle enhanced with fresh carrots and spinach for fiber and antioxidants supporting healthy muscles, digestion, and a shiny coat.",
    ingredients: [
      { image: "/images/beef-meat.webp", name: "Lean Ground Beef" },
      { image: "/images/beef-liver.webp", name: "Beef Liver" },
      { image: "/images/beef-liver.webp", name: "Carrot" },
      { image: "/images/beef-liver.webp", name: "Spinach" },
      { image: "/images/beef-liver.webp", name: "Egg Yolk" },
      { image: "/images/beef-liver.webp", name: "Beef Liver" },
      { image: "/images/beef-liver.webp", name: "Carrot" },
      { image: "/images/beef-liver.webp", name: "Beef Liver" },
      { image: "/images/beef-liver.webp", name: "Beef Liver" },
    ]
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
        { image: "/images/seasoning.webp", name: "Seasoning" }
    ]
  },
  lamb: {
    title1: "Grass-Fed Lamb,",
    title2: "Shepherd-Approved",
    description:
      "	Our Lamb Bowl is a delicious blend of lean lamb and liver, with sweet potatoes and broccoli to add fiber, antioxidants, and natural sweetness to every bite. This recipe offers a nutrient-dense and flavorful experience for your dog. With every bowl, your dog gets hearty, satisfying nutrition designed to keep them thriving.",
    ingredients: [
      // Add lamb-specific ingredients
    ]
  }
};

export default function MealBody() {
  // State to manage the current selected meal type
  const [selectedMeal, setSelectedMeal] = useState<"beef" | "chicken" | "lamb">(
    "beef"
  );

  // Function to handle tab switching
  const handleMealSwitch = (meal: "beef" | "chicken" | "lamb") => {
    setSelectedMeal(meal);
  };

  // Get the current meal's content
  const currentMeal = mealContent[selectedMeal];

  return (
    <div className="w-full mt-[-3%] sm:mt-[-1%]">
      {/* Tab Buttons */}
      <div className="flex gap-[var(--space-8-13)] mb-[var(--space-97-130)] w-fit mx-auto">
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
      <HealthBenefits />
    </div>
  );
}