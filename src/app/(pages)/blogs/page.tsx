"use client";

// blogs.tsx
import Typography from "@/components/atoms/typography/Typography";
import MainLayout from "@/components/templates/MainLayout";
import React, { startTransition } from "react";
import BlogListCard from "@/components/pageSections/blogs/BlogListCard";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import FooterCtaCard from "@/components/organism/footerCtaCard/FooterCtaCard";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import useAuthStore from "@/zustand/store/authDataStore";

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
  {
    title: "How to transition your dog to a new diet safely",
    description:
      "Making changes to your dog’s diet can be tricky, but with the right steps, you can do it smoothly...",
    image: "/images/blog-3.webp",
  },
  {
    title: "Daily routine checklist for a happy dog",
    description:
      "A good routine helps your dog stay healthy and mentally stimulated. Here’s a daily checklist...",
    image: "/images/blog-4.webp",
  },
];

function Page() {

  const router = useRouter();

  const isAuthenticated = useAuthStore((state) => state.isAuthenticated);

  const footerCtaData = {
    mealTransition: {
      title: "Meal",
      highlight: "Transition",
      paragraph:
        "Gradually introduce our fresh meals to ensure a smooth adjustment and lasting benefits for your furry child",
      imageSrc: "/images/meal-transition.webp",
    },
    petFood: {
      title: "Looking for",
      highlight: "Cat Food?",
      paragraph:
        "Check out our nutrient-rich and irresistibly delicious Cat Bowls for optimal feline health and wellness!",
      imageSrc: "/images/cat.webp",
    },
  };
  return (
    <MainLayout>
      <div
        style={{
          background: "linear-gradient(to bottom, #F9FAF1 20%, #FFFFFF 100%)",
        }}
      >
        <div className="container pt-14 sm:pt-12 mb-[var(--space-80-85)] flex flex-col items-center">
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            viewport={{ once: true }}
          >
            <Typography
              tag="h3"
              text="The curated home"
              className="capitalize text-primary-dark text-center"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Typography
              tag="h2"
              text="for the healthy pup"
              className="capitalize highlight text-primary-dark text-center"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="flex justify-center"
          >
            <Typography
              tag="h6"
              text="Find insights, guides and tips and tricks — all aiming to help your pup live longer."
              className="text-secondary-1 text-center w-[80%] lg:w-[35vw] mt-6 sm:mt-5 lg:mt-4"
            />
          </motion.div>
        </div>

        <div className="container grid grid-cols-1 sm:grid-cols-2 gap-[var(--space-60-100)] pt-[var(--space-80-85)] pb-[var(--space-122-176)]">
          {blogData.map((blog, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: index * 0.2,
              }}
              viewport={{ once: true }}
            >
              <BlogListCard
                title={blog.title}
                description={blog.description}
                image={blog.image}
              />
            </motion.div>
          ))}
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <div className="flex flex-col sm:flex-row justify-between container pt-11 sm:pt-0 bg-[#EBEDE0] rounded-2xl">
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
                if(isAuthenticated) {
                  startTransition(() => {
                    router.push("/location");
                  });
                } else {
                  startTransition(() => {
                    router.push("/verify-mail");
                  });
                }
                // startTransition(() => {
                //   router.push("/location");
                // });
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
      </motion.div>
      <div className="py-[var(--space-120-180)]">
        <FooterCtaCard
          mealTransition={footerCtaData.mealTransition}
          petFood={footerCtaData.petFood}
        />
      </div>
    </MainLayout>
  );
}

export default Page;
