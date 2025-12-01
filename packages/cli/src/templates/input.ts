export const inputTemplate = (utilsAlias: string) => `"use client";

import * as React from "react";
import { cn } from "${utilsAlias}";

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
    ({ className, type, ...props }, ref) => {
        return (
            <input
                type={type}
                className={cn(
                    "flex h-10 w-full border-3 border-black dark:border-white bg-white dark:bg-gray-900 px-3 py-2 text-sm font-medium placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black dark:focus:ring-white disabled:cursor-not-allowed disabled:opacity-50",
                    className
                )}
                ref={ref}
                {...props}
            />
        );
    }
);
Input.displayName = "Input";

export { Input };
`;
