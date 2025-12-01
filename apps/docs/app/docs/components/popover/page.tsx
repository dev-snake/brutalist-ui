'use client';

import { Popover, PopoverTrigger, PopoverContent, Button, Badge, Input, Label } from 'brutalist-ui';
import { ComponentPreview } from '@/components/component-preview';

export default function PopoverPage() {
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
            <pre className="bg-gray-900 text-white p-4 border-3 border-black dark:border-white shadow-brutal overflow-x-auto">
                {`import {
  Popover,
  PopoverTrigger,
  PopoverContent,
} from "brutalist-ui";`}
            </pre>

            <h2>Usage</h2>
            <pre className="bg-gray-900 text-white p-4 border-3 border-black dark:border-white shadow-brutal overflow-x-auto text-sm">
                {`<Popover>
  <PopoverTrigger asChild>
    <Button>Open</Button>
  </PopoverTrigger>
  <PopoverContent>
    Popover content here
  </PopoverContent>
</Popover>`}
            </pre>
        </div>
    );
}
