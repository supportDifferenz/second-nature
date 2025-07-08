"use client";

import { useEffect, useRef } from 'react';

export default function CustomLenisScroll({ children }: { children: React.ReactNode }) {
  const rafRef = useRef<number>(0);
  const targetScrollY = useRef(0);
  const currentScrollY = useRef(0);
  const ease = useRef(0.1);
  const isResizing = useRef(false);
  const isDisabled = useRef(false);

  useEffect(() => {
    // Linear interpolation function
    const lerp = (start: number, end: number, factor: number) => {
      return start + (end - start) * factor;
    };

    // Smooth easing function similar to Lenis
    // const smoothEase = (t: number) => {
    //   return t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2;
    // };

    // Initialize scroll position
    currentScrollY.current = window.pageYOffset;
    targetScrollY.current = window.pageYOffset;

    const handleWheel = (e: WheelEvent) => {
      // Check if smooth scrolling should be disabled
      if (isDisabled.current || document.body.classList.contains('overflow-hidden')) {
        return; // Don't prevent default, let browser handle it
      }
      
      e.preventDefault();
      
      // Adjust scroll sensitivity
      const delta = e.deltaY * 0.8;
      targetScrollY.current += delta;
      
      // Clamp the target scroll position
      const maxScroll = document.body.scrollHeight - window.innerHeight;
      targetScrollY.current = Math.max(0, Math.min(targetScrollY.current, maxScroll));
    };

    const handleResize = () => {
      isResizing.current = true;
      setTimeout(() => {
        isResizing.current = false;
      }, 100);
    };

    const animate = () => {
      if (!isResizing.current && !isDisabled.current && !document.body.classList.contains('overflow-hidden')) {
        // Use lerp for smooth interpolation
        currentScrollY.current = lerp(currentScrollY.current, targetScrollY.current, ease.current);
        
        // Apply the scroll position
        window.scrollTo(0, currentScrollY.current);
        
        // Adjust ease based on scroll distance for more natural feel
        const distance = Math.abs(targetScrollY.current - currentScrollY.current);
        ease.current = distance > 100 ? 0.08 : 0.12;
      }
      
      rafRef.current = requestAnimationFrame(animate);
    };

    // Observer to watch for body class changes
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.type === 'attributes' && mutation.attributeName === 'class') {
          const hasOverflowHidden = document.body.classList.contains('overflow-hidden');
          isDisabled.current = hasOverflowHidden;
          
          if (hasOverflowHidden) {
            // Sync the target with current scroll position when disabled
            targetScrollY.current = window.pageYOffset;
            currentScrollY.current = window.pageYOffset;
          }
        }
      });
    });

    observer.observe(document.body, {
      attributes: true,
      attributeFilter: ['class']
    });

    // Event listeners
    document.addEventListener('wheel', handleWheel, { passive: false });
    window.addEventListener('resize', handleResize);
    
    // Start animation loop
    animate();

    return () => {
      observer.disconnect();
      document.removeEventListener('wheel', handleWheel);
      window.removeEventListener('resize', handleResize);
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }
    };
  }, []);

  return <>{children}</>;
}