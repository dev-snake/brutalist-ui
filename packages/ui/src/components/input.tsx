import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '../lib/utils';

const inputVariants = cva(
    [
        'flex w-full',
        'border-3 border-black dark:border-white',
        'bg-white dark:bg-gray-900 dark:text-white',
        'font-medium',
        'placeholder:text-gray-400 dark:placeholder:text-gray-500 placeholder:font-normal',
        'transition-all duration-150',
        'focus:outline-none focus:shadow-[4px_4px_0px_0px_#000000] dark:focus:shadow-[4px_4px_0px_0px_#FFFFFF]',
        'disabled:cursor-not-allowed disabled:opacity-50 disabled:bg-gray-100 dark:disabled:bg-gray-800',
    ],
    {
        variants: {
            variant: {
                default: '',
                error: 'border-[#EF476F] focus:shadow-[4px_4px_0px_0px_#EF476F]',
                success: 'border-[#7FB069] focus:shadow-[4px_4px_0px_0px_#7FB069]',
            },
            inputSize: {
                sm: 'h-9 px-3 py-1 text-sm',
                default: 'h-11 px-4 py-2 text-base',
                lg: 'h-14 px-5 py-3 text-lg',
            },
        },
        defaultVariants: {
            variant: 'default',
            inputSize: 'default',
        },
    }
);

export interface InputProps
    extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'>,
        VariantProps<typeof inputVariants> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
    ({ className, variant, inputSize, type, ...props }, ref) => {
        return (
            <input
                type={type}
                className={cn(inputVariants({ variant, inputSize, className }))}
                ref={ref}
                {...props}
            />
        );
    }
);
Input.displayName = 'Input';

export { Input, inputVariants };
