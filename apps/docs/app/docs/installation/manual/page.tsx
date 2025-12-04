'use client';

import { Badge } from '@/components/ui';
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
                Add Brutalist UI components manually to any React project.
            </p>

            {/* CLI Installation */}
            <section className="mb-12">
                <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 bg-[#4ECDC4] border-3 border-black flex items-center justify-center">
                        <svg
                            className="w-5 h-5"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth={2.5}
                            viewBox="0 0 24 24"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                            />
                        </svg>
                    </div>
                    <div>
                        <h2 className="text-xl font-black">CLI Installation</h2>
                        <span className="text-xs uppercase tracking-wider text-[#4ECDC4] font-bold">
                            Recommended
                        </span>
                    </div>
                </div>
                <p className="mb-6 text-gray-600 dark:text-gray-400">
                    Use the CLI to copy components into your project.
                </p>

                <h3 className="text-lg font-black mb-3">1. Run init command</h3>
                <PackageManagerTabs
                    commands={{
                        pnpm: 'pnpm dlx brutx@latest init',
                        npm: 'npx brutx@latest init',
                        yarn: 'yarn dlx brutx@latest init',
                        bun: 'bunx brutx@latest init',
                    }}
                />

                <h3 className="text-lg font-black mb-3 mt-6">2. Add components</h3>
                <PackageManagerTabs
                    commands={{
                        pnpm: 'pnpm dlx brutx@latest add button card dialog',
                        npm: 'npx brutx@latest add button card dialog',
                        yarn: 'yarn dlx brutx@latest add button card dialog',
                        bun: 'bunx brutx@latest add button card dialog',
                    }}
                />
                <p className="mt-2 text-sm text-gray-500">
                    Or add all components:{' '}
                    <code className="bg-gray-200 dark:bg-gray-800 px-1">
                        npx brutx@latest add --all
                    </code>
                </p>

                <h3 className="text-lg font-black mb-3 mt-6">3. Use components</h3>
                <CodeBlock language="tsx">{`import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

function MyComponent() {
  return (
    <Card>
      <CardContent>
        <Button variant="primary">Click me</Button>
      </CardContent>
    </Card>
  );
}`}</CodeBlock>
            </section>

            {/* Manual Copy (Alternative) */}
            <section className="mb-12">
                <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 bg-[#FF6B6B] border-3 border-black flex items-center justify-center">
                        <svg
                            className="w-5 h-5"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth={2.5}
                            viewBox="0 0 24 24"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
                            />
                        </svg>
                    </div>
                    <div>
                        <h2 className="text-xl font-black">Manual Copy</h2>
                        <span className="text-xs uppercase tracking-wider text-gray-500">
                            Alternative
                        </span>
                    </div>
                </div>
                <p className="mb-6 text-gray-600 dark:text-gray-400">
                    If you prefer to copy files manually, follow these steps.
                </p>

                <h3 className="text-lg font-black mb-3">1. Prerequisites</h3>
                <p className="mb-4 text-gray-600 dark:text-gray-400">
                    Make sure Tailwind CSS is installed in your project.{' '}
                    <a
                        href="https://tailwindcss.com/docs/installation"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#FF6B6B] hover:underline font-semibold"
                    >
                        Follow the Tailwind CSS installation →
                    </a>
                </p>

                <h3 className="text-lg font-black mb-3 mt-6">2. Install dependencies</h3>
                <PackageManagerTabs
                    commands={{
                        pnpm: 'pnpm add clsx tailwind-merge class-variance-authority lucide-react',
                        npm: 'npm install clsx tailwind-merge class-variance-authority lucide-react',
                        yarn: 'yarn add clsx tailwind-merge class-variance-authority lucide-react',
                        bun: 'bun add clsx tailwind-merge class-variance-authority lucide-react',
                    }}
                />

                <h3 className="text-lg font-black mb-3 mt-6">3. Create utils.ts</h3>
                <CodeBlock language="lib/utils.ts">{`import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}`}</CodeBlock>

                <h3 className="text-lg font-black mb-3 mt-6">4. Configure tailwind.config.js</h3>
                <CodeBlock language="tailwind.config.js">{`/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
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
    },
  },
};`}</CodeBlock>

                <h3 className="text-lg font-black mb-3 mt-6">5. Add base styles to your CSS</h3>
                <CodeBlock language="globals.css">{`@tailwind base;
@tailwind components;
@tailwind utilities;

/* Brutalist UI utility classes */
@layer utilities {
  .border-3 {
    border-width: 3px;
  }
  
  .shadow-brutal {
    box-shadow: 4px 4px 0px 0px #000;
  }
  
  .shadow-brutal-sm {
    box-shadow: 2px 2px 0px 0px #000;
  }
  
  .shadow-brutal-lg {
    box-shadow: 6px 6px 0px 0px #000;
  }
}

/* Dark mode shadows */
.dark .shadow-brutal {
  box-shadow: 4px 4px 0px 0px #fff;
}

.dark .shadow-brutal-sm {
  box-shadow: 2px 2px 0px 0px #fff;
}

.dark .shadow-brutal-lg {
  box-shadow: 6px 6px 0px 0px #fff;
}`}</CodeBlock>

                <h3 className="text-lg font-black mb-3 mt-6">6. Copy components from GitHub</h3>
                <p className="mb-4 text-gray-600 dark:text-gray-400">
                    Copy the component files to your{' '}
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

                <div className="mt-6 p-4 bg-gray-50 dark:bg-gray-900 border-3 border-black dark:border-white">
                    <h4 className="font-black mb-3 text-sm uppercase tracking-wider">
                        Recommended Structure
                    </h4>
                    <pre className="text-sm font-mono text-gray-600 dark:text-gray-400">{`src/
├── components/
│   └── ui/
│       ├── button.tsx
│       ├── card.tsx
│       ├── dialog.tsx
│       └── ...
└── lib/
    └── utils.ts`}</pre>
                </div>
            </section>

            {/* Component Dependencies */}
            <section className="mb-12">
                <h2 className="text-xl font-black mb-4">Component Dependencies</h2>
                <p className="mb-4 text-gray-600 dark:text-gray-400">
                    Some components require additional Radix UI packages:
                </p>
                <div className="overflow-x-auto">
                    <table className="w-full border-3 border-black dark:border-white text-sm">
                        <thead className="bg-[#FFE66D]">
                            <tr>
                                <th className="px-4 py-2 text-left border-r-3 border-b-3 border-black font-black text-black">
                                    Component
                                </th>
                                <th className="px-4 py-2 text-left border-b-3 border-black font-black text-black">
                                    Dependencies
                                </th>
                            </tr>
                        </thead>
                        <tbody className="bg-white dark:bg-gray-900">
                            <tr className="border-b-2 border-black dark:border-white">
                                <td className="px-4 py-2 border-r-3 border-black dark:border-white font-mono">
                                    Button
                                </td>
                                <td className="px-4 py-2 font-mono text-xs">
                                    @radix-ui/react-slot
                                </td>
                            </tr>
                            <tr className="border-b-2 border-black dark:border-white">
                                <td className="px-4 py-2 border-r-3 border-black dark:border-white font-mono">
                                    Dialog
                                </td>
                                <td className="px-4 py-2 font-mono text-xs">
                                    @radix-ui/react-dialog
                                </td>
                            </tr>
                            <tr className="border-b-2 border-black dark:border-white">
                                <td className="px-4 py-2 border-r-3 border-black dark:border-white font-mono">
                                    Select
                                </td>
                                <td className="px-4 py-2 font-mono text-xs">
                                    @radix-ui/react-select
                                </td>
                            </tr>
                            <tr className="border-b-2 border-black dark:border-white">
                                <td className="px-4 py-2 border-r-3 border-black dark:border-white font-mono">
                                    Dropdown
                                </td>
                                <td className="px-4 py-2 font-mono text-xs">
                                    @radix-ui/react-dropdown-menu
                                </td>
                            </tr>
                            <tr className="border-b-2 border-black dark:border-white">
                                <td className="px-4 py-2 border-r-3 border-black dark:border-white font-mono">
                                    Calendar
                                </td>
                                <td className="px-4 py-2 font-mono text-xs">
                                    react-day-picker, date-fns
                                </td>
                            </tr>
                            <tr>
                                <td className="px-4 py-2 border-r-3 border-black dark:border-white font-mono">
                                    Command
                                </td>
                                <td className="px-4 py-2 font-mono text-xs">cmdk</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </section>

            {/* Usage */}
            <section className="mb-12">
                <h2 className="text-xl font-black mb-4">Usage Example</h2>
                <CodeBlock language="tsx">{`import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function App() {
  return (
    <div className="p-8">
      <Card variant="default" padding="default">
        <CardHeader>
          <CardTitle>Welcome!</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="mb-4">This is a brutalist card.</p>
          <div className="flex gap-2">
            <Button variant="primary">Primary</Button>
            <Button variant="secondary">Secondary</Button>
            <Button variant="outline">Outline</Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}`}</CodeBlock>
            </section>

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
                    href="/docs/cli"
                    className="flex items-center gap-2 font-bold hover:text-[#FF6B6B] transition-colors"
                >
                    CLI Reference
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
