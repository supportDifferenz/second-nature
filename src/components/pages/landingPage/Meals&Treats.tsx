"use client";

import MealCategory from "@/components/organism/mealCard/MealCategory ";
import React from "react";

export default function MealsAndTreats() {
  return (
    <section>
      <div className="container flex flex-col lg:flex-row">
        <div className="basis-[50%]">wehshzui</div>

        <div className="basis-[50%]">
          <MealCategory />
        </div>
      </div>
    </section>
  );
}
