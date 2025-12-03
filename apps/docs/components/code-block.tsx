'use client';

import * as React from 'react';
import { cn } from '@/components/ui';

interface CodeBlockProps {
    children: string;
    language?: string;
    className?: string;
    showLineNumbers?: boolean;
}

export function CodeBlock({
    children,
    language,
    className,
    showLineNumbers = false,
}: CodeBlockProps) {
    const [copied, setCopied] = React.useState(false);

    const copyToClipboard = async () => {
        try {
            await navigator.clipboard.writeText(children);
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        } catch (err) {
            console.error('Failed to copy:', err);
        }
    };

    return (
        <div className="relative group">
            <button
                onClick={copyToClipboard}
                className={cn(
                    'absolute top-2 right-2 p-2 border-2 border-black dark:border-white font-bold text-xs transition-all duration-200',
                    'bg-white dark:bg-gray-800 hover:bg-[#4ECDC4] hover:shadow-[2px_2px_0px_0px_#000] dark:hover:shadow-[2px_2px_0px_0px_#fff]',
                    'opacity-0 group-hover:opacity-100 focus:opacity-100',
                    copied &&
                        'bg-[#4ECDC4] shadow-[2px_2px_0px_0px_#000] dark:shadow-[2px_2px_0px_0px_#fff]'
                )}
                title={copied ? 'Copied!' : 'Copy to clipboard'}
            >
                {copied ? (
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    >
                        <polyline points="20 6 9 17 4 12" />
                    </svg>
                ) : (
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    >
                        <rect width="14" height="14" x="8" y="8" rx="2" ry="2" />
                        <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2" />
                    </svg>
                )}
            </button>
            {language && (
                <span className="absolute top-2 left-3 text-xs font-bold text-gray-500 dark:text-gray-400 uppercase">
                    {language}
                </span>
            )}
            <pre
                className={cn(
                    'bg-gray-900 text-gray-100 p-4 pt-8 border-3 border-black dark:border-white shadow-brutal overflow-x-auto font-mono text-sm',
                    className
                )}
            >
                <code>{children}</code>
            </pre>
        </div>
    );
}

interface PackageManagerTabsProps {
    commands: {
        npm: string;
        pnpm: string;
        yarn: string;
        bun?: string;
    };
}

type PackageManager = 'npm' | 'pnpm' | 'yarn' | 'bun';

export function PackageManagerTabs({ commands }: PackageManagerTabsProps) {
    const [activeManager, setActiveManager] = React.useState<PackageManager>('pnpm');
    const [copied, setCopied] = React.useState(false);

    const managers: PackageManager[] = commands.bun
        ? ['pnpm', 'npm', 'yarn', 'bun']
        : ['pnpm', 'npm', 'yarn'];

    const copyToClipboard = async () => {
        try {
            await navigator.clipboard.writeText(commands[activeManager] || '');
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        } catch (err) {
            console.error('Failed to copy:', err);
        }
    };

    return (
        <div className="space-y-0">
            {/* Package Manager Selector */}
            <div className="flex border-3 border-b-0 border-black dark:border-white w-fit">
                {managers.map((pm, index) => (
                    <button
                        key={pm}
                        onClick={() => setActiveManager(pm)}
                        className={cn(
                            'px-4 py-2 text-sm font-bold transition-colors',
                            index > 0 && 'border-l-3 border-black dark:border-white',
                            activeManager === pm
                                ? 'bg-[#4ECDC4] text-black'
                                : 'bg-white dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700'
                        )}
                    >
                        {pm}
                    </button>
                ))}
            </div>

            {/* Code Block */}
            <div className="relative group">
                <button
                    onClick={copyToClipboard}
                    className={cn(
                        'absolute top-3 right-3 p-2 border-2 border-white font-bold text-xs transition-all duration-200 z-10',
                        'bg-gray-800 hover:bg-[#4ECDC4] hover:border-black hover:text-black',
                        copied && 'bg-[#4ECDC4] border-black text-black'
                    )}
                    title={copied ? 'Copied!' : 'Copy to clipboard'}
                >
                    {copied ? (
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        >
                            <polyline points="20 6 9 17 4 12" />
                        </svg>
                    ) : (
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        >
                            <rect width="14" height="14" x="8" y="8" rx="2" ry="2" />
                            <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2" />
                        </svg>
                    )}
                </button>
                <pre className="bg-gray-900 text-gray-100 p-4 border-3 border-black dark:border-white shadow-brutal overflow-x-auto font-mono text-sm">
                    <code>{commands[activeManager]}</code>
                </pre>
            </div>
        </div>
    );
}
