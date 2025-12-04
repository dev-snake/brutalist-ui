import { Card, CardContent, Badge } from '@/components/ui';
import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
    title: 'Documentation - Brutalist UI | Neo-Brutalism React Component Library',
    description:
        'Learn how to use Brutalist UI, the Neo-Brutalism React component library. Built on Radix UI and Tailwind CSS with bold borders, offset shadows, and vibrant colors.',
    keywords: [
        'brutalist ui docs',
        'neo-brutalism guide',
        'react component library tutorial',
        'brutalism css documentation',
        'radix ui brutalism',
    ],
    openGraph: {
        title: 'Documentation - Brutalist UI',
        description: 'Learn how to use Brutalist UI, the Neo-Brutalism React component library.',
        url: 'https://brutalistui.site/docs',
    },
    alternates: {
        canonical: 'https://brutalistui.site/docs',
    },
};

export default function DocsPage() {
    return (
        <div>
            <Badge variant="accent" className="mb-4">
                Documentation
            </Badge>
            <h1>Getting Started</h1>

            <p>
                Brutalist UI is a React component library that brings the bold, blocky aesthetic of
                Neo-Brutalism to your web applications. Built on top of Radix UI primitives and
                styled with Tailwind CSS.
            </p>

            <h2>What is Neo-Brutalism?</h2>
            <p>Neo-Brutalism (also known as Neubrutalism) is a design trend characterized by:</p>
            <ul>
                <li>
                    <strong>Bold borders</strong> - Thick, solid black outlines (3px)
                </li>
                <li>
                    <strong>Offset shadows</strong> - Hard shadows offset 4-8px
                </li>
                <li>
                    <strong>No rounded corners</strong> - Sharp, rectangular shapes
                </li>
                <li>
                    <strong>Heavy typography</strong> - Bold, black weight fonts (font-weight: 900)
                </li>
                <li>
                    <strong>Vibrant colors</strong> - High contrast, saturated palettes
                </li>
                <li>
                    <strong>Pressable feel</strong> - Interactive states that feel tangible
                </li>
            </ul>

            <h2>How to Use</h2>
            <p className="mb-4">Use the CLI to add Brutalist UI components to your project:</p>

            <div className="my-6">
                <div className="p-5 border-3 border-[#4ECDC4] bg-white dark:bg-gray-900">
                    <div className="flex items-center gap-3 mb-4">
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
                            <h3 className="font-black text-lg">CLI Tool</h3>
                            <span className="text-xs uppercase tracking-wider text-[#4ECDC4] font-bold">
                                Recommended
                            </span>
                        </div>
                    </div>
                    <p className="text-sm text-gray-700 dark:text-gray-300 mb-4">
                        Copy components into your codebase for full control and customization.
                    </p>
                    <pre className="bg-black text-[#4ECDC4] p-3 text-sm font-mono overflow-x-auto">
                        {`npx brutx@latest init`}
                    </pre>
                    <pre className="bg-black text-white p-3 text-sm font-mono overflow-x-auto mt-2">
                        {`npx brutx@latest add button card`}
                    </pre>
                    <pre className="bg-black text-white p-3 text-sm font-mono overflow-x-auto mt-2">
                        {`import { Button } from '@/components/ui/button'`}
                    </pre>
                </div>
            </div>

            <h2>Why Brutalist UI?</h2>

            <div className="grid sm:grid-cols-2 gap-4 my-6">
                <div className="p-5 border-3 border-black dark:border-white bg-white dark:bg-gray-900">
                    <div className="w-8 h-8 bg-[#4ECDC4] border-2 border-black flex items-center justify-center mb-3">
                        <svg
                            className="w-4 h-4"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth={2.5}
                            viewBox="0 0 24 24"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                            />
                        </svg>
                    </div>
                    <h3 className="font-black mb-2">Accessible</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                        Built on Radix UI primitives with full keyboard navigation and screen reader
                        support.
                    </p>
                </div>

                <div className="p-5 border-3 border-black dark:border-white bg-white dark:bg-gray-900">
                    <div className="w-8 h-8 bg-[#FF6B6B] border-2 border-black flex items-center justify-center mb-3">
                        <svg
                            className="w-4 h-4"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth={2.5}
                            viewBox="0 0 24 24"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"
                            />
                        </svg>
                    </div>
                    <h3 className="font-black mb-2">Customizable</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                        class-variance-authority (cva) for variants. Tailwind CSS utilities for easy
                        styling.
                    </p>
                </div>

                <div className="p-5 border-3 border-black dark:border-white bg-white dark:bg-gray-900">
                    <div className="w-8 h-8 bg-[#FFE66D] border-2 border-black flex items-center justify-center mb-3">
                        <svg
                            className="w-4 h-4"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth={2.5}
                            viewBox="0 0 24 24"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M13 10V3L4 14h7v7l9-11h-7z"
                            />
                        </svg>
                    </div>
                    <h3 className="font-black mb-2">Modern Stack</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                        TypeScript first, tree-shakeable, React 18/19+, Next.js 14/15+ compatible.
                    </p>
                </div>

                <div className="p-5 border-3 border-black dark:border-white bg-white dark:bg-gray-900">
                    <div className="w-8 h-8 bg-black dark:bg-white border-2 border-black dark:border-white flex items-center justify-center mb-3">
                        <span className="text-white dark:text-black font-black text-xs">27</span>
                    </div>
                    <h3 className="font-black mb-2">Components</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                        Button, Card, Dialog, Calendar, Command, Toast, Table, and many more.
                    </p>
                </div>
            </div>

            <h2>Design Tokens</h2>
            <p className="mb-4">
                The brutalism style is achieved through these core design tokens:
            </p>
            <div className="overflow-x-auto">
                <table className="w-full border-3 border-black dark:border-white text-sm">
                    <thead className="bg-[#FFE66D]">
                        <tr>
                            <th className="px-4 py-2 text-left border-r-3 border-b-3 border-black font-black text-black">
                                Token
                            </th>
                            <th className="px-4 py-2 text-left border-r-3 border-b-3 border-black font-black text-black">
                                CSS
                            </th>
                            <th className="px-4 py-2 text-left border-b-3 border-black font-black text-black">
                                Description
                            </th>
                        </tr>
                    </thead>
                    <tbody className="bg-white dark:bg-gray-900">
                        <tr className="border-b-2 border-black dark:border-white">
                            <td className="px-4 py-2 border-r-3 border-black dark:border-white font-mono">
                                border-3
                            </td>
                            <td className="px-4 py-2 border-r-3 border-black dark:border-white font-mono">
                                border-width: 3px
                            </td>
                            <td className="px-4 py-2">Thick border for brutalist look</td>
                        </tr>
                        <tr className="border-b-2 border-black dark:border-white">
                            <td className="px-4 py-2 border-r-3 border-black dark:border-white font-mono">
                                shadow-brutal
                            </td>
                            <td className="px-4 py-2 border-r-3 border-black dark:border-white font-mono">
                                box-shadow: 4px 4px 0 #000
                            </td>
                            <td className="px-4 py-2">Hard offset shadow</td>
                        </tr>
                        <tr className="border-b-2 border-black dark:border-white">
                            <td className="px-4 py-2 border-r-3 border-black dark:border-white font-mono">
                                font-black
                            </td>
                            <td className="px-4 py-2 border-r-3 border-black dark:border-white font-mono">
                                font-weight: 900
                            </td>
                            <td className="px-4 py-2">Heavy typography</td>
                        </tr>
                        <tr>
                            <td className="px-4 py-2 border-r-3 border-black dark:border-white font-mono">
                                Colors
                            </td>
                            <td className="px-4 py-2 border-r-3 border-black dark:border-white font-mono">
                                #FF6B6B, #4ECDC4, #FFE66D
                            </td>
                            <td className="px-4 py-2">Primary, Secondary, Accent</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <h2>Quick Example</h2>
            <pre className="bg-gray-900 text-white p-4 border-3 border-black dark:border-white shadow-brutal overflow-x-auto">
                {`// Using CLI-copied components
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

function MyComponent() {
  return (
    <Card variant="default" padding="default">
      <CardContent>
        <h2 className="font-black text-xl mb-4">Welcome!</h2>
        <Button variant="primary">Get Started</Button>
        <Button variant="secondary" className="ml-2">Learn More</Button>
      </CardContent>
    </Card>
  );
}`}
            </pre>

            <h2>Next Steps</h2>
            <ul>
                <li>
                    <Link
                        href="/docs/installation"
                        className="font-bold underline hover:text-[#FF6B6B]"
                    >
                        Installation Guide
                    </Link>{' '}
                    - Set up Brutalist UI in your project
                </li>
                <li>
                    <Link href="/docs/cli" className="font-bold underline hover:text-[#FF6B6B]">
                        CLI Reference
                    </Link>{' '}
                    - Learn about the CLI commands
                </li>
                <li>
                    <Link
                        href="/docs/components"
                        className="font-bold underline hover:text-[#FF6B6B]"
                    >
                        Components
                    </Link>{' '}
                    - Browse all 27 components
                </li>
                <li>
                    <Link
                        href="/docs/components/button"
                        className="font-bold underline hover:text-[#FF6B6B]"
                    >
                        Button
                    </Link>{' '}
                    - Start with the Button component
                </li>
            </ul>
        </div>
    );
}
