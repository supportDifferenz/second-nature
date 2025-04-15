"use client"

import * as React from "react"
import * as RadioGroupPrimitive from "@radix-ui/react-radio-group"
import Image from "next/image"
import { cn } from "@/lib/utils"

function RadioGroup({
  className,
  ...props
}: React.ComponentProps<typeof RadioGroupPrimitive.Root>) {
  return (
    <RadioGroupPrimitive.Root
      data-slot="radio-group"
      className={cn("grid gap-3", className)}
      {...props}
    />
  )
}

function RadioGroupItem({
  className,
  value,
  ...props
}: React.ComponentProps<typeof RadioGroupPrimitive.Item>) {
  return (
    <RadioGroupPrimitive.Item
      data-slot="radio-group-item"
      value={value}
      className={cn("relative group", className)} // 👈 Add group here
      {...props}
    >
      <div className="w-5 h-5 rounded-full pointer-events-none">
        {/* unchecked icon (default) */}
        <Image
          src="/icons/unchecked-default.svg"
          alt="unchecked"
          fill
          className="!static w-fit h-full group-[data-state=checked]:hidden" // 👈 Update here
        />
        {/* checked icon (only shows when selected) */}
        <Image
          src="/icons/checked.svg"
          alt="checked"
          fill
          className="!static w-fit h-full hidden group-[data-state=checked]:block" // 👈 Update here
        />
      </div>
    </RadioGroupPrimitive.Item>
  )
}

export { RadioGroup, RadioGroupItem }
