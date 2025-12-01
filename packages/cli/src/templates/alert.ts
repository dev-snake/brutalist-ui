export const alertTemplate = (utilsAlias: string) => `"use client";

import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "${utilsAlias}";

const alertVariants = cva(
    "relative w-full border-3 border-black dark:border-white p-4 [&>svg~*]:pl-7 [&>svg+div]:translate-y-[-3px] [&>svg]:absolute [&>svg]:left-4 [&>svg]:top-4 [&>svg]:text-foreground",
    {
        variants: {
            variant: {
                default: "bg-white dark:bg-gray-900 text-black dark:text-white",
                success: "bg-green-100 dark:bg-green-900 text-green-900 dark:text-green-100",
                warning: "bg-yellow-100 dark:bg-yellow-900 text-yellow-900 dark:text-yellow-100",
                danger: "bg-red-100 dark:bg-red-900 text-red-900 dark:text-red-100",
                info: "bg-blue-100 dark:bg-blue-900 text-blue-900 dark:text-blue-100",
            },
        },
        defaultVariants: {
            variant: "default",
        },
    }
);

const Alert = React.forwardRef<
    HTMLDivElement,
    React.HTMLAttributes<HTMLDivElement> & VariantProps<typeof alertVariants>
>(({ className, variant, ...props }, ref) => (
    <div ref={ref} role="alert" className={cn(alertVariants({ variant }), className)} {...props} />
));
Alert.displayName = "Alert";

const AlertTitle = React.forwardRef<HTMLParagraphElement, React.HTMLAttributes<HTMLHeadingElement>>(
    ({ className, ...props }, ref) => (
        <h5 ref={ref} className={cn("mb-1 font-black leading-none tracking-tight", className)} {...props} />
    )
);
AlertTitle.displayName = "AlertTitle";

const AlertDescription = React.forwardRef<HTMLParagraphElement, React.HTMLAttributes<HTMLParagraphElement>>(
    ({ className, ...props }, ref) => (
        <div ref={ref} className={cn("text-sm [&_p]:leading-relaxed", className)} {...props} />
    )
);
AlertDescription.displayName = "AlertDescription";

export { Alert, AlertTitle, AlertDescription };
`;
