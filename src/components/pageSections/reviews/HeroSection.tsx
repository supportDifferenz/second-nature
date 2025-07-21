"use client";
import { cn } from "@/lib/utils";
import Typography from "@/components/atoms/typography/Typography";
import { motion } from "framer-motion";

const bannerBaseClass = cn(
  "relative flex  text-center items-center w-full min-h-[500px] h-[90dvh] sm:min-h-[400px] sm:h-[d50vh] lg:min-h-[520px] sm:h-[70dvh] lg:max-h-[1200px] bg-cover bg-center transition-all"
);

export default function StaticHeroBanner() {
  return (
    <div className={bannerBaseClass} style={{ color: "#ffffff" }}>
      {/* Background Image */}
      <div className="h-full w-full  left-1/2 transform -translate-x-1/2 absolute top-0 z-[-1]">
        <picture className="w-full h-full block">
          <source
            media="(max-width: 575px)"
            srcSet="/images/review-banner-mob.webp"
          />
          <source
            media="(max-width: 991px)"
            srcSet="/images/review-banner-mob.webp"
          />
          <source
            media="(min-width: 992px)"
            srcSet="/images/review-banner-web.webp"
          />
          <img
            src="/images/review-banner-web.webp"
            alt="Hero Banner"
            className="w-full h-full object-cover object-center"
          />
        </picture>
      </div>

      {/* Content */}
      <div className="w-full mt-auto lg:mt-0 lg:ml-auto">
        <div className="flex flex-col items-center lg:items-start lg:w-[50%] mb-20 lg:mb-0 lg:ml-auto">
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            viewport={{ once: true }}
          >
            <Typography
              tag="h4"
              className="text-center lg:text-left text-white"
              text="What Pet Parents"
              role="caption"
              ariaLabel="What Pet Parents"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Typography
              tag="h1"
              className="capitalize highlight  text-center lg:text-left text-white"
              text="Are Saying"
              role="heading"
              ariaLabel="Are Saying"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="flex justify-center lg:justify-start"
          >
            <Typography
              tag="h6"
              className="text-center lg:text-left text-white !font-normal mt-4 sm:mt-2 w-[77%] sm:w-[60%] lg:w-[68%]"
              text="Don’t just take our word for it—hear from our happy customers who’ve seen the difference natural nutrition makes for their pets."
              role="paragraph"
              ariaLabel="Don’t just take our word for it—hear from our happy customers who’ve seen the difference natural nutrition makes for their pets."
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
}
