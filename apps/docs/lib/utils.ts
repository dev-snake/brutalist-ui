import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

/**
 * Merge Tailwind CSS classes with clsx and tailwind-merge
 */
export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

/**
 * Create a variant class based on conditions
 */
export function getVariantClass(
    variants: Record<string, string>,
    variant: string,
    fallback: string = ''
): string {
    return variants[variant] || fallback;
}

/**
 * Common brutalism class combinations
 */
export const brutalismClasses = {
    base: 'nb-border nb-shadow nb-font nb-no-radius nb-transition',
    interactive: 'nb-hover nb-active nb-focus nb-disabled',
    button: 'nb-btn',
    card: 'nb-card',
    input: 'nb-input',
} as const;
