'use client';

import { Toast, ToastContainer, Button, Badge, useToast } from '@/components/ui';
import { ComponentPreview } from '@/components/component-preview';
import { InstallationTabs } from '@/components/installation-tabs';
import { Rocket } from 'lucide-react';
import * as React from 'react';

export default function ToastPage() {
    const { toasts, addToast, removeToast, success, error, warning, info, clearToasts } =
        useToast();

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
            <InstallationTabs componentName="toast" />

            <h2>Usage</h2>
            <pre className="bg-gray-900 text-white p-4 border-3 border-black dark:border-white shadow-brutal overflow-x-auto text-sm">
                {`import { Toast, ToastContainer, useToast } from "@/components/ui/toast"

function MyComponent() {
  const { toasts, addToast, removeToast, success, error } = useToast();

  return (
    <>
      <Button onClick={() => success('Saved!', 'Changes saved successfully.')}>
        Save
      </Button>
      
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
      </ToastContainer>
    </>
  );
}`}
            </pre>

            <h2>Examples</h2>

            <h3>All Variants</h3>
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

            <h3>Different Sizes</h3>
            <p>
                Use <code>size</code> prop to control toast width.
            </p>
            <div className="space-y-4 my-4">
                <Toast
                    variant="success"
                    size="sm"
                    title="Small Toast"
                    description="Compact notification."
                />
                <Toast
                    variant="success"
                    size="default"
                    title="Default Toast"
                    description="Standard width notification."
                />
                <Toast
                    variant="success"
                    size="lg"
                    title="Large Toast"
                    description="Wider notification for more content."
                />
            </div>

            <h3>Custom Icon</h3>
            <p>
                Use <code>icon</code> prop to provide a custom icon.
            </p>
            <div className="space-y-4 my-4">
                <Toast
                    variant="default"
                    title="Custom Icon"
                    description="This toast has a custom rocket icon."
                    icon={<Rocket className="h-6 w-6 stroke-2" />}
                />
            </div>

            <h3>With Action Button</h3>
            <p>
                Use <code>action</code> prop to add action buttons.
            </p>
            <div className="space-y-4 my-4">
                <Toast
                    variant="default"
                    title="New Update Available"
                    description="A new version is ready to install."
                    action={
                        <Button size="sm" variant="primary">
                            Update Now
                        </Button>
                    }
                />
                <Toast
                    variant="error"
                    title="Connection Lost"
                    description="Unable to connect to the server."
                    action={
                        <div className="flex gap-2">
                            <Button size="sm" variant="outline">
                                Dismiss
                            </Button>
                            <Button size="sm" variant="danger">
                                Retry
                            </Button>
                        </div>
                    }
                />
            </div>

            <h3>Interactive Example</h3>
            <p>Try different toast types and positions.</p>
            <ComponentPreview>
                <div className="flex flex-wrap gap-2">
                    <Button
                        variant="success"
                        size="sm"
                        onClick={() => success('Success!', 'Your changes have been saved.')}
                    >
                        Show Success
                    </Button>
                    <Button
                        variant="danger"
                        size="sm"
                        onClick={() => error('Error!', 'Something went wrong.')}
                    >
                        Show Error
                    </Button>
                    <Button
                        variant="accent"
                        size="sm"
                        onClick={() => warning('Warning', 'Please check your input.')}
                    >
                        Show Warning
                    </Button>
                    <Button
                        variant="secondary"
                        size="sm"
                        onClick={() => info('Info', 'Here is some information.')}
                    >
                        Show Info
                    </Button>
                    <Button
                        variant="outline"
                        size="sm"
                        onClick={() =>
                            addToast({
                                variant: 'default',
                                title: 'With Action',
                                description: 'This toast has an action button.',
                                action: (
                                    <Button size="sm" variant="primary">
                                        Take Action
                                    </Button>
                                ),
                            })
                        }
                    >
                        With Action
                    </Button>
                    {toasts.length > 0 && (
                        <Button variant="outline" size="sm" onClick={clearToasts}>
                            Clear All
                        </Button>
                    )}
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
                        action={toast.action}
                        onClose={() => removeToast(toast.id)}
                    />
                ))}
            </ToastContainer>

            <h2>API Reference</h2>

            <h3>Toast</h3>
            <p>Individual toast notification component.</p>
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
                                variant
                            </td>
                            <td className="p-3 font-mono text-sm border-b border-gray-200">
                                "default" | "success" | "error" | "warning" | "info"
                            </td>
                            <td className="p-3 font-mono text-sm border-b border-gray-200">
                                "default"
                            </td>
                            <td className="p-3 border-b border-gray-200">Toast style variant</td>
                        </tr>
                        <tr>
                            <td className="p-3 font-mono text-sm border-b border-gray-200">size</td>
                            <td className="p-3 font-mono text-sm border-b border-gray-200">
                                "sm" | "default" | "lg"
                            </td>
                            <td className="p-3 font-mono text-sm border-b border-gray-200">
                                "default"
                            </td>
                            <td className="p-3 border-b border-gray-200">Toast width</td>
                        </tr>
                        <tr>
                            <td className="p-3 font-mono text-sm border-b border-gray-200">
                                title
                            </td>
                            <td className="p-3 font-mono text-sm border-b border-gray-200">
                                string
                            </td>
                            <td className="p-3 font-mono text-sm border-b border-gray-200">-</td>
                            <td className="p-3 border-b border-gray-200">Toast title text</td>
                        </tr>
                        <tr>
                            <td className="p-3 font-mono text-sm border-b border-gray-200">
                                description
                            </td>
                            <td className="p-3 font-mono text-sm border-b border-gray-200">
                                string
                            </td>
                            <td className="p-3 font-mono text-sm border-b border-gray-200">-</td>
                            <td className="p-3 border-b border-gray-200">Toast description text</td>
                        </tr>
                        <tr>
                            <td className="p-3 font-mono text-sm border-b border-gray-200">icon</td>
                            <td className="p-3 font-mono text-sm border-b border-gray-200">
                                ReactNode
                            </td>
                            <td className="p-3 font-mono text-sm border-b border-gray-200">
                                (auto)
                            </td>
                            <td className="p-3 border-b border-gray-200">
                                Custom icon (defaults based on variant)
                            </td>
                        </tr>
                        <tr>
                            <td className="p-3 font-mono text-sm border-b border-gray-200">
                                action
                            </td>
                            <td className="p-3 font-mono text-sm border-b border-gray-200">
                                ReactNode
                            </td>
                            <td className="p-3 font-mono text-sm border-b border-gray-200">-</td>
                            <td className="p-3 border-b border-gray-200">Action button(s)</td>
                        </tr>
                        <tr>
                            <td className="p-3 font-mono text-sm border-b border-gray-200">
                                duration
                            </td>
                            <td className="p-3 font-mono text-sm border-b border-gray-200">
                                number
                            </td>
                            <td className="p-3 font-mono text-sm border-b border-gray-200">5000</td>
                            <td className="p-3 border-b border-gray-200">
                                Auto-dismiss time in ms (0 to disable)
                            </td>
                        </tr>
                        <tr>
                            <td className="p-3 font-mono text-sm">onClose</td>
                            <td className="p-3 font-mono text-sm">() =&gt; void</td>
                            <td className="p-3 font-mono text-sm">-</td>
                            <td className="p-3">
                                Callback when toast closes (enables close button)
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <h3>ToastContainer</h3>
            <p>Container for positioning toasts.</p>
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
                            <td className="p-3 font-mono text-sm">position</td>
                            <td className="p-3 font-mono text-sm">
                                "top-left" | "top-center" | "top-right" | "bottom-left" |
                                "bottom-center" | "bottom-right"
                            </td>
                            <td className="p-3 font-mono text-sm">"bottom-right"</td>
                            <td className="p-3">Position of toast container</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <h3>useToast Hook</h3>
            <p>Hook for managing toast state.</p>
            <div className="overflow-x-auto">
                <table className="w-full border-3 border-black dark:border-white">
                    <thead className="bg-[#4ECDC4]">
                        <tr>
                            <th className="text-left p-3 font-black border-b-3 border-black">
                                Return
                            </th>
                            <th className="text-left p-3 font-black border-b-3 border-black">
                                Type
                            </th>
                            <th className="text-left p-3 font-black border-b-3 border-black">
                                Description
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="p-3 font-mono text-sm border-b border-gray-200">
                                toasts
                            </td>
                            <td className="p-3 font-mono text-sm border-b border-gray-200">
                                ToastItem[]
                            </td>
                            <td className="p-3 border-b border-gray-200">Array of active toasts</td>
                        </tr>
                        <tr>
                            <td className="p-3 font-mono text-sm border-b border-gray-200">
                                addToast
                            </td>
                            <td className="p-3 font-mono text-sm border-b border-gray-200">
                                (toast) =&gt; string
                            </td>
                            <td className="p-3 border-b border-gray-200">Add toast, returns ID</td>
                        </tr>
                        <tr>
                            <td className="p-3 font-mono text-sm border-b border-gray-200">
                                removeToast
                            </td>
                            <td className="p-3 font-mono text-sm border-b border-gray-200">
                                (id: string) =&gt; void
                            </td>
                            <td className="p-3 border-b border-gray-200">Remove toast by ID</td>
                        </tr>
                        <tr>
                            <td className="p-3 font-mono text-sm border-b border-gray-200">
                                clearToasts
                            </td>
                            <td className="p-3 font-mono text-sm border-b border-gray-200">
                                () =&gt; void
                            </td>
                            <td className="p-3 border-b border-gray-200">Remove all toasts</td>
                        </tr>
                        <tr>
                            <td className="p-3 font-mono text-sm border-b border-gray-200">
                                success
                            </td>
                            <td className="p-3 font-mono text-sm border-b border-gray-200">
                                (title, desc?) =&gt; string
                            </td>
                            <td className="p-3 border-b border-gray-200">
                                Shorthand for success toast
                            </td>
                        </tr>
                        <tr>
                            <td className="p-3 font-mono text-sm border-b border-gray-200">
                                error
                            </td>
                            <td className="p-3 font-mono text-sm border-b border-gray-200">
                                (title, desc?) =&gt; string
                            </td>
                            <td className="p-3 border-b border-gray-200">
                                Shorthand for error toast
                            </td>
                        </tr>
                        <tr>
                            <td className="p-3 font-mono text-sm border-b border-gray-200">
                                warning
                            </td>
                            <td className="p-3 font-mono text-sm border-b border-gray-200">
                                (title, desc?) =&gt; string
                            </td>
                            <td className="p-3 border-b border-gray-200">
                                Shorthand for warning toast
                            </td>
                        </tr>
                        <tr>
                            <td className="p-3 font-mono text-sm">info</td>
                            <td className="p-3 font-mono text-sm">(title, desc?) =&gt; string</td>
                            <td className="p-3">Shorthand for info toast</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <h3>All Exports</h3>
            <div className="overflow-x-auto">
                <table className="w-full border-3 border-black dark:border-white">
                    <thead className="bg-[#FF6B6B]">
                        <tr>
                            <th className="text-left p-3 font-black border-b-3 border-black text-black">
                                Export
                            </th>
                            <th className="text-left p-3 font-black border-b-3 border-black text-black">
                                Type
                            </th>
                            <th className="text-left p-3 font-black border-b-3 border-black text-black">
                                Description
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="p-3 font-mono text-sm border-b border-gray-200">
                                Toast
                            </td>
                            <td className="p-3 border-b border-gray-200">Component</td>
                            <td className="p-3 border-b border-gray-200">
                                Individual toast notification
                            </td>
                        </tr>
                        <tr>
                            <td className="p-3 font-mono text-sm border-b border-gray-200">
                                ToastContainer
                            </td>
                            <td className="p-3 border-b border-gray-200">Component</td>
                            <td className="p-3 border-b border-gray-200">Positioning container</td>
                        </tr>
                        <tr>
                            <td className="p-3 font-mono text-sm border-b border-gray-200">
                                useToast
                            </td>
                            <td className="p-3 border-b border-gray-200">Hook</td>
                            <td className="p-3 border-b border-gray-200">Toast state management</td>
                        </tr>
                        <tr>
                            <td className="p-3 font-mono text-sm border-b border-gray-200">
                                toastVariants
                            </td>
                            <td className="p-3 border-b border-gray-200">CVA Function</td>
                            <td className="p-3 border-b border-gray-200">
                                Style variants for customization
                            </td>
                        </tr>
                        <tr>
                            <td className="p-3 font-mono text-sm border-b border-gray-200">
                                ToastProps
                            </td>
                            <td className="p-3 border-b border-gray-200">Type</td>
                            <td className="p-3 border-b border-gray-200">Toast component props</td>
                        </tr>
                        <tr>
                            <td className="p-3 font-mono text-sm border-b border-gray-200">
                                ToastContainerProps
                            </td>
                            <td className="p-3 border-b border-gray-200">Type</td>
                            <td className="p-3 border-b border-gray-200">Container props</td>
                        </tr>
                        <tr>
                            <td className="p-3 font-mono text-sm">ToastItem</td>
                            <td className="p-3">Type</td>
                            <td className="p-3">Toast item type for hook</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
}
