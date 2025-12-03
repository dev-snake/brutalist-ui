'use client';

import * as React from 'react';
import { ChevronLeftIcon, ChevronRightIcon, ChevronDownIcon } from 'lucide-react';
import { DayButton, DayPicker, getDefaultClassNames } from 'react-day-picker';

import { cn } from '@/lib/utils';
import { Button, buttonVariants } from './button';

function Calendar({
    className,
    classNames,
    showOutsideDays = true,
    captionLayout = 'label',
    buttonVariant = 'outline',
    formatters,
    components,
    ...props
}: React.ComponentProps<typeof DayPicker> & {
    buttonVariant?: React.ComponentProps<typeof Button>['variant'];
}) {
    const defaultClassNames = getDefaultClassNames();

    return (
        <DayPicker
            showOutsideDays={showOutsideDays}
            className={cn(
                'p-2 sm:p-3 bg-[#FFFEF0] dark:bg-[#1a1a2e]',
                'border-2 sm:border-3 border-black dark:border-white',
                'shadow-[3px_3px_0px_0px_#000000] sm:shadow-[4px_4px_0px_0px_#000000]',
                'dark:shadow-[3px_3px_0px_0px_#FFFFFF] sm:dark:shadow-[4px_4px_0px_0px_#FFFFFF]',
                'w-fit max-w-full overflow-x-auto',
                className
            )}
            captionLayout={captionLayout}
            formatters={{
                formatMonthDropdown: (date) => date.toLocaleString('default', { month: 'short' }),
                ...formatters,
            }}
            classNames={{
                root: cn('w-fit select-none', defaultClassNames.root),
                months: cn('flex gap-2 sm:gap-4 flex-col', defaultClassNames.months),
                month: cn('flex flex-col gap-1 sm:gap-2', defaultClassNames.month),
                nav: cn(
                    'flex items-center gap-1 absolute top-0 inset-x-0 justify-between z-10',
                    defaultClassNames.nav
                ),
                button_previous: cn(
                    buttonVariants({ variant: buttonVariant, size: 'icon' }),
                    'h-6 w-6 sm:h-7 sm:w-7 p-0 select-none',
                    'border-2 border-black dark:border-white',
                    'shadow-[2px_2px_0px_0px_#000000] dark:shadow-[2px_2px_0px_0px_#FFFFFF]',
                    'hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-[1px_1px_0px_0px_#000000]',
                    'transition-all duration-100',
                    'aria-disabled:opacity-50',
                    defaultClassNames.button_previous
                ),
                button_next: cn(
                    buttonVariants({ variant: buttonVariant, size: 'icon' }),
                    'h-6 w-6 sm:h-7 sm:w-7 p-0 select-none',
                    'border-2 border-black dark:border-white',
                    'shadow-[2px_2px_0px_0px_#000000] dark:shadow-[2px_2px_0px_0px_#FFFFFF]',
                    'hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-[1px_1px_0px_0px_#000000]',
                    'transition-all duration-100',
                    'aria-disabled:opacity-50',
                    defaultClassNames.button_next
                ),
                month_caption: cn(
                    'flex items-center justify-center h-6 sm:h-7 relative',
                    'font-black text-xs sm:text-sm tracking-tight uppercase',
                    defaultClassNames.month_caption
                ),
                dropdowns: cn(
                    'flex items-center text-[10px] sm:text-xs font-bold justify-center gap-1',
                    defaultClassNames.dropdowns
                ),
                dropdown_root: cn(
                    'relative border-2 border-black dark:border-white bg-white dark:bg-gray-800',
                    'shadow-[2px_2px_0px_0px_#000000] dark:shadow-[2px_2px_0px_0px_#FFFFFF]',
                    'focus-within:ring-2 focus-within:ring-offset-1 focus-within:ring-black',
                    defaultClassNames.dropdown_root
                ),
                dropdown: cn(
                    'absolute inset-0 opacity-0 cursor-pointer',
                    defaultClassNames.dropdown
                ),
                caption_label: cn(
                    'select-none font-black tracking-tight',
                    captionLayout === 'label'
                        ? 'text-xs sm:text-sm'
                        : 'pl-1 sm:pl-1.5 pr-0.5 flex items-center gap-0.5 sm:gap-1 text-[10px] sm:text-xs h-6 sm:h-7 [&>svg]:size-2.5 sm:[&>svg]:size-3',
                    defaultClassNames.caption_label
                ),
                table: 'w-full border-collapse border-spacing-0',
                weekdays: cn('', defaultClassNames.weekdays),
                weekday: cn(
                    'text-black dark:text-white font-black text-[8px] sm:text-[10px] select-none uppercase tracking-wide',
                    'h-6 w-6 sm:h-8 sm:w-8 text-center',
                    'bg-[#FFE66D] dark:bg-[#FFE66D] dark:text-black',
                    'border sm:border-2 border-black dark:border-black',
                    defaultClassNames.weekday
                ),
                week: cn('', defaultClassNames.week),
                week_number_header: cn(
                    'select-none h-6 w-6 sm:h-8 sm:w-8 text-center font-black text-[8px] sm:text-[10px]',
                    'bg-[#A8E6CF] border sm:border-2 border-black',
                    defaultClassNames.week_number_header
                ),
                week_number: cn(
                    'text-[8px] sm:text-[10px] select-none font-black text-black',
                    'h-6 w-6 sm:h-8 sm:w-8 text-center align-middle',
                    'bg-[#A8E6CF] border sm:border-2 border-black',
                    defaultClassNames.week_number
                ),
                day: cn(
                    'relative h-6 w-6 sm:h-8 sm:w-8 p-0 text-center select-none',
                    'border border-black/10 dark:border-white/10',
                    defaultClassNames.day
                ),
                range_start: cn(
                    '[&>button]:bg-[#FF6B6B] [&>button]:border-2 [&>button]:border-black [&>button]:font-black',
                    defaultClassNames.range_start
                ),
                range_middle: cn(
                    '[&>button]:bg-[#FFE66D] [&>button]:text-black',
                    defaultClassNames.range_middle
                ),
                range_end: cn(
                    '[&>button]:bg-[#FF6B6B] [&>button]:border-2 [&>button]:border-black [&>button]:font-black',
                    defaultClassNames.range_end
                ),
                today: cn(
                    '[&>button]:bg-[#4ECDC4] [&>button]:text-black [&>button]:font-black',
                    '[&>button]:border-2 [&>button]:border-black',
                    defaultClassNames.today
                ),
                outside: cn(
                    'text-gray-400 dark:text-gray-600 opacity-40',
                    defaultClassNames.outside
                ),
                disabled: cn(
                    'text-gray-400 dark:text-gray-600 opacity-40 cursor-not-allowed',
                    'bg-gray-100 dark:bg-gray-800',
                    defaultClassNames.disabled
                ),
                hidden: cn('invisible', defaultClassNames.hidden),
                ...classNames,
            }}
            components={{
                Root: ({ className, rootRef, ...props }) => {
                    return (
                        <div
                            data-slot="calendar"
                            ref={rootRef}
                            className={cn(className)}
                            {...props}
                        />
                    );
                },
                Chevron: ({ className, orientation, ...props }) => {
                    if (orientation === 'left') {
                        return (
                            <ChevronLeftIcon
                                className={cn('size-4 stroke-[3]', className)}
                                {...props}
                            />
                        );
                    }

                    if (orientation === 'right') {
                        return (
                            <ChevronRightIcon
                                className={cn('size-4 stroke-[3]', className)}
                                {...props}
                            />
                        );
                    }

                    return (
                        <ChevronDownIcon
                            className={cn('size-3 stroke-[3]', className)}
                            {...props}
                        />
                    );
                },
                DayButton: CalendarDayButton,
                WeekNumber: ({ children, ...props }) => {
                    return (
                        <td {...props}>
                            <div className="flex h-6 w-6 sm:h-8 sm:w-8 items-center justify-center text-center font-black">
                                {children}
                            </div>
                        </td>
                    );
                },
                ...components,
            }}
            {...props}
        />
    );
}

