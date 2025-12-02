'use client';

import { Badge } from 'brutalist-ui';
import Link from 'next/link';
import { CodeBlock, PackageManagerTabs } from '@/components/code-block';

export default function ManualInstallationPage() {
    return (
        <div className="max-w-3xl">
            <Badge variant="secondary" className="mb-4">
                Installation
            </Badge>
            <h1 className="text-4xl font-black mb-4">Manual Installation</h1>
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">
                Add Brutalist UI to your project manually without using the CLI.
            </p>

            {/* Step 1: Install package */}
            <div className="mb-10">
                <h2 className="text-2xl font-black mb-4 flex items-center gap-3">
                    <span className="flex items-center justify-center w-8 h-8 bg-black dark:bg-white text-white dark:text-black text-sm font-black border-3 border-black dark:border-white">
                        1
                    </span>
                    Install the package
                </h2>
                <p className="mb-4 text-gray-600 dark:text-gray-400">
                    Install{' '}
                    <code className="bg-gray-200 dark:bg-gray-800 px-1.5 py-0.5 font-mono text-sm">
                        brutalist-ui
                    </code>{' '}
                    and its peer dependencies:
                </p>
                <PackageManagerTabs
                    commands={{
                        pnpm: 'pnpm add brutalist-ui clsx tailwind-merge class-variance-authority',
                        npm: 'npm install brutalist-ui clsx tailwind-merge class-variance-authority',
                        yarn: 'yarn add brutalist-ui clsx tailwind-merge class-variance-authority',
                        bun: 'bun add brutalist-ui clsx tailwind-merge class-variance-authority',
                    }}
                />
            </div>

            {/* Step 2: Configure Tailwind */}
            <div className="mb-10">
                <h2 className="text-2xl font-black mb-4 flex items-center gap-3">
                    <span className="flex items-center justify-center w-8 h-8 bg-black dark:bg-white text-white dark:text-black text-sm font-black border-3 border-black dark:border-white">
                        2
                    </span>
                    Configure Tailwind CSS
                </h2>
                <p className="mb-4 text-gray-600 dark:text-gray-400">
                    Add the library to your Tailwind CSS content paths and include the Brutalism
                    plugin:
                </p>
                <CodeBlock language="tailwind.config.js">{`/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/brutalist-ui/**/*.{js,mjs}",
  ],
  theme: {
    extend: {
      borderWidth: {
        3: "3px",
      },
      boxShadow: {
        brutal: "4px 4px 0px 0px #000",
        "brutal-sm": "2px 2px 0px 0px #000",
        "brutal-lg": "6px 6px 0px 0px #000",
      },
      colors: {
        brutalism: {
          primary: "#FF6B6B",
          secondary: "#4ECDC4",
          accent: "#FFE66D",
        },
      },
    },
  },
  plugins: [
    require("brutalist-ui/brutalism-plugin"),
  ],
}`}</CodeBlock>
            </div>

            {/* Step 3: Add utils */}
            <div className="mb-10">
                <h2 className="text-2xl font-black mb-4 flex items-center gap-3">
                    <span className="flex items-center justify-center w-8 h-8 bg-black dark:bg-white text-white dark:text-black text-sm font-black border-3 border-black dark:border-white">
                        3
                    </span>
                    Add cn utility
                </h2>
                <p className="mb-4 text-gray-600 dark:text-gray-400">
                    Create a{' '}
                    <code className="bg-gray-200 dark:bg-gray-800 px-1.5 py-0.5 font-mono text-sm">
                        lib/utils.ts
                    </code>{' '}
                    file with the cn helper:
                </p>
                <CodeBlock language="lib/utils.ts">{`import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}`}</CodeBlock>
            </div>

            {/* Step 4: Copy component */}
            <div className="mb-10">
                <h2 className="text-2xl font-black mb-4 flex items-center gap-3">
                    <span className="flex items-center justify-center w-8 h-8 bg-black dark:bg-white text-white dark:text-black text-sm font-black border-3 border-black dark:border-white">
                        4
                    </span>
                    Copy components
                </h2>
                <p className="mb-4 text-gray-600 dark:text-gray-400">
                    Copy the component source code from GitHub to your{' '}
                    <code className="bg-gray-200 dark:bg-gray-800 px-1.5 py-0.5 font-mono text-sm">
                        components/ui
                    </code>{' '}
                    folder:
                </p>
                <a
                    href="https://github.com/dev-snake/brutalist-ui/tree/main/packages/ui/src/components"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-3 font-bold border-3 border-black dark:border-white bg-white dark:bg-gray-900 hover:bg-[#4ECDC4] hover:shadow-brutal transition-all"
                >
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                    </svg>
                    Browse components on GitHub
                </a>
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
                <CodeBlock language="App.tsx">{`import { Button } from "@/components/ui/button"

export default function App() {
  return (
    <div className="p-8">
      <Button variant="primary">Click me</Button>
    </div>
  )
}`}</CodeBlock>
            </div>

            {/* Alternative: Direct Import */}
            <div className="mb-10 p-6 border-3 border-black dark:border-white bg-[#FFE66D]/20">
                <h3 className="text-xl font-black mb-3">💡 Alternative: Direct Import</h3>
                <p className="mb-4 text-gray-700 dark:text-gray-300">
                    You can also import components directly from the{' '}
                    <code className="bg-gray-200 dark:bg-gray-800 px-1.5 py-0.5 font-mono text-sm">
                        brutalist-ui
                    </code>{' '}
                    package without copying:
                </p>
                <CodeBlock language="tsx">{`import { Button, Card, Dialog } from "brutalist-ui"

export default function App() {
  return (
    <Card>
      <Button variant="primary">Click me</Button>
    </Card>
  )
}`}</CodeBlock>
            </div>

            {/* Navigation */}
            <div className="flex justify-between items-center pt-8 border-t-3 border-black dark:border-white mt-12">
                <Link
                    href="/docs/installation/vite"
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
                    Vite
                </Link>
                <Link
                    href="/docs/components"
                    className="flex items-center gap-2 font-bold hover:text-[#FF6B6B] transition-colors"
                >
                    Components
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
