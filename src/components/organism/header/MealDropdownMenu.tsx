'use client';

import Typography from "@/components/atoms/typography/Typography";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState, useRef, useEffect } from "react";
import { startTransition } from "react";
import { motion } from "framer-motion";

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
  const [isResponsive, setIsResponsive] = useState(false);
  const dropdownRef = useRef<HTMLDivElement | null>(null);

  const handleItemClick = (url: string, e: React.MouseEvent) => {
    e.preventDefault();
    setIsOpen(false);
    startTransition(() => {
      router.push(url);
    });
  };

  // Set isResponsive based on window width
  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      setIsResponsive(width >= 567 && width <= 1366);
    };

    handleResize(); // Initial set
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Close on outside click (only when not in responsive mode)
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    if (!isResponsive) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isResponsive]);

  return (
    <div className="relative" ref={dropdownRef}>
      {/* ✅ Button is always visible */}
      <button
        className="outline-none cursor-pointer flex items-center gap-1.5 sm:gap-3 xl:gap-1 2xl:gap-1.5 py-1.5 sm:py-1 xl:py-2 px-2.5 sm:px-13 xl:px-2.5 border border-[#DADBD2] rounded-full font-normal sm:bg-[#FEFFF5]"
        onClick={() => {
          if (!isResponsive) {
            setIsOpen((prev) => !prev); // Only toggle if not responsive
          }
        }}
      >
        <div className="w-5 sm:w-7 xl:w-5 relative">
          <Image src={icon} alt="icon" fill className="!static" />
        </div>
        <Typography
          tag="span"
          text={label}
          className="text-primary-dark font-extrabold"
        />
        <div className="w-2.5 h-fit relative sm:hidden xl:block">
          <Image
            src="/icons/black-chevron-down.svg"
            alt="icon"
            fill
            className="!static"
          />
        </div>
      </button>

      {/* ✅ Always shown in responsive range, toggled otherwise */}
      {(isOpen || isResponsive) && (
        <div className="absolute left-0 mt-2 z-50 max-[1366px]:border-none border border-[#DADBD2] w-max max-[1366px]:max-w-full   lg:max-w-[550px] max-[1366px]:rounded-none  rounded-2xl shadow-secondary-1-light max-[1366px]:p-0 p-11 pb-8 max-[1366px]:bg-transparent bg-[#FEFFF5]  max-[1366px]:static">
          <Typography
            tag="h6"
            text={dropDownContentTitle}
            className="mb-6 uppercase max-[1366px]:hidden"
          />
          <div className="flex  flex-col sm:flex-row lg:flex-col flex-wrap gap-6 gap-x-10">
            {items.map((item, index) => (
              <motion.div
                    whileHover={{
                      scale: 1.03,
                    }}
                    transition={{
                      type: "spring",
                      stiffness: 300,
                      damping: 20,
                    }}
                key={index}
                className="flex items-center gap-2 cursor-pointer max-w-[230px] w-fit"
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
              </motion.div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default MealDropdownMenu;
