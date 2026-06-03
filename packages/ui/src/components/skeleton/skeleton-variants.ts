import { cva } from 'class-variance-authority'

export const skeletonVariants = cva(
    ['animate-pulse', 'border-3 border-brutal'],
    {
        variants: {
            variant: {
                default: 'bg-brutal-muted',
                primary: 'bg-brutal-primary/30',
                secondary: 'bg-brutal-secondary/30',
                accent: 'bg-brutal-accent/30',
            },
        },
        defaultVariants: {
            variant: 'default',
        },
    }
)
