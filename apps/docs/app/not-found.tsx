import Link from 'next/link';
import { Button } from '@/components/ui';

export default function NotFound() {
    return (
        <main className="min-h-screen flex items-center justify-center bg-white dark:bg-gray-950 px-4">
            <div className="text-center">
                {/* 404 Number with Brutalist Style */}
                <div className="relative inline-block mb-8">
                    {/* All layers stacked at the same position */}
                    <span
                        className="absolute inset-0 text-[150px] sm:text-[200px] md:text-[280px] font-black text-[#4ECDC4] select-none"
                        style={{ transform: 'translate(12px, 12px)' }}
                        aria-hidden="true"
                    >
                        404
                    </span>
                    <span
                        className="absolute inset-0 text-[150px] sm:text-[200px] md:text-[280px] font-black text-[#FF6B6B] select-none"
                        style={{ transform: 'translate(6px, 6px)' }}
                        aria-hidden="true"
                    >
                        404
                    </span>
                    <h1
                        className="relative text-[150px] sm:text-[200px] md:text-[280px] font-black text-[#FFE66D] select-none"
                        style={{
                            WebkitTextStroke: '3px #000',
                            paintOrder: 'stroke fill',
                        }}
                    >
                        404
                    </h1>
                </div>

                {/* Message */}
                <div className="border-3 border-black dark:border-white bg-white dark:bg-gray-900 p-6 sm:p-8 shadow-brutal max-w-md mx-auto">
                    <h2 className="text-2xl sm:text-3xl font-black mb-4 text-gray-900 dark:text-white">
                        Page Not Found
                    </h2>
                    <p className="text-gray-700 dark:text-gray-300 font-medium mb-6">
                        Oops! The page you&apos;re looking for doesn&apos;t exist or has been moved.
                    </p>

                    {/* Action Buttons */}
                    <div className="flex flex-col sm:flex-row gap-3 justify-center">
                        <Link href="/">
                            <Button variant="primary" size="lg" className="w-full sm:w-auto truncate">
                                ← Go Home
                            </Button>
                        </Link>
                        <Link href="/docs">
                            <Button
                                variant="outline"
                                size="lg"
                                className="w-full sm:w-auto dark:border-white dark:text-white"
                            >
                                Documentation
                            </Button>
                        </Link>
                    </div>
                </div>

                {/* Fun suggestion */}
                <p className="mt-8 text-sm text-gray-500 dark:text-gray-400 font-medium">
                    Looking for components?{' '}
                    <Link
                        href="/docs/components"
                        className="text-[#FF6B6B] hover:underline font-bold"
                    >
                        Browse all components →
                    </Link>
                </p>
            </div>
        </main>
    );
}
