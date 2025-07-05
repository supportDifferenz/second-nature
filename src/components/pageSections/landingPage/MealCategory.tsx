"use client";

import Typography from "@/components/atoms/typography/Typography";
import { MealCard } from "@/components/organism/mealCard/MealCard";
import { MealCardPropsType } from "@/components/types/type";
import Image from "next/image";
import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

export default function MealCategory() {
  const [mealCategory, setMealCategory] = useState("For Dogs");

  const mealsData: {
    category: string;
    categoryImg: string;
    meals: MealCardPropsType[];
  }[] = [
    {
      category: "For Dogs",
      categoryImg: "/images/dogs-cutout.webp",
      meals: [
        {
          tag: "MEALS",
          title: "Beef Bowl",
          image: "/images/beef-bowl-dog.webp",
          features: [
            "High in Omega-3s",
            "Probiotic-Rich",
            "Egg Yolk For Vitality",
            "Premium Protein Source",
          ],
          buttons: [
            { label: "Get Started", route: "/location", variant: "primary" },
            {
              label: "Know More",
              route: "/meals?pet=dog&protein=beef",
              variant: "secondary",
            },
          ],
        },
        {
          tag: "MEALS",
          title: "Lamb Bowl",
          image: "/images/lamb-bowl-dog.webp",
          features: [
            "Grass-Fed Lamb",
            "Colorful Veggies",
            "Spiced For Flavor",
            "Herbal Wellness",
          ],
          buttons: [
            { label: "Get Started", route: "/location", variant: "primary" },
            {
              label: "Know More",
              route: "/meals?pet=dog&protein=lamb",
              variant: "secondary",
            },
          ],
        },
        {
          tag: "MEALS",
          title: "Chicken Bowl",
          image: "/images/chicken-bowl-dog.webp",
          features: [
            "Balanced Protein Mix",
            "Organ Boost",
            "Antioxidants",
            "Micro-Minerals",
          ],
          buttons: [
            { label: "Get Started", route: "/location", variant: "primary" },
            {
              label: "Know More",
              route: "/meals?pet=dog&protein=chicken",
              variant: "secondary",
            },
          ],
        },
      ],
    },
    {
      category: "For Cats",
      categoryImg: "/images/cat-cutout.webp",
      meals: [
        {
          tag: "MEALS",
          title: "Beef Bowl",
          image: "/images/beef-bowl-cat.webp",
          features: [
            "Nutrient-Dense Organ Meat",
            "Eggs for Vitality",
            "Essential Fatty Acids",
            "Antioxidant-Rich Vegetables",
          ],
          buttons: [
            { label: "Get Started", route: "/location", variant: "primary" },
            {
              label: "Know More",
              route: "/meals?pet=cat&protein=beef",
              variant: "secondary",
            },
          ],
        },
        {
          tag: "MEALS",
          title: "Lamb Bowl",
          image: "/images/lamb-bowl-cat.webp",
          features: [
            "Grass-Fed Lamb",
            "Spiced For Flavor",
            "Natural Digestive Support",
            "Balanced Macronutrients",
          ],
          buttons: [
            { label: "Get Started", route: "/location", variant: "primary" },
            {
              label: "Know More",
              route: "/meals?pet=cat&protein=lamb",
              variant: "secondary",
            },
          ],
        },
        {
          tag: "MEALS",
          title: "Chicken Bowl",
          image: "/images/chicken-bowl-cat.webp",
          features: [
            "Balanced Protein Mix",
            "Omega-3 Rich Oil",
            "Calcium & Bone Support",
            "Organ Meat Benefits",
          ],
          buttons: [
            { label: "Get Started", route: "/location", variant: "primary" },
            {
              label: "Know More",
              route: "/meals?pet=cat&protein=chicken",
              variant: "secondary",
            },
          ],
        },
      ],
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="sm:space-y-10"
    >
      {/* Mobile Category Selector */}
      <div className="flex justify-center gap-4 min-[1260px]:hidden container">
        {mealsData.map((categoryData) => (
          <div
            key={categoryData.category}
            onClick={() => setMealCategory(categoryData.category)}
            className="basis-[50%] sm:basis-[40%]"
          >
            <div
              className={`shrink-0 uppercase font-normal h-[40px] min-[400px]:h-[60px] flex items-end justify-center text-white text-center rounded-xl cursor-pointer ${
                mealCategory === categoryData.category
                  ? "bg-primary-dark"
                  : "bg-text-color"
              }`}
            >
              <div className="flex items-end">
                <div className="relative w-[50px] h-[40px] min-[400px]:w-[80px] min-[400px]:h-[70px] overflow-hidden">
                  <Image
                    src={categoryData.categoryImg}
                    alt="pet"
                    fill
                    className="object-contain"
                  />
                </div>
                <Typography
                  tag="h5"
                  text={categoryData.category}
                  className="uppercase font-normal text-white max-[400px]:!text-sm text-center pb-2 min-[400px]:pb-4"
                />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Mobile: Show only selected category with animation */}
      <div className="min-[1260px]:hidden sm:max-(--container)">
        <AnimatePresence mode="wait">
          {mealsData
            .filter((categoryData) => categoryData.category === mealCategory)
            .map((categoryData) => (
              <motion.div
                key={categoryData.category}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -30 }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
              >
                <div className="flex sm:flex-wrap gap-6 mt-4 lg:mt-8 overflow-x-auto px-9 sm:px-0">
                  {categoryData.meals.map((meal, mealIndex) => (
                    <div
                      key={mealIndex}
                      className="sm:w-[85%] sm:max-w-[650px] lg:max-w-[760px] mx-auto"
                    >
                      <MealCard {...meal} />
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
        </AnimatePresence>
      </div>

      {/* Web: Show all categories */}
      <div className="hidden min-[1260px]:flex gap-7 xl:gap-12">
        {mealsData.map((categoryData) => (
          <div
            key={categoryData.category}
            className="mb-15 last:mb-0 sm:mb-0 sm:flex-1"
          >
            {/* Category Header */}
            <div className="bg-primary-dark h-[60px] rounded-xl flex justify-center items-end">
              <div className="flex items-end justify-center mb-[-1px]">
                <div className="relative w-[110px] h-[99px]">
                  <Image
                    src={categoryData.categoryImg}
                    alt="pet"
                    fill
                    className="object-contain"
                  />
                </div>
                <Typography
                  tag="h5"
                  text={categoryData.category}
                  className="uppercase font-normal text-white text-center text-lg pb-[10px]"
                />
              </div>
            </div>
            {/* Meal Cards */}
            <div className="grid mt-6 gap-8">
              {categoryData.meals.map((meal, mealIndex) => (
                <MealCard key={mealIndex} {...meal} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
}
