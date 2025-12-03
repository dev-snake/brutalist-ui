'use client';

import { useState } from 'react';
import {
    Dialog,
    DialogTrigger,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogDescription,
    DialogFooter,
    DialogClose,
    DialogOverlay,
    DialogPortal,
    Button,
    Badge,
    Input,
    Label,
} from '@/components/ui';
import { ComponentPreview } from '@/components/component-preview';
import { InstallationTabs } from '@/components/installation-tabs';

export default function DialogPage() {
    const [open, setOpen] = useState(false);

    return (
        <div>
            <Badge variant="primary" className="mb-4">
                Component
            </Badge>
            <h1>Dialog</h1>

            <p>
                A modal dialog with Neo-Brutalism styling. Built on Radix UI Dialog primitive with
                full accessibility support.
            </p>

            <h2>Preview</h2>
            <ComponentPreview>
                <Dialog>
                    <DialogTrigger asChild>
                        <Button variant="primary">Open Dialog</Button>
                    </DialogTrigger>
                    <DialogContent>
                        <DialogHeader>
                            <DialogTitle>Are you sure?</DialogTitle>
                            <DialogDescription>
                                This action cannot be undone. This will permanently delete your
                                account and remove your data from our servers.
                            </DialogDescription>
                        </DialogHeader>
                        <DialogFooter>
                            <Button variant="outline">Cancel</Button>
                            <Button variant="danger">Delete Account</Button>
                        </DialogFooter>
                    </DialogContent>
                </Dialog>
            </ComponentPreview>

            <h2>Installation</h2>
            <InstallationTabs componentName="dialog" />

            <h2>Usage</h2>
            <pre className="bg-gray-900 text-white p-4 border-3 border-black dark:border-white shadow-brutal overflow-x-auto text-sm">
                {`import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
  DialogClose,
  DialogPortal,
  DialogOverlay,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"

<Dialog>
  <DialogTrigger asChild>
    <Button>Open Dialog</Button>
  </DialogTrigger>
  <DialogContent>
    <DialogHeader>
      <DialogTitle>Dialog Title</DialogTitle>
      <DialogDescription>
        Dialog description text.
      </DialogDescription>
    </DialogHeader>
    <div>
      {/* Content */}
    </div>
    <DialogFooter>
      <Button variant="outline">Cancel</Button>
      <Button variant="primary">Confirm</Button>
    </DialogFooter>
  </DialogContent>
</Dialog>`}
            </pre>

            <h2>Examples</h2>

            <h3>Form Dialog</h3>
            <p>Dialog with form inputs for editing data.</p>
            <ComponentPreview>
                <Dialog>
                    <DialogTrigger asChild>
                        <Button>Edit Profile</Button>
                    </DialogTrigger>
                    <DialogContent>
                        <DialogHeader>
                            <DialogTitle>Edit Profile</DialogTitle>
                            <DialogDescription>
                                Make changes to your profile here.
                            </DialogDescription>
                        </DialogHeader>
                        <div className="space-y-4 py-4">
                            <div>
                                <Label htmlFor="name">Name</Label>
                                <Input id="name" placeholder="Your name" />
                            </div>
                            <div>
                                <Label htmlFor="email">Email</Label>
                                <Input id="email" type="email" placeholder="your@email.com" />
                            </div>
                        </div>
                        <DialogFooter>
                            <Button variant="outline">Cancel</Button>
                            <Button variant="primary">Save Changes</Button>
                        </DialogFooter>
                    </DialogContent>
                </Dialog>
            </ComponentPreview>

            <h3>Without Close Button</h3>
            <p>
                Use <code>showCloseButton=&#123;false&#125;</code> to hide the default close button.
            </p>
            <ComponentPreview>
                <Dialog>
                    <DialogTrigger asChild>
                        <Button variant="secondary">No Close Button</Button>
                    </DialogTrigger>
                    <DialogContent showCloseButton={false}>
                        <DialogHeader>
                            <DialogTitle>Custom Dialog</DialogTitle>
                            <DialogDescription>
                                This dialog has no default close button. Use the buttons below.
                            </DialogDescription>
                        </DialogHeader>
                        <DialogFooter>
                            <DialogClose asChild>
                                <Button variant="outline">Close</Button>
                            </DialogClose>
                            <DialogClose asChild>
                                <Button variant="primary">Done</Button>
                            </DialogClose>
                        </DialogFooter>
                    </DialogContent>
                </Dialog>
            </ComponentPreview>

            <h3>Controlled Dialog</h3>
            <p>
                Control the dialog state programmatically with <code>open</code> and{' '}
                <code>onOpenChange</code>.
            </p>
            <ComponentPreview>
                <div className="flex gap-2">
                    <Dialog open={open} onOpenChange={setOpen}>
                        <DialogTrigger asChild>
                            <Button variant="accent">Controlled Dialog</Button>
                        </DialogTrigger>
                        <DialogContent>
                            <DialogHeader>
                                <DialogTitle>Controlled State</DialogTitle>
                                <DialogDescription>
                                    Open state: {open ? 'true' : 'false'}
                                </DialogDescription>
                            </DialogHeader>
                            <DialogFooter>
                                <Button variant="outline" onClick={() => setOpen(false)}>
                                    Close Programmatically
                                </Button>
                            </DialogFooter>
                        </DialogContent>
                    </Dialog>
                    <Button variant="outline" onClick={() => setOpen(true)}>
                        Open from Outside
                    </Button>
                </div>
            </ComponentPreview>

            <h3>Custom Close Button</h3>
            <p>
                Use <code>DialogClose</code> to create custom close buttons anywhere in the dialog.
            </p>
            <ComponentPreview>
                <Dialog>
                    <DialogTrigger asChild>
                        <Button variant="danger">Delete Item</Button>
                    </DialogTrigger>
                    <DialogContent showCloseButton={false}>
                        <DialogHeader>
                            <DialogTitle>Delete Item</DialogTitle>
                            <DialogDescription>
                                Are you sure you want to delete this item? This action cannot be
                                undone.
                            </DialogDescription>
                        </DialogHeader>
                        <div className="py-4">
                            <div className="p-4 bg-red-50 dark:bg-red-950 border-3 border-red-500">
                                <p className="font-bold text-red-600 dark:text-red-400">
                                    ⚠️ Warning: This will permanently delete the item.
                                </p>
                            </div>
                        </div>
                        <DialogFooter>
                            <DialogClose asChild>
                                <Button variant="outline">Cancel</Button>
                            </DialogClose>
                            <DialogClose asChild>
                                <Button variant="danger">Yes, Delete</Button>
                            </DialogClose>
                        </DialogFooter>
                    </DialogContent>
                </Dialog>
            </ComponentPreview>

            <h2>API Reference</h2>

            <h3>Dialog</h3>
            <p>The root component that manages dialog state.</p>
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
                            <td className="p-3 border-b border-gray-200">
                                Controlled open state of the dialog
                            </td>
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
                            <td className="p-3 font-mono text-sm border-b border-gray-200">
                                defaultOpen
                            </td>
                            <td className="p-3 font-mono text-sm border-b border-gray-200">
                                boolean
                            </td>
                            <td className="p-3 font-mono text-sm border-b border-gray-200">
                                false
                            </td>
                            <td className="p-3 border-b border-gray-200">
                                Initial open state (uncontrolled)
                            </td>
                        </tr>
                        <tr>
                            <td className="p-3 font-mono text-sm">modal</td>
                            <td className="p-3 font-mono text-sm">boolean</td>
                            <td className="p-3 font-mono text-sm">true</td>
                            <td className="p-3">Whether to block interaction outside the dialog</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <h3>DialogContent</h3>
            <p>The container for dialog content with animations and overlay.</p>
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
                                showCloseButton
                            </td>
                            <td className="p-3 font-mono text-sm border-b border-gray-200">
                                boolean
                            </td>
                            <td className="p-3 font-mono text-sm border-b border-gray-200">true</td>
                            <td className="p-3 border-b border-gray-200">
                                Show the default close button in top-right corner
                            </td>
                        </tr>
                        <tr>
                            <td className="p-3 font-mono text-sm border-b border-gray-200">
                                className
                            </td>
                            <td className="p-3 font-mono text-sm border-b border-gray-200">
                                string
                            </td>
                            <td className="p-3 font-mono text-sm border-b border-gray-200">-</td>
                            <td className="p-3 border-b border-gray-200">
                                Additional CSS classes for the content container
                            </td>
                        </tr>
                        <tr>
                            <td className="p-3 font-mono text-sm">onEscapeKeyDown</td>
                            <td className="p-3 font-mono text-sm">(event) =&gt; void</td>
                            <td className="p-3 font-mono text-sm">-</td>
                            <td className="p-3">Handler called when Escape key is pressed</td>
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
                                Dialog
                            </td>
                            <td className="p-3 border-b border-gray-200">
                                Root component managing state
                            </td>
                        </tr>
                        <tr>
                            <td className="p-3 font-mono text-sm border-b border-gray-200">
                                DialogTrigger
                            </td>
                            <td className="p-3 border-b border-gray-200">
                                Button that opens the dialog
                            </td>
                        </tr>
                        <tr>
                            <td className="p-3 font-mono text-sm border-b border-gray-200">
                                DialogContent
                            </td>
                            <td className="p-3 border-b border-gray-200">
                                Main content container with overlay
                            </td>
                        </tr>
                        <tr>
                            <td className="p-3 font-mono text-sm border-b border-gray-200">
                                DialogHeader
                            </td>
                            <td className="p-3 border-b border-gray-200">
                                Header section with bottom border
                            </td>
                        </tr>
                        <tr>
                            <td className="p-3 font-mono text-sm border-b border-gray-200">
                                DialogFooter
                            </td>
                            <td className="p-3 border-b border-gray-200">
                                Footer section with top border
                            </td>
                        </tr>
                        <tr>
                            <td className="p-3 font-mono text-sm border-b border-gray-200">
                                DialogTitle
                            </td>
                            <td className="p-3 border-b border-gray-200">
                                Accessible title element
                            </td>
                        </tr>
                        <tr>
                            <td className="p-3 font-mono text-sm border-b border-gray-200">
                                DialogDescription
                            </td>
                            <td className="p-3 border-b border-gray-200">
                                Accessible description element
                            </td>
                        </tr>
                        <tr>
                            <td className="p-3 font-mono text-sm border-b border-gray-200">
                                DialogClose
                            </td>
                            <td className="p-3 border-b border-gray-200">
                                Primitive for custom close buttons
                            </td>
                        </tr>
                        <tr>
                            <td className="p-3 font-mono text-sm border-b border-gray-200">
                                DialogPortal
                            </td>
                            <td className="p-3 border-b border-gray-200">
                                Portals content to document body
                            </td>
                        </tr>
                        <tr>
                            <td className="p-3 font-mono text-sm">DialogOverlay</td>
                            <td className="p-3">Background overlay component</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <h2>Accessibility</h2>
            <ul>
                <li>Focus is trapped within the dialog when open</li>
                <li>
                    <kbd>Escape</kbd> key closes the dialog
                </li>
                <li>Clicking outside closes the dialog (when modal)</li>
                <li>Screen reader announcements for dialog content</li>
                <li>Returns focus to trigger element on close</li>
                <li>
                    Uses <code>role="dialog"</code> and <code>aria-modal</code>
                </li>
            </ul>
        </div>
    );
}
