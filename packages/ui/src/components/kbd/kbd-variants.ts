import { cva } from 'class-variance-authority';

export const kbdVariants = cva(
    [
        'inline-flex items-center justify-center',
        'font-mono font-black text-brutal-fg',
        'border-3 border-brutal rounded-brutal',
        'bg-brutal-muted shadow-brutal-sm',
        'select-none whitespace-nowrap',
    ].join(' '),
    {
        variants: {
            size: {
                sm: 'px-1.5 py-0.5 text-xs min-w-[1.25rem]',
                md: 'px-2 py-1 text-sm min-w-[1.75rem]',
                lg: 'px-3 py-1.5 text-base min-w-[2.25rem]',
            },
        },
        defaultVariants: {
            size: 'md',
        },
    }
);
