"use client";
import { Separator } from "@/components/ui/separator";
import { motion } from "framer-motion";
import Image from "next/image";

const Marquee = ({ speed = 50 }) => {
  return (
    <div className="container-lg">
      <div className="relative overflow-hidden bg-white border border-[#C7FCE3] w-full rounded-full shadow-2xl p-(--space-18-32)">
        <div className="flex w-max">
          {[...Array(2)].map((_, i) => (
            <motion.div
              key={i}
              className="flex items-center"
              initial={{ x: "0%" }}
              animate={{ x: "-100%" }}
              transition={{ repeat: Infinity, ease: "linear", duration: speed }}
            >
              <div className="flex lg:justify-center items-center gap-(--space-8-13) relative">
                <div className="w-(--space-34-42) h-(--space-34-42) flex items-center justify-center">
                  <Image src="/icons/marquee-1.svg" alt="icon" fill className="!static w-full !h-full object-contain" />
                </div>
                <span className="text-primary-dark font-bold">Human-Grade <br /> Ingredients</span>
              </div>
              <Separator orientation="vertical" className="bg-[#79D2A7] w-[1px] shrink-0 ml-[15px] mr-[14px] sm:mx-[30px]  sm:mr-[29px] max-h-[32px]" />

              <div className="flex lg:justify-center items-center gap-(--space-8-13) relative">
                <div className="w-(--space-34-42) h-(--space-34-42) flex items-center justify-center">
                  <Image src="/icons/marquee-2.svg" alt="icon" fill className="!static w-full !h-full object-contain" />
                </div>
                <span className="text-primary-dark font-bold">Rich in Essential <br /> Nutrients</span>
              </div>
              <Separator orientation="vertical" className="bg-[#79D2A7] w-[1px] shrink-0 ml-[15px] mr-[14px] sm:mx-[30px]  sm:mr-[29px] max-h-[32px]" />

              <div className="flex lg:justify-center items-center gap-(--space-8-13) relative">
                <div className="w-(--space-34-42) h-(--space-34-42) flex items-center justify-center">
                  <Image src="/icons/marquee-3.svg" alt="icon" fill className="!static w-full !h-full object-contain" />
                </div>
                <span className="text-primary-dark font-bold">Gently <br /> Cooked</span>
              </div>
              <Separator orientation="vertical" className="bg-[#79D2A7] w-[1px] shrink-0 ml-[15px] mr-[14px] sm:mx-[30px]  sm:mr-[29px] max-h-[32px]" />

              <div className="flex lg:justify-center items-center gap-(--space-8-13) relative">
                <div className="w-(--space-34-42) h-(--space-34-42) flex items-center justify-center">
                  <Image src="/icons/marquee-4.svg" alt="icon" fill className="!static w-full !h-full object-contain" />
                </div>
                <span className="text-primary-dark font-bold">Tailored <br /> Nutrition Plans</span>
              </div>
              <Separator orientation="vertical" className="bg-[#79D2A7] w-[1px] shrink-0 ml-[15px] mr-[14px] sm:mx-[30px]  sm:mr-[29px] max-h-[32px]" />

              <div className="flex lg:justify-center items-center gap-(--space-8-13) relative">
                <div className="w-(--space-34-42) h-(--space-34-42) flex items-center justify-center">
                  <Image src="/icons/marquee-5.svg" alt="icon" fill className="!static w-full !h-full object-contain" />
                </div>
                <span className="text-primary-dark font-bold">Backed <br /> by Science</span>
              </div>
              <Separator orientation="vertical" className="bg-[#79D2A7] w-[1px] shrink-0 ml-[15px] mr-[14px] sm:mx-[30px]  sm:mr-[29px] max-h-[32px]" />

              <div className="flex lg:justify-center items-center gap-(--space-8-13) relative">
                <div className="w-(--space-34-42) h-(--space-34-42) flex items-center justify-center">
                  <Image src="/icons/marquee-6.svg" alt="icon" fill className="!static w-full !h-full object-contain" />
                </div>
                <span className="text-primary-dark font-bold">Allergy-Friendly <br /> Options</span>
              </div>
              <Separator orientation="vertical" className="bg-[#79D2A7] w-[1px] shrink-0 ml-[15px] mr-[14px] sm:mx-[30px]  sm:mr-[29px] max-h-[32px]" />

              <div className="flex lg:justify-center items-center gap-(--space-8-13) relative">
                <div className="w-(--space-34-42) h-(--space-34-42) flex items-center justify-center">
                  <Image src="/icons/marquee-7.svg" alt="icon" fill className="!static w-full !h-full object-contain" />
                </div>
                <span className="text-primary-dark font-bold">Convenient <br /> Delivery</span>
              </div>
              <Separator orientation="vertical" className="bg-[#79D2A7] w-[1px] shrink-0 ml-[15px] mr-[14px] sm:mx-[30px]  sm:mr-[29px] max-h-[32px]" />

              <div className="flex lg:justify-center items-center gap-(--space-8-13) relative">
                <div className="w-(--space-34-42) h-(--space-34-42) flex items-center justify-center">
                  <Image src="/icons/marquee-8.svg" alt="icon" fill className="!static w-full !h-full object-contain" />
                </div>
                <span className="text-primary-dark font-bold">Boosts Energy <br /> and Vitality</span>
              </div>
              <Separator orientation="vertical" className="bg-[#79D2A7] w-[1px] shrink-0 ml-[15px] mr-[14px] sm:mx-[30px]  sm:mr-[29px] max-h-[32px]" />

            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Marquee;
