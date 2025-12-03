'use client';

import { Switch, Label, Badge, Card, CardContent } from '@/components/ui';
import { ComponentPreview } from '@/components/component-preview';
import { InstallationTabs } from '@/components/installation-tabs';
import * as React from 'react';

export default function SwitchPage() {
    const [enabled, setEnabled] = React.useState(false);

    return (
        <div>
            <Badge variant="primary" className="mb-4">
                Component
            </Badge>
            <h1>Switch</h1>

            <p>A toggle switch control with Neo-Brutalism styling.</p>

            <h2>Preview</h2>
            <ComponentPreview>
                <div className="flex items-center gap-3">
                    <Switch id="airplane" checked={enabled} onCheckedChange={setEnabled} />
                    <Label htmlFor="airplane">Airplane Mode</Label>
                </div>
            </ComponentPreview>

            <h2>Installation</h2>
            <InstallationTabs componentName="switch" />

            <h2>Usage</h2>
            <pre className="bg-gray-900 text-white p-4 border-3 border-black dark:border-white shadow-brutal overflow-x-auto text-sm">
                {`import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"

const [enabled, setEnabled] = React.useState(false);

<div className="flex items-center gap-3">
  <Switch
    id="setting"
    checked={enabled}
    onCheckedChange={setEnabled}
  />
  <Label htmlFor="setting">Enable Feature</Label>
</div>`}
            </pre>

            <h2>Disabled State</h2>
            <ComponentPreview>
                <div className="flex items-center gap-3">
                    <Switch id="disabled" disabled />
                    <Label htmlFor="disabled" className="opacity-50">
                        Disabled Switch
                    </Label>
                </div>
            </ComponentPreview>
        </div>
    );
}
