"use client";
import Image from "next/image";
import { v4 as uuidv4 } from "uuid";
import { useEffect, useState } from "react";
import { PrimaryInlineTitle } from "@/components/molecules/titleSyles/Title";
import Typography from "@/components/atoms/typography/Typography";
import { Button } from "@/components/ui/button";

export default function OurIngredients() {
  const features = [
    [
      "/images/ingredients-1.webp",
      "Human-grade meats used in every recipe.",
      "left",
    ],
    [
      "/images/ingredients-2.webp",
      "Fresh vegetables sourced from trusted farms.",
      "left",
    ],
    [
      "/images/ingredients-3.webp",
      "Rich in omega-3s from fish and flaxseed.",
      "left",
    ],
    [
      "/images/ingredients-4.webp",
      "Probiotic-rich recipes for gut health.",
      "bottom",
    ],
    ["/images/ingredients-5.webp", "Locally sourced ingredients.", "right"],
    [
      "/images/ingredients-6.webp",
      "Low in sodium for optimal health.",
      "right",
    ],
    [
      "/images/ingredients-7.webp",
      "Fresh herbs like parsley and rosemary for added flavor.",
      "right",
    ],
  ].reverse(); // Reverse the order

  const [radius, setRadius] = useState(0);

  const [isWeb, setIsWeb] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => setIsWeb(window.innerWidth >= 640);
    checkScreenSize(); // Initial check
    window.addEventListener("resize", checkScreenSize);
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);
  useEffect(() => {
    const updateRadius = () => {
      setRadius(Math.min(window.innerWidth * 0.4, 310));
    };
    updateRadius();
    window.addEventListener("resize", updateRadius);
    return () => window.removeEventListener("resize", updateRadius);
  }, []);

  return (
    <>
      <div className="relative z-[5]">
        <PrimaryInlineTitle
          highlight="Ingredients"
          title="Our"
          paragraph="Pure, Clean Ingredients You Can Recognize and Trust"
          textColor="#00683D"
        />
      </div>
      <section className=" mt-[-70%] sm:mt-[-12%] lg:mt-[-50px]">
        {/* ingredients circle section */}
        <div className=" overflow-hidden sm:overflow-visible sm:transform sm:scale-[.7]  lg:scale-100 relative z-[3]  after:content-[''] after:absolute after:w-full after:h-1/2 after:left-0 after:top-0  after:bg-gradient-to-b after:from-white after:via-white/75 after:to-transparent after-z-[1]">
          <div className="h-(--space-527-690) w-[95vw] mx-auto">
            <div className="w-(--space-527-690) h-(--space-527-690) border rounded-full border-primary absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2">
              <div className="w-[70%] sm:w-(--space-300-526) h-[70%] sm:h-(--space-300-526) border rounded-full border-primary absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2"></div>
              <div className="w-(--space-256-406) h-(--space-256-406) border rounded-full border-primary absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2"></div>
              <div className="w-(--space-191-290) h-(--space-191-290) border rounded-full border-primary absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2"></div>
            </div>
          </div>
          <div className=" sm:absolute z-[2] top-1/2 left-1/2 sm:transform sm:-translate-y-1/2 sm:-translate-x-1/2 flex justify-start flex-row-reverse sm:flex-row sm:justify-center gap-[22px] sm:gap-0  sm:items-center overflow-x-auto sm:overflow-visible">
            {/* Circular Items */}
            {features.map(([img, text, align], index) => {
              const angle = (index / features.length) * (1.5 * Math.PI) - 0.45;
              const x = Math.cos(angle) * radius;
              const y = Math.sin(angle) * radius;
              return (
                <div
                  key={uuidv4()}
                  className={`relative sm:absolute  flex flex-col sm:items-center sm:justify-center  text-center  sm:origin-center  `}
                  style={
                    isWeb ? { transform: `translate(${x}px, ${y}px)` } : {}
                  }
                >
                  {/* Image */}
                  <div className="w-(--space-105-136) h-(--space-105-136)">
                    <Image
                      src={img}
                      alt="Feature"
                      fill
                      priority
                      className="rounded-full !static object-contain"
                    />
                  </div>
                  {/* Dynamically positioned text */}
                  <Typography
                    tag="span"
                    text={text}
                    className={` text-primary-dark sm:absolute w-(--space-156-160) ${
                      align === "left"
                        ? "sm:-left-[130%] sm:text-right"
                        : align === "right"
                          ? "sm:-right-[130%] sm:text-left"
                          : align === "bottom"
                            ? "sm:top-[100%]"
                            : "sm:flex-col"
                    }`}
                  />
                </div>
              );
            })}

            {/* Main Thumbnail */}
            <div className="w-(--space-280-560) absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <Image
                src="/images/ingredients-main-thump.webp"
                alt="Feature Thump"
                fill
                className="!static object-contain"
              />
            </div>
          </div>
        </div>
        {/* Real Ingredients vs. Fillers */}
        <div className="container">
          <div className=" mt-[10%] lg:mt-[18%] shadow-[inset_6px_6px_16px_0px_rgba(0,0,0,0.55)] bg-primary-dark rounded-full p-(--space-20-45) pb-[130px] sm:pb-(--space-20-45) flex flex-col sm:flex-row gap-[50px] sm:gap-[3%] items-stretch lg:items-center">
            <div className="sm:basis-[50%] h-[450px] sm:h-auto">
              <Image
                src="/images/ingredients-section-2-thumb.webp"
                alt="Real Ingredients vs. Fillers"
                fill
                className="!static rounded-full sm:rounded-[50%] lg:rounded-full !h-full object-cover"
              />
            </div>
            <div className="sm:basis-[40%] lg:basis-[35%] text-white text-center sm:text-left">
              <Typography
                tag="h2"
                text="Real Ingredients vs. Fillers"
                className="supporting mb-4"
                role="heading"
                ariaLabel="Real Ingredients vs. Fillers"
                ariaLabelledBy="card title"
              />
              <Typography
                tag="h6"
                text="Your food uses fresh, human-grade ingredients, while kibble often contains fillers like corn, wheat, and soy."
                role="paragraph"
                ariaLabel="Your food uses fresh, human-grade ingredients, while kibble often contains fillers like corn, wheat, and soy."
                ariaLabelledBy="card paragraph"
                className="!font-normal mb-9 max-w-[90%] mx-auto sm:max-w-max sm:mx-0 "
              />
              <Button variant={"linkContrastBtn"} className="mx-auto sm:mx-0">
                Explore Ingredients
                <Image
                  src="/icons/contrast-button-chevron-right.svg"
                  alt="icon"
                  fill
                  className="!static"
                />
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
