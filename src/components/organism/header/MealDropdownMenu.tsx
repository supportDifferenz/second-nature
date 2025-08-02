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
  setIsMobileMenuOpen?: (open: boolean) => void;
}

const MealDropdownMenu = ({
  label,
  icon,
  items,
  setIsMobileMenuOpen,
}: NavDropdownProps) => {
  const router = useRouter();
  const dropdownRef = useRef<HTMLDivElement | null>(null);
  const [isOpen, setIsOpen] = useState(false);
  const [screenSize, setScreenSize] = useState<"mobile" | "tablet" | "desktop">("desktop");

  // Update screen size and open state
  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;

      if (width <= 575) {
        setScreenSize("mobile");
        setIsOpen(false); // closed by default on mobile
      } else if (width >= 576 && width <= 1366) {
        setScreenSize("tablet");
        setIsOpen(true); // always open in this range
      } else {
        setScreenSize("desktop");
        setIsOpen(false); // closed by default on desktop, open on hover only
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleItemClick = (url: string, e: React.MouseEvent) => {
    e.preventDefault();
    if (screenSize === "mobile") {
      setIsOpen(false);
    }
    if (setIsMobileMenuOpen) {
      setIsMobileMenuOpen(false);
    }
    startTransition(() => {
      router.push(url);
    });
  };

  return (
    <div
      className="relative"
      ref={dropdownRef}
      onMouseEnter={() => {
        if (screenSize === "desktop") setIsOpen(true);
      }}
      onMouseLeave={() => {
        if (screenSize === "desktop") setIsOpen(false);
      }}
    >
      <button
        className="outline-none group cursor-pointer flex items-center gap-2.5 sm:gap-3 xl:gap-1 2xl:gap-1.5 py-2 sm:py-1 xl:py-2 px-6 sm:px-13 xl:px-2.5 border border-[#DADBD2] transition duration-75 hover:border-primary rounded-full font-normal sm:bg-[#FEFFF5]"
        onClick={() => {
          if (screenSize === "mobile") {
            setIsOpen((prev) => !prev);
          }
        }}
      >
        <div className="w-8 sm:w-7 xl:w-5 relative">
          <Image src={icon} alt="icon" fill className="!static" />
        </div>
        <Typography
          tag="span"
          text={label}
          className="text-primary-dark font-extrabold max-[575px]:!text-[20px]"
        />
        <div
          className={`w-3 sm:w-2.5 h-fit relative sm:hidden xl:block group-hover:rotate-180 transition duration-75 ${isOpen ? "rotate-180" : ""
            }`}
        >
          <Image
            src="/icons/black-chevron-down.svg"
            alt="icon"
            fill
            className="!static"
          />
        </div>
      </button>

      {isOpen && (
        <div className="pt-2 absolute left-0 z-50 max-[1366px]:static">
          <div className="max-[1366px]:border-none border xl:shadow-md border-[#DADBD2] w-max max-[1366px]:max-w-full lg:max-w-[550px] max-[1366px]:rounded-none rounded-2xl max-[1366px]:p-0 p-6 pr-8 max-[1366px]:bg-transparent bg-[#FEFFF5]">
            <div className="flex flex-col sm:flex-row lg:flex-col flex-wrap gap-3 gap-x-10">
              {items.map((item, index) => (
                <motion.div
                  whileHover={{ scale: 1.03 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  key={index}
                  className="flex items-center gap-3 sm:gap-2 cursor-pointer max-w-[240px] w-fit"
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
                  <span className="grow text-primary-dark max-[575px]:!text-[20px] !font-normal subtitle">
                    {item.name}
                  </span>
                  {/* <div className="w-[10px] xl:w-[7px] relative aspect-square">
                    <img
                      src="/icons/right-arrow-thin.svg"
                      alt="arrow"
                      className="w-full h-full"
                    />
                  </div> */}
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MealDropdownMenu;
