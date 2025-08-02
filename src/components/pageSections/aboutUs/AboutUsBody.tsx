// AboutUsBody.tsx
"use client";

import Typography from "@/components/atoms/typography/Typography";
import CardCaption from "@/components/molecules/cardTitle/CardCaption";
import CardTitle from "@/components/molecules/cardTitle/CardTitle";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  // PrimaryBlockTitle,
  // SecondaryBlockTitle,
  SecondaryInlineTitle,
} from "@/components/molecules/titleSyles/Title";
import FooterCtaCard from "@/components/organism/footerCtaCard/FooterCtaCard";
import Image from "next/image";
import React from "react";
import FooterBannerCTA from "@/components/organism/footerBannerCTA/FooterBannerCTA";
import useAuthStore from "@/zustand/store/authDataStore";

interface AboutUsBodyProps {
  cardTitleData?: {
    imageSrc: string;
    imageAlt: string;
    text: string;
  };
  cardCaptionData?: {
    imageSrc: string;
    imageAlt: string;
    heading: string;
    subText: string;
  };
}

const footerCtaData = {
  mealTransition: {
    title: "Meal",
    highlight: "Transition",
    paragraph:
      "Gradually introduce our fresh meals to ensure a smooth adjustment and lasting benefits for your furry child",
    imageSrc: "/images/meal-transition-red.webp",
  },
  petFood: {
    title: "Begin Your Pet’s",
    highlight: "Meal Journey",
    paragraph:
      "Check out our nutrient-rich and irresistibly delicious Cat Bowls for optimal feline health and wellness!",
    imageSrc: "/images/multiple-pet.webp",
  },
};

const missionSpecs = [
  {
    icon: "/icons/natural-food.svg",
    text: "100% natural",
    border: true,
  },
  {
    icon: "/icons/carrot-quality.svg",
    text: "high-quality",
    border: true,
  },
  {
    icon: "/icons/maps-location.svg",
    text: "locally crafted",
    border: false,
  },
];

