import React from "react";
import Typography from "@/components/atoms/typography/Typography";
import PetSelectCard from "@/components/molecules/petSelectCard/PetSelectCard";
import { cn } from "@/lib/utils";
import OfferBadge from "@/components/atoms/offerBadge/OfferBadge";
interface PlanCardProps {
  bgColour: "bg-white" | "bg-[#FDFFF0]";
  offerBadge?: string;
  heading: string;
  description: string;
  price: number;
}
export default function PlanCard({ bgColour, offerBadge ,heading, description, price}: PlanCardProps) {
  return (
    <div
      className={cn(
        `flex flex-col relative border border-primary-dark rounded-2xl w-fit px-5 py-10 lg:p-14`,
        bgColour
      )}
    >
      {offerBadge && <OfferBadge content={offerBadge} />}
      <div className="w-full border-b border-primary pb-[var(--space-30-40)] flex flex-col">
        <Typography
          tag="h3"
          text={heading}
          className="text-center text-primary-dark mb-2 highlight"
        />
        <Typography
          tag="sub"
          text={description}
          className="text-center font-bold text-[#000000] mb-4"
        />
        <Typography
          tag="h5"
          text="QAR "
          className="text-center text-secondary-1"
        >
          <Typography tag="span" text={price?.toString()} className="" />
        </Typography>
      </div>
      <div className="flex flex-col pt-[var(--space-30-40)]">
        <Typography
          tag="h6"
          text="Step 1: Choose Protein"
          className="text-center  pb-[var(--space-10-20)]"
        />
        <div className="flex justify-center gap-[var(--space-10-20)]">
          <PetSelectCard
            imageSrc="/icons/card-chicken.svg"
            label="Chicken"
            altText="Chicken"
          />
          <PetSelectCard
            imageSrc="/icons/card-beef.svg"
            label="beef"
            altText="beef"
          />
          <PetSelectCard
            imageSrc="/icons/card-lamb.svg"
            label="lamb"
            altText="lamb"
          />
        </div>
      </div>
      <div className="flex flex-col pt-[var(--space-30-40)]">
        <Typography
          tag="h6"
          text="Step 1: Choose Protein"
          className="text-center pb-[var(--space-10-20)]"
        />
        <div className="flex justify-center gap-[var(--space-10-20)]">
          <PetSelectCard
            imageSrc="/icons/full-bowl.svg"
            label="full-bowl"
            altText="full-bowl"
          />
          <PetSelectCard
            imageSrc="/icons/half-bowl.svg"
            label="half-bowl"
            altText="half-bowl"
          />
        </div>
      </div>
    </div>
  );
}
