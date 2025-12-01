'use client';

import { Tabs, TabsList, TabsTrigger, TabsContent, Badge, Card, CardContent } from 'brutalist-ui';
import { ComponentPreview } from '@/components/component-preview';

export default function TabsPage() {
    return (
        <div>
            <Badge variant="primary" className="mb-4">
                Component
            </Badge>
            <h1>Tabs</h1>

            <p>
                A set of layered sections of content with Neo-Brutalism styling. Built on Radix UI
                Tabs primitive.
            </p>

            <h2>Preview</h2>
            <ComponentPreview>
                <Tabs defaultValue="account" className="w-full max-w-md">
                    <TabsList>
                        <TabsTrigger value="account">Account</TabsTrigger>
                        <TabsTrigger value="password">Password</TabsTrigger>
                        <TabsTrigger value="settings">Settings</TabsTrigger>
                    </TabsList>
                    <TabsContent value="account">
                        <p className="font-medium">
                            Manage your account settings and preferences here.
                        </p>
                    </TabsContent>
                    <TabsContent value="password">
                        <p className="font-medium">Change your password and security settings.</p>
                    </TabsContent>
                    <TabsContent value="settings">
                        <p className="font-medium">
                            Configure application settings and preferences.
                        </p>
                    </TabsContent>
                </Tabs>
            </ComponentPreview>

            <h2>Installation</h2>
            <pre className="bg-gray-900 text-white p-4 border-3 border-black dark:border-white shadow-brutal overflow-x-auto">
                {`import {
  Tabs,
  TabsList,
  TabsTrigger,
  TabsContent,
} from "brutalist-ui";`}
            </pre>

            <h2>Usage</h2>
            <pre className="bg-gray-900 text-white p-4 border-3 border-black dark:border-white shadow-brutal overflow-x-auto text-sm">
                {`<Tabs defaultValue="tab1">
  <TabsList>
    <TabsTrigger value="tab1">Tab 1</TabsTrigger>
    <TabsTrigger value="tab2">Tab 2</TabsTrigger>
  </TabsList>
  <TabsContent value="tab1">
    Content for tab 1
  </TabsContent>
  <TabsContent value="tab2">
    Content for tab 2
  </TabsContent>
</Tabs>`}
            </pre>
        </div>
    );
}
