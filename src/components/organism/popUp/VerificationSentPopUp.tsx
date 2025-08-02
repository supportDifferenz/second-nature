import { useEffect } from "react";
import Typography from "@/components/atoms/typography/Typography";
import { X } from "lucide-react";

export interface VerificationSentPopUpProps {
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
}

export default function VerificationSentPopUp({ isOpen, setIsOpen }: VerificationSentPopUpProps) {
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
          <Typography tag="h5" text="Verification Sent" className="text-primary-dark font-bold" />
        </div>
        <div className="flex flex-col mt-7">
          <Typography
            tag="h6"
            text="We have sent a verification email"
            className=""
          />
          <Typography
            tag="h6"
            text="to the address you provided."
            className=""
          />
          <Typography
            tag="h6"
            text="Please open it and click the 'Verify'"
            className=""
          />
          <Typography
            tag="h6"
            text="button. If you don't see it, kindly"
            className=""
          />
          <Typography
            tag="h6"
            text="check your spam/trash folder."
            className=""
          />
        </div>
      </div>
    </div>
  );
}
