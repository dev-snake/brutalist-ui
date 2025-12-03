'use client';

import { Badge } from '@/components/ui';
import Link from 'next/link';
import { useState } from 'react';

const packageManagers = ['pnpm', 'npm', 'yarn', 'bun'] as const;
type PackageManager = (typeof packageManagers)[number];

const commands: Record<PackageManager, { init: string; add: string; addAll: string }> = {
    pnpm: {
        init: 'pnpm dlx brutalist@latest init',
        add: 'pnpm dlx brutalist@latest add [component]',
        addAll: 'pnpm dlx brutalist@latest add --all',
    },
    npm: {
        init: 'npx brutalist@latest init',
        add: 'npx brutalist@latest add [component]',
        addAll: 'npx brutalist@latest add --all',
    },
    yarn: {
        init: 'yarn dlx brutalist@latest init',
        add: 'yarn dlx brutalist@latest add [component]',
        addAll: 'yarn dlx brutalist@latest add --all',
    },
    bun: {
        init: 'bunx brutalist@latest init',
        add: 'bunx brutalist@latest add [component]',
        addAll: 'bunx brutalist@latest add --all',
    },
};

function CodeBlock({ children, className }: { children: string; className?: string }) {
    const [copied, setCopied] = useState(false);

    const copy = () => {
        navigator.clipboard.writeText(children);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <div className={`relative group ${className}`}>
            <pre className="bg-gray-900 text-white p-4 border-3 border-black dark:border-white shadow-brutal overflow-x-auto text-sm font-mono">
                {children}
            </pre>
            <button
                onClick={copy}
                className="absolute top-2 right-2 p-2 bg-gray-800 hover:bg-gray-700 border border-gray-600 text-white text-xs font-mono opacity-0 group-hover:opacity-100 transition-opacity"
            >
                {copied ? 'Copied!' : 'Copy'}
            </button>
        </div>
    );
}

function PackageManagerTabs({ command }: { command: 'init' | 'add' | 'addAll' }) {
    const [pm, setPm] = useState<PackageManager>('pnpm');

    return (
        <div className="mb-6">
            <div className="inline-flex border-3 border-black dark:border-white border-b-0 bg-white dark:bg-gray-900">
                {packageManagers.map((manager, index) => (
                    <button
                        key={manager}
                        onClick={() => setPm(manager)}
                        className={`px-4 py-2 font-bold text-sm transition-colors ${
                            index < packageManagers.length - 1
                                ? 'border-r-3 border-black dark:border-white'
                                : ''
                        } ${
                            pm === manager
                                ? 'bg-[#FFE66D] text-black'
                                : 'bg-white dark:bg-gray-900 hover:bg-gray-100 dark:hover:bg-gray-800'
                        }`}
                    >
                        {manager}
                    </button>
                ))}
            </div>
            <CodeBlock>{commands[pm][command]}</CodeBlock>
        </div>
    );
}

