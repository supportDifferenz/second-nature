"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import MealDropdownMenu from "./MealDropdownMenu";

interface MobileMenuProps {
  className?: string;
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
}

const MobileMenu = ({ className, isOpen, setIsOpen }: MobileMenuProps) => {
  const [isHowItWorksOpen, setIsHowItWorksOpen] = useState(false);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }

    // Cleanup on unmount
    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, [isOpen]);

  return (
    <>
      {/* Toggle Button */}
      <Button
        size="icon"
        onClick={() => setIsOpen(!isOpen)}
        className={`${className} z-50 border-none bg-transparent hover:bg-transparent`}
      >
        {isOpen ? <Image src={"/icons/menu-close.svg"} alt="toggle bar" width={36} height={36} className="block w-[36px] h-[36px]" /> : <Image src={"/icons/menu-bar.svg"} alt="toggle bar" width={36} height={36} className="block w-[36px] h-[36px]" />}
      </Button>

      {/* Fullscreen Menu */}
      <div
        className={`fixed bg-white bottom-0 left-0 w-full  z-160 transition-opacity duration-300 ease-in-out 
                    ${isOpen ? "translate-y-0 opacity-100" : "-translate-y-[170%] opacity-0"}`
        }>
        <div className=" animated-gradient h-[calc(100vh-110px)] sm:h-[calc(100vh-115px)] lg:h-[calc(100vh-130px)] overflow-y-auto  ">
          <div className="flex flex-col container py-8 space-y-6 text-lg">

            <MealDropdownMenu
              label="For Dogs"
              icon="/icons/dog-icon.svg"
              dropDownContentTitle="Dog Meals"
              items={[
                {
                  name: "Beef Bowl",
                  image: "/images/beef-bowl-dog-circle.webp",
                  url: "/meals?pet=dog&protein=beef",
                },
                {
                  name: "Chicken Bowl",
                  image: "/images/chicken-bowl-dog-circle.webp",
                  url: "/meals?pet=dog&protein=chicken",
                },
                {
                  name: "Lamb Bowl",
                  image: "/images/lamb-bowl-dog-circle.webp",
                  url: "/meals?pet=dog&protein=lamb",
                },
              ]}
            />
            <MealDropdownMenu
              label="For Cats"
              icon="/icons/cat-icon.svg"
              dropDownContentTitle="Cat Meals"
              items={[
                {
                  name: "Beef Bowl",
                  image: "/images/beef-bowl-dog-circle.webp",
                  url: "/meals?pet=cat&protein=beef",
                },
                {
                  name: "Chicken Bowl",
                  image: "/images/chicken-bowl-dog-circle.webp",
                  url: "/meals?pet=cat&protein=chicken",
                },
                {
                  name: "Lamb Bowl",
                  image: "/images/lamb-bowl-dog-circle.webp",
                  url: "/meals?pet=cat&protein=lamb",
                },
              ]}
            />

            <a href="/about-us" onClick={() => setIsOpen(false)} className="font-bold block">About Us</a>
            <a
              href="#"
              className="flex items-center font-bold justify-between"
              onClick={() => {
                setIsHowItWorksOpen(!isHowItWorksOpen);
              }}
            >
              How it works
              <div
                className="w-2.5 ml-1 h-fit"
                style={{
                  transform: isHowItWorksOpen ? "rotate(180deg)" : "",
                }}
              >
                <Image
                  src="/icons/black-chevron-down.svg"
                  alt="icon"
                  fill
                  className="!static"
                />
              </div>
            </a>
            {
              isHowItWorksOpen && (
                <div className="flex flex-col space-y-5 pl-4">
                  <a href="/subscription" onClick={() => setIsOpen(false)} className="font-bold block">Subscription</a>
                  <a href="/behind-the-scenes" onClick={() => setIsOpen(false)} className="font-bold block">Behind The Scenes</a>
                  <a href="/how-to-feed" onClick={() => setIsOpen(false)} className="font-bold block">How to Feed</a>
                  <a href="/transition-diet" onClick={() => setIsOpen(false)} className="font-bold block">Transition Diet</a>
                </div>
              )
            }
            <a href="/blogs" onClick={() => setIsOpen(false)} className="font-bold block">Blogs</a>
            <a href="/reviews" onClick={() => setIsOpen(false)} className="font-bold block">Reviews</a>
            <a href="/faqs" onClick={() => setIsOpen(false)} className="font-bold block">FAQs</a>
          </div>
        </div>
      </div>
    </>
  );
};

export default MobileMenu;
