'use client';

import { Badge } from '@/components/ui';
import Link from 'next/link';
import { CodeBlock, PackageManagerTabs } from '@/components/code-block';

export default function ViteInstallationPage() {
    return (
        <div className="max-w-3xl">
            <Badge variant="secondary" className="mb-4">
                Installation
            </Badge>
            <h1 className="text-4xl font-black mb-4">Vite</h1>
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">
                Install and configure Brutalist UI for Vite.
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
                    Start by creating a new Vite project with React and TypeScript:
                </p>
                <PackageManagerTabs
                    commands={{
                        pnpm: 'pnpm create vite@latest my-app --template react-ts',
                        npm: 'npm create vite@latest my-app -- --template react-ts',
                        yarn: 'yarn create vite my-app --template react-ts',
                        bun: 'bunx create-vite my-app --template react-ts',
                    }}
                />
            </div>

            {/* Step 2: Install Tailwind CSS */}
            <div className="mb-10">
                <h2 className="text-2xl font-black mb-4 flex items-center gap-3">
                    <span className="flex items-center justify-center w-8 h-8 bg-black dark:bg-white text-white dark:text-black text-sm font-black border-3 border-black dark:border-white">
                        2
                    </span>
                    Install Tailwind CSS
                </h2>
                <p className="mb-4 text-gray-600 dark:text-gray-400">
                    Install Tailwind CSS and its dependencies:
                </p>
                <PackageManagerTabs
                    commands={{
                        pnpm: 'pnpm add -D tailwindcss postcss autoprefixer && pnpm dlx tailwindcss init -p',
                        npm: 'npm install -D tailwindcss postcss autoprefixer && npx tailwindcss init -p',
                        yarn: 'yarn add -D tailwindcss postcss autoprefixer && yarn dlx tailwindcss init -p',
                        bun: 'bun add -D tailwindcss postcss autoprefixer && bunx tailwindcss init -p',
                    }}
                />
            </div>

            {/* Step 3: Configure path aliases */}
            <div className="mb-10">
                <h2 className="text-2xl font-black mb-4 flex items-center gap-3">
                    <span className="flex items-center justify-center w-8 h-8 bg-black dark:bg-white text-white dark:text-black text-sm font-black border-3 border-black dark:border-white">
                        3
                    </span>
                    Configure path aliases
                </h2>
                <p className="mb-4 text-gray-600 dark:text-gray-400">
                    Update your{' '}
                    <code className="bg-gray-200 dark:bg-gray-800 px-1.5 py-0.5 font-mono text-sm">
                        vite.config.ts
                    </code>{' '}
                    to add the path alias:
                </p>
                <CodeBlock language="vite.config.ts">{`import path from "path"
import react from "@vitejs/plugin-react"
import { defineConfig } from "vite"

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
})`}</CodeBlock>

                <p className="mt-4 mb-4 text-gray-600 dark:text-gray-400">
                    Also update your{' '}
                    <code className="bg-gray-200 dark:bg-gray-800 px-1.5 py-0.5 font-mono text-sm">
                        tsconfig.json
                    </code>
                    :
                </p>
                <CodeBlock language="tsconfig.json">{`{
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "@/*": ["./src/*"]
    }
  }
}`}</CodeBlock>
            </div>

            {/* Step 4: Run the CLI */}
            <div className="mb-10">
                <h2 className="text-2xl font-black mb-4 flex items-center gap-3">
                    <span className="flex items-center justify-center w-8 h-8 bg-black dark:bg-white text-white dark:text-black text-sm font-black border-3 border-black dark:border-white">
                        4
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
            </div>

            {/* Step 5: Add Components */}
            <div className="mb-10">
                <h2 className="text-2xl font-black mb-4 flex items-center gap-3">
                    <span className="flex items-center justify-center w-8 h-8 bg-black dark:bg-white text-white dark:text-black text-sm font-black border-3 border-black dark:border-white">
                        5
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
            </div>

            {/* Step 6: Usage */}
            <div className="mb-10">
                <h2 className="text-2xl font-black mb-4 flex items-center gap-3">
                    <span className="flex items-center justify-center w-8 h-8 bg-black dark:bg-white text-white dark:text-black text-sm font-black border-3 border-black dark:border-white">
                        6
                    </span>
                    Usage
                </h2>
                <p className="mb-4 text-gray-600 dark:text-gray-400">
                    Import and use the component in your app:
                </p>
                <CodeBlock language="src/App.tsx">{`import { Button } from "@/components/ui/button"

function App() {
  return (
    <div className="p-8">
      <Button variant="primary">Click me</Button>
    </div>
  )
}

export default App`}</CodeBlock>
            </div>

            {/* Navigation */}
            <div className="flex justify-between items-center pt-8 border-t-3 border-black dark:border-white mt-12">
                <Link
                    href="/docs/installation/nextjs"
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
                    Next.js
                </Link>
                <Link
                    href="/docs/installation/manual"
                    className="flex items-center gap-2 font-bold hover:text-[#FF6B6B] transition-colors"
                >
                    Manual
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
