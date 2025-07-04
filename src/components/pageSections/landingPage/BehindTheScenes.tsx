import Typography from "@/components/atoms/typography/Typography";
import { SecondaryInlineTitle } from "@/components/molecules/titleSyles/Title";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { motion } from "framer-motion";

export default function BehindTheScenes() {
  return (
    <motion.section
      initial={{ backgroundColor: "#2A1616" }}
      whileInView={{ backgroundColor: "#944446" }}
      transition={{ duration: 1.2, ease: "easeInOut" }}
      viewport={{ once: true }}>
      <div className="container py-20 2xl:py-25 ">
        <div className="mb-12 text-center lg:text-left">
          <SecondaryInlineTitle
            title="Behind"
            highlight="The Scenes"
            paragraph="Our Science-Backed Process"
            textColor="#EBEDE0"
            textAlign="text-center sm:text-center lg:text-left"
            paragraphColor="#EBEDE0"
          />
        </div>
        <div className=" flex flex-col lg:flex-row lg:items-center gap-(--space-30-60)">
          <div className="flex-1 overflow-hidden">
            <div className="sm:max-w-[70%] lg:max-w-full mx-auto lg:ml-0">
              <Image
                src="/images/landing-behind-scenes-thumb.webp" // Update the path accordingly
                width={300}
                height={200}
                alt="Veterinarian with cat"
                className="rounded-(--space-20-45) !static w-full"
              />
            </div>
          </div>
          <div className=" flex-1 text-center md:text-left">
            <Typography
              tag="h4"
              text="Certified By Veterinary Medical Doctors Based On FEDIAF Guidelines"
              className="text-center lg:text-left sm:max-w-[70%] lg:max-w-[85%] font-normal text-primary-light  mx-auto lg:ml-0 "
            />
            <Button
              variant="secondaryBtnTextSecondary1"
              size="md"
              className="mt-(--space-30-60) mx-auto lg:ml-0"
            >
              Learn More
            </Button>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
