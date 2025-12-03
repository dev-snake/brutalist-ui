'use client';

import * as React from 'react';
import { CheckIcon, ChevronsUpDownIcon } from 'lucide-react';

import { cn } from '@/lib/utils';
import { Button } from './button';
import { Popover, PopoverContent, PopoverTrigger } from './popover';
import {
    Command,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
    CommandList,
} from './command';

export interface ComboboxOption {
    value: string;
    label: string;
    disabled?: boolean;
}

export interface ComboboxProps {
    options: ComboboxOption[];
    value?: string;
    onValueChange?: (value: string) => void;
    placeholder?: string;
    searchPlaceholder?: string;
    emptyText?: string;
    className?: string;
    disabled?: boolean;
}

function Combobox({
    options,
    value,
    onValueChange,
    placeholder = 'Select option...',
    searchPlaceholder = 'Search...',
    emptyText = 'No results found.',
    className,
    disabled = false,
}: ComboboxProps) {
    const [open, setOpen] = React.useState(false);

    const selectedOption = options.find((option) => option.value === value);

    return (
        <Popover open={open} onOpenChange={setOpen}>
            <PopoverTrigger asChild>
                <Button
                    variant="outline"
                    role="combobox"
                    aria-expanded={open}
                    disabled={disabled}
                    className={cn(
                        'w-full justify-between font-semibold',
                        !value && 'text-gray-500',
                        className
                    )}
                >
                    {selectedOption ? selectedOption.label : placeholder}
                    <ChevronsUpDownIcon className="ml-2 h-4 w-4 shrink-0 opacity-50 stroke-[3]" />
                </Button>
            </PopoverTrigger>
            <PopoverContent className="w-[--radix-popover-trigger-width] p-0" align="start">
                <Command>
                    <CommandInput placeholder={searchPlaceholder} />
                    <CommandList>
                        <CommandEmpty>{emptyText}</CommandEmpty>
                        <CommandGroup>
                            {options.map((option) => (
                                <CommandItem
                                    key={option.value}
                                    value={option.value}
                                    disabled={option.disabled}
                                    onSelect={(currentValue) => {
                                        onValueChange?.(currentValue === value ? '' : currentValue);
                                        setOpen(false);
                                    }}
                                >
                                    <CheckIcon
                                        className={cn(
                                            'mr-2 h-4 w-4 stroke-[3]',
                                            value === option.value ? 'opacity-100' : 'opacity-0'
                                        )}
                                    />
                                    {option.label}
                                </CommandItem>
                            ))}
                        </CommandGroup>
                    </CommandList>
                </Command>
            </PopoverContent>
        </Popover>
    );
}

// Multi-select Combobox
export interface ComboboxMultiProps {
    options: ComboboxOption[];
    value?: string[];
    onValueChange?: (value: string[]) => void;
    placeholder?: string;
    searchPlaceholder?: string;
    emptyText?: string;
    className?: string;
    disabled?: boolean;
    maxDisplay?: number;
}

function ComboboxMulti({
    options,
    value = [],
    onValueChange,
    placeholder = 'Select options...',
    searchPlaceholder = 'Search...',
    emptyText = 'No results found.',
    className,
    disabled = false,
    maxDisplay = 3,
}: ComboboxMultiProps) {
    const [open, setOpen] = React.useState(false);

    const selectedOptions = options.filter((option) => value.includes(option.value));

    const displayText = React.useMemo(() => {
        if (selectedOptions.length === 0) return placeholder;
        if (selectedOptions.length <= maxDisplay) {
            return selectedOptions.map((o) => o.label).join(', ');
        }
        return `${selectedOptions.length} selected`;
    }, [selectedOptions, placeholder, maxDisplay]);

    const handleSelect = (optionValue: string) => {
        const newValue = value.includes(optionValue)
            ? value.filter((v) => v !== optionValue)
            : [...value, optionValue];
        onValueChange?.(newValue);
    };

    return (
        <Popover open={open} onOpenChange={setOpen}>
            <PopoverTrigger asChild>
                <Button
                    variant="outline"
                    role="combobox"
                    aria-expanded={open}
                    disabled={disabled}
                    className={cn(
                        'w-full justify-between font-semibold',
                        selectedOptions.length === 0 && 'text-gray-500',
                        className
                    )}
                >
                    <span className="truncate">{displayText}</span>
                    <ChevronsUpDownIcon className="ml-2 h-4 w-4 shrink-0 opacity-50 stroke-[3]" />
                </Button>
            </PopoverTrigger>
            <PopoverContent className="w-[--radix-popover-trigger-width] p-0" align="start">
                <Command>
                    <CommandInput placeholder={searchPlaceholder} />
                    <CommandList>
                        <CommandEmpty>{emptyText}</CommandEmpty>
                        <CommandGroup>
                            {options.map((option) => (
                                <CommandItem
                                    key={option.value}
                                    value={option.value}
                                    disabled={option.disabled}
                                    onSelect={() => handleSelect(option.value)}
                                >
                                    <div
                                        className={cn(
                                            'mr-2 flex h-4 w-4 items-center justify-center',
                                            'border-2 border-black dark:border-white',
                                            value.includes(option.value)
                                                ? 'bg-[#4ECDC4]'
                                                : 'bg-white dark:bg-gray-900'
                                        )}
                                    >
                                        {value.includes(option.value) && (
                                            <CheckIcon className="h-3 w-3 stroke-[3] text-black" />
                                        )}
                                    </div>
                                    {option.label}
                                </CommandItem>
                            ))}
                        </CommandGroup>
                    </CommandList>
                </Command>
            </PopoverContent>
        </Popover>
    );
}

export { Combobox, ComboboxMulti };
