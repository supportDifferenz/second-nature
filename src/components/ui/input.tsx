"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import Image from "next/image";

const variants = {
  default: "file:text-foreground !font-normal placeholder:text-muted-foreground placeholder:text-[#9B9B9B] selection:bg-primary selection:text-white dark:bg-input/30 flex h-(--space-50-60) w-full min-w-0 rounded-xl border border-[#A1A1A1] bg-transparent px-6  h6  transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent   disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50   aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
  roundedEdgeInput: "w-full h-12 rounded-full border border-[#A1A1A1] outline-none bg-[#FDFFF4] px-4 py-2 ",
  roundedEdgeInputLg: "w-full h-13 sm:h-15  rounded-full border border-[#A1A1A1] outline-none bg-white px-4 py-2 ",
  dottedInput: "w-full h-13 rounded-full border-2 border-dashed border-[#C98A50] outline-none bg-[#F1F5DB] px-4 py-2 ",
};

function Input({ className, type, variant = "default", ...props }: React.ComponentProps<"input"> & { variant?: keyof typeof variants }) {
  const [showPassword, setShowPassword] = React.useState(false);
  
  const isPassword = type === "password" && variant === "roundedEdgeInput";

  return (

<div className="relative w-full">
  <input
    type={isPassword && showPassword ? "text" : type}
    data-slot="input"
    className={cn(variants[variant], className, "pr-10")}
    {...props}
  />
  {isPassword && (
    <button
      type="button"
      className="absolute inset-y-0 right-3 flex items-center text-gray-500"
      onClick={() => setShowPassword((prev) => !prev)}
    >
      <Image
        src={showPassword ? "icons/password-icon.svg" : "icons/password-icon-hide.svg"}
        alt={showPassword ? "Show password" : "Hide password"}
        width={20}
        height={20}
      />
    </button>
  )}
</div>

  );
}

export { Input };
