'use client';

import { useState } from 'react';
import {
    Popover,
    PopoverTrigger,
    PopoverContent,
    PopoverAnchor,
    Button,
    Badge,
    Input,
    Label,
} from 'brutalist-ui';
import { ComponentPreview } from '@/components/component-preview';
import { InstallationTabs } from '@/components/installation-tabs';

export default function PopoverPage() {
    const [open, setOpen] = useState(false);

    return (
        <div>
            <Badge variant="primary" className="mb-4">
                Component
            </Badge>
            <h1>Popover</h1>

            <p>
                Displays rich content in a portal, triggered by a button. Built on Radix UI Popover
                primitive.
            </p>

            <h2>Preview</h2>
            <ComponentPreview>
                <Popover>
                    <PopoverTrigger asChild>
                        <Button variant="outline">Open Popover</Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-80">
                        <div className="space-y-4">
                            <h4 className="font-black">Dimensions</h4>
                            <div className="space-y-2">
                                <div>
                                    <Label htmlFor="width">Width</Label>
                                    <Input id="width" defaultValue="100%" />
                                </div>
                                <div>
                                    <Label htmlFor="height">Height</Label>
                                    <Input id="height" defaultValue="25px" />
                                </div>
                            </div>
                        </div>
                    </PopoverContent>
                </Popover>
            </ComponentPreview>

            <h2>Installation</h2>
            <InstallationTabs componentName="popover" />

            <h2>Usage</h2>
            <pre className="bg-gray-900 text-white p-4 border-3 border-black dark:border-white shadow-brutal overflow-x-auto text-sm">
                {`import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverAnchor,
} from "@/components/ui/popover"
import { Button } from "@/components/ui/button"

<Popover>
  <PopoverTrigger asChild>
    <Button>Open</Button>
  </PopoverTrigger>
  <PopoverContent>
    Popover content here
  </PopoverContent>
</Popover>`}
            </pre>

            <h2>Examples</h2>

            <h3>Different Alignments</h3>
            <p>
                Use <code>align</code> prop to control horizontal alignment.
            </p>
            <ComponentPreview>
                <div className="flex gap-4 flex-wrap">
                    <Popover>
                        <PopoverTrigger asChild>
                            <Button variant="secondary">Align Start</Button>
                        </PopoverTrigger>
                        <PopoverContent align="start" className="w-64">
                            <p className="font-bold">Aligned to Start</p>
                            <p className="text-sm text-gray-600 dark:text-gray-400">
                                Content is aligned to the start of the trigger.
                            </p>
                        </PopoverContent>
                    </Popover>

                    <Popover>
                        <PopoverTrigger asChild>
                            <Button variant="secondary">Align Center</Button>
                        </PopoverTrigger>
                        <PopoverContent align="center" className="w-64">
                            <p className="font-bold">Aligned to Center</p>
                            <p className="text-sm text-gray-600 dark:text-gray-400">
                                Content is centered relative to the trigger.
                            </p>
                        </PopoverContent>
                    </Popover>

                    <Popover>
                        <PopoverTrigger asChild>
                            <Button variant="secondary">Align End</Button>
                        </PopoverTrigger>
                        <PopoverContent align="end" className="w-64">
                            <p className="font-bold">Aligned to End</p>
                            <p className="text-sm text-gray-600 dark:text-gray-400">
                                Content is aligned to the end of the trigger.
                            </p>
                        </PopoverContent>
                    </Popover>
                </div>
            </ComponentPreview>

            <h3>Different Sides</h3>
            <p>
                Use <code>side</code> prop to control which side the popover appears on.
            </p>
            <ComponentPreview>
                <div className="flex gap-4 flex-wrap justify-center py-12">
                    <Popover>
                        <PopoverTrigger asChild>
                            <Button>Top</Button>
                        </PopoverTrigger>
                        <PopoverContent side="top" className="w-48">
                            <p className="font-bold text-center">Above the trigger</p>
                        </PopoverContent>
                    </Popover>

                    <Popover>
                        <PopoverTrigger asChild>
                            <Button>Bottom</Button>
                        </PopoverTrigger>
                        <PopoverContent side="bottom" className="w-48">
                            <p className="font-bold text-center">Below the trigger</p>
                        </PopoverContent>
                    </Popover>

                    <Popover>
                        <PopoverTrigger asChild>
                            <Button>Left</Button>
                        </PopoverTrigger>
                        <PopoverContent side="left" className="w-48">
                            <p className="font-bold text-center">Left of trigger</p>
                        </PopoverContent>
                    </Popover>

                    <Popover>
                        <PopoverTrigger asChild>
                            <Button>Right</Button>
                        </PopoverTrigger>
                        <PopoverContent side="right" className="w-48">
                            <p className="font-bold text-center">Right of trigger</p>
                        </PopoverContent>
                    </Popover>
                </div>
            </ComponentPreview>

            <h3>Controlled Popover</h3>
            <p>
                Control popover state with <code>open</code> and <code>onOpenChange</code>.
            </p>
            <ComponentPreview>
                <div className="flex gap-4 items-center">
                    <Popover open={open} onOpenChange={setOpen}>
                        <PopoverTrigger asChild>
                            <Button variant="accent">Controlled Popover</Button>
                        </PopoverTrigger>
                        <PopoverContent className="w-64">
                            <p className="font-bold">Controlled State</p>
                            <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                                Open: {open ? 'true' : 'false'}
                            </p>
                            <Button size="sm" onClick={() => setOpen(false)}>
                                Close
                            </Button>
                        </PopoverContent>
                    </Popover>
                    <Button variant="outline" onClick={() => setOpen(!open)}>
                        Toggle from Outside
                    </Button>
                </div>
            </ComponentPreview>

            <h3>With Form</h3>
            <p>Popover containing a form for inline editing.</p>
            <ComponentPreview>
                <Popover>
                    <PopoverTrigger asChild>
                        <Button variant="primary">Edit Settings</Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-80">
                        <div className="space-y-4">
                            <div>
                                <h4 className="font-black mb-2">Quick Settings</h4>
                                <p className="text-sm text-gray-600 dark:text-gray-400">
                                    Update your preferences
                                </p>
                            </div>
                            <div className="space-y-3">
                                <div>
                                    <Label htmlFor="display-name">Display Name</Label>
                                    <Input id="display-name" placeholder="Your name" />
                                </div>
                                <div>
                                    <Label htmlFor="email-pop">Email</Label>
                                    <Input
                                        id="email-pop"
                                        type="email"
                                        placeholder="your@email.com"
                                    />
                                </div>
                            </div>
                            <div className="flex justify-end gap-2">
                                <Button variant="outline" size="sm">
                                    Cancel
                                </Button>
                                <Button variant="primary" size="sm">
                                    Save
                                </Button>
                            </div>
                        </div>
                    </PopoverContent>
                </Popover>
            </ComponentPreview>

            <h2>API Reference</h2>

            <h3>Popover</h3>
            <p>Root component that manages state.</p>
            <div className="overflow-x-auto">
                <table className="w-full border-3 border-black dark:border-white">
                    <thead className="bg-[#FFE66D]">
                        <tr>
                            <th className="text-left p-3 font-black border-b-3 border-black">
                                Prop
                            </th>
                            <th className="text-left p-3 font-black border-b-3 border-black">
                                Type
                            </th>
                            <th className="text-left p-3 font-black border-b-3 border-black">
                                Default
                            </th>
                            <th className="text-left p-3 font-black border-b-3 border-black">
                                Description
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="p-3 font-mono text-sm border-b border-gray-200">open</td>
                            <td className="p-3 font-mono text-sm border-b border-gray-200">
                                boolean
                            </td>
                            <td className="p-3 font-mono text-sm border-b border-gray-200">-</td>
                            <td className="p-3 border-b border-gray-200">Controlled open state</td>
                        </tr>
                        <tr>
                            <td className="p-3 font-mono text-sm border-b border-gray-200">
                                onOpenChange
                            </td>
                            <td className="p-3 font-mono text-sm border-b border-gray-200">
                                (open: boolean) =&gt; void
                            </td>
                            <td className="p-3 font-mono text-sm border-b border-gray-200">-</td>
                            <td className="p-3 border-b border-gray-200">
                                Callback when open state changes
                            </td>
                        </tr>
                        <tr>
                            <td className="p-3 font-mono text-sm">defaultOpen</td>
                            <td className="p-3 font-mono text-sm">boolean</td>
                            <td className="p-3 font-mono text-sm">false</td>
                            <td className="p-3">Initial open state (uncontrolled)</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <h3>PopoverContent</h3>
            <p>The floating content container.</p>
            <div className="overflow-x-auto">
                <table className="w-full border-3 border-black dark:border-white">
                    <thead className="bg-[#FFE66D]">
                        <tr>
                            <th className="text-left p-3 font-black border-b-3 border-black">
                                Prop
                            </th>
                            <th className="text-left p-3 font-black border-b-3 border-black">
                                Type
                            </th>
                            <th className="text-left p-3 font-black border-b-3 border-black">
                                Default
                            </th>
                            <th className="text-left p-3 font-black border-b-3 border-black">
                                Description
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="p-3 font-mono text-sm border-b border-gray-200">
                                align
                            </td>
                            <td className="p-3 font-mono text-sm border-b border-gray-200">
                                "start" | "center" | "end"
                            </td>
                            <td className="p-3 font-mono text-sm border-b border-gray-200">
                                "center"
                            </td>
                            <td className="p-3 border-b border-gray-200">
                                Horizontal alignment relative to trigger
                            </td>
                        </tr>
                        <tr>
                            <td className="p-3 font-mono text-sm border-b border-gray-200">side</td>
                            <td className="p-3 font-mono text-sm border-b border-gray-200">
                                "top" | "bottom" | "left" | "right"
                            </td>
                            <td className="p-3 font-mono text-sm border-b border-gray-200">
                                "bottom"
                            </td>
                            <td className="p-3 border-b border-gray-200">
                                Which side to position on
                            </td>
                        </tr>
                        <tr>
                            <td className="p-3 font-mono text-sm border-b border-gray-200">
                                sideOffset
                            </td>
                            <td className="p-3 font-mono text-sm border-b border-gray-200">
                                number
                            </td>
                            <td className="p-3 font-mono text-sm border-b border-gray-200">8</td>
                            <td className="p-3 border-b border-gray-200">
                                Distance from trigger in pixels
                            </td>
                        </tr>
                        <tr>
                            <td className="p-3 font-mono text-sm">alignOffset</td>
                            <td className="p-3 font-mono text-sm">number</td>
                            <td className="p-3 font-mono text-sm">0</td>
                            <td className="p-3">Offset from alignment edge</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <h3>All Exports</h3>
            <div className="overflow-x-auto">
                <table className="w-full border-3 border-black dark:border-white">
                    <thead className="bg-[#4ECDC4]">
                        <tr>
                            <th className="text-left p-3 font-black border-b-3 border-black">
                                Component
                            </th>
                            <th className="text-left p-3 font-black border-b-3 border-black">
                                Description
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="p-3 font-mono text-sm border-b border-gray-200">
                                Popover
                            </td>
                            <td className="p-3 border-b border-gray-200">Root component</td>
                        </tr>
                        <tr>
                            <td className="p-3 font-mono text-sm border-b border-gray-200">
                                PopoverTrigger
                            </td>
                            <td className="p-3 border-b border-gray-200">
                                Element that triggers popover
                            </td>
                        </tr>
                        <tr>
                            <td className="p-3 font-mono text-sm border-b border-gray-200">
                                PopoverContent
                            </td>
                            <td className="p-3 border-b border-gray-200">
                                Floating content container
                            </td>
                        </tr>
                        <tr>
                            <td className="p-3 font-mono text-sm">PopoverAnchor</td>
                            <td className="p-3">Custom anchor element for positioning</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <h2>Accessibility</h2>
            <ul>
                <li>
                    <kbd>Enter</kbd> / <kbd>Space</kbd> opens/closes popover
                </li>
                <li>
                    <kbd>Escape</kbd> closes the popover
                </li>
                <li>Focus is managed automatically</li>
                <li>Click outside closes the popover</li>
            </ul>
        </div>
    );
}
