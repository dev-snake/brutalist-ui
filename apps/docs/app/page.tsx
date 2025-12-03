import Link from 'next/link';
import { Button, Card, CardContent, CardHeader, CardTitle, Badge } from '@/components/ui';
import { ThemeToggle } from '@/components/theme-toggle';

export default function Home() {
    return (
        <main className="min-h-screen overflow-x-hidden bg-white dark:bg-gray-950">
            {/* Theme Toggle - Fixed Position */}
            <div className="fixed top-4 right-4 z-50">
                <ThemeToggle />
            </div>

            {/* Hero Section */}
            <section className="container-brutal py-12 sm:py-20 px-4">
                <div className="flex flex-col items-center text-center">
                    <Badge variant="primary" size="lg" className="mb-4 sm:mb-6">
                        v0.1.7
                    </Badge>

                    {/* 3D Brutalist Logo Text */}
                    <div className="relative mb-6 sm:mb-8">
                        {/* BRUTALIST text */}
                        <div className="relative inline-block">
                            <h1 className="text-4xl sm:text-6xl md:text-8xl lg:text-9xl font-black tracking-tighter select-none">
                                {/* Deep shadow - darkest */}
                                <span
                                    className="absolute text-black"
                                    style={{
                                        transform: 'translate(8px, 8px)',
                                    }}
                                    aria-hidden="true"
                                >
                                    Brutalist
                                </span>
                                {/* Mid shadow - coral red */}
                                <span
                                    className="absolute text-[#FF6B6B]"
                                    style={{
                                        transform: 'translate(5px, 5px)',
                                    }}
                                    aria-hidden="true"
                                >
                                    Brutalist
                                </span>
                                {/* Light shadow - teal */}
                                <span
                                    className="absolute text-[#4ECDC4]"
                                    style={{
                                        transform: 'translate(2px, 2px)',
                                    }}
                                    aria-hidden="true"
                                >
                                    Brutalist
                                </span>
                                {/* Main text - yellow */}
                                <span
                                    className="relative text-[#FFE66D]"
                                    style={{
                                        WebkitTextStroke: '2px #000',
                                        paintOrder: 'stroke fill',
                                    }}
                                >
                                    Brutalist
                                </span>
                            </h1>
                        </div>

                        {/* UI text */}
                        <div className="relative -mt-2 sm:-mt-6 md:-mt-8 inline-block">
                            <h1 className="text-5xl sm:text-7xl md:text-9xl lg:text-[11rem] font-black tracking-tighter select-none">
                                {/* Deep shadow - darkest */}
                                <span
                                    className="absolute text-black"
                                    style={{
                                        transform: 'translate(10px, 10px)',
                                    }}
                                    aria-hidden="true"
                                >
                                    UI
                                </span>
                                {/* Mid shadow - teal */}
                                <span
                                    className="absolute text-[#4ECDC4]"
                                    style={{
                                        transform: 'translate(6px, 6px)',
                                    }}
                                    aria-hidden="true"
                                >
                                    UI
                                </span>
                                {/* Light shadow - yellow */}
                                <span
                                    className="absolute text-[#FFE66D]"
                                    style={{
                                        transform: 'translate(3px, 3px)',
                                    }}
                                    aria-hidden="true"
                                >
                                    UI
                                </span>
                                {/* Main text - coral red */}
                                <span
                                    className="relative text-[#FF6B6B]"
                                    style={{
                                        WebkitTextStroke: '3px #000',
                                        paintOrder: 'stroke fill',
                                    }}
                                >
                                    UI
                                </span>
                            </h1>
                        </div>
                    </div>
                    <p className="text-lg sm:text-xl md:text-2xl font-bold max-w-2xl mb-6 sm:mb-8 text-gray-700 dark:text-gray-300 px-2">
                        Bold, blocky, and beautiful React components. Built with Radix UI, styled
                        with Tailwind CSS, and designed for maximum impact.
                    </p>
                    <div className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4 justify-center w-full sm:w-auto px-4 sm:px-0">
                        <Link href="/docs" className="w-full sm:w-auto">
                            <Button variant="primary" size="lg" className="w-full sm:w-auto">
                                Get Started
                            </Button>
                        </Link>
                        <Link href="/docs/components" className="w-full sm:w-auto">
                            <Button
                                variant="outline"
                                size="lg"
                                className="w-full sm:w-auto dark:border-white dark:text-white dark:hover:bg-gray-800"
                            >
                                Components
                            </Button>
                        </Link>
                        <a
                            href="https://github.com/dev-snake/brutalist-ui"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-full sm:w-auto"
                        >
                            <Button
                                variant="default"
                                size="lg"
                                className="w-full sm:w-auto dark:bg-white dark:text-black"
                            >
                                GitHub
                            </Button>
                        </a>
                        <Link href="/sponsor" className="w-full sm:w-auto">
                            <Button variant="danger" size="lg" className="w-full sm:w-auto">
                                ❤️ Sponsor
                            </Button>
                        </Link>
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section className="container-brutal py-12 sm:py-16 px-4">
                <h2 className="text-3xl sm:text-4xl font-black text-center mb-8 sm:mb-12">
                    Features
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                    <Card variant="default" className="dark:bg-gray-900 dark:border-white">
                        <CardHeader>
                            <CardTitle className="text-base sm:text-lg">
                                🎨 Neo-Brutalism Design
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="font-medium text-gray-700 dark:text-gray-300 text-sm sm:text-base">
                                Bold 3px borders, 4px offset shadows, heavy fonts. No rounded
                                corners. Just pure, blocky goodness.
                            </p>
                        </CardContent>
                    </Card>

                    <Card variant="default" className="dark:bg-gray-900 dark:border-white">
                        <CardHeader>
                            <CardTitle className="text-base sm:text-lg">♿ Accessible</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="font-medium text-gray-700 dark:text-gray-300 text-sm sm:text-base">
                                Built on Radix UI primitives for keyboard navigation, screen reader
                                support, and ARIA compliance.
                            </p>
                        </CardContent>
                    </Card>

                    <Card variant="default" className="dark:bg-gray-900 dark:border-white">
                        <CardHeader>
                            <CardTitle className="text-base sm:text-lg">
                                🎯 TypeScript First
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="font-medium text-gray-700 dark:text-gray-300 text-sm sm:text-base">
                                Full TypeScript support with type-safe variants using
                                class-variance-authority.
                            </p>
                        </CardContent>
                    </Card>

                    <Card variant="default" className="dark:bg-gray-900 dark:border-white">
                        <CardHeader>
                            <CardTitle className="text-base sm:text-lg">🎛️ Customizable</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="font-medium text-gray-700 dark:text-gray-300 text-sm sm:text-base">
                                Custom Tailwind plugin with nb-* utilities. Easy to extend and
                                modify to match your brand.
                            </p>
                        </CardContent>
                    </Card>

                    <Card variant="default" className="dark:bg-gray-900 dark:border-white">
                        <CardHeader>
                            <CardTitle className="text-base sm:text-lg">
                                📦 Tree Shakeable
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="font-medium text-gray-700 dark:text-gray-300 text-sm sm:text-base">
                                Import only what you need. ESM and CJS builds available. No bundle
                                bloat.
                            </p>
                        </CardContent>
                    </Card>

                    <Card variant="default" className="dark:bg-gray-900 dark:border-white">
                        <CardHeader>
                            <CardTitle className="text-base sm:text-lg">🚀 Modern Stack</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="font-medium text-gray-700 dark:text-gray-300 text-sm sm:text-base">
                                React 18+, Next.js 14 compatible. Server Components ready with "use
                                client" directives.
                            </p>
                        </CardContent>
                    </Card>
                </div>
            </section>

            {/* Quick Start */}
            <section className="container-brutal py-12 sm:py-16 px-4">
                <h2 className="text-3xl sm:text-4xl font-black text-center mb-8 sm:mb-12">
                    Quick Start
                </h2>
                <Card className="max-w-3xl mx-auto dark:bg-gray-900 dark:border-white">
                    <CardContent className="pt-4 sm:pt-6">
                        <div className="space-y-4">
                            <div>
                                <p className="font-bold mb-2 text-sm sm:text-base">
                                    1. Install the package:
                                </p>
                                <pre className="bg-gray-900 text-white p-3 sm:p-4 border-3 border-black dark:border-white shadow-brutal overflow-x-auto text-xs sm:text-sm">
                                    <code>npm install brutalist-ui</code>
                                </pre>
                            </div>
                            <div>
                                <p className="font-bold mb-2 text-sm sm:text-base">
                                    2. Add to your tailwind.config.js:
                                </p>
                                <pre className="bg-gray-900 text-white p-3 sm:p-4 border-3 border-black dark:border-white shadow-brutal overflow-x-auto text-xs sm:text-sm">
                                    <code>{`module.exports = {
  content: [
    // ... your content
    './node_modules/brutalist-ui/**/*.{js,mjs}'
  ],
  plugins: [
    require('brutalist-ui/brutalism-plugin')
  ]
}`}</code>
                                </pre>
                            </div>
                            <div>
                                <p className="font-bold mb-2 text-sm sm:text-base">
                                    3. Use the components:
                                </p>
                                <pre className="bg-gray-900 text-white p-3 sm:p-4 border-3 border-black dark:border-white shadow-brutal overflow-x-auto text-xs sm:text-sm">
                                    <code>{`import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

function App() {
  return (
    <Card>
      <Button variant="primary">
        Click me!
      </Button>
    </Card>
  );
}`}</code>
                                </pre>
                            </div>
                        </div>
                    </CardContent>
                </Card>
            </section>

            {/* Footer */}
            <footer className="border-t-3 border-black dark:border-white mt-12 sm:mt-16">
                <div className="container-brutal py-6 sm:py-8 px-4">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">
                        <p className="font-bold text-sm sm:text-base">
                            Built with ❤️ using React, Tailwind CSS & Radix UI
                        </p>
                        <div className="flex gap-4">
                            <a
                                href="https://github.com/dev-snake/brutalist-ui"
                                className="font-bold hover:underline text-sm sm:text-base"
                            >
                                GitHub
                            </a>
                            <a
                                href="/docs"
                                className="font-bold hover:underline text-sm sm:text-base"
                            >
                                Documentation
                            </a>
                        </div>
                    </div>
                </div>
            </footer>
        </main>
    );
}
