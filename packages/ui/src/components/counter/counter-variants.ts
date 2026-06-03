import { cva } from 'class-variance-authority';

export const counterVariants = cva(
    [
        'inline-flex items-baseline tabular-nums whitespace-nowrap',
        'font-black text-brutal-fg',
        'max-w-full min-w-0',
    ].join(' '),
    {
        variants: {
            size: {
                sm: 'text-2xl',
                md: 'text-4xl',
                lg: 'text-6xl',
                xl: 'text-8xl',
            },
        },
        defaultVariants: {
            size: 'md',
        },
    }
);
