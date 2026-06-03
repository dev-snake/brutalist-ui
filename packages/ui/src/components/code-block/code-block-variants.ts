import { cva } from 'class-variance-authority'

export const codeBlockRootVariants = cva(
    'border-3 border-brutal bg-brutal-bg text-brutal-fg rounded-brutal shadow-brutal overflow-hidden'
)

export const codeBlockHeaderVariants = cva(
    'bg-brutal-muted border-b-3 border-brutal flex justify-between items-center px-4 py-2 text-xs font-black select-none'
)

export const codeBlockLanguageVariants = cva(
    'bg-brutal-accent text-brutal-fg border-3 border-brutal rounded-brutal px-1.5 py-0.5 text-[10px] uppercase font-black tracking-wider'
)

export const codeBlockBodyVariants = cva(
    'relative flex items-stretch p-4 overflow-x-auto text-sm font-mono bg-brutal-bg'
)

export const codeBlockLineNumbersVariants = cva(
    'flex flex-col text-right text-brutal-fg/40 select-none pr-4 mr-4 border-r-3 border-brutal font-bold'
)

export const codeBlockCopyButtonVariants = cva(
    'h-7 px-3 text-xs border-2 shadow-brutal-sm active:translate-y-[1px] bg-brutal-bg hover:bg-brutal-muted'
)
