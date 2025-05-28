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
        <div className="flex-1 pb-(--space-27-34) pt-(--space-40-60) lg:pt-0 border-t lg:border-0 border-contrast-button">
          <div 
            className="w-(--space-200-240) mb-(--space-16-24)"
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
            Lorem ipsum dolor sit amet consectetur. Diam pharetra id aliquet
            ultricies nullam. Condimentum est lacinia gravida cursus nulla.
            Lorem ipsum dolor sit amet consectetur. Diam pharetra id aliquet
            ultricies nullam. Condimentum est lacinia gravida cursus nulla.
          </p>

          <div className="mt-(--space-34-130) flex  gap-3">
            <Button size={"md"} variant={"primaryBtn"} className="text-white">
              Get Started
            </Button>
            { isAuthenticated
              ? <Button
                  size={"md"}
                  variant={"outlinePrimaryBtn"}
                  className="text-secondary-1"
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
                  variant={"outlinePrimaryBtn"}
                  className="text-secondary-1"
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
                  <li>Meals</li>
                  <li>Treats</li>
                  <li>Ingredients</li>
                </ul>
                <ul className="flex flex-col gap-2.5">
                  <BadgeTitle label="CAT" color="#00683D" />
                  <li>Meals</li>
                  <li>Treats</li>
                  <li>Ingredients</li>
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
                <li>Subscription</li>
                <li>Behind The Scenes</li>
                <li>How to Feed</li>
                <li>Transition Diet</li>
              </ul>
            </div>
            <div className="flex-1 whitespace-nowrap  sm:flex-auto">
              <Typography
                tag="h5"
                text="About Us"
                className="text-primary-dark mb-(--space-20-45)"
              />
              <ul className="flex flex-col gap-2.5">
                <li>Our Story</li>
                <li>Our Mission</li>
              </ul>
            </div>
            <div className="flex-1 whitespace-nowrap  sm:flex-auto">
              <Typography
                tag="h5"
                text="Other"
                className="text-primary-dark mb-(--space-20-45)"
              />
              <ul className="flex flex-col gap-2.5">
                <li>Reviews</li>
                <li>FAQs</li>
              </ul>
            </div>
            <div className="flex-1 whitespace-nowrap  sm:hidden sm:flex-auto">
              <Typography
                tag="h5"
                text="Need Help"
                className="text-primary-dark mb-4"
              />
              <ul className="flex flex-col gap-2.5">
                <li className="gap-2.5 flex items-center whitespace-nowrap">
                  <div className="w-(--space-16-24)">
                    <Image
                      src="/icons/number.svg"
                      alt="phone number"
                      fill
                      className="!static "
                    />
                  </div>
                  +974-555-556-16
                </li>
                <li className="gap-2.5 flex items-center whitespace-nowrap">
                  <div className="w-(--space-16-24)">
                    <Image
                      src="/icons/email.svg"
                      alt="phone number"
                      fill
                      className="!static "
                    />
                  </div>
                  +974-555-556-16
                </li>
              </ul>
            </div>
          </div>
          <div className="flex justify-between flex-col sm:flex-row gap-4 pt-11 border-t border-contrast-button">
            <div className="min-w-[20.5%] hidden sm:block">
              <Typography
                tag="h5"
                text="Need Help"
                className="text-primary-dark mb-4"
              />
              <ul className="flex flex-col gap-2.5">
                <li className="gap-2.5 flex items-center whitespace-nowrap">
                  <div className="w-(--space-16-24)">
                    <Image
                      src="/icons/number.svg"
                      alt="phone number"
                      fill
                      className="!static "
                    />
                  </div>
                  +974-555-556-16
                </li>
                <li className="gap-2.5 flex items-center whitespace-nowrap">
                  <div className="w-(--space-16-24)">
                    <Image
                      src="/icons/email.svg"
                      alt="phone number"
                      fill
                      className="!static "
                    />
                  </div>
                  +974-555-556-16
                </li>
              </ul>
            </div>
            <div className="mb-7 sm:mb-0">
              <Typography
                tag="h5"
                text="Follow Us"
                className="text-primary-dark mb-6 sm:mb-10 text-left"
              />
              <div className="flex">
                <ul className="flex  gap-8">
                  <li className="w-(--space-27-34)">
                    <Image
                      src="/icons/fb.svg"
                      alt="facebook"
                      fill
                      className="!static"
                    />
                  </li>
                  <li className="w-(--space-27-34)">
                    <Image
                      src="/icons/instagram.svg"
                      alt="instagram"
                      fill
                      className="!static"
                    />
                  </li>
                  <li className="w-(--space-27-34)">
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

            <div className="  flex sm:max-w-[38%] items-center gap-5">
              <div className="min-w-(--space-102-102)">
                <Image
                  src="/images/fediaf.webp"
                  alt="fediaf"
                  fill
                  className="!static"
                />
              </div>
              <Typography
                tag="p"
                text="European Pet Food Industry Federation guidelines to ensure complete and balanced nutrition"
                className="text-left"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="container flex flex-col items-center sm:flex-row sm:justify-between border-t border-contrast-button py-(--space-27-34) text-center sm:text-left">
        <div>
          <Typography tag="span" text="Privacy Policy" /> {"•"}{" "}
          <Typography tag="span" text="Terms and Conditions" />
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
