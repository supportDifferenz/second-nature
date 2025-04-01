// AboutUsBody.tsx
import Typography from "@/components/atoms/typography/Typography";
import CardCaption from "@/components/molecules/cardTitle/CardCaption";
import CardTitle from "@/components/molecules/cardTitle/CardTitle";
import { SecondaryInlineTitle } from "@/components/molecules/titleSyles/Title";
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

export default function AboutUsBody({
  cardTitleData,
  cardCaptionData,
}: AboutUsBodyProps) {
  return (
    <div className="w-full">
      <div className="flex flex-col items-center w-fit mx-auto">
        <Typography
          tag="h5"
          text="Our Story"
          className="uppercase text-secondary-1 mx-auto"
        />
        <Typography
          tag="h2"
          text="Inspired by Love:"
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
          textAlign="center"
          textColor="#944446"
        />
        <div className="absolute left-[-11%] sm:left-[22%] w-[104.2vw] sm:w-[37.86vw]">
          <Image
            src="/images/dog.webp"
            alt=""
            className="!static inset-0 w-full !h-full object-cover object-center"
            fill
            priority
          />
        </div>
      </div>

      <div className="flex flex-col h-[343vw] sm:h-auto sm:flex-row sm:gap-[10.4vw] mt-[32.4vw] sm:mt-[5vw] items-center relative">
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
            imageSrc="/images/chef.webp"
            imageAlt="chef cooking "
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

      {/* <div className="w-fit sm:w-auto mx-auto">
            <CardCaption 
              imageSrc={captionData.imageSrc}
              imageAlt={captionData.imageAlt}
              heading={captionData.heading}
              subText={captionData.subText}
            />
            <CardCaption 
              imageSrc={captionData.imageSrc}
              imageAlt={captionData.imageAlt}
              heading={captionData.heading}
              subText={captionData.subText}
            />
          </div> */}
    </div>
  );
}
