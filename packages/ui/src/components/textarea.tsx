import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '../lib/utils';

const textareaVariants = cva(
    [
        'flex min-h-[100px] w-full',
        'border-3 border-black',
        'bg-white',
        'font-medium',
        'placeholder:text-gray-400 placeholder:font-normal',
        'transition-all duration-150',
        'focus:outline-none focus:shadow-[4px_4px_0px_0px_#000000]',
        'disabled:cursor-not-allowed disabled:opacity-50 disabled:bg-gray-100',
        'resize-none',
    ],
    {
        variants: {
            variant: {
                default: '',
                error: 'border-[#EF476F] focus:shadow-[4px_4px_0px_0px_#EF476F]',
                success: 'border-[#7FB069] focus:shadow-[4px_4px_0px_0px_#7FB069]',
            },
            textareaSize: {
                sm: 'px-3 py-2 text-sm',
                default: 'px-4 py-3 text-base',
                lg: 'px-5 py-4 text-lg',
            },
        },
        defaultVariants: {
            variant: 'default',
            textareaSize: 'default',
        },
    }
);

export interface TextareaProps
    extends React.TextareaHTMLAttributes<HTMLTextAreaElement>,
        VariantProps<typeof textareaVariants> {}

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
    ({ className, variant, textareaSize, ...props }, ref) => {
        return (
            <textarea
                className={cn(textareaVariants({ variant, textareaSize, className }))}
                ref={ref}
                {...props}
            />
        );
    }
);
Textarea.displayName = 'Textarea';

export { Textarea, textareaVariants };
