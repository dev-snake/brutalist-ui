'use client';

import * as React from 'react';
import { Command as CommandPrimitive } from 'cmdk';
import { SearchIcon } from 'lucide-react';

import { cn } from '../lib/utils';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from './dialog';

function Command({ className, ...props }: React.ComponentProps<typeof CommandPrimitive>) {
    return (
        <CommandPrimitive
            data-slot="command"
            className={cn(
                'flex h-full w-full flex-col overflow-hidden',
                'bg-white dark:bg-gray-900',
                'text-black dark:text-white',
                className
            )}
            {...props}
        />
    );
}

function CommandDialog({
    title = 'Command Palette',
    description = 'Search for a command to run...',
    children,
    className,
    showCloseButton = true,
    ...props
}: React.ComponentProps<typeof Dialog> & {
    title?: string;
    description?: string;
    className?: string;
    showCloseButton?: boolean;
}) {
    return (
        <Dialog {...props}>
            <DialogHeader className="sr-only">
                <DialogTitle>{title}</DialogTitle>
                <DialogDescription>{description}</DialogDescription>
            </DialogHeader>
            <DialogContent
                className={cn('overflow-hidden p-0', className)}
                showCloseButton={showCloseButton}
            >
                <Command className="[&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:font-black [&_[cmdk-group-heading]]:text-gray-600 dark:[&_[cmdk-group-heading]]:text-gray-400 [&_[cmdk-group]]:px-2 [&_[cmdk-group]:not([hidden])_~[cmdk-group]]:pt-0 [&_[cmdk-input-wrapper]_svg]:h-5 [&_[cmdk-input-wrapper]_svg]:w-5 [&_[cmdk-input]]:h-12 [&_[cmdk-item]]:px-3 [&_[cmdk-item]]:py-3 [&_[cmdk-item]_svg]:h-5 [&_[cmdk-item]_svg]:w-5">
                    {children}
                </Command>
            </DialogContent>
        </Dialog>
    );
}

function CommandInput({
    className,
    ...props
}: React.ComponentProps<typeof CommandPrimitive.Input>) {
    return (
        <div
            data-slot="command-input-wrapper"
            className={cn(
                'flex h-12 items-center gap-3 px-4',
                'border-b-3 border-black dark:border-white',
                'bg-[#FFE66D]'
            )}
        >
            <SearchIcon className="size-5 shrink-0 stroke-[3] text-black" />
            <CommandPrimitive.Input
                data-slot="command-input"
                className={cn(
                    'flex h-full w-full bg-transparent py-3',
                    'text-sm font-bold text-black placeholder:text-black/60',
                    'outline-none',
                    'disabled:cursor-not-allowed disabled:opacity-50',
                    className
                )}
                {...props}
            />
        </div>
    );
}

function CommandList({ className, ...props }: React.ComponentProps<typeof CommandPrimitive.List>) {
    return (
        <CommandPrimitive.List
            data-slot="command-list"
            className={cn(
                'max-h-[300px] overflow-x-hidden overflow-y-auto scroll-py-1',
                'p-2',
                className
            )}
            {...props}
        />
    );
}

function CommandEmpty({
    className,
    ...props
}: React.ComponentProps<typeof CommandPrimitive.Empty>) {
    return (
        <CommandPrimitive.Empty
            data-slot="command-empty"
            className={cn(
                'py-8 text-center text-sm font-bold',
                'text-gray-500 dark:text-gray-400',
                className
            )}
            {...props}
        />
    );
}

function CommandGroup({
    className,
    ...props
}: React.ComponentProps<typeof CommandPrimitive.Group>) {
    return (
        <CommandPrimitive.Group
            data-slot="command-group"
            className={cn(
                'overflow-hidden p-1',
                '[&_[cmdk-group-heading]]:px-3 [&_[cmdk-group-heading]]:py-2',
                '[&_[cmdk-group-heading]]:text-xs [&_[cmdk-group-heading]]:font-black [&_[cmdk-group-heading]]:uppercase [&_[cmdk-group-heading]]:tracking-wider',
                '[&_[cmdk-group-heading]]:text-gray-500 dark:[&_[cmdk-group-heading]]:text-gray-400',
                className
            )}
            {...props}
        />
    );
}

function CommandSeparator({
    className,
    ...props
}: React.ComponentProps<typeof CommandPrimitive.Separator>) {
    return (
        <CommandPrimitive.Separator
            data-slot="command-separator"
            className={cn('-mx-1 my-2 h-[3px]', 'bg-black dark:bg-white', className)}
            {...props}
        />
    );
}

function CommandItem({ className, ...props }: React.ComponentProps<typeof CommandPrimitive.Item>) {
    return (
        <CommandPrimitive.Item
            data-slot="command-item"
            className={cn(
                'relative flex cursor-pointer items-center gap-3 px-3 py-2',
                'text-sm font-semibold',
                'select-none outline-none',
                'border-2 border-transparent',
                // Hover & Selected states - Neo-Brutalist style
                'data-[selected=true]:bg-[#4ECDC4] data-[selected=true]:text-black',
                'data-[selected=true]:border-black data-[selected=true]:font-black',
                'data-[selected=true]:shadow-[2px_2px_0px_0px_#000000]',
                // Disabled
                'data-[disabled=true]:pointer-events-none data-[disabled=true]:opacity-50',
                // Icons
                '[&_svg]:pointer-events-none [&_svg]:shrink-0',
                "[&_svg:not([class*='size-'])]:size-5",
                "[&_svg:not([class*='text-'])]:text-current",
                className
            )}
            {...props}
        />
    );
}

function CommandShortcut({ className, ...props }: React.ComponentProps<'span'>) {
    return (
        <span
            data-slot="command-shortcut"
            className={cn(
                'ml-auto text-xs font-black tracking-wider',
                'px-2 py-1',
                'bg-gray-100 dark:bg-gray-800',
                'border-2 border-black dark:border-white',
                'text-gray-600 dark:text-gray-300',
                className
            )}
            {...props}
        />
    );
}

export {
    Command,
    CommandDialog,
    CommandInput,
    CommandList,
    CommandEmpty,
    CommandGroup,
    CommandItem,
    CommandShortcut,
    CommandSeparator,
};
