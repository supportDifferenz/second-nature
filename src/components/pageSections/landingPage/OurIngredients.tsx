"use client";
import Image from "next/image";
import { v4 as uuidv4 } from "uuid";
import { useEffect, useState } from "react";
import { PrimaryInlineTitle } from "@/components/molecules/titleSyles/Title";
import Typography from "@/components/atoms/typography/Typography";
import { motion } from "framer-motion";
import IngredientsCarousel from "./IngredientsCarousel";

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
    ["/images/ingredients-6.webp", "Low in sodium for optimal health.", "right"],
    [
      "/images/ingredients-7.webp",
      "Fresh herbs like parsley and rosemary for added flavor.",
      "right",
    ],
  ].reverse();

  const [radius, setRadius] = useState(0);
  const [isWeb, setIsWeb] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => setIsWeb(window.innerWidth >= 640);
    checkScreenSize();
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

  const softEase = [0.33, 1, 0.68, 1] as [number, number, number, number];

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: softEase }}
        viewport={{ once: true }}
        className="relative z-[5]"
      >
        <PrimaryInlineTitle
          highlight="Ingredients"
          title="Our"
          paragraph="Pure, Clean Ingredients You Can Recognize and Trust"
          textColor="#00683D"
          className="max-w-[80%] sm:max-w-[100%] mx-auto"
        />
      </motion.div>

      <section className=" mt-[-50%] sm:mt-[-12%] lg:mt-[-50px]">
        <div className="overflow-hidden sm:overflow-visible sm:transform sm:scale-[.7] lg:scale-100 relative z-[3] after:content-[''] after:absolute after:w-full after:h-1/2 after:left-0 after:top-0 after:bg-gradient-to-b after:from-white after:via-white/75 after:to-transparent after-z-[1]">
          <div className="h-(--space-527-690) w-[95vw] mx-auto">
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.5, ease: softEase }}
              viewport={{ once: true }}
              className="w-(--space-527-690) h-(--space-527-690) border rounded-full border-primary absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2"
            >
              <div className="w-[70%] sm:w-(--space-300-526) h-[70%] sm:h-(--space-300-526) border rounded-full border-primary absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2"></div>
              <div className="w-(--space-256-406) h-(--space-256-406) border rounded-full border-primary absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2"></div>
              <div className="w-(--space-191-290) h-(--space-191-290) border rounded-full border-primary absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2"></div>
            </motion.div>
          </div>

          <div className="sm:absolute z-[2] sm:top-1/2 sm:left-1/2 sm:transform sm:-translate-y-1/2 sm:-translate-x-1/2 overflow-x-auto sm:overflow-visible">
            <div className="flex flex-row-reverse justify-end sm:flex-row sm:justify-center gap-[22px] sm:gap-0 sm:items-center px-5 sm:px-0">
              {features.map(([img, text, align], index) => {
                const angle = (index / features.length) * (1.5 * Math.PI) - 0.45;
                const x = Math.cos(angle) * radius;
                const y = Math.sin(angle) * radius;

                return (
                  <div
                    key={uuidv4()}
                    className="relative sm:absolute flex flex-col items-center sm:justify-center text-center sm:origin-center"
                    style={isWeb ? { transform: `translate(${x}px, ${y}px)` } : {}}
                  >
                    {isWeb ? (
                      <motion.div
                        initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{
                          duration: 1.1,
                          delay: 0.6 + index * 0.05,
                          ease: softEase,
                        }}
                        viewport={{ once: true }}
                        className="w-(--space-105-136) h-(--space-105-136) "
                      >
                        <Image
                          src={img}
                          alt="Feature"
                          fill
                          priority
                          className="rounded-full !static object-contain"
                        />
                      </motion.div>
                    ) : (
                      <div className="w-(--space-105-136) h-(--space-105-136)">
                        <Image
                          src={img}
                          alt="Feature"
                          fill
                          priority
                          className="rounded-full !static object-contain"
                        />
                      </div>
                    )}

                    {isWeb ? (
                      <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{
                          duration: 1.4,
                          delay: 1.1 + index * 0.05,
                          ease: softEase,
                        }}
                        viewport={{ once: true }}
                        className={`sm:absolute w-(--space-156-160) ${
                          align === "left"
                            ? "sm:-left-[130%] sm:text-right"
                            : align === "right"
                            ? "sm:-right-[130%] sm:text-left"
                            : align === "bottom"
                            ? "sm:top-[100%]"
                            : "sm:flex-col"
                        }`}
                      >
                        <Typography tag="span" text={text} className="text-primary-dark" />
                      </motion.div>
                    ) : (
                      <div
                        className={`sm:absolute w-(--space-156-160) ${
                          align === "left"
                            ? "sm:-left-[130%] sm:text-right"
                            : align === "right"
                            ? "sm:-right-[130%] sm:text-left"
                            : align === "bottom"
                            ? "sm:top-[100%]"
                            : "sm:flex-col"
                        }`}
                      >
                        <Typography tag="span" text={text} className="text-primary-dark" />
                      </div>
                    )}
                  </div>
                );
              })}

              <motion.div
                initial={{ scale: 0.6 }}
                whileInView={{ scale: 1 }}
                transition={{
                  duration: 1.1,
                  delay: 0.4,
                  ease: softEase,
                }}
                viewport={{ once: true }}
                className="w-(--space-280-560) absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2"
              >
                <Image
                  src="/images/ingredients-main-thump.webp"
                  alt="Feature Thump"
                  fill
                  className="!static object-contain"
                />
              </motion.div>
            </div>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: softEase }}
          viewport={{ once: true }}
          className="mt-[15%] sm:mt-[12%] lg:mt-[15%]"
        >
          <IngredientsCarousel />
        </motion.div>
      </section>
    </>
  );
}
