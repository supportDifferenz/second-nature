"use client";
import Typography from "@/components/atoms/typography/Typography";
import { motion } from "framer-motion";
import Image from "next/image";

const features = [
  { icon: "/icons/marquee-1.svg", text: "Human-Grade Ingredients" },
  { icon: "/icons/marquee-2.svg", text: "Rich in Essential Nutrients" },
  { icon: "/icons/marquee-3.svg", text: "Gently Cooked" },
  { icon: "/icons/marquee-4.svg", text: "Tailored Nutrition Plans" },
  { icon: "/icons/marquee-5.svg", text: "Backed by Science" },
  { icon: "/icons/marquee-6.svg", text: "Allergy-Friendly Options" },
  { icon: "/icons/marquee-7.svg", text: "Convenient Delivery" },
  { icon: "/icons/marquee-8.svg", text: "Boosts Energy and Vitality" },
];

const Marquee = ({ speed = 23 }) => {
  return (
    <div className="container-lg ">
      <div className="relative overflow-hidden bg-white border border-[#C7FCE3] w-full  rounded-full shadow-2xl p-(--space-18-32)">
        <div className="flex w-max">
          {/* Duplicated content to create seamless effect */}
          {[...Array(2)].map((_, i) => (
            <motion.div
              key={i}
              className="flex items-center  "
              initial={{ x: "0%" }}
              animate={{ x: "-100%" }}
              transition={{ repeat: Infinity, ease: "linear", duration: speed }}
            >
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="flex lg:justify-center items-center gap-(--space-8-13) px-(--space-15-30) relative after:content-[''] after:absolute after:w-[1px] after:h-[80%] after:bg-[#79D2A7] after:right-0 after:top-1/2 after:transform after:-translate-y-1/2 "
                >
                  <div className="w-(--space-34-42) h-(--space-34-42) flex items-center justify-center">
                    <Image
                      src={feature.icon}
                      alt="marquee-icons"
                      fill
                      className="!static w-full !h-full object-contain"
                    />
                  </div>
                  <Typography
                    tag="span"
                    className="text-primary-dark font-bold max-w-[53%] lg:max-w-[51%]"
                    text={feature.text}
                    role="caption"
                    ariaLabel={feature.text}
                    ariaLabelledBy="marquee title"
                  />
                </div>
              ))}
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Marquee;
