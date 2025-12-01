'use client';

import { Input, Label, Textarea, Badge, Card, CardContent } from 'brutalist-ui';
import { ComponentPreview } from '@/components/component-preview';

export default function InputPage() {
    return (
        <div>
            <Badge variant="primary" className="mb-4">
                Component
            </Badge>
            <h1>Input</h1>

            <p>Neo-Brutalism styled text input with focus states and variants.</p>

            <h2>Preview</h2>
            <ComponentPreview>
                <div className="w-full max-w-sm space-y-4">
                    <div>
                        <Label htmlFor="email">Email</Label>
                        <Input id="email" type="email" placeholder="you@example.com" />
                    </div>
                </div>
            </ComponentPreview>

            <h2>Installation</h2>
            <pre className="bg-gray-900 text-white p-4 border-3 border-black dark:border-white shadow-brutal overflow-x-auto">
                {`import { Input, Label } from "brutalist-ui";`}
            </pre>

            <h2>Usage</h2>
            <pre className="bg-gray-900 text-white p-4 border-3 border-black dark:border-white shadow-brutal overflow-x-auto">
                {`<div>
  <Label htmlFor="email">Email</Label>
  <Input id="email" type="email" placeholder="you@example.com" />
</div>`}
            </pre>

            <h2>Variants</h2>
            <Card className="my-4 dark:bg-gray-900 dark:border-white">
                <CardContent className="pt-6 space-y-4">
                    <div>
                        <Label>Default</Label>
                        <Input placeholder="Default input" />
                    </div>
                    <div>
                        <Label variant="error">Error</Label>
                        <Input variant="error" placeholder="Error state" />
                    </div>
                    <div>
                        <Label variant="success">Success</Label>
                        <Input variant="success" placeholder="Success state" />
                    </div>
                </CardContent>
            </Card>

            <h2>Sizes</h2>
            <Card className="my-4 dark:bg-gray-900 dark:border-white">
                <CardContent className="pt-6 space-y-4">
                    <div>
                        <Label>Small</Label>
                        <Input inputSize="sm" placeholder="Small input" />
                    </div>
                    <div>
                        <Label>Default</Label>
                        <Input inputSize="default" placeholder="Default input" />
                    </div>
                    <div>
                        <Label>Large</Label>
                        <Input inputSize="lg" placeholder="Large input" />
                    </div>
                </CardContent>
            </Card>

            <h2>Disabled</h2>
            <ComponentPreview>
                <Input disabled placeholder="Disabled input" className="max-w-sm" />
            </ComponentPreview>

            <h2>Textarea</h2>
            <ComponentPreview>
                <div className="w-full max-w-sm">
                    <Label htmlFor="message">Message</Label>
                    <Textarea id="message" placeholder="Type your message here..." />
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
                                "default" | "error" | "success"
                            </td>
                            <td className="px-4 py-2 text-sm">"default"</td>
                        </tr>
                        <tr className="border-b-3 border-black dark:border-white">
                            <td className="px-4 py-2 border-r-3 border-black dark:border-white font-medium">
                                inputSize
                            </td>
                            <td className="px-4 py-2 border-r-3 border-black dark:border-white text-sm">
                                "sm" | "default" | "lg"
                            </td>
                            <td className="px-4 py-2 text-sm">"default"</td>
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
