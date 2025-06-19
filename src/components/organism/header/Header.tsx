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
import { startTransition } from "react";

const Header: React.FC<HeaderPropsTypes> = ({ isOnlyBrandHeader = false }) => {

  const router = useRouter();

  const isAuthenticated = useAuthStore((state) => state.isAuthenticated);

  return (
    <header className="bg-white ">
      {!isOnlyBrandHeader ? (
        <>
          <TopHeader />
          <div className="container py-5  flex items-center gap-2 ">
            {/* mobile menu */}
            <div className="xl:hidden sm:flex-2">
              <MobileMenu />
            </div>

            <div className=" items-center   hidden xl:flex flex-2  gap-[2.5%] 2xl:gap-[4.5%]">
              <MealDropdownMenu
                label="For Dogs"
                dropDownContentTitle="Dog Meals"
                items={[
                  {
                    name: "Beef Bowl",
                    image: "/images/beef-bowl-dog-circle.webp",
                    url: "/meals?protein=beef",
                  },
                  {
                    name: "Chicken Bowl",
                    image: "/images/chicken-bowl-dog-circle.webp",
                    url: "/meals?protein=chicken",
                  },
                  {
                    name: "Lamb Bowl",
                    image: "/images/lamb-bowl-dog-circle.webp",
                    url: "/meals?protein=lamb",
                  },
                ]}
              />
              <MealDropdownMenu
                label="For Cats"
                dropDownContentTitle="Cat Meals"
                items={[
                  {
                    name: "Beef Bowl",
                    image: "/images/beef-bowl-dog-circle.webp",
                    url: "/meals?protein=beef",
                  },
                  {
                    name: "Chicken Bowl",
                    image: "/images/chicken-bowl-dog-circle.webp",
                    url: "/meals?protein=chicken",
                  },
                  {
                    name: "Lamb Bowl",
                    image: "/images/lamb-bowl-dog-circle.webp",
                    url: "/meals?protein=lamb",
                  },
                ]}
              />
              <nav 
                onClick={(e) => {
                  e.preventDefault();
                  startTransition(() => {
                    router.push("/about-us");
                  })
                  // router.push("/about-us");
                }}
              >
                <span className="block">About Us</span>
              </nav>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <button className="outline-none cursor-pointer flex items-center gap-1.5  font-normal ">
                    How it works
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
                  <div className="grid grid-cols-1 gap-5 ">
                    {[
                      { name: "Subscription", href: "/subscription"},
                      { name: "Behind The Scenes", href: "/behind-the-scenes"},
                      { name: "How to Feed", href: "/how-to-feed"},
                      { name: "Transition Diet", href: "/transition-diet"},
                    ].map((item, index) => (
                      <DropdownMenuItem
                        key={index}
                        className="flex items-center gap-3 cursor-pointer"
                        onClick={(e) => {
                          e.preventDefault();
                          startTransition(() => {
                            router.push(item.href);
                          })
                          // router.push(item.href);
                        }}
                      >
                        <span className="grow ">{item.name}</span>
                      </DropdownMenuItem>
                    ))}
                  </div>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>

            {/* logo */}
            <div 
              className="w-[14%] mx-[1%]"
              onClick={() => {
                startTransition(() => {
                  router.push("/");
                })
                // router.push("/");
              }}
            >
              <Image
                src="/icons/logo-primary.svg"
                alt="logo"
                fill
                className="!static"
              />
            </div>

            <div className="items-center justify-end flex flex-2 gap-[4.5%]">
              <span 
                className="hidden xl:block"
                onClick={() => {
                  startTransition(() => {
                    router.push("/blogs");
                  })
                }}
              >
                Blogs
              </span>
              <span 
                className=" hidden xl:block"
                onClick={() => {
                  startTransition(() => {
                    router.push("/reviews");
                  })
                }}
              >
                Reviews
              </span>
              <span 
                className="hidden xl:block"
                onClick={() => {
                  startTransition(() => {
                    router.push("/faqs");
                  })
                }}
              >
                FAQs
              </span>
              <Button
                variant={"outlinePrimaryBtn"}
                size={"md"}
                className="text-secondary-1 hidden sm:block"
                onClick={() => {
                  startTransition(() => {
                    router.push("/location");
                  })
                  // router.push("/location");
                }} 
              >
                Get Started
              </Button>
              { isAuthenticated
                ? <Button 
                    size={"md"} 
                    className=""
                    onClick={() => {
                      startTransition(() => {
                        router.push("/personal-information");
                      })
                      // router.push("/personal-information");
                    }}
                  >
                    Account
                  </Button>
                : <Button 
                    size={"md"} 
                    className=""
                    onClick={() => {
                      startTransition(() => {
                        router.push("/login");
                      })
                      // router.push("/login");
                    }}
                  >
                    Log In
                  </Button>
              }
              
            </div>
          </div>
        </>
      ) : (
        <div className=" container py-5 flex relative">
          {/* <div className="w-400px border absolute top-1/2 transform -translate-y-1/2">
            back btn
          </div> */}
          <div 
            className="w-[14%] mx-auto cursor-pointer"
            onClick={(e) => {
              e.preventDefault();
              startTransition(() => {
                router.push("/");
              })
              // router.push("/");
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
      )}
    </header>
  );
};

export default Header;