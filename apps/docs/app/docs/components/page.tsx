import Link from 'next/link';
import { Card, CardHeader, CardTitle, CardContent, Badge } from 'brutalist-ui';

const components = [
    {
        name: 'Button',
        href: '/docs/components/button',
        description: 'Interactive button with multiple variants',
    },
    {
        name: 'Card',
        href: '/docs/components/card',
        description: 'Container for content with shadow',
    },
    { name: 'Input', href: '/docs/components/input', description: 'Text input field' },
    { name: 'Dialog', href: '/docs/components/dialog', description: 'Modal dialog overlay' },
    { name: 'Popover', href: '/docs/components/popover', description: 'Floating content panel' },
    {
        name: 'Tooltip',
        href: '/docs/components/tooltip',
        description: 'Informational popup on hover',
    },
    {
        name: 'Dropdown Menu',
        href: '/docs/components/dropdown-menu',
        description: 'Action menu dropdown',
    },
    { name: 'Select', href: '/docs/components/select', description: 'Selection dropdown' },
    { name: 'Tabs', href: '/docs/components/tabs', description: 'Tabbed content sections' },
    { name: 'Table', href: '/docs/components/table', description: 'Data table display' },
    {
        name: 'Alert',
        href: '/docs/components/alert',
        description: 'Alert messages and notifications',
    },
    { name: 'Badge', href: '/docs/components/badge', description: 'Status indicators and labels' },
    { name: 'Switch', href: '/docs/components/switch', description: 'Toggle switch control' },
    { name: 'Checkbox', href: '/docs/components/checkbox', description: 'Checkbox input control' },
    {
        name: 'Pagination',
        href: '/docs/components/pagination',
        description: 'Page navigation component',
    },
    {
        name: 'Spinner',
        href: '/docs/components/spinner',
        description: 'Loading spinner indicators',
    },
    { name: 'Toast', href: '/docs/components/toast', description: 'Toast notification messages' },
    {
        name: 'Skeleton',
        href: '/docs/components/skeleton',
        description: 'Loading placeholder skeletons',
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
