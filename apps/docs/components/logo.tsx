'use client';

import { cn } from '@/components/ui';

interface LogoProps {
    size?: 'sm' | 'md' | 'lg' | 'xl';
    showText?: boolean;
    className?: string;
}

export function Logo({ size = 'md', showText = true, className }: LogoProps) {
    const sizeConfig = {
        sm: {
            container: 'w-8 h-8',
            text: 'text-lg',
            border: 'border-2',
            shadow: '2px',
            letterSize: 'text-sm',
        },
        md: {
            container: 'w-10 h-10',
            text: 'text-xl',
            border: 'border-3',
            shadow: '3px',
            letterSize: 'text-base',
        },
        lg: {
            container: 'w-14 h-14',
            text: 'text-2xl',
            border: 'border-3',
            shadow: '4px',
            letterSize: 'text-xl',
        },
        xl: {
            container: 'w-24 h-24',
            text: 'text-4xl',
            border: 'border-4',
            shadow: '6px',
            letterSize: 'text-3xl',
        },
    };

    const config = sizeConfig[size];

    return (
        <div className={cn('flex items-center gap-3', className)}>
            {/* Logo Icon - Brutalist "BU" */}
            <div
                className={cn(
                    'relative flex items-center justify-center font-black',
                    config.container,
                    config.border,
                    'border-black dark:border-white',
                    'bg-[#FFE66D]'
                )}
                style={{
                    boxShadow: `${config.shadow} ${config.shadow} 0px 0px #000000`,
                }}
            >
                {/* 3D Effect layers */}
                <div
                    className={cn(
                        'absolute inset-0 bg-[#FF6B6B]',
                        config.border,
                        'border-black dark:border-white'
                    )}
                    style={{
                        transform: `translate(${config.shadow}, ${config.shadow})`,
                        zIndex: -2,
                    }}
                />
                <div
                    className={cn(
                        'absolute inset-0 bg-[#4ECDC4]',
                        config.border,
                        'border-black dark:border-white'
                    )}
                    style={{
                        transform: `translate(calc(${config.shadow} / 2), calc(${config.shadow} / 2))`,
                        zIndex: -1,
                    }}
                />

                {/* Letters */}
                <span className={cn('font-black text-black tracking-tighter', config.letterSize)}>
                    BU
                </span>
            </div>

            {/* Text */}
            {showText && (
                <span className={cn('font-black text-black dark:text-white', config.text)}>
                    Brutalist UI
                </span>
            )}
        </div>
    );
}

// Alternative: Stacked blocks logo
export function LogoStacked({ size = 'md', className }: Omit<LogoProps, 'showText'>) {
    const sizeConfig = {
        sm: { block: 'w-3 h-3', gap: 'gap-0.5', border: 'border', container: 'w-8 h-8' },
        md: { block: 'w-4 h-4', gap: 'gap-1', border: 'border-2', container: 'w-12 h-12' },
        lg: { block: 'w-5 h-5', gap: 'gap-1', border: 'border-2', container: 'w-14 h-14' },
        xl: { block: 'w-8 h-8', gap: 'gap-1.5', border: 'border-3', container: 'w-24 h-24' },
    };

    const config = sizeConfig[size];
    const colors = ['bg-[#FF6B6B]', 'bg-[#4ECDC4]', 'bg-[#FFE66D]', 'bg-[#A855F7]'];

    return (
        <div className={cn('grid grid-cols-2', config.gap, className)}>
            {colors.map((color, i) => (
                <div
                    key={i}
                    className={cn(
                        config.block,
                        config.border,
                        'border-black dark:border-white',
                        color
                    )}
                    style={{
                        boxShadow: '2px 2px 0px 0px #000000',
                    }}
                />
            ))}
        </div>
    );
}

// Hero Logo - For main page
export function LogoHero({ className }: { className?: string }) {
    return (
        <div className={cn('flex flex-col items-center', className)}>
            {/* Main 3D Block Logo */}
            <div className="relative mb-6">
                {/* Shadow layers */}
                <div
                    className="absolute w-32 h-32 bg-[#FF6B6B] border-4 border-black"
                    style={{ transform: 'translate(12px, 12px)' }}
                />
                <div
                    className="absolute w-32 h-32 bg-[#4ECDC4] border-4 border-black"
                    style={{ transform: 'translate(6px, 6px)' }}
                />

                {/* Main block */}
                <div className="relative w-32 h-32 bg-[#FFE66D] border-4 border-black flex items-center justify-center">
                    <span className="text-5xl font-black text-black tracking-tighter">BU</span>
                </div>
            </div>
        </div>
    );
}
