import { cva } from 'class-variance-authority'

export const avatarVariants = cva(
    ['relative flex shrink-0 overflow-hidden', 'border-3 border-brutal', 'bg-brutal-muted'],
    {
        variants: {
            size: {
                sm: 'h-8 w-8',
                default: 'h-10 w-10',
                lg: 'h-14 w-14',
                xl: 'h-20 w-20',
            },
            shape: {
                square: '',
                rounded: 'rounded-brutal',
            },
        },
        defaultVariants: {
            size: 'default',
            shape: 'square',
        },
    }
)
