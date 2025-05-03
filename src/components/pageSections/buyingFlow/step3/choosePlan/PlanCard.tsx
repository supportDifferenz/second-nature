import React,{ useState } from "react";
import Typography from "@/components/atoms/typography/Typography";
// import PetSelectCard from "@/components/molecules/petSelectCard/PetSelectCard";
import PetProteinCard from "@/components/molecules/petProteinCard/PetProteinCard";
import PetBowlSizeCard from "@/components/molecules/petBowlSizeCard/PetBowlSizeCard";
import { cn } from "@/lib/utils";
import OfferBadge from "@/components/atoms/offerBadge/OfferBadge";
interface PlanCardProps {
  bgColour: "bg-white" | "bg-[#FDFFF0]";
  offerBadge?: string;
  heading: string;
  description: string;
  price: number;
  isSelected?: boolean;
  onClick?: () => void;
}
export default function PlanCard({ 
  bgColour, 
  offerBadge, 
  heading,
  description,
  price,
  isSelected = false,
  onClick
}: PlanCardProps) {

  const [ selectedProtein, setSelectedProtein ] = useState("");
  const [ selectedBowlSize, setSelectedBowlSize ] = useState("");

  return (
    <div
      className={cn(
        `flex flex-col relative border rounded-2xl w-fit px-5 py-10 lg:p-14`,
        bgColour,
        isSelected ? "border-primary-dark shadow-md" : "border-slate-300"
      )}
      onClick={onClick}
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
          <PetProteinCard
            imageSrc="/icons/card-chicken.svg"
            label="Chicken"
            altText="Chicken"
            selectedProtein={ selectedProtein === "chicken"}
            setSelectedProtein={ () => setSelectedProtein("chicken")}
          />
          <PetProteinCard
            imageSrc="/icons/card-beef.svg"
            label="beef"
            altText="beef"
            selectedProtein={ selectedProtein === "beef"}
            setSelectedProtein={ () => setSelectedProtein("beef")}
          />
          <PetProteinCard
            imageSrc="/icons/card-lamb.svg"
            label="lamb"
            altText="lamb"
            selectedProtein={ selectedProtein === "lamb"}
            setSelectedProtein={ () => setSelectedProtein("lamb")}
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
          <PetBowlSizeCard
            imageSrc="/icons/full-bowl.svg"
            label="full-bowl"
            altText="full-bowl"
            selectedBowlSize={ selectedBowlSize === "full"}
            setSelectedBowlSize={ () => setSelectedBowlSize("full")}
          />
          <PetBowlSizeCard
            imageSrc="/icons/half-bowl.svg"
            label="half-bowl"
            altText="half-bowl"
            selectedBowlSize={ selectedBowlSize === "half"}
            setSelectedBowlSize={ () => setSelectedBowlSize("half")}
          />
        </div>
      </div>
    </div>
  );
}
