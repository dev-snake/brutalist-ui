'use client';

import { Badge, ScrollArea, ScrollBar, Separator } from '@/components/ui';
import { InstallationTabs } from '@/components/installation-tabs';

export default function ScrollAreaPage() {
    const tags = Array.from({ length: 50 }).map((_, i, a) => `v1.2.0-beta.${a.length - i}`);

    return (
        <div>
            <Badge variant="secondary" className="mb-4">
                Component
            </Badge>
            <h1>Scroll Area</h1>
            <p>
                Augments native scroll functionality for custom, cross-browser styling. Built on top
                of Radix UI Scroll Area.
            </p>

            <h2>Installation</h2>
            <InstallationTabs componentName="scroll-area" />

            <h2>Usage</h2>
            <pre className="bg-gray-900 text-gray-100 p-4 rounded-none border-3 border-black dark:border-white overflow-x-auto">
                <code>{`import { ScrollArea } from "@/components/ui/scroll-area"

<ScrollArea className="h-[200px] w-[350px] border-3 border-black p-4">
  {/* Your scrollable content here */}
</ScrollArea>`}</code>
            </pre>

            <h2>Examples</h2>

            <h3>Vertical Scroll</h3>
            <p>Default scroll area with vertical scrolling.</p>
            <div className="border-3 border-black dark:border-white p-6 bg-white dark:bg-gray-900">
                <ScrollArea className="h-72 w-48 border-3 border-black dark:border-white">
                    <div className="p-4">
                        <h4 className="mb-4 text-sm font-black leading-none">Tags</h4>
                        {tags.map((tag) => (
                            <div key={tag}>
                                <div className="text-sm">{tag}</div>
                                <Separator className="my-2" />
                            </div>
                        ))}
                    </div>
                </ScrollArea>
            </div>

            <h3>Horizontal Scroll</h3>
            <p>Scroll area with horizontal scrolling for wide content.</p>
            <div className="border-3 border-black dark:border-white p-6 bg-white dark:bg-gray-900">
                <ScrollArea className="w-96 whitespace-nowrap border-3 border-black dark:border-white">
                    <div className="flex w-max space-x-4 p-4">
                        {Array.from({ length: 10 }).map((_, i) => (
                            <figure key={i} className="shrink-0">
                                <div className="overflow-hidden border-3 border-black dark:border-white">
                                    <div className="h-32 w-48 bg-[#4ECDC4] flex items-center justify-center">
                                        <span className="font-black text-2xl text-black">
                                            Image {i + 1}
                                        </span>
                                    </div>
                                </div>
                                <figcaption className="pt-2 text-xs font-bold">
                                    Photo by Artist {i + 1}
                                </figcaption>
                            </figure>
                        ))}
                    </div>
                    <ScrollBar orientation="horizontal" />
                </ScrollArea>
            </div>

            <h3>Custom Height</h3>
            <p>Scroll area with a larger height for more content.</p>
            <div className="border-3 border-black dark:border-white p-6 bg-white dark:bg-gray-900">
                <ScrollArea className="h-[400px] w-full max-w-lg border-3 border-black dark:border-white p-4">
                    <div className="space-y-4">
                        <h4 className="font-black text-xl">Article Title</h4>
                        {Array.from({ length: 8 }).map((_, i) => (
                            <p key={i}>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
                                ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                aliquip ex ea commodo consequat. Duis aute irure dolor in
                                reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                                pariatur.
                            </p>
                        ))}
                    </div>
                </ScrollArea>
            </div>

            <h2>API Reference</h2>

            <h3>ScrollArea</h3>
            <p>The main container component for scrollable content.</p>
            <div className="overflow-x-auto">
                <table className="w-full border-3 border-black dark:border-white">
                    <thead className="bg-[#FFE66D]">
                        <tr>
                            <th className="text-left p-3 font-black border-b-3 border-black dark:border-white">
                                Prop
                            </th>
                            <th className="text-left p-3 font-black border-b-3 border-black dark:border-white">
                                Type
                            </th>
                            <th className="text-left p-3 font-black border-b-3 border-black dark:border-white">
                                Description
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="p-3 font-mono text-sm border-b border-gray-200 dark:border-gray-700">
                                className
                            </td>
                            <td className="p-3 font-mono text-sm border-b border-gray-200 dark:border-gray-700">
                                string
                            </td>
                            <td className="p-3 border-b border-gray-200 dark:border-gray-700">
                                Additional CSS classes to apply
                            </td>
                        </tr>
                        <tr>
                            <td className="p-3 font-mono text-sm border-b border-gray-200 dark:border-gray-700">
                                children
                            </td>
                            <td className="p-3 font-mono text-sm border-b border-gray-200 dark:border-gray-700">
                                ReactNode
                            </td>
                            <td className="p-3 border-b border-gray-200 dark:border-gray-700">
                                The scrollable content
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <h3>ScrollBar</h3>
            <p>Custom scrollbar component for the scroll area.</p>
            <div className="overflow-x-auto">
                <table className="w-full border-3 border-black dark:border-white">
                    <thead className="bg-[#FFE66D]">
                        <tr>
                            <th className="text-left p-3 font-black border-b-3 border-black dark:border-white">
                                Prop
                            </th>
                            <th className="text-left p-3 font-black border-b-3 border-black dark:border-white">
                                Type
                            </th>
                            <th className="text-left p-3 font-black border-b-3 border-black dark:border-white">
                                Default
                            </th>
                            <th className="text-left p-3 font-black border-b-3 border-black dark:border-white">
                                Description
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="p-3 font-mono text-sm border-b border-gray-200 dark:border-gray-700">
                                orientation
                            </td>
                            <td className="p-3 font-mono text-sm border-b border-gray-200 dark:border-gray-700">
                                "vertical" | "horizontal"
                            </td>
                            <td className="p-3 font-mono text-sm border-b border-gray-200 dark:border-gray-700">
                                "vertical"
                            </td>
                            <td className="p-3 border-b border-gray-200 dark:border-gray-700">
                                The orientation of the scrollbar
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
}
