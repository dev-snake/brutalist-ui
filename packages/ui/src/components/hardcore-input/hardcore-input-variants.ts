import { cva } from 'class-variance-authority'

export const hardcoreInputVariants = cva(
    [
        'w-full',
        'border-3 border-brutal',
        'rounded-brutal',
        'bg-brutal-bg text-brutal-fg',
        'shadow-brutal',
        'px-4 py-2',
        'font-bold',
        'transition-all duration-150',
        'focus:outline-none focus-visible:ring-2 focus-visible:ring-brutal-ring focus-visible:ring-offset-2',
        'active:translate-y-[var(--brutal-pressed-offset,2px)] active:shadow-none',
        'placeholder:text-brutal-placeholder placeholder:font-normal',
    ],
    {
        variants: {
            validationState: {
                default: '',
                success: 'border-brutal-success',
                error: 'border-brutal-destructive',
            },
        },
        defaultVariants: {
            validationState: 'default',
        },
    }
)

export const hardcoreInputFaceVariants = cva(
    [
        'inline-flex items-center justify-center',
        'border-3 border-brutal',
        'rounded-brutal',
        'w-10 h-10',
        'text-lg',
        'bg-brutal-accent',
        'transition-transform duration-300',
    ]
)
