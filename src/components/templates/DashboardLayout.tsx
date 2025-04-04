// components/templates/DashboardLayout.tsx
import { ReactNode } from "react";
import DashboardMenu from "@/components/pages/dashboard/DashboardMenu";

export default function DashboardLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <DashboardMenu />

      {/* Main Content */}
      <main className="flex-1 p-6">{children}</main>
    </div>
  );
}
