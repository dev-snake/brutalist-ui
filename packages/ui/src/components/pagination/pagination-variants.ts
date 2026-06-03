import { cva } from 'class-variance-authority'

export const paginationVariants = cva('flex items-center justify-center', {
    variants: {
        variant: {
            default: '',
            rounded: '[&_button]:rounded-brutal',
            minimal: '[&_button]:border-transparent [&_button]:shadow-none',
        },
        size: {
            sm: 'gap-1',
            default: 'gap-2',
            lg: 'gap-3',
        },
    },
    defaultVariants: {
        variant: 'default',
        size: 'default',
    },
})

export const paginationButtonVariants = cva(
    [
        'inline-flex items-center justify-center font-black',
        'border-3 border-brutal',
        'transition-all duration-150',
        'focus:outline-none focus:ring-2 focus:ring-brutal-ring focus:ring-offset-2',
        'disabled:opacity-40 disabled:cursor-not-allowed disabled:transform-none disabled:shadow-none',
    ],
    {
        variants: {
            size: {
                sm: 'h-8 min-w-8 text-sm px-2',
                default: 'h-10 min-w-10 text-base px-3',
                lg: 'h-12 min-w-12 text-lg px-4',
            },
            isActive: {
                true: [
                    'bg-brutal-fg text-brutal-bg',
                    'shadow-brutal-primary',
                    'hover:shadow-brutal-sm',
                    'active:shadow-none active:translate-y-[var(--brutal-pressed-offset,2px)]',
                ],
                false: [
                    'bg-brutal-bg text-brutal-fg',
                    'shadow-brutal',
                    'hover:bg-brutal-muted',
                    'hover:shadow-brutal-sm',
                    'active:shadow-none active:translate-y-[var(--brutal-pressed-offset,2px)]',
                ],
            },
        },
        defaultVariants: {
            size: 'default',
            isActive: false,
        },
    }
)
