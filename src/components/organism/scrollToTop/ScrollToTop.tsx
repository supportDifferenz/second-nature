"use client";

import { useEffect, useState } from "react";
import { motion, useScroll, useSpring, useTransform, animate  } from "framer-motion";

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const { scrollYProgress } = useScroll();

  const strokeOffset = useSpring(
    useTransform(scrollYProgress, [0, 1], [150, 0]), 
    { stiffness: 100, damping: 20, restDelta: 0.001 }
  );

  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.scrollY > 300);
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    animate(window.scrollY, 0, {
      duration: 1.5,
      ease: [0.25, 1, 0.5, 1], // Custom bezier curve
      onUpdate: (value) => window.scrollTo(0, value),
    });
  };

  return (
    <div
      onClick={scrollToTop}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`fixed z-[130] cursor-pointer bottom-8 right-8 transition-opacity duration-300 rounded-full  ${
        isVisible ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
    >
      <style jsx>{`
        @keyframes bounceUpDown {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-4px);
          }
        }
        .arrow-bounce {
          animation: bounceUpDown 1.2s ease-in-out infinite;
        }
      `}</style>

      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="50"
        height="50"
        viewBox="0 0 55 55"
        fill="none"
        className="w-full h-f"
      >
        <motion.circle
          cx="25"
          cy="25"
          r="22"
          fill="#FDFEFA"
          stroke="#00683D"
          strokeWidth="2"
          strokeDasharray="150"
          strokeDashoffset={strokeOffset}
          strokeLinecap="round" 
          transform="rotate(-90 25 25)" 
        />
        <path
          d="M24 33V20.0233L18.75 25.5847L18 24.8856L24.5 18L31 24.8856L30.25 25.5847L25 20.0233V33H24Z"
          fill="#00683D"
          className={isHovered ? "arrow-bounce" : ""}
        />
      </svg>
    </div>
  );
};

export default ScrollToTop;