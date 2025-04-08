import { ReactNode } from "react";
import Header from "../organism/header/Header";
import CheckoutProgressBar from "../molecules/checkoutProgressBar/CheckoutProgressBar";

export default function BuyingFlowLayout({
  children,
  step,
}: {
  children: ReactNode;
  step: number;
}) {
  return (
    <>
      <Header isOnlyBrandHeader={true} />
      <main className="border mt-3">
        <div className=" min-h-[calc(100dvh-110px)] flex flex-col items-center justify-start ">
          <div className="container mb-4 text-center border w-full ">
            <CheckoutProgressBar currentStep={step} />
          </div>
          <div className="container border grow bg-amber-900 flex flex-col">{children}</div>
        </div>
      </main>
    </>
  );
}
