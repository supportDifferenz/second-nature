import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center cursor-pointer border-[1.5px] whitespace-nowrap font-bold rounded-4xl text-(--fs-button-primary) capitalize transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-(--size-14-24) [&_img:not([class*='w-'])]:w-(--size-14-24) shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
  {
    variants: {
      variant: {


       
        outlinePrimaryBtn:
          "bg-transparent border-secondary-1 hover:border-[#823234] ",

        secondary:
          "bg-secondary text-secondary-foreground shadow-xs hover:bg-secondary/80",

        link: "text-primary underline-offset-4 hover:underline",

        primaryBtn:
          "bg-secondary-1 border-secondary-1 hover:border-[#823234] hover:bg-[#823234] shadow-[0px_6px_21px_rgba(0,0,0,0.44)] text-white",
        secondaryBtn:
          "bg-primary-light border-primary-light hover:border-[#d7d9cd] hover:bg-[#d7d9cd] shadow-[0px_6px_21px_rgba(0,0,0,0.44)] text-[#909090]",
      },
      size: {
        primary: "py-(--space-8-13) px-(--space-27-34) ",
        outlinePrimary: "py-(--space-8-13) px-(--space-27-34) ",
        sm: "h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5",
        lg: "h-10 rounded-md px-6 has-[>svg]:px-4",
        icon: "size-(--size-14-24)",
      },
    },
    defaultVariants: {
      variant: "primaryBtn",
      size: "primary",
    },
  }
)

function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean
  }) {
  const Comp = asChild ? Slot : "button"

  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  )
}

export { Button, buttonVariants }
