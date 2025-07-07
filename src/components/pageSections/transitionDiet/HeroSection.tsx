"use client";

import { cn } from "@/lib/utils";
import Typography from "@/components/atoms/typography/Typography";
import { motion } from "framer-motion";

const bannerBaseClass = cn(
  "relative flex  justify-center text-center items-center w-full min-h-[500px] h-[90dvh] sm:min-h-[400px] sm:h-[d50vh] lg:min-h-[520px] sm:h-[70dvh] lg:max-h-[1200px] bg-cover bg-center transition-all"
);

export default function StaticHeroBanner() {
  return (
    <div className={bannerBaseClass} style={{ color: "#ffffff" }}>
      {/* Background Image */}
      <div className="h-full w-full  left-1/2 transform -translate-x-1/2 absolute top-0 z-[-1]">
        <picture className="w-full h-full block">
          <source
            media="(max-width: 575px)"
            srcSet="/images/transition-diet-hero-banner-mob.webp"
          />
          <source
            media="(max-width: 991px)"
            srcSet="/images/transition-diet-hero-banner-mob.webp"
          />
          <source
            media="(min-width: 992px)"
            srcSet="/images/transition-diet-hero-banner-web.webp"
          />
          <img
            src="/images/transition-diet-hero-banner-web.webp"
            alt="Hero Banner"
            className="w-full h-full object-cover object-center"
          />
        </picture>
      </div>

      {/* Content */}
      <div className="w-full mt-auto lg:mt-0 lg:ml-auto">
        <div className="flex flex-col justify-center items-center lg:w-[50%] mb-12 sm:mb-20 lg:mx-auto lg:mb-28">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            viewport={{ once: true }}
           className="flex justify-center w-full"
          >
            <Typography
              tag="h4"
              className="text-center text-primary-dark w-[53%] lg:w-auto"
              text="Switching to Natural Nutrition,"
              role="caption"
              ariaLabel="Switching to Natural Nutrition,"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
             className="flex justify-center w-full"
          >
            <Typography
              tag="h1"
              className="capitalize highlight  text-center text-primary-dark w-[82%] lg:w-auto"
              text="One Step at a Time"
              role="heading"
              ariaLabel="One Step at a Time"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="flex justify-center"
          >
            <Typography
              tag="h6"
              className="text-center  text-secondary-1 mt-2 w-[65%] sm:w-[60%] lg:w-[68%]"
              text="Discover how simple it is to nourish your pet with wholesome, natural meals designed for their health and happiness. "
              role="paragraph"
              ariaLabel="Discover how simple it is to nourish your pet with wholesome, natural meals designed for their health and happiness."
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
}
