"use client";

import Image from "next/image";
import { useEffect, useState, startTransition } from "react";
import Typography from "@/components/atoms/typography/Typography";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

export default function HeroSection() {

  const router = useRouter();

  const banner = {
    id: "1",
    image: {
      web: "/images/subscription-hero-banner-web.webp",
      tablet: "/images/subscription-hero-banner-web.webp",
      mobile: "/images/subscription-hero-banner-mob.webp",
    },
    titlePart1: "Healthy,",
    titlePart2: "Ready-to-Serve",
    subtitle: "Premium Pet Food Delivered",
    bannerThemeColor: "#00683D",
    buttonText: "Sign Up Today",
    buttonLink: "/location",
    buttonTextColor: "#00683D",
  };

  const [activeImage, setActiveImage] = useState(banner.image.mobile);

  useEffect(() => {
    const updateImage = () => {
      if (typeof window === "undefined") return;
      if (window.innerWidth <= 574) setActiveImage(banner.image.mobile);
      else if (window.innerWidth <= 991) setActiveImage(banner.image.tablet);
      else setActiveImage(banner.image.web);
    };

    updateImage();
    window.addEventListener("resize", updateImage);
    return () => window.removeEventListener("resize", updateImage);
  }, []);

  return (
    <section className="w-full overflow-hidden">
      {/* BG image */}

      {/* Content */}
      <div className="relative w-full min-h-[650px] h-[90dvh] sm:min-h-[400px] lg:min-h-[520px] sm:h-[70dvh] lg:max-h-[1200px] bg-cover bg-center transition-all ">
        <div className="w-full h-full max-w-[var(--max-w)] z-[-1]">
          <Image
            src={activeImage}
            alt="Healthy Ready-to-Serve"
            className="!static !inset-0 object-cover object-center"
            fill
            priority
          />
        </div>
        <div
          className="absolute  top-[60%] sm:top-[10%] lg:top-[45%] left-1/2  sm:left-[90%] lg:left-[80%] transform -translate-x-1/2 -translate-y-1/2 flex flex-col items-center sm:items-start sm:justify-center text-center sm:text-start h-fit sm:mt-[20%] lg:mt-0 w-full lg:w-[50%]"
          style={{ color: banner.bannerThemeColor }}
        >
          <div>
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              viewport={{ once: true }}
            >
              <Typography
                tag="h1"
                className="text-primary-dark capitalize highlight mb-[--space-4-10]"
                text={banner.titlePart1}
                role="heading"
                ariaLabel={banner.titlePart1}
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Typography
                tag="h1"
                className="text-primary-dark capitalize highlight mb-[--space-10-20]"
                text={banner.titlePart2}
                role="heading"
                ariaLabel={banner.titlePart2}
              />
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="flex justify-center sm:justify-start items-center"
          >
            <Typography
              tag="h3"
              className="capitalize block max-w-[80%] sm:max-w-[65%] sm:mt-3 sm:mb-[var(--space-20-40)]"
              text={banner.subtitle}
              role="heading"
              ariaLabel={banner.subtitle}
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <Button
              variant="primaryBtn"
              className="mx-auto mt-2 sm:m-0 "
              size={"md"}
              onClick={() => {
                startTransition(() => {
                  router.push(banner.buttonLink);
                });
              }}
            >
              {banner.buttonText}
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
