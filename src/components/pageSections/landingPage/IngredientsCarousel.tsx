"use client";






import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import { useCallback, useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import Typography from "@/components/atoms/typography/Typography";

export const ingredientSlides = [
  {
    title: "Real Ingredients Vs. Fillers",
    description:
      "Your food uses fresh, human-grade ingredients, while kibble often contains fillers like corn, wheat, and soy.",
    image: "/images/ingredients-section-2-thumb.webp",
    buttonLabel: "Explore Ingredients",
    buttonLink: "#",
  },
  {
    title: "Gentle Cooking Vs. High-Heat Processing",
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
    image: "/images/ingredients-section-2-thumb.webp",
    buttonLabel: "Get Started",
    buttonLink: "#",
  },
];

export default function IngredientsCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const [, setSelectedIndex] = useState(0);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    emblaApi.on("select", onSelect);
    onSelect();
  }, [emblaApi, onSelect]);

  return (
    
    <div className="container">
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="inline-flex items-start">
          {ingredientSlides.map((item, index) => (
            <div key={index} className="min-w-full shadow-[inset_6px_6px_16px_0px_rgba(0,0,0,0.55)] bg-primary-dark rounded-full p-(--space-20-45) pb-[130px] sm:pb-(--space-20-45) flex flex-col sm:flex-row gap-[50px] sm:gap-[3%] items-stretch lg:items-center">
              <div className="sm:basis-[50%] h-[450px] sm:h-auto">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="!static rounded-full sm:rounded-[50%] lg:rounded-full !h-full object-cover"

                />
              </div>
              <div className="sm:basis-[40%] lg:basis-[40%] text-white text-center sm:text-left">
                <Typography
                  tag="h2"
                  text={item.title}
                  className="supporting mb-4"
                />
                <Typography
                  tag="h6"
                  text={item.description}
                  className="!font-normal mb-9 max-w-[90%] mx-auto sm:max-w-max sm:mx-0"
                />
                <Button variant="linkContrastBtn" className="mx-auto sm:mx-0">
                  {item.buttonLabel}
                  <Image
                    src="/icons/contrast-button-chevron-right.svg"
                    alt="icon"
                    width={16}
                    height={16}
                  />
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination Dots */}
        {/* <div className="flex justify-center mt-6 gap-2">
        {ingredientSlides.map((_, index) => (
          <button
            key={index}
            className={`w-2.5 h-2.5 rounded-full ${index === selectedIndex ? "bg-white" : "bg-gray-500"
              }`}
            onClick={() => emblaApi?.scrollTo(index)}
          />
        ))}
      </div> */}
      </div>
    </div>
  );
}



