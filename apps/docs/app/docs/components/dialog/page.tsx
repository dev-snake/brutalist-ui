'use client';

import {
    Dialog,
    DialogTrigger,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogDescription,
    DialogFooter,
    Button,
    Badge,
    Input,
    Label,
} from 'brutalist-ui';
import { ComponentPreview } from '@/components/component-preview';

export default function DialogPage() {
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
            <pre className="bg-gray-900 text-white p-4 border-3 border-black dark:border-white shadow-brutal overflow-x-auto">
                {`import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "brutalist-ui";`}
            </pre>

            <h2>Usage</h2>
            <pre className="bg-gray-900 text-white p-4 border-3 border-black dark:border-white shadow-brutal overflow-x-auto text-sm">
                {`<Dialog>
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

            <h2>Form Example</h2>
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

            <h2>Accessibility</h2>
            <ul>
                <li>Focus is trapped within the dialog when open</li>
                <li>Escape key closes the dialog</li>
                <li>Clicking outside closes the dialog</li>
                <li>Screen reader announcements for dialog content</li>
                <li>Returns focus to trigger element on close</li>
            </ul>
        </div>
    );
}
