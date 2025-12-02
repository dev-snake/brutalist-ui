'use client';

import * as React from 'react';
import { cn } from 'brutalist-ui';

interface InstallationTabsProps {
    componentName: string;
    dependencies?: string[];
    imports?: string[];
}

type TabType = 'cli' | 'manual';
type PackageManager = 'pnpm' | 'npm' | 'yarn' | 'bun';

// Component dependencies mapping
const componentDependencies: Record<string, string[]> = {
    button: ['@radix-ui/react-slot', 'class-variance-authority'],
    card: ['class-variance-authority'],
    input: ['class-variance-authority'],
    textarea: [],
    label: ['class-variance-authority'],
    badge: ['class-variance-authority'],
    dialog: ['@radix-ui/react-dialog'],
    popover: ['@radix-ui/react-popover'],
    tooltip: ['@radix-ui/react-tooltip'],
    'dropdown-menu': ['@radix-ui/react-dropdown-menu'],
    select: ['@radix-ui/react-select'],
    tabs: ['@radix-ui/react-tabs'],
    table: [],
    alert: ['class-variance-authority'],
    avatar: ['class-variance-authority'],
    separator: ['@radix-ui/react-separator'],
    switch: ['@radix-ui/react-switch'],
    checkbox: ['@radix-ui/react-checkbox'],
    pagination: [],
    spinner: [],
    toast: [],
    skeleton: [],
    calendar: ['react-day-picker'],
    'context-menu': ['@radix-ui/react-context-menu'],
    command: ['cmdk'],
    combobox: ['cmdk', '@radix-ui/react-popover'],
    'scroll-area': ['@radix-ui/react-scroll-area'],
};

// Component import mappings (what gets exported from each component)
const componentImports: Record<string, string[]> = {
    button: ['Button', 'buttonVariants'],
    card: ['Card', 'CardHeader', 'CardTitle', 'CardDescription', 'CardContent', 'CardFooter'],
    input: ['Input'],
    textarea: ['Textarea'],
    label: ['Label'],
    badge: ['Badge', 'badgeVariants'],
    dialog: [
        'Dialog',
        'DialogTrigger',
        'DialogContent',
        'DialogHeader',
        'DialogFooter',
        'DialogTitle',
        'DialogDescription',
        'DialogClose',
    ],
    popover: ['Popover', 'PopoverTrigger', 'PopoverContent'],
    tooltip: ['Tooltip', 'TooltipTrigger', 'TooltipContent', 'TooltipProvider'],
    'dropdown-menu': [
        'DropdownMenu',
        'DropdownMenuTrigger',
        'DropdownMenuContent',
        'DropdownMenuItem',
        'DropdownMenuCheckboxItem',
        'DropdownMenuRadioItem',
        'DropdownMenuLabel',
        'DropdownMenuSeparator',
        'DropdownMenuShortcut',
        'DropdownMenuGroup',
        'DropdownMenuSub',
        'DropdownMenuSubContent',
        'DropdownMenuSubTrigger',
        'DropdownMenuRadioGroup',
    ],
    select: [
        'Select',
        'SelectGroup',
        'SelectValue',
        'SelectTrigger',
        'SelectContent',
        'SelectLabel',
        'SelectItem',
        'SelectSeparator',
    ],
    tabs: ['Tabs', 'TabsList', 'TabsTrigger', 'TabsContent'],
    table: [
        'Table',
        'TableHeader',
        'TableBody',
        'TableFooter',
        'TableHead',
        'TableRow',
        'TableCell',
        'TableCaption',
    ],
    alert: ['Alert', 'AlertTitle', 'AlertDescription'],
    avatar: ['Avatar', 'AvatarImage', 'AvatarFallback'],
    separator: ['Separator'],
    switch: ['Switch'],
    checkbox: ['Checkbox'],
    pagination: [
        'Pagination',
        'PaginationContent',
        'PaginationEllipsis',
        'PaginationItem',
        'PaginationLink',
        'PaginationNext',
        'PaginationPrevious',
    ],
    spinner: ['Spinner'],
    toast: [
        'Toast',
        'ToastAction',
        'ToastClose',
        'ToastDescription',
        'ToastTitle',
        'ToastProvider',
        'ToastViewport',
    ],
    skeleton: ['Skeleton'],
    calendar: ['Calendar'],
    'context-menu': [
        'ContextMenu',
        'ContextMenuTrigger',
        'ContextMenuContent',
        'ContextMenuItem',
        'ContextMenuCheckboxItem',
        'ContextMenuRadioItem',
        'ContextMenuLabel',
        'ContextMenuSeparator',
        'ContextMenuShortcut',
        'ContextMenuGroup',
        'ContextMenuSub',
        'ContextMenuSubContent',
        'ContextMenuSubTrigger',
        'ContextMenuRadioGroup',
    ],
    command: [
        'Command',
        'CommandDialog',
        'CommandInput',
        'CommandList',
        'CommandEmpty',
        'CommandGroup',
        'CommandItem',
        'CommandShortcut',
        'CommandSeparator',
    ],
    combobox: ['Combobox', 'ComboboxMulti'],
    'scroll-area': ['ScrollArea', 'ScrollBar'],
};

