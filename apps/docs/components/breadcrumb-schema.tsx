'use client';

interface BreadcrumbItem {
    name: string;
    url: string;
}

interface BreadcrumbSchemaProps {
    items: BreadcrumbItem[];
}

export function BreadcrumbSchema({ items }: BreadcrumbSchemaProps) {
    const breadcrumbJsonLd = {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: items.map((item, index) => ({
            '@type': 'ListItem',
            position: index + 1,
            name: item.name,
            item: item.url,
        })),
    };

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
        />
    );
}

// Pre-defined breadcrumbs for common pages
export const breadcrumbs = {
    home: [{ name: 'Brutalist UI', url: 'https://brutalistui.site' }],
    docs: [
        { name: 'Brutalist UI', url: 'https://brutalistui.site' },
        { name: 'Documentation', url: 'https://brutalistui.site/docs' },
    ],
    installation: [
        { name: 'Brutalist UI', url: 'https://brutalistui.site' },
        { name: 'Documentation', url: 'https://brutalistui.site/docs' },
        { name: 'Installation', url: 'https://brutalistui.site/docs/installation' },
    ],
    components: [
        { name: 'Brutalist UI', url: 'https://brutalistui.site' },
        { name: 'Documentation', url: 'https://brutalistui.site/docs' },
        { name: 'Components', url: 'https://brutalistui.site/docs/components' },
    ],
    cli: [
        { name: 'Brutalist UI', url: 'https://brutalistui.site' },
        { name: 'Documentation', url: 'https://brutalistui.site/docs' },
        { name: 'CLI', url: 'https://brutalistui.site/docs/cli' },
    ],
};

export function getComponentBreadcrumb(componentName: string, componentSlug: string) {
    return [
        { name: 'Brutalist UI', url: 'https://brutalistui.site' },
        { name: 'Documentation', url: 'https://brutalistui.site/docs' },
        { name: 'Components', url: 'https://brutalistui.site/docs/components' },
        { name: componentName, url: `https://brutalistui.site/docs/components/${componentSlug}` },
    ];
}
