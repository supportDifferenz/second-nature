"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

interface MobileMenuProps {
  className?: string;
}

const MobileMenu = ({ className }: MobileMenuProps) => {
  const [isOpen, setIsOpen] = useState(false);

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
        <div className="flex flex-col px-6 py-8 space-y-6 text-lg">
          <a href="#" onClick={() => setIsOpen(false)}>About Us</a>
          <a href="#" onClick={() => setIsOpen(false)}>How it works</a>
          <a href="#" onClick={() => setIsOpen(false)}>Blogs</a>
          <a href="#" onClick={() => setIsOpen(false)}>Reviews</a>
          <a href="#" onClick={() => setIsOpen(false)}>FAQs</a>
        </div>
      </div>
    </>
  );
};

export default MobileMenu;
