"use client";

import { SecondaryInlineTitle } from "@/components/molecules/titleSyles/Title";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const slides = [
  {
    image: "/images/landing-behind-scenes-thumb.webp",
    alt: "Veterinarian with cat",
    text: "Certified By Veterinary Medical Doctors Based On FEDIAF Guidelines",
  },
  {
    image: "/images/landing-behind-scenes-thumb2.webp",
    alt: "Vet lab team",
    text: "Rigorous Lab Tests & Nutrition Standards You Can Trust",
  },
  {
    image: "/images/landing-behind-scenes-thumb3.webp",
    alt: "Natural ingredients",
    text: "Carefully Selected Ingredients Sourced Responsibly",
  },
];

export default function BehindTheScenes() {
  const [selectedIndex, setSelectedIndex] = useState(0);

  const scrollPrev = () => {
    setSelectedIndex((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const scrollNext = () => {
    setSelectedIndex((prev) => (prev + 1) % slides.length);
  };

  const softEase = [0.33, 1, 0.68, 1] as [number, number, number, number];

  // ✅ Autoplay Effect
  useEffect(() => {
    const interval = setInterval(() => {
      setSelectedIndex((prev) => (prev + 1) % slides.length);
    }, 4000); // change slide every 4 seconds

    return () => clearInterval(interval); // cleanup on unmount
  }, []);

  return (
    <section className="bg-secondary-1 text-white">
      <div className="container py-20 2xl:py-25">
        <div className="mb-12 text-center lg:text-left">
          <SecondaryInlineTitle
            title="Behind"
            highlight="The Scenes"
            paragraph="Our Science-Backed Process"
            textColor="#EBEDE0"
            textAlign="text-center sm:text-center lg:text-left"
            paragraphColor="#EBEDE0"
          />
        </div>

        <div className="relative flex justify-center mb-[50px]">
          <motion.div
            key={selectedIndex}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
            className="flex flex-col lg:flex-row lg:items-center gap-[var(--space-30-60)] w-full"
          >
            <div className="lg:flex-1 relative h-[60vw] sm:h-[40vw]  lg:h-[24vw] ">
              <Image
                src={slides[selectedIndex].image}
                alt={slides[selectedIndex].alt}
                fill
                className="rounded-[var(--space-20-45)] w-full object-cover "
              />
            </div>
            <div className="flex-1 text-center md:text-left">
              <motion.h4
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: softEase }}
                className="h4 text-center lg:text-left sm:max-w-[70%] lg:max-w-[85%] font-normal mx-auto lg:ml-0"
              >
                {slides[selectedIndex].text}
              </motion.h4>
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: softEase }}
              >
                <Button
                  variant="secondaryBtnTextSecondary1"
                  size="md"
                  className="mt-[var(--space-30-60)] mx-auto lg:ml-0"
                >
                  Learn More
                </Button>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Controls */}
        <div className="flex justify-center items-center space-x-4">
          <button
            onClick={scrollPrev}
            className="p-2 bg-primary-light text-secondary-1 font-bold text-3xl !leading-0 rounded-full hover:bg-white transition cursor-pointer hover:scale-110 duration-300"
            aria-label="Previous slide"
          >
            <ChevronLeft className="w-6 h-6 text-secondary-1" />
          </button>

          {slides.map((_, index) => (
            <button
              key={index}
              className={cn(
                "w-2 h-2 rounded-full transition",
                selectedIndex === index ? "bg-white" : "bg-secondary-2"
              )}
              onClick={() => setSelectedIndex(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}

          <button
            onClick={scrollNext}
            className="p-2 bg-primary-light text-secondary-1 rounded-full hover:bg-white transition cursor-pointer hover:scale-110 duration-300"
            aria-label="Next slide"
          >
            <ChevronRight className="w-6 h-6 text-secondary-1" />
          </button>
        </div>
      </div>
    </section>
  );
}
