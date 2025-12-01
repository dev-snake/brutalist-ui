'use client';

import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '../lib/utils';

// Modern brutalist spinner with thick border
const spinnerVariants = cva(
    ['inline-block rounded-full', 'border-4 border-black dark:border-white', 'animate-spin'],
    {
        variants: {
            size: {
                sm: 'h-5 w-5 border-[3px]',
                default: 'h-8 w-8 border-4',
                lg: 'h-12 w-12 border-[5px]',
                xl: 'h-16 w-16 border-[6px]',
            },
            variant: {
                default: 'border-t-transparent border-r-transparent',
                primary: 'border-[#FF6B6B] border-t-transparent border-r-transparent',
                secondary: 'border-[#4ECDC4] border-t-transparent border-r-transparent',
                accent: 'border-[#FFE66D] border-t-[#000] border-r-[#000] dark:border-t-white dark:border-r-white',
            },
        },
        defaultVariants: {
            size: 'default',
            variant: 'default',
        },
    }
);

export interface SpinnerProps
    extends React.HTMLAttributes<HTMLDivElement>,
        VariantProps<typeof spinnerVariants> {
    label?: string;
}

const Spinner = React.forwardRef<HTMLDivElement, SpinnerProps>(
    ({ className, size, variant, label = 'Loading...', ...props }, ref) => {
        return (
            <div
                ref={ref}
                role="status"
                aria-label={label}
                className={cn(spinnerVariants({ size, variant }), className)}
                {...props}
            >
                <span className="sr-only">{label}</span>
            </div>
        );
    }
);
Spinner.displayName = 'Spinner';

// Brutalist block spinner - 4 animated squares
const blockSpinnerVariants = cva('grid grid-cols-2 gap-1', {
    variants: {
        size: {
            sm: 'h-5 w-5 gap-0.5',
            default: 'h-8 w-8 gap-1',
            lg: 'h-12 w-12 gap-1.5',
            xl: 'h-16 w-16 gap-2',
        },
    },
    defaultVariants: {
        size: 'default',
    },
});

const BlockSpinner = React.forwardRef<
    HTMLDivElement,
    Omit<SpinnerProps, 'variant'> & {
        color?: 'default' | 'primary' | 'secondary' | 'accent' | 'mixed';
    }
>(({ className, size = 'default', color = 'default', label = 'Loading...', ...props }, ref) => {
    const colorMap = {
        default: [
            'bg-black dark:bg-white',
            'bg-black dark:bg-white',
            'bg-black dark:bg-white',
            'bg-black dark:bg-white',
        ],
        primary: ['bg-[#FF6B6B]', 'bg-[#FF6B6B]', 'bg-[#FF6B6B]', 'bg-[#FF6B6B]'],
        secondary: ['bg-[#4ECDC4]', 'bg-[#4ECDC4]', 'bg-[#4ECDC4]', 'bg-[#4ECDC4]'],
        accent: ['bg-[#FFE66D]', 'bg-[#FFE66D]', 'bg-[#FFE66D]', 'bg-[#FFE66D]'],
        mixed: ['bg-[#FF6B6B]', 'bg-[#4ECDC4]', 'bg-[#FFE66D]', 'bg-[#A855F7]'],
    };

    const colors = colorMap[color];

    return (
        <div
            ref={ref}
            role="status"
            aria-label={label}
            className={cn(blockSpinnerVariants({ size }), className)}
            {...props}
        >
            {[0, 1, 2, 3].map((i) => (
                <div
                    key={i}
                    className={cn(
                        'border-2 border-black dark:border-white',
                        colors[i],
                        'animate-pulse'
                    )}
                    style={{
                        animationDelay: `${i * 150}ms`,
                        animationDuration: '600ms',
                    }}
                />
            ))}
            <span className="sr-only">{label}</span>
        </div>
    );
});
BlockSpinner.displayName = 'BlockSpinner';

// Dots spinner - 3 bouncing dots
const DotsSpinner = React.forwardRef<
    HTMLDivElement,
    Omit<SpinnerProps, 'variant'> & { color?: 'default' | 'primary' | 'secondary' | 'accent' }
