"use client";

import { SecondaryInlineTitle } from "@/components/molecules/titleSyles/Title";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import {  useState } from "react";
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

  // // ✅ Autoplay Effect
  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setSelectedIndex((prev) => (prev + 1) % slides.length);
  //   }, 4000); // change slide every 4 seconds

  //   return () => clearInterval(interval); // cleanup on unmount
  // }, []);

  return (
    <section className="bg-secondary-1 text-white relative">
      <div className="absolute top-1/2 transform -translate-y-1/2  left-0 w-full   max-w-[1920px]">
        <picture>
          <source media="(min-width: 992px)" srcSet="/images/behind-scene-bg.webp" />
          {/* <source media="(min-width: 640px)" srcSet="/images/hero-tablet.jpg" /> */}
          <img
            src="/images/hero-mobile.jpg"
            alt="Hero Banner"
            className="w-full h-auto "
          />
        </picture>

      </div>
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
                initial={{ opacity: 0, }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1, ease: softEase }}
                className="h4 text-center lg:text-left text-[#EBEDE0] sm:max-w-[70%] lg:max-w-[85%] font-normal mx-auto lg:ml-0"
              >
                {slides[selectedIndex].text}
              </motion.h4>
              <motion.div
                initial={{ opacity: 0, }}
                whileInView={{ opacity: 1 }}
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


          <Button
            onClick={scrollPrev}
            className="rounded-full text-white hover:bg-white/30 relative h-[38px] w-[38px] p-0 border-none bg-transparent"
          >
            <Image
              src="./icons/arrow-left-white.svg"
              alt="nav"
              fill
              className="w-full h-full"
            />
          </Button>

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
          <Button
            onClick={scrollNext}
            className="rounded-full text-white hover:bg-white/30 relative h-[38px] w-[38px] p-0 border-none bg-transparent"
          >
            <Image
              src="./icons/arrow-right-white.svg"
              alt="nav"
              fill
              className="w-full h-full"
            />
          </Button>

        </div>
      </div>
    </section>
  );
}
