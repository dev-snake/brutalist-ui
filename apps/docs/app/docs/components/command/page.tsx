'use client';

import * as React from 'react';
import {
    Command,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
    CommandList,
    CommandSeparator,
    CommandShortcut,
    CommandDialog,
} from '@/components/ui';
import {
    Calculator,
    Calendar,
    CreditCard,
    Settings,
    Smile,
    User,
    Mail,
    MessageSquare,
    PlusCircle,
    Github,
    Keyboard,
    Moon,
    Sun,
} from 'lucide-react';

export default function CommandPage() {
    const [open, setOpen] = React.useState(false);

    React.useEffect(() => {
        const down = (e: KeyboardEvent) => {
            if (e.key === 'k' && (e.metaKey || e.ctrlKey)) {
                e.preventDefault();
                setOpen((open) => !open);
            }
        };

        document.addEventListener('keydown', down);
        return () => document.removeEventListener('keydown', down);
    }, []);

    return (
        <div className="space-y-12">
            {/* Header */}
            <div className="space-y-4">
                <h1 className="text-4xl font-black">Command</h1>
                <p className="text-lg text-gray-600 dark:text-gray-400">
                    Fast, composable, unstyled command menu for React. Built on top of cmdk.
                </p>
            </div>

            {/* Basic Example */}
            <section className="space-y-4">
                <h2 className="text-2xl font-black">Basic Command</h2>
                <p className="text-gray-600 dark:text-gray-400">
                    A simple command menu with search and items.
                </p>
                <div className="flex justify-center p-8 bg-gray-100 dark:bg-gray-800 border-3 border-black dark:border-white">
                    <Command className="border-3 border-black dark:border-white shadow-[4px_4px_0px_0px_#000000] dark:shadow-[4px_4px_0px_0px_#FFFFFF] max-w-md w-full">
                        <CommandInput placeholder="Type a command or search..." />
                        <CommandList>
                            <CommandEmpty>No results found.</CommandEmpty>
                            <CommandGroup heading="Suggestions">
                                <CommandItem>
                                    <Calendar className="mr-2 h-4 w-4" />
                                    <span>Calendar</span>
                                </CommandItem>
                                <CommandItem>
                                    <Smile className="mr-2 h-4 w-4" />
                                    <span>Search Emoji</span>
                                </CommandItem>
                                <CommandItem>
                                    <Calculator className="mr-2 h-4 w-4" />
                                    <span>Calculator</span>
                                </CommandItem>
                            </CommandGroup>
                            <CommandSeparator />
                            <CommandGroup heading="Settings">
                                <CommandItem>
                                    <User className="mr-2 h-4 w-4" />
                                    <span>Profile</span>
                                    <CommandShortcut>⌘P</CommandShortcut>
                                </CommandItem>
                                <CommandItem>
                                    <CreditCard className="mr-2 h-4 w-4" />
                                    <span>Billing</span>
                                    <CommandShortcut>⌘B</CommandShortcut>
                                </CommandItem>
                                <CommandItem>
                                    <Settings className="mr-2 h-4 w-4" />
                                    <span>Settings</span>
                                    <CommandShortcut>⌘S</CommandShortcut>
                                </CommandItem>
                            </CommandGroup>
                        </CommandList>
                    </Command>
                </div>
            </section>

            {/* Command Dialog */}
            <section className="space-y-4">
                <h2 className="text-2xl font-black">Command Dialog</h2>
                <p className="text-gray-600 dark:text-gray-400">
                    Press{' '}
                    <kbd className="px-2 py-1 bg-gray-100 dark:bg-gray-800 border-2 border-black dark:border-white font-mono text-sm">
                        ⌘K
                    </kbd>{' '}
                    or click the button to open the command palette.
                </p>
                <div className="flex justify-center p-8 bg-gray-100 dark:bg-gray-800 border-3 border-black dark:border-white">
                    <button
                        onClick={() => setOpen(true)}
                        className="px-4 py-2 bg-white dark:bg-gray-900 border-3 border-black dark:border-white shadow-[4px_4px_0px_0px_#000000] dark:shadow-[4px_4px_0px_0px_#FFFFFF] font-bold hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_0px_#000000] transition-all"
                    >
                        Open Command Palette (⌘K)
                    </button>
                </div>
                <CommandDialog open={open} onOpenChange={setOpen}>
                    <CommandInput placeholder="Type a command or search..." />
                    <CommandList>
                        <CommandEmpty>No results found.</CommandEmpty>
                        <CommandGroup heading="Actions">
                            <CommandItem onSelect={() => setOpen(false)}>
                                <PlusCircle className="mr-2 h-4 w-4" />
                                <span>Create New...</span>
                            </CommandItem>
                            <CommandItem onSelect={() => setOpen(false)}>
                                <Mail className="mr-2 h-4 w-4" />
                                <span>Send Email</span>
                            </CommandItem>
                            <CommandItem onSelect={() => setOpen(false)}>
                                <MessageSquare className="mr-2 h-4 w-4" />
                                <span>New Message</span>
                            </CommandItem>
                        </CommandGroup>
                        <CommandSeparator />
                        <CommandGroup heading="Navigation">
                            <CommandItem onSelect={() => setOpen(false)}>
                                <User className="mr-2 h-4 w-4" />
                                <span>Profile</span>
                                <CommandShortcut>⌘P</CommandShortcut>
                            </CommandItem>
                            <CommandItem onSelect={() => setOpen(false)}>
                                <Settings className="mr-2 h-4 w-4" />
                                <span>Settings</span>
                                <CommandShortcut>⌘,</CommandShortcut>
                            </CommandItem>
                        </CommandGroup>
                        <CommandSeparator />
                        <CommandGroup heading="Theme">
                            <CommandItem onSelect={() => setOpen(false)}>
                                <Sun className="mr-2 h-4 w-4" />
                                <span>Light Mode</span>
                            </CommandItem>
                            <CommandItem onSelect={() => setOpen(false)}>
                                <Moon className="mr-2 h-4 w-4" />
                                <span>Dark Mode</span>
                            </CommandItem>
                        </CommandGroup>
                        <CommandSeparator />
                        <CommandGroup heading="Links">
                            <CommandItem onSelect={() => setOpen(false)}>
                                <Github className="mr-2 h-4 w-4" />
                                <span>GitHub</span>
                            </CommandItem>
                            <CommandItem onSelect={() => setOpen(false)}>
                                <Keyboard className="mr-2 h-4 w-4" />
                                <span>Keyboard Shortcuts</span>
                                <CommandShortcut>⌘K</CommandShortcut>
                            </CommandItem>
                        </CommandGroup>
                    </CommandList>
                </CommandDialog>
            </section>

            {/* With Disabled Items */}
            <section className="space-y-4">
                <h2 className="text-2xl font-black">With Disabled Items</h2>
                <p className="text-gray-600 dark:text-gray-400">Some items can be disabled.</p>
                <div className="flex justify-center p-8 bg-gray-100 dark:bg-gray-800 border-3 border-black dark:border-white">
                    <Command className="border-3 border-black dark:border-white shadow-[4px_4px_0px_0px_#000000] dark:shadow-[4px_4px_0px_0px_#FFFFFF] max-w-md w-full">
                        <CommandInput placeholder="Search..." />
                        <CommandList>
                            <CommandEmpty>No results found.</CommandEmpty>
                            <CommandGroup heading="Features">
                                <CommandItem>
                                    <span>Available Feature</span>
                                </CommandItem>
                                <CommandItem disabled>
                                    <span>Premium Feature (Disabled)</span>
                                </CommandItem>
                                <CommandItem>
                                    <span>Another Feature</span>
                                </CommandItem>
                                <CommandItem disabled>
                                    <span>Coming Soon (Disabled)</span>
                                </CommandItem>
                            </CommandGroup>
                        </CommandList>
                    </Command>
                </div>
            </section>

            {/* Installation */}
            <section className="space-y-4">
                <h2 className="text-2xl font-black">Installation</h2>
                <div className="bg-gray-900 text-gray-100 p-4 border-3 border-black dark:border-white font-mono text-sm overflow-x-auto">
                    <pre>npx brutalist-ui-cli add command</pre>
                </div>
                <p className="text-gray-600 dark:text-gray-400">
                    The Command component requires the{' '}
                    <code className="bg-gray-100 dark:bg-gray-800 px-1">cmdk</code> package:
                </p>
                <div className="bg-gray-900 text-gray-100 p-4 border-3 border-black dark:border-white font-mono text-sm overflow-x-auto">
                    <pre>npm install cmdk</pre>
                </div>
            </section>

            {/* Props */}
            <section className="space-y-4">
                <h2 className="text-2xl font-black">Components</h2>
                <div className="overflow-x-auto">
                    <table className="w-full border-3 border-black dark:border-white">
                        <thead className="bg-[#FFE66D] dark:bg-[#FFE66D]">
                            <tr>
                                <th className="text-left p-4 font-black border-b-3 border-black text-black">
                                    Component
                                </th>
                                <th className="text-left p-4 font-black border-b-3 border-black text-black">
                                    Description
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="border-b border-gray-200 dark:border-gray-700">
                                <td className="p-4 font-mono text-sm">Command</td>
                                <td className="p-4">The root command container</td>
                            </tr>
                            <tr className="border-b border-gray-200 dark:border-gray-700">
                                <td className="p-4 font-mono text-sm">CommandDialog</td>
                                <td className="p-4">Command in a modal dialog</td>
                            </tr>
                            <tr className="border-b border-gray-200 dark:border-gray-700">
                                <td className="p-4 font-mono text-sm">CommandInput</td>
                                <td className="p-4">The search input field</td>
                            </tr>
                            <tr className="border-b border-gray-200 dark:border-gray-700">
                                <td className="p-4 font-mono text-sm">CommandList</td>
                                <td className="p-4">Container for command items</td>
                            </tr>
                            <tr className="border-b border-gray-200 dark:border-gray-700">
                                <td className="p-4 font-mono text-sm">CommandEmpty</td>
                                <td className="p-4">Shown when no results found</td>
                            </tr>
                            <tr className="border-b border-gray-200 dark:border-gray-700">
                                <td className="p-4 font-mono text-sm">CommandGroup</td>
                                <td className="p-4">Group of related items with heading</td>
                            </tr>
                            <tr className="border-b border-gray-200 dark:border-gray-700">
                                <td className="p-4 font-mono text-sm">CommandItem</td>
                                <td className="p-4">Individual selectable item</td>
                            </tr>
                            <tr className="border-b border-gray-200 dark:border-gray-700">
                                <td className="p-4 font-mono text-sm">CommandSeparator</td>
                                <td className="p-4">Visual separator between groups</td>
                            </tr>
                            <tr className="border-b border-gray-200 dark:border-gray-700">
                                <td className="p-4 font-mono text-sm">CommandShortcut</td>
                                <td className="p-4">Keyboard shortcut display</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </section>
        </div>
    );
}
