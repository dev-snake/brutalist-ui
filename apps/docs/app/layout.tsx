import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from '@/components/theme-provider';
import 'brutalist-ui/styles.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
    title: {
        default: 'Brutalist UI - Brutalism UI Library | Neo Brutalism React Components',
        template: '%s | Brutalist UI',
    },
    description:
        'Brutalism UI library for React. 26+ Neo Brutalism UI components with bold borders, offset shadows, vibrant colors. Free & open-source. Built with Radix UI, Tailwind CSS. npm install brutalist-ui. Best shadcn alternative for brutalist design.',
    metadataBase: new URL('https://brutalistui.site'),
    keywords: [
        // Primary keywords (exact match từ Google search)
        'brutalism ui',
        'brutalist ui',
        'neo brutalism ui',
        'neo brutalism',
        'neubrutalism',

        // Library/Components keywords
        'brutalism ui library',
        'brutalism ui components',
        'neo brutalism ui components',
        'neo brutalism ui shadcn',
        'brutalist ui kit',
        'neobrutalism components',

        // React specific
        'brutalism react',
        'neo brutalism react',
        'brutalist react components',
        'react brutalism ui',
        'react ui library',
        'react component library',

        // Design keywords
        'brutalism design',
        'brutalist design',
        'neo brutalist',
        'neubrutalism design',
        'brutalism web design',

        // Tech stack
        'tailwind brutalism',
        'radix ui brutalism',
        'shadcn alternative',
        'shadcn brutalism',

        // Features
        'bold ui components',
        'offset shadow ui',
        'vibrant colors ui',
        'accessible components',
        'typescript ui library',
        'open source ui',
        'free react components',
    ],
    authors: [{ name: 'dev-snake', url: 'https://github.com/dev-snake' }],
    creator: 'dev-snake',
    publisher: 'Brutalist UI',
    category: 'Technology',
    classification: 'Software Development',
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            'max-video-preview': -1,
            'max-image-preview': 'large',
            'max-snippet': -1,
        },
    },
    alternates: {
        canonical: 'https://brutalistui.site',
    },
    openGraph: {
        type: 'website',
        locale: 'en_US',
        url: 'https://brutalistui.site',
        siteName: 'Brutalist UI',
        title: 'Brutalist UI - Brutalism UI Library | Neo Brutalism React Components',
        description:
            'Brutalism UI library with 26+ Neo Brutalism components. Bold borders, offset shadows, vibrant colors. Free & open-source React UI kit. Best shadcn alternative.',
        images: [
            {
                url: '/og-image.svg',
                width: 1200,
                height: 630,
                alt: 'Brutalist UI - Brutalism UI Library for React',
                type: 'image/svg+xml',
            },
        ],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Brutalist UI - Brutalism UI Library | Neo Brutalism Components',
        description:
            'Brutalism UI library with 26+ Neo Brutalism React components. Free & open-source.',
        images: ['/og-image.svg'],
        creator: '@devsnake',
    },
    icons: {
        icon: '/favicon.svg',
        shortcut: '/favicon.svg',
        apple: '/logo_bu.png',
    },
    manifest: '/manifest.json',
    other: {
        'google-site-verification': 'YOUR_GOOGLE_VERIFICATION_CODE',
    },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    const jsonLd = {
        '@context': 'https://schema.org',
        '@type': 'SoftwareApplication',
        name: 'Brutalist UI',
        alternateName: ['Brutalism UI', 'Neo Brutalism UI', 'Neubrutalism UI'],
        applicationCategory: 'DeveloperApplication',
        applicationSubCategory: 'UI Component Library',
        operatingSystem: 'Any',
        description:
            'Brutalism UI library for React with 26+ Neo Brutalism components. Bold borders, offset shadows, vibrant colors. Free & open-source.',
        url: 'https://brutalistui.site',
        downloadUrl: 'https://www.npmjs.com/package/brutalist-ui',
        softwareVersion: '0.1.7',
        programmingLanguage: ['TypeScript', 'React', 'JavaScript'],
        author: {
            '@type': 'Person',
            name: 'dev-snake',
            url: 'https://github.com/dev-snake',
        },
        offers: {
            '@type': 'Offer',
            price: '0',
            priceCurrency: 'USD',
        },
        aggregateRating: {
            '@type': 'AggregateRating',
            ratingValue: '5',
            ratingCount: '10',
        },
        keywords:
            'brutalism ui, neo brutalism, brutalist ui, neubrutalism, react components, ui library',
    };

    const organizationJsonLd = {
        '@context': 'https://schema.org',
        '@type': 'Organization',
        name: 'Brutalist UI',
        url: 'https://brutalistui.site',
        logo: 'https://brutalistui.site/favicon.svg',
        sameAs: [
            'https://github.com/dev-snake/brutalist-ui',
            'https://www.npmjs.com/package/brutalist-ui',
        ],
    };

    return (
        <html lang="en" suppressHydrationWarning>
            <head>
                <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
                <link rel="icon" href="/icon" type="image/png" sizes="32x32" />
                <link rel="apple-touch-icon" href="/apple-icon" />
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
                />
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
                />
            </head>
            <body className={inter.className}>
                <ThemeProvider
                    attribute="class"
                    defaultTheme="system"
                    enableSystem
                    disableTransitionOnChange
                >
                    {children}
                </ThemeProvider>
            </body>
        </html>
    );
}
