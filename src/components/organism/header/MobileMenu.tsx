'use client';

import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import MealDropdownMenu from './MealDropdownMenu';
import { motion } from 'framer-motion';
import { usePathname } from 'next/navigation';

interface MobileMenuProps {
  className?: string;
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
}

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      ease: 'easeOut' as const,
    },
  },
};

const hoverMotion = {
  scale: 1.05,
  color: '#944446',
};

const AnimatedMenuIcon = ({ isOpen }: { isOpen: boolean }) => (
  <motion.svg
    width="36"
    height="36"
    viewBox="0 0 36 36"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    initial={false}
    animate={isOpen ? 'open' : 'closed'}
    className="!w-full !h-full"
  >
    <rect x="0" y="0" width="36" height="36" rx="18" fill="#EBEDE0" />
    <motion.path
      variants={{
        open: { d: 'M12 12L24 24' },
        closed: { d: 'M9 11H27' },
      }}
      stroke="#944446"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      transition={{ duration: 0.3 }}
    />
    <motion.path
      variants={{
        open: { d: 'M24 12L12 24' },
        closed: { d: 'M12 18H24' },
      }}
      stroke="#944446"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      transition={{ duration: 0.3 }}
    />
    <motion.path
      variants={{
        open: { opacity: 0 },
        closed: { opacity: 1, d: 'M9 25H27' },
      }}
      stroke="#944446"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      transition={{ duration: 0.2 }}
    />
  </motion.svg>
);

