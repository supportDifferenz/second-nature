"use client";
import React from "react";
import Image from "next/image";
import { SecondaryBlockTitle } from "@/components/molecules/titleSyles/Title";
import { Button } from "@/components/ui/button";
import useEmblaCarousel from "embla-carousel-react";
import Typography from "@/components/atoms/typography/Typography";

const testimonials = [
  {
    name: "Hira",
    text: "Shopping at Second Nature is always fun. Today we celebrated an 8 yr old birthday with treats and a special cupcake. Thank you Kathi she is advised Second nature pet meals !",
    image: "/images/testimonial-thumb-1.webp", // Replace with actual image URL
  },
  {
    name: "Barbra",
    text: "My dog Louis is thriving after switching to Second Nature. We will never go back to dry food.",
    image: "/images/testimonial-thumb-2.webp", // Replace with actual image URL
  },
  {
    name: "Hiksya",
    text: "The store is wonderful. The staff is super friendly. I love the holistic options for my dogs and cat. My only regret is I just heard about the store a few months ago! Please visit and support a great local business!",
    image: "/images/testimonial-thumb-3.webp", // Replace with actual image URL
  },
  {
    name: "Hira",
    text: "Shopping at Second Nature is always fun. Today we celebrated an 8 yr old birthday with treats and a special cupcake. Thank you Kathi she is advised Second nature pet meals !",
    image: "/images/testimonial-thumb-1.webp", // Replace with actual image URL
  },
  {
    name: "Barbra",
    text: "My dog Louis is thriving after switching to Second Nature. We will never go back to dry food.",
    image: "/images/testimonial-thumb-2.webp", // Replace with actual image URL
  },
  {
    name: "Hiksya",
    text: "The store is wonderful. The staff is super friendly. I love the holistic options for my dogs and cat. My only regret is I just heard about the store a few months ago! Please visit and support a great local business!",
    image: "/images/testimonial-thumb-3.webp", // Replace with actual image URL
  },
  // Add more testimonials as needed
];
export default function Testimonial() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "start",
    slidesToScroll: 1, // Mobile
  });

  const scrollPrev = () => emblaApi && emblaApi.scrollPrev();
  const scrollNext = () => emblaApi && emblaApi.scrollNext();
  return (
    <section>
      <div className="container right flex flex-col lg:flex-row gap-(--space-47-111)">
        <div className="flex-1  flex flex-col">
          <div>
            <SecondaryBlockTitle
              title="What"
              highlight="Customers Say"
              textColor="#00683D"
              textAlign="text-center lg:text-left"
              className="ml-0 mb-(--space-8-30) "
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
          </div>
          <div className="lg:ml-[-20%] xl:ml-[-34%] mt-auto hidden lg:block">
            <Image
              src="/images/whats-customers-says-vector.svg"
              alt="What Customers Say"
              fill
              className="!static w-full"
            />
          </div>
        </div>
        <div className="flex-1/3  relative overflow-hidden ">
          <div className="overflow-hidden w-full" ref={emblaRef}>
            <div className="flex">
              {testimonials.map((item, index) => (
                <div
                  key={index}
                  className="flex-none w-[80%] sm:w-[50%] md:w-[43.48%] px-(--space-10-20)"
                >
                  <div>
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      className="w-full !static object-cover rounded-2xl mb-5 "
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
              ))}
            </div>
          </div>
          {/* Navigation Controls */}
          <div className="flex justify-center lg:justify-start gap-(--space-20-30) mt-(--space-30-60)">
            <Image
              src="/icons/secondary-1-arrow-prev.svg"
              alt="Preview"
              fill
              className="!static !w-(--space-50-67) contain cursor-pointer"
              onClick={scrollPrev}
            />

            <Image
              src="/icons/secondary-1-arrow-next.svg"
              alt="Preview"
              fill
              className="!static !w-(--space-50-67) contain cursor-pointer"
              onClick={scrollNext}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
