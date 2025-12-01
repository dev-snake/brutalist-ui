'use client';

import {
    Tooltip,
    TooltipTrigger,
    TooltipContent,
    TooltipProvider,
    Button,
    Badge,
} from 'brutalist-ui';
import { ComponentPreview } from '@/components/component-preview';

export default function TooltipPage() {
    return (
        <div>
            <Badge variant="primary" className="mb-4">
                Component
            </Badge>
            <h1>Tooltip</h1>

            <p>
                A popup that displays information related to an element when the element receives
                focus or is hovered. Built on Radix UI Tooltip primitive.
            </p>

            <h2>Preview</h2>
            <ComponentPreview>
                <TooltipProvider>
                    <Tooltip>
                        <TooltipTrigger asChild>
                            <Button variant="outline">Hover me</Button>
                        </TooltipTrigger>
                        <TooltipContent>This is a tooltip!</TooltipContent>
                    </Tooltip>
                </TooltipProvider>
            </ComponentPreview>

            <h2>Installation</h2>
            <pre className="bg-gray-900 text-white p-4 border-3 border-black shadow-brutal overflow-x-auto">
                {`import {
  Tooltip,
  TooltipTrigger,
  TooltipContent,
  TooltipProvider,
} from "brutalist-ui";`}
            </pre>

            <h2>Usage</h2>
            <pre className="bg-gray-900 text-white p-4 border-3 border-black shadow-brutal overflow-x-auto text-sm">
                {`<TooltipProvider>
  <Tooltip>
    <TooltipTrigger asChild>
      <Button>Hover</Button>
    </TooltipTrigger>
    <TooltipContent>
      Tooltip content
    </TooltipContent>
  </Tooltip>
</TooltipProvider>`}
            </pre>
        </div>
    );
}