function CalendarDayButton({
    className,
    day,
    modifiers,
    ...props
}: React.ComponentProps<typeof DayButton>) {
    const defaultClassNames = getDefaultClassNames();

    const ref = React.useRef<HTMLButtonElement>(null);
    React.useEffect(() => {
        if (modifiers.focused) ref.current?.focus();
    }, [modifiers.focused]);

    return (
        <button
            ref={ref}
            type="button"
            data-day={day.date.toLocaleDateString()}
            data-selected-single={
                modifiers.selected &&
                !modifiers.range_start &&
                !modifiers.range_end &&
                !modifiers.range_middle
            }
            data-range-start={modifiers.range_start}
            data-range-end={modifiers.range_end}
            data-range-middle={modifiers.range_middle}
            className={cn(
                'flex h-6 w-6 sm:h-8 sm:w-8 items-center justify-center',
                'text-[10px] sm:text-xs font-semibold transition-all duration-100',
                'hover:bg-[#DDA0DD] hover:text-black hover:font-bold',
                'focus:outline-none focus:ring-1 focus:ring-black focus:ring-offset-1',
                // Selected single day
                'data-[selected-single=true]:bg-[#FF6B6B] data-[selected-single=true]:text-black',
                'data-[selected-single=true]:border sm:data-[selected-single=true]:border-2 data-[selected-single=true]:border-black',
                'data-[selected-single=true]:shadow-[1px_1px_0px_0px_#000000] sm:data-[selected-single=true]:shadow-[2px_2px_0px_0px_#000000]',
                'data-[selected-single=true]:font-black',
                // Range styles
                'data-[range-start=true]:bg-[#FF6B6B] data-[range-start=true]:text-black data-[range-start=true]:font-black',
                'data-[range-end=true]:bg-[#FF6B6B] data-[range-end=true]:text-black data-[range-end=true]:font-black',
                'data-[range-middle=true]:bg-[#FFE66D] data-[range-middle=true]:text-black',
                // Disabled
                'disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:bg-transparent',
                defaultClassNames.day,
                className
            )}
            {...props}
        />
    );
}

export { Calendar, CalendarDayButton };
