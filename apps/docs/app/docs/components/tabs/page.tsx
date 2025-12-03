'use client';

import { useState } from 'react';
import {
    Tabs,
    TabsList,
    TabsTrigger,
    TabsContent,
    Badge,
    Card,
    CardContent,
    Input,
    Label,
    Button,
    Checkbox,
} from 'brutalist-ui';
import { ComponentPreview } from '@/components/component-preview';
import { InstallationTabs } from '@/components/installation-tabs';

export default function TabsPage() {
    const [activeTab, setActiveTab] = useState('account');

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
            <InstallationTabs componentName="tabs" />

            <h2>Usage</h2>
            <pre className="bg-gray-900 text-white p-4 border-3 border-black dark:border-white shadow-brutal overflow-x-auto text-sm">
                {`import {
  Tabs,
  TabsList,
  TabsTrigger,
  TabsContent,
} from "@/components/ui/tabs"

<Tabs defaultValue="tab1">
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

            <h2>Examples</h2>

            <h3>Controlled Tabs</h3>
            <p>
                Control tab state with <code>value</code> and <code>onValueChange</code>.
            </p>
            <ComponentPreview>
                <div className="space-y-4 w-full max-w-md">
                    <Tabs value={activeTab} onValueChange={setActiveTab}>
                        <TabsList>
                            <TabsTrigger value="account">Account</TabsTrigger>
                            <TabsTrigger value="password">Password</TabsTrigger>
                        </TabsList>
                        <TabsContent value="account">
                            <p className="font-medium">Account settings panel</p>
                        </TabsContent>
                        <TabsContent value="password">
                            <p className="font-medium">Password settings panel</p>
                        </TabsContent>
                    </Tabs>
                    <div className="flex gap-2">
                        <Button size="sm" onClick={() => setActiveTab('account')}>
                            Go to Account
                        </Button>
                        <Button size="sm" onClick={() => setActiveTab('password')}>
                            Go to Password
                        </Button>
                    </div>
                </div>
            </ComponentPreview>

            <h3>With Disabled Tab</h3>
            <p>
                Use <code>disabled</code> prop to disable specific tabs.
            </p>
            <ComponentPreview>
                <Tabs defaultValue="overview" className="w-full max-w-md">
                    <TabsList>
                        <TabsTrigger value="overview">Overview</TabsTrigger>
                        <TabsTrigger value="analytics">Analytics</TabsTrigger>
                        <TabsTrigger value="reports" disabled>
                            Reports (Coming Soon)
                        </TabsTrigger>
                    </TabsList>
                    <TabsContent value="overview">
                        <p className="font-medium">Project overview and summary.</p>
                    </TabsContent>
                    <TabsContent value="analytics">
                        <p className="font-medium">View detailed analytics and metrics.</p>
                    </TabsContent>
                    <TabsContent value="reports">
                        <p className="font-medium">Reports feature coming soon!</p>
                    </TabsContent>
                </Tabs>
            </ComponentPreview>

            <h3>With Form Content</h3>
            <p>Tabs containing form inputs.</p>
            <ComponentPreview>
                <Tabs defaultValue="profile" className="w-full max-w-md">
                    <TabsList>
                        <TabsTrigger value="profile">Profile</TabsTrigger>
                        <TabsTrigger value="notifications">Notifications</TabsTrigger>
                    </TabsList>
                    <TabsContent value="profile">
                        <div className="space-y-4">
                            <div>
                                <Label htmlFor="name">Display Name</Label>
                                <Input id="name" placeholder="Enter your name" />
                            </div>
                            <div>
                                <Label htmlFor="username">Username</Label>
                                <Input id="username" placeholder="@username" />
                            </div>
                            <Button variant="primary">Save Profile</Button>
                        </div>
                    </TabsContent>
                    <TabsContent value="notifications">
                        <div className="space-y-4">
                            <p className="font-medium">Notification preferences</p>
                            <div className="space-y-3">
                                <div className="flex items-center gap-3">
                                    <Checkbox id="email-notif" defaultChecked />
                                    <Label htmlFor="email-notif">Email notifications</Label>
                                </div>
                                <div className="flex items-center gap-3">
                                    <Checkbox id="push-notif" />
                                    <Label htmlFor="push-notif">Push notifications</Label>
                                </div>
                            </div>
                            <Button variant="primary">Save Preferences</Button>
                        </div>
                    </TabsContent>
                </Tabs>
            </ComponentPreview>

            <h3>Full Width Tabs</h3>
            <p>Make tabs stretch to fill the container width.</p>
            <ComponentPreview>
                <Tabs defaultValue="tab1" className="w-full max-w-md">
                    <TabsList className="w-full grid grid-cols-3">
                        <TabsTrigger value="tab1">Tab 1</TabsTrigger>
                        <TabsTrigger value="tab2">Tab 2</TabsTrigger>
                        <TabsTrigger value="tab3">Tab 3</TabsTrigger>
                    </TabsList>
                    <TabsContent value="tab1">
                        <p className="font-medium">Content for the first tab.</p>
                    </TabsContent>
                    <TabsContent value="tab2">
                        <p className="font-medium">Content for the second tab.</p>
                    </TabsContent>
                    <TabsContent value="tab3">
                        <p className="font-medium">Content for the third tab.</p>
                    </TabsContent>
                </Tabs>
            </ComponentPreview>

            <h2>API Reference</h2>

            <h3>Tabs</h3>
            <p>Root component that manages tab state.</p>
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
                                defaultValue
                            </td>
                            <td className="p-3 font-mono text-sm border-b border-gray-200">
                                string
                            </td>
                            <td className="p-3 font-mono text-sm border-b border-gray-200">-</td>
                            <td className="p-3 border-b border-gray-200">
                                Initial active tab (uncontrolled)
                            </td>
                        </tr>
                        <tr>
                            <td className="p-3 font-mono text-sm border-b border-gray-200">
                                value
                            </td>
                            <td className="p-3 font-mono text-sm border-b border-gray-200">
                                string
                            </td>
                            <td className="p-3 font-mono text-sm border-b border-gray-200">-</td>
                            <td className="p-3 border-b border-gray-200">
                                Controlled active tab value
                            </td>
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
                                Callback when tab changes
                            </td>
                        </tr>
                        <tr>
                            <td className="p-3 font-mono text-sm">orientation</td>
                            <td className="p-3 font-mono text-sm">"horizontal" | "vertical"</td>
                            <td className="p-3 font-mono text-sm">"horizontal"</td>
                            <td className="p-3">Tab orientation</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <h3>TabsTrigger</h3>
            <p>Individual tab button.</p>
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
                                Unique identifier for the tab
                            </td>
                        </tr>
                        <tr>
                            <td className="p-3 font-mono text-sm">disabled</td>
                            <td className="p-3 font-mono text-sm">boolean</td>
                            <td className="p-3 font-mono text-sm">false</td>
                            <td className="p-3">Disable this tab</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <h3>TabsContent</h3>
            <p>Content panel for a tab.</p>
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
                                Must match a TabsTrigger value
                            </td>
                        </tr>
                        <tr>
                            <td className="p-3 font-mono text-sm">forceMount</td>
                            <td className="p-3 font-mono text-sm">boolean</td>
                            <td className="p-3 font-mono text-sm">false</td>
                            <td className="p-3">Keep content mounted even when inactive</td>
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
                            <td className="p-3 font-mono text-sm border-b border-gray-200">Tabs</td>
                            <td className="p-3 border-b border-gray-200">Root container</td>
                        </tr>
                        <tr>
                            <td className="p-3 font-mono text-sm border-b border-gray-200">
                                TabsList
                            </td>
                            <td className="p-3 border-b border-gray-200">
                                Container for tab triggers
                            </td>
                        </tr>
                        <tr>
                            <td className="p-3 font-mono text-sm border-b border-gray-200">
                                TabsTrigger
                            </td>
                            <td className="p-3 border-b border-gray-200">Individual tab button</td>
                        </tr>
                        <tr>
                            <td className="p-3 font-mono text-sm">TabsContent</td>
                            <td className="p-3">Tab content panel</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <h2>Accessibility</h2>
            <ul>
                <li>
                    <kbd>Tab</kbd> moves focus to the active tab
                </li>
                <li>
                    <kbd>←</kbd> <kbd>→</kbd> navigate between tabs (horizontal)
                </li>
                <li>
                    <kbd>↑</kbd> <kbd>↓</kbd> navigate between tabs (vertical)
                </li>
                <li>
                    <kbd>Home</kbd> / <kbd>End</kbd> move to first/last tab
                </li>
                <li>
                    <kbd>Enter</kbd> / <kbd>Space</kbd> activates focused tab
                </li>
            </ul>
        </div>
    );
}
