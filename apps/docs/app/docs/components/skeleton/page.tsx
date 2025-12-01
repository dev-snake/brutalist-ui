'use client';

import {
    Skeleton,
    SkeletonText,
    SkeletonAvatar,
    SkeletonCard,
    SkeletonTable,
    Badge,
} from 'brutalist-ui';
import { ComponentPreview } from '@/components/component-preview';
import { InstallationTabs } from '@/components/installation-tabs';

export default function SkeletonPage() {
    return (
        <div>
            <Badge variant="primary" className="mb-4">
                Component
            </Badge>
            <h1>Skeleton</h1>

            <p>Skeleton loading placeholder components with Neo-Brutalism styling.</p>

            <h2>Preview</h2>
            <ComponentPreview>
                <div className="w-full max-w-sm space-y-4">
                    <Skeleton className="h-8 w-3/4" />
                    <Skeleton className="h-4 w-full" />
                    <Skeleton className="h-4 w-full" />
                    <Skeleton className="h-4 w-2/3" />
                </div>
            </ComponentPreview>

            <h2>Installation</h2>
            <InstallationTabs componentName="skeleton" />

            <h2>Text Skeleton</h2>
            <ComponentPreview>
                <div className="w-full max-w-md">
                    <SkeletonText lines={4} />
                </div>
            </ComponentPreview>

            <h2>Avatar Skeleton</h2>
            <ComponentPreview>
                <div className="flex items-center gap-4">
                    <SkeletonAvatar size="sm" />
                    <SkeletonAvatar size="default" />
                    <SkeletonAvatar size="lg" />
                    <SkeletonAvatar size="xl" />
                </div>
            </ComponentPreview>

            <h2>Card Skeleton</h2>
            <ComponentPreview className="p-0">
                <div className="w-full max-w-sm">
                    <SkeletonCard />
                </div>
            </ComponentPreview>

            <h2>Table Skeleton</h2>
            <ComponentPreview className="p-0">
                <div className="w-full">
                    <SkeletonTable rows={3} columns={4} />
                </div>
            </ComponentPreview>

            <h2>Variants</h2>
            <ComponentPreview>
                <div className="grid grid-cols-2 gap-4 w-full max-w-md">
                    <div className="space-y-2">
                        <p className="font-bold text-sm">Default</p>
                        <Skeleton variant="default" className="h-8" />
                    </div>
                    <div className="space-y-2">
                        <p className="font-bold text-sm">Primary</p>
                        <Skeleton variant="primary" className="h-8" />
                    </div>
                    <div className="space-y-2">
                        <p className="font-bold text-sm">Secondary</p>
                        <Skeleton variant="secondary" className="h-8" />
                    </div>
                    <div className="space-y-2">
                        <p className="font-bold text-sm">Accent</p>
                        <Skeleton variant="accent" className="h-8" />
                    </div>
                </div>
            </ComponentPreview>

            <h2>Props</h2>
            <div className="overflow-x-auto">
                <table className="w-full border-3 border-black dark:border-white">
                    <thead className="bg-[#FFE66D]">
                        <tr>
                            <th className="px-4 py-2 text-left border-r-3 border-b-3 border-black font-black text-black">
                                Component
                            </th>
                            <th className="px-4 py-2 text-left border-r-3 border-b-3 border-black font-black text-black">
                                Props
                            </th>
                            <th className="px-4 py-2 text-left border-b-3 border-black font-black text-black">
                                Description
                            </th>
                        </tr>
                    </thead>
                    <tbody className="bg-white dark:bg-gray-900">
                        <tr className="border-b-3 border-black dark:border-white">
                            <td className="px-4 py-2 border-r-3 border-black dark:border-white font-medium">
                                Skeleton
                            </td>
                            <td className="px-4 py-2 border-r-3 border-black dark:border-white text-sm">
                                variant, className
                            </td>
                            <td className="px-4 py-2 text-sm">Base skeleton element</td>
                        </tr>
                        <tr className="border-b-3 border-black dark:border-white">
                            <td className="px-4 py-2 border-r-3 border-black dark:border-white font-medium">
                                SkeletonText
                            </td>
                            <td className="px-4 py-2 border-r-3 border-black dark:border-white text-sm">
                                lines, lastLineWidth
                            </td>
                            <td className="px-4 py-2 text-sm">Multiple line text skeleton</td>
                        </tr>
                        <tr className="border-b-3 border-black dark:border-white">
                            <td className="px-4 py-2 border-r-3 border-black dark:border-white font-medium">
                                SkeletonAvatar
                            </td>
                            <td className="px-4 py-2 border-r-3 border-black dark:border-white text-sm">
                                size: sm | default | lg | xl
                            </td>
                            <td className="px-4 py-2 text-sm">Avatar placeholder</td>
                        </tr>
                        <tr className="border-b-3 border-black dark:border-white">
                            <td className="px-4 py-2 border-r-3 border-black dark:border-white font-medium">
                                SkeletonCard
                            </td>
                            <td className="px-4 py-2 border-r-3 border-black dark:border-white text-sm">
                                variant
                            </td>
                            <td className="px-4 py-2 text-sm">Card loading state</td>
                        </tr>
                        <tr>
                            <td className="px-4 py-2 border-r-3 border-black dark:border-white font-medium">
                                SkeletonTable
                            </td>
                            <td className="px-4 py-2 border-r-3 border-black dark:border-white text-sm">
                                rows, columns
                            </td>
                            <td className="px-4 py-2 text-sm">Table loading state</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
}
