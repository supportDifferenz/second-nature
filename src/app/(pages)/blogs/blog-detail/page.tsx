import MainLayout from "@/components/templates/MainLayout";
import React from "react";
import Typography from "@/components/atoms/typography/Typography";
import { Button } from "@/components/ui/button";
import Image from "next/image";

function page() {
  return (
    <MainLayout>
      <div className="mt-[var(--space-40-90)]">
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-0 sm:justify-between mb-10 sm:mb-8 max-w-[90.65vw] lg:max-w-[68.75vw] mx-auto">
          <Typography
            tag="h2"
            text="9 common dog skin conditions:
                how to spot & treat them (vet approved)"
            className="text-primary-dark sm:w-[70%] lg:w-[46.87vw]"
          />
          <div className="flex flex-col gap-[var(--space-10-20)]">
            <Typography
              tag="p"
              text="Published: 13 January 2025"
              className="uppercase"
            />
            <Button
              size={"md"}
              variant={"primaryBtn"}
              className="w-fit text-white sm:ml-auto"
            >
              Get Started
            </Button>
          </div>
        </div>
        <div className="max-w-[90.65vw] lg:max-w-[80.2vw] mx-auto">
          <div className="w-full  relative">
            <Image
              src="/images/blog-inner-1-mob.webp"
              fill
              alt="Dog image"
              className="block sm:hidden !static w-full h-full object-cover object-center"
            />
            <Image
              src="/images/blog-inner-1.webp"
              fill
              alt="Dog image"
              className="hidden sm:block !static w-full h-full object-cover object-center"
            />
          </div>
        </div>
      </div>
      <div className=" max-w-[90.65vw] lg:max-w-[68.75vw] mx-auto mt-[var(--space-40-70)] ">
        <div className="flex flex-col lg:flex-row">
          <div className="basis-[60%]">
            <div className="flex flex-col gap-[var(--space-15-30)] border-b border-[#BABABA] pb-16">
              <Typography
                tag="h5"
                text="Top Takeaways"
                className="text-secondary-1 font-bold"
              />
              <ul className="list-disc flex flex-col gap-1 ml-6 marker:text-[10px] marker:text-gray-700 ">
                <li>
                  <Typography
                    tag="p"
                    text="Contact your vet if your dog has vomited more than twice in under 24 hours. It’s always better to be safe, especially if they are a senior or have a history of illness."
                    className="text-secondary-1 font-bold"
                  />
                </li>
                <li>
                  <Typography
                    tag="p"
                    text="If your dog is also lethargic, losing weight, experiencing diarrhoea or passing bloody stools, this could mean a bigger health issue that needs to be checked out by your vet."
                    className="text-secondary-1 font-bold"
                  />
                </li>
                <li>
                  <Typography
                    tag="p"
                    text="Dogs eating dry or canned food are more prone to stomach upset. Real food has been proven to be easier for dogs to digest1."
                    className="text-secondary-1 font-bold"
                  />
                </li>
              </ul>
            </div>
            <div className="mt-14">
              <div>
                <Typography
                  tag="h5"
                  text="Why is my dog vomiting?"
                  className="text-primary-dark font-bold mb-[var(--space-20-25)]"
                />
                <Typography
                  tag="p"
                  text="Dogs might vomit for many reasons — some harmless, others more serious. Here are a few common causes:"
                  className="mb-4"
                />
                <ul className="list-disc flex flex-col gap-1 ml-6 marker:text-[10px] marker:text-gray-700 ">
                  <li>
                    <Typography
                      tag="p"
                      text="Dietary mishaps: snacking on spoiled food or things they shouldn’t, like socks or toys."
                      className=""
                    />
                  </li>
                  <li>
                    <Typography
                      tag="p"
                      text="Food sensitivities: some ingredients might not sit well with certain pups."
                      className=""
                    />
                  </li>
                  <li>
                    <Typography
                      tag="p"
                      text="Infections: bacterial or viral bugs can make your dog sick."
                      className=""
                    />
                  </li>
                  <li>
                    <Typography
                      tag="p"
                      text="Toxins: ingesting harmful chemicals or poisonous plants can trigger vomiting"
                      className=""
                    />
                  </li>
                  <li>
                    <Typography
                      tag="p"
                      text="Parasites: worms or parasites can upset your dog’s tummy."
                      className=""
                    />
                  </li>
                </ul>
              </div>
              <div className="w-full  relative my-16">
                <Image
                  src="/images/blog-detail-1.webp"
                  fill
                  alt="Dog image"
                  className=" !static w-full h-full object-cover object-center"
                />
                {/* <Image
                  src="/images/blog-inner-1.webp"
                  fill
                  alt="Dog image"
                  className="hidden sm:block !static w-full h-full object-cover object-center"
                /> */}
              </div>
            </div>
            <div>
              <Typography
                tag="h5"
                text="Top takeaways"
                className="text-primary-dark font-bold mb-[var(--space-20-25)]"
              />

              <ul className="list-disc flex flex-col gap-1 ml-6 marker:text-[10px] marker:text-gray-700 ">
                <li>
                  <Typography
                    tag="p"
                    text="Contact your vet if your dog has vomited more than twice in under 24 hours. It’s always better to be safe, especially if they are a senior or have a history of illness."
                    className=""
                  />
                </li>
                <li>
                  <Typography
                    tag="p"
                    text="If your dog is also lethargic, losing weight, experiencing diarrhoea or passing bloody stools, this could mean a bigger health issue that needs to be checked out by your vet."
                    className=""
                  />
                </li>
                <li>
                  <Typography
                    tag="p"
                    text="Dogs eating dry or canned food are more prone to stomach upset. Real food has been proven to be easier for dogs to digest1."
                    className=""
                  />
                </li>
              </ul>
            </div>
            <div className="my-16">
              <Typography
                tag="h5"
                text="Why is my dog vomiting?"
                className="text-primary-dark font-bold mb-[var(--space-20-25)]"
              />
              <Typography
                tag="p"
                text="Dogs might vomit for many reasons — some harmless, others more serious. Here are a few common causes:"
                className="mb-4"
              />
              <ul className="list-disc flex flex-col gap-1 ml-6 marker:text-[10px] marker:text-gray-700 ">
                <li>
                  <Typography
                    tag="p"
                    text="Dietary mishaps: snacking on spoiled food or things they shouldn’t, like socks or toys."
                    className=""
                  />
                </li>
                <li>
                  <Typography
                    tag="p"
                    text="Food sensitivities: some ingredients might not sit well with certain pups."
                    className=""
                  />
                </li>
                <li>
                  <Typography
                    tag="p"
                    text="Infections: bacterial or viral bugs can make your dog sick."
                    className=""
                  />
                </li>
                <li>
                  <Typography
                    tag="p"
                    text="Toxins: ingesting harmful chemicals or poisonous plants can trigger vomiting"
                    className=""
                  />
                </li>
                <li>
                  <Typography
                    tag="p"
                    text="Parasites: worms or parasites can upset your dog’s tummy."
                    className=""
                  />
                </li>
              </ul>
            </div>
          </div>
          <div className="basis-[40%] relative">
            <div className="sticky top-6 mb-8 lg:mb-0">
              <div className="lg:w-[75%] lg:ml-auto bg-[#FDFFF4] border border-[#E4E7D3] px-5 sm:px-6 pt-[var(--space-20-40)] pb-[var(--space-24-45)] rounded-2xl">
                <div className="flex flex-col gap-[var(--space-16-21)]">
                  <Typography
                    tag="p"
                    text="Jump into section"
                    className="uppercase font-bold"
                  />

                  <ul className="list-disc flex flex-col gap-0.5 ml-4 marker:text-[10px] marker:text-gray-700">
                    <li>
                      <Typography tag="p" text="Top takeaways" className=" " />
                    </li>
                    <li>
                      <Typography
                        tag="p"
                        text="Why is my dog vomiting?"
                        className=" "
                      />
                    </li>
                    <li>
                      <Typography tag="p" text="When to worry" className=" " />
                    </li>
                    <li>
                      <Typography
                        tag="p"
                        text="Understanding colour hues and clues"
                        className=" "
                      />
                    </li>
                    <li>
                      <Typography
                        tag="p"
                        text="Understanding consistency and telltale textures"
                        className=" "
                      />
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}

export default page;
