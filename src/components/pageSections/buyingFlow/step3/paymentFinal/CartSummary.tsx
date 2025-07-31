"use client";

import Typography from "@/components/atoms/typography/Typography";
import CardItem from "@/components/molecules/cartItem/CardItem";
import PromoCode from "@/components/molecules/promoCode/PromoCode";
import React, { useState } from "react";
import { usePetStore } from "@/zustand/store/petDataStore";

export default function CartSummary() {
  const { pets } = usePetStore();
  console.log("Pets in cart summary", pets);

  const totalPrice = pets.reduce((sum, pet) => {
    const price = Number(pet.planPrice) || 0;
    return sum + price;
  }, 0);
  console.log("Total price in cart summary", totalPrice);

  const [productPrice, setProductPrice] = useState<number>(totalPrice);

  return (
    <div className="bg-[#F1F5DB] lg:max-h-[95vh] py-[var(--space-30-60)] rounded-2xl border border-[#C5C5C5]">
      <div>
        <Typography
          tag="h5"
          text="Cart Summary"
          className="uppercase text-primary-dark px-[var(--space-30-60)] text-center sm:text-start "
        />
      </div>
      <div className="relative my-12 lg:mt-5">
        {/* Scrollable content */}
        <div className="scroll-container relative z-0 flex flex-col gap-12 sm:gap-0 pr-[var(--space-30-60)] overflow-y-auto lg:max-h-[25vh] my-scrollbar">
          {pets.map((petDetails) => (
            <CardItem
              key={petDetails.id ?? ""}
              petName={petDetails.name ?? ""}
              planType={petDetails.planType ?? ""}
              planPrice={petDetails.planPrice ?? 0}
              protein={petDetails.protein ?? ""}
            />
          ))}
        </div>

        {/* Top gradient overlay */}
        <div className="pointer-events-none absolute top-0 left-0 w-full h-6 bg-gradient-to-b from-[#F1F5DB] to-transparent z-10" />

        {/* Bottom gradient overlay */}
        <div className="pointer-events-none absolute bottom-0 left-0 w-full h-6 bg-gradient-to-t from-[#F1F5DB] to-transparent z-10" />
      </div>

      <div className="flex flex-col gap-[var(--space-20-30)] border-y border-[#CAD585] pt-[var(--space-32-52)] pb-[var(--space-10-20)] mx-[var(--space-30-60)]">
        <Typography
          tag="h6"
          text="caption Promo/referal code"
          className="uppercase text-primary-dark"
        />
        <PromoCode
          totalPrice={totalPrice}
          productPrice={productPrice}
          setProductPrice={setProductPrice}
        />
      </div>
      <div className="flex justify-between pt-[var(--space-33-42)] mx-[var(--space-30-60)]">
        <Typography
          tag="h6"
          text="Order total"
          className="caption uppercase !font-normal text-primary-dark"
        />
        <Typography
          tag="h5"
          text={productPrice.toFixed(3)}
          className="text-primary-dark !font-bold"
        >
          <Typography tag="span" text=" QAR" className="text-primary-dark " />
        </Typography>
      </div>
    </div>
  );
}
