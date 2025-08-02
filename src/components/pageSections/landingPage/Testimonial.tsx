"use client";
import React, { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import { SecondaryBlockTitle } from "@/components/molecules/titleSyles/Title";
import { Button } from "@/components/ui/button";
import useEmblaCarousel from "embla-carousel-react";
import Typography from "@/components/atoms/typography/Typography";
// import Autoplay from "embla-carousel-autoplay";

const testimonials = [
  {
    name: "Hira",
    text: "Shopping at Second Nature is always fun. Today we celebrated an 8 yr old birthday with treats and a special cupcake. Thank you Kathi she is advised Second nature pet meals !",
    image: "/images/testimonial-thumb-1.webp",
  },
  {
    name: "Barbra",
    text: "My dog Louis is thriving after switching to Second Nature. We will never go back to dry food.",
    image: "/images/testimonial-thumb-2.webp",
  },
  {
    name: "Hiksya",
    text: "The store is wonderful. The staff is super friendly. I love the holistic options for my dogs and cat. My only regret is I just heard about the store a few months ago! Please visit and support a great local business!",
    image: "/images/testimonial-thumb-3.webp",
  },
  {
    name: "Hira",
    text: "Shopping at Second Nature is always fun. Today we celebrated an 8 yr old birthday with treats and a special cupcake. Thank you Kathi she is advised Second nature pet meals !",
    image: "/images/testimonial-thumb-1.webp",
  },
  {
    name: "Barbra",
    text: "My dog Louis is thriving after switching to Second Nature. We will never go back to dry food.",
    image: "/images/testimonial-thumb-2.webp",
  },
  {
    name: "Hiksya",
    text: "The store is wonderful. The staff is super friendly. I love the holistic options for my dogs and cat. My only regret is I just heard about the store a few months ago! Please visit and support a great local business!",
    image: "/images/testimonial-thumb-3.webp",
  },
];

export default function Testimonial() {
  const [, setAutoplayEnabled] = useState(true);
  
  // Conditionally create autoplay plugin
  // const plugins = autoplayEnabled ? [Autoplay({ 
  //   delay: 4000, 
  //   stopOnInteraction: true,
  //   stopOnMouseEnter: true
  // })] : [];

  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      loop: true,
      align: "start",
      slidesToScroll: 1,
      skipSnaps: false,
      dragFree: false,
      containScroll: "trimSnaps",
    },
  );

  const [selectedIndex, setSelectedIndex] = useState(0);
  const [, setIsTransitioning] = useState(false);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  const onSettle = useCallback(() => {
    setIsTransitioning(false);
  }, []);

  const onInit = useCallback(() => {
    setIsTransitioning(false);
  }, []);

  useEffect(() => {
    if (!emblaApi) return;
    
    emblaApi.on("select", onSelect);
    emblaApi.on("settle", onSettle);
    emblaApi.on("init", onInit);
    
    onSelect();
    
    return () => {
      emblaApi.off("select", onSelect);
      emblaApi.off("settle", onSettle);
      emblaApi.off("init", onInit);
    };
  }, [emblaApi, onSelect, onSettle, onInit]);

  const scrollPrev = () => {
    if (emblaApi) {
      setIsTransitioning(true);
      // Disable autoplay permanently when user manually navigates
      setAutoplayEnabled(false);
      emblaApi.scrollPrev();
    }
  };

  const scrollNext = () => {
    if (emblaApi) {
      setIsTransitioning(true);
      // Disable autoplay permanently when user manually navigates
      setAutoplayEnabled(false);
      emblaApi.scrollNext();
    }
  };

  return (
    <section>
      <div className="container right flex flex-col lg:flex-row gap-(--space-47-111)">
        {/* Left section */}
        <div className="flex-1 flex flex-col">
          <SecondaryBlockTitle
            title="What"
            highlight="Customers Say"
            textColor="#00683D"
            textAlign="text-center lg:text-left"
            className="ml-0 mb-(--space-8-30)"
          />
          <Button variant="linkSecondary" className="mx-auto lg:-ml-0">
            More Reviews
            <Image
              src="/icons/secondary-1-chevron-right.svg"
              alt="icon"
              fill
              className="!static"
            />
          </Button>

          <div className="lg:ml-[-20%] xl:ml-[-34%] mt-auto hidden lg:block">
            <Image
              src="/images/whats-customers-says-vector.webp"
              alt="What Customers Say"
              fill
              className="!static w-full"
            />
          </div>
        </div>

        {/* Right Carousel */}
        <div className="flex-1/3 relative overflow-hidden">
          <div className="overflow-hidden w-full" ref={emblaRef}>
            <div className="flex">
              {testimonials.map((item, index) => {
                if (!emblaApi) return null;

                const snapList = emblaApi.scrollSnapList();
                const totalSlides = snapList.length;
                const activeIndex = selectedIndex;

                // Calculate position relative to active slide
                const distance = (() => {
                  const diff = index - activeIndex;
                  const altDiff = diff > 0
                    ? diff - totalSlides
                    : diff + totalSlides;
                  return Math.abs(diff) < Math.abs(altDiff) ? diff : altDiff;
                })();

                // Enhanced 3D effect calculations
                const isActive = distance === 0;
                const rotateY = isActive ? "0deg" : distance > 0 ? "-25deg" : "25deg";
                const translateZ = isActive ? "0px" : "-30px";
                const opacity = isActive ? 1 : 0.7;
                const zIndex = isActive ? 10 : Math.max(5 - Math.abs(distance), 1);

                return (
                  <div
                    key={`${index}-${item.name}`}
                    className="flex-none w-[80%] sm:w-[50%] md:w-[43.48%] px-(--space-10-20)"
                    style={{
                      perspective: "1200px",
                      transformStyle: "preserve-3d",
                    }}
                  >
                    <div
                      className=" overflow-hidden transition-all duration-700 ease-out"
                      style={{
                        transform: `rotateY(${rotateY}) translateZ(${translateZ})`,
                        opacity: opacity,
                        zIndex: zIndex,
                        transformOrigin: "center center",
                        backfaceVisibility: "hidden",
                        willChange: "transform, opacity",
                      }}
                    >
                      <div className="relative">
                        <Image
                          src={item.image}
                          alt={item.name}
                          fill
                          className="!static object-cover w-full h-auto rounded-2xl mb-5"
                        />
                        <Typography
                          tag="h5"
                          text={item.name}
                          className="text-primary-dark mb-2.5"
                        />
                        <Typography
                          tag="p"
                          text={item.text}
                          className="line-clamp-3"
                        />
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Navigation Arrows */}
          <div className="flex justify-center lg:justify-start gap-(--space-20-30) mt-(--space-30-60) lg:ml-3">
            <Image
              src="/icons/secondary-1-arrow-prev.svg"
              alt="Prev"
              fill
              className="!static !h-[38px] !w-[38px] contain cursor-pointer rounded-full hover:scale-105 transition"
              onClick={scrollPrev}
            />

            
            <Image
              src="/icons/secondary-1-arrow-next.svg"
              alt="Next"
              fill
              className="!static !h-[38px] !w-[38px] contain cursor-pointer rounded-full hover:scale-105 transition"
              onClick={scrollNext}
            />
          </div>
        </div>
      </div>
    </section>
  );
}