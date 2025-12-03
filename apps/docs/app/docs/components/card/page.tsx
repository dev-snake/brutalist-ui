'use client';

import {
    Card,
    CardHeader,
    CardTitle,
    CardDescription,
    CardContent,
    CardFooter,
    Button,
    Badge,
} from '@/components/ui';
import { ComponentPreview } from '@/components/component-preview';
import { InstallationTabs } from '@/components/installation-tabs';

export default function CardPage() {
    return (
        <div>
            <Badge variant="primary" className="mb-4">
                Component
            </Badge>
            <h1>Card</h1>

            <p>
                A container component with Neo-Brutalism styling. Perfect for grouping related
                content with bold borders and offset shadows.
            </p>

            <h2>Preview</h2>
            <ComponentPreview className="bg-gray-100 dark:bg-gray-800">
                <Card className="w-full max-w-sm dark:bg-gray-900 dark:border-white">
                    <CardHeader>
                        <CardTitle>Card Title</CardTitle>
                        <CardDescription>Card description goes here.</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <p>This is the main content area of the card.</p>
                    </CardContent>
                    <CardFooter className="gap-2">
                        <Button variant="primary" size="sm">
                            Action
                        </Button>
                        <Button variant="outline" size="sm">
                            Cancel
                        </Button>
                    </CardFooter>
                </Card>
            </ComponentPreview>

            <h2>Installation</h2>
            <InstallationTabs componentName="card" />

            <h2>Variants</h2>
            <div className="grid gap-4 my-4">
                <div>
                    <p className="font-bold mb-2">Default</p>
                    <Card variant="default" className="max-w-sm dark:bg-gray-900 dark:border-white">
                        <CardContent className="pt-6">Default card with shadow</CardContent>
                    </Card>
                </div>
                <div>
                    <p className="font-bold mb-2">Elevated</p>
                    <Card
                        variant="elevated"
                        className="max-w-sm dark:bg-gray-900 dark:border-white"
                    >
                        <CardContent className="pt-6">Elevated card with larger shadow</CardContent>
                    </Card>
                </div>
                <div>
                    <p className="font-bold mb-2">Flat</p>
                    <Card variant="flat" className="max-w-sm dark:bg-gray-900 dark:border-white">
                        <CardContent className="pt-6">Flat card without shadow</CardContent>
                    </Card>
                </div>
                <div>
                    <p className="font-bold mb-2">Interactive</p>
                    <Card
                        variant="interactive"
                        className="max-w-sm cursor-pointer dark:bg-gray-900 dark:border-white"
                    >
                        <CardContent className="pt-6">Hover me! Interactive card</CardContent>
                    </Card>
                </div>
                <div>
                    <p className="font-bold mb-2">Primary</p>
                    <Card variant="primary" className="max-w-sm dark:bg-gray-900 dark:border-white">
                        <CardContent className="pt-6">Primary colored shadow</CardContent>
                    </Card>
                </div>
                <div>
                    <p className="font-bold mb-2">Secondary</p>
                    <Card
                        variant="secondary"
                        className="max-w-sm dark:bg-gray-900 dark:border-white"
                    >
                        <CardContent className="pt-6">Secondary colored shadow</CardContent>
                    </Card>
                </div>
            </div>

            <h2>Padding Options</h2>
            <div className="grid gap-4 my-4">
                <Card padding="none" className="max-w-sm dark:bg-gray-900 dark:border-white">
                    <CardContent>No padding</CardContent>
                </Card>
                <Card padding="sm" className="max-w-sm dark:bg-gray-900 dark:border-white">
                    <CardContent>Small padding</CardContent>
                </Card>
                <Card padding="default" className="max-w-sm dark:bg-gray-900 dark:border-white">
                    <CardContent>Default padding</CardContent>
                </Card>
                <Card padding="lg" className="max-w-sm dark:bg-gray-900 dark:border-white">
                    <CardContent>Large padding</CardContent>
                </Card>
            </div>

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
                                variant
                            </td>
                            <td className="px-4 py-2 border-r-3 border-black dark:border-white text-sm">
                                "default" | "elevated" | "flat" | "interactive" | "primary" |
                                "secondary"
                            </td>
                            <td className="px-4 py-2 text-sm">"default"</td>
                        </tr>
                        <tr>
                            <td className="px-4 py-2 border-r-3 border-black dark:border-white font-medium">
                                padding
                            </td>
                            <td className="px-4 py-2 border-r-3 border-black dark:border-white text-sm">
                                "none" | "sm" | "default" | "lg"
                            </td>
                            <td className="px-4 py-2 text-sm">"default"</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
}
