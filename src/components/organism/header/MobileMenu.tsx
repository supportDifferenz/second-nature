"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import Image from "next/image";

interface MobileMenuProps {
  className?: string;
}

const MobileMenu = ({ className }: MobileMenuProps) => {
  const [isOpen, setIsOpen] = useState(false);
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
        className={`${className} z-50 border-yellow-500`}
      >
        {isOpen ? <X /> : <Menu />}
      </Button>

      {/* Fullscreen Menu */}
      <div
        className={`fixed bottom-0 left-0 w-full h-[calc(100vh-110px)] sm:h-[calc(100vh-115px)] lg:h-[calc(100vh-130px)] bg-white z-160 transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-y-0" : "-translate-y-[130%]"
        }`}
      >
        <div className="flex flex-col px-6 py-8 space-y-3 text-lg">
          <a href="/about-us" onClick={() => setIsOpen(false)}>About Us</a>
          <a
            href="#"
            className="flex items-center"
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
              <div className="flex flex-col space-y-2 pl-4">
                <a href="/subscription" onClick={() => setIsOpen(false)}>Subscription</a>
                <a href="/behind-the-scenes" onClick={() => setIsOpen(false)}>Behind The Scenes</a>
                <a href="/how-to-feed" onClick={() => setIsOpen(false)}>How to Feed</a>
                <a href="/transition-diet" onClick={() => setIsOpen(false)}>Transition Diet</a>
              </div>
            )
          }
          <a href="/blogs" onClick={() => setIsOpen(false)}>Blogs</a>
          <a href="/reviews" onClick={() => setIsOpen(false)}>Reviews</a>
          <a href="/faqs" onClick={() => setIsOpen(false)}>FAQs</a>
        </div>
      </div>
    </>
  );
};

export default MobileMenu;
