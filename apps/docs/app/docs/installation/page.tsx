import { Badge, Card, CardContent } from '@/components/ui';
import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
    title: 'Installation Guide - Brutalist UI | Setup Neo-Brutalism Components',
    description:
        'Install Brutalist UI in your React or Next.js project. Step-by-step guide for npm, pnpm, yarn with Tailwind CSS configuration and TypeScript support.',
    keywords: [
        'install brutalist-ui',
        'brutalist ui setup',
        'neo-brutalism npm',
        'react brutalism install',
        'tailwind brutalism plugin',
    ],
    openGraph: {
        title: 'Installation Guide - Brutalist UI',
        description:
            'Install Brutalist UI in your React or Next.js project with npm, pnpm, or yarn.',
        url: 'https://brutalistui.site/docs/installation',
    },
    alternates: {
        canonical: 'https://brutalistui.site/docs/installation',
    },
};

const frameworks = [
    {
        name: 'Next.js',
        href: '/docs/installation/nextjs',
        icon: (
            <svg viewBox="0 0 180 180" fill="currentColor" className="w-10 h-10">
                <mask
                    id="mask0_408_139"
                    style={{ maskType: 'alpha' }}
                    maskUnits="userSpaceOnUse"
                    x="0"
                    y="0"
                    width="180"
                    height="180"
                >
                    <circle cx="90" cy="90" r="90" fill="black" />
                </mask>
                <g mask="url(#mask0_408_139)">
                    <circle cx="90" cy="90" r="90" fill="black" />
                    <path
                        d="M149.508 157.52L69.142 54H54V125.97H66.1136V69.3836L139.999 164.845C143.333 162.614 146.509 160.165 149.508 157.52Z"
                        fill="url(#paint0_linear_408_139)"
                    />
                    <rect
                        x="115"
                        y="54"
                        width="12"
                        height="72"
                        fill="url(#paint1_linear_408_139)"
                    />
                </g>
                <defs>
                    <linearGradient
                        id="paint0_linear_408_139"
                        x1="109"
                        y1="116.5"
                        x2="144.5"
                        y2="160.5"
                        gradientUnits="userSpaceOnUse"
                    >
                        <stop stopColor="white" />
                        <stop offset="1" stopColor="white" stopOpacity="0" />
                    </linearGradient>
                    <linearGradient
                        id="paint1_linear_408_139"
                        x1="121"
                        y1="54"
                        x2="120.799"
                        y2="106.875"
                        gradientUnits="userSpaceOnUse"
                    >
                        <stop stopColor="white" />
                        <stop offset="1" stopColor="white" stopOpacity="0" />
                    </linearGradient>
                </defs>
            </svg>
        ),
        description: 'The React Framework for the Web',
    },
    {
        name: 'Vite',
        href: '/docs/installation/vite',
        icon: (
            <svg viewBox="0 0 410 404" fill="none" className="w-10 h-10">
                <path
                    d="M399.641 59.5246L215.643 388.545C211.844 395.338 202.084 395.378 198.228 388.618L10.5817 59.5563C6.38087 52.1896 12.6802 43.2665 21.0281 44.7586L205.223 77.6824C206.398 77.8924 207.601 77.8904 208.776 77.6763L389.119 44.8058C397.439 43.2894 403.768 52.1434 399.641 59.5246Z"
                    fill="url(#vite-gradient-1)"
                />
                <path
                    d="M292.965 1.5744L156.801 28.2552C154.563 28.6937 152.906 30.5903 152.771 32.8664L144.395 174.33C144.198 177.662 147.258 180.248 150.51 179.498L188.42 170.749C191.967 169.931 195.172 173.055 194.443 176.622L183.18 231.775C182.422 235.487 185.907 238.661 189.532 237.56L212.947 230.446C216.577 229.344 220.065 232.527 219.297 236.242L201.398 322.875C200.278 328.294 207.486 331.249 210.492 326.603L212.5 323.5L323.454 102.072C325.312 98.3645 322.108 94.137 318.036 94.9228L279.014 102.454C275.347 103.161 272.227 99.746 273.262 96.1583L298.731 7.86689C299.767 4.27314 296.636 0.855181 292.965 1.5744Z"
                    fill="url(#vite-gradient-2)"
                />
                <defs>
                    <linearGradient
                        id="vite-gradient-1"
                        x1="6.00017"
                        y1="32.9999"
                        x2="235"
                        y2="344"
                        gradientUnits="userSpaceOnUse"
                    >
                        <stop stopColor="#41D1FF" />
                        <stop offset="1" stopColor="#BD34FE" />
                    </linearGradient>
                    <linearGradient
                        id="vite-gradient-2"
                        x1="194.651"
                        y1="8.81818"
                        x2="236.076"
                        y2="292.989"
                        gradientUnits="userSpaceOnUse"
                    >
                        <stop stopColor="#FFBD4F" />
                        <stop offset="1" stopColor="#FF980E" />
                    </linearGradient>
                </defs>
            </svg>
        ),
        description: 'Next Generation Frontend Tooling',
    },
    {
        name: 'Manual',
        href: '/docs/installation/manual',
        icon: (
            <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                />
            </svg>
        ),
        description: 'Add components manually to your project',
    },
];

