'use client';

import Typography from "@/components/atoms/typography/Typography";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState, useRef, useEffect } from "react";
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
  const dropdownRef = useRef<HTMLDivElement | null>(null);

  const handleItemClick = (url: string, e: React.MouseEvent) => {
    e.preventDefault();
    setIsOpen(false);
    startTransition(() => {
      router.push(url);
    });
  };

  // Close on outside click
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative inline-block" ref={dropdownRef}>
      <button
        className="outline-none cursor-pointer flex items-center gap-1.5 lg:gap-1 2xl:gap-1.5 py-1.5 lg:py-2 px-2.5 border border-[#DADBD2] rounded-full font-normal"
        onClick={() => setIsOpen((prev) => !prev)}
      >
        <div className="w-5 xl-7 relative">
          <Image src={icon} alt="icon" fill className="!static" />
        </div>
        <Typography
          tag="span"
          text={label}
          className="text-primary-dark font-extrabold"
        />
        <div className="w-2.5 h-fit relative">
          <Image
            src="/icons/black-chevron-down.svg"
            alt="icon"
            fill
            className="!static"
          />
        </div>
      </button>

      {isOpen && (
        <div className="absolute left-0 mt-2 z-50 max-[1366px]:border-none border border-[#DADBD2] w-max max-[1366px]:max-w-full  max-w-[550px] max-[1366px]:rounded-none  rounded-2xl shadow-secondary-1-light max-[1366px]:p-0 p-11 pb-8 max-[1366px]:bg-transparent bg-[#FEFFF5]  max-[1366px]:static">
          <Typography
            tag="h6"
            text={dropDownContentTitle}
            className="mb-6 uppercase max-[1366px]:hidden"
          />
          <div className="flex flex-wrap  gap-6 gap-x-10">
            {items.map((item, index) => (
              <div
                key={index}
                className="flex items-center gap-2 cursor-pointer max-w-[230px] w-fit "
                onClick={(e) => handleItemClick(item.url, e)}
              >
                {item.image && (
                  <div className="w-20 relative aspect-square">
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      className="!static object-cover"
                    />
                  </div>
                )}
                <span className="grow text-primary-dark font-bold subtitle">
                  {item.name}
                </span>
                <div className="w-[10px] relative aspect-square">
                  <Image
                    src="/icons/primary-dark-chevron-right.svg"
                    alt="arrow"
                    fill
                    className="!static"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default MealDropdownMenu;
