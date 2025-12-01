'use client';

import { Alert, AlertTitle, AlertDescription, Badge } from 'brutalist-ui';
import { ComponentPreview } from '@/components/component-preview';
import { AlertCircle, CheckCircle, Info, AlertTriangle } from 'lucide-react';

export default function AlertPage() {
    return (
        <div>
            <Badge variant="primary" className="mb-4">
                Component
            </Badge>
            <h1>Alert</h1>

            <p>Displays a callout for user attention with Neo-Brutalism styling.</p>

            <h2>Preview</h2>
            <ComponentPreview className="flex-col items-stretch gap-4">
                <Alert>
                    <AlertTitle>Heads up!</AlertTitle>
                    <AlertDescription>This is a default alert message.</AlertDescription>
                </Alert>
            </ComponentPreview>

            <h2>Variants</h2>
            <div className="space-y-4 my-4">
                <Alert variant="default">
                    <Info className="h-5 w-5" />
                    <AlertTitle>Default</AlertTitle>
                    <AlertDescription>A default informational alert.</AlertDescription>
                </Alert>

                <Alert variant="success">
                    <CheckCircle className="h-5 w-5" />
                    <AlertTitle>Success!</AlertTitle>
                    <AlertDescription>Your action was completed successfully.</AlertDescription>
                </Alert>

                <Alert variant="warning">
                    <AlertTriangle className="h-5 w-5" />
                    <AlertTitle>Warning</AlertTitle>
                    <AlertDescription>Please review before proceeding.</AlertDescription>
                </Alert>

                <Alert variant="danger">
                    <AlertCircle className="h-5 w-5" />
                    <AlertTitle>Error</AlertTitle>
                    <AlertDescription>Something went wrong. Please try again.</AlertDescription>
                </Alert>

                <Alert variant="info">
                    <Info className="h-5 w-5" />
                    <AlertTitle>Info</AlertTitle>
                    <AlertDescription>Here&apos;s some helpful information.</AlertDescription>
                </Alert>
            </div>

            <h2>Installation</h2>
            <pre className="bg-gray-900 text-white p-4 border-3 border-black dark:border-white shadow-brutal overflow-x-auto">
                {`import {
  Alert,
  AlertTitle,
  AlertDescription,
} from "brutalist-ui";`}
            </pre>

            <h2>Usage</h2>
            <pre className="bg-gray-900 text-white p-4 border-3 border-black dark:border-white shadow-brutal overflow-x-auto text-sm">
                {`<Alert variant="success">
  <CheckCircle className="h-5 w-5" />
  <AlertTitle>Success!</AlertTitle>
  <AlertDescription>
    Your action was completed.
  </AlertDescription>
</Alert>`}
            </pre>
        </div>
    );
}