>(({ className, size = 'default', color = 'default', label = 'Loading...', ...props }, ref) => {
    const sizeMap = {
        sm: 'h-1.5 w-1.5',
        default: 'h-2.5 w-2.5',
        lg: 'h-3.5 w-3.5',
        xl: 'h-5 w-5',
    };

    const gapMap = {
        sm: 'gap-1',
        default: 'gap-2',
        lg: 'gap-3',
        xl: 'gap-4',
    };

    const colorMap = {
        default: 'bg-black dark:bg-white',
        primary: 'bg-[#FF6B6B]',
        secondary: 'bg-[#4ECDC4]',
        accent: 'bg-[#FFE66D]',
    };

    return (
        <div
            ref={ref}
            role="status"
            aria-label={label}
            className={cn('flex items-center', gapMap[size || 'default'], className)}
            {...props}
        >
            {[0, 1, 2].map((i) => (
                <div
                    key={i}
                    className={cn(
                        sizeMap[size || 'default'],
                        'border-2 border-black dark:border-white',
                        colorMap[color],
                        'animate-bounce'
                    )}
                    style={{
                        animationDelay: `${i * 100}ms`,
                        animationDuration: '500ms',
                    }}
                />
            ))}
            <span className="sr-only">{label}</span>
        </div>
    );
});
DotsSpinner.displayName = 'DotsSpinner';

// Bars spinner - 5 animated bars
const BarsSpinner = React.forwardRef<
    HTMLDivElement,
    Omit<SpinnerProps, 'variant'> & {
        color?: 'default' | 'primary' | 'secondary' | 'accent' | 'mixed';
    }
>(({ className, size = 'default', color = 'default', label = 'Loading...', ...props }, ref) => {
    const heightMap = {
        sm: 'h-4',
        default: 'h-6',
        lg: 'h-8',
        xl: 'h-12',
    };

    const barWidthMap = {
        sm: 'w-1',
        default: 'w-1.5',
        lg: 'w-2',
        xl: 'w-3',
    };

    const colorMap = {
        default: [
            'bg-black dark:bg-white',
            'bg-black dark:bg-white',
            'bg-black dark:bg-white',
            'bg-black dark:bg-white',
            'bg-black dark:bg-white',
        ],
        primary: ['bg-[#FF6B6B]', 'bg-[#FF6B6B]', 'bg-[#FF6B6B]', 'bg-[#FF6B6B]', 'bg-[#FF6B6B]'],
        secondary: ['bg-[#4ECDC4]', 'bg-[#4ECDC4]', 'bg-[#4ECDC4]', 'bg-[#4ECDC4]', 'bg-[#4ECDC4]'],
        accent: ['bg-[#FFE66D]', 'bg-[#FFE66D]', 'bg-[#FFE66D]', 'bg-[#FFE66D]', 'bg-[#FFE66D]'],
        mixed: ['bg-[#FF6B6B]', 'bg-[#4ECDC4]', 'bg-[#FFE66D]', 'bg-[#A855F7]', 'bg-[#FF6B6B]'],
    };

    const colors = colorMap[color];

    return (
        <div
            ref={ref}
            role="status"
            aria-label={label}
            className={cn('flex items-end gap-0.5', heightMap[size || 'default'], className)}
            {...props}
        >
            {[0, 1, 2, 3, 4].map((i) => (
                <div
                    key={i}
                    className={cn(
                        barWidthMap[size || 'default'],
                        'border border-black dark:border-white',
                        colors[i],
                        'animate-pulse origin-bottom'
                    )}
                    style={{
                        height: `${40 + Math.sin(i * 0.8) * 30}%`,
                        animationDelay: `${i * 100}ms`,
                        animationDuration: '400ms',
                    }}
                />
            ))}
            <span className="sr-only">{label}</span>
        </div>
    );
});
BarsSpinner.displayName = 'BarsSpinner';

export { Spinner, BlockSpinner, DotsSpinner, BarsSpinner, spinnerVariants, blockSpinnerVariants };
