import Typography from "@/components/atoms/typography/Typography";
import Image from "next/image";
import React from "react";

interface CardItemProps {
  // key: string;
  petName: string;
  planType: string;
  planPrice: number;
  protein: string;
  discountPercentage: number;
}

export default function CardItem({ petName, planType, planPrice, protein, discountPercentage }: CardItemProps) {

  const priceAfterDiscount = planType === "Regular" ? planPrice * (1 - (discountPercentage / 100)) : planPrice;

  return (
    <div className="flex">
      <div className="w-[23.3vw] lg:w-[11.22vw] h-full">
        <Image
          src="/images/cart-cardboard.webp"
          alt="meal bowl"
          className="!static inset-0 w-full !h-full object-cover object-center"
          fill
        />
      </div>
      <div className="flex flex-col gap-2 mt-[var(--space-8-30)]">
        <div>
          <Typography
            tag="h6"
            text={`${petName}'s Plan`}
            // text="Jackey’s Plan"
            className="text-primary-dark capitalize"
          />
          <Typography
            tag="sub"
            text={`${planType.charAt(0).toUpperCase() + planType.slice(1)} Plan`}
            // text="Regular Plan"
            className="text-primary-dark text-[14px]"
          />
        </div>
        <div>
          <Typography
            tag="sub"
            text={`${protein.charAt(0).toUpperCase() + protein.slice(1)} Bowl`}
            // text="Chicken Bowl"
            className="text-[14px]"
          />
        </div>
      </div>
      <div className="flex flex-col gap-2 ml-auto mt-[var(--space-8-30)]">
        {
          planType === "Regular" && (
            <Typography 
              tag="h6"
              text={`${planPrice} QAR`}
              // text="400.00 QAR"
              className="text-text-color line-through" 
            />
          )
        }
        <Typography 
          tag="h6"
          text={`${priceAfterDiscount} QAR`}
          // text={`${planPrice} QAR`}
          // text="400.00 QAR"
          className="text-primary-dark" 
        />
      </div>
    </div>
  );
}
