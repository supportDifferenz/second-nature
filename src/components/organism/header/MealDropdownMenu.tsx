import Typography from "@/components/atoms/typography/Typography";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Image from "next/image";

interface NavDropdownProps {
  label: string;
  dropDownContentTitle: string;
  items: { name: string; image: string }[];
}

const MealDropdownMenu = ({
  label,
  items,
  dropDownContentTitle,
}: NavDropdownProps) => (
  <DropdownMenu>
    <DropdownMenuTrigger asChild>
      <button className="outline-none cursor-pointer flex items-center gap-1.5 lg:py-0.5 lg:px-2.5 border border-[#DADBD2] rounded-full font-normal ">
        <div className="w-7">
          <Image
            src="/icons/dog-icon.svg"
            alt="icon"
            fill
            className="!static"
          />
        </div>
        <Typography tag="span" text={label} className="text-primary-dark" />
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
      <div className="grid grid-cols-2 gap-8 ">
        {items.map((item, index) => (
          <DropdownMenuItem
            key={index}
            className="flex items-center border  gap-3 cursor-pointer"
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
            <span className="grow border text-primary-dark">{item.name}</span>
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
);

export default MealDropdownMenu;
