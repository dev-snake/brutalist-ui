import { cva } from 'class-variance-authority'

export const buttonVariants = cva(
    [
        'inline-flex items-center justify-center gap-2',
        'border-3 border-brutal',
        'font-black tracking-wide',
        'transition-all duration-150',
        'focus:outline focus:outline-[3px] focus:outline-brutal-ring focus:outline-offset-2',
        'disabled:opacity-50 disabled:pointer-events-none',
        'active:translate-y-[var(--brutal-pressed-offset,2px)] active:shadow-none',
    ],
    {
        variants: {
            variant: {
                default: [
                    'bg-brutal-bg text-brutal-fg',
                    'shadow-brutal',
                    'hover:shadow-brutal-lg hover:-translate-x-0.5 hover:-translate-y-0.5',
                ],
                primary: [
                    'bg-brutal-primary text-brutal-fg',
                    'shadow-brutal',
                    'hover:shadow-brutal-lg hover:-translate-x-0.5 hover:-translate-y-0.5',
                ],
                secondary: [
                    'bg-brutal-secondary text-brutal-fg',
                    'shadow-brutal',
                    'hover:shadow-brutal-lg hover:-translate-x-0.5 hover:-translate-y-0.5',
                ],
                accent: [
                    'bg-brutal-accent text-brutal-fg',
                    'shadow-brutal',
                    'hover:shadow-brutal-lg hover:-translate-x-0.5 hover:-translate-y-0.5',
                ],
                danger: [
                    'bg-brutal-destructive text-brutal-fg',
                    'shadow-brutal',
                    'hover:shadow-brutal-lg hover:-translate-x-0.5 hover:-translate-y-0.5',
                ],
                success: [
                    'bg-brutal-success text-brutal-fg',
                    'shadow-brutal',
                    'hover:shadow-brutal-lg hover:-translate-x-0.5 hover:-translate-y-0.5',
                ],
                outline: [
                    'bg-transparent text-brutal-fg',
                    'shadow-brutal',
                    'hover:bg-brutal-fg hover:text-brutal-bg',
                    'hover:shadow-brutal-lg hover:-translate-x-0.5 hover:-translate-y-0.5',
                ],
                ghost: [
                    'bg-transparent text-brutal-fg border-transparent',
                    'shadow-none',
                    'hover:bg-brutal-muted hover:border-brutal',
                ],
                link: [
                    'bg-transparent text-brutal-fg border-transparent',
                    'shadow-none underline-offset-4',
                    'hover:underline',
                ],
            },
            size: {
                sm: 'h-9 px-3 py-1 text-sm',
                default: 'h-11 px-5 py-2 text-base',
                lg: 'h-14 px-8 py-3 text-lg',
                xl: 'h-16 px-10 py-4 text-xl',
                icon: 'h-11 w-11 p-0',
            },
        },
        defaultVariants: {
            variant: 'default',
            size: 'default',
        },
    }
)
