import { cva } from 'class-variance-authority'

export const accordionItemVariants = cva(
    [
        'border-3 border-brutal bg-brutal-bg text-brutal-fg',
        'transition-all duration-150',
    ],
    {
        variants: {
            variant: {
                default: 'shadow-brutal mb-4',
                flat: 'shadow-none mb-4',
                ghost: 'border-transparent shadow-none mb-2',
                interactive: [
                    'shadow-brutal mb-4',
                    'hover:shadow-brutal-lg hover:-translate-x-0.5 hover:-translate-y-0.5',
                ],
            },
        },
        defaultVariants: {
            variant: 'default',
        },
    }
)

export const accordionTriggerVariants = cva(
    [
        'flex flex-1 items-center justify-between py-4 px-6',
        'text-left font-black tracking-wide transition-all',
        'active:translate-y-[var(--brutal-pressed-offset,2px)] active:shadow-none',
    ],
    {
        variants: {
            variant: {
                default: 'hover:bg-brutal-muted',
                flat: 'hover:bg-brutal-muted',
                ghost: 'hover:bg-brutal-muted',
                interactive: 'hover:bg-brutal-muted',
            },
        },
        defaultVariants: {
            variant: 'default',
        },
    }
)

export const accordionContentVariants = cva(
    'border-t-3 border-brutal p-6 bg-brutal-bg text-brutal-fg'
)
