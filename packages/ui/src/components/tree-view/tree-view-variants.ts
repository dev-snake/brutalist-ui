import { cva } from 'class-variance-authority';

export const treeItemVariants = cva(
    [
        'flex items-center gap-2 px-2 py-1.5 cursor-pointer select-none',
        'border-3 border-transparent rounded-brutal',
        'text-sm text-brutal-fg font-medium',
        'transition-all duration-150',
        'hover:border-brutal hover:shadow-brutal hover:-translate-x-0.5 hover:-translate-y-0.5',
        'active:translate-y-[var(--brutal-pressed-offset,2px)] active:shadow-none',
    ].join(' '),
    {
        variants: {
            selected: {
                true: 'bg-brutal-primary border-brutal shadow-brutal',
                false: '',
            },
        },
        defaultVariants: {
            selected: false,
        },
    }
);

export const treeBranchLineVariants = cva(
    'absolute left-0 top-0 bottom-0 border-l-3 border-brutal'
);
