"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import Typography from "@/components/atoms/typography/Typography";
import { AnimatePresence, motion } from "framer-motion";

export const ingredientSlides = [
  {
    title: "Real Ingredients Vs. Fillers",
    description:
      "Your food uses fresh, human-grade ingredients, while kibble often contains fillers like corn, wheat, and soy.",
    image: "/images/ingredients-section-1-thumb.webp",
    buttonLabel: "Explore Ingredients",
    buttonLink: "#",
  },
  {
    title: "Gentle Cooking vs. High-Heat Processing",
    description:
      "Your meals are gently cooked to preserve nutrients, unlike kibble, which is processed at high temperatures, reducing nutritional value.",
    image: "/images/ingredients-section-2-thumb.webp",
    buttonLabel: "How it works",
    buttonLink: "#",
  },
  {
    title: "Tailored Nutrition Vs. One-Size-Fits-All",
    description:
      "Your food can be customized to meet your pet’s specific dietary needs, whereas kibble often provides generic formulas.",
    image: "/images/ingredients-section-3-thumb.webp",
    buttonLabel: "Get Started",
    buttonLink: "#",
  },
];

export default function IngredientsCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [progress, setProgress] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const nextSlide = () =>
    setCurrentIndex((prev) => (prev + 1) % ingredientSlides.length);

  const prevSlide = () =>
    setCurrentIndex((prev) =>
      prev === 0 ? ingredientSlides.length - 1 : prev - 1
    );

  const handleHold = () => setIsPaused(true);
  const handleRelease = () => setIsPaused(false);

  useEffect(() => {
    setProgress(0);
    if (intervalRef.current) clearInterval(intervalRef.current);

    intervalRef.current = setInterval(() => {
      setProgress((prev) => {
        if (isPaused) return prev;
        if (prev >= 100) {
          nextSlide();
          return 0;
        }
        return prev + 1;
      });
    }, 30);

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [currentIndex, isPaused]);

  const currentSlide = ingredientSlides[currentIndex];

  return (
    <div className="container relative">
      {/* Green Card */}
      <div
        className="w-full shadow-[inset_6px_6px_16px_0px_rgba(0,0,0,0.55)] bg-primary-dark rounded-full p-6 pb-[60px] sm:pb-[70px] lg:pb-6 flex flex-col lg:flex-row gap-[50px] lg:gap-[3%] items-stretch lg:place-items-stretch sm:max-w-[400px] mx-auto lg:max-w-max h-[830px] sm:h-auto"
        onMouseDown={handleHold}
        onMouseUp={handleRelease}
        onMouseLeave={handleRelease}
        onTouchStart={handleHold}
        onTouchEnd={handleRelease}
      >
        {/* Image with smooth fade and height-safe layout */}
        <div className="lg:basis-[50%] h-[300px] sm:h-[400px] lg:h-[30vw] flex items-center justify-center overflow-hidden ">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide.image + currentIndex}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.01 }}
              transition={{ duration: 0.6, ease: [0.42, 0, 0.58, 1] }}
              className="w-full h-full flex-shrink-0 "
            >
              <Image
                src={currentSlide.image}
                alt={currentSlide.title}
                width={500}
                height={500}
                priority
                className="rounded-full w-full h-full object-cover"
              />
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Text with smooth transition */}
        <div className="grow lg:basis-[40%]  text-white text-center lg:text-left  relative  lg:flex lg:items-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide.title + currentIndex}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.6, ease: [0.42, 0, 0.58, 1] }}
            >
              <Typography
                tag="h2"
                text={currentSlide.title}
                className="supporting mb-4"
              />
              <Typography
                tag="h6"
                text={currentSlide.description}
                className="!font-normal mb-9 max-w-[90%] mx-auto sm:max-w-max sm:mx-0"
              />
              <Button variant="linkContrastBtn" className="mx-auto lg:mx-0">
                {currentSlide.buttonLabel}
                <Image
                  src="/icons/contrast-button-chevron-right.svg"
                  alt="icon"
                  width={16}
                  height={16}
                />
              </Button>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Buttons */}
          <div className="flex justify-center lg:justify-start gap-3 mt-12 lg:mt-6 items-center absolute max-[575px]:bottom-[0px] bottom-[20px] max-[575px]:left-1/2 max-[575]:transform max-[575px]:-translate-x-1/2  ">
            <Button
              onClick={() => {
                prevSlide();
                setProgress(0);
              }}
              className="rounded-full text-white hover:bg-white/30 relative h-[38px] w-[38px] p-0 border-none bg-transparent"
            >
              <Image
                src="./icons/prev-left-light-primary.svg"
                alt="nav"
                fill
                className="w-full h-full"
              />
            </Button>

            <div className="relative w-full h-[2.5px] bg-contrast-button max-w-9 overflow-hidden flex-shrink-0">
              <motion.div
                className="absolute h-full bg-primary"
                initial={{ width: 0 }}
                animate={{ width: `${progress}%` }}
                transition={{ ease: "linear", duration: 0.05 }}
              />
            </div>

            <Button
              onClick={() => {
                nextSlide();
                setProgress(0);
              }}
              className="rounded-full text-white hover:bg-white/30 relative h-[38px] w-[38px] p-0 border-none bg-transparent"
            >
              <Image
                src="./icons/prev-right-light-primary.svg"
                alt="nav"
                fill
                className="w-full h-full"
              />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