function CopyButton({ text }: { text: string }) {
    const [copied, setCopied] = React.useState(false);

    const copyToClipboard = async () => {
        try {
            await navigator.clipboard.writeText(text);
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        } catch (err) {
            console.error('Failed to copy:', err);
        }
    };

    return (
        <button
            onClick={copyToClipboard}
            className={cn(
                'absolute top-2 right-2 p-1.5 border-2 border-white font-bold text-xs transition-all duration-200',
                'bg-gray-800 hover:bg-[#4ECDC4] hover:border-black hover:text-black',
                copied && 'bg-[#4ECDC4] border-black text-black'
            )}
            title={copied ? 'Copied!' : 'Copy to clipboard'}
        >
            {copied ? (
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                >
                    <polyline points="20 6 9 17 4 12" />
                </svg>
            ) : (
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                >
                    <rect width="14" height="14" x="8" y="8" rx="2" ry="2" />
                    <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2" />
                </svg>
            )}
        </button>
    );
}

export function InstallationTabs({
    componentName,
    dependencies: customDependencies,
    imports: customImports,
}: InstallationTabsProps) {
    const [activeTab, setActiveTab] = React.useState<TabType>('cli');
    const [packageManager, setPackageManager] = React.useState<PackageManager>('pnpm');

    const cliCommands: Record<PackageManager, string> = {
        pnpm: `pnpm dlx brutalist-ui-cli add ${componentName}`,
        npm: `npx brutalist-ui-cli add ${componentName}`,
        yarn: `yarn dlx brutalist-ui-cli add ${componentName}`,
        bun: `bunx brutalist-ui-cli add ${componentName}`,
    };

    // Get dependencies for manual install
    const deps = customDependencies || componentDependencies[componentName] || [];
    const allDeps = ['clsx', 'tailwind-merge', ...deps];

    const dependencyCommands: Record<PackageManager, string> = {
        pnpm: `pnpm add ${allDeps.join(' ')}`,
        npm: `npm install ${allDeps.join(' ')}`,
        yarn: `yarn add ${allDeps.join(' ')}`,
        bun: `bun add ${allDeps.join(' ')}`,
    };

    // Get imports for this component
    const imports = customImports ||
        componentImports[componentName] || [
            componentName
                .split('-')
                .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
                .join(''),
        ];

    const importStatement =
        imports.length > 3
            ? `import {\n  ${imports.join(',\n  ')},\n} from "@/components/ui/${componentName}"`
            : `import { ${imports.join(', ')} } from "@/components/ui/${componentName}"`;

    return (
        <div className="space-y-4">
            {/* Tab Buttons */}
            <div className="flex border-3 border-black dark:border-white w-fit">
                <button
                    onClick={() => setActiveTab('cli')}
                    className={cn(
                        'px-4 py-2 font-bold transition-colors',
                        activeTab === 'cli'
                            ? 'bg-[#FF6B6B] text-black'
                            : 'bg-white dark:bg-gray-900 hover:bg-gray-100 dark:hover:bg-gray-800'
                    )}
                >
                    CLI
                </button>
                <button
                    onClick={() => setActiveTab('manual')}
                    className={cn(
                        'px-4 py-2 font-bold transition-colors border-l-3 border-black dark:border-white',
                        activeTab === 'manual'
                            ? 'bg-[#FF6B6B] text-black'
                            : 'bg-white dark:bg-gray-900 hover:bg-gray-100 dark:hover:bg-gray-800'
                    )}
                >
                    Manual
                </button>
            </div>

            {/* Package Manager Selector */}
            <div className="flex border-3 border-black dark:border-white w-fit">
                {(['pnpm', 'npm', 'yarn', 'bun'] as PackageManager[]).map((pm, index) => (
                    <button
                        key={pm}
                        onClick={() => setPackageManager(pm)}
                        className={cn(
                            'px-3 py-1.5 text-sm font-bold transition-colors',
                            index > 0 && 'border-l-3 border-black dark:border-white',
                            packageManager === pm
                                ? 'bg-[#4ECDC4] text-black'
                                : 'bg-white dark:bg-gray-900 hover:bg-gray-100 dark:hover:bg-gray-800'
                        )}
                    >
                        {pm}
                    </button>
                ))}
            </div>

            {/* Content */}
            {activeTab === 'cli' ? (
                <div className="space-y-4">
                    <div className="relative">
                        <CopyButton text={cliCommands[packageManager]} />
                        <pre className="bg-gray-900 text-gray-100 p-4 pr-12 border-3 border-black dark:border-white font-mono text-sm overflow-x-auto">
                            <code>{cliCommands[packageManager]}</code>
                        </pre>
                    </div>
                </div>
            ) : (
                <div className="space-y-4">
                    <div>
                        <p className="text-sm font-bold mb-2 text-gray-600 dark:text-gray-400">
                            1. Install dependencies:
                        </p>
                        <div className="relative">
                            <CopyButton text={dependencyCommands[packageManager]} />
                            <pre className="bg-gray-900 text-gray-100 p-4 pr-12 border-3 border-black dark:border-white font-mono text-sm overflow-x-auto">
                                <code>{dependencyCommands[packageManager]}</code>
                            </pre>
                        </div>
                    </div>

                    <div>
                        <p className="text-sm font-bold mb-2 text-gray-600 dark:text-gray-400">
                            2. Copy the component code from GitHub:
                        </p>
                        <a
                            href={`https://github.com/dev-snake/brutalist-ui/blob/main/packages/ui/src/components/${componentName}.tsx`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 px-4 py-2 font-bold border-3 border-black dark:border-white bg-white dark:bg-gray-900 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                        >
                            <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                            </svg>
                            View {componentName}.tsx on GitHub
                        </a>
                    </div>

                    <div>
                        <p className="text-sm font-bold mb-2 text-gray-600 dark:text-gray-400">
                            3. Save to{' '}
                            <code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">
                                components/ui/{componentName}.tsx
                            </code>
                        </p>
                    </div>

                    <div>
                        <p className="text-sm font-bold mb-2 text-gray-600 dark:text-gray-400">
                            4. Import and use:
                        </p>
                        <div className="relative">
                            <CopyButton text={importStatement} />
                            <pre className="bg-gray-900 text-gray-100 p-4 pr-12 border-3 border-black dark:border-white font-mono text-sm overflow-x-auto">
                                <code>{importStatement}</code>
                            </pre>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
