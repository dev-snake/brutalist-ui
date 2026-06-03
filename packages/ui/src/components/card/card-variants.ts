import { cva } from 'class-variance-authority'

export const cardVariants = cva(
    [
        'border-3 border-brutal',
        'bg-brutal-bg text-brutal-fg',
        'transition-all duration-150',
    ],
    {
        variants: {
            variant: {
                default: 'shadow-brutal',
                elevated: 'shadow-brutal-lg',
                flat: 'shadow-none',
                interactive: [
                    'shadow-brutal',
                    'hover:shadow-brutal-lg hover:-translate-x-0.5 hover:-translate-y-0.5',
                    'cursor-pointer',
                ],
                primary: 'shadow-brutal-primary border-[var(--brutal-primary)]',
                secondary: 'shadow-brutal-secondary border-[var(--brutal-secondary)]',
            },
            padding: {
                none: 'p-0',
                sm: 'p-3',
                default: 'p-5',
                lg: 'p-8',
            },
        },
        defaultVariants: {
            variant: 'default',
            padding: 'default',
        },
    }
)
