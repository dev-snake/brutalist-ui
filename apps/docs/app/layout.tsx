import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from '@/components/theme-provider';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
    title: {
        default: 'Brutalist UI - Neo-Brutalism React Component Library | Free & Open Source',
        template: '%s | Brutalist UI',
    },
    description:
        'Free open-source Neo-Brutalism React UI component library with 22+ accessible components. Built with Radix UI, Tailwind CSS, TypeScript. Bold borders, offset shadows, vibrant colors. npm install brutalist-ui',
    metadataBase: new URL('https://brutalistui.site'),
    keywords: [
        'brutalist ui',
        'neo brutalism',
        'brutalism design',
        'react components',
        'react ui library',
        'react component library',
        'tailwind components',
        'tailwind ui',
        'radix ui',
        'typescript components',
        'accessible components',
        'design system',
        'ui kit',
        'open source ui',
        'free react components',
        'shadcn alternative',
        'brutalist design system',
        'bold ui components',
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
        title: 'Brutalist UI - Neo-Brutalism React Component Library',
        description:
            'Free open-source Neo-Brutalism React UI library with 22+ accessible components. Bold, raw, and beautiful.',
        images: [
            {
                url: '/og-image.svg',
                width: 1200,
                height: 630,
                alt: 'Brutalist UI - Neo-Brutalism React Components',
                type: 'image/svg+xml',
            },
        ],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Brutalist UI - Neo-Brutalism React Components',
        description:
            'Free open-source Neo-Brutalism React UI library with 22+ accessible components.',
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
        applicationCategory: 'DeveloperApplication',
        operatingSystem: 'Any',
        description:
            'Free open-source Neo-Brutalism React UI component library with 22+ accessible components.',
        url: 'https://brutalistui.site',
        downloadUrl: 'https://www.npmjs.com/package/brutalist-ui',
        softwareVersion: '0.1.4',
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
            ratingCount: '1',
        },
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
