'use client';

import { Textarea } from '@/components/ui';
import { InstallationTabs } from '@/components/installation-tabs';

export default function TextareaPage() {
    return (
        <div className="space-y-8">
            <div>
                <h1 className="text-4xl font-black mb-4">Textarea</h1>
                <p className="text-lg text-gray-600 dark:text-gray-300">
                    A multi-line text input component with Neo-Brutalism styling.
                </p>
            </div>

            {/* Installation */}
            <section className="space-y-4">
                <h2 className="text-2xl font-bold">Installation</h2>
                <InstallationTabs componentName="textarea" />
            </section>

            {/* Basic Example */}
            <section className="space-y-4">
                <h2 className="text-2xl font-bold">Basic Usage</h2>
                <div className="p-6 bg-white dark:bg-gray-900 border-3 border-black dark:border-white">
                    <Textarea placeholder="Enter your message..." />
                </div>
                <pre className="p-4 bg-gray-100 dark:bg-gray-800 border-3 border-black dark:border-white overflow-x-auto">
                    <code>{`import { Textarea } from "@/components/ui/textarea"

<Textarea placeholder="Enter your message..." />`}</code>
                </pre>
            </section>

            {/* Sizes */}
            <section className="space-y-4">
                <h2 className="text-2xl font-bold">Sizes</h2>
                <div className="p-6 bg-white dark:bg-gray-900 border-3 border-black dark:border-white space-y-4">
                    <Textarea textareaSize="sm" placeholder="Small textarea" />
                    <Textarea textareaSize="default" placeholder="Default textarea" />
                    <Textarea textareaSize="lg" placeholder="Large textarea" />
                </div>
                <pre className="p-4 bg-gray-100 dark:bg-gray-800 border-3 border-black dark:border-white overflow-x-auto">
                    <code>{`<Textarea textareaSize="sm" placeholder="Small textarea" />
<Textarea textareaSize="default" placeholder="Default textarea" />
<Textarea textareaSize="lg" placeholder="Large textarea" />`}</code>
                </pre>
            </section>

            {/* Variants */}
            <section className="space-y-4">
                <h2 className="text-2xl font-bold">Variants</h2>
                <div className="p-6 bg-white dark:bg-gray-900 border-3 border-black dark:border-white space-y-4">
                    <Textarea variant="default" placeholder="Default variant" />
                    <Textarea variant="error" placeholder="Error variant" />
                    <Textarea variant="success" placeholder="Success variant" />
                </div>
                <pre className="p-4 bg-gray-100 dark:bg-gray-800 border-3 border-black dark:border-white overflow-x-auto">
                    <code>{`<Textarea variant="default" placeholder="Default variant" />
<Textarea variant="error" placeholder="Error variant" />
<Textarea variant="success" placeholder="Success variant" />`}</code>
                </pre>
            </section>

            {/* Disabled */}
            <section className="space-y-4">
                <h2 className="text-2xl font-bold">Disabled</h2>
                <div className="p-6 bg-white dark:bg-gray-900 border-3 border-black dark:border-white">
                    <Textarea disabled placeholder="Disabled textarea" />
                </div>
                <pre className="p-4 bg-gray-100 dark:bg-gray-800 border-3 border-black dark:border-white overflow-x-auto">
                    <code>{`<Textarea disabled placeholder="Disabled textarea" />`}</code>
                </pre>
            </section>

            {/* With Rows */}
            <section className="space-y-4">
                <h2 className="text-2xl font-bold">Custom Rows</h2>
                <div className="p-6 bg-white dark:bg-gray-900 border-3 border-black dark:border-white">
                    <Textarea rows={6} placeholder="Textarea with 6 rows..." />
                </div>
                <pre className="p-4 bg-gray-100 dark:bg-gray-800 border-3 border-black dark:border-white overflow-x-auto">
                    <code>{`<Textarea rows={6} placeholder="Textarea with 6 rows..." />`}</code>
                </pre>
            </section>
        </div>
    );
}
