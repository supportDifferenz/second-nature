"use client";

import MainLayout from "@/components/templates/MainLayout";
import React, { startTransition } from "react";
import Typography from "@/components/atoms/typography/Typography";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import BlogListCard from "@/components/pageSections/blogs/BlogListCard";
import { useRouter } from "next/navigation";

const blogData = [
  {
    title:
      "9 common dog skin conditions: how to spot & treat them (vet approved)",
    description:
      "There’s nothing like a good scratch. But if your dog is scratching more than usual, it could be a sign of a skin...",
    image: "/images/blog-1.webp",
  },
  {
    title:
      "several uncommon dog urinary conditions: how to spot & treat them (vet approved)",
    description:
      "Choosing the right treats can help reinforce good behavior and support your pup’s wellbeing...",
    image: "/images/blog-2.webp",
  },
];

function Page() {

  const router = useRouter();

  const socialIcons = [
    { src: "/icons/facebook-icon.svg", alt: "Facebook", href: "#" },
    { src: "/icons/linkedIn-icon.svg", alt: "LinkedIn", href: "#" },
    { src: "/icons/instagram-icon.svg", alt: "Instagram", href: "#" },
    { src: "/icons/twitter-icon.svg", alt: "Twitter", href: "#" },
  ];
  return (
    <MainLayout>
      <div
        style={{
          background: "linear-gradient(to bottom, #FDFEF2 20%, #FFFFFF 100%)",
        }}
      >
        <div className="pt-[var(--space-40-90)]">
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
                onClick={() => {
                  startTransition(() => {
                    router.push("/location");
                  });
                }}
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
              <div className="mt-12 lg:hidden">
                <div className="lg:w-[75%] lg:ml-auto bg-[#FDFFF4] border border-[#E4E7D3] px-5 sm:px-6 pt-[var(--space-20-40)] pb-[var(--space-24-45)] rounded-2xl">
                  <div className="flex flex-col gap-[var(--space-16-21)]">
                    <Typography
                      tag="p"
                      text="Jump into section"
                      className="uppercase font-bold"
                    />

                    <ul className="list-disc flex flex-col gap-0.5 ml-4 marker:text-[10px] marker:text-gray-700">
                      <li>
                        <Typography
                          tag="p"
                          text="Top takeaways"
                          className=" "
                        />
                      </li>
                      <li>
                        <Typography
                          tag="p"
                          text="Why is my dog vomiting?"
                          className=" "
                        />
                      </li>
                      <li>
                        <Typography
                          tag="p"
                          text="When to worry"
                          className=" "
                        />
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
                      <li>
                        <Typography
                          tag="p"
                          text="Preventing vomiting in dogs"
                          className=" "
                        />
                      </li>
                      <li>
                        <Typography
                          tag="p"
                          text="How veterinarians diagnose the cause of vomiting"
                          className=" "
                        />
                      </li>
                      <li>
                        <Typography
                          tag="p"
                          text="How can I settle my dog’s tummy?"
                          className=" "
                        />
                      </li>
                      <li>
                        <Typography
                          tag="p"
                          text="How a fresh food diet can help with vomiting and gut issues"
                          className=" "
                        />
                      </li>
                      <li>
                        <Typography
                          tag="p"
                          text="Have another question?"
                          className=" "
                        />
                      </li>
                    </ul>
                  </div>
                </div>
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
              <div className="py-14 border-b border-[#EBEDE0]">
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
              <div className="flex items-center gap-4 my-8">
                <span className="text-sm font-semibold text-gray-700 uppercase">
                  Share
                </span>
                <div className="flex items-center gap-2.5 sm:gap-4">
                  {socialIcons.map(({ src, alt, href }, index) => (
                    <a
                      key={index}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex relative w-10 h-10 rounded-full bg-gray-100 hover:bg-gray-200 transition"
                    >
                      <Image
                        src={src}
                        alt={alt}
                        fill
                        className="object-contain " // padding optional, keeps nice breathing room
                      />
                    </a>
                  ))}
                </div>
              </div>
            </div>
            <div className="basis-[40%] relative hidden lg:block">
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
                        <Typography
                          tag="p"
                          text="Top takeaways"
                          className=" "
                        />
                      </li>
                      <li>
                        <Typography
                          tag="p"
                          text="Why is my dog vomiting?"
                          className=" "
                        />
                      </li>
                      <li>
                        <Typography
                          tag="p"
                          text="When to worry"
                          className=" "
                        />
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
        <div className="flex flex-col sm:flex-row justify-between container pt-11 sm:pt-0 bg-[#EBEDE0] rounded-2xl !my-[var(--space-80-120)]">
          <div className="flex flex-col justify-center gap-[var(--space-17-43)] pl-[var(--space-40-130)]">
            <div className="flex flex-col">
              <Typography
                tag="h2"
                text="Real Food."
                className="capitalize text-primary-dark "
              />
              <Typography
                tag="h2"
                text="Made Fresh."
                className="capitalize highlight text-primary-dark "
              />
              <Typography
                tag="h2"
                text="Delivered. "
                className="capitalize highlight text-primary-dark "
              />
            </div>
            <Button
              size={"md"}
              variant={"primaryBtn"}
              className="w-fit text-white"
              onClick={() => {
                startTransition(() => {
                  router.push("/location");
                })
              }}
            >
              Get Started
            </Button>
          </div>
          <div className="lg:w-[62%] relative">
            <Image
              src="/images/pet-food-packed.webp"
              fill
              alt="pet food packed"
              className="block sm:hidden !static w-full h-full object-cover object-center"
            />
            <Image
              src="/images/pet-food-packed.webp"
              fill
              alt="pet food packed"
              className="hidden sm:block !static w-full h-full object-cover object-center"
            />
          </div>
        </div>
        <div className="container">
          <Typography
            tag="h2"
            text="Related "
            className="text-primary-dark text-center"
          >
            <Typography tag="span" text="Stories" className="highlight" />
          </Typography>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-[var(--space-60-100)] pt-10 pb-[var(--space-105-136)]">
            {blogData.map((blog, index) => (
              <BlogListCard
                key={index}
                title={blog.title}
                description={blog.description}
                image={blog.image}
              />
            ))}
          </div>
        </div>
      </div>
    </MainLayout>
  );
}

export default Page;
