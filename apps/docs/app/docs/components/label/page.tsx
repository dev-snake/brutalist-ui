'use client';

import { Label, Input, Checkbox } from '@/components/ui';
import { InstallationTabs } from '@/components/installation-tabs';

export default function LabelPage() {
    return (
        <div className="space-y-8">
            <div>
                <h1 className="text-4xl font-black mb-4">Label</h1>
                <p className="text-lg text-gray-600 dark:text-gray-300">
                    A label component for form inputs with accessible styling.
                </p>
            </div>

            {/* Installation */}
            <section className="space-y-4">
                <h2 className="text-2xl font-bold">Installation</h2>
                <InstallationTabs componentName="label" />
            </section>

            {/* Basic Example */}
            <section className="space-y-4">
                <h2 className="text-2xl font-bold">Basic Usage</h2>
                <div className="p-6 bg-white dark:bg-gray-900 border-3 border-black dark:border-white">
                    <div className="space-y-2">
                        <Label htmlFor="email">Email</Label>
                        <Input id="email" type="email" placeholder="Enter your email" />
                    </div>
                </div>
                <pre className="p-4 bg-gray-100 dark:bg-gray-800 border-3 border-black dark:border-white overflow-x-auto">
                    <code>{`import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"

<Label htmlFor="email">Email</Label>
<Input id="email" type="email" placeholder="Enter your email" />`}</code>
                </pre>
            </section>

            {/* With Checkbox */}
            <section className="space-y-4">
                <h2 className="text-2xl font-bold">With Checkbox</h2>
                <div className="p-6 bg-white dark:bg-gray-900 border-3 border-black dark:border-white">
                    <div className="flex items-center gap-2">
                        <Checkbox id="terms" />
                        <Label htmlFor="terms">Accept terms and conditions</Label>
                    </div>
                </div>
                <pre className="p-4 bg-gray-100 dark:bg-gray-800 border-3 border-black dark:border-white overflow-x-auto">
                    <code>{`<div className="flex items-center gap-2">
  <Checkbox id="terms" />
  <Label htmlFor="terms">Accept terms and conditions</Label>
</div>`}</code>
                </pre>
            </section>

            {/* Required */}
            <section className="space-y-4">
                <h2 className="text-2xl font-bold">Required Field</h2>
                <div className="p-6 bg-white dark:bg-gray-900 border-3 border-black dark:border-white">
                    <div className="space-y-2">
                        <Label htmlFor="username">
                            Username <span className="text-red-500">*</span>
                        </Label>
                        <Input id="username" placeholder="Enter your username" required />
                    </div>
                </div>
                <pre className="p-4 bg-gray-100 dark:bg-gray-800 border-3 border-black dark:border-white overflow-x-auto">
                    <code>{`<Label htmlFor="username">
  Username <span className="text-red-500">*</span>
</Label>
<Input id="username" placeholder="Enter your username" required />`}</code>
                </pre>
            </section>

            {/* With Helper Text */}
            <section className="space-y-4">
                <h2 className="text-2xl font-bold">With Helper Text</h2>
                <div className="p-6 bg-white dark:bg-gray-900 border-3 border-black dark:border-white">
                    <div className="space-y-2">
                        <Label htmlFor="password">Password</Label>
                        <Input id="password" type="password" placeholder="Enter your password" />
                        <p className="text-sm text-gray-500">Must be at least 8 characters long.</p>
                    </div>
                </div>
                <pre className="p-4 bg-gray-100 dark:bg-gray-800 border-3 border-black dark:border-white overflow-x-auto">
                    <code>{`<div className="space-y-2">
  <Label htmlFor="password">Password</Label>
  <Input id="password" type="password" placeholder="..." />
  <p className="text-sm text-gray-500">Must be at least 8 characters.</p>
</div>`}</code>
                </pre>
            </section>

            {/* Form Example */}
            <section className="space-y-4">
                <h2 className="text-2xl font-bold">Form Example</h2>
                <div className="p-6 bg-white dark:bg-gray-900 border-3 border-black dark:border-white">
                    <form className="space-y-4">
                        <div className="space-y-2">
                            <Label htmlFor="form-name">Full Name</Label>
                            <Input id="form-name" placeholder="John Doe" />
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="form-email">Email Address</Label>
                            <Input id="form-email" type="email" placeholder="john@example.com" />
                        </div>
                        <div className="flex items-center gap-2">
                            <Checkbox id="form-newsletter" />
                            <Label htmlFor="form-newsletter">Subscribe to newsletter</Label>
                        </div>
                    </form>
                </div>
                <pre className="p-4 bg-gray-100 dark:bg-gray-800 border-3 border-black dark:border-white overflow-x-auto">
                    <code>{`<form className="space-y-4">
  <div className="space-y-2">
    <Label htmlFor="name">Full Name</Label>
    <Input id="name" placeholder="John Doe" />
  </div>
  <div className="space-y-2">
    <Label htmlFor="email">Email Address</Label>
    <Input id="email" type="email" placeholder="john@example.com" />
  </div>
  <div className="flex items-center gap-2">
    <Checkbox id="newsletter" />
    <Label htmlFor="newsletter">Subscribe to newsletter</Label>
  </div>
</form>`}</code>
                </pre>
            </section>
        </div>
    );
}
