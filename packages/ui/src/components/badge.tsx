import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '../lib/utils';

const badgeVariants = cva(
    [
        'inline-flex items-center',
        'border-2 border-black',
        'font-bold tracking-wide',
        'transition-colors',
    ],
    {
        variants: {
            variant: {
                default: 'bg-white text-black shadow-[2px_2px_0px_0px_#000000]',
                primary: 'bg-[#FF6B6B] text-black shadow-[2px_2px_0px_0px_#000000]',
                secondary: 'bg-[#4ECDC4] text-black shadow-[2px_2px_0px_0px_#000000]',
                accent: 'bg-[#FFE66D] text-black shadow-[2px_2px_0px_0px_#000000]',
                danger: 'bg-[#EF476F] text-white shadow-[2px_2px_0px_0px_#000000]',
                success: 'bg-[#7FB069] text-black shadow-[2px_2px_0px_0px_#000000]',
                outline: 'bg-transparent text-black',
            },
            size: {
                sm: 'px-2 py-0.5 text-xs',
                default: 'px-3 py-1 text-sm',
                lg: 'px-4 py-1.5 text-base',
            },
        },
        defaultVariants: {
            variant: 'default',
            size: 'default',
        },
    }
);

export interface BadgeProps
    extends React.HTMLAttributes<HTMLDivElement>,
        VariantProps<typeof badgeVariants> {}

const Badge = React.forwardRef<HTMLDivElement, BadgeProps>(
    ({ className, variant, size, ...props }, ref) => (
        <div ref={ref} className={cn(badgeVariants({ variant, size, className }))} {...props} />
    )
);
Badge.displayName = 'Badge';

export { Badge, badgeVariants };
