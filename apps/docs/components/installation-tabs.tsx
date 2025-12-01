'use client';

import * as React from 'react';
import { cn } from 'brutalist-ui';

interface InstallationTabsProps {
    componentName: string;
    dependencies?: string[];
}

type TabType = 'cli' | 'manual';
type PackageManager = 'pnpm' | 'npm' | 'yarn' | 'bun';

export function InstallationTabs({ componentName, dependencies = [] }: InstallationTabsProps) {
    const [activeTab, setActiveTab] = React.useState<TabType>('cli');
    const [packageManager, setPackageManager] = React.useState<PackageManager>('pnpm');

    const cliCommands: Record<PackageManager, string> = {
        pnpm: `pnpm dlx brutalist-ui-cli add ${componentName}`,
        npm: `npx brutalist-ui-cli add ${componentName}`,
        yarn: `yarn dlx brutalist-ui-cli add ${componentName}`,
        bun: `bunx brutalist-ui-cli add ${componentName}`,
    };

    const installCommands: Record<PackageManager, string> = {
        pnpm: `pnpm add brutalist-ui`,
        npm: `npm install brutalist-ui`,
        yarn: `yarn add brutalist-ui`,
        bun: `bun add brutalist-ui`,
    };

    const dependencyCommands: Record<PackageManager, string> = {
        pnpm: `pnpm add ${dependencies.join(' ')}`,
        npm: `npm install ${dependencies.join(' ')}`,
        yarn: `yarn add ${dependencies.join(' ')}`,
        bun: `bun add ${dependencies.join(' ')}`,
    };

    const pascalCase = componentName
        .split('-')
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join('');

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
                    <pre className="bg-gray-900 text-gray-100 p-4 border-3 border-black dark:border-white font-mono text-sm overflow-x-auto">
                        <code>{cliCommands[packageManager]}</code>
                    </pre>
                </div>
            ) : (
                <div className="space-y-4">
                    <div>
                        <p className="text-sm font-bold mb-2 text-gray-600 dark:text-gray-400">
                            1. Install the package:
                        </p>
                        <pre className="bg-gray-900 text-gray-100 p-4 border-3 border-black dark:border-white font-mono text-sm overflow-x-auto">
                            <code>{installCommands[packageManager]}</code>
                        </pre>
                    </div>

                    {dependencies.length > 0 && (
                        <div>
                            <p className="text-sm font-bold mb-2 text-gray-600 dark:text-gray-400">
                                2. Install dependencies:
                            </p>
                            <pre className="bg-gray-900 text-gray-100 p-4 border-3 border-black dark:border-white font-mono text-sm overflow-x-auto">
                                <code>{dependencyCommands[packageManager]}</code>
                            </pre>
                        </div>
                    )}

                    <div>
                        <p className="text-sm font-bold mb-2 text-gray-600 dark:text-gray-400">
                            {dependencies.length > 0 ? '3' : '2'}. Import the component:
                        </p>
                        <pre className="bg-gray-900 text-gray-100 p-4 border-3 border-black dark:border-white font-mono text-sm overflow-x-auto">
                            <code>{`import { ${pascalCase} } from "brutalist-ui";`}</code>
                        </pre>
                    </div>
                </div>
            )}
        </div>
    );
}
