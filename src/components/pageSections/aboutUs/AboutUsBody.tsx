// AboutUsBody.tsx
import Typography from "@/components/atoms/typography/Typography";
import CardCaption from "@/components/molecules/cardTitle/CardCaption";
import CardTitle from "@/components/molecules/cardTitle/CardTitle";
import {
  // PrimaryBlockTitle,
  // SecondaryBlockTitle,
  SecondaryInlineTitle,
} from "@/components/molecules/titleSyles/Title";
import FooterCtaCard from "@/components/organism/footerCtaCard/FooterCtaCard";
import Image from "next/image";
import React from "react";

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
    imageSrc: "/images/meal-transition.webp",
  },
  petFood: {
    title: "Looking for",
    highlight: "Cat Food?",
    paragraph:
      "Check out our nutrient-rich and irresistibly delicious Cat Bowls for optimal feline health and wellness!",
    imageSrc: "/images/cat.webp",
  },
};

export default function AboutUsBody({}: // cardTitleData,
// cardCaptionData,
AboutUsBodyProps) {
  return (
    <div>
      <div className="flex flex-col items-center mt-[var(--space-95-195)] w-fit mx-auto">
        <Typography
          tag="h6"
          text="Our Story"
          className="uppercase text-secondary-1 mx-auto"
        />
        <Typography
          tag="h2"
          text="Inspired By Love:"
          className="highlight text-primary-dark"
        />
        <Typography
          tag="h2"
          text="Redefining Pet Nutrition Naturally"
          className="normalize text-center text-primary-dark"
        />
      </div>

      <div className="relative bg-[#FDFEFA] h-[83.64vw] sm:h-[23.43vw] w-[90vw] sm:w-[66.25vw] mx-auto mt-[var(--space-32-52)] border border-secondary-1 rounded-2xl px-[var(--space-20-190)] py-[var(--space-40-60)]">
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

          <div className="absolute top-[20%] sm:top-[30%] left-[13%] sm:left-[40%]">
            <Typography
              tag="h4"
              text="Proudly Made In"
              className="text-primary-dark whitespace-nowrap"
              ariaLabel=""
            />
            <Typography
              tag="h1"
              text="Qatar"
              className="text-[#9C1F48] highlight"
              ariaLabel=""
            />
          </div>
        </div>
        <div className="flex flex-col absolute sm:static top-[73vw] sm:flex-row gap-[var(--space-52-86)]">
          <CardTitle
            imageSrc="/images/cat-person.webp"
            imageAlt="Pet owner with cat"
            text="As pet owners, we noticed a lack of natural, high-quality food options tailored to the unique needs of pets in our region. Determined to make a difference, we set out to create Qatar's first-ever natural pet food company."
          />
          <CardTitle
            imageSrc="/images/boy-with-cat.webp"
            imageAlt="boy with cat"
            text="Every recipe we craft is rooted in our passion for providing pets with wholesome, nutritious, and locally sourced ingredients, ensuring they thrive and live their happiest lives. "
          />
        </div>

        <div className="absolute top-[253vw] sm:top-[33vw] w-full sm:w-full">
          <Image
            src="/images/qatar-ribbon-mob.webp"
            alt="Qatar Ribbon Mobile"
            className="block sm:hidden !static inset-0 w-full !h-full object-cover object-center"
            fill
            priority
          />
          <Image
            src="/images/qatar-ribbon.webp"
            alt="Qatar Ribbon"
            className="hidden sm:block !static inset-0 w-full !h-full object-cover object-center"
            fill
            priority
          />
        </div>
      </div>

      <div className="mt-[33vw] sm:mt-[17.70vw]">
        <div className="flex flex-col items-center mb-[var(--space-30-52)]">
          <Typography
            tag="h5"
            text="our Mission"
            className="uppercase text-secondary-1"
          />
          <Typography
            tag="h1"
            text="To nurture"
            className="capitalize text-primary-dark highlight"
          />
          <Typography
            tag="h2"
            text="the health & happiness of pets"
            className="text-primary-dark text-center"
          />
        </div>
        <div>
          <div className="flex justify-center">
            <div className="flex flex-col sm:flex-row gap-[var(--space-10-20)] px-[var(--space-23-70)] sm:pr-0 items-center">
              <div className="w-[11.44vw] sm:w-[3.12vw]">
                <Image
                  src="/icons/natural-food.svg"
                  alt="mission"
                  className="!static inset-0 w-full !h-full object-cover object-center"
                  fill
                  priority
                />
              </div>
              <div className="sm:border-r-1 sm:border-[#79D2A7]  sm:pr-[var(--space-23-70)] text-center">
                <Typography tag="h6" text="100% natural" 
                className="text-secondary-1 capitalize"/>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-[var(--space-10-20)] px-[var(--space-23-70)] sm:pr-0 border border-[#79D2A7] border-y-0 sm:border-0 items-center">
              <div className="w-[11.44vw] sm:w-[3.12vw]">
                <Image
                  src="/icons/carrot-quality.svg"
                  alt="mission"
                  className="!static inset-0 w-full !h-full object-cover object-center"
                  fill
                  priority
                />
              </div>
              <div className="sm:border-r-1 sm:border-[#79D2A7] sm:pr-[var(--space-23-70)] text-center">
                <Typography tag="h6" text="high-quality" 
                className="text-secondary-1 capitalize"/>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-[var(--space-10-20)] px-[var(--space-23-70)] sm:pr-0 items-center">
              <div className="w-[11.44vw] sm:w-[3.12vw]">
                <Image
                  src="/icons/maps-location.svg"
                  alt="mission"
                  className="!static inset-0 w-full !h-full object-cover object-center"
                  fill
                  priority
                />
              </div>
              <div className=" sm:pr-[var(--space-23-70)] text-center">
                <Typography tag="h6" text="locally crafted" 
                className="text-secondary-1 capitalize"/>
              </div>
            </div>
          </div>
          <div>
            <div className="relative bg-[#FDFEFA]  w-[90vw] sm:w-[66.25vw] mx-auto mt-[var(--space-32-52)] pb-36 border border-secondary-1 rounded-2xl px-[var(--space-20-190)] py-[var(--space-50-67)]">
              <div>
                <Typography
                  tag="h5"
                  text="Meals to strengthen the bond between pets and their families"
                  className="text-primary-dark text-center mb-[var(--space-11-36)]"
                />
                <Typography
                  tag="h2"
                  text="We Put Pet Wellness First with Nature’s Finest Ingredients"
                  className="text-secondary-1 text-center highlight mb-4 "
                />
                <Typography
                  tag="h6"
                  text=" That's why we’re committed to using the best and natural ingredients, free from harmful additives or artificial fillers, ensuring every meal supports their well-being and vitality."
                  className=" text-center"
                />
              </div>
              <div className="absolute top-[76%] sm:top-[75%] left-[-11%] sm:left-[22%] w-[104.2vw] sm:w-[37.86vw]">
                <Image
                  src="/images/meat-edition.webp"
                  alt=""
                  className="!static inset-0 w-full !h-full object-cover object-center"
                  fill
                  priority
                />
              </div>
            </div>

            <div className="flex flex-col sm:flex-row w-fit mx-auto gap-[15.88vw] sm:gap-[14.06vw] my-[43.45vw] sm:my-[14.06vw]">
              <div>
                <CardCaption
                  imageSrc="/images/pet-caring-1.webp"
                  imageAlt="pet-caring"
                  heading="At Second Nature, our mission is to revolutionize pet care."
                  subText="Our line of natural pet food prioritizes health, quality, and trust. We believe that pets are more than companions—they're family."
                />
              </div>
              <div className="sm:mt-[7.39vw]">
                <CardCaption
                  imageSrc="/images/pet-caring-2.webp"
                  imageAlt="pet-caring"
                  heading="Our focus extends beyond nutrition."
                  subText="we aim to foster stronger bonds between pets and their families by promoting a lifestyle of care and wellness. By sourcing locally, we also strive to support local community and environment. With Second Nature, you can trust that every bite is a step toward a happier, healthier life for your beloved pet"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="pb-[var(--space-120-180)]">
        <FooterCtaCard
          mealTransition={footerCtaData.mealTransition}
          petFood={footerCtaData.petFood}
        />
      </div>
    </div>
  );
}
