'use client';

import * as React from 'react';
import { Card, cn } from 'brutalist-ui';

interface ComponentPreviewProps {
    children: React.ReactNode;
    className?: string;
}

export function ComponentPreview({ children, className }: ComponentPreviewProps) {
    return (
        <Card
            className={cn(
                'p-4 sm:p-8 flex items-center justify-center min-h-[150px] sm:min-h-[200px] bg-gray-50 overflow-x-auto',
                className
            )}
            variant="flat"
        >
            <div className="w-full flex items-center justify-center flex-wrap gap-2 sm:gap-4">
                {children}
            </div>
        </Card>
    );
}

interface CodeBlockProps {
    children: string;
    language?: string;
}

export function CodeBlock({ children, language = 'tsx' }: CodeBlockProps) {
    return (
        <pre className="bg-gray-900 text-white p-3 sm:p-4 border-3 border-black shadow-brutal overflow-x-auto my-4 text-xs sm:text-sm">
            <code className={`language-${language}`}>{children}</code>
        </pre>
    );
}
