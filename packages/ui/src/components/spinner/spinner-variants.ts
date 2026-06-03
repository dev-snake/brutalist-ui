import { cva } from 'class-variance-authority'

export const spinnerVariants = cva(
    ['inline-block rounded-full', 'border-3 border-brutal', 'animate-spin'],
    {
        variants: {
            size: {
                sm: 'h-5 w-5',
                default: 'h-8 w-8',
                lg: 'h-12 w-12 border-[5px]',
                xl: 'h-16 w-16 border-[6px]',
            },
            variant: {
                default: 'border-t-transparent border-r-transparent',
                primary: 'border-brutal-primary border-t-transparent border-r-transparent',
                secondary: 'border-brutal-secondary border-t-transparent border-r-transparent',
                accent: 'border-brutal-accent border-t-brutal-fg border-r-brutal-fg',
            },
        },
        defaultVariants: {
            size: 'default',
            variant: 'default',
        },
    }
)

export const blockSpinnerVariants = cva('grid grid-cols-2 gap-1', {
    variants: {
        size: {
            sm: 'h-5 w-5 gap-0.5',
            default: 'h-8 w-8 gap-1',
            lg: 'h-12 w-12 gap-1.5',
            xl: 'h-16 w-16 gap-2',
        },
    },
    defaultVariants: {
        size: 'default',
    },
})

export const barsSpinnerVariants = cva('flex items-end gap-0.5', {
    variants: {
        size: {
            sm: 'h-4',
            default: 'h-6',
            lg: 'h-8',
            xl: 'h-12',
        },
    },
    defaultVariants: {
        size: 'default',
    },
})

export const dotsSpinnerVariants = cva('flex items-center', {
    variants: {
        size: {
            sm: 'gap-1',
            default: 'gap-2',
            lg: 'gap-3',
            xl: 'gap-4',
        },
    },
    defaultVariants: {
        size: 'default',
    },
})
