import { cva } from 'class-variance-authority';

export const chatBubbleVariants = cva(
    [
        'relative max-w-[75%] px-4 py-2.5',
        'border-3 border-brutal rounded-brutal',
        'text-sm font-medium leading-relaxed',
        'shadow-brutal',
    ].join(' '),
    {
        variants: {
            variant: {
                sent: 'bg-brutal-primary text-brutal-fg ml-auto',
                received: 'bg-brutal-bg text-brutal-fg mr-auto',
                system: 'bg-brutal-muted text-brutal-fg mx-auto text-center text-xs italic border-dashed shadow-none',
            },
        },
        defaultVariants: {
            variant: 'received',
        },
    }
);

export const chatAvatarVariants = cva(
    [
        'flex-shrink-0 w-8 h-8 rounded-brutal border-3 border-brutal',
        'flex items-center justify-center font-bold text-xs',
        'bg-brutal-secondary text-brutal-fg',
    ].join(' ')
);
