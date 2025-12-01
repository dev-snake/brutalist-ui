import { Card, CardContent, Badge } from 'brutalist-ui';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Documentation - Brutalist UI | Neo-Brutalism React Component Library',
    description: 'Learn how to use Brutalist UI, the Neo-Brutalism React component library. Built on Radix UI and Tailwind CSS with bold borders, offset shadows, and vibrant colors.',
    keywords: ['brutalist ui docs', 'neo-brutalism guide', 'react component library tutorial', 'brutalism css documentation', 'radix ui brutalism'],
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
                Neo-Brutalism UI is a React component library that brings the bold, blocky aesthetic
                of Neo-Brutalism to your web applications. Built on top of Radix UI primitives and
                styled with Tailwind CSS.
            </p>

            <h2>What is Neo-Brutalism?</h2>
            <p>Neo-Brutalism (also known as Neubrutalism) is a design trend characterized by:</p>
            <ul>
                <li>
                    <strong>Bold borders</strong> - Thick, solid black outlines (3-4px)
                </li>
                <li>
                    <strong>Offset shadows</strong> - Hard shadows offset 4-8px
                </li>
                <li>
                    <strong>No rounded corners</strong> - Sharp, rectangular shapes
                </li>
                <li>
                    <strong>Heavy typography</strong> - Bold, black weight fonts
                </li>
                <li>
                    <strong>Vibrant colors</strong> - High contrast, saturated palettes
                </li>
                <li>
                    <strong>Pressable feel</strong> - Interactive states that feel tangible
                </li>
            </ul>

            <h2>Why Neo-Brutalism UI?</h2>

            <div className="grid gap-4 my-6">
                <Card
                    variant="flat"
                    padding="default"
                    className="dark:bg-gray-900 dark:border-white"
                >
                    <CardContent>
                        <h3 className="font-black mb-2">🎯 Accessible</h3>
                        <p className="text-sm text-gray-700 dark:text-gray-300">
                            Built on Radix UI primitives with full keyboard navigation and screen
                            reader support.
                        </p>
                    </CardContent>
                </Card>

                <Card
                    variant="flat"
                    padding="default"
                    className="dark:bg-gray-900 dark:border-white"
                >
                    <CardContent>
                        <h3 className="font-black mb-2">🎨 Customizable</h3>
                        <p className="text-sm text-gray-700 dark:text-gray-300">
                            Custom Tailwind plugin with nb-* utilities. Easy to extend and match
                            your brand.
                        </p>
                    </CardContent>
                </Card>

                <Card
                    variant="flat"
                    padding="default"
                    className="dark:bg-gray-900 dark:border-white"
                >
                    <CardContent>
                        <h3 className="font-black mb-2">📦 Modern</h3>
                        <p className="text-sm text-gray-700 dark:text-gray-300">
                            TypeScript first, tree-shakeable, and compatible with React 18+ and
                            Next.js 14+.
                        </p>
                    </CardContent>
                </Card>
            </div>

            <h2>Quick Example</h2>
            <pre className="bg-gray-900 text-white p-4 border-3 border-black dark:border-white shadow-brutal overflow-x-auto">
                {`import { Button, Card } from 'brutalist-ui';

function MyComponent() {
  return (
    <Card>
      <Button variant="primary">
        Get Started
      </Button>
    </Card>
  );
}`}
            </pre>

            <h2>Next Steps</h2>
            <ul>
                <li>
                    Read the{' '}
                    <a href="/docs/installation" className="font-bold underline">
                        Installation Guide
                    </a>
                </li>
                <li>
                    Explore the{' '}
                    <a href="/docs/components" className="font-bold underline">
                        Component Library
                    </a>
                </li>
                <li>
                    Check out the{' '}
                    <a href="/docs/components/button" className="font-bold underline">
                        Button
                    </a>{' '}
                    component
                </li>
            </ul>
        </div>
    );
}
