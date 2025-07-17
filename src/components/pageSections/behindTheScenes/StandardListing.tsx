import Typography from "@/components/atoms/typography/Typography";
import Image from "next/image";
import React from "react";
import { motion ,MotionProps } from "framer-motion";

interface StandardListingProps {
  image: string;
  title: string;
  description: string;
  motionProps?: MotionProps; // Add this to receive animation props
}

export default function StandardListing({
  image,
  title,
  description,
  motionProps,
}: StandardListingProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }} // default fallback
      {...motionProps}
      className="flex flex-col items-center w-[var(--space-310-400)] lg:w-[25vw] lg:max-w-[400px] gap-5 sm:gap-7"
    >
      <div className="flex flex-col w-fit items-center border-b border-primary">
        <div className="relative w-[var(--space-66-80)] h-[var(--space-66-80)]">
          <Image
            src={image}
            alt={title}
            className="!static inset-0 !h-full object-cover object-center"
            fill
          />
        </div>
        <Typography
          tag="h6"
          text={title}
          className="uppercase whitespace-nowrap px-2.5 sm:px-5 py-2.5"
        />
      </div>
      <Typography tag="text" text={description} className="text-center" />
    </motion.div>
  );
}