export default function CLIPage() {
    return (
        <div className="max-w-4xl">
            <Badge variant="primary" className="mb-4">
                CLI
            </Badge>
            <h1 className="text-4xl font-black mb-4">CLI Reference</h1>
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-6">
                Use the CLI to add components directly to your project source code.
            </p>

            {/* Info box about CLI vs NPM */}
            <div className="mb-10 p-5 border-3 border-black dark:border-white bg-gray-50 dark:bg-gray-900">
                <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-10 h-10 bg-[#FF6B6B] border-3 border-black flex items-center justify-center">
                        <svg
                            className="w-5 h-5"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth={2.5}
                            viewBox="0 0 24 24"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                            />
                        </svg>
                    </div>
                    <div>
                        <h3 className="font-black mb-2">CLI vs NPM Package</h3>
                        <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
                            The CLI (
                            <code className="bg-gray-200 dark:bg-gray-800 px-1 font-mono">
                                brutalist
                            </code>
                            ) copies component source files into your project for full
                            customization. The NPM package (
                            <code className="bg-gray-200 dark:bg-gray-800 px-1 font-mono">
                                brutalist-ui
                            </code>
                            ) is a direct dependency import.
                        </p>
                        <Link
                            href="/docs"
                            className="text-sm font-bold hover:text-[#FF6B6B] transition-colors"
                        >
                            Compare both approaches →
                        </Link>
                    </div>
                </div>
            </div>

            {/* init command */}
            <h2 id="init" className="text-2xl font-black mb-4 mt-10">
                init
            </h2>
            <p className="mb-4">
                Use the{' '}
                <code className="bg-gray-100 dark:bg-gray-800 px-2 py-1 font-mono text-sm">
                    init
                </code>{' '}
                command to initialize configuration and dependencies for a new project.
            </p>
            <p className="mb-4 text-gray-600 dark:text-gray-400">
                The init command installs dependencies, adds the{' '}
                <code className="bg-gray-100 dark:bg-gray-800 px-2 py-1 font-mono text-sm">cn</code>{' '}
                util, configures CSS variables, and creates the component directory structure.
            </p>

            <PackageManagerTabs command="init" />

            <h3 className="text-xl font-black mb-3">Options</h3>
            <CodeBlock className="mb-6">
                {`Usage: brutalist init [options]

initialize your project and install dependencies

Options:
  -y, --yes          skip confirmation prompt. (default: false)
  -d, --defaults     use default configuration. (default: false)
  -c, --cwd <cwd>    the working directory. defaults to the current directory.
  -f, --force        force overwrite of existing configuration. (default: false)
  -s, --silent       mute output. (default: false)
  -h, --help         display help for command`}
            </CodeBlock>

            {/* add command */}
            <h2 id="add" className="text-2xl font-black mb-4 mt-10">
                add
            </h2>
            <p className="mb-4">
                Use the{' '}
                <code className="bg-gray-100 dark:bg-gray-800 px-2 py-1 font-mono text-sm">
                    add
                </code>{' '}
                command to add components and dependencies to your project.
            </p>

            <PackageManagerTabs command="add" />

            <h3 className="text-xl font-black mb-3">Options</h3>
            <CodeBlock className="mb-6">
                {`Usage: brutalist add [options] [components...]

add a component to your project

Arguments:
  components         the components to add (space-separated)

Options:
  -y, --yes          skip confirmation prompt. (default: false)
  -o, --overwrite    overwrite existing files. (default: false)
  -a, --all          add all available components. (default: false)
  -p, --path <path>  the path to add the component to.
  -c, --cwd <cwd>    the working directory. defaults to the current directory.
  -s, --silent       mute output. (default: false)
  -h, --help         display help for command`}
            </CodeBlock>

            {/* Examples */}
            <h2 id="examples" className="text-2xl font-black mb-4 mt-10">
                Examples
            </h2>

            <h3 className="text-lg font-black mb-3">Add a single component</h3>
            <CodeBlock className="mb-6">npx brutalist@latest add button</CodeBlock>

            <h3 className="text-lg font-black mb-3">Add multiple components</h3>
            <CodeBlock className="mb-6">npx brutalist@latest add button card dialog</CodeBlock>

            <h3 className="text-lg font-black mb-3">Add all components</h3>
            <PackageManagerTabs command="addAll" />

            <h3 className="text-lg font-black mb-3">Add with custom path</h3>
            <CodeBlock className="mb-6">
                npx brutalist@latest add button -p src/components/custom
            </CodeBlock>

            <h3 className="text-lg font-black mb-3">Overwrite existing files</h3>
            <CodeBlock className="mb-6">npx brutalist@latest add button --overwrite</CodeBlock>

            {/* Available Components */}
            <h2 id="components" className="text-2xl font-black mb-4 mt-10">
                Available Components
            </h2>
            <p className="mb-6 text-gray-600 dark:text-gray-400">
                The following components are available for installation:
            </p>

            <div className="border-3 border-black dark:border-white bg-white dark:bg-gray-900 p-4 mb-8">
                <div className="flex flex-wrap gap-2">
                    {[
                        'alert',
                        'avatar',
                        'badge',
                        'button',
                        'calendar',
                        'card',
                        'checkbox',
                        'combobox',
                        'command',
                        'dialog',
                        'dropdown-menu',
                        'input',
                        'label',
                        'pagination',
                        'popover',
                        'scroll-area',
                        'select',
                        'separator',
                        'skeleton',
                        'spinner',
                        'submit-button',
                        'switch',
                        'table',
                        'tabs',
                        'textarea',
                        'toast',
                        'tooltip',
                    ].map((component) => (
                        <code
                            key={component}
                            className="px-3 py-1.5 bg-gray-100 dark:bg-gray-800 border-2 border-black dark:border-white font-mono text-sm hover:bg-[#FFE66D] hover:text-black transition-colors cursor-default"
                        >
                            {component}
                        </code>
                    ))}
                </div>
                <div className="mt-4 pt-4 border-t-2 border-gray-200 dark:border-gray-700">
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                        <span className="font-bold text-black dark:text-white">27</span> components
                        available •{' '}
                        <code className="bg-gray-100 dark:bg-gray-800 px-1.5 py-0.5 text-xs">
                            --all
                        </code>{' '}
                        to install everything
                    </p>
                </div>
            </div>

            {/* Configuration */}
            <h2 id="configuration" className="text-2xl font-black mb-4 mt-10">
                components.json
            </h2>
            <p className="mb-4 text-gray-600 dark:text-gray-400">
                The CLI creates a{' '}
                <code className="bg-gray-100 dark:bg-gray-800 px-2 py-1 font-mono text-sm">
                    components.json
                </code>{' '}
                file in your project root to store configuration.
            </p>

            <CodeBlock className="mb-6">
                {`{
  "$schema": "https://brutalistui.site/schema.json",
  "style": "brutalism",
  "tailwind": {
    "config": "tailwind.config.js",
    "css": "src/app/globals.css"
  },
  "aliases": {
    "components": "@/components",
    "utils": "@/lib/utils"
  }
}`}
            </CodeBlock>

            <div className="overflow-x-auto">
                <table className="w-full border-3 border-black dark:border-white">
                    <thead className="bg-[#4ECDC4]">
                        <tr>
                            <th className="text-left p-3 font-black border-b-3 border-black">
                                Option
                            </th>
                            <th className="text-left p-3 font-black border-b-3 border-black">
                                Description
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="p-3 font-mono text-sm border-b border-gray-200">
                                tailwind.config
                            </td>
                            <td className="p-3 border-b border-gray-200">
                                Path to your tailwind.config.js file
                            </td>
                        </tr>
                        <tr>
                            <td className="p-3 font-mono text-sm border-b border-gray-200">
                                tailwind.css
                            </td>
                            <td className="p-3 border-b border-gray-200">
                                Path to your global CSS file
                            </td>
                        </tr>
                        <tr>
                            <td className="p-3 font-mono text-sm border-b border-gray-200">
                                aliases.components
                            </td>
                            <td className="p-3 border-b border-gray-200">
                                Import alias for components directory
                            </td>
                        </tr>
                        <tr>
                            <td className="p-3 font-mono text-sm">aliases.utils</td>
                            <td className="p-3">Import alias for utils file</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            {/* Troubleshooting */}
            <h2 id="troubleshooting" className="text-2xl font-black mb-4 mt-10">
                Troubleshooting
            </h2>

            <div className="space-y-4">
                <div className="p-4 border-3 border-black dark:border-white bg-[#FF6B6B]/10">
                    <h4 className="font-black mb-2">Command not found</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                        If you get a "command not found" error, make sure you're using{' '}
                        <code className="bg-gray-100 dark:bg-gray-800 px-1">npx</code>,{' '}
                        <code className="bg-gray-100 dark:bg-gray-800 px-1">pnpm dlx</code>,{' '}
                        <code className="bg-gray-100 dark:bg-gray-800 px-1">yarn dlx</code>, or{' '}
                        <code className="bg-gray-100 dark:bg-gray-800 px-1">bunx</code> to run the
                        CLI.
                    </p>
                </div>

                <div className="p-4 border-3 border-black dark:border-white bg-[#FFE66D]/10">
                    <h4 className="font-black mb-2">Components not found after installation</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                        Make sure your{' '}
                        <code className="bg-gray-100 dark:bg-gray-800 px-1">tsconfig.json</code> has
                        the correct path aliases configured to match your{' '}
                        <code className="bg-gray-100 dark:bg-gray-800 px-1">components.json</code>{' '}
                        settings.
                    </p>
                </div>

                <div className="p-4 border-3 border-black dark:border-white bg-[#4ECDC4]/10">
                    <h4 className="font-black mb-2">Tailwind styles not applying</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                        Ensure your{' '}
                        <code className="bg-gray-100 dark:bg-gray-800 px-1">
                            tailwind.config.js
                        </code>{' '}
                        includes the path to your components in the{' '}
                        <code className="bg-gray-100 dark:bg-gray-800 px-1">content</code> array.
                    </p>
                </div>
            </div>

            {/* Navigation */}
            <div className="flex justify-between items-center pt-8 border-t-3 border-black dark:border-white mt-12">
                <Link
                    href="/docs/installation/manual"
                    className="flex items-center gap-2 font-bold hover:text-[#FF6B6B] transition-colors"
                >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={3}
                            d="M15 19l-7-7 7-7"
                        />
                    </svg>
                    Manual Installation
                </Link>
                <Link
                    href="/docs/components"
                    className="flex items-center gap-2 font-bold hover:text-[#FF6B6B] transition-colors"
                >
                    Components
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={3}
                            d="M9 5l7 7-7 7"
                        />
                    </svg>
                </Link>
            </div>
        </div>
    );
}
