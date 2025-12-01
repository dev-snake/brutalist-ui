export const toastTemplate = (utilsAlias: string) => `"use client";

import * as React from "react";
import { X } from "lucide-react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "${utilsAlias}";

const toastVariants = cva(
    "relative flex w-full items-start gap-3 border-3 border-black dark:border-white p-4 shadow-brutal transition-all",
    {
        variants: {
            variant: {
                default: "bg-white dark:bg-gray-900 text-black dark:text-white",
                success: "bg-green-100 dark:bg-green-900 text-green-900 dark:text-green-100",
                error: "bg-red-100 dark:bg-red-900 text-red-900 dark:text-red-100",
                warning: "bg-yellow-100 dark:bg-yellow-900 text-yellow-900 dark:text-yellow-100",
                info: "bg-blue-100 dark:bg-blue-900 text-blue-900 dark:text-blue-100",
            },
        },
        defaultVariants: {
            variant: "default",
        },
    }
);

export interface ToastProps
    extends React.HTMLAttributes<HTMLDivElement>,
        VariantProps<typeof toastVariants> {
    title?: string;
    description?: string;
    onClose?: () => void;
    duration?: number;
}

function Toast({ className, variant, title, description, onClose, duration = 5000, ...props }: ToastProps) {
    React.useEffect(() => {
        if (onClose && duration > 0) {
            const timer = setTimeout(onClose, duration);
            return () => clearTimeout(timer);
        }
    }, [onClose, duration]);

    return (
        <div className={cn(toastVariants({ variant }), className)} {...props}>
            <div className="flex-1">
                {title && <div className="font-black">{title}</div>}
                {description && <div className="text-sm mt-1">{description}</div>}
            </div>
            {onClose && (
                <button
                    onClick={onClose}
                    className="p-1 border-2 border-current opacity-70 hover:opacity-100"
                >
                    <X className="h-4 w-4" />
                </button>
            )}
        </div>
    );
}

function ToastContainer({ children, className, position = "bottom-right" }: {
    children: React.ReactNode;
    className?: string;
    position?: "top-left" | "top-right" | "bottom-left" | "bottom-right" | "top-center" | "bottom-center";
}) {
    const positionClasses = {
        "top-left": "top-4 left-4",
        "top-right": "top-4 right-4",
        "bottom-left": "bottom-4 left-4",
        "bottom-right": "bottom-4 right-4",
        "top-center": "top-4 left-1/2 -translate-x-1/2",
        "bottom-center": "bottom-4 left-1/2 -translate-x-1/2",
    };

    return (
        <div className={cn("fixed z-50 flex flex-col gap-2 w-full max-w-sm", positionClasses[position], className)}>
            {children}
        </div>
    );
}

// Hook for managing toasts
interface ToastItem {
    id: string;
    variant?: "default" | "success" | "error" | "warning" | "info";
    title?: string;
    description?: string;
    duration?: number;
}

function useToast() {
    const [toasts, setToasts] = React.useState<ToastItem[]>([]);

    const addToast = React.useCallback((toast: Omit<ToastItem, "id">) => {
        const id = Math.random().toString(36).slice(2);
        setToasts((prev) => [...prev, { ...toast, id }]);
    }, []);

    const removeToast = React.useCallback((id: string) => {
        setToasts((prev) => prev.filter((t) => t.id !== id));
    }, []);

    return { toasts, addToast, removeToast };
}

export { Toast, ToastContainer, useToast, toastVariants };
`;
