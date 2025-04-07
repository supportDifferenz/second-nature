import { ReactNode } from "react";
import Header from "../organism/header/Header";

export default function BuyingFlowLayout({
  children,
  step,
  title,
}: {
  children: ReactNode;
  step: number;
  title: string;
}) {
  return (
    <>
      <Header isOnlyBrandHeader={true}/>
      <main>
        <div className="min-h-screen flex flex-col items-center justify-start pt-12 px-4">
          <div className="mb-4 text-center">
            <p className="text-gray-500">
              Step {step} of 3 – Pet's Information
            </p>
            <h3 className="text-xl mt-4">{title}</h3>
          </div>
          {children}
        </div>
      </main>
    </>
  );
}
