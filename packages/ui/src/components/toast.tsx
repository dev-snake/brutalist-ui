'use client';

import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { X, CheckCircle, AlertCircle, AlertTriangle, Info, Zap } from 'lucide-react';
import { cn } from '../lib/utils';

const toastVariants = cva(
    [
        'pointer-events-auto relative w-full overflow-hidden',
        'border-3 border-black dark:border-white',
        'transition-all duration-300 ease-out',
        'animate-in slide-in-from-right-full fade-in-0',
    ],
    {
        variants: {
            variant: {
                default: [
                    'bg-white dark:bg-gray-900 text-black dark:text-white',
                    'shadow-[6px_6px_0px_0px_#000000] dark:shadow-[6px_6px_0px_0px_#FFFFFF]',
                ],
                success: [
                    'bg-[#7FB069] text-black dark:bg-[#2d4a28] dark:text-white',
                    'shadow-[6px_6px_0px_0px_#000000] dark:shadow-[6px_6px_0px_0px_#FFFFFF]',
                ],
                error: [
                    'bg-[#FF6B6B] text-black dark:bg-[#7a2d2d] dark:text-white',
                    'shadow-[6px_6px_0px_0px_#000000] dark:shadow-[6px_6px_0px_0px_#FFFFFF]',
                ],
                warning: [
                    'bg-[#FFE66D] text-black dark:bg-[#6b5a1f] dark:text-white',
                    'shadow-[6px_6px_0px_0px_#000000] dark:shadow-[6px_6px_0px_0px_#FFFFFF]',
                ],
                info: [
                    'bg-[#4ECDC4] text-black dark:bg-[#1f5450] dark:text-white',
                    'shadow-[6px_6px_0px_0px_#000000] dark:shadow-[6px_6px_0px_0px_#FFFFFF]',
                ],
            },
            size: {
                sm: 'max-w-xs',
                default: 'max-w-sm',
                lg: 'max-w-md',
            },
        },
        defaultVariants: {
            variant: 'default',
            size: 'default',
        },
    }
);

export interface ToastProps
    extends React.HTMLAttributes<HTMLDivElement>,
        VariantProps<typeof toastVariants> {
    title?: string;
    description?: string;
    onClose?: () => void;
    icon?: React.ReactNode;
    action?: React.ReactNode;
    duration?: number;
}

const Toast = React.forwardRef<HTMLDivElement, ToastProps>(
    (
        {
            className,
            variant,
            size,
            title,
            description,
            onClose,
            icon,
            action,
            duration = 5000,
            children,
            ...props
        },
        ref
    ) => {
        const [isLeaving, setIsLeaving] = React.useState(false);

        React.useEffect(() => {
            if (duration && onClose) {
                const timer = setTimeout(() => {
                    setIsLeaving(true);
                    setTimeout(() => onClose(), 200);
                }, duration);
                return () => clearTimeout(timer);
            }
            return undefined;
        }, [duration, onClose]);

        const getDefaultIcon = (): React.ReactNode | null => {
            const iconClass = 'h-6 w-6 stroke-[2.5] flex-shrink-0';
            switch (variant) {
                case 'success':
                    return <CheckCircle className={iconClass} />;
                case 'error':
                    return <AlertCircle className={iconClass} />;
                case 'warning':
                    return <AlertTriangle className={iconClass} />;
                case 'info':
                    return <Info className={iconClass} />;
                default:
                    return <Zap className={iconClass} />;
            }
        };

        const defaultIcon = getDefaultIcon();

        return (
            <div
                ref={ref}
                className={cn(
                    toastVariants({ variant, size }),
                    isLeaving && 'animate-out slide-out-to-right-full fade-out-0',
                    className
                )}
                role="alert"
                {...props}
            >
                {/* Progress bar */}
                {duration && onClose && (
                    <div className="absolute top-0 left-0 right-0 h-1 bg-black/10 dark:bg-white/10 overflow-hidden">
                        <div
                            className="h-full bg-black/30 dark:bg-white/30"
                            style={{
                                animation: `shrink ${duration}ms linear forwards`,
                            }}
                        />
                    </div>
                )}

                <div className="flex items-start gap-4 p-4 pt-5">
                    {/* Icon */}
                    {(icon || defaultIcon) && (
                        <div className="flex-shrink-0 mt-0.5">{icon || defaultIcon}</div>
                    )}

                    {/* Content */}
                    <div className="flex-1 min-w-0">
                        {title && <p className="font-black text-base leading-tight">{title}</p>}
                        {description && (
                            <p className="font-medium text-sm mt-1 opacity-80 leading-snug">
                                {description}
                            </p>
                        )}
                        {children}

                        {/* Action button */}
                        {action && <div className="mt-3">{action}</div>}
                    </div>

                    {/* Close button */}
                    {onClose && (
                        <button
                            onClick={() => {
                                setIsLeaving(true);
                                setTimeout(() => onClose(), 200);
                            }}
                            className={cn(
                                'flex-shrink-0 h-8 w-8 flex items-center justify-center',
                                'border-2 border-black bg-white',
                                'shadow-[2px_2px_0px_0px_#000000]',
                                'transition-all duration-150',
                                'hover:shadow-[1px_1px_0px_0px_#000000] hover:translate-x-0.5 hover:translate-y-0.5',
                                'active:shadow-none active:translate-x-1 active:translate-y-1',
                                'focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2'
                            )}
                            aria-label="Close"
                        >
                            <X className="h-4 w-4 stroke-[3] dark:text-black" />
                        </button>
                    )}
                </div>
            </div>
        );
    }
);
Toast.displayName = 'Toast';

