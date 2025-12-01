import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://brutalistui.site';

    // Component pages
    const components = [
        'alert',
        'avatar',
        'badge',
        'button',
        'card',
        'checkbox',
        'dialog',
        'dropdown-menu',
        'input',
        'label',
        'pagination',
        'popover',
        'select',
        'separator',
        'skeleton',
        'spinner',
        'switch',
        'table',
        'tabs',
        'textarea',
        'toast',
        'tooltip',
    ];

    const componentPages = components.map((component) => ({
        url: `${baseUrl}/docs/components/${component}`,
        lastModified: new Date(),
        changeFrequency: 'weekly' as const,
        priority: 0.8,
    }));

    return [
        {
            url: baseUrl,
            lastModified: new Date(),
            changeFrequency: 'daily',
            priority: 1,
        },
        {
            url: `${baseUrl}/docs`,
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 0.9,
        },
        {
            url: `${baseUrl}/docs/installation`,
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.9,
        },
        {
            url: `${baseUrl}/docs/components`,
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 0.9,
        },
        {
            url: `${baseUrl}/sponsor`,
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.5,
        },
        ...componentPages,
    ];
}
