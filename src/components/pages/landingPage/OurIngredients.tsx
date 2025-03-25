"use client";
import Image from "next/image";
import { v4 as uuidv4 } from "uuid";
import { useEffect, useState } from "react";
import { InlinePrimaryTitle } from "@/components/molecules/titleSyles/Title";

export default function OurIngredients() {
  const features = [
    ["/images/marquee-1.svg", "Human-grade meats used in every recipe."],
    ["/images/marquee-1.svg", "Fresh vegetables sourced from trusted farms."],
    ["/images/marquee-1.svg", "Rich in omega-3s from fish and flaxseed."],
    ["/images/marquee-1.svg", "Probiotic-rich recipes for gut health."],
    ["/images/marquee-1.svg", "Locally sourced ingredients."],
    ["/images/marquee-1.svg", "Low in sodium for optimal health."],
    [
      "/images/marquee-1.svg",
      "Fresh herbs like parsley and rosemary for added flavor.",
    ],
  ];

  const [radius, setRadius] = useState(180);

  useEffect(() => {
    const updateRadius = () => {
      setRadius(Math.min(window.innerWidth * 0.4, 180));
    };
    updateRadius();
    window.addEventListener("resize", updateRadius);
    return () => window.removeEventListener("resize", updateRadius);
  }, []);

  return (
    <div>
      {/* highlight="Ingredients"
        title="Our"
        paragraph="Our Beef Bowl is made up of 85% lean ground beef and nutrient-rich beef liver..."
        caption="Farm Fresh"
        captionPosition="top"
        textAlign="center"
        textColor="#00683D" */}
      <InlinePrimaryTitle
        highlight="Ingredients"
        title="Our"
        paragraph="Pure, Clean Ingredients You Can Recognize and Trust"
        textAlign="center"
        textColor="#00683D"
      />

      <section className=" flex justify-center items-center bg-white overflow-hidden">
        <div className="relative bg-amber-600">
          <div className="w-(--space-520-827) h-(--space-520-827) ">
            {/* Background Circular Lines */}
            <svg
              className=" w-full h-full pointer-events-none"
              viewBox="0 0 500 500"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle
                cx="250"
                cy="250"
                r="180"
                stroke="#ddd"
                strokeWidth="2"
                fill="none"
              />
            </svg>
          </div>

          <div className="absolute flex justify-center items-center">
            {/* Center Image */}
            <div className="relative z-10">
              <Image
                src="/images/marquee-1.svg"
                alt="Food Bowl"
                width={300}
                height={300}
                className="rounded-full"
              />
            </div>

            {/* Circular Items */}
            {features.map(([img, text], index) => {
              const angle = (index / features.length) * (2 * Math.PI);
              const x = Math.cos(angle) * radius;
              const y = Math.sin(angle) * radius;

              return (
                <div
                  key={uuidv4()}
                  className="absolute flex flex-col items-center text-center"
                  style={{ transform: `translate(${x}px, ${y}px)` }}
                >
                  <Image
                    src={img}
                    alt="Feature"
                    width={60}
                    height={60}
                    className="rounded-full"
                  />
                  <p className="text-xs sm:text-sm mt-2 w-24 text-center">
                    {text}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
