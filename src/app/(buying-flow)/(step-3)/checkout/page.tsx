import React from "react";
import CartSummary from "@/components/pageSections/buyingFlow/step3/paymentFinal/CartSummary";
import FormSection from "@/components/pageSections/buyingFlow/step3/paymentFinal/FormSection";
import BuyingFlowLayout from "@/components/templates/BuyingFlowLayout";

export default function PaymentFinal() {
  return (
    <BuyingFlowLayout step={3}>
      <div className="flex flex-col lg:flex-row gap-[30.84vw] lg:gap-[3.8vw] pb-[100px] mt-14">
        <div className="order-2 lg:order-1 flex-1">
          <FormSection />
        </div>
        <div className="order-1 lg:order-2 flex-1">
          <div className="lg:sticky lg:top-6 lg:mb-3">
            <CartSummary />
          </div>
        </div>
      </div>
    </BuyingFlowLayout>
  );
}