// Toast Container for positioning
interface ToastContainerProps extends React.HTMLAttributes<HTMLDivElement> {
    position?:
        | 'top-left'
        | 'top-center'
        | 'top-right'
        | 'bottom-left'
        | 'bottom-center'
        | 'bottom-right';
}

const ToastContainer = React.forwardRef<HTMLDivElement, ToastContainerProps>(
    ({ className, position = 'bottom-right', children, ...props }, ref) => {
        const positionClasses = {
            'top-left': 'top-4 left-4 items-start',
            'top-center': 'top-4 left-1/2 -translate-x-1/2 items-center',
            'top-right': 'top-4 right-4 items-end',
            'bottom-left': 'bottom-4 left-4 items-start',
            'bottom-center': 'bottom-4 left-1/2 -translate-x-1/2 items-center',
            'bottom-right': 'bottom-4 right-4 items-end',
        };

        return (
            <>
                <style>{`
                    @keyframes shrink {
                        from { width: 100%; }
                        to { width: 0%; }
                    }
                `}</style>
                <div
                    ref={ref}
                    className={cn(
                        'fixed z-50 flex flex-col gap-3 pointer-events-none p-4',
                        positionClasses[position],
                        className
                    )}
                    {...props}
                >
                    {children}
                </div>
            </>
        );
    }
);
ToastContainer.displayName = 'ToastContainer';

// Simple toast hook
interface ToastItem {
    id: string;
    variant?: ToastProps['variant'];
    title?: string;
    description?: string;
    duration?: number;
    action?: React.ReactNode;
}

function useToast() {
    const [toasts, setToasts] = React.useState<ToastItem[]>([]);

    const addToast = React.useCallback((toast: Omit<ToastItem, 'id'>) => {
        const id = Math.random().toString(36).substr(2, 9);
        setToasts((prev) => [...prev, { ...toast, id }]);
        return id;
    }, []);

    const removeToast = React.useCallback((id: string) => {
        setToasts((prev) => prev.filter((toast) => toast.id !== id));
    }, []);

    const clearToasts = React.useCallback(() => {
        setToasts([]);
    }, []);

    // Shorthand methods
    const success = React.useCallback(
        (title: string, description?: string) => {
            return addToast({ variant: 'success', title, description });
        },
        [addToast]
    );

    const error = React.useCallback(
        (title: string, description?: string) => {
            return addToast({ variant: 'error', title, description });
        },
        [addToast]
    );

    const warning = React.useCallback(
        (title: string, description?: string) => {
            return addToast({ variant: 'warning', title, description });
        },
        [addToast]
    );

    const info = React.useCallback(
        (title: string, description?: string) => {
            return addToast({ variant: 'info', title, description });
        },
        [addToast]
    );

    return {
        toasts,
        addToast,
        removeToast,
        clearToasts,
        success,
        error,
        warning,
        info,
    };
}

export { Toast, ToastContainer, useToast, toastVariants };
export type { ToastContainerProps, ToastItem };
