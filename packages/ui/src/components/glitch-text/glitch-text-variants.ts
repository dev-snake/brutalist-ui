import { cva } from 'class-variance-authority'

export const glitchTextVariants = cva(
    [
        'glitch-text',
        'relative inline-block',
        'font-black tracking-wide',
        'text-brutal-fg',
    ],
    {
        variants: {
            speed: {
                slow: '[--glitch-duration:800ms]',
                medium: '[--glitch-duration:300ms]',
                fast: '[--glitch-duration:100ms]',
            },
        },
        defaultVariants: {
            speed: 'medium',
        },
    }
)
