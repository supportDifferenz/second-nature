"use client";

// BlogListCard.tsx
import Typography from "@/components/atoms/typography/Typography";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import React, { startTransition } from "react";
import { useRouter } from "next/navigation";

type BlogCardProps = {
  title: string;
  description: string;
  image: string;
};

export default function BlogListCard({ title, description, image }: BlogCardProps) {

  const router = useRouter();

  return (
    <div onClick={() => {
      startTransition(() => {
        router.push("/blogs/blog-detail");
      })
    }}>
      <div className="lg:w-full relative">
        <Image
          src={image}
          fill
          alt={title}
          className="!static w-full h-full object-cover object-center"
        />
      </div>
      <div>
        <div className="flex flex-col gap-[var(--space-10-15)] mt-[var(--space-20-30)] mb-[var(--space-20-40)]">
          <Typography tag="h5" text={title} className="text-primary-dark" />
          <Typography tag="p" text={description} />
        </div>
        <Button size={"md"} variant={"primaryBtn"} className="w-fit text-white">
          Read More
        </Button>
      </div>
    </div>
  );
}
