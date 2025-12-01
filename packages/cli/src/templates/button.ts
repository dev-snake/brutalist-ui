export const buttonTemplate = (utilsAlias: string) => `"use client";

import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "${utilsAlias}";

const buttonVariants = cva(
    "inline-flex items-center justify-center gap-2 whitespace-nowrap font-bold transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border-3 border-black dark:border-white",
    {
        variants: {
            variant: {
                default: "bg-white text-black hover:shadow-brutal active:translate-x-[2px] active:translate-y-[2px] active:shadow-none",
                primary: "bg-[#FF6B6B] text-white hover:shadow-brutal active:translate-x-[2px] active:translate-y-[2px] active:shadow-none",
                secondary: "bg-[#4ECDC4] text-white hover:shadow-brutal active:translate-x-[2px] active:translate-y-[2px] active:shadow-none",
                accent: "bg-[#FFE66D] text-black hover:shadow-brutal active:translate-x-[2px] active:translate-y-[2px] active:shadow-none",
                danger: "bg-red-500 text-white hover:shadow-brutal active:translate-x-[2px] active:translate-y-[2px] active:shadow-none",
                success: "bg-green-500 text-white hover:shadow-brutal active:translate-x-[2px] active:translate-y-[2px] active:shadow-none",
                outline: "bg-transparent hover:bg-gray-100 dark:hover:bg-gray-800",
                ghost: "border-transparent hover:bg-gray-100 dark:hover:bg-gray-800",
                link: "border-transparent underline-offset-4 hover:underline text-black dark:text-white",
            },
            size: {
                default: "h-10 px-4 py-2",
                sm: "h-8 px-3 text-sm",
                lg: "h-12 px-6 text-lg",
                xl: "h-14 px-8 text-xl",
                icon: "h-10 w-10",
            },
        },
        defaultVariants: {
            variant: "default",
            size: "default",
        },
    }
);

export interface ButtonProps
    extends React.ButtonHTMLAttributes<HTMLButtonElement>,
        VariantProps<typeof buttonVariants> {
    asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant, size, asChild = false, ...props }, ref) => {
        const Comp = asChild ? Slot : "button";
        return (
            <Comp
                className={cn(buttonVariants({ variant, size, className }))}
                ref={ref}
                {...props}
            />
        );
    }
);
Button.displayName = "Button";

export { Button, buttonVariants };
`;
