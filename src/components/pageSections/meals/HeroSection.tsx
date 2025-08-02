"use client";

import Typography from "@/components/atoms/typography/Typography";
import { useSearchParams } from "next/navigation";

export default function HeroSection() {
  const searchParams = useSearchParams();
  const pet = searchParams.get("pet");
  const selectedPet: "dog" | "cat" = (pet && ["dog", "cat"].includes(pet) ? (pet as "dog" | "cat") : "dog");

  const banner = {
    image: {
      web: selectedPet === "dog" ? "/images/meal-beef-banner.webp" : "/images/MealsCatWeb.webp",
      tablet: selectedPet === "dog" ? "/images/meal-beef-banner-mob.webp" : "/images/MealsCatMob.webp",
      mobile: selectedPet === "dog" ? "/images/meal-beef-banner-mob.webp" : "/images/MealsCatMob.webp",
    },
    title: "Delivering Love & Nutrition,",
    halfTitle: "One Bowl at a Time",
    paragraph: "From our kitchen to your doorstep, nutrition made simple",
    paragraphColor: "#ffffff",
    bannerThemeColor: "#ffffff",
  };

  return (
    <section className="relative w-full overflow-hidden">
      <div className="relative text-center" style={{ color: banner.bannerThemeColor }}>
        {/* Background Image */}
        <div className="absolute top-0 left-0 w-full h-full z-[-1]">
          <picture>
            <source media="(max-width: 574px)" srcSet={banner.image.mobile} type="image/webp" />
            <source media="(max-width: 991px)" srcSet={banner.image.tablet} type="image/webp" />
            <img
              src={banner.image.web}
              alt="Banner"
              className="w-full h-full object-cover object-center"
            />
          </picture>
        </div>

        {/* Content */}
        <div className="relative flex flex-col items-center justify-center w-full min-h-[500px] h-[90dvh] sm:min-h-[400px] sm:h-[d50vh] lg:min-h-[520px] sm:h-[70dvh] lg:max-h-[1200px] container">
          <div className="lg:w-[55%]">
            <Typography
              tag="h1"
              className="capitalize highlight mb-[var(--space-10-20)]"
              text={banner.title}
              role="heading"
              ariaLabel={banner.title}
              ariaLabelledBy="title"
            >
              <span className="h2 block capitalize normalize sm:max-w-[50%] lg:max-w-[65%] mx-auto">
                {banner.halfTitle}
              </span>
            </Typography>

            <Typography
              tag="h6"
              text={banner.paragraph}
              className="first-letter:capitalize mb-[var(--space-20-30)] sm:max-w-[45%] lg:max-w-[65%] mx-auto"
              style={{ color: banner.paragraphColor }}
              role="paragraph"
              ariaLabel={banner.paragraph}
              ariaLabelledBy="sub paragraph"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
