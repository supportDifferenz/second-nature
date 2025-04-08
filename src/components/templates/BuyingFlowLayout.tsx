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
        <div className="portrait:min-h-[500px] portrait:h-[98dvh] landscape:min-h-[450px] landscape:h-[calc(95dvh-110px)] landscape:max-h-[800px] flex flex-col items-center justify-start ">
          <div className="container mb-4 text-center border w-full ">
            <CheckoutProgressBar currentStep={step} />
          </div>
          {/* pets name */}
          <ul className="flex items-center gap-5 pt-[5dvh] pb-[3dvh]">
            <li className="font-bold underline">Jacky</li>
     
          </ul>
          <div className="container border grow  flex flex-col">{children}</div>
        </div>
      </main>
    </>
  );
}
