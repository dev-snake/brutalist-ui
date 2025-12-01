'use client';

import { Separator } from 'brutalist-ui';
import { InstallationTabs } from '@/components/installation-tabs';

export default function SeparatorPage() {
    return (
        <div className="space-y-8">
            <div>
                <h1 className="text-4xl font-black mb-4">Separator</h1>
                <p className="text-lg text-gray-600 dark:text-gray-300">
                    A visual divider to separate content sections.
                </p>
            </div>

            {/* Installation */}
            <section className="space-y-4">
                <h2 className="text-2xl font-bold">Installation</h2>
                <InstallationTabs componentName="separator" />
            </section>

            {/* Basic Example */}
            <section className="space-y-4">
                <h2 className="text-2xl font-bold">Basic Usage</h2>
                <div className="p-6 bg-white dark:bg-gray-900 border-3 border-black dark:border-white">
                    <div className="space-y-4">
                        <p className="font-medium">Content above separator</p>
                        <Separator />
                        <p className="font-medium">Content below separator</p>
                    </div>
                </div>
                <pre className="p-4 bg-gray-100 dark:bg-gray-800 border-3 border-black dark:border-white overflow-x-auto">
                    <code>{`import { Separator } from "@/components/ui/separator"

<p>Content above separator</p>
<Separator />
<p>Content below separator</p>`}</code>
                </pre>
            </section>

            {/* Horizontal */}
            <section className="space-y-4">
                <h2 className="text-2xl font-bold">Horizontal Separator</h2>
                <div className="p-6 bg-white dark:bg-gray-900 border-3 border-black dark:border-white">
                    <div className="space-y-4">
                        <h3 className="font-bold text-lg">Section 1</h3>
                        <p className="text-gray-600 dark:text-gray-300">
                            Some content for section 1.
                        </p>
                        <Separator orientation="horizontal" />
                        <h3 className="font-bold text-lg">Section 2</h3>
                        <p className="text-gray-600 dark:text-gray-300">
                            Some content for section 2.
                        </p>
                        <Separator orientation="horizontal" />
                        <h3 className="font-bold text-lg">Section 3</h3>
                        <p className="text-gray-600 dark:text-gray-300">
                            Some content for section 3.
                        </p>
                    </div>
                </div>
                <pre className="p-4 bg-gray-100 dark:bg-gray-800 border-3 border-black dark:border-white overflow-x-auto">
                    <code>{`<Separator orientation="horizontal" />`}</code>
                </pre>
            </section>

            {/* Vertical */}
            <section className="space-y-4">
                <h2 className="text-2xl font-bold">Vertical Separator</h2>
                <div className="p-6 bg-white dark:bg-gray-900 border-3 border-black dark:border-white">
                    <div className="flex items-center h-12 gap-4">
                        <span className="font-medium">Item 1</span>
                        <Separator orientation="vertical" />
                        <span className="font-medium">Item 2</span>
                        <Separator orientation="vertical" />
                        <span className="font-medium">Item 3</span>
                    </div>
                </div>
                <pre className="p-4 bg-gray-100 dark:bg-gray-800 border-3 border-black dark:border-white overflow-x-auto">
                    <code>{`<div className="flex items-center h-12 gap-4">
  <span>Item 1</span>
  <Separator orientation="vertical" />
  <span>Item 2</span>
  <Separator orientation="vertical" />
  <span>Item 3</span>
</div>`}</code>
                </pre>
            </section>

            {/* Custom Styling */}
            <section className="space-y-4">
                <h2 className="text-2xl font-bold">Custom Styling</h2>
                <div className="p-6 bg-white dark:bg-gray-900 border-3 border-black dark:border-white space-y-4">
                    <Separator className="bg-[#FF6B6B]" />
                    <Separator className="bg-[#4ECDC4]" />
                    <Separator className="bg-[#FFE66D]" />
                </div>
                <pre className="p-4 bg-gray-100 dark:bg-gray-800 border-3 border-black dark:border-white overflow-x-auto">
                    <code>{`<Separator className="bg-[#FF6B6B]" />
<Separator className="bg-[#4ECDC4]" />
<Separator className="bg-[#FFE66D]" />`}</code>
                </pre>
            </section>
        </div>
    );
}
