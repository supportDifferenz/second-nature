"use client";

import Typography from "@/components/atoms/typography/Typography";
import { Button } from "@/components/ui/button";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";

const reviews = [
  {
    name: "Rohini Hari",
    date: "10.02.2024",
    review:
      "Excellent quality and super fresh! Highly recommend this brand to all pet owners.",
    image: "/path-to-image1.jpg",
  },
  {
    name: "Syam Saran",
    date: "10.02.2024",
    review:
      "The difference in my dog’s digestion and energy has been incredible—this food is a game-changer",
    image: "/path-to-image2.jpg",
  },
  {
    name: "Ahmadeen Ali",
    date: "10.02.2024",
    review:
      "Finally, a company in Qatar that truly cares about pets and their nutrition!",
    image: "/path-to-image3.jpg",
  },
];

export default function GoogleReviews() {
  return (
    <section className="pt-[var(--space-60-180)] pb-[var(--space-100-200)] ">
      <div className="container mx-auto">
        {/* Title */}
        <div className="flex flex-col sm:flex-row text-center sm:text-left items-center justify-between">
          <div>
            <Typography
              tag="h5"
              text="Our Google Reviews"
              className="text-primary-dark"
            />

            {/* Rating Row */}
            <div className="flex flex-col sm:flex-row items-center gap-[var(--space-10-20)]">
              <div className="flex items-center gap-1">
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
              {/* <span className="text-red-500 font-semibold ml-2">
                4.9 rating
              </span>
              <span className="text-gray-600 ml-1">of reviews</span> */}
            </div>
          </div>

          {/* Button */}
          <div className="text-right">
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
          <button className="absolute left-0 z-10 p-2 bg-white border rounded-full shadow">
            <ChevronLeft />
          </button>

          {/* Review Cards */}
          <div className="flex gap-4 overflow-hidden">
            {reviews.map((r, i) => (
              <div
                key={i}
                className="flex flex-col justify-between w-[81.3vw] sm:w-[32vw] lg:w-[25.5vw] h-[94.4vw] sm:h-[30vw] lg:h-[26.04vw] rounded-xl border pt-9 px-[var(--space-24-36)] shadow-sm flex-shrink-0"
              >
                <div>
                  <img
                    src={r.image}
                    alt={r.name}
                    className="w-14 h-14 rounded-full mx-auto mb-2 object-cover"
                  />
                  <h4 className="font-medium">{r.name}</h4>
                  <p className="text-sm text-gray-500">{r.date}</p>

                  <div className="flex justify-center gap-1 mt-2">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-4 h-4 text-yellow-400 fill-yellow-400"
                      />
                    ))}
                  </div>

                  <p className="text-sm text-gray-600 mt-3">{r.review}</p>
                </div>

                <div className="mt-auto">
                  <img
                    src="/images/google-logo.svg"
                    alt="Google"
                    className="w-5 h-5 mx-auto"
                  />
                </div>
              </div>
            ))}
          </div>

          {/* Right Button */}
          <button className="absolute right-0 z-10 p-2 bg-white border rounded-full shadow">
            <ChevronRight />
          </button>
        </div>
      </div>
    </section>
  );
}
