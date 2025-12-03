import { Button, Card, CardContent, Badge } from '@/components/ui';
import { ComponentPreview } from '@/components/component-preview';
import { InstallationTabs } from '@/components/installation-tabs';
import { Mail, ArrowRight, Loader2 } from 'lucide-react';

export default function ButtonPage() {
    return (
        <div>
            <Badge variant="primary" className="mb-4">
                Component
            </Badge>
            <h1>Button</h1>

            <p>
                A Neo-Brutalism styled button component with multiple variants and sizes. Built on
                top of Radix UI Slot for polymorphism.
            </p>

            <h2>Preview</h2>
            <ComponentPreview>
                <div className="flex flex-wrap gap-4">
                    <Button variant="default">Default</Button>
                    <Button variant="primary">Primary</Button>
                    <Button variant="secondary">Secondary</Button>
                    <Button variant="accent">Accent</Button>
                    <Button variant="danger">Danger</Button>
                    <Button variant="success">Success</Button>
                </div>
            </ComponentPreview>

            <h2>Installation</h2>
            <InstallationTabs componentName="button" />

            <h2>Usage</h2>
            <pre className="bg-gray-900 text-white p-4 border-3 border-black dark:border-white shadow-brutal overflow-x-auto">
                {`import { Button } from "@/components/ui/button"

<Button variant="primary">Click me</Button>`}
            </pre>

            <h2>Variants</h2>
            <Card className="my-4 dark:bg-gray-900 dark:border-white">
                <CardContent className="pt-6 space-y-4">
                    <div>
                        <p className="font-bold mb-2">Default</p>
                        <Button variant="default">Default Button</Button>
                    </div>
                    <div>
                        <p className="font-bold mb-2">Primary</p>
                        <Button variant="primary">Primary Button</Button>
                    </div>
                    <div>
                        <p className="font-bold mb-2">Secondary</p>
                        <Button variant="secondary">Secondary Button</Button>
                    </div>
                    <div>
                        <p className="font-bold mb-2">Accent</p>
                        <Button variant="accent">Accent Button</Button>
                    </div>
                    <div>
                        <p className="font-bold mb-2">Danger</p>
                        <Button variant="danger">Danger Button</Button>
                    </div>
                    <div>
                        <p className="font-bold mb-2">Success</p>
                        <Button variant="success">Success Button</Button>
                    </div>
                    <div>
                        <p className="font-bold mb-2">Outline</p>
                        <Button variant="outline">Outline Button</Button>
                    </div>
                    <div>
                        <p className="font-bold mb-2">Ghost</p>
                        <Button variant="ghost">Ghost Button</Button>
                    </div>
                    <div>
                        <p className="font-bold mb-2">Link</p>
                        <Button variant="link">Link Button</Button>
                    </div>
                </CardContent>
            </Card>

            <h2>Sizes</h2>
            <ComponentPreview>
                <div className="flex flex-wrap items-center gap-4">
                    <Button size="sm">Small</Button>
                    <Button size="default">Default</Button>
                    <Button size="lg">Large</Button>
                    <Button size="xl">Extra Large</Button>
                    <Button size="icon">
                        <Mail className="h-5 w-5" />
                    </Button>
                </div>
            </ComponentPreview>

            <h2>With Icons</h2>
            <ComponentPreview>
                <div className="flex flex-wrap gap-4">
                    <Button variant="primary">
                        <Mail className="h-5 w-5" />
                        Send Email
                    </Button>
                    <Button variant="secondary">
                        Continue
                        <ArrowRight className="h-5 w-5" />
                    </Button>
                </div>
            </ComponentPreview>

            <h2>Disabled State</h2>
            <ComponentPreview>
                <div className="flex gap-4">
                    <Button disabled>Disabled</Button>
                    <Button variant="primary" disabled>
                        <Loader2 className="h-5 w-5 animate-spin" />
                        Loading...
                    </Button>
                </div>
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
                                variant
                            </td>
                            <td className="px-4 py-2 border-r-3 border-black dark:border-white text-sm">
                                "default" | "primary" | "secondary" | "accent" | "danger" |
                                "success" | "outline" | "ghost" | "link"
                            </td>
                            <td className="px-4 py-2 text-sm">"default"</td>
                        </tr>
                        <tr className="border-b-3 border-black dark:border-white">
                            <td className="px-4 py-2 border-r-3 border-black dark:border-white font-medium">
                                size
                            </td>
                            <td className="px-4 py-2 border-r-3 border-black dark:border-white text-sm">
                                "sm" | "default" | "lg" | "xl" | "icon"
                            </td>
                            <td className="px-4 py-2 text-sm">"default"</td>
                        </tr>
                        <tr className="border-b-3 border-black dark:border-white">
                            <td className="px-4 py-2 border-r-3 border-black dark:border-white font-medium">
                                asChild
                            </td>
                            <td className="px-4 py-2 border-r-3 border-black dark:border-white text-sm">
                                boolean
                            </td>
                            <td className="px-4 py-2 text-sm">false</td>
                        </tr>
                        <tr>
                            <td className="px-4 py-2 border-r-3 border-black dark:border-white font-medium">
                                disabled
                            </td>
                            <td className="px-4 py-2 border-r-3 border-black dark:border-white text-sm">
                                boolean
                            </td>
                            <td className="px-4 py-2 text-sm">false</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
}
