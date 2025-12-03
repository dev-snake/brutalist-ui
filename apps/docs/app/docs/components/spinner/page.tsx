'use client';

import { Spinner, BlockSpinner, DotsSpinner, BarsSpinner, Badge } from '@/components/ui';
import { ComponentPreview } from '@/components/component-preview';
import { InstallationTabs } from '@/components/installation-tabs';

export default function SpinnerPage() {
    return (
        <div>
            <Badge variant="primary" className="mb-4">
                Component
            </Badge>
            <h1>Spinner</h1>

            <p>Loading spinner components with Neo-Brutalism styling. Multiple styles available.</p>

            <h2>Preview</h2>
            <ComponentPreview>
                <div className="flex items-center gap-12">
                    <div className="flex flex-col items-center gap-2">
                        <Spinner />
                        <span className="text-xs font-bold">Spinner</span>
                    </div>
                    <div className="flex flex-col items-center gap-2">
                        <BlockSpinner />
                        <span className="text-xs font-bold">Block</span>
                    </div>
                    <div className="flex flex-col items-center gap-2">
                        <DotsSpinner />
                        <span className="text-xs font-bold">Dots</span>
                    </div>
                    <div className="flex flex-col items-center gap-2">
                        <BarsSpinner />
                        <span className="text-xs font-bold">Bars</span>
                    </div>
                </div>
            </ComponentPreview>

            <h2>Installation</h2>
            <InstallationTabs componentName="spinner" />

            <h2>Spinner Sizes</h2>
            <ComponentPreview>
                <div className="flex items-center gap-8">
                    <Spinner size="sm" />
                    <Spinner size="default" />
                    <Spinner size="lg" />
                    <Spinner size="xl" />
                </div>
            </ComponentPreview>

            <h2>Spinner Variants</h2>
            <ComponentPreview>
                <div className="flex items-center gap-8">
                    <Spinner variant="default" />
                    <Spinner variant="primary" />
                    <Spinner variant="secondary" />
                    <Spinner variant="accent" />
                </div>
            </ComponentPreview>

            <h2>Block Spinner Colors</h2>
            <ComponentPreview>
                <div className="flex items-center gap-8">
                    <BlockSpinner color="default" />
                    <BlockSpinner color="primary" />
                    <BlockSpinner color="secondary" />
                    <BlockSpinner color="accent" />
                    <BlockSpinner color="mixed" />
                </div>
            </ComponentPreview>

            <h2>Dots Spinner</h2>
            <ComponentPreview>
                <div className="flex items-center gap-8">
                    <DotsSpinner size="sm" color="default" />
                    <DotsSpinner size="default" color="primary" />
                    <DotsSpinner size="lg" color="secondary" />
                    <DotsSpinner size="xl" color="accent" />
                </div>
            </ComponentPreview>

            <h2>Bars Spinner</h2>
            <ComponentPreview>
                <div className="flex items-center gap-8">
                    <BarsSpinner size="sm" color="default" />
                    <BarsSpinner size="default" color="primary" />
                    <BarsSpinner size="lg" color="secondary" />
                    <BarsSpinner size="xl" color="mixed" />
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
                                Spinner
                            </td>
                            <td className="px-4 py-2 border-r-3 border-black dark:border-white text-sm">
                                size, variant
                            </td>
                            <td className="px-4 py-2 text-sm">Circular spinning loader</td>
                        </tr>
                        <tr className="border-b-3 border-black dark:border-white">
                            <td className="px-4 py-2 border-r-3 border-black dark:border-white font-medium">
                                BlockSpinner
                            </td>
                            <td className="px-4 py-2 border-r-3 border-black dark:border-white text-sm">
                                size, color
                            </td>
                            <td className="px-4 py-2 text-sm">4 pulsing blocks in grid</td>
                        </tr>
                        <tr className="border-b-3 border-black dark:border-white">
                            <td className="px-4 py-2 border-r-3 border-black dark:border-white font-medium">
                                DotsSpinner
                            </td>
                            <td className="px-4 py-2 border-r-3 border-black dark:border-white text-sm">
                                size, color
                            </td>
                            <td className="px-4 py-2 text-sm">3 bouncing dots</td>
                        </tr>
                        <tr>
                            <td className="px-4 py-2 border-r-3 border-black dark:border-white font-medium">
                                BarsSpinner
                            </td>
                            <td className="px-4 py-2 border-r-3 border-black dark:border-white text-sm">
                                size, color
                            </td>
                            <td className="px-4 py-2 text-sm">5 animated vertical bars</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
}
