// components/templates/DashboardLayout.tsx
import { ReactNode } from "react";
import DashboardMenu from "@/components/pageSections/dashboard/DashboardMenu";
import Footer from "../organism/footer/Footer";
import Header from "../organism/header/Header";

export default function DashboardLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <Header />
      <main className="mt-6 lg:mt-10">
        <div className="container flex flex-col lg:flex-row gap-(--space-20-60) pb-16 min-h-[60vh] lg:min-h-screen ">
          {/* Sidebar */}
          <div className="overflow-x-auto lg:overflow-visible ">
            <DashboardMenu />
          </div>

          {/* Main Content */}
          <div className="grow p-6 sm:p-8  bg-primary-light rounded-2xl">
            {children}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
