'use client';

import { Toast, ToastContainer, Button, Badge, useToast } from 'brutalist-ui';
import { ComponentPreview } from '@/components/component-preview';
import * as React from 'react';

export default function ToastPage() {
    const { toasts, addToast, removeToast } = useToast();

    return (
        <div>
            <Badge variant="primary" className="mb-4">
                Component
            </Badge>
            <h1>Toast</h1>

            <p>Toast notification component with Neo-Brutalism styling.</p>

            <h2>Preview</h2>
            <ComponentPreview className="flex-col items-stretch gap-4">
                <Toast
                    variant="default"
                    title="Default Toast"
                    description="This is a default toast message."
                />
            </ComponentPreview>

            <h2>Installation</h2>
            <pre className="bg-gray-900 text-white p-4 border-3 border-black dark:border-white shadow-brutal overflow-x-auto">
                {`import { Toast, ToastContainer, useToast } from "brutalist-ui";`}
            </pre>

            <h2>Variants</h2>
            <div className="space-y-4 my-4">
                <Toast
                    variant="default"
                    title="Default"
                    description="This is a default notification."
                />
                <Toast
                    variant="success"
                    title="Success!"
                    description="Your action was completed successfully."
                />
                <Toast
                    variant="error"
                    title="Error"
                    description="Something went wrong. Please try again."
                />
                <Toast
                    variant="warning"
                    title="Warning"
                    description="Please review before proceeding."
                />
                <Toast variant="info" title="Info" description="Here's some helpful information." />
            </div>

            <h2>Interactive Example</h2>
            <ComponentPreview>
                <div className="flex flex-wrap gap-2">
                    <Button
                        variant="success"
                        size="sm"
                        onClick={() =>
                            addToast({
                                variant: 'success',
                                title: 'Success!',
                                description: 'Your changes have been saved.',
                            })
                        }
                    >
                        Show Success
                    </Button>
                    <Button
                        variant="danger"
                        size="sm"
                        onClick={() =>
                            addToast({
                                variant: 'error',
                                title: 'Error!',
                                description: 'Something went wrong.',
                            })
                        }
                    >
                        Show Error
                    </Button>
                    <Button
                        variant="accent"
                        size="sm"
                        onClick={() =>
                            addToast({
                                variant: 'warning',
                                title: 'Warning',
                                description: 'Please check your input.',
                            })
                        }
                    >
                        Show Warning
                    </Button>
                </div>
            </ComponentPreview>

            <ToastContainer position="bottom-right">
                {toasts.map((toast) => (
                    <Toast
                        key={toast.id}
                        variant={toast.variant}
                        title={toast.title}
                        description={toast.description}
                        duration={toast.duration}
                        onClose={() => removeToast(toast.id)}
                    />
                ))}
            </ToastContainer>

            <h2>Usage with Hook</h2>
            <pre className="bg-gray-900 text-white p-4 border-3 border-black dark:border-white shadow-brutal overflow-x-auto text-sm">
                {`const { toasts, addToast, removeToast } = useToast();

// Add a toast
addToast({
  variant: 'success',
  title: 'Success!',
  description: 'Your action was completed.',
});

// Render toasts
<ToastContainer position="bottom-right">
  {toasts.map((toast) => (
    <Toast
      key={toast.id}
      variant={toast.variant}
      title={toast.title}
      description={toast.description}
      onClose={() => removeToast(toast.id)}
    />
  ))}
</ToastContainer>`}
            </pre>

            <h2>Props</h2>
            <div className="overflow-x-auto">
                <table className="w-full border-3 border-black dark:border-white">
                    <thead className="bg-[#FFE66D]">
                        <tr>
                            <th className="px-4 py-2 text-left border-r-3 border-b-3 border-black font-black text-black">
                                Prop
                            </th>
                            <th className="px-4 py-2 text-left border-r-3 border-b-3 border-black font-black text-black">
                                Type
                            </th>
                            <th className="px-4 py-2 text-left border-b-3 border-black font-black text-black">
                                Default
                            </th>
                        </tr>
                    </thead>
                    <tbody className="bg-white dark:bg-gray-900">
                        <tr className="border-b-3 border-black dark:border-white">
                            <td className="px-4 py-2 border-r-3 border-black dark:border-white font-medium">
                                variant
                            </td>
                            <td className="px-4 py-2 border-r-3 border-black dark:border-white text-sm">
                                "default" | "success" | "error" | "warning" | "info"
                            </td>
                            <td className="px-4 py-2 text-sm">"default"</td>
                        </tr>
                        <tr className="border-b-3 border-black dark:border-white">
                            <td className="px-4 py-2 border-r-3 border-black dark:border-white font-medium">
                                title
                            </td>
                            <td className="px-4 py-2 border-r-3 border-black dark:border-white text-sm">
                                string
                            </td>
                            <td className="px-4 py-2 text-sm">-</td>
                        </tr>
                        <tr className="border-b-3 border-black dark:border-white">
                            <td className="px-4 py-2 border-r-3 border-black dark:border-white font-medium">
                                description
                            </td>
                            <td className="px-4 py-2 border-r-3 border-black dark:border-white text-sm">
                                string
                            </td>
                            <td className="px-4 py-2 text-sm">-</td>
                        </tr>
                        <tr className="border-b-3 border-black dark:border-white">
                            <td className="px-4 py-2 border-r-3 border-black dark:border-white font-medium">
                                duration
                            </td>
                            <td className="px-4 py-2 border-r-3 border-black dark:border-white text-sm">
                                number
                            </td>
                            <td className="px-4 py-2 text-sm">5000</td>
                        </tr>
                        <tr>
                            <td className="px-4 py-2 border-r-3 border-black dark:border-white font-medium">
                                onClose
                            </td>
                            <td className="px-4 py-2 border-r-3 border-black dark:border-white text-sm">
                                () =&gt; void
                            </td>
                            <td className="px-4 py-2 text-sm">-</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
}
