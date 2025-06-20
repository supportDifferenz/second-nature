import Typography from "@/components/atoms/typography/Typography";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { startTransition } from "react";

interface NavDropdownProps {
  label: string;
  icon: string;
  dropDownContentTitle: string;
  items: { name: string; image: string; url: string }[];
}

const MealDropdownMenu = ({
  label,
  icon,
  items,
  dropDownContentTitle,
}: NavDropdownProps) => {

  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);

  const handleItemClick = (url: string, e: React.MouseEvent) => {
    e.preventDefault();
    setIsOpen(false); // Close the dropdown
    startTransition(() => {
      router.push(url);
    });
    // router.push(url); // Navigate to the selected URL
  };

  return (
    <DropdownMenu open={isOpen} onOpenChange={setIsOpen}>
      <DropdownMenuTrigger asChild>
        <button className="outline-none cursor-pointer flex items-center gap-1.5 lg:gap-1 2xl:gap-1.5 lg:py-2  lg:px-2.5 border border-[#DADBD2] rounded-full font-normal ">
          <div className="w-5 xl-7">
            <Image
              src={icon}
              alt="icon"
              fill
              className="!static"
            />
          </div>
          <Typography tag="span" text={label} className="text-primary-dark font-extrabold" />
          <div className="w-2.5 h-fit">
            <Image
              src="/icons/black-chevron-down.svg"
              alt="icon"
              fill
              className="!static"
            />
          </div>
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="max-w-fit" align="start">
        <Typography
          tag="h6"
          text={dropDownContentTitle}
          className="mb-6 uppercase"
        />
        <div className="grid grid-cols-2 gap-8">
          {items.map((item, index) => (
            <DropdownMenuItem
              key={index}
              className="flex items-center   gap-3 cursor-pointer"
              onClick={(e) => handleItemClick(item.url, e)}
            >
              {item.image && (
                <div className="w-20 ">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    className=" !static"
                  />
                </div>
              )}
              <span className="grow  text-primary-dark">{item.name}</span>
              <div className="w-1.5">
                <Image
                  src="/icons/primary-dark-chevron-right.svg"
                  alt="arrow"
                  fill
                  className=" !static"
                />
              </div>
            </DropdownMenuItem>
          ))}
        </div>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

export default MealDropdownMenu;
