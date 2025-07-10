import Image from "next/image";
import { ReactNode } from "react";
import Header from "../organism/header/Header";

interface AuthLayoutProps {
  children: ReactNode;
}

export default function AuthLayout({ children }: AuthLayoutProps) {
  return (
    <>
      <Header />
      <main>
        <div className="flex flex-col container lg:flex-row gap-3 sm:gap-5 lg:gap-0 lg:pt-7 justify-between ">
          {/* static banner */}
          <div className="lg:w-[52vw] lg:rounded-2xl order-2 sm:order-1">
          {/* <div className="lg:w-[46.87vw] order-2 sm:order-1"> */}
            <Image
              src="/images/login-banner-web.webp"
              alt="mission"
              className="!static inset-0 w-full !h-full object-cover object-center max-sm:hidden lg:rounded-2xl"
              fill
              priority
            />
          </div>
          <div className="order-1 sm:order-2">{children}</div>
        </div>
      </main>
    </>
  );
}
