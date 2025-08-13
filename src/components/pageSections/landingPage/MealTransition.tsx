import Image from "next/image";
import { Button } from "@/components/ui/button";
import Typography from "@/components/atoms/typography/Typography";
import { SecondaryInlineTitle } from "@/components/molecules/titleSyles/Title";
import { motion } from "framer-motion";
import { startTransition } from "react";
import { useRouter } from "next/navigation";

export default function MealTransition() {
  const router = useRouter();

  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <div className="container  flex flex-col lg:flex-row  gap-(--space-33-42)">
        <SecondaryInlineTitle
          highlight="Transition"
          title="Meal"
          textAlign="text-center sm:text-center lg:text-left"
          textColor="#00683D"
          className="lg:hidden text-white"
        />
        {/* Image Section */}
        <div className="lg:flex-1 sm:h-150 lg:h-auto lg:min-h-full ">
          <Image
            src="/images/landing-meal-treat-badge.webp"
            alt="Woman feeding a cat"
            fill
            className="!static !h-full rounded-(--space-40-60) object-cover object-center"
          />
        </div>

        {/* Content Section */}
        <div className="flex-1 flex flex-col">
          <div className="lg:flex-1 ">
            <SecondaryInlineTitle
              highlight="Transition"
              title="Meal"
              textAlign="text-center sm:text-center lg:text-left"
              textColor="#00683D"
              className="hidden lg:block &>text-white"
            />

            <Typography
              tag="h5"
              text="Transitioning To Second Nature Is Simple:"
              className="mb-6 mt-4"
            />

            <ul>
              <li className="flex items-center gap-(--space-16-24) ">
                <span className="h4 text-center text-secondary-2 font-bold py-(--space-13-19) border-b border-primary px-1.5 ">
                  1
                </span>
                <span className="h6">
                  Gradually reduce your pet’s current diet while introducing our
                  fresh.
                </span>
              </li>
              <li className="flex items-center gap-(--space-16-24) ">
                <span className="h4 text-center text-secondary-2 font-bold py-(--space-13-19) border-b border-primary px-1.5 ">
                  2
                </span>
                <span className="h6">
                  Wholesome meals over a 10-day period. You’ll soon notice
                  increased energy.
                </span>
              </li>
              <li className="flex items-center gap-(--space-16-24) ">
                <span className="h4 text-center text-secondary-2 font-bold py-(--space-13-19) border-primary px-1.5 ">
                  3
                </span>
                <span className="h6">
                  Improved digestion, and a shinier, healthier coat.
                </span>
              </li>
            </ul>
          </div>
          <div className="mt-6 lg:mt-auto sm:p-10 py-5 px-[5%] sm:py-8 bg-primary-light rounded-(--space-30-60)">
            <Typography
              tag="h5"
              text="Gradually Introduce"
              className="text-primary-dark mb-6 text-center sm:text-left"
            >
              <br />
              <Typography
                tag="span"
                text="Our Fresh Meals For Lasting Benefits."
                className=""
              />
            </Typography>
            <Button
              variant="primaryBtn"
              size={"md"}
              onClick={() => {
                startTransition(() => {
                  router.push("/transition-diet");
                });
              }}
              className="mt-3 mx-auto sm:ml-0"
            >
              Learn More About Transitioning
            </Button>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
