'use client';

import { Badge } from 'brutalist-ui';
import { ComponentPreview } from '@/components/component-preview';
import { InstallationTabs } from '@/components/installation-tabs';

export default function BadgePage() {
    return (
        <div>
            <Badge variant="primary" className="mb-4">
                Component
            </Badge>
            <h1>Badge</h1>

            <p>
                Displays a badge or a component that looks like a badge with Neo-Brutalism styling.
            </p>

            <h2>Preview</h2>
            <ComponentPreview>
                <div className="flex flex-wrap gap-4">
                    <Badge variant="default">Default</Badge>
                    <Badge variant="primary">Primary</Badge>
                    <Badge variant="secondary">Secondary</Badge>
                    <Badge variant="accent">Accent</Badge>
                    <Badge variant="success">Success</Badge>
                    <Badge variant="danger">Danger</Badge>
                    <Badge variant="outline">Outline</Badge>
                </div>
            </ComponentPreview>

            <h2>Installation</h2>
            <InstallationTabs componentName="badge" />

            <h2>Sizes</h2>
            <ComponentPreview>
                <div className="flex flex-wrap items-center gap-4">
                    <Badge size="sm">Small</Badge>
                    <Badge size="default">Default</Badge>
                    <Badge size="lg">Large</Badge>
                </div>
            </ComponentPreview>

            <h2>Usage</h2>
            <pre className="bg-gray-900 text-white p-4 border-3 border-black dark:border-white shadow-brutal overflow-x-auto">
                {`import { Badge } from "@/components/ui/badge"

<Badge variant="primary" size="default">
  Badge Text
</Badge>`}
            </pre>
        </div>
    );
}