const MobileMenu = ({ className, isOpen, setIsOpen }: MobileMenuProps) => {

  const pathName = usePathname();

  const [isHowItWorksOpen, setIsHowItWorksOpen] = useState(false);

  useEffect(() => {
    const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
    if (isOpen) {
      document.body.classList.add('overflow-hidden');
      document.body.style.paddingRight = `${scrollbarWidth}px`;
    } else {
      document.body.classList.remove('overflow-hidden');
      document.body.style.paddingRight = '';
    }
    return () => {
      document.body.classList.remove('overflow-hidden');
      document.body.style.paddingRight = '';
    };
  }, [isOpen]);

  return (
    <>
      <Button
        size="icon"
        onClick={() => setIsOpen(!isOpen)}
        className={`${className} z-[12] border-none bg-transparent hover:bg-transparent h-8 w-8`}
      >
        <AnimatedMenuIcon isOpen={isOpen} />
      </Button>

      <div
        className={`fixed top-0 left-0 w-full z-[-1] transition-opacity duration-300 ease-in-out ${isOpen ? 'translate-y-0 opacity-100' : '-translate-y-[170%] opacity-0'
          }`}
      >
        <div className="animated-gradient min-h-[600px] h-[100vh] overflow-y-auto max-[575px]:pt-[130px] pt-[150px] pb-[130px] sm:pb-[50px] ">
          <motion.div
            className="flex flex-col lg:flex-row gap-6 sm:gap-[40px] lg:gap-[90px] container py-8 text-lg"
            variants={containerVariants}
            initial="hidden"
            animate="show"
            key={isOpen ? 'menu-items-anim' : 'menu-items-idle'}
          >
            <motion.div variants={itemVariants}>
              <MealDropdownMenu
                label="For Dogs"
                icon="/icons/dog-icon.svg"
                dropDownContentTitle="Dog Meals"
                setIsMobileMenuOpen={setIsOpen}
                items={[
                  { name: 'Beef Bowl', image: '/images/beef-bowl-dog-circle.webp', url: '/meals?pet=dog&protein=beef' },
                  { name: 'Chicken Bowl', image: '/images/chicken-bowl-dog-circle.webp', url: '/meals?pet=dog&protein=chicken' },
                  { name: 'Lamb Bowl', image: '/images/lamb-bowl-dog-circle.webp', url: '/meals?pet=dog&protein=lamb' },
                ]}
              />
            </motion.div>

            <motion.div variants={itemVariants}>
              <MealDropdownMenu
                label="For Cats"
                icon="/icons/cat-icon.svg"
                dropDownContentTitle="Cat Meals"
                setIsMobileMenuOpen={setIsOpen}
                items={[
                  { name: 'Beef Bowl', image: '/images/beef-bowl-dog-circle.webp', url: '/meals?pet=cat&protein=beef' },
                  { name: 'Chicken Bowl', image: '/images/chicken-bowl-dog-circle.webp', url: '/meals?pet=cat&protein=chicken' },
                  { name: 'Lamb Bowl', image: '/images/lamb-bowl-dog-circle.webp', url: '/meals?pet=cat&protein=lamb' },
                ]}
              />
            </motion.div>

            <motion.div className="max-[575px]:!text-[22px] space-y-6 mt-4 ml-3 sm:mt-0 lg:ml-12">
              <motion.a
                variants={itemVariants}
                whileHover={hoverMotion}
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                href="/about-us"
                onClick={() => setIsOpen(false)}
                className="font-bold block"
              >
                About Us
              </motion.a>

              <motion.a
                variants={itemVariants}
                whileHover={hoverMotion}
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                href="#"
                className={`${pathName === '/subscription' || pathName === '/behind-the-scenes' || pathName === '/how-to-feed' || pathName === '/transition-diet' ? 'text-primary' : ''} flex items-center font-bold`}
                onClick={() => setIsHowItWorksOpen(!isHowItWorksOpen)}
              >
                How it works
                <div
                  className="w-3 sm:w-2.5 ml-2 sm:ml-3 xl:ml-1 h-fit"
                  style={{ transform: isHowItWorksOpen ? 'rotate(180deg)' : '' }}
                >
                  <img src="/icons/black-chevron-down.svg" alt="icon" className="w-full h-full" />
                </div>
              </motion.a>

              {isHowItWorksOpen && (
                <motion.div
                  variants={itemVariants}
                  transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                  className="flex flex-col space-y-5 pl-6 sm:pl-4">
                  <motion.a
                    whileHover={{
                      scale: 1.03,
                    }}
                    transition={{
                      type: "spring",
                      stiffness: 300,
                      damping: 20,
                    }}
                    href="/subscription" onClick={() => setIsOpen(false)} className={`${pathName === '/subscription' ? 'text-primary' : ''}  block`}>Subscription</motion.a>
                  <motion.a
                    whileHover={{
                      scale: 1.03,
                    }}
                    transition={{
                      type: "spring",
                      stiffness: 300,
                      damping: 20,
                    }}
                    href="/behind-the-scenes" onClick={() => setIsOpen(false)} className={`${pathName === '/behind-the-scenes' ? 'text-primary' : ''}  block`}>Behind The Scenes</motion.a>
                  <motion.a
                    whileHover={{
                      scale: 1.03,
                    }}
                    transition={{
                      type: "spring",
                      stiffness: 300,
                      damping: 20,
                    }}
                    href="/how-to-feed" onClick={() => setIsOpen(false)} className={`${pathName === '/how-to-feed' ? 'text-primary' : ''}  block`}>How to Feed</motion.a>
                  <motion.a
                    whileHover={{
                      scale: 1.03,
                    }}
                    transition={{
                      type: "spring",
                      stiffness: 300,
                      damping: 20,
                    }}
                    href="/transition-diet" onClick={() => setIsOpen(false)} className={`${pathName === '/transition-diet' ? 'text-primary' : ''}  block`}>Transition Diet</motion.a>
                </motion.div>
              )}
              <motion.a
                variants={itemVariants}
                whileHover={hoverMotion}
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                href="/blogs" onClick={() => setIsOpen(false)} className={`${pathName === '/blogs' ? 'text-primary' : ''} font-bold block`}>Blogs</motion.a>
              <motion.a
                variants={itemVariants}
                whileHover={hoverMotion}
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                href="/reviews" onClick={() => setIsOpen(false)} className={`${pathName === '/reviews' ? 'text-primary' : ''} font-bold block`}>Reviews</motion.a>
              <motion.a
                variants={itemVariants}
                whileHover={hoverMotion}
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                href="/faqs" onClick={() => setIsOpen(false)} className={`${pathName === '/faqs' ? 'text-primary' : ''} font-bold block`}>FAQs</motion.a>
            </motion.div>


          </motion.div>
        </div>
        <div  style={{ background: 'linear-gradient(to bottom, rgb(255, 255, 255) 60%, rgba(255, 255, 255, 0) 100%)' }}
          className='fixed sm:hidden  w-full h-[40px] top-[120px] left-0'></div>
        <div className='flex gap-4  fixed bottom-0 w-full pt-[12dvh] py-[4dvh] px-5 sm:hidden ' style={{ background: 'linear-gradient(rgb(255 255 255 / 0%) 0%, rgb(255, 255, 255) 40%)' }}>
          <Button
            variant="outlinePrimaryBtn"
            size="small"
            className="text-secondary-1 flex-1 py-[12px]">
            Get Started
          </Button>
          <Button
            size="small"
            className="sm:px-9 flex-1 py-[12px]"

          >
            Log In
          </Button>

        </div>
      </div>
    </>
  );
};

export default MobileMenu;
