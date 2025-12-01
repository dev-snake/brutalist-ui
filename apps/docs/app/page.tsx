import Link from 'next/link';
import { Button, Card, CardContent, CardHeader, CardTitle, Badge } from 'brutalist-ui';

export default function Home() {
    return (
        <main className="min-h-screen overflow-x-hidden">
            {/* Hero Section */}
            <section className="container-brutal py-12 sm:py-20 px-4">
                <div className="flex flex-col items-center text-center">
                    <Badge variant="primary" size="lg" className="mb-4 sm:mb-6">
                        v0.1.1
                    </Badge>
                    <h1 className="text-4xl sm:text-6xl md:text-8xl font-black tracking-tighter mb-4 sm:mb-6">
                        Brutalist
                        <span className="block text-[#FF6B6B]">UI</span>
                    </h1>
                    <p className="text-lg sm:text-xl md:text-2xl font-bold max-w-2xl mb-6 sm:mb-8 text-gray-700 px-2">
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
                            <Button variant="outline" size="lg" className="w-full sm:w-auto">
                                Components
                            </Button>
                        </Link>
                        <a
                            href="https://github.com/dev-snake/brutalist-ui"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-full sm:w-auto"
                        >
                            <Button variant="default" size="lg" className="w-full sm:w-auto">
                                GitHub
                            </Button>
                        </a>
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section className="container-brutal py-12 sm:py-16 px-4">
                <h2 className="text-3xl sm:text-4xl font-black text-center mb-8 sm:mb-12">
                    Features
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                    <Card variant="default">
                        <CardHeader>
                            <CardTitle className="text-base sm:text-lg">
                                🎨 Neo-Brutalism Design
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="font-medium text-gray-700 text-sm sm:text-base">
                                Bold 3px borders, 4px offset shadows, heavy fonts. No rounded
                                corners. Just pure, blocky goodness.
                            </p>
                        </CardContent>
                    </Card>

                    <Card variant="default">
                        <CardHeader>
                            <CardTitle className="text-base sm:text-lg">♿ Accessible</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="font-medium text-gray-700 text-sm sm:text-base">
                                Built on Radix UI primitives for keyboard navigation, screen reader
                                support, and ARIA compliance.
                            </p>
                        </CardContent>
                    </Card>

                    <Card variant="default">
                        <CardHeader>
                            <CardTitle className="text-base sm:text-lg">
                                🎯 TypeScript First
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="font-medium text-gray-700 text-sm sm:text-base">
                                Full TypeScript support with type-safe variants using
                                class-variance-authority.
                            </p>
                        </CardContent>
                    </Card>

                    <Card variant="default">
                        <CardHeader>
                            <CardTitle className="text-base sm:text-lg">🎛️ Customizable</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="font-medium text-gray-700 text-sm sm:text-base">
                                Custom Tailwind plugin with nb-* utilities. Easy to extend and
                                modify to match your brand.
                            </p>
                        </CardContent>
                    </Card>

                    <Card variant="default">
                        <CardHeader>
                            <CardTitle className="text-base sm:text-lg">
                                📦 Tree Shakeable
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="font-medium text-gray-700 text-sm sm:text-base">
                                Import only what you need. ESM and CJS builds available. No bundle
                                bloat.
                            </p>
                        </CardContent>
                    </Card>

                    <Card variant="default">
                        <CardHeader>
                            <CardTitle className="text-base sm:text-lg">🚀 Modern Stack</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="font-medium text-gray-700 text-sm sm:text-base">
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
                <Card className="max-w-3xl mx-auto">
                    <CardContent className="pt-4 sm:pt-6">
                        <div className="space-y-4">
                            <div>
                                <p className="font-bold mb-2 text-sm sm:text-base">
                                    1. Install the package:
                                </p>
                                <pre className="bg-gray-900 text-white p-3 sm:p-4 border-3 border-black shadow-brutal overflow-x-auto text-xs sm:text-sm">
                                    <code>npm install brutalist-ui</code>
                                </pre>
                            </div>
                            <div>
                                <p className="font-bold mb-2 text-sm sm:text-base">
                                    2. Add to your tailwind.config.js:
                                </p>
                                <pre className="bg-gray-900 text-white p-3 sm:p-4 border-3 border-black shadow-brutal overflow-x-auto text-xs sm:text-sm">
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
                                <pre className="bg-gray-900 text-white p-3 sm:p-4 border-3 border-black shadow-brutal overflow-x-auto text-xs sm:text-sm">
                                    <code>{`import { Button, Card } from 'brutalist-ui';

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
            <footer className="border-t-3 border-black mt-12 sm:mt-16">
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
