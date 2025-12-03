'use client';

import { Checkbox, Label, Badge } from '@/components/ui';
import { ComponentPreview } from '@/components/component-preview';
import { InstallationTabs } from '@/components/installation-tabs';
import * as React from 'react';

export default function CheckboxPage() {
    const [checked, setChecked] = React.useState(false);

    return (
        <div>
            <Badge variant="primary" className="mb-4">
                Component
            </Badge>
            <h1>Checkbox</h1>

            <p>A checkbox input control with Neo-Brutalism styling.</p>

            <h2>Preview</h2>
            <ComponentPreview>
                <div className="flex items-center gap-3">
                    <Checkbox
                        id="terms"
                        checked={checked}
                        onCheckedChange={(value) => setChecked(value === true)}
                    />
                    <Label htmlFor="terms">Accept terms and conditions</Label>
                </div>
            </ComponentPreview>

            <h2>Installation</h2>
            <InstallationTabs componentName="checkbox" />

            <h2>Usage</h2>
            <pre className="bg-gray-900 text-white p-4 border-3 border-black dark:border-white shadow-brutal overflow-x-auto text-sm">
                {`import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"

const [checked, setChecked] = React.useState(false);

<div className="flex items-center gap-3">
  <Checkbox
    id="terms"
    checked={checked}
    onCheckedChange={setChecked}
  />
  <Label htmlFor="terms">Accept terms</Label>
</div>`}
            </pre>

            <h2>Disabled State</h2>
            <ComponentPreview>
                <div className="flex items-center gap-3">
                    <Checkbox id="disabled" disabled />
                    <Label htmlFor="disabled" className="opacity-50">
                        Disabled Checkbox
                    </Label>
                </div>
            </ComponentPreview>
        </div>
    );
}
