"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import Image from "next/image";

const variants = {
  default: "file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input flex h-9 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
  roundedEdgeInput: "w-full h-12 rounded-full border border-[#A1A1A1] outline-none bg-[#FDFFF4] px-4 py-2 text-base"
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
        src={showPassword ? "icons/password-icon.svg" : "icons/password-icon.svg"}
        alt="Toggle password visibility"
        width={20}
        height={20}
      />
    </button>
  )}
</div>

  );
}

export { Input };
