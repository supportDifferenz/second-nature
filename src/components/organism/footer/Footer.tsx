"use client";

import BadgeTitle from "@/components/atoms/badgeTitle/BadgeTitle";
import Typography from "@/components/atoms/typography/Typography";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";
import useAuthStore from "@/zustand/store/authDataStore";
import { useRouter } from "next/navigation";
import { startTransition } from "react";

const Footer = () => {
  
  const router = useRouter();

  const isAuthenticated = useAuthStore((state) => state.isAuthenticated);

  return (
    <footer className=" text-primary-dark  lg:pt-(--space-40-60)">
      <div className="container flex flex-col lg:flex-row lg:gap-[5%] text-center md:text-left pb-(--space-27-34)">
        {/* logo wrapper */}
        <div className="flex-1 lg:flex lg:flex-col lg:gap-[30px] max-lg:pb-(--space-27-34) pt-(--space-40-60) lg:pt-0 border-t lg:border-0 border-contrast-button">
          <div
            className="w-(--space-200-240) max-lg:mb-(--space-16-24) cursor-pointer"
            onClick={(e) => {
              e.preventDefault();
              startTransition(() => {
                router.push("/");
              });
              // router.push("/");
            }}
          >
            <Image
              src="/icons/logo-primary-dark.svg"
              alt="logo"
              fill
              className="!static"
            />
          </div>
          <p className=" max-w-[100%] text-left">
            Gently Cooked Fresh Meals <br />
            for Healthy, Happy Pets.
            <br />
            Vet-reviewed. Human-grade.
            <br />
            Delivered to your door 
          </p>

          <div className="max-lg:mt-(--space-34-130) flex  gap-3 lg:mt-auto">
            <Button 
              size={"md"} 
              variant={"primaryBtn"} 
              className="text-white"
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
                size={"md"}
                variant={"outlinePrimaryBtn"}
                className="text-secondary-1"
                onClick={() => {
                  startTransition(() => {
                    router.push("/personal-information");
                  });
                  // router.push("/personal-information");
                }}
              >
                My Account
              </Button>
            ) : (
              <Button
                size={"md"}
                variant={"outlinePrimaryBtn"}
                className="text-secondary-1"
                onClick={() => {
                  startTransition(() => {
                    router.push("/login");
                  });
                  // router.push("/login");
                }}
              >
                Log In
              </Button>
            )}
          </div>
        </div>

        {/* link wrapper */}
        <div className=" flex-2 border-t border-contrast-button pt-(--space-27-34)">
          <div className="flex flex-wrap sm:flex-nowrap text-left sm:justify-between gap-7 sm:gap-4 pb-11">
            <div className="flex-1 basis-full sm:basis-auto whitespace-nowrap  sm:flex-auto">
              <Typography
                tag="h5"
                text="Our Food"
                className="text-primary-dark mb-(--space-20-45)"
              />
              <div className="flex gap-[35%] sm:gap-5">
                <ul className="flex flex-col gap-2.5">
                  <li>
                    <BadgeTitle label="DOG" color="#00683D" />
                  </li>
                  <li className="cursor-pointer">Meals</li>
                  <li className="cursor-pointer">Treats</li>
                  <li className="cursor-pointer">Ingredients</li>
                </ul>
                <ul className="flex flex-col gap-2.5">
                  <BadgeTitle label="CAT" color="#00683D" />
                  <li className="cursor-pointer">Meals</li>
                  <li className="cursor-pointer">Treats</li>
                  <li className="cursor-pointer">Ingredients</li>
                </ul>
              </div>
            </div>
            <div className="flex-1 whitespace-nowrap  sm:flex-auto">
              <Typography
                tag="h5"
                text="How It Works"
                className="text-primary-dark mb-(--space-20-45)"
              />

              <ul className="flex flex-col gap-2.5">
                <li
                  className="cursor-pointer"
                  onClick={() => {
                    startTransition(() => {
                      router.push("/subscription");
                    });
                  }}
                >
                  Subscription
                </li>
                <li
                  className="cursor-pointer"
                  onClick={() => {
                    startTransition(() => {
                      router.push("/behind-the-scenes");
                    });
                  }}
                >
                  Behind The Scenes
                </li>
                <li
                  className="cursor-pointer"
                  onClick={() => {
                    startTransition(() => {
                      router.push("/how-to-feed");
                    });
                  }}
                >
                  How to Feed
                </li>
                <li
                  className="cursor-pointer"
                  onClick={() => {
                    startTransition(() => {
                      router.push("/transition-diet");
                    });
                  }}
                >
                  Transition Diet
                </li>
              </ul>
            </div>
            <div className="flex-1 whitespace-nowrap  sm:flex-auto">
              <Typography
                tag="h5"
                text="About Us"
                className="text-primary-dark mb-(--space-20-45)"
              />
              <ul className="flex flex-col gap-2.5">
                <li
                  className="cursor-pointer"
                  onClick={() => {
                    startTransition(() => {
                      router.push("/about-us#our-story");
                    });
                  }}
                >
                  Our Story
                </li>
                <li
                  className="cursor-pointer"
                  onClick={() => {
                    startTransition(() => {
                      router.push("/about-us#our-mission");
                    });
                  }}
                >
                  Our Mission
                </li>
              </ul>
            </div>
            <div className="flex-1 whitespace-nowrap  sm:flex-auto">
              <Typography
                tag="h5"
                text="Other"
                className="text-primary-dark mb-(--space-20-45)"
              />
              <ul className="flex flex-col gap-2.5">
                <li
                  className="cursor-pointer"
                  onClick={() => {
                    startTransition(() => {
                      router.push("/reviews");
                    });
                  }}
                >
                  Reviews
                </li>
                <li
                  className="cursor-pointer"
                  onClick={() => {
                    startTransition(() => {
                      router.push("/faqs");
                    });
                  }}
                >
                  FAQs
                </li>
              </ul>
            </div>
            <div className="flex-1 whitespace-nowrap  sm:hidden sm:flex-auto">
              <Typography
                tag="h5"
                text="Need Help"
                className="text-primary-dark mb-4"
              />
              <ul className="flex flex-col gap-2.5">
                <li className="gap-2.5 flex items-center whitespace-nowrap cursor-pointer">
                  <div className="w-(--space-16-24)">
                    <Image
                      src="/icons/number.svg"
                      alt="phone number"
                      fill
                      className="!static "
                    />
                  </div>
                  {/* +974-555-556-16 */}
                  <a href="tel:+974-555-556-16">+974-555-556-16</a>
                </li>
                <li className="gap-2.5 flex items-center whitespace-nowrap cursor-pointer">
                  <div className="w-(--space-16-24)">
                    <Image
                      src="/icons/email.svg"
                      alt="phone number"
                      fill
                      className="!static"
                    />
                  </div>
                  <a href="mailto:info@secondnature.qa" className="lowercase">info@secondnature.qa</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="flex justify-between flex-col sm:flex-row gap-4 pt-11 border-t border-contrast-button">
            <div className="lg:flex lg:flex-col lg:justify-between  min-w-[20.5%] hidden sm:block">
              <Typography
                tag="h5"
                text="Need Help"
                className="text-primary-dark mb-4"
              />
              <ul className="flex flex-col gap-2.5">
                <li className="gap-2.5 flex items-center whitespace-nowrap cursor-pointer">
                  <div className="w-(--space-16-24)">
                    <Image
                      src="/icons/number.svg"
                      alt="phone number"
                      fill
                      className="!static"
                    />
                  </div>
                  <a href="tel:+974-555-556-16">+974-555-556-16</a>
                </li>
                <li className="gap-2.5 flex items-center whitespace-nowrap cursor-pointer">
                  <div className="w-(--space-16-24)">
                    <Image
                      src="/icons/email.svg"
                      alt="phone number"
                      fill
                      className="!static "
                    />
                  </div>
                  <a href="mailto:info@secondnature.qa" className="lowercase">info@secondnature.qa</a>
                </li>
              </ul>
            </div>
            <div className="lg:flex lg:flex-col lg:justify-between  mb-7 sm:mb-0">
              <Typography
                tag="h5"
                text="Follow Us"
                className="text-primary-dark mb-6 sm:mb-10 text-left"
              />
              <div className="flex">
                <ul className="flex  gap-8">
                  <li className="w-(--space-27-34) cursor-pointer">
                    <Image
                      src="/icons/fb.svg"
                      alt="facebook"
                      fill
                      className="!static"
                    />
                  </li>
                  <li className="w-(--space-27-34) cursor-pointer">
                    <Image
                      src="/icons/Instagram.svg"
                      alt="instagram"
                      fill
                      className="!static"
                    />
                  </li>
                  <li className="w-(--space-27-34) cursor-pointer">
                    <Image
                      src="/icons/linkdln.svg"
                      alt="linkdln"
                      fill
                      className="!static"
                    />
                  </li>
                </ul>
              </div>
            </div>

            <div className="flex sm:max-w-[38%] items-center gap-5">
              <div className="min-w-(--space-102-102)">
                <Image
                  src="/images/fediaf.webp"
                  alt="fediaf"
                  fill
                  className="!static"
                />
              </div>
              <Typography
                tag="span"
                text="European Pet Food Industry Federation guidelines to ensure complete and balanced nutrition"
                className="text-left subtitle3 font-bold lg:!text-[15px] 2xl:!text-[16px] "
              />
            </div>
          </div>
        </div>
      </div>
      <div className="container flex flex-col items-center sm:flex-row sm:justify-between border-t border-contrast-button py-(--space-27-34) text-center sm:text-left">
        <div className="flex flex-row gap-2.5 sm:gap-3 max-sm:pb-3">
          <div 
            onClick={() => {
              startTransition(() => {
                router.push("/privacy-policy");
              });
            }}
          >
            <Typography tag="span" text="Privacy Policy" className="cursor-pointer"/> 
          </div>
          {"•"}{" "}
          <div
            onClick={() => {
              startTransition(() => {
                router.push("/terms-and-conditions");
              });
            }}
          >
            <Typography tag="span" text="Terms and Conditions" className="cursor-pointer" />
          </div>
        </div>
        <div>
          <Typography
            tag="span"
            text="©2025 Second Nature All Rights Reserved"
          />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
