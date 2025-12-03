'use client';

import {
    Table,
    TableHeader,
    TableBody,
    TableHead,
    TableRow,
    TableCell,
    Badge,
} from '@/components/ui';
import { ComponentPreview } from '@/components/component-preview';
import { InstallationTabs } from '@/components/installation-tabs';

const invoices = [
    { invoice: 'INV001', status: 'Paid', method: 'Credit Card', amount: '$250.00' },
    { invoice: 'INV002', status: 'Pending', method: 'PayPal', amount: '$150.00' },
    { invoice: 'INV003', status: 'Unpaid', method: 'Bank Transfer', amount: '$350.00' },
    { invoice: 'INV004', status: 'Paid', method: 'Credit Card', amount: '$450.00' },
];

export default function TablePage() {
    return (
        <div>
            <Badge variant="primary" className="mb-4">
                Component
            </Badge>
            <h1>Table</h1>

            <p>A Neo-Brutalism styled table component for displaying tabular data.</p>

            <h2>Preview</h2>
            <ComponentPreview className="p-0">
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead>Invoice</TableHead>
                            <TableHead>Status</TableHead>
                            <TableHead>Method</TableHead>
                            <TableHead>Amount</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {invoices.map((invoice) => (
                            <TableRow key={invoice.invoice}>
                                <TableCell className="font-bold">{invoice.invoice}</TableCell>
                                <TableCell>
                                    <Badge
                                        variant={
                                            invoice.status === 'Paid'
                                                ? 'success'
                                                : invoice.status === 'Pending'
                                                ? 'accent'
                                                : 'danger'
                                        }
                                        size="sm"
                                    >
                                        {invoice.status}
                                    </Badge>
                                </TableCell>
                                <TableCell>{invoice.method}</TableCell>
                                <TableCell>{invoice.amount}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </ComponentPreview>

            <h2>Installation</h2>
            <InstallationTabs componentName="table" />

            <h2>Usage</h2>
            <pre className="bg-gray-900 text-white p-4 border-3 border-black dark:border-white shadow-brutal overflow-x-auto text-sm">
                {`import {
  Table,
  TableHeader,
  TableBody,
  TableHead,
  TableRow,
  TableCell,
} from "@/components/ui/table"

<Table>
  <TableHeader>
    <TableRow>
      <TableHead>Name</TableHead>
      <TableHead>Email</TableHead>
    </TableRow>
  </TableHeader>
  <TableBody>
    <TableRow>
      <TableCell>John Doe</TableCell>
      <TableCell>john@example.com</TableCell>
    </TableRow>
  </TableBody>
</Table>`}
            </pre>
        </div>
    );
}
