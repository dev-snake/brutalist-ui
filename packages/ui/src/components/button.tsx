import * as React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '../lib/utils';

const buttonVariants = cva(
    [
        'inline-flex items-center justify-center gap-2',
        'border-3 border-black',
        'font-black tracking-wide',
        'transition-all duration-150',
        'focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2',
        'disabled:opacity-50 disabled:pointer-events-none',
        'active:translate-y-0.5 active:shadow-none',
    ],
    {
        variants: {
            variant: {
                default: [
                    'bg-white text-black',
                    'shadow-[4px_4px_0px_0px_#000000]',
                    'hover:shadow-[6px_6px_0px_0px_#000000] hover:-translate-x-0.5 hover:-translate-y-0.5',
                ],
                primary: [
                    'bg-[#FF6B6B] text-black',
                    'shadow-[4px_4px_0px_0px_#000000]',
                    'hover:shadow-[6px_6px_0px_0px_#000000] hover:-translate-x-0.5 hover:-translate-y-0.5',
                ],
                secondary: [
                    'bg-[#4ECDC4] text-black',
                    'shadow-[4px_4px_0px_0px_#000000]',
                    'hover:shadow-[6px_6px_0px_0px_#000000] hover:-translate-x-0.5 hover:-translate-y-0.5',
                ],
                accent: [
                    'bg-[#FFE66D] text-black',
                    'shadow-[4px_4px_0px_0px_#000000]',
                    'hover:shadow-[6px_6px_0px_0px_#000000] hover:-translate-x-0.5 hover:-translate-y-0.5',
                ],
                danger: [
                    'bg-[#EF476F] text-white',
                    'shadow-[4px_4px_0px_0px_#000000]',
                    'hover:shadow-[6px_6px_0px_0px_#000000] hover:-translate-x-0.5 hover:-translate-y-0.5',
                ],
                success: [
                    'bg-[#7FB069] text-black',
                    'shadow-[4px_4px_0px_0px_#000000]',
                    'hover:shadow-[6px_6px_0px_0px_#000000] hover:-translate-x-0.5 hover:-translate-y-0.5',
                ],
                outline: [
                    'bg-transparent text-black',
                    'shadow-[4px_4px_0px_0px_#000000]',
                    'hover:bg-black hover:text-white',
                    'hover:shadow-[6px_6px_0px_0px_#000000] hover:-translate-x-0.5 hover:-translate-y-0.5',
                ],
                ghost: [
                    'bg-transparent text-black border-transparent',
                    'shadow-none',
                    'hover:bg-gray-100 hover:border-black',
                ],
                link: [
                    'bg-transparent text-black border-transparent',
                    'shadow-none underline-offset-4',
                    'hover:underline',
                ],
            },
            size: {
                sm: 'h-9 px-3 py-1 text-sm',
                default: 'h-11 px-5 py-2 text-base',
                lg: 'h-13 px-8 py-3 text-lg',
                xl: 'h-16 px-10 py-4 text-xl',
                icon: 'h-11 w-11 p-0',
            },
        },
        defaultVariants: {
            variant: 'default',
            size: 'default',
        },
    }
);

export interface ButtonProps
    extends React.ButtonHTMLAttributes<HTMLButtonElement>,
        VariantProps<typeof buttonVariants> {
    asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant, size, asChild = false, ...props }, ref) => {
        const Comp = asChild ? Slot : 'button';
        return (
            <Comp
                className={cn(buttonVariants({ variant, size, className }))}
                ref={ref}
                {...props}
            />
        );
    }
);
Button.displayName = 'Button';

export { Button, buttonVariants };
