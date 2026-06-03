import { cva } from 'class-variance-authority'

export const copyToClipboardVariants = cva(
    [
        'inline-flex items-center justify-center gap-2 font-black tracking-wide',
        'border-3 border-brutal transition-all duration-150',
        'h-11 px-5 rounded-brutal shadow-brutal select-none cursor-pointer',
        'disabled:opacity-50 disabled:pointer-events-none',
    ].join(' '),
    {
        variants: {
            state: {
                idle: 'bg-brutal-bg text-brutal-fg hover:bg-brutal-muted hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-brutal-lg active:translate-y-[var(--brutal-pressed-offset,2px)] active:shadow-none',
                copied: 'bg-brutal-success text-brutal-fg translate-y-[var(--brutal-pressed-offset,2px)] shadow-none',
            },
        },
        defaultVariants: {
            state: 'idle',
        },
    }
)
