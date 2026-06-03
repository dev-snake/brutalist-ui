import { cva } from 'class-variance-authority'

export const inputVariants = cva(
    [
        'flex w-full',
        'border-3 border-brutal',
        'bg-brutal-bg text-brutal-fg',
        'font-medium',
        'placeholder:text-brutal-placeholder placeholder:font-normal',
        'transition-all duration-150',
        'focus:outline-none focus:shadow-brutal',
        'focus-visible:ring-2 focus-visible:ring-brutal-ring focus-visible:ring-offset-2',
        'disabled:cursor-not-allowed disabled:opacity-50 disabled:bg-brutal-muted',
    ],
    {
        variants: {
            variant: {
                default: '',
                error: 'border-brutal-destructive focus:shadow-brutal-primary',
                success: 'border-brutal-success focus:shadow-brutal-secondary',
            },
            inputSize: {
                sm: 'h-9 px-3 py-1 text-sm',
                default: 'h-11 px-4 py-2 text-base',
                lg: 'h-14 px-5 py-3 text-lg',
            },
        },
        defaultVariants: {
            variant: 'default',
            inputSize: 'default',
        },
    }
)
