
import Typography from "@/components/atoms/typography/Typography";
import { MealCard } from "@/components/organism/mealCard/MealCard";
import { MealCardProps } from "@/components/organism/type";
import React from "react";

export default function MealCategory() {
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
    <div className="space-y-(--space-40-60)">
      {mealsData.map((categoryData, index) => (
        <div key={index}>
          {/* Category Header */}
          <Typography tag="h5" text={categoryData.category} className="uppercase font-normal bg-green-800 text-white text-center py-2.5 text-lg  rounded-xl"/>
            

          {/* Meal Cards */}
          <div className="grid gap-6 mt-4">
            {categoryData.meals.map((meal, mealIndex) => (
              <MealCard key={mealIndex} {...meal} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
