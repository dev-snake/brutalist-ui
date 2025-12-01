export const badgeTemplate = (utilsAlias: string) => `"use client";

import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "${utilsAlias}";

const badgeVariants = cva(
    "inline-flex items-center border-2 border-black dark:border-white px-2.5 py-0.5 text-xs font-bold transition-colors",
    {
        variants: {
            variant: {
                default: "bg-white text-black",
                primary: "bg-[#FF6B6B] text-white",
                secondary: "bg-[#4ECDC4] text-white",
                accent: "bg-[#FFE66D] text-black",
                outline: "bg-transparent",
            },
        },
        defaultVariants: {
            variant: "default",
        },
    }
);

export interface BadgeProps
    extends React.HTMLAttributes<HTMLDivElement>,
        VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
    return <div className={cn(badgeVariants({ variant }), className)} {...props} />;
}

export { Badge, badgeVariants };
`;
