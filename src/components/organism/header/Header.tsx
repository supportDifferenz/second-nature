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

const Header = () => {
  return (
    <header className="bg-white hidden lg:block">
      <TopHeader />
      <div className="container-lg py-5   ">
        <MobileMenu className="lg:hidden" />

        <nav className=" flex gap-2">
          <div className="flex items-center  grow gap-[3%] 2xl:gap-[6 %]">
            <MealDropdownMenu
              label="For Dogs"
              dropDownContentTitle="Dog Meals"
              items={[
                {
                  name: "Beef Bowl",
                  image: "/images/beef-bowl-dog-circle.webp",
                },
                {
                  name: "Chicken Bowl",
                  image: "/images/chicken-bowl-dog-circle.webp",
                },
                {
                  name: "Lamb Bowl",
                  image: "/images/lamb-bowl-dog-circle.webp",
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
                },
                {
                  name: "Chicken Bowl",
                  image: "/images/chicken-bowl-dog-circle.webp",
                },
                {
                  name: "Lamb Bowl",
                  image: "/images/lamb-bowl-dog-circle.webp",
                },
              ]}
            />

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button className="outline-none cursor-pointer flex items-center gap-1.5  font-normal ">
                  About Us
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
                    "Subscription",
                    "Behind The Scenes",
                    "How to Feed",
                    "Transition Diet",
                  ].map((item, index) => (
                    <DropdownMenuItem
                      key={index}
                      className="flex items-center border  gap-3 cursor-pointer"
                    >
                      <span className="grow border ">{item}</span>
                    </DropdownMenuItem>
                  ))}
                </div>
              </DropdownMenuContent>
            </DropdownMenu>

            <span className="block">How it works</span>
          </div>

          <div className="w-[14%] ">
            <Image
              src="/icons/logo-primary.svg"
              alt="logo"
              fill
              className="!static"
            />
          </div>

          <div className="flex items-center justify-end   grow gap-[3%] 2xl:gap-[6  %]">
            <span>Blogs</span>
            <span>Reviews</span>
            <span>FAQs</span>
            <Button
              variant={"outlinePrimaryBtn"}
              size={"md"}
              className="text-secondary-1"
            >
              Get Started
            </Button>
            <Button size={"md"}>Log In</Button>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
