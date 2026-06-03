import { cva } from 'class-variance-authority';

export const carouselRootVariants = cva(
    'relative overflow-hidden border-3 border-brutal shadow-brutal rounded-brutal',
    {
        variants: {
            size: {
                sm: 'h-48',
                md: 'h-64',
                lg: 'h-96',
                full: 'h-full',
                auto: '',
            },
        },
        defaultVariants: {
            size: 'auto',
        },
    }
);

export const carouselButtonVariants = cva(
    [
        'absolute z-10 top-1/2 -translate-y-1/2',
        'flex items-center justify-center',
        'bg-brutal-bg border-3 border-brutal shadow-brutal rounded-brutal',
        'w-10 h-10 cursor-pointer',
        'transition-all duration-150',
        'hover:shadow-brutal-lg hover:-translate-x-0.5 hover:-translate-y-[calc(50%+2px)]',
        'active:translate-y-[calc(-50%+var(--brutal-pressed-offset,2px))] active:shadow-none',
        'disabled:opacity-50 disabled:cursor-not-allowed disabled:shadow-brutal',
    ].join(' '),
    {
        variants: {
            direction: {
                prev: 'left-2',
                next: 'right-2',
            },
        },
        defaultVariants: {
            direction: 'prev',
        },
    }
);
