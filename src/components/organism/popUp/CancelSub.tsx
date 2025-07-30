import { useEffect } from "react";
import Typography from "@/components/atoms/typography/Typography";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";

export interface CancelSubProps {
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
  setIsDowngradePopupOpen: (open: boolean) => void;
  setIsPausePopupOpen: (open: boolean) => void;
  setIsCancelPopupOpen: (open: boolean) => void;
}

export default function CancelSub({ isOpen, setIsOpen, setIsDowngradePopupOpen, setIsPausePopupOpen, setIsCancelPopupOpen }: CancelSubProps) {
  // const [isOpen, setIsOpen] = useState(true); // Popup starts open

  const handleClose = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    setIsOpen(false);
  };

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-75 bg-[rgba(0,0,0,0.5)] flex items-center justify-center">
      <div className="relative bg-[#FDFFF4] border border-[#E4E7D3] rounded-xl w-fit text-center pt-5 pb-6 px-10">
        <button
          className="absolute top-[-4%] right-[-3%] bg-[#FDFFF4] cursor-pointer text-primary-dark border border-primary-dark rounded-full hover:text-gray-700"
          onClick={handleClose}
        >
          <X size={24} />
        </button>
        <div className="flex flex-col items-center gap-6">
          <Typography tag="h5" text="Cancel Subscription" className="text-primary-dark" />
        </div>
        <div className="flex flex-col gap-5 mt-7">
            <Button 
              variant={"primaryBtn"} 
              size={"small"} 
              className="w-full"
              onClick={() => {
                setIsOpen(false)
                setIsDowngradePopupOpen(true);
              }}
            >
              Downgrade Your Plan
            </Button>
            <Button 
              variant={"primaryBtn"} 
              size={"small"} 
              className="w-full"
              onClick={() => {
                setIsOpen(false)
                setIsPausePopupOpen(true);
              }}
            >
              Pause Your Plan For Few Weeks 
            </Button>
            <div onClick={() => {
              setIsOpen(false)
              setIsCancelPopupOpen(true);
            }}>
              <Typography tag="p" text="No, I want to Cancel" className="text-secondary-1 underline cursor-pointer" />
            </div>
        </div>
      </div>
    </div>
  );
}
