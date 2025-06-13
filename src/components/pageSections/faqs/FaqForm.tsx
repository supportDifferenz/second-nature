import Typography from "@/components/atoms/typography/Typography";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import Image from "next/image";
import React from "react";

export default function FaqForm() {
  return (
    <div className="rounded-2xl lg:w-[49.2vw] ml-auto bg-primary-light px-[var(--space-20-57)] pt-14 sm:pt-12 lg:pt-10 pb-8 sm:pb-10 lg:pb-12 mt-[var(--space-70-100)]">
      <div className="flex flex-col items-center sm:items-start  lg:flex-row mb-3 lg:mb-3.5">
        <Typography
          tag="h2"
          text="Your Questions,"
          className="text-primary-dark"
        />
        <Typography
          tag="h2"
          text="Answered"
          className="highlight text-primary-dark"
        />
      </div>
      <Typography
        tag="p"
        text="Have questions about our natural pet food? Explore our FAQ section for quick and helpful answers to common queries about ingredients, feeding, storage, and more"
        className="font-bold text-text-color text-center px-3.5 sm:px-0"
      />

      <form
        action=""
        className="pb-[var(--space-40-48)] pt-[var(--space-26-36)] border-b border-[#A1A1A1]"
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-[var(--space-16-24)] ">
          <div className="flex flex-col w-full ">
            <Label className="!mb-1.5 text-mob-16 sm:text-tab-18 lg:text-web-22 text-primary-dark !font-bold">
              First Name
            </Label>
            <Input
              placeholder="Enter your first name*"
              className="bg-white"
              variant="roundedEdgeInput"
            />
            {/* {error && (
        <span className="text-sm text-red-500 block">"error"</span>
      )}{" "} */}
          </div>
          <div className="flex flex-col w-full ">
            <Label className="!mb-1.5 text-mob-16 sm:text-tab-18 lg:text-web-22 text-primary-dark !font-bold">
              Last Name
            </Label>
            <Input
              placeholder="Enter your last name"
              className="bg-white"
              variant="roundedEdgeInput"
            />
            {/* {error && (
        <span className="text-sm text-red-500 block">"error"</span>
      )}{" "} */}
          </div>
          <div className="flex flex-col w-full ">
            <Label className="!mb-1.5 text-mob-16 sm:text-tab-18 lg:text-web-22 text-primary-dark !font-bold">
              Email Address
            </Label>
            <Input
              placeholder="Enter your email address*"
              className="bg-white"
              variant="roundedEdgeInput"
            />
            {/* {error && (
        <span className="text-sm text-red-500 block">"error"</span>
      )}{" "} */}
          </div>
          <div className="flex flex-col w-full ">
            <Label className="!mb-1.5 text-mob-16 sm:text-tab-18 lg:text-web-22 text-primary-dark !font-bold">
              Mobile Number
            </Label>
            <Input
              placeholder="Enter your mobile number*"
              className="bg-white"
              variant="roundedEdgeInput"
            />
            {/* {error && (
        <span className="text-sm text-red-500 block">"error"</span>
      )}{" "} */}
          </div>
        </div>
        <div className="flex flex-col mt-4 lg:mt-3.5 mb-[var(--space-26-36)]">
          <Label className="!mb-1.5 text-mob-16 sm:text-tab-18 lg:text-web-22 text-primary-dark !font-bold">
            Message
          </Label>
          <Textarea placeholder="Enter your message" className="bg-white rounded-3xl border border-[#A1A1A1] outline-none px-4 py-2 sm:h-36 " />
          {/* {error && (
        <span className="text-sm text-red-500 block">"error"</span>
      )}{" "} */}
        </div>

        <Button size={"md"} variant={"primaryBtn"} className="w-fit text-white">
          Send
        </Button>
      </form>

      <div className="flex flex-col sm:flex-row gap-2 mt-10 sm:items-center">
        <Typography tag="h6" text="Need Help" className="text-primary-dark" />
        <div className="flex flex-col sm:flex-row sm:items-center gap-2">
          <Button
            size={"small"}
            variant={"LinkBtnPrimaryText"}
            className="w-fit text-white"
          >
            <div className="relative">
              <Image
                src="/icons/phone.svg"
                alt="icon"
                fill
                className="!static !w-5"
              />
            </div>
            +974-555-556-16
          </Button>
          <Button
            size={"small"}
            variant={"LinkBtnPrimaryText"}
            className="w-fit text-white"
          >
            <div className="relative">
              <Image
                src="/icons/mail.svg"
                alt="icon"
                fill
                className="!static !w-5"
              />
            </div>
            info@secondnature.qa
          </Button>
        </div>
      </div>
    </div>
  );
}