export default function InstallationPage() {
    return (
        <div className="max-w-4xl">
            <Badge variant="secondary" className="mb-4">
                Getting Started
            </Badge>
            <h1 className="text-4xl font-black mb-4">Installation</h1>
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-10">
                Choose your preferred method to add Brutalist UI to your project.
            </p>

            {/* Prerequisites */}
            <section className="mb-12">
                <div className="flex items-center gap-3 mb-4">
                    <div className="w-8 h-8 bg-[#FFE66D] border-3 border-black flex items-center justify-center font-black text-black">
                        !
                    </div>
                    <h2 className="text-xl font-black">Prerequisites</h2>
                </div>
                <div className="grid sm:grid-cols-3 gap-3">
                    {[
                        { label: 'React', value: '18+ or 19' },
                        { label: 'Tailwind CSS', value: '3.0+' },
                        { label: 'Node.js', value: '18+' },
                    ].map((item) => (
                        <div
                            key={item.label}
                            className="p-4 border-3 border-black dark:border-white bg-white dark:bg-gray-900"
                        >
                            <p className="text-xs uppercase tracking-wider text-gray-500 dark:text-gray-400 mb-1">
                                {item.label}
                            </p>
                            <p className="font-black">{item.value}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Two Installation Methods */}
            <section className="mb-12">
                <h2 className="text-2xl font-black mb-6">Choose Your Method</h2>
                <div className="grid md:grid-cols-2 gap-6">
                    {/* Option A: NPM Package */}
                    <div className="relative">
                        <div className="absolute -top-3 left-4 px-2 bg-white dark:bg-black z-10">
                            <span className="text-xs font-black uppercase tracking-wider text-[#4ECDC4]">
                                Recommended
                            </span>
                        </div>
                        <Card
                            variant="default"
                            padding="default"
                            className="h-full border-[#4ECDC4]"
                        >
                            <CardContent className="p-6">
                                <div className="w-12 h-12 bg-[#4ECDC4] border-3 border-black flex items-center justify-center mb-4">
                                    <svg
                                        className="w-6 h-6"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth={2.5}
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
                                        />
                                    </svg>
                                </div>
                                <h3 className="text-xl font-black mb-2">NPM Package</h3>
                                <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                                    Quick start. Install and use all 27 components immediately.
                                </p>
                                <pre className="bg-black text-[#4ECDC4] p-3 text-sm font-mono mb-4 overflow-x-auto">
                                    pnpm add brutalist-ui
                                </pre>
                                <ul className="text-sm space-y-2 mb-4">
                                    <li className="flex items-start gap-2">
                                        <span className="w-1.5 h-1.5 mt-2 bg-[#4ECDC4]" />
                                        Zero config required
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="w-1.5 h-1.5 mt-2 bg-[#4ECDC4]" />
                                        Tree-shakeable exports
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="w-1.5 h-1.5 mt-2 bg-[#4ECDC4]" />
                                        TypeScript included
                                    </li>
                                </ul>
                            </CardContent>
                        </Card>
                    </div>

                    {/* Option B: CLI */}
                    <div>
                        <Card variant="default" padding="default" className="h-full">
                            <CardContent className="p-6">
                                <div className="w-12 h-12 bg-[#FF6B6B] border-3 border-black flex items-center justify-center mb-4">
                                    <svg
                                        className="w-6 h-6"
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
                                <h3 className="text-xl font-black mb-2">CLI Tool</h3>
                                <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                                    Copy source code. Full control over every component.
                                </p>
                                <pre className="bg-black text-[#FF6B6B] p-3 text-sm font-mono mb-4 overflow-x-auto">
                                    npx brutx@latest init
                                </pre>
                                <ul className="text-sm space-y-2 mb-4">
                                    <li className="flex items-start gap-2">
                                        <span className="w-1.5 h-1.5 mt-2 bg-[#FF6B6B]" />
                                        Full customization
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="w-1.5 h-1.5 mt-2 bg-[#FF6B6B]" />
                                        Pick individual components
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="w-1.5 h-1.5 mt-2 bg-[#FF6B6B]" />
                                        Own the code
                                    </li>
                                </ul>
                                <Link
                                    href="/docs/cli"
                                    className="inline-flex items-center text-sm font-bold hover:text-[#FF6B6B] transition-colors"
                                >
                                    CLI Reference
                                    <svg
                                        className="w-4 h-4 ml-1"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M9 5l7 7-7 7"
                                        />
                                    </svg>
                                </Link>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </section>

            {/* Quick Start */}
            <section className="mb-12 p-6 border-3 border-black dark:border-white bg-gray-50 dark:bg-gray-900">
                <h2 className="text-xl font-black mb-4">Quick Start with NPM</h2>
                <div className="grid gap-4">
                    <div className="flex gap-4">
                        <div className="flex-shrink-0 w-8 h-8 bg-black dark:bg-white text-white dark:text-black flex items-center justify-center font-black text-sm">
                            1
                        </div>
                        <div className="flex-1">
                            <p className="font-bold mb-2">Install the package</p>
                            <pre className="bg-black text-white p-3 text-sm font-mono overflow-x-auto">
                                pnpm add brutalist-ui
                            </pre>
                        </div>
                    </div>
                    <div className="flex gap-4">
                        <div className="flex-shrink-0 w-8 h-8 bg-black dark:bg-white text-white dark:text-black flex items-center justify-center font-black text-sm">
                            2
                        </div>
                        <div className="flex-1">
                            <p className="font-bold mb-2">Import styles</p>
                            <pre className="bg-black text-white p-3 text-sm font-mono overflow-x-auto">
                                {`import 'brutalist-ui/styles.css';`}
                            </pre>
                        </div>
                    </div>
                    <div className="flex gap-4">
                        <div className="flex-shrink-0 w-8 h-8 bg-black dark:bg-white text-white dark:text-black flex items-center justify-center font-black text-sm">
                            3
                        </div>
                        <div className="flex-1">
                            <p className="font-bold mb-2">Use components</p>
                            <pre className="bg-black text-white p-3 text-sm font-mono overflow-x-auto">
                                {`import { Button, Card } from 'brutalist-ui';`}
                            </pre>
                        </div>
                    </div>
                </div>
            </section>

            {/* Framework Guides */}
            <section className="mb-12">
                <h2 className="text-2xl font-black mb-6">Framework Guides</h2>
                <div className="grid gap-3">
                    {frameworks.map((framework) => (
                        <Link
                            key={framework.name}
                            href={framework.href}
                            className="group flex items-center gap-4 p-4 border-3 border-black dark:border-white bg-white dark:bg-gray-900 hover:translate-x-1 hover:shadow-brutal transition-all"
                        >
                            <div className="flex-shrink-0 w-12 h-12 border-2 border-black dark:border-white flex items-center justify-center bg-gray-50 dark:bg-gray-800">
                                {framework.icon}
                            </div>
                            <div className="flex-1 min-w-0">
                                <h3 className="font-black">{framework.name}</h3>
                                <p className="text-sm text-gray-500 dark:text-gray-400 truncate">
                                    {framework.description}
                                </p>
                            </div>
                            <svg
                                className="w-5 h-5 text-gray-400 group-hover:text-black dark:group-hover:text-white transition-colors"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M9 5l7 7-7 7"
                                />
                            </svg>
                        </Link>
                    ))}
                </div>
            </section>

            {/* Package Info */}
            <section className="grid sm:grid-cols-2 gap-6">
                <div className="p-6 border-3 border-black dark:border-white">
                    <h3 className="font-black mb-4 pb-2 border-b-2 border-black dark:border-white">
                        Package Info
                    </h3>
                    <dl className="space-y-3 text-sm">
                        <div className="flex justify-between">
                            <dt className="text-gray-500 dark:text-gray-400">NPM Package</dt>
                            <dd className="font-mono font-bold">brutalist-ui</dd>
                        </div>
                        <div className="flex justify-between">
                            <dt className="text-gray-500 dark:text-gray-400">CLI Package</dt>
                            <dd className="font-mono font-bold">brutalist</dd>
                        </div>
                        <div className="flex justify-between">
                            <dt className="text-gray-500 dark:text-gray-400">Components</dt>
                            <dd className="font-mono font-bold">27</dd>
                        </div>
                    </dl>
                </div>
                <div className="p-6 border-3 border-black dark:border-white bg-[#4ECDC4]/10">
                    <h3 className="font-black mb-4 pb-2 border-b-2 border-black dark:border-white">
                        TypeScript
                    </h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                        Full type definitions included. All components export their prop types for
                        excellent DX.
                    </p>
                </div>
            </section>
        </div>
    );
}
