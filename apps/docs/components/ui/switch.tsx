'use client';

import * as React from 'react';
import * as SwitchPrimitive from '@radix-ui/react-switch';
import { cn } from '@/lib/utils';

const Switch = React.forwardRef<
    React.ElementRef<typeof SwitchPrimitive.Root>,
    React.ComponentPropsWithoutRef<typeof SwitchPrimitive.Root>
>(({ className, ...props }, ref) => (
    <SwitchPrimitive.Root
        className={cn(
            'peer inline-flex h-7 w-12 shrink-0 cursor-pointer items-center',
            'border-3 border-black dark:border-white',
            'transition-colors duration-150',
            'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black dark:focus-visible:ring-white focus-visible:ring-offset-2',
            'disabled:cursor-not-allowed disabled:opacity-50',
            'data-[state=checked]:bg-[#7FB069] data-[state=unchecked]:bg-white dark:data-[state=unchecked]:bg-gray-900',
            className
        )}
        {...props}
        ref={ref}
    >
        <SwitchPrimitive.Thumb
            className={cn(
                'pointer-events-none block h-5 w-5',
                'bg-black dark:bg-white',
                'shadow-[2px_2px_0px_0px_rgba(0,0,0,0.3)]',
                'transition-transform duration-150',
                'data-[state=checked]:translate-x-5 data-[state=unchecked]:translate-x-0.5'
            )}
        />
    </SwitchPrimitive.Root>
));
Switch.displayName = SwitchPrimitive.Root.displayName;

export { Switch };
