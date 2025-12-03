import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';

const alertVariants = cva(
    [
        'relative w-full p-4',
        'border-3 border-black',
        'shadow-[4px_4px_0px_0px_#000000]',
        '[&>svg~*]:pl-8 [&>svg]:absolute [&>svg]:left-4 [&>svg]:top-4',
        '[&>svg]:h-5 [&>svg]:w-5 [&>svg]:stroke-[2.5]',
    ],
    {
        variants: {
            variant: {
                default: 'bg-white text-black',
                primary: 'bg-[#FF6B6B] text-black',
                secondary: 'bg-[#4ECDC4] text-black',
                success: 'bg-[#7FB069] text-black',
                warning: 'bg-[#FFE66D] text-black',
                danger: 'bg-[#EF476F] text-white',
                info: 'bg-[#4A90D9] text-white',
            },
        },
        defaultVariants: {
            variant: 'default',
        },
    }
);

export interface AlertProps
    extends React.HTMLAttributes<HTMLDivElement>,
        VariantProps<typeof alertVariants> {}

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(
    ({ className, variant, ...props }, ref) => (
        <div
            ref={ref}
            role="alert"
            className={cn(alertVariants({ variant }), className)}
            {...props}
        />
    )
);
Alert.displayName = 'Alert';

const AlertTitle = React.forwardRef<HTMLParagraphElement, React.HTMLAttributes<HTMLHeadingElement>>(
    ({ className, ...props }, ref) => (
        <h5
            ref={ref}
            className={cn('mb-1 font-black tracking-tight leading-none', className)}
            {...props}
        />
    )
);
AlertTitle.displayName = 'AlertTitle';

const AlertDescription = React.forwardRef<
    HTMLParagraphElement,
    React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
    <div
        ref={ref}
        className={cn('text-sm font-medium [&_p]:leading-relaxed', className)}
        {...props}
    />
));
AlertDescription.displayName = 'AlertDescription';

export { Alert, AlertTitle, AlertDescription, alertVariants };
