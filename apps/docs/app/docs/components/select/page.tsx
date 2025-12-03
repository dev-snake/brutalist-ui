'use client';

import { useState } from 'react';
import {
    Select,
    SelectTrigger,
    SelectValue,
    SelectContent,
    SelectItem,
    SelectGroup,
    SelectLabel,
    SelectSeparator,
    Badge,
    Label,
} from '@/components/ui';
import { ComponentPreview } from '@/components/component-preview';
import { InstallationTabs } from '@/components/installation-tabs';

export default function SelectPage() {
    const [value, setValue] = useState('');

    return (
        <div>
            <Badge variant="primary" className="mb-4">
                Component
            </Badge>
            <h1>Select</h1>

            <p>
                A dropdown select component with Neo-Brutalism styling. Built on Radix UI Select
                primitive.
            </p>

            <h2>Preview</h2>
            <ComponentPreview>
                <div className="w-full max-w-xs">
                    <Label htmlFor="fruit">Favorite Fruit</Label>
                    <Select>
                        <SelectTrigger id="fruit">
                            <SelectValue placeholder="Select a fruit" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectGroup>
                                <SelectLabel>Fruits</SelectLabel>
                                <SelectItem value="apple">Apple</SelectItem>
                                <SelectItem value="banana">Banana</SelectItem>
                                <SelectItem value="orange">Orange</SelectItem>
                                <SelectItem value="grape">Grape</SelectItem>
                                <SelectItem value="mango">Mango</SelectItem>
                            </SelectGroup>
                        </SelectContent>
                    </Select>
                </div>
            </ComponentPreview>

            <h2>Installation</h2>
            <InstallationTabs componentName="select" />

            <h2>Usage</h2>
            <pre className="bg-gray-900 text-white p-4 border-3 border-black dark:border-white shadow-brutal overflow-x-auto text-sm">
                {`import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
  SelectGroup,
  SelectLabel,
  SelectSeparator,
} from "@/components/ui/select"

<Select>
  <SelectTrigger>
    <SelectValue placeholder="Select option" />
  </SelectTrigger>
  <SelectContent>
    <SelectItem value="option1">Option 1</SelectItem>
    <SelectItem value="option2">Option 2</SelectItem>
  </SelectContent>
</Select>`}
            </pre>

            <h2>Examples</h2>

            <h3>Multiple Groups with Separators</h3>
            <p>Organize options into groups with labels and separators.</p>
            <ComponentPreview>
                <div className="w-full max-w-xs">
                    <Select>
                        <SelectTrigger>
                            <SelectValue placeholder="Select a timezone" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectGroup>
                                <SelectLabel>North America</SelectLabel>
                                <SelectItem value="est">Eastern Standard Time (EST)</SelectItem>
                                <SelectItem value="cst">Central Standard Time (CST)</SelectItem>
                                <SelectItem value="mst">Mountain Standard Time (MST)</SelectItem>
                                <SelectItem value="pst">Pacific Standard Time (PST)</SelectItem>
                            </SelectGroup>
                            <SelectSeparator />
                            <SelectGroup>
                                <SelectLabel>Europe</SelectLabel>
                                <SelectItem value="gmt">Greenwich Mean Time (GMT)</SelectItem>
                                <SelectItem value="cet">Central European Time (CET)</SelectItem>
                                <SelectItem value="eet">Eastern European Time (EET)</SelectItem>
                            </SelectGroup>
                            <SelectSeparator />
                            <SelectGroup>
                                <SelectLabel>Asia</SelectLabel>
                                <SelectItem value="jst">Japan Standard Time (JST)</SelectItem>
                                <SelectItem value="cst-china">China Standard Time (CST)</SelectItem>
                                <SelectItem value="ist">India Standard Time (IST)</SelectItem>
                            </SelectGroup>
                        </SelectContent>
                    </Select>
                </div>
            </ComponentPreview>

            <h3>Controlled Select</h3>
            <p>
                Control the select state programmatically with <code>value</code> and{' '}
                <code>onValueChange</code>.
            </p>
            <ComponentPreview>
                <div className="space-y-4">
                    <div className="w-full max-w-xs">
                        <Select value={value} onValueChange={setValue}>
                            <SelectTrigger>
                                <SelectValue placeholder="Select a color" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="red">Red</SelectItem>
                                <SelectItem value="green">Green</SelectItem>
                                <SelectItem value="blue">Blue</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>
                    <p className="font-bold">Selected: {value || 'None'}</p>
                </div>
            </ComponentPreview>

            <h3>With Disabled Items</h3>
            <p>
                Use <code>disabled</code> prop to disable specific options.
            </p>
            <ComponentPreview>
                <div className="w-full max-w-xs">
                    <Select>
                        <SelectTrigger>
                            <SelectValue placeholder="Select a plan" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="free">Free</SelectItem>
                            <SelectItem value="pro">Pro ($10/month)</SelectItem>
                            <SelectItem value="enterprise" disabled>
                                Enterprise (Contact us)
                            </SelectItem>
                        </SelectContent>
                    </Select>
                </div>
            </ComponentPreview>

            <h3>Disabled Select</h3>
            <p>Disable the entire select component.</p>
            <ComponentPreview>
                <div className="w-full max-w-xs">
                    <Select disabled>
                        <SelectTrigger>
                            <SelectValue placeholder="Select (disabled)" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="option1">Option 1</SelectItem>
                            <SelectItem value="option2">Option 2</SelectItem>
                        </SelectContent>
                    </Select>
                </div>
            </ComponentPreview>

            <h2>API Reference</h2>

            <h3>Select</h3>
            <p>The root component that manages state.</p>
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
                                value
                            </td>
                            <td className="p-3 font-mono text-sm border-b border-gray-200">
                                string
                            </td>
                            <td className="p-3 font-mono text-sm border-b border-gray-200">-</td>
                            <td className="p-3 border-b border-gray-200">Controlled value</td>
                        </tr>
                        <tr>
                            <td className="p-3 font-mono text-sm border-b border-gray-200">
                                onValueChange
                            </td>
                            <td className="p-3 font-mono text-sm border-b border-gray-200">
                                (value: string) =&gt; void
                            </td>
                            <td className="p-3 font-mono text-sm border-b border-gray-200">-</td>
                            <td className="p-3 border-b border-gray-200">
                                Callback when value changes
                            </td>
                        </tr>
                        <tr>
                            <td className="p-3 font-mono text-sm border-b border-gray-200">
                                defaultValue
                            </td>
                            <td className="p-3 font-mono text-sm border-b border-gray-200">
                                string
                            </td>
                            <td className="p-3 font-mono text-sm border-b border-gray-200">-</td>
                            <td className="p-3 border-b border-gray-200">
                                Initial value (uncontrolled)
                            </td>
                        </tr>
                        <tr>
                            <td className="p-3 font-mono text-sm">disabled</td>
                            <td className="p-3 font-mono text-sm">boolean</td>
                            <td className="p-3 font-mono text-sm">false</td>
                            <td className="p-3">Disable the select</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <h3>SelectContent</h3>
            <p>The dropdown content container.</p>
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
                                position
                            </td>
                            <td className="p-3 font-mono text-sm border-b border-gray-200">
                                "popper" | "item-aligned"
                            </td>
                            <td className="p-3 font-mono text-sm border-b border-gray-200">
                                "popper"
                            </td>
                            <td className="p-3 border-b border-gray-200">
                                Positioning mode for dropdown
                            </td>
                        </tr>
                        <tr>
                            <td className="p-3 font-mono text-sm">side</td>
                            <td className="p-3 font-mono text-sm">
                                "top" | "bottom" | "left" | "right"
                            </td>
                            <td className="p-3 font-mono text-sm">"bottom"</td>
                            <td className="p-3">Position relative to trigger</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <h3>SelectItem</h3>
            <p>Individual option item.</p>
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
                                value
                            </td>
                            <td className="p-3 font-mono text-sm border-b border-gray-200">
                                string
                            </td>
                            <td className="p-3 font-mono text-sm border-b border-gray-200">
                                required
                            </td>
                            <td className="p-3 border-b border-gray-200">
                                Unique value for the option
                            </td>
                        </tr>
                        <tr>
                            <td className="p-3 font-mono text-sm">disabled</td>
                            <td className="p-3 font-mono text-sm">boolean</td>
                            <td className="p-3 font-mono text-sm">false</td>
                            <td className="p-3">Disable this option</td>
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
                                Select
                            </td>
                            <td className="p-3 border-b border-gray-200">Root component</td>
                        </tr>
                        <tr>
                            <td className="p-3 font-mono text-sm border-b border-gray-200">
                                SelectTrigger
                            </td>
                            <td className="p-3 border-b border-gray-200">
                                Button that opens dropdown
                            </td>
                        </tr>
                        <tr>
                            <td className="p-3 font-mono text-sm border-b border-gray-200">
                                SelectValue
                            </td>
                            <td className="p-3 border-b border-gray-200">
                                Displays selected value
                            </td>
                        </tr>
                        <tr>
                            <td className="p-3 font-mono text-sm border-b border-gray-200">
                                SelectContent
                            </td>
                            <td className="p-3 border-b border-gray-200">Dropdown container</td>
                        </tr>
                        <tr>
                            <td className="p-3 font-mono text-sm border-b border-gray-200">
                                SelectItem
                            </td>
                            <td className="p-3 border-b border-gray-200">Individual option</td>
                        </tr>
                        <tr>
                            <td className="p-3 font-mono text-sm border-b border-gray-200">
                                SelectGroup
                            </td>
                            <td className="p-3 border-b border-gray-200">Group options together</td>
                        </tr>
                        <tr>
                            <td className="p-3 font-mono text-sm border-b border-gray-200">
                                SelectLabel
                            </td>
                            <td className="p-3 border-b border-gray-200">Label for a group</td>
                        </tr>
                        <tr>
                            <td className="p-3 font-mono text-sm border-b border-gray-200">
                                SelectSeparator
                            </td>
                            <td className="p-3 border-b border-gray-200">
                                Visual divider between groups
                            </td>
                        </tr>
                        <tr>
                            <td className="p-3 font-mono text-sm border-b border-gray-200">
                                SelectScrollUpButton
                            </td>
                            <td className="p-3 border-b border-gray-200">
                                Scroll up indicator for long lists
                            </td>
                        </tr>
                        <tr>
                            <td className="p-3 font-mono text-sm">SelectScrollDownButton</td>
                            <td className="p-3">Scroll down indicator for long lists</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <h2>Accessibility</h2>
            <ul>
                <li>
                    <kbd>Enter</kbd> / <kbd>Space</kbd> opens dropdown and selects item
                </li>
                <li>
                    <kbd>↑</kbd> <kbd>↓</kbd> navigate between options
                </li>
                <li>
                    <kbd>Escape</kbd> closes the dropdown
                </li>
                <li>Type to search and focus matching options</li>
                <li>Full screen reader support</li>
            </ul>
        </div>
    );
}
