// components/templates/DashboardLayout.tsx
import { ReactNode } from "react";
import DashboardMenu from "@/components/pages/dashboard/DashboardMenu";

export default function DashboardLayout({ children }: { children: ReactNode }) {
  return (
    <main>
      <div className="container flex flex-col lg:flex-row gap-(--space-20-60) min-h-screen ">
        {/* Sidebar */}
        <div className="overflow-x-auto lg:overflow-visible  ">
          <DashboardMenu />
        </div>

        {/* Main Content */}
        <div className="grow p-6 sm:p-8  bg-primary-light rounded-2xl">
          {children}
        </div>
      </div>
    </main>
  );
}
