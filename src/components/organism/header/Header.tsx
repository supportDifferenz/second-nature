"use client";

import { Button } from "@/components/ui/button";
import TopHeader from "./TopHeader";
import MobileMenu from "./MobileMenu";
import Image from "next/image";
import MealDropdownMenu from "./MealDropdownMenu";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { HeaderPropsTypes } from "@/components/types/type";
import { useRouter } from "next/navigation";
import useAuthStore from "@/zustand/store/authDataStore";
import { startTransition, useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";

const Header: React.FC<HeaderPropsTypes> = ({ isOnlyBrandHeader = false }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);
  const [isMobile, setIsMobile] = useState<boolean>(false);
  const [dogOrCat, setDogOrCat] = useState<"dog" | "cat">("dog");

  const router = useRouter();
  const pathName = usePathname();
  const isAuthenticated = useAuthStore((state) => state.isAuthenticated);

  // Helper function to check if a path is active
  const isActiveRoute = (route: string) => pathName === route;

  // Helper function to check if any of the "How it works" dropdown items are active
  const isHowItWorksActive = () => {
    const howItWorksRoutes = ["/subscription", "/behind-the-scenes", "/how-to-feed", "/transition-diet"];
    return howItWorksRoutes.includes(pathName);
  };

  // Helper function to check if meals page is active for dogs or cats
  // const isMealsActive = (petType: string) => {
  //   return pathName === "/meals" && new URLSearchParams(window.location.search).get("pet") === petType;
  // };
  /* eslint-disable-next-line @typescript-eslint/no-unused-vars */
  const isMealsActive = (petType: string) => {
    if (typeof window === "undefined") return false; // 👈 safe SSR guard
    return (
      pathName === "/meals" &&
      new URLSearchParams(window.location.search).get("pet") === petType
    );
  };


  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 575);
    };

    handleResize(); // Initial check
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const params = new URLSearchParams(window.location.search);
      setDogOrCat(params.get("pet") as "dog" | "cat");
    }
  }, []);


  return (
    <header className="bg-[#ffff] relative z-[15]">
      {!isOnlyBrandHeader ? (
        <div>
          <TopHeader />
          <div className="bg-white">
            <div className="container py-5 flex items-center gap-2">
              {/* mobile menu */}
              <div className="xl:hidden shrink-0">
                <MobileMenu
                  isOpen={isMobileMenuOpen}
                  setIsOpen={setIsMobileMenuOpen}
                />
              </div>

              <div className="items-center hidden xl:flex flex-1 gap-[4.5%]">
                <div className={`${pathName === "/meals" && dogOrCat === "dog" ? "text-primary font-bold" : ""}`}>
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
                </div>

                <div className={pathName === "/meals" && dogOrCat === "cat" ? "text-primary font-bold" : ""}>
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
                </div>

                <nav
                  onClick={(e) => {
                    e.preventDefault();
                    startTransition(() => {
                      router.push("/about-us");
                    });
                  }}
                >
                  <span className={`${isActiveRoute("/about-us") ? "text-primary" : ""} block font-extrabold cursor-pointer hover:text-primary transition-colors duration-200`}>
                    About Us
                  </span>
                </nav>

                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <button className="outline-none cursor-pointer flex items-center gap-1.5 font-extrabold hover:text-primary transition-colors duration-200">
                      <span className={`${isHowItWorksActive() ? "text-primary" : ""}`}>
                        How it works
                      </span>
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
                    <div className="grid grid-cols-1 gap-5 relative z-[11]">
                      {[
                        { name: "Subscription", href: "/subscription" },
                        { name: "Behind The Scenes", href: "/behind-the-scenes" },
                        { name: "How to Feed", href: "/how-to-feed" },
                        { name: "Transition Diet", href: "/transition-diet" },
                      ].map((item, index) => (
                        <DropdownMenuItem
                          key={index}
                          className={`${isActiveRoute(item.href) ? "text-primary bg-primary/10" : ""} flex items-center gap-3 cursor-pointer hover:text-primary hover:bg-primary/5 transition-colors duration-200`}
                          onClick={(e) => {
                            e.preventDefault();
                            startTransition(() => {
                              router.push(item.href);
                            });
                          }}
                        >
                          <span className="grow font-bold">{item.name}</span>
                        </DropdownMenuItem>
                      ))}
                    </div>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>

              {/* logo */}
              <div
                className="min-w-[120px] w-[14%] mx-[1%] cursor-pointer "
                onClick={() => {
                  startTransition(() => {
                    router.push("/");
                  });
                }}
              >
                <Image
                  src="/icons/logo-primary.svg"
                  alt="logo"
                  fill
                  className="!static"
                />
              </div>

              <div className="items-center justify-end flex flex-1 gap-[4.5%]">
                <span
                  className={`${isActiveRoute("/blogs") ? "text-primary" : ""} hidden xl:block font-extrabold cursor-pointer hover:text-primary transition-colors duration-200`}
                  onClick={() => {
                    startTransition(() => {
                      router.push("/blogs");
                    });
                  }}
                >
                  Blogs
                </span>
                <span
                  className={`${isActiveRoute("/reviews") ? "text-primary" : ""} hidden xl:block font-extrabold cursor-pointer hover:text-primary transition-colors duration-200`}
                  onClick={() => {
                    startTransition(() => {
                      router.push("/reviews");
                    });
                  }}
                >
                  Reviews
                </span>
                <span
                  className={`${isActiveRoute("/faqs") ? "text-primary" : ""} hidden xl:block font-extrabold cursor-pointer hover:text-primary transition-colors duration-200`}
                  onClick={() => {
                    startTransition(() => {
                      router.push("/faqs");
                    });
                  }}
                >
                  FAQs
                </span>

                {/* === BUTTON LOGIC START === */}
                {isMobile ? (
                  isMobileMenuOpen ? (
                    <Button
                      size="small"
                      onClick={() => {
                        startTransition(() => {
                          router.push("/login");
                        });
                      }}
                    >
                      Log In
                    </Button>
                  ) : (
                    <Button
                      variant="outlinePrimaryBtn"
                      size="small"
                      className="text-secondary-1"
                      onClick={() => {
                        startTransition(() => {
                          router.push("/location");
                        });
                      }}
                    >
                      Get Started
                    </Button>
                  )
                ) : (
                  <>
                    <Button
                      variant="outlinePrimaryBtn"
                      size="small"
                      className="text-secondary-1 hidden sm:block"
                      onClick={() => {
                        startTransition(() => {
                          router.push("/location");
                        });
                      }}
                    >
                      Get Started
                    </Button>

                    {isAuthenticated ? (
                      <Button
                        size="small"
                        onClick={() => {
                          startTransition(() => {
                            router.push("/personal-information");
                          });
                        }}
                      >
                        Account
                      </Button>
                    ) : (
                      <Button
                        size="small"
                        className="sm:px-9"
                        onClick={() => {
                          startTransition(() => {
                            router.push("/login");
                          });
                        }}
                      >
                        Log In
                      </Button>
                    )}
                  </>
                )}
                {/* === BUTTON LOGIC END === */}
              </div>
            </div>
          </div>
          <AnimatePresence mode="wait">
            {isMobileMenuOpen && (
              <motion.div
                key="mobile-line"
                initial={{ width: "0%" }}
                animate={{ width: "100%" }}
                exit={{ width: "0%" }}
                transition={{ duration: 0.6, ease: "easeInOut" }}
                className="bg-[#2bb68724] h-[1.1px] block absolute container left-1/2 transform -translate-x-1/2 bottom-0"
              />
            )}
          </AnimatePresence>
        </div>
      ) : (
        <div className="container py-5 flex relative">
          <div
            className="w-[14%] mx-auto cursor-pointer"
            onClick={(e) => {
              e.preventDefault();
              startTransition(() => {
                router.push("/");
              });
            }}
          >
            <Image
              src="/icons/logo-primary.svg"
              alt="logo"
              fill
              className="!static"
            />
          </div>
        </div>
      )
      }
    </header >
  );
};

export default Header;