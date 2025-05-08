"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import useAuthStore from "@/zustand/store/authDataStore";
import { useUserStore } from "@/zustand/store/userDataStore";
import { usePetStore } from "@/zustand/store/petDataStore";
import { useRouter } from "next/navigation";

const menuItems = [
  {
    name: "personal information",
    href: "/personal-information",
    icon: "/icons/personal-information.svg",
  },
  {
    name: "password management",
    href: "/password-management",
    icon: "/icons/password-management.svg",
  },
  { name: "addresses", href: "/addresses", icon: "/icons/addresses.svg" },
  {
    name: "payment methods",
    href: "/payment-methods",
    icon: "/icons/payment-methods.svg",
  },
  {
    name: "order history",
    href: "/order-history",
    icon: "/icons/order-history.svg",
  },
  {
    name: "edit pet information",
    href: "/edit-pet-information",
    icon: "/icons/edit-pet-information.svg",
  }
];

const logoutItem = {
  name: "Logout",
  href: "/",
  icon: "/icons/logout-03.svg",
};

export default function DashboardMenu() {

  const pathname = usePathname();
  const router = useRouter()
  const logout = useAuthStore((state) => state.logout);
  const { clearPetDetails } = usePetStore();
  const { clearUserDetails } = useUserStore();

  const handleLogout = () => {
      logout();
      clearUserDetails();
      clearPetDetails();
      router.push("/")
  };

  return (
    <aside className="flex flex-col min-w-min lg:bg-primary-light lg:rounded-2xl   lg:p-6 lg:h-[calc(100dvh-85px)] lg:min-h-min lg:sticky lg:top-10 ">
      <nav className="flex lg:flex-col gap-1.5 ">
        {menuItems.map((item, index) => {
          const isActive =
            pathname === item.href ||
            (pathname === "/dashboard" && index === 0);

          return (
            <Link 
              key={item.href} 
              href={item.href}
            >
              <div
                className={`h6 !font-normal flex items-center text-black whitespace-nowrap p-1.5 lg:p-(--space-8-17)  gap-(--space-8-17)  rounded-lg cursor-pointer transition capitalize  ${
                  isActive
                    ? "border lg:border-none border-secondary-1 bg-[#FDFFF4] shadow-lg !font-semibold"
                    : "bg-[#F3F5E8] lg:bg-transparent lg:hover:bg-[#F3F5E8] hover:shadow-md"
                }`}
              >
                <div className="w-(--space-26-32)">
                  <Image
                    src={item.icon}
                    alt={item.name}
                    fill
                    className="!static"
                  />
                </div>
                {item.name}
              </div>
            </Link>
          );
        })}
      </nav>

      {/* Logout button at the bottom */}
      <div className="mt-auto">
        <div
          onClick={handleLogout}
          className="h6 !font-normal flex items-center text-black whitespace-nowrap p-1.5 lg:p-(--space-8-17) gap-(--space-8-17) rounded-lg cursor-pointer transition capitalize bg-[#F3F5E8] lg:bg-transparent lg:hover:bg-[#F3F5E8] hover:shadow-md"
        >
          <div className="w-(--space-26-32)">
            <Image
              src={logoutItem.icon}
              alt={logoutItem.name}
              fill
              className="!static"
            />
          </div>
          {logoutItem.name}
        </div>
      </div>

    </aside>
  );
}
