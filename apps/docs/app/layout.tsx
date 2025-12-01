import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from '@/components/theme-provider';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
    title: {
        default: 'Brutalist UI - Neo-Brutalism React Components',
        template: '%s | Brutalist UI',
    },
    description:
        'A Neo-Brutalism styled React UI component library with 22+ accessible components. Built with Radix UI, Tailwind CSS, and TypeScript.',
    metadataBase: new URL('https://brutalistui.site'),
    keywords: [
        'react',
        'ui',
        'components',
        'brutalism',
        'neo-brutalism',
        'tailwindcss',
        'radix-ui',
        'typescript',
        'design-system',
    ],
    authors: [{ name: 'dev-snake', url: 'https://github.com/dev-snake' }],
    creator: 'dev-snake',
    openGraph: {
        type: 'website',
        locale: 'en_US',
        url: 'https://brutalistui.site',
        siteName: 'Brutalist UI',
        title: 'Brutalist UI - Neo-Brutalism React Components',
        description:
            'A Neo-Brutalism styled React UI component library with 22+ accessible components.',
        images: [
            {
                url: '/og-image.svg',
                width: 1200,
                height: 630,
                alt: 'Brutalist UI',
            },
        ],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Brutalist UI - Neo-Brutalism React Components',
        description:
            'A Neo-Brutalism styled React UI component library with 22+ accessible components.',
        images: ['/og-image.svg'],
    },
    icons: {
        icon: [{ url: '/favicon.svg', type: 'image/svg+xml' }],
        apple: '/favicon.svg',
    },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en" suppressHydrationWarning>
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
