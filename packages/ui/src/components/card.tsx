import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '../lib/utils';

const cardVariants = cva(['border-3 border-black', 'bg-white', 'transition-all duration-150'], {
    variants: {
        variant: {
            default: 'shadow-[4px_4px_0px_0px_#000000]',
            elevated: 'shadow-[6px_6px_0px_0px_#000000]',
            flat: 'shadow-none',
            interactive: [
                'shadow-[4px_4px_0px_0px_#000000]',
                'hover:shadow-[6px_6px_0px_0px_#000000] hover:-translate-x-0.5 hover:-translate-y-0.5',
                'cursor-pointer',
            ],
            primary: 'shadow-[4px_4px_0px_0px_#FF6B6B] border-[#FF6B6B]',
            secondary: 'shadow-[4px_4px_0px_0px_#4ECDC4] border-[#4ECDC4]',
        },
        padding: {
            none: 'p-0',
            sm: 'p-3',
            default: 'p-5',
            lg: 'p-8',
        },
    },
    defaultVariants: {
        variant: 'default',
        padding: 'default',
    },
});

export interface CardProps
    extends React.HTMLAttributes<HTMLDivElement>,
        VariantProps<typeof cardVariants> {}

const Card = React.forwardRef<HTMLDivElement, CardProps>(
    ({ className, variant, padding, ...props }, ref) => (
        <div ref={ref} className={cn(cardVariants({ variant, padding, className }))} {...props} />
    )
);
Card.displayName = 'Card';

const CardHeader = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
    ({ className, ...props }, ref) => (
        <div ref={ref} className={cn('flex flex-col space-y-1.5 pb-4', className)} {...props} />
    )
);
CardHeader.displayName = 'CardHeader';

const CardTitle = React.forwardRef<HTMLParagraphElement, React.HTMLAttributes<HTMLHeadingElement>>(
    ({ className, ...props }, ref) => (
        <h3
            ref={ref}
            className={cn('text-2xl font-black tracking-tight leading-none', className)}
            {...props}
        />
    )
);
CardTitle.displayName = 'CardTitle';

const CardDescription = React.forwardRef<
    HTMLParagraphElement,
    React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
    <p ref={ref} className={cn('text-sm text-gray-600 font-medium', className)} {...props} />
));
CardDescription.displayName = 'CardDescription';

const CardContent = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
    ({ className, ...props }, ref) => <div ref={ref} className={cn('', className)} {...props} />
);
CardContent.displayName = 'CardContent';

const CardFooter = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
    ({ className, ...props }, ref) => (
        <div
            ref={ref}
            className={cn('flex items-center pt-4 border-t-3 border-black', className)}
            {...props}
        />
    )
);
CardFooter.displayName = 'CardFooter';

export { Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent, cardVariants };
