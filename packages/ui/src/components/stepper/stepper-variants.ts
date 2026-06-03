import { cva } from 'class-variance-authority';

export const stepperItemVariants = cva(
    [
        'flex items-center gap-3 relative',
    ].join(' ')
);

export const stepperDotVariants = cva(
    [
        'flex-shrink-0 flex items-center justify-center',
        'border-3 border-brutal rounded-brutal font-black text-sm',
        'transition-all duration-200',
        'z-10 relative',
    ].join(' '),
    {
        variants: {
            state: {
                completed: 'bg-brutal-success text-brutal-fg shadow-brutal w-8 h-8',
                active: 'bg-brutal-primary text-brutal-fg shadow-brutal-lg w-8 h-8 -translate-x-0.5 -translate-y-0.5',
                upcoming: 'bg-brutal-bg text-brutal-fg shadow-brutal-sm w-8 h-8 opacity-60',
            },
        },
        defaultVariants: {
            state: 'upcoming',
        },
    }
);

export const stepperConnectorVariants = cva(
    [
        'transition-all duration-300',
    ].join(' '),
    {
        variants: {
            orientation: {
                horizontal: 'flex-1 h-[3px] mx-2',
                vertical: 'w-[3px] flex-1 my-2 ml-[14px]',
            },
            completed: {
                true: 'bg-brutal-success',
                false: 'bg-brutal-fg opacity-20',
            },
        },
        defaultVariants: {
            orientation: 'horizontal',
            completed: false,
        },
    }
);
