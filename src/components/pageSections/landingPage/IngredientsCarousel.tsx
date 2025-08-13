"use client";

import Image from "next/image";
import { startTransition, useState } from "react";
import { Button } from "@/components/ui/button";
import Typography from "@/components/atoms/typography/Typography";
import { AnimatePresence, motion } from "framer-motion";
import { useRouter } from "next/navigation";
import useAuthStore from "@/zustand/store/authDataStore";

export const ingredientSlides = [
  {
    title: "Real Ingredients Vs. Fillers",
    description:
      "Your food uses fresh, human-grade ingredients, while kibble often contains fillers like corn, wheat, and soy.",
    image: "/images/ingredients-section-1-thumb.webp",
    buttonLabel: "Get Started",
    buttonLink: "#",
  },
  {
    title: "Gentle Cooking vs. High-Heat Processing",
    description:
      "Your meals are gently cooked to preserve nutrients, unlike kibble, which is processed at high temperatures, reducing nutritional value.",
    image: "/images/ingredients-section-2-thumb.webp",
    buttonLabel: "Get Started",
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
  const router = useRouter();
  const isAuthenticated = useAuthStore((state) => state.isAuthenticated);

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () =>
    setCurrentIndex((prev) => (prev + 1) % ingredientSlides.length);

  const prevSlide = () =>
    setCurrentIndex((prev) =>
      prev === 0 ? ingredientSlides.length - 1 : prev - 1
    );

  const currentSlide = ingredientSlides[currentIndex];

  return (
    <div className="container relative ">
      {/* Green Card */}
      <div className="w-full shadow-[inset_6px_6px_16px_0px_rgba(0,0,0,0.55)] bg-primary-dark rounded-full p-6 pb-[37px] sm:pb-[150px] lg:pb-6 flex flex-col lg:flex-row gap-[30px] sm:gap-[50px] lg:gap-[3%] items-stretch lg:place-items-stretch sm:max-w-[400px] mx-auto lg:max-w-max h-[730px] sm:h-auto relative">
        <div className="absolute max-w-[794px] w-[50%] right-[30px] top-[55%] sm:top-1/2 transform -translate-y-1/2">
          <picture>
            <source
              media="(max-width: 991px)"
              srcSet="/images/ingredients-carousel-mob-bg.webp"
            />
            <source
              media="(min-width: 992px)"
              srcSet="/images/ingredients-carousel-bg.webp"
            />
            <img
              src="/images/ingredients-carousel-bg.webp"
              alt="Delicious meal"
              loading="lazy"
              className="object-contain w-full h-full"
            />
          </picture>
        </div>

        {/* Image */}
        <div className="lg:basis-[50%] h-[300px] sm:h-[400px] lg:h-[30vw] flex items-center justify-center overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide.image + currentIndex}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="w-full h-full flex-shrink-0"
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

        {/* Text */}
        <div className="grow lg:basis-[40%] text-white text-center lg:text-left relative lg:flex lg:items-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide.title + currentIndex}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Typography
                tag="h2"
                text={currentSlide.title}
                className="max-[575px]:!text-[30px] supporting mb-4"
              />
              <Typography
                tag="h6"
                text={currentSlide.description}
                className="!font-normal mb-9 max-w-[90%] lg:max-w-[80%] mx-auto sm:max-w-max sm:mx-0"
              />
              <Button
                variant="linkContrastBtn"
                onClick={() => {
                  startTransition(() => {
                    router.push(isAuthenticated ? "/location" : "/verify-mail");
                  });
                }}
                className="mx-auto lg:mx-0"
              >
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
          <div className="flex justify-center lg:justify-start gap-(--space-20-30) mt-12 lg:mt-6 items-center absolute max-[575px]:bottom-[0px] max-[991px]:bottom-[-70px] bottom-[20px] max-[991px]:left-1/2 max-[991]:transform max-[991px]:-translate-x-1/2">
            <Button
              onClick={prevSlide}
              className="rounded-full text-white hover:bg-white/30 relative h-[38px] w-[38px] p-0 border-none bg-transparent"
            >
              <Image
                src="./icons/prev-left-light-primary.svg"
                alt="nav"
                fill
                className="w-full h-full"
              />
            </Button>

            {/* Progress bar removed */}

            <Button
              onClick={nextSlide}
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
