import { cva } from 'class-variance-authority'

export const labelVariants = cva(
    [
        'text-sm font-bold tracking-wide leading-none',
        'peer-disabled:cursor-not-allowed peer-disabled:opacity-70',
    ],
    {
        variants: {
            variant: {
                default: 'text-brutal-fg',
                error: 'text-brutal-destructive',
                success: 'text-brutal-success',
                muted: 'text-brutal-muted-foreground',
            },
        },
        defaultVariants: {
            variant: 'default',
        },
    }
)
