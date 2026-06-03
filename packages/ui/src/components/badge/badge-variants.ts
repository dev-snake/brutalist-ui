import { cva } from 'class-variance-authority'

export const badgeVariants = cva(
    [
        'inline-flex items-center',
        'border-3 border-brutal',
        'font-bold tracking-wide',
        'transition-colors',
    ],
    {
        variants: {
            variant: {
                default: 'bg-brutal-bg text-brutal-fg shadow-brutal-sm',
                primary: 'bg-brutal-primary text-brutal-fg shadow-brutal-sm',
                secondary: 'bg-brutal-secondary text-brutal-fg shadow-brutal-sm',
                accent: 'bg-brutal-accent text-brutal-fg shadow-brutal-sm',
                danger: 'bg-brutal-destructive text-brutal-fg shadow-brutal-sm',
                success: 'bg-brutal-success text-brutal-fg shadow-brutal-sm',
                outline: 'bg-transparent text-brutal-fg',
            },
            size: {
                sm: 'px-2 py-0.5 text-xs',
                default: 'px-3 py-1 text-sm',
                lg: 'px-4 py-1.5 text-base',
            },
        },
        defaultVariants: {
            variant: 'default',
            size: 'default',
        },
    }
)
