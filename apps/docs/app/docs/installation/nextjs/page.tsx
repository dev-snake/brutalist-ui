'use client';

import { Badge } from 'brutalist-ui';
import Link from 'next/link';
import { CodeBlock, PackageManagerTabs } from '@/components/code-block';

export default function NextJsInstallationPage() {
    return (
        <div className="max-w-3xl">
            <Badge variant="secondary" className="mb-4">
                Installation
            </Badge>
            <h1 className="text-4xl font-black mb-4">Next.js</h1>
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">
                Install and configure Brutalist UI for Next.js.
            </p>

            {/* Step 1: Create Project */}
            <div className="mb-10">
                <h2 className="text-2xl font-black mb-4 flex items-center gap-3">
                    <span className="flex items-center justify-center w-8 h-8 bg-black dark:bg-white text-white dark:text-black text-sm font-black border-3 border-black dark:border-white">
                        1
                    </span>
                    Create project
                </h2>
                <p className="mb-4 text-gray-600 dark:text-gray-400">
                    Start by creating a new Next.js project using{' '}
                    <code className="bg-gray-200 dark:bg-gray-800 px-1.5 py-0.5 font-mono text-sm">
                        create-next-app
                    </code>
                    :
                </p>
                <PackageManagerTabs
                    commands={{
                        pnpm: 'pnpm create next-app@latest my-app --typescript --tailwind --eslint',
                        npm: 'npx create-next-app@latest my-app --typescript --tailwind --eslint',
                        yarn: 'yarn create next-app my-app --typescript --tailwind --eslint',
                        bun: 'bunx create-next-app@latest my-app --typescript --tailwind --eslint',
                    }}
                />
            </div>

            {/* Step 2: Run the CLI */}
            <div className="mb-10">
                <h2 className="text-2xl font-black mb-4 flex items-center gap-3">
                    <span className="flex items-center justify-center w-8 h-8 bg-black dark:bg-white text-white dark:text-black text-sm font-black border-3 border-black dark:border-white">
                        2
                    </span>
                    Run the CLI
                </h2>
                <p className="mb-4 text-gray-600 dark:text-gray-400">
                    Run the{' '}
                    <code className="bg-gray-200 dark:bg-gray-800 px-1.5 py-0.5 font-mono text-sm">
                        init
                    </code>{' '}
                    command to setup your project:
                </p>
                <PackageManagerTabs
                    commands={{
                        pnpm: 'pnpm dlx brutalist-ui-cli init',
                        npm: 'npx brutalist-ui-cli init',
                        yarn: 'yarn dlx brutalist-ui-cli init',
                        bun: 'bunx brutalist-ui-cli init',
                    }}
                />
                <p className="mt-4 text-sm text-gray-500 dark:text-gray-500">
                    This will install dependencies and configure your{' '}
                    <code className="bg-gray-200 dark:bg-gray-800 px-1 py-0.5 font-mono text-xs">
                        tailwind.config.js
                    </code>
                    .
                </p>
            </div>

            {/* Step 3: Configure next.config.js */}
            <div className="mb-10">
                <h2 className="text-2xl font-black mb-4 flex items-center gap-3">
                    <span className="flex items-center justify-center w-8 h-8 bg-black dark:bg-white text-white dark:text-black text-sm font-black border-3 border-black dark:border-white">
                        3
                    </span>
                    Configure next.config
                </h2>
                <p className="mb-4 text-gray-600 dark:text-gray-400">
                    Add{' '}
                    <code className="bg-gray-200 dark:bg-gray-800 px-1.5 py-0.5 font-mono text-sm">
                        brutalist-ui
                    </code>{' '}
                    to transpilePackages in your{' '}
                    <code className="bg-gray-200 dark:bg-gray-800 px-1.5 py-0.5 font-mono text-sm">
                        next.config.js
                    </code>
                    :
                </p>
                <CodeBlock language="next.config.js">{`/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ['brutalist-ui'],
}

module.exports = nextConfig`}</CodeBlock>
            </div>

            {/* Step 4: Add Components */}
            <div className="mb-10">
                <h2 className="text-2xl font-black mb-4 flex items-center gap-3">
                    <span className="flex items-center justify-center w-8 h-8 bg-black dark:bg-white text-white dark:text-black text-sm font-black border-3 border-black dark:border-white">
                        4
                    </span>
                    Add components
                </h2>
                <p className="mb-4 text-gray-600 dark:text-gray-400">
                    You can now start adding components to your project:
                </p>
                <PackageManagerTabs
                    commands={{
                        pnpm: 'pnpm dlx brutalist-ui-cli add button',
                        npm: 'npx brutalist-ui-cli add button',
                        yarn: 'yarn dlx brutalist-ui-cli add button',
                        bun: 'bunx brutalist-ui-cli add button',
                    }}
                />
                <p className="mt-4 text-sm text-gray-500 dark:text-gray-500">
                    The command above will add the Button component to your project at{' '}
                    <code className="bg-gray-200 dark:bg-gray-800 px-1 py-0.5 font-mono text-xs">
                        components/ui/button.tsx
                    </code>
                    .
                </p>
            </div>

            {/* Step 5: Usage */}
            <div className="mb-10">
                <h2 className="text-2xl font-black mb-4 flex items-center gap-3">
                    <span className="flex items-center justify-center w-8 h-8 bg-black dark:bg-white text-white dark:text-black text-sm font-black border-3 border-black dark:border-white">
                        5
                    </span>
                    Usage
                </h2>
                <p className="mb-4 text-gray-600 dark:text-gray-400">
                    Import and use the component in your app:
                </p>
                <CodeBlock language="app/page.tsx">{`import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <div className="p-8">
      <Button variant="primary">Click me</Button>
    </div>
  )
}`}</CodeBlock>
            </div>

            {/* Navigation */}
            <div className="flex justify-between items-center pt-8 border-t-3 border-black dark:border-white mt-12">
                <Link
                    href="/docs/installation"
                    className="flex items-center gap-2 font-bold hover:text-[#FF6B6B] transition-colors"
                >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={3}
                            d="M15 19l-7-7 7-7"
                        />
                    </svg>
                    Installation
                </Link>
                <Link
                    href="/docs/installation/vite"
                    className="flex items-center gap-2 font-bold hover:text-[#FF6B6B] transition-colors"
                >
                    Vite
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={3}
                            d="M9 5l7 7-7 7"
                        />
                    </svg>
                </Link>
            </div>
        </div>
    );
}
