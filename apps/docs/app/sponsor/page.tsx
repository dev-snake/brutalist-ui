import Link from 'next/link';
import { Heart, Coffee, Github, Star, Zap, Gift } from 'lucide-react';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Sponsor Brutalist UI | Support Open Source Neo-Brutalism Components',
    description: 'Support the development of Brutalist UI, the open-source Neo-Brutalism React component library. Sponsor on GitHub or Buy Me a Coffee.',
    keywords: ['sponsor brutalist ui', 'support open source', 'github sponsors', 'buy me a coffee'],
    openGraph: {
        title: 'Sponsor Brutalist UI',
        description: 'Support the development of Brutalist UI open-source component library.',
        url: 'https://brutalistui.site/sponsor',
    },
    alternates: {
        canonical: 'https://brutalistui.site/sponsor',
    },
};

export default function SponsorPage() {
    return (
        <div className="min-h-screen bg-[#FFFBF5] dark:bg-gray-900">
            <div className="max-w-4xl mx-auto px-6 py-16">
                {/* Header */}
                <div className="text-center mb-16">
                    <div className="inline-flex items-center justify-center w-20 h-20 bg-[#FF6B6B] border-3 border-black dark:border-white mb-6">
                        <Heart className="w-10 h-10 text-white" fill="white" />
                    </div>
                    <h1 className="text-4xl md:text-6xl font-black mb-4 dark:text-white">
                        Support Brutalist UI
                    </h1>
                    <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                        Help us keep this project alive and growing. Your support enables us to add
                        new components, fix bugs, and maintain documentation.
                    </p>
                </div>

                {/* Sponsor Options */}
                <div className="grid md:grid-cols-2 gap-6 mb-16">
                    {/* GitHub Sponsors */}
                    <a
                        href="https://github.com/sponsors/dev-snake"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group block p-8 bg-white dark:bg-gray-800 border-3 border-black dark:border-white hover:shadow-[8px_8px_0px_0px_#000] dark:hover:shadow-[8px_8px_0px_0px_#fff] transition-all duration-200 hover:-translate-y-1"
                    >
                        <div className="flex items-center gap-4 mb-4">
                            <div className="p-3 bg-[#EA4AAA] border-2 border-black">
                                <Github className="w-6 h-6 text-white" />
                            </div>
                            <h2 className="text-2xl font-black dark:text-white">GitHub Sponsors</h2>
                        </div>
                        <p className="text-gray-600 dark:text-gray-300 mb-4">
                            The best way to support open source. Get exclusive updates and
                            recognition.
                        </p>
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#EA4AAA] text-white font-bold border-2 border-black group-hover:shadow-[4px_4px_0px_0px_#000] transition-all">
                            <Heart className="w-4 h-4" />
                            Sponsor on GitHub
                        </div>
                    </a>

                    {/* Buy Me A Coffee */}
                    <a
                        href="https://buymeacoffee.com/devsnake"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group block p-8 bg-white dark:bg-gray-800 border-3 border-black dark:border-white hover:shadow-[8px_8px_0px_0px_#000] dark:hover:shadow-[8px_8px_0px_0px_#fff] transition-all duration-200 hover:-translate-y-1"
                    >
                        <div className="flex items-center gap-4 mb-4">
                            <div className="p-3 bg-[#FFDD00] border-2 border-black">
                                <Coffee className="w-6 h-6 text-black" />
                            </div>
                            <h2 className="text-2xl font-black dark:text-white">Buy Me A Coffee</h2>
                        </div>
                        <p className="text-gray-600 dark:text-gray-300 mb-4">
                            Quick and easy one-time donations. Every coffee counts! ☕
                        </p>
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#FFDD00] text-black font-bold border-2 border-black group-hover:shadow-[4px_4px_0px_0px_#000] transition-all">
                            <Coffee className="w-4 h-4" />
                            Buy a Coffee
                        </div>
                    </a>
                </div>

                {/* Why Sponsor */}
                <div className="bg-[#4ECDC4] border-3 border-black dark:border-white p-8 mb-16">
                    <h2 className="text-3xl font-black mb-6 text-black">Why Sponsor?</h2>
                    <div className="grid md:grid-cols-3 gap-6">
                        <div className="flex items-start gap-3">
                            <div className="p-2 bg-white border-2 border-black">
                                <Zap className="w-5 h-5" />
                            </div>
                            <div>
                                <h3 className="font-bold text-black">Active Development</h3>
                                <p className="text-sm text-gray-800">
                                    New components and features regularly
                                </p>
                            </div>
                        </div>
                        <div className="flex items-start gap-3">
                            <div className="p-2 bg-white border-2 border-black">
                                <Star className="w-5 h-5" />
                            </div>
                            <div>
                                <h3 className="font-bold text-black">Priority Support</h3>
                                <p className="text-sm text-gray-800">
                                    Get help faster with your issues
                                </p>
                            </div>
                        </div>
                        <div className="flex items-start gap-3">
                            <div className="p-2 bg-white border-2 border-black">
                                <Gift className="w-5 h-5" />
                            </div>
                            <div>
                                <h3 className="font-bold text-black">Exclusive Access</h3>
                                <p className="text-sm text-gray-800">
                                    Early access to Pro components
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Other Ways */}
                <div className="text-center">
                    <h2 className="text-2xl font-black mb-6 dark:text-white">
                        Other Ways to Support
                    </h2>
                    <div className="flex flex-wrap justify-center gap-4">
                        <a
                            href="https://github.com/dev-snake/brutalist-ui"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 px-6 py-3 bg-white dark:bg-gray-800 border-3 border-black dark:border-white font-bold hover:shadow-[4px_4px_0px_0px_#000] dark:hover:shadow-[4px_4px_0px_0px_#fff] transition-all dark:text-white"
                        >
                            <Star className="w-5 h-5" />
                            Star on GitHub
                        </a>
                        <a
                            href="https://twitter.com/intent/tweet?text=Check%20out%20Brutalist%20UI%20-%20A%20Neo-Brutalism%20styled%20React%20component%20library!%20https://github.com/dev-snake/brutalist-ui"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 px-6 py-3 bg-white dark:bg-gray-800 border-3 border-black dark:border-white font-bold hover:shadow-[4px_4px_0px_0px_#000] dark:hover:shadow-[4px_4px_0px_0px_#fff] transition-all dark:text-white"
                        >
                            Share on X
                        </a>
                    </div>
                    <p className="mt-6 text-gray-500 dark:text-gray-400">
                        Every star, share, and contribution helps! 💛
                    </p>
                </div>

                {/* Back to Docs */}
                <div className="mt-16 text-center">
                    <Link
                        href="/docs/components"
                        className="inline-flex items-center gap-2 text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white font-medium"
                    >
                        ← Back to Documentation
                    </Link>
                </div>
            </div>
        </div>
    );
}
