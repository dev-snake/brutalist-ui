import { cva } from 'class-variance-authority'

export const marqueeContainerVariants = cva(
    [
        'relative flex overflow-hidden w-full',
        'border-y-3 border-brutal bg-brutal-accent text-brutal-fg',
        'font-black uppercase py-4 text-xl tracking-widest select-none',
    ].join(' '),
    {
        variants: {
            fade: {
                true: '[mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)] [-webkit-mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]',
                false: '',
            },
        },
    }
)

export const marqueeTrackVariants = cva(
    [
        'flex min-w-full shrink-0 items-center justify-around gap-4',
    ].join(' '),
    {
        variants: {
            direction: {
                left: 'animate-marquee-left',
                right: 'animate-marquee-right',
            },
            pauseOnHover: {
                true: 'hover:[animation-play-state:paused]',
                false: '',
            },
        },
        defaultVariants: {
            direction: 'left',
            pauseOnHover: false,
        },
    }
)
