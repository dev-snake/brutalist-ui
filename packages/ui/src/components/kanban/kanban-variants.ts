import { cva } from 'class-variance-authority';

export const kanbanColumnVariants = cva(
    [
        'flex flex-col gap-3 min-w-[260px] w-[280px]',
        'border-3 border-brutal shadow-brutal rounded-brutal',
        'bg-brutal-muted p-3',
        'transition-shadow duration-200',
    ].join(' '),
    {
        variants: {
            dragOver: {
                true: 'shadow-brutal-lg border-brutal-primary',
                false: '',
            },
        },
        defaultVariants: {
            dragOver: false,
        },
    }
);

export const kanbanCardVariants = cva(
    [
        'border-3 border-brutal shadow-brutal rounded-brutal',
        'bg-brutal-bg px-3 py-2',
        'cursor-grab active:cursor-grabbing',
        'transition-all duration-150',
        'hover:shadow-brutal-lg hover:-translate-x-0.5 hover:-translate-y-0.5',
    ].join(' '),
    {
        variants: {
            dragging: {
                true: 'opacity-40 shadow-none',
                false: '',
            },
        },
        defaultVariants: {
            dragging: false,
        },
    }
);
