"use client";

import { useEffect, useState } from "react";
import Typography from "@/components/atoms/typography/Typography";
import { Button } from "@/components/ui/button";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";

const reviews = [
  {
    name: "Rohini Hari",
    date: "10.02.2024",
    review:
      "Excellent quality and super fresh! Highly recommend this brand to all pet owners.",
    image: "/images/rohini-google.svg",
  },
  {
    name: "Syam Saran",
    date: "10.02.2024",
    review:
      "The difference in my dog's digestion and energy has been incredible—this food is a game-changer",
    image: "/images/syam-google.svg",
  },
  {
    name: "Ahmadeen Ali",
    date: "10.02.2024",
    review:
      "Finally, a company in Qatar that truly cares about pets and their nutrition!",
    image: "/images/ali-google.svg",
  },
  {
    name: "Sarah Mitchell",
    date: "15.02.2024",
    review:
      "My cat has never been happier! The ingredients are top-notch and you can really tell the difference.",
    image: "/images/ali-google.svg",
  },
  {
    name: "Mohammed Hassan",
    date: "18.02.2024",
    review:
      "Outstanding customer service and fast delivery. My pets love every meal!",
    image: "/images/ali-google.svg",
  },
  {
    name: "Lisa Thompson",
    date: "22.02.2024",
    review:
      "Been using this for 3 months now. My dog's coat is shinier and he has more energy than ever.",
    image: "/images/ali-google.svg",
  },
  {
    name: "Ahmad Khalil",
    date: "25.02.2024",
    review:
      "Perfect portion sizes and my picky eater finally found something he loves!",
    image: "/images/ali-google.svg",
  },
  {
    name: "Jennifer Park",
    date: "28.02.2024",
    review:
      "The quality is consistent and my vet even commented on how healthy my pets look.",
    image: "/images/ali-google.svg",
  },
];

export default function GoogleReviews() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleCards, setVisibleCards] = useState(3);
  const [isClient, setIsClient] = useState(false);
  
  // Calculate how many cards are visible at once
  const getVisibleCards = () => {
    if (typeof window !== 'undefined') {
      if (window.innerWidth >= 1024) return 3; // lg screens show ~3 cards
      if (window.innerWidth >= 640) return 2;  // sm screens show ~2 cards
      return 1; // mobile shows 1 card
    }
    return 3;
  };

  useEffect(() => {
    setIsClient(true);
    setVisibleCards(getVisibleCards());
    
    const handleResize = () => setVisibleCards(getVisibleCards());
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

    // Update visible cards on window resize
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const handleResize = () => setVisibleCards(getVisibleCards());
      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
    }
  });

  const maxIndex = Math.max(0, reviews.length - visibleCards);

  const goToPrevious = () => {
    setCurrentIndex(prev => Math.max(0, prev - 1));
  };

  const goToNext = () => {
    setCurrentIndex(prev => Math.min(maxIndex, prev + 1));
  };

  const getTransformStyle = () => {
    if (!isClient) return {};
    
    if (window.innerWidth >= 1024) {
      return { transform: `translateX(calc(-${currentIndex} * (25.5vw + 1rem)))` };
    } else if (window.innerWidth >= 640) {
      return { transform: `translateX(calc(-${currentIndex} * (32vw + 1rem)))` };
    } else {
      return { transform: `translateX(calc(-${currentIndex} * (81.3vw + 1rem)))` };
    }
  };

  return (
    <section className="pt-[var(--space-60-180)] pb-[var(--space-100-200)] ">
      <div className="container mx-auto">
        {/* Title */}
        <div className="flex flex-col sm:flex-row text-center sm:text-left items-center gap-5 sm:gap-0 sm:justify-between mb-[var(--space-44-66)]">
          <div>
            <Typography
              tag="h5"
              text="Our Google Reviews"
              className="text-primary-dark"
            />

            {/* Rating Row */}
            <div className="flex flex-col sm:flex-row items-center gap-[var(--space-10-20)]">
              <div className="flex items-center gap-1 mt-2 lg:mt-3">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 text-yellow-400 fill-yellow-400"
                  />
                ))}
              </div>
              <Typography
                tag="h6"
                text="4.9 rating "
                className="text-secondary-1"
              >
                <Typography
                  tag="span"
                  text="of reviews"
                  className="text-text-color"
                />
              </Typography>
            </div>
          </div>

          {/* Button */}
          <div className="">
            <Button
              size={"small"}
              variant={"primaryBtn"}
              className="w-fit text-white"
            >
              Write a Review
            </Button>
          </div>
        </div>

        {/* Carousel */}
        <div className="relative flex items-center justify-center">
          {/* Left Button */}
          <button 
            className="absolute left-[-1%] z-10 p-1 bg-white border rounded-full shadow disabled:opacity-50 disabled:cursor-not-allowed"
            onClick={goToPrevious}
            disabled={currentIndex === 0}
          >
            <ChevronLeft />
          </button>

          {/* Review Cards */}
          <div className="flex gap-4 overflow-hidden">
            <div 
              className="flex gap-[var(--space-20-25)] transition-transform duration-300 ease-in-out"
            //   style={{ 
            //     transform: window?.innerWidth >= 1024 
            //       ? `translateX(calc(-${currentIndex} * (25.5vw + 1rem)))`
            //       : window?.innerWidth >= 640 
            //         ? `translateX(calc(-${currentIndex} * (32vw + 1rem)))`
            //         : `translateX(calc(-${currentIndex} * (81.3vw + 1rem)))`,
            //   }}
            style={getTransformStyle()}
            >
              {reviews.map((r, i) => (
                <div
                  key={i}
                  className="flex flex-col justify-between text-center w-[81.3vw] sm:w-[32vw] lg:w-[25.5vw] min-h-[94.4vw] sm:min-h-[48vw] lg:min-h-[26.04vw] rounded-xl border border-[#E6E6E6] pt-9 px-[var(--space-24-36)] pb-[var(--space-34-38)] shadow-sm flex-shrink-0"
                >
                  <div>
                    <Image
                      src={r.image}
                      alt={r.name}
                      width={100}
                      height={100}
                      className="w-[var(--space-80-100)] h-[var(--space-80-100)] rounded-full mx-auto mb-2 object-cover"
                    />
                    <Typography tag="h5" text={r.name} className="text-text-color "/>
                    <Typography tag="p" text={r.date} className="text-[#ABABAB] "/>

                    <div className="flex justify-center gap-1 mt-[var(--space-20-25)]">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className="w-[var(--space-20-25)]  text-yellow-400 fill-yellow-400"
                        />
                      ))}
                    </div>

                    <Typography tag="p" text={r.review} className="text-secondary-1 mt-3"/>
                  </div>

                  <div className="mt-1 lg:mt-6">
                    <Image
                      src="/images/google-logo.svg"
                      alt="Google"
                      width={100}
                      height={100}
                      className="w-10 h-10 mx-auto"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Button */}
          <button 
            className="absolute right-[-1%] z-10 p-1 bg-white border rounded-full shadow disabled:opacity-50 disabled:cursor-not-allowed"
            onClick={goToNext}
            disabled={currentIndex >= maxIndex}
          >
            <ChevronRight />
          </button>
        </div>
      </div>
    </section>
  );
}