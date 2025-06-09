// components/molecules/subscription/ProteinChangePopup.tsx
import React from "react";
import { Button } from "@/components/ui/button";
import { Popup } from "@/components/molecules/popupSkelton/popup";
import Image from "next/image";
import Typography from "@/components/atoms/typography/Typography";

interface ProteinOption {
  id: string;
  name: string;
  icon: string;
}

interface ProteinChangePopupProps {
  isOpen: boolean;
  onClose: () => void;
  currentSelection?: string;
  onSave: (selection: string) => void;
  changeProteinError?: string;
  isChangeProteinLoading?: boolean;
}

export const ProteinChangePopup: React.FC<ProteinChangePopupProps> = ({
  isOpen,
  onClose,
  currentSelection = "chicken",
  onSave,
  changeProteinError,
  isChangeProteinLoading,
}) => {
  const [selected, setSelected] = React.useState(currentSelection);

  const proteinOptions: ProteinOption[] = [
    {
      id: "chicken",
      name: "Chicken",
      icon: "/icons/protien-chicken-vector.svg",
    },
    {
      id: "beef",
      name: "Beef",
      icon: "/icons/protien-beef-vector.svg" ,
    },
    {
      id: "lamb",
      name: "Lamb",
      icon:"/icons/protien-lamb-vector.svg",
    },
  ];

  const handleSave = () => {
    onSave(selected);
    onClose();
  };

  return (
    <Popup
      isOpen={isOpen}
      onClose={onClose}
      title="Change Protein"
      size={"lg"}
      footer={
        <div className="flex justify-center w-full px-7 py-7 pt-5">
          <Button onClick={handleSave} className="w-fit " size={"md"}>
            { isChangeProteinLoading ? "Updating..." : "Update Protein" }
            {/* Update Protein */}
          </Button>
          <Typography
            tag="p"
            text={changeProteinError ?? ""}
            className="text-red-600 text-center mt-2"/>
        </div>
      }
    >
      <div className="flex justify-center flex-wrap  gap-5 w-fit">
        {proteinOptions.map((option) => (
          <button
            key={option.id}
            onClick={() => setSelected(option.id)}
            className={`relative flex flex-col items-center justify-end pb-2 w-27 h-27 sm:w-30 sm:h-30 rounded-xl border ${
              selected === option.id ? "border-secondary-1" : "border-[#E8E8E8]"
            }`}
          >
            {/* Top-right check or circle */}
            <div className="absolute top-1 sm:top-2 sm:right-2 right-1 w-8 h-8 sm:w-7 sm:h-7 rounded-full p-1">
              {selected === option.id ? (
                <Image
                  src="/icons/checked.svg"
                  alt="checked"
                  fill
                  className="!static w-fit h-full"
                />
              ) : (
                <Image
                  src="/icons/unchecked-default.svg"
                  alt="unchecked"
                  fill
                  className="!static w-fit h-full"
                />
              )}
            </div>

            {/* Icon */}
            <div className="w-11 sm:w-13">
              <Image src={option.icon} alt={option.name} fill className="!static"/>
            </div>
            <span className="mt-2 subtitle2 uppercase">{option.name}</span>
          </button>
        ))}
      </div>
        <Typography tag="p" text="Price increases are charged now; otherwise, it adjusts next billing cycle." className="subtitle3 text-center mt-5"/>
    </Popup>
  );
};
