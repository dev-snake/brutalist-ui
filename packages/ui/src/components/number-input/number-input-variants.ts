import { cva } from 'class-variance-authority'

export const numberInputRootVariants = cva(
    [
        'flex items-stretch border-3 border-brutal bg-brutal-bg rounded-brutal shadow-brutal overflow-hidden',
        'transition-all duration-150',
        'focus-within:ring-2 focus-within:ring-brutal-ring focus-within:ring-offset-2',
    ].join(' '),
    {
        variants: {
            layout: {
                split: '',
                stacked: '',
            },
        },
        defaultVariants: {
            layout: 'split',
        },
    }
)

export const numberInputButtonVariants = cva(
    [
        'flex items-center justify-center',
        'transition-all duration-150',
        'disabled:opacity-50 disabled:pointer-events-none select-none cursor-pointer',
        'active:translate-y-[var(--brutal-pressed-offset,2px)] active:shadow-none',
    ].join(' '),
    {
        variants: {
            position: {
                decrement: 'bg-brutal-accent hover:bg-brutal-muted',
                increment: 'bg-brutal-primary hover:bg-brutal-muted',
            },
            layout: {
                split: 'px-4 border-brutal',
                stacked: 'flex-1 border-brutal',
            },
        },
        compoundVariants: [
            { position: 'decrement', layout: 'split', class: 'border-r-3' },
            { position: 'increment', layout: 'split', class: 'border-l-3' },
            { position: 'decrement', layout: 'stacked', class: 'border-b-3' },
        ],
        defaultVariants: {
            position: 'decrement',
            layout: 'split',
        },
    }
)

export const numberInputFieldVariants = cva(
    [
        'bg-transparent font-black placeholder:text-brutal-placeholder placeholder:font-normal focus:outline-none',
    ].join(' '),
    {
        variants: {
            layout: {
                split: 'flex-1 min-w-0 text-center py-2 px-3 text-base',
                stacked: 'flex-1 min-w-0 py-2 px-4 text-base',
            },
        },
        defaultVariants: {
            layout: 'split',
        },
    }
)
