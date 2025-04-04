"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const menuItems = [
  {
    name: "Personal Info",
    href: "/personal-information",
    icon: "👤",
  },
  { name: "Password", href: "/password-management", icon: "🔑" },
  { name: "Addresses", href: "/addresses", icon: "📦" },
  { name: "Payment", href: "/payment-methods", icon: "💳" },
  { name: "Order History", href: "/order-history", icon: "📜" },
  {
    name: "Edit Pet Info",
    href: "/edit-pet-information",
    icon: "🐾",
  },
];

export default function DashboardMenu() {
  const pathname = usePathname();

  return (
    <aside className="w-64 bg-gray-200 p-6 min-h-screen">
      <nav className="space-y-4">
        {menuItems.map((item, index) => {
          const isActive =
            pathname === item.href ||
            (pathname === "/dashboard" && index === 0);

          return (
            <Link key={item.href} href={item.href}>
              <div
                className={`flex items-center p-3 rounded-lg cursor-pointer transition ${
                  isActive ? "bg-blue-500 text-white" : "hover:bg-gray-300"
                }`}
              >
                <span className="mr-3">{item.icon}</span>
                {item.name}
              </div>
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}
