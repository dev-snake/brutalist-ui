import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '../lib/utils';

const avatarVariants = cva(
    ['relative flex shrink-0 overflow-hidden', 'border-3 border-black', 'bg-gray-100'],
    {
        variants: {
            size: {
                sm: 'h-8 w-8',
                default: 'h-10 w-10',
                lg: 'h-14 w-14',
                xl: 'h-20 w-20',
            },
            shape: {
                square: '',
                rounded: 'rounded-lg',
            },
        },
        defaultVariants: {
            size: 'default',
            shape: 'square',
        },
    }
);

export interface AvatarProps
    extends React.HTMLAttributes<HTMLSpanElement>,
        VariantProps<typeof avatarVariants> {}

const Avatar = React.forwardRef<HTMLSpanElement, AvatarProps>(
    ({ className, size, shape, ...props }, ref) => (
        <span ref={ref} className={cn(avatarVariants({ size, shape }), className)} {...props} />
    )
);
Avatar.displayName = 'Avatar';

const AvatarImage = React.forwardRef<HTMLImageElement, React.ImgHTMLAttributes<HTMLImageElement>>(
    ({ className, ...props }, ref) => (
        <img
            ref={ref}
            className={cn('aspect-square h-full w-full object-cover', className)}
            {...props}
        />
    )
);
AvatarImage.displayName = 'AvatarImage';

const AvatarFallback = React.forwardRef<HTMLSpanElement, React.HTMLAttributes<HTMLSpanElement>>(
    ({ className, ...props }, ref) => (
        <span
            ref={ref}
            className={cn(
                'flex h-full w-full items-center justify-center bg-gray-200 font-bold',
                className
            )}
            {...props}
        />
    )
);
AvatarFallback.displayName = 'AvatarFallback';

export { Avatar, AvatarImage, AvatarFallback, avatarVariants };
