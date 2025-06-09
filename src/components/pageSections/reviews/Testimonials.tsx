import Typography from "@/components/atoms/typography/Typography";
import Image from "next/image";
import React from "react";

export default function Testimonials() {
  return (
    <div 
    className="flex flex-col gap-[var(--space-40-90)] max-w-[90.65vw] lg:max-w-[77.6vw] mx-auto mt-[var(--space-52-86)] pb-[var(--space-80-170)]">
      <div className="flex flex-col items-center">
        <Typography
          tag="h4"
          text="Gradual Change"
          className="text-primary-dark font-normal"
        />
        <Typography
          tag="h2"
          text="for a Happier, Healthier Pet"
          className="text-primary-dark highlight text-center capitalize"
        />
      </div>
      <div className="flex flex-col gap-[var(--space-50-78)]">
        <div className="flex flex-col sm:flex-row  gap-[var(--space-20-60)] ">
          <div className="w-full sm:w-[60%]  relative">
            <Image
              src="/images/testimony-1.webp"
              fill
              alt="Dog image"
              className="!static w-full h-full object-cover object-center"
            />
          </div>
          <div className="flex flex-col sm:w-[30%] justify-center">
            <Typography
              tag="h5"
              text="Switching to Second Nature's natural pet food was the best decision for my cat. Her coat is shinier, and her energy levels are amazing!"
              className="text-center sm:text-start text-secondary-1 mb-[var(--space-10-20)]"
            />
            <Typography
              tag="h6"
              text="Sarah . A"
              className="text-primary-dark text-center sm:text-start capitalize"
            />
            <Typography tag="p" text="Happy cat mom in Doha" className="text-center sm:text-start" />
          </div>
        </div>

        <div className="flex flex-col sm:flex-row  gap-[var(--space-20-60)] ">
          <div className="order-2 sm:order-1 flex flex-col sm:w-[30%] justify-center">
            <Typography
              tag="h5"
              text="Switching to Second Nature's natural pet food was the best decision for my cat. Her coat is shinier, and her energy levels are amazing!"
              className="text-center sm:text-start text-secondary-1 mb-[var(--space-10-20)]"
            />
            <Typography
              tag="h6"
              text="Sarah . A"
              className="text-center sm:text-start text-primary-dark  capitalize"
            />
            <Typography tag="p" text="Happy cat mom in Doha" className="text-center sm:text-start" />
          </div>
          <div className="order-1 sm:order-2 w-full sm:w-[60%]  relative">
            <Image
              src="/images/testimony-1.webp"
              fill
              alt="Dog image"
              className="!static w-full h-full object-cover object-center"
            />
          </div>
        </div>
        <div className="flex flex-col sm:flex-row  gap-[var(--space-20-60)] ">
          <div className="w-full sm:w-[60%]  relative">
            <Image
              src="/images/testimony-1.webp"
              fill
              alt="Dog image"
              className="!static w-full h-full object-cover object-center"
            />
          </div>
          <div className="flex flex-col sm:w-[30%] justify-center">
            <Typography
              tag="h5"
              text="Switching to Second Nature's natural pet food was the best decision for my cat. Her coat is shinier, and her energy levels are amazing!"
              className="text-center sm:text-start text-secondary-1 mb-[var(--space-10-20)]"
            />
            <Typography
              tag="h6"
              text="Sarah . A"
              className="text-center sm:text-start text-primary-dark  capitalize"
            />
            <Typography tag="p" text="Happy cat mom in Doha" className="text-center sm:text-start" />
          </div>
        </div>
      </div>
    </div>
  );
}
