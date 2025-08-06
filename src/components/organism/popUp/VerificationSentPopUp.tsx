import { startTransition, useEffect } from "react";
import Typography from "@/components/atoms/typography/Typography";
import { X } from "lucide-react";
import { useRouter } from "next/navigation";

export interface VerificationSentPopUpProps {
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
}

export default function VerificationSentPopUp({ isOpen, setIsOpen }: VerificationSentPopUpProps) {
  // const [isOpen, setIsOpen] = useState(true); // Popup starts open

  const router = useRouter();

  const handleClose = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    startTransition(() => {
      router.push("/");
    })
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
      <div className="relative bg-[#FDFFF4] border border-[#E4E7D3] rounded-xl w-fit text-center pt-5 pb-7 px-10">
        <button
          className="absolute top-[-4%] right-[-3%] bg-[#FDFFF4] cursor-pointer text-primary-dark border border-primary-dark rounded-full hover:text-gray-700"
          onClick={handleClose}
        >
          <X size={24} />
        </button>
        <div className="flex flex-col items-center gap-6">
          <Typography tag="h4" text="Verification Sent" className="text-primary-dark mb-4 font-bold" />
        </div>
        <div className="flex flex-col">
          <h6 className="text-text-color  !text-[16px] !font-medium leading-[22px]">
            We have sent a verification email <br />
            to the address you provided. <br />
            Please open it and click the <span className="!font-bold">&apos;Verify&apos;</span> <br />
            button. If you don&apos;t see it, kindly <br />
            check your <span className="!font-bold">spam/trash</span> folder.
          </h6>
        </div>
      </div>
    </div>
  );
}
