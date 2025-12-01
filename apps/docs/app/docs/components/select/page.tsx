'use client';

import {
    Select,
    SelectTrigger,
    SelectValue,
    SelectContent,
    SelectItem,
    SelectGroup,
    SelectLabel,
    Badge,
    Label,
} from 'brutalist-ui';
import { ComponentPreview } from '@/components/component-preview';

export default function SelectPage() {
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
            <pre className="bg-gray-900 text-white p-4 border-3 border-black dark:border-white shadow-brutal overflow-x-auto">
                {`import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "brutalist-ui";`}
            </pre>

            <h2>Usage</h2>
            <pre className="bg-gray-900 text-white p-4 border-3 border-black dark:border-white shadow-brutal overflow-x-auto text-sm">
                {`<Select>
  <SelectTrigger>
    <SelectValue placeholder="Select option" />
  </SelectTrigger>
  <SelectContent>
    <SelectItem value="option1">Option 1</SelectItem>
    <SelectItem value="option2">Option 2</SelectItem>
  </SelectContent>
</Select>`}
            </pre>
        </div>
    );
}
