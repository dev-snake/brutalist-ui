import Link from 'next/link';
import { Card, CardHeader, CardTitle, CardContent, Badge } from '@/components/ui';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'All Components - Brutalist UI | 26 Neo-Brutalism React Components',
    description:
        'Browse 26 Neo-Brutalism React components: Button, Card, Calendar, Command, Combobox, Dialog, Toast, Table, Tabs, Scroll Area and more. Accessible, customizable, with bold borders and offset shadows.',
    keywords: [
        'brutalist ui components',
        'neo-brutalism components',
        'react ui components',
        'brutalism button',
        'brutalism card',
        'radix ui components',
    ],
    openGraph: {
        title: 'All Components - Brutalist UI',
        description:
            'Browse 26 Neo-Brutalism React components built with Radix UI and Tailwind CSS.',
        url: 'https://brutalistui.site/docs/components',
    },
    alternates: {
        canonical: 'https://brutalistui.site/docs/components',
    },
};

const components = [
    {
        name: 'Alert',
        href: '/docs/components/alert',
        description: 'Alert messages and notifications',
    },
    {
        name: 'Avatar',
        href: '/docs/components/avatar',
        description: 'User profile image with fallback',
    },
    { name: 'Badge', href: '/docs/components/badge', description: 'Status indicators and labels' },
    {
        name: 'Button',
        href: '/docs/components/button',
        description: 'Interactive button with multiple variants',
    },
    {
        name: 'Calendar',
        href: '/docs/components/calendar',
        description: 'Date picker calendar component',
    },
    {
        name: 'Card',
        href: '/docs/components/card',
        description: 'Container for content with shadow',
    },
    { name: 'Checkbox', href: '/docs/components/checkbox', description: 'Checkbox input control' },
    {
        name: 'Combobox',
        href: '/docs/components/combobox',
        description: 'Autocomplete with search and selection',
    },
    {
        name: 'Command',
        href: '/docs/components/command',
        description: 'Command palette for actions',
    },
    { name: 'Dialog', href: '/docs/components/dialog', description: 'Modal dialog overlay' },
    {
        name: 'Dropdown Menu',
        href: '/docs/components/dropdown-menu',
        description: 'Action menu dropdown',
    },
    { name: 'Input', href: '/docs/components/input', description: 'Text input field' },
    { name: 'Label', href: '/docs/components/label', description: 'Form label for accessibility' },
    {
        name: 'Pagination',
        href: '/docs/components/pagination',
        description: 'Page navigation component',
    },
    { name: 'Popover', href: '/docs/components/popover', description: 'Floating content panel' },
    { name: 'Select', href: '/docs/components/select', description: 'Selection dropdown' },
    {
        name: 'Separator',
        href: '/docs/components/separator',
        description: 'Visual divider between content',
    },
    {
        name: 'Skeleton',
        href: '/docs/components/skeleton',
        description: 'Loading placeholder skeletons',
    },
    {
        name: 'Spinner',
        href: '/docs/components/spinner',
        description: 'Loading spinner indicators',
    },
    { name: 'Switch', href: '/docs/components/switch', description: 'Toggle switch control' },
    { name: 'Table', href: '/docs/components/table', description: 'Data table display' },
    { name: 'Tabs', href: '/docs/components/tabs', description: 'Tabbed content sections' },
    { name: 'Textarea', href: '/docs/components/textarea', description: 'Multi-line text input' },
    { name: 'Toast', href: '/docs/components/toast', description: 'Toast notification messages' },
    {
        name: 'Tooltip',
        href: '/docs/components/tooltip',
        description: 'Informational popup on hover',
    },
    {
        name: 'Scroll Area',
        href: '/docs/components/scroll-area',
        description: 'Custom cross-browser scrollable container',
    },
];

export default function ComponentsPage() {
    return (
        <div>
            <Badge variant="primary" className="mb-4">
                Components
            </Badge>
            <h1>Component Library</h1>

            <p>
                A collection of Neo-Brutalism styled components built with Radix UI primitives and
                Tailwind CSS.
            </p>

            <div className="grid gap-4 mt-8">
                {components.map((component) => (
                    <Link key={component.name} href={component.href}>
                        <Card variant="interactive" padding="default">
                            <CardHeader className="pb-2">
                                <CardTitle className="text-lg">{component.name}</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-sm text-gray-600 dark:text-gray-400 font-medium">
                                    {component.description}
                                </p>
                            </CardContent>
                        </Card>
                    </Link>
                ))}
            </div>
        </div>
    );
}
