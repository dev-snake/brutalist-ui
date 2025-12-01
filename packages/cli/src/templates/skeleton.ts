export const skeletonTemplate = (utilsAlias: string) => `"use client";

import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "${utilsAlias}";

const skeletonVariants = cva("animate-pulse border-3 border-black dark:border-white", {
    variants: {
        variant: {
            default: "bg-gray-200 dark:bg-gray-700",
            primary: "bg-[#FF6B6B]/30",
            secondary: "bg-[#4ECDC4]/30",
            accent: "bg-[#FFE66D]/30",
        },
    },
    defaultVariants: {
        variant: "default",
    },
});

export interface SkeletonProps
    extends React.HTMLAttributes<HTMLDivElement>,
        VariantProps<typeof skeletonVariants> {}

function Skeleton({ className, variant, ...props }: SkeletonProps) {
    return <div className={cn(skeletonVariants({ variant }), className)} {...props} />;
}

function SkeletonText({ className, lines = 3, ...props }: SkeletonProps & { lines?: number }) {
    return (
        <div className={cn("space-y-2", className)} {...props}>
            {Array.from({ length: lines }).map((_, i) => (
                <Skeleton key={i} className={cn("h-4", i === lines - 1 ? "w-4/5" : "w-full")} />
            ))}
        </div>
    );
}

function SkeletonCard({ className, ...props }: SkeletonProps) {
    return (
        <div className={cn("p-4 space-y-4 border-3 border-black dark:border-white", className)} {...props}>
            <Skeleton className="h-40 w-full" />
            <SkeletonText lines={2} />
        </div>
    );
}

function SkeletonAvatar({ className, size = "default", ...props }: SkeletonProps & { size?: "sm" | "default" | "lg" }) {
    const sizeClasses = {
        sm: "h-8 w-8",
        default: "h-10 w-10",
        lg: "h-14 w-14",
    };
    return <Skeleton className={cn("rounded-full", sizeClasses[size], className)} {...props} />;
}

export { Skeleton, SkeletonText, SkeletonCard, SkeletonAvatar, skeletonVariants };
`;
