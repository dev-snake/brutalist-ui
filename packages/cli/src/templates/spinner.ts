export const spinnerTemplate = (utilsAlias: string) => `"use client";

import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "${utilsAlias}";

const spinnerVariants = cva("animate-spin", {
    variants: {
        variant: {
            default: "text-black dark:text-white",
            primary: "text-[#FF6B6B]",
            secondary: "text-[#4ECDC4]",
            accent: "text-[#FFE66D]",
        },
        size: {
            sm: "h-4 w-4",
            default: "h-6 w-6",
            lg: "h-8 w-8",
            xl: "h-12 w-12",
        },
    },
    defaultVariants: {
        variant: "default",
        size: "default",
    },
});

export interface SpinnerProps
    extends React.SVGAttributes<SVGElement>,
        VariantProps<typeof spinnerVariants> {}

function Spinner({ className, variant, size, ...props }: SpinnerProps) {
    return (
        <svg
            className={cn(spinnerVariants({ variant, size }), className)}
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            {...props}
        >
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
        </svg>
    );
}

function SpinnerDots({ className, variant, size, ...props }: SpinnerProps) {
    return (
        <div className={cn("flex items-center gap-1", className)} {...props}>
            {[0, 1, 2].map((i) => (
                <div
                    key={i}
                    className={cn(
                        "animate-bounce rounded-full bg-current",
                        size === "sm" ? "h-1.5 w-1.5" : size === "lg" ? "h-3 w-3" : size === "xl" ? "h-4 w-4" : "h-2 w-2",
                        variant === "primary" ? "bg-[#FF6B6B]" : variant === "secondary" ? "bg-[#4ECDC4]" : variant === "accent" ? "bg-[#FFE66D]" : "bg-black dark:bg-white"
                    )}
                    style={{ animationDelay: \`\${i * 0.15}s\` }}
                />
            ))}
        </div>
    );
}

function SpinnerBars({ className, variant, size, ...props }: SpinnerProps) {
    return (
        <div className={cn("flex items-end gap-0.5", className)} {...props}>
            {[0, 1, 2, 3].map((i) => (
                <div
                    key={i}
                    className={cn(
                        "animate-pulse",
                        size === "sm" ? "w-1" : size === "lg" ? "w-2" : size === "xl" ? "w-3" : "w-1.5",
                        variant === "primary" ? "bg-[#FF6B6B]" : variant === "secondary" ? "bg-[#4ECDC4]" : variant === "accent" ? "bg-[#FFE66D]" : "bg-black dark:bg-white"
                    )}
                    style={{
                        height: size === "sm" ? "12px" : size === "lg" ? "24px" : size === "xl" ? "32px" : "16px",
                        animationDelay: \`\${i * 0.1}s\`,
                    }}
                />
            ))}
        </div>
    );
}

export { Spinner, SpinnerDots, SpinnerBars, spinnerVariants };
`;
