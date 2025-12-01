export const calendarTemplate = (utilsAlias: string) => `"use client";

import * as React from "react";
import {
    ChevronLeftIcon,
    ChevronRightIcon,
    ChevronDownIcon,
} from "lucide-react";
import { DayButton, DayPicker, getDefaultClassNames } from "react-day-picker";

import { cn } from "${utilsAlias}";
import { Button, buttonVariants } from "./button";

function Calendar({
    className,
    classNames,
    showOutsideDays = true,
    captionLayout = "label",
    buttonVariant = "ghost",
    formatters,
    components,
    ...props
}: React.ComponentProps<typeof DayPicker> & {
    buttonVariant?: React.ComponentProps<typeof Button>["variant"];
}) {
    const defaultClassNames = getDefaultClassNames();

    return (
        <DayPicker
            showOutsideDays={showOutsideDays}
            className={cn(
                "p-4 bg-white dark:bg-gray-900",
                "border-3 border-black dark:border-white",
                "shadow-[4px_4px_0px_0px_#000000] dark:shadow-[4px_4px_0px_0px_#FFFFFF]",
                className
            )}
            captionLayout={captionLayout}
            formatters={{
                formatMonthDropdown: (date) =>
                    date.toLocaleString("default", { month: "short" }),
                ...formatters,
            }}
            classNames={{
                root: cn("w-fit", defaultClassNames.root),
                months: cn(
                    "flex gap-4 flex-col md:flex-row relative",
                    defaultClassNames.months
                ),
                month: cn("flex flex-col w-full gap-4", defaultClassNames.month),
                nav: cn(
                    "flex items-center gap-1 w-full absolute top-0 inset-x-0 justify-between",
                    defaultClassNames.nav
                ),
                button_previous: cn(
                    buttonVariants({ variant: buttonVariant, size: "icon" }),
                    "h-8 w-8 p-0 select-none",
                    "aria-disabled:opacity-50",
                    defaultClassNames.button_previous
                ),
                button_next: cn(
                    buttonVariants({ variant: buttonVariant, size: "icon" }),
                    "h-8 w-8 p-0 select-none",
                    "aria-disabled:opacity-50",
                    defaultClassNames.button_next
                ),
                month_caption: cn(
                    "flex items-center justify-center h-8 w-full px-8",
                    "font-black text-lg tracking-tight",
                    defaultClassNames.month_caption
                ),
                dropdowns: cn(
                    "w-full flex items-center text-sm font-bold justify-center h-8 gap-1.5",
                    defaultClassNames.dropdowns
                ),
                dropdown_root: cn(
                    "relative border-2 border-black dark:border-white",
                    "focus-within:ring-2 focus-within:ring-black dark:focus-within:ring-white",
                    defaultClassNames.dropdown_root
                ),
                dropdown: cn(
                    "absolute inset-0 opacity-0 cursor-pointer",
                    defaultClassNames.dropdown
                ),
                caption_label: cn(
                    "select-none font-black tracking-tight",
                    captionLayout === "label"
                        ? "text-base"
                        : "pl-2 pr-1 flex items-center gap-1 text-sm h-8 [&>svg]:size-3.5",
                    defaultClassNames.caption_label
                ),
                table: "w-full border-collapse",
                weekdays: cn("flex", defaultClassNames.weekdays),
                weekday: cn(
                    "text-gray-600 dark:text-gray-400 flex-1 font-bold text-xs select-none uppercase tracking-wide",
                    defaultClassNames.weekday
                ),
                week: cn("flex w-full mt-1", defaultClassNames.week),
                week_number_header: cn(
                    "select-none w-8",
                    defaultClassNames.week_number_header
                ),
                week_number: cn(
                    "text-xs select-none text-gray-500 dark:text-gray-500 font-medium",
                    defaultClassNames.week_number
                ),
                day: cn(
                    "relative w-full h-full p-0 text-center aspect-square select-none",
                    "[&:last-child[data-selected=true]_button]:rounded-none",
                    props.showWeekNumber
                        ? "[&:nth-child(2)[data-selected=true]_button]:rounded-none"
                        : "[&:first-child[data-selected=true]_button]:rounded-none",
                    defaultClassNames.day
                ),
                range_start: cn("bg-[#FF6B6B]", defaultClassNames.range_start),
                range_middle: cn("bg-[#FFE66D]", defaultClassNames.range_middle),
                range_end: cn("bg-[#FF6B6B]", defaultClassNames.range_end),
                today: cn(
                    "bg-[#4ECDC4] text-black font-black",
                    "border-2 border-black dark:border-white",
                    defaultClassNames.today
                ),
                outside: cn(
                    "text-gray-400 dark:text-gray-600 opacity-50",
                    defaultClassNames.outside
                ),
                disabled: cn(
                    "text-gray-400 dark:text-gray-600 opacity-50 cursor-not-allowed",
                    defaultClassNames.disabled
                ),
                hidden: cn("invisible", defaultClassNames.hidden),
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
                    if (orientation === "left") {
                        return (
                            <ChevronLeftIcon
                                className={cn("size-5 stroke-[3]", className)}
                                {...props}
                            />
                        );
                    }

                    if (orientation === "right") {
                        return (
                            <ChevronRightIcon
                                className={cn("size-5 stroke-[3]", className)}
                                {...props}
                            />
                        );
                    }

                    return (
                        <ChevronDownIcon
                            className={cn("size-4 stroke-[3]", className)}
                            {...props}
                        />
                    );
                },
                DayButton: CalendarDayButton,
                WeekNumber: ({ children, ...props }) => {
                    return (
                        <td {...props}>
                            <div className="flex size-8 items-center justify-center text-center">
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
                "flex aspect-square w-full min-w-8 items-center justify-center",
                "text-sm font-bold transition-all duration-150",
                "hover:bg-gray-100 dark:hover:bg-gray-800",
                "focus:outline-none focus:ring-2 focus:ring-black dark:focus:ring-white focus:ring-inset",
                // Selected single day
                "data-[selected-single=true]:bg-[#FF6B6B] data-[selected-single=true]:text-black",
                "data-[selected-single=true]:border-2 data-[selected-single=true]:border-black",
                "data-[selected-single=true]:shadow-[2px_2px_0px_0px_#000000]",
                // Range styles
                "data-[range-start=true]:bg-[#FF6B6B] data-[range-start=true]:text-black",
                "data-[range-end=true]:bg-[#FF6B6B] data-[range-end=true]:text-black",
                "data-[range-middle=true]:bg-[#FFE66D] data-[range-middle=true]:text-black",
                // Disabled
                "disabled:opacity-50 disabled:cursor-not-allowed",
                defaultClassNames.day,
                className
            )}
            {...props}
        />
    );
}

export { Calendar, CalendarDayButton };
`;
