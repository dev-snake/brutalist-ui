import { Metadata } from 'next';

interface ComponentSEOProps {
    name: string;
    description: string;
    slug: string;
}

export function generateComponentMetadata({
    name,
    description,
    slug,
}: ComponentSEOProps): Metadata {
    const title = `${name} - Brutalist UI Component`;
    const fullDescription = `${description} Free Neo-Brutalism styled React ${name} component with TypeScript support.`;

    return {
        title,
        description: fullDescription,
        keywords: [
            `react ${name.toLowerCase()}`,
            `${name.toLowerCase()} component`,
            `brutalist ${name.toLowerCase()}`,
            `neo brutalism ${name.toLowerCase()}`,
            `tailwind ${name.toLowerCase()}`,
            'react component',
            'brutalist ui',
        ],
        openGraph: {
            title,
            description: fullDescription,
            url: `https://brutalistui.site/docs/components/${slug}`,
            type: 'article',
        },
        twitter: {
            title,
            description: fullDescription,
        },
        alternates: {
            canonical: `https://brutalistui.site/docs/components/${slug}`,
        },
    };
}

export const componentsSEO: Record<string, ComponentSEOProps> = {
    alert: {
        name: 'Alert',
        description: 'Display important messages and notifications with Neo-Brutalism styling.',
        slug: 'alert',
    },
    avatar: {
        name: 'Avatar',
        description: 'User profile image with fallback support and multiple sizes.',
        slug: 'avatar',
    },
    badge: {
        name: 'Badge',
        description: 'Status indicators and labels with bold brutalist design.',
        slug: 'badge',
    },
    button: {
        name: 'Button',
        description: 'Interactive button with multiple variants, sizes, and states.',
        slug: 'button',
    },
    card: {
        name: 'Card',
        description: 'Container component with header, content, and footer sections.',
        slug: 'card',
    },
    checkbox: {
        name: 'Checkbox',
        description: 'Accessible checkbox input with Neo-Brutalism checkmark.',
        slug: 'checkbox',
    },
    dialog: {
        name: 'Dialog',
        description: 'Modal dialog windows built on Radix UI primitives.',
        slug: 'dialog',
    },
    'dropdown-menu': {
        name: 'Dropdown Menu',
        description: 'Context and dropdown menus with keyboard navigation.',
        slug: 'dropdown-menu',
    },
    input: {
        name: 'Input',
        description: 'Text input field with brutalist borders and focus states.',
        slug: 'input',
    },
    label: {
        name: 'Label',
        description: 'Accessible form labels for input fields.',
        slug: 'label',
    },
    pagination: {
        name: 'Pagination',
        description: 'Page navigation with first, last, previous, and next buttons.',
        slug: 'pagination',
    },
    popover: {
        name: 'Popover',
        description: 'Floating content panels triggered by user interaction.',
        slug: 'popover',
    },
    select: {
        name: 'Select',
        description: 'Dropdown select menu with search and keyboard navigation.',
        slug: 'select',
    },
    separator: {
        name: 'Separator',
        description: 'Visual divider for separating content sections.',
        slug: 'separator',
    },
    skeleton: {
        name: 'Skeleton',
        description: 'Loading placeholder animations for content.',
        slug: 'skeleton',
    },
    spinner: {
        name: 'Spinner',
        description: 'Loading spinners with brutalist, dots, pulse, and bars variants.',
        slug: 'spinner',
    },
    switch: {
        name: 'Switch',
        description: 'Toggle switch control for boolean settings.',
        slug: 'switch',
    },
    table: {
        name: 'Table',
        description: 'Data tables with brutalist styling and responsive design.',
        slug: 'table',
    },
    tabs: {
        name: 'Tabs',
        description: 'Tabbed content navigation built on Radix UI.',
        slug: 'tabs',
    },
    textarea: {
        name: 'Textarea',
        description: 'Multi-line text input with size variants.',
        slug: 'textarea',
    },
    toast: {
        name: 'Toast',
        description: 'Toast notification system for user feedback.',
        slug: 'toast',
    },
    tooltip: {
        name: 'Tooltip',
        description: 'Hover tooltips for additional information.',
        slug: 'tooltip',
    },
};
