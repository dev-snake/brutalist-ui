import { cva } from 'class-variance-authority'

export const timelineDotVariants = cva(
    [
        'flex items-center justify-center border-3 border-brutal transition-all duration-150 shrink-0 z-10 font-black text-xs',
    ],
    {
        variants: {
            variant: {
                default: 'bg-brutal-bg text-brutal-fg shadow-brutal-sm',
                primary: 'bg-brutal-primary text-brutal-fg shadow-brutal-sm',
                secondary: 'bg-brutal-secondary text-brutal-fg shadow-brutal-sm',
                accent: 'bg-brutal-accent text-brutal-fg shadow-brutal-sm',
                success: 'bg-brutal-success text-brutal-fg shadow-brutal-sm',
                danger: 'bg-brutal-destructive text-brutal-fg shadow-brutal-sm',
            },
            shape: {
                circle: 'rounded-full h-8 w-8',
                square: 'rounded-none h-8 w-8',
                diamond: 'rotate-45 h-7 w-7 [&>*]:-rotate-45',
            },
        },
        defaultVariants: {
            variant: 'accent',
            shape: 'circle',
        },
    }
)
