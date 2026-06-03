import { cva } from 'class-variance-authority'

export const beforeAfterRootVariants = cva(
    'relative overflow-hidden w-full aspect-video border-3 border-brutal bg-brutal-bg rounded-brutal shadow-brutal select-none'
)

export const beforeAfterHandleVariants = cva(
    'absolute top-1/2 -translate-y-1/2 -translate-x-1/2 h-10 w-10 border-3 border-brutal bg-brutal-primary rounded-brutal shadow-brutal-sm flex items-center justify-center pointer-events-none z-20 select-none'
)
