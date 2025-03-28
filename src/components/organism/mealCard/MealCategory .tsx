import Typography from "@/components/atoms/typography/Typography";
import { MealCard } from "@/components/organism/mealCard/MealCard";
import { MealCardProps } from "@/components/organism/type";
import React, { useState } from "react";

export default function MealCategory() {
  const [mealCategory, setMealCategory] = useState("For Dogs");

  const mealsData: { category: string; meals: MealCardProps[] }[] = [
    {
      category: "For Dogs",
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
            { label: "Get Started", route: "/get-started", variant: "primary" },
            { label: "Know More", route: "/know-more", variant: "secondary" },
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
            { label: "Get Started", route: "/get-started", variant: "primary" },
            { label: "Know More", route: "/know-more", variant: "secondary" },
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
            { label: "Get Started", route: "/get-started", variant: "primary" },
            { label: "Know More", route: "/know-more", variant: "secondary" },
          ],
        },
      ],
    },
    {
      category: "For Cats",
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
            { label: "Get Started", route: "/get-started", variant: "primary" },
            { label: "Know More", route: "/know-more", variant: "secondary" },
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
            { label: "Get Started", route: "/get-started", variant: "primary" },
            { label: "Know More", route: "/know-more", variant: "secondary" },
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
            { label: "Get Started", route: "/get-started", variant: "primary" },
            { label: "Know More", route: "/know-more", variant: "secondary" },
          ],
        },
      ],
    },
  ];

  return (
    <div className="sm:space-y-10">
      {/* Mobile Category Selector */}
      <div className="flex gap-4 sm:hidden ">
        {mealsData.map((categoryData) => (
          <div
            key={categoryData.category}
            onClick={() => setMealCategory(categoryData.category)}
            className="flex-1"
          >
            <Typography
              tag="h5"
              text={categoryData.category}
              className={`uppercase font-normal text-white text-center py-2.5  rounded-xl cursor-pointer ${
                mealCategory === categoryData.category
                  ? "bg-primary-dark"
                  : "bg-text-color"
              }`}
            />
          </div>
        ))}
      </div>

      {/* Mobile: Show only selected category */}
      <div className=" sm:hidden ">
        {mealsData
          .filter((categoryData) => categoryData.category === mealCategory)
          .map((categoryData) => (
            <div key={categoryData.category}>
              <div className="flex gap-6 mt-4 overflow-x-auto">
                {categoryData.meals.map((meal, mealIndex) => (
                  <MealCard key={mealIndex} {...meal} />
                ))}
              </div>
            </div>
          ))}
      </div>

      {/* Web: Show all categories */}
      <div className="hidden sm:block">
        {mealsData.map((categoryData) => (
          <div key={categoryData.category} className="mb-15 last:mb-0">
            {/* Category Header */}
            <Typography
              tag="h5"
              text={categoryData.category}
              className="uppercase font-normal bg-primary-dark text-white text-center py-2.5 text-lg rounded-xl"
            />
            {/* Meal Cards */}
            <div className="grid gap-6 mt-4">
              {categoryData.meals.map((meal, mealIndex) => (
                <MealCard key={mealIndex} {...meal} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
