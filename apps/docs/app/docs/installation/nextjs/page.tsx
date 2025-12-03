'use client';

import { Badge } from '@/components/ui';
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
                Install and configure Brutalist UI for Next.js (App Router or Pages Router).
            </p>

            {/* Method A: NPM Package */}
            <section className="mb-12">
                <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 bg-[#4ECDC4] border-3 border-black flex items-center justify-center">
                        <span className="font-black text-black">A</span>
                    </div>
                    <div>
                        <h2 className="text-xl font-black">NPM Package</h2>
                        <span className="text-xs uppercase tracking-wider text-[#4ECDC4] font-bold">
                            Recommended
                        </span>
                    </div>
                </div>
                <p className="mb-6 text-gray-600 dark:text-gray-400">
                    Fastest way to get started. Use all components directly from the package.
                </p>

                <h3 className="text-lg font-black mb-3">1. Install the package</h3>
                <PackageManagerTabs
                    commands={{
                        pnpm: 'pnpm add brutalist-ui',
                        npm: 'npm install brutalist-ui',
                        yarn: 'yarn add brutalist-ui',
                        bun: 'bun add brutalist-ui',
                    }}
                />

                <h3 className="text-lg font-black mb-3 mt-6">
                    2. Import styles in your root layout
                </h3>
                <CodeBlock language="app/layout.tsx">{`import type { Metadata } from 'next';
import 'brutalist-ui/styles.css'; // Add this line
import './globals.css';

export const metadata: Metadata = {
  title: 'My App',
  description: 'Built with Brutalist UI',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}`}</CodeBlock>

                <h3 className="text-lg font-black mb-3 mt-6">3. Use components</h3>
                <CodeBlock language="app/page.tsx">{`import { Button, Card, CardContent, Badge } from 'brutalist-ui';

// For Calendar (separate import to avoid SSR issues)
import { Calendar } from 'brutalist-ui/calendar';

// For SubmitButton (works with Server Actions)
import { SubmitButton } from 'brutalist-ui/submit-button';

export default function Home() {
  return (
    <main className="p-8">
      <Card variant="default" padding="default">
        <CardContent>
          <Badge variant="accent" className="mb-4">Welcome</Badge>
          <h1 className="text-2xl font-black mb-4">Hello Brutalist UI!</h1>
          <div className="flex gap-2">
            <Button variant="primary">Primary</Button>
            <Button variant="secondary">Secondary</Button>
            <Button variant="accent">Accent</Button>
          </div>
        </CardContent>
      </Card>
    </main>
  );
}`}</CodeBlock>

                <div className="mt-6 p-4 border-3 border-black dark:border-white bg-white dark:bg-gray-900">
                    <h4 className="font-black mb-3 text-sm uppercase tracking-wider">
                        Available Exports
                    </h4>
                    <div className="grid gap-2 text-sm">
                        {[
                            { path: 'brutalist-ui', desc: 'All main components' },
                            { path: 'brutalist-ui/calendar', desc: 'Calendar component' },
                            { path: 'brutalist-ui/submit-button', desc: 'SubmitButton for forms' },
                            { path: 'brutalist-ui/hooks', desc: 'React 19 hooks' },
                            { path: 'brutalist-ui/styles.css', desc: 'CSS styles' },
                        ].map((item) => (
                            <div
                                key={item.path}
                                className="flex items-center justify-between py-1 border-b border-gray-200 dark:border-gray-700 last:border-0"
                            >
                                <code className="font-mono text-[#4ECDC4]">{item.path}</code>
                                <span className="text-gray-500">{item.desc}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Method B: CLI */}
            <section className="mb-12">
                <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 bg-[#FF6B6B] border-3 border-black flex items-center justify-center">
                        <span className="font-black text-black">B</span>
                    </div>
                    <div>
                        <h2 className="text-xl font-black">CLI Tool</h2>
                        <span className="text-xs uppercase tracking-wider text-gray-500">
                            Copy & Customize
                        </span>
                    </div>
                </div>
                <p className="mb-6 text-gray-600 dark:text-gray-400">
                    Copy components to your project for full customization control.
                </p>

                <h3 className="text-lg font-black mb-3">1. Run init command</h3>
                <p className="mb-4 text-gray-600 dark:text-gray-400">
                    This creates{' '}
                    <code className="bg-gray-200 dark:bg-gray-800 px-1.5 py-0.5 font-mono text-sm">
                        components.json
                    </code>
                    , sets up directories, and installs dependencies.
                </p>
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
                        pnpm: 'pnpm dlx brutx@latest add button card badge',
                        npm: 'npx brutx@latest add button card badge',
                        yarn: 'yarn dlx brutx@latest add button card badge',
                        bun: 'bunx brutx@latest add button card badge',
                    }}
                />
                <p className="mt-2 text-sm text-gray-500">
                    Or add all components:{' '}
                    <code className="bg-gray-200 dark:bg-gray-800 px-1">
                        npx brutx@latest add --all
                    </code>
                </p>

                <h3 className="text-lg font-black mb-3 mt-6">3. Import from your project</h3>
                <CodeBlock language="app/page.tsx">{`import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

export default function Home() {
  return (
    <main className="p-8">
      <Card>
        <CardContent>
          <Badge variant="accent" className="mb-4">Welcome</Badge>
          <h1 className="text-2xl font-black mb-4">Hello Brutalist UI!</h1>
          <Button variant="primary">Get Started</Button>
        </CardContent>
      </Card>
    </main>
  );
}`}</CodeBlock>

                <div className="mt-6 p-4 bg-gray-50 dark:bg-gray-900 border-3 border-black dark:border-white">
                    <h4 className="font-black mb-3 text-sm uppercase tracking-wider">
                        Project Structure
                    </h4>
                    <pre className="text-sm font-mono text-gray-600 dark:text-gray-400">{`your-project/
├── components.json
├── src/
│   ├── components/
│   │   └── ui/
│   │       ├── button.tsx
│   │       ├── card.tsx
│   │       └── ...
│   └── lib/
│       └── utils.ts`}</pre>
                </div>
            </section>

            {/* Dark Mode */}
            <section className="mb-12">
                <div className="flex items-center gap-3 mb-4">
                    <div className="w-8 h-8 bg-gray-900 dark:bg-white border-3 border-black dark:border-white flex items-center justify-center">
                        <svg
                            className="w-4 h-4 text-white dark:text-black"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                        >
                            <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
                        </svg>
                    </div>
                    <h2 className="text-xl font-black">Dark Mode</h2>
                </div>
                <p className="mb-4 text-gray-600 dark:text-gray-400">
                    Brutalist UI supports dark mode out of the box. Add{' '}
                    <code className="bg-gray-200 dark:bg-gray-800 px-1.5 py-0.5 font-mono text-sm">
                        next-themes
                    </code>{' '}
                    for easy theme switching:
                </p>
                <PackageManagerTabs
                    commands={{
                        pnpm: 'pnpm add next-themes',
                        npm: 'npm install next-themes',
                        yarn: 'yarn add next-themes',
                        bun: 'bun add next-themes',
                    }}
                />
                <div className="mt-4">
                    <CodeBlock language="app/providers.tsx">{`'use client';

import { ThemeProvider } from 'next-themes';

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      {children}
    </ThemeProvider>
  );
}`}</CodeBlock>
                </div>
            </section>

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
