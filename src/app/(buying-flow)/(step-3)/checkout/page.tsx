import CartSummary from "@/components/pageSections/buyingFlow/step3/paymentFinal/CartSummary";
import FormSection from "@/components/pageSections/buyingFlow/step3/paymentFinal/FormSection";
import React from "react";

export default function PaymentFinal() {
  return (
    <div className="flex flex-col lg:flex-row gap-[30.84vw] lg:gap-[3.8vw]  px-[4.67vw] lg:px-[9.89vw]">
      <div className="order-2 lg:order-1 flex-1">
        <FormSection />
      </div>
      <div className="order-1 lg:order-2 flex-1">
        <CartSummary />
      </div>
    </div>
  );
}
