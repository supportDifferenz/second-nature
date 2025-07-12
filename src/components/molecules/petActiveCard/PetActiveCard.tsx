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
      className={`relative border rounded-2xl cursor-pointer overflow-hidden  hover:scale-105 transition-transform duration-300 ease-in-out ${
        selectedPet ? "border-secondary-1 border-[1.5px]" : "border-[#E8E8E8]"
      }`}
      onClick={setSelectedCharacter}
    >
      <div className="flex flex-col gap-[var(--space-27-34)] px-[var(--space-8-13)] pt-9 pb-[var(--space-15-30)] w-[36.57vw] sm:w-[14.06vw] sm:max-w-[160px] border border-[#E8E8E8] rounded-2xl">
        <div className="w-[100%]">
          <Image
            src={image}
            alt="mission"
            className="!static inset-0 w-full !h-full object-cover object-center"
            fill
          />
        </div>

        <Typography
          tag="span"
          text={text}
          className="h6 caption text-center uppercase text-primary-dark"
        />
      </div>

      {selectedPet && (
        <div className="absolute top-1 sm:top-2 sm:right-2 right-1 w-8 h-8  rounded-full p-1">
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
