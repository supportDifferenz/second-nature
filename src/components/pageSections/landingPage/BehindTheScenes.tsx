"use client";

import Typography from "@/components/atoms/typography/Typography";
import { SecondaryInlineTitle } from "@/components/molecules/titleSyles/Title";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { motion } from "framer-motion";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface ContentItem {
  id: number;
  image: string;
  title: string;
  description: string;
  buttonText: string;
}

const contentData: ContentItem[] = [
  {
    id: 1,
    image: "/images/landing-behind-scenes-thumb.webp",
    title: "Certified By Veterinary Medical Doctors Based On FEDIAF Guidelines",
    description:
      "Our recipes are meticulously crafted and validated by veterinary medical professionals following strict FEDIAF guidelines to ensure optimal nutrition for your pet.",
    buttonText: "Learn More",
  },
  {
    id: 2,
    image: "/images/landing-behind-scenes-thumb.webp",
    title: "We Craft Our Recipes With The Finest Fresh Meats And Vegetables",
    description:
      "Every ingredient is carefully selected from trusted suppliers, ensuring the highest quality fresh meats and farm-fresh vegetables for your beloved companion.",
    buttonText: "View Recipes",
  },
  {
    id: 3,
    image: "/images/landing-behind-scenes-thumb.webp",
    title: "Crafted In A Dedicated Kitchen For Maximum Freshness And Safety",
    description:
      "Our state-of-the-art kitchen facilities maintain the highest standards of food safety and freshness, ensuring every meal is prepared with care and precision.",
    buttonText: "Our Kitchen",
  },
];

export default function BehindTheScenes() {
  const sectionRef = useRef<HTMLElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const contentRefs = useRef<(HTMLDivElement | null)[]>([]);
  const imageRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const section = sectionRef.current;
    const container = containerRef.current;

    if (!section || !container) return;

    gsap.set(contentRefs.current.slice(1), { opacity: 0 });
    gsap.set(imageRefs.current.slice(1), { opacity: 0 });

    // Show the first one immediately
    gsap.set([contentRefs.current[0], imageRefs.current[0]], {
      opacity: 1,
      y: 0,
    });

    const tl = gsap.timeline({ paused: true });

    contentData.forEach((_, index) => {
      const contentElement = contentRefs.current[index];
      const imageElement = imageRefs.current[index];

      if (!contentElement || !imageElement) return;

      gsap.set([contentElement, imageElement], {
        zIndex: contentData.length - index,
      });

      const fadeInStart = index * 3;
      const fadeOutStart = fadeInStart + 2.5;

      tl.fromTo(
        [contentElement, imageElement],
        { opacity: 0, y: 60 },
        {
          opacity: 1,
          y: 0,
          duration: 3,
          ease: "power3.out",
        },
        fadeInStart
      );

      if (index !== contentData.length - 1) {
        tl.to(
          [contentElement, imageElement],
          {
            opacity: 0,
            y: -60,
            duration: 3,
            ease: "power3.in",
          },
          fadeOutStart
        );
      }
    });

    // ScrollTrigger with manual scrub control
    ScrollTrigger.create({
      trigger: section,
      start: "top top",
      end: "+=1200vh",
      pin: true,
      pinSpacing: true,
      anticipatePin: 1,
      scrub: false, // disable built-in scrub
      onUpdate: (self) => {
        const velocity = Math.abs(self.getVelocity());
        const clamped = Math.min(velocity / 1000, 1);
        const easedScrub = gsap.utils.interpolate(3, 6, clamped); // 3 to 6 seconds

        gsap.to(tl, {
          time: self.progress * tl.duration(),
          duration: easedScrub,
          ease: "power3.out",
        });

        // Background color transition
        const progress = self.progress;
        const bgProgress = Math.min(progress * 1.2, 1);
        const startColor = { r: 42, g: 22, b: 22 };
        const endColor = { r: 148, g: 68, b: 70 };

        const r = Math.round(
          startColor.r + (endColor.r - startColor.r) * bgProgress
        );
        const g = Math.round(
          startColor.g + (endColor.g - startColor.g) * bgProgress
        );
        const b = Math.round(
          startColor.b + (endColor.b - startColor.b) * bgProgress
        );

        gsap.to(section, {
          backgroundColor: `rgb(${r}, ${g}, ${b})`,
          duration: 0.2,
          ease: "power1.out",
        });
      },
    });

    return () => {
      tl.kill();
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  const setContentRef = (index: number) => (el: HTMLDivElement | null) => {
    contentRefs.current[index] = el;
  };

  const setImageRef = (index: number) => (el: HTMLDivElement | null) => {
    imageRefs.current[index] = el;
  };

  return (
    <motion.section
      ref={sectionRef}
      initial={{ backgroundColor: "#2A1616" }}
      className="relative overflow-hidden h-screen flex items-center"
    >
      <div ref={containerRef} className="container w-full">
        <div className="mb-8 lg:mb-12 text-center lg:text-left">
          <SecondaryInlineTitle
            title="Behind"
            highlight="The Scenes"
            paragraph="Our Science-Backed Process"
            textColor="#EBEDE0"
            textAlign="text-center sm:text-center lg:text-left"
            paragraphColor="#EBEDE0"
          />
        </div>

        <div className="relative">
          {contentData.map((item, index) => (
            <div
              key={item.id}
              className="absolute inset-0 flex flex-col lg:flex-row lg:items-center gap-8 lg:gap-12 transition-all"
              style={{ zIndex: contentData.length - index }}
            >
              <div
                ref={setImageRef(index)}
                className="flex-1 overflow-hidden will-change-opacity transform-gpu"
              >
                <div className="sm:max-w-[70%] lg:max-w-full mx-auto lg:ml-0">
                  <div className="relative">
                    <Image
                      src={item.image}
                      width={600}
                      height={400}
                      alt={`Behind the scenes - ${item.title}`}
                      className="rounded-2xl lg:rounded-3xl w-full"
                      priority={index === 0}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl lg:rounded-3xl" />
                  </div>
                </div>
              </div>

              <div
                ref={setContentRef(index)}
                className="flex-1 text-center md:text-left will-change-opacity transform-gpu"
              >
                <Typography
                  tag="h4"
                  text={item.title}
                  className="text-center lg:text-left sm:max-w-[70%] lg:max-w-[85%] font-normal text-primary-light mx-auto lg:ml-0 mb-4 leading-tight"
                />
                <Typography
                  tag="p"
                  text={item.description}
                  className="text-center lg:text-left sm:max-w-[70%] lg:max-w-[85%] text-primary-light/80 mx-auto lg:ml-0 mb-6 text-sm leading-relaxed"
                />
                <Button
                  variant="secondaryBtnTextSecondary1"
                  size="md"
                  className="mx-auto lg:ml-0"
                >
                  {item.buttonText}
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
