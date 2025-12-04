import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://brutalistui.site';

    // Component pages - QUAN TRỌNG: Đây là những trang Google sẽ index cho sitelinks
    const components = [
        'alert',
        'avatar',
        'badge',
        'button',
        'calendar',
        'card',
        'checkbox',
        'combobox',
        'command',
        'dialog',
        'dropdown-menu',
        'input',
        'label',
        'pagination',
        'popover',
        'scroll-area',
        'select',
        'separator',
        'skeleton',
        'spinner',
        'submit-button',
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

    // Installation sub-pages
    const installationPages = [
        {
            url: `${baseUrl}/docs/installation`,
            lastModified: new Date(),
            changeFrequency: 'monthly' as const,
            priority: 0.9,
        },
        {
            url: `${baseUrl}/docs/installation/nextjs`,
            lastModified: new Date(),
            changeFrequency: 'monthly' as const,
            priority: 0.85,
        },
        {
            url: `${baseUrl}/docs/installation/vite`,
            lastModified: new Date(),
            changeFrequency: 'monthly' as const,
            priority: 0.85,
        },
        {
            url: `${baseUrl}/docs/installation/manual`,
            lastModified: new Date(),
            changeFrequency: 'monthly' as const,
            priority: 0.85,
        },
    ];

    return [
        // Homepage - highest priority
        {
            url: baseUrl,
            lastModified: new Date(),
            changeFrequency: 'daily',
            priority: 1,
        },
        // Main documentation - second highest
        {
            url: `${baseUrl}/docs`,
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 0.95,
        },
        // Components overview - important for sitelinks
        {
            url: `${baseUrl}/docs/components`,
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 0.9,
        },
        // CLI page - important for developers
        {
            url: `${baseUrl}/docs/cli`,
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.9,
        },
        // Installation pages
        ...installationPages,
        // Sponsor page
        {
            url: `${baseUrl}/sponsor`,
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.5,
        },
        // All component pages
        ...componentPages,
    ];
}
