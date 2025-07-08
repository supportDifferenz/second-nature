"use client";

import { SecondaryInlineTitle } from "@/components/molecules/titleSyles/Title";
import MealCategory from "@/components/pageSections/landingPage/MealCategory";
import React from "react";
import { motion } from "framer-motion";

export default function MealsAndTreats() {
  return (
    <section className="relative">
 
      <div className=" min-[1260px]:max-w-(--container) mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }} className=" mb-10 sm:mb-[90px]">
          <SecondaryInlineTitle
            title="& Treats"
            highlight="Meals "
            paragraph="Options that fit every palate "
            textAlign="text-center"
            textColor="#00683D"
            order="dissenting"
            className="sm:mx-auto lg:ml-0"
            paragraphColor=""
          />
        </motion.div>
        <MealCategory />
      </div>
    </section >
  );
}