export default function AboutUsBody({ }: // cardTitleData,
  // cardCaptionData,
  AboutUsBodyProps) {
  const ribbonRef = useRef(null);
  const isRibbonInView = useInView(ribbonRef, {
    once: true,
    margin: "0px 0px -100px 0px",
  });
  const isAuthenticated = useAuthStore((state) => state.isAuthenticated);

  return (
    <div className="overflow-x-hidden">
      <div id="our-story">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="flex flex-col items-center mt-[var(--space-95-195)] w-fit mx-auto">
            <Typography
              tag="h6"
              text="Our Story"
              className="uppercase text-secondary-1 mx-auto "
            />
            <Typography
              tag="h2"
              text="Inspired By Love:"
              className="highlight text-primary-dark mt-2"
            />
            <Typography
              tag="h2"
              text="Redefining Pet Nutrition Naturally"
              className="normalize text-center text-primary-dark"
            />
          </div>
        </motion.div>
      </div>


      <motion.div
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <div className="relative bg-[#FDFEFA] h-[116vw] sm:h-[23.43vw] w-[90vw] sm:w-[66.25vw] mx-auto mt-[var(--space-32-52)] border border-secondary-1 rounded-2xl px-[var(--space-20-190)] py-[var(--space-40-60)]">
          <SecondaryInlineTitle
            highlight="Nature,"
            title="At Second"
            paragraph="we believe pets are family, and they deserve the best care possible. Our journey began in Qatar, inspired by our love for animals and a deep commitment to their health and happiness."
            textAlign="text-center w-auto"
            textColor="#944446"
          />
          <div className="absolute left-[-11%] sm:left-[21%] w-[104.2vw] sm:w-[39.86vw]">
            <Image
              src="/images/dog.webp"
              alt=""
              className="!static inset-0 w-full !h-full object-cover object-center"
              fill
            />
          </div>
        </div>
      </motion.div>

      <div className="flex flex-col h-[282vw] sm:h-auto sm:flex-row sm:gap-[10.4vw] mt-[32.4vw] sm:mt-[5vw] items-center relative">
        <div className="w-fit relative">
          <div className="w-[72.66vw] sm:w-[23.59vw]">
            <Image
              src="/images/qatar-dot-map.webp"
              alt=""
              className="!static inset-0 w-full !h-full object-cover object-center"
              fill
              priority
            />
          </div>

          <div className="absolute top-[20%] left-1/2 max-[575px]:transform max-[575px]:translate-x-[-50%] sm:top-[30%]  sm:left-[40%]">
            <Typography
              tag="h2"
              text="Proudly Made In"
              className="text-primary-dark whitespace-nowrap"
              ariaLabel=""
            />
            <Typography
              tag="h1"
              text="Qatar"
              className="text-[#9C1F48] highlight max-sm:text-center"
              ariaLabel=""
            />
          </div>
        </div>
        <div className="flex flex-col absolute sm:static top-[73vw] sm:flex-row gap-[var(--space-52-86)]">
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <CardTitle
              imageSrc="/images/boy-with-cat.webp"
              imageAlt="Pet owner with cat"
              text="As pet owners, we noticed a lack of natural, high-quality food options tailored to the unique needs of pets in our region. Determined to make a difference, we set out to create Qatar's first-ever natural pet food company."
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
            viewport={{ once: true }}
          >
            <CardTitle
              imageSrc="/images/chef.webp"
              imageAlt="boy with cat"
              text="Every recipe we craft is rooted in our passion for providing pets with wholesome, nutritious, and locally sourced ingredients, ensuring they thrive and live their happiest lives. "
            />
          </motion.div>
        </div>

        <div
          ref={ribbonRef}
          className="absolute top-[275vw] sm:top-[33vw] w-full sm:w-full"
        >
          {/* Mobile Ribbon */}
          <motion.div
            initial={{ clipPath: "inset(0% 100% 0% 0%)", opacity: 0 }}
            animate={
              isRibbonInView
                ? { clipPath: "inset(0% 0% 0% 0%)", opacity: 1 }
                : {}
            }
            transition={{ duration: 1, ease: "easeInOut" }}
            className="block sm:hidden !static inset-0 w-full !h-full"
          >
            <Image
              src="/images/qatar-ribbon-mob.webp"
              alt="Qatar Ribbon Mobile"
              fill
              priority
              className="!static w-full !h-full object-cover object-center"
            />
          </motion.div>

          {/* Desktop Ribbon */}
          <motion.div
            initial={{ clipPath: "inset(0% 100% 0% 0%)", opacity: 0 }}
            animate={
              isRibbonInView
                ? { clipPath: "inset(0% 0% 0% 0%)", opacity: 1 }
                : {}
            }
            transition={{ duration: 2, ease: "easeInOut" }}
            className="hidden sm:block !static inset-0 w-full !h-full"
          >
            <Image
              src="/images/qatar-ribbon.webp"
              alt="Qatar Ribbon"
              fill
              priority
              className="!static w-full !h-full object-cover object-center"
            />
          </motion.div>
        </div>
      </div>

      <div id="our-mission" className="mt-[33vw] sm:mt-[17.70vw]">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          viewport={{ once: true }}
        >
          <div className="flex flex-col items-center mb-[var(--space-30-52)]">
            <Typography
              tag="h6"
              text="our Mission"
              className="uppercase text-secondary-1"
            />
            <Typography
              tag="h2"
              text="To nurture"
              className="capitalize text-primary-dark highlight mt-2"
            />
            <Typography
              tag="h2"
              text="the health & happiness of pets"
              className="text-primary-dark text-center max-[575px]:px-4 capitalize"
            />
          </div>
        </motion.div>
        <div>
          <div className="flex justify-center">
            {missionSpecs.map((spec, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.2,
                  ease: "easeOut",
                }}
                viewport={{ once: true }}
                className={`flex flex-col sm:flex-row gap-[var(--space-10-20)] px-[var(--space-23-70)] sm:pr-0 items-center ${spec.border ? "sm:border-r-1 sm:border-[#79D2A7]" : ""
                  } ${spec.border
                    ? "border border-[#79D2A7] border-y-0 sm:border-0"
                    : ""
                  } ${spec.border ? "sm:pr-[var(--space-23-70)]" : ""}`}
              >
                <div className="w-[11.44vw] sm:w-[3.12vw] relative">
                  <Image
                    src={spec.icon}
                    alt={spec.text}
                    className="!static inset-0 w-full !h-full object-cover object-center"
                    fill
                    priority
                  />
                </div>
                <div
                  className={`text-center ${spec.border ? "sm:pr-[var(--space-23-70)]" : ""
                    }`}
                >
                  <Typography
                    tag="h6"
                    text={spec.text}
                    className="text-secondary-1 capitalize"
                  />
                </div>
              </motion.div>
            ))}
          </div>
          <div className="lg:bg-[url('/images/AboutUsBackground.webp')] lg:bg-contain lg:bg-no-repeat">
            <motion.div
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="relative bg-[#FDFEFA]  w-[95vw] sm:w-[66.25vw] mx-auto mt-[var(--space-32-52)] max-[587px]:pb-[85px] pb-36 border border-secondary-1 rounded-2xl px-[var(--space-20-190)] py-[var(--space-50-67)]">
                <div>
                  <Typography
                    tag="h5"
                    text="Meals to strengthen the bond between pets and their families"
                    className="text-primary-dark text-center mb-[var(--space-11-36)]"
                  />
                  <Typography
                    tag="h2"
                    text="We Put Pet Wellness First with Nature’s Finest Ingredients"
                    className="text-secondary-1 text-center highlight mb-4 max-[575px]:!text-[9vw]"
                  />
                  <Typography
                    tag="h6"
                    text=" That's why we’re committed to using the best and natural ingredients, free from harmful additives or artificial fillers, ensuring every meal supports their well-being and vitality."
                    className=" text-center"
                  />
                </div>
                <div className="absolute top-[82%] sm:top-[75%] left-[50%] max-[575px]:transform max-[575px]:translate-x-[-50%] sm:left-[22%] w-[104.2vw] sm:w-[37.86vw]">
                  <Image
                    src="/images/meat-edition.webp"
                    alt=""
                    className="!static inset-0 w-full !h-full object-cover object-center"
                    fill
                    priority
                  />
                </div>
              </div>
            </motion.div>

            <div className="flex flex-col sm:flex-row lg:bg-[url('/images/AboutUsBackgroundBottom.webp')] lg:bg-contain lg:bg-center lg:bg-no-repeat w-fit mx-auto gap-[15.88vw] sm:gap-[14.06vw] my-[43.45vw] sm:my-[14.06vw]">
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                viewport={{ once: true }}
              >
                <CardCaption
                  imageSrc="/images/pet-caring-1.webp"
                  imageAlt="pet-caring"
                  heading="At Second Nature, our mission is to revolutionize pet care."
                  subText="Our line of natural pet food prioritizes health, quality, and trust. We believe that pets are more than companions—they're family."
                />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="sm:mt-[7.39vw]"
              >
                <CardCaption
                  imageSrc="/images/pet-caring-2.webp"
                  imageAlt="pet-caring"
                  heading="Our focus extends beyond nutrition."
                  subText="we aim to foster stronger bonds between pets and their families by promoting a lifestyle of care and wellness. By sourcing locally, we also strive to support local community and environment. With Second Nature, you can trust that every bite is a step toward a happier, healthier life for your beloved pet"
                />
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-[var(--space-120-180)]">
        <FooterBannerCTA
          id="footer-banner"
          image={{
            web: "/images/about-us-footer-cta.webp",
            tablet: "/images/about-us-footer-cta-mob.webp",
            mobile: "/images/about-us-footer-cta-mob.webp",
          }}
          caption="get started with us"
          captionColor="#fff"
          title="Give Your Fur Baby"
          subTitle="the Gift of Real Food Today!"
          paragraph="Pets deserve better than processed kibble or canned food. Second Nature believes in nourishing your fur baby with fresh meals made from real, human-grade ingredients."
          paragraphColor="#FFFFFF"
          buttonText="Build your plan"
          buttonLink={isAuthenticated ? "/location" : "/verify-mail"}
          // buttonLink="/location"
          bannerThemeColor="#fff"
          align="center"
          buttonTextColor="#FFFFFF"
          buttonBg="#944446"
          buttonBorder="#FFFFFF"
        />
      </div>

      <div className="py-[var(--space-120-180)]">
        <FooterCtaCard
          mealTransition={footerCtaData.mealTransition}
          petFood={footerCtaData.petFood}
        />
      </div>
    </div>
  );
}
