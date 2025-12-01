'use client';

import { Pagination, Badge } from 'brutalist-ui';
import { ComponentPreview } from '@/components/component-preview';
import { InstallationTabs } from '@/components/installation-tabs';
import * as React from 'react';

export default function PaginationPage() {
    const [page1, setPage1] = React.useState(1);
    const [page2, setPage2] = React.useState(5);
    const [page3, setPage3] = React.useState(3);
    const [page4, setPage4] = React.useState(1);

    return (
        <div>
            <Badge variant="primary" className="mb-4">
                Component
            </Badge>
            <h1>Pagination</h1>

            <p>
                A pagination component for navigating between pages with Neo-Brutalism styling.
                Features first/last buttons, page numbers with ellipsis, and multiple sizes.
            </p>

            <h2>Preview</h2>
            <ComponentPreview>
                <Pagination currentPage={page1} totalPages={10} onPageChange={setPage1} />
            </ComponentPreview>

            <h2>Installation</h2>
            <InstallationTabs componentName="pagination" />

            <h2>Usage</h2>
            <pre className="bg-gray-900 text-white p-4 border-3 border-black dark:border-white shadow-brutal overflow-x-auto text-sm">
                {`const [currentPage, setCurrentPage] = React.useState(1);

<Pagination
  currentPage={currentPage}
  totalPages={10}
  onPageChange={setCurrentPage}
/>`}
            </pre>

            <h2>Many Pages (with ellipsis)</h2>
            <ComponentPreview>
                <Pagination
                    currentPage={page2}
                    totalPages={20}
                    onPageChange={setPage2}
                    siblingCount={1}
                />
            </ComponentPreview>

            <h2>Sizes</h2>
            <ComponentPreview className="flex-col gap-6">
                <div className="flex flex-col items-center gap-2">
                    <span className="text-xs font-bold">Small</span>
                    <Pagination
                        currentPage={page3}
                        totalPages={5}
                        onPageChange={setPage3}
                        size="sm"
                        showFirstLast={false}
                    />
                </div>
                <div className="flex flex-col items-center gap-2">
                    <span className="text-xs font-bold">Default</span>
                    <Pagination
                        currentPage={page3}
                        totalPages={5}
                        onPageChange={setPage3}
                        showFirstLast={false}
                    />
                </div>
                <div className="flex flex-col items-center gap-2">
                    <span className="text-xs font-bold">Large</span>
                    <Pagination
                        currentPage={page3}
                        totalPages={5}
                        onPageChange={setPage3}
                        size="lg"
                        showFirstLast={false}
                    />
                </div>
            </ComponentPreview>

            <h2>Without Page Numbers</h2>
            <ComponentPreview>
                <Pagination
                    currentPage={page4}
                    totalPages={10}
                    onPageChange={setPage4}
                    showPageNumbers={false}
                />
            </ComponentPreview>

            <h2>Props</h2>
            <div className="overflow-x-auto">
                <table className="w-full border-3 border-black dark:border-white">
                    <thead className="bg-[#FFE66D]">
                        <tr>
                            <th className="px-4 py-2 text-left border-r-3 border-b-3 border-black font-black text-black">
                                Prop
                            </th>
                            <th className="px-4 py-2 text-left border-r-3 border-b-3 border-black font-black text-black">
                                Type
                            </th>
                            <th className="px-4 py-2 text-left border-b-3 border-black font-black text-black">
                                Default
                            </th>
                        </tr>
                    </thead>
                    <tbody className="bg-white dark:bg-gray-900">
                        <tr className="border-b-3 border-black dark:border-white">
                            <td className="px-4 py-2 border-r-3 border-black dark:border-white font-medium">
                                currentPage
                            </td>
                            <td className="px-4 py-2 border-r-3 border-black dark:border-white text-sm">
                                number
                            </td>
                            <td className="px-4 py-2 text-sm">required</td>
                        </tr>
                        <tr className="border-b-3 border-black dark:border-white">
                            <td className="px-4 py-2 border-r-3 border-black dark:border-white font-medium">
                                totalPages
                            </td>
                            <td className="px-4 py-2 border-r-3 border-black dark:border-white text-sm">
                                number
                            </td>
                            <td className="px-4 py-2 text-sm">required</td>
                        </tr>
                        <tr className="border-b-3 border-black dark:border-white">
                            <td className="px-4 py-2 border-r-3 border-black dark:border-white font-medium">
                                onPageChange
                            </td>
                            <td className="px-4 py-2 border-r-3 border-black dark:border-white text-sm">
                                (page: number) =&gt; void
                            </td>
                            <td className="px-4 py-2 text-sm">required</td>
                        </tr>
                        <tr className="border-b-3 border-black dark:border-white">
                            <td className="px-4 py-2 border-r-3 border-black dark:border-white font-medium">
                                size
                            </td>
                            <td className="px-4 py-2 border-r-3 border-black dark:border-white text-sm">
                                "sm" | "default" | "lg"
                            </td>
                            <td className="px-4 py-2 text-sm">"default"</td>
                        </tr>
                        <tr className="border-b-3 border-black dark:border-white">
                            <td className="px-4 py-2 border-r-3 border-black dark:border-white font-medium">
                                showFirstLast
                            </td>
                            <td className="px-4 py-2 border-r-3 border-black dark:border-white text-sm">
                                boolean
                            </td>
                            <td className="px-4 py-2 text-sm">true</td>
                        </tr>
                        <tr>
                            <td className="px-4 py-2 border-r-3 border-black dark:border-white font-medium">
                                showPageNumbers
                            </td>
                            <td className="px-4 py-2 border-r-3 border-black dark:border-white text-sm">
                                boolean
                            </td>
                            <td className="px-4 py-2 text-sm">true</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
}
