"use client";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import Typography from "@/components/atoms/typography/Typography";

const bannerBaseClass = cn(
  "relative flex text-center items-center w-full min-h-[500px] h-[90dvh] sm:min-h-[400px] sm:h-[d50vh] lg:min-h-[520px] sm:h-[70dvh] lg:max-h-[1200px] bg-cover bg-center transition-all"
);

export default function StaticHeroBanner() {

  return (
    <div className={bannerBaseClass} style={{ color: "#ffffff" }}>
      {/* Background Image */}
      <div className="h-full w-full left-1/2 transform -translate-x-1/2 absolute top-0 z-[-1]">
        <picture className="w-full h-full block">
          <source
            media="(max-width: 575px)"
            srcSet="/images/how-to-feed-banner-mob.webp"
          />
          <source
            media="(max-width: 991px)"
            srcSet="/images/how-to-feed-banner-mob.webp"
          />
          <source
            media="(min-width: 992px)"
            srcSet="/images/how-to-feed-banner.webp"
          />
          <img
            src="/images/how-to-feed-banner.webp"
            alt="Hero Banner"
            className="w-full h-full object-cover object-center"
          />
        </picture>
      </div>

      {/* Content */}
      <div className="w-full mt-auto lg:mt-0 lg:ml-auto">
        <div className="flex flex-col items-center lg:items-start lg:w-[50%] lg:ml-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Typography
              tag="h4"
              className="text-center lg:text-left text-primary-dark w-[90%] lg:w-auto"
              text="Feeding Your Pet"
              role="caption"
              ariaLabel="Feeding Your Pet"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Typography
              tag="h1"
              className="capitalize highlight mb-20 lg:mb-0 text-center lg:text-left text-primary-dark w-[82%] lg:w-auto"
              text="the Natural Way"
              role="heading"
              ariaLabel="the Natural Way"
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
}
