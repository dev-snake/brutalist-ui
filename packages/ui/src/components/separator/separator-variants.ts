import { cva } from 'class-variance-authority'

export const separatorVariants = cva('shrink-0 bg-brutal-fg', {
    variants: {
        orientation: {
            horizontal: 'h-[3px] w-full',
            vertical: 'h-full w-[3px]',
        },
    },
    defaultVariants: {
        orientation: 'horizontal',
    },
})
