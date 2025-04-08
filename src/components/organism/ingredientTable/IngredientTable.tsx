import React from "react";
import Typography from "@/components/atoms/typography/Typography";
import Image from "next/image";

// Define an interface for the ingredient
interface Ingredient {
  image: string;
  name: string;
}

// Define the props interface for the IngredientTable
interface IngredientTableProps {
  ingredients: Ingredient[];
}

export default function IngredientTable({ ingredients }: IngredientTableProps) {
  return (
    <div className="mt-[var(--space-110-114)]">
      <div className="mx-auto text-center bg-primary-dark py-1 rounded-[2.33vw] sm:rounded-[0.52vw] w-[90vw] sm:w-[40vw] mb-4">
        <Typography
          tag="h5"
          className="text-white uppercase"
          text="Key ingredients"
        />
      </div>
      <div className="grid grid-cols-2   sm:grid-cols-3 gap-4 w-[90vw] sm:w-[40vw] mx-auto">
        {ingredients.map((ingredient, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center text-center"
          >
            <div className=" w-[31vw] sm:w-[9.6vw] aspect-square relative">
              <Image
                src={ingredient.image}
                alt={ingredient.name}
                fill
                className="object-cover rounded-lg"
              />
            </div>
            <Typography
              tag="span"
              text={ingredient.name}
              className="text-sm capitalize"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
