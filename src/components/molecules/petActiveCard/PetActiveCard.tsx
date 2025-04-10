"use client";
import Typography from "@/components/atoms/typography/Typography";
import Image from "next/image";

export default function PetActiveCard({
  image,
  text,
  selectedPet,
  setSelectedCharacter,
}: {
  image: string;
  text: string;
  selectedPet: boolean;
  setSelectedCharacter: () => void;
}) {
  return (
    <div
      className={`relative border rounded-2xl cursor-pointer overflow-hidden ${
        selectedPet ? "border-secondary-1 border-[1.5px]" : "border-[#E8E8E8]"
      }`}
      onClick={setSelectedCharacter}
    >
      <div className="flex flex-col gap-[var(--space-27-34)] px-[var(--space-8-13)] pt-9 pb-[var(--space-15-30)] w-[43.57vw] sm:w-[14.06vw] border border-[#E8E8E8] rounded-2xl">
        <div className="w-[100%]">
          <Image
            src={image}
            alt="mission"
            className="!static inset-0 w-full !h-full object-cover object-center"
            fill
          />
        </div>

        <Typography
          tag="h6"
          text={text}
          className="text-center uppercase text-primary-dark"
        />
      </div>

      {selectedPet && (
        <div className="absolute top-1 sm:top-2 sm:right-2 right-1 w-8 h-8 sm:w-10 sm:h-10 rounded-full p-1">
          <Image
            src="/icons/checked.svg"
            alt={`${text} checked`}
            fill
            className="!static w-fit h-full"
          />
        </div>
      )}
    </div>
  );
}
