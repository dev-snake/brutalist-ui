'use client';

import * as React from 'react';
import { Calendar } from 'brutalist-ui/calendar';
import { InstallationTabs } from '@/components/installation-tabs';

export default function CalendarPage() {
    const [date, setDate] = React.useState<Date | undefined>(new Date());
    const [dateRange, setDateRange] = React.useState<{
        from: Date | undefined;
        to: Date | undefined;
    }>({
        from: undefined,
        to: undefined,
    });

    return (
        <div className="space-y-12">
            {/* Header */}
            <div className="space-y-4">
                <h1 className="text-4xl font-black">Calendar</h1>
                <p className="text-lg text-gray-600 dark:text-gray-400">
                    A date picker component with Neo-Brutalism styling. Built on top of
                    react-day-picker.
                </p>
            </div>

            {/* Installation */}
            <section className="space-y-4">
                <h2 className="text-2xl font-black">Installation</h2>
                <InstallationTabs componentName="calendar" dependencies={['react-day-picker']} />
            </section>

            {/* Basic Calendar */}
            <section className="space-y-4">
                <h2 className="text-2xl font-black">Basic Calendar</h2>
                <p className="text-gray-600 dark:text-gray-400">
                    A simple calendar for selecting a single date.
                </p>
                <div className="flex justify-center p-8 bg-gray-100 dark:bg-gray-800 border-3 border-black dark:border-white">
                    <Calendar mode="single" selected={date} onSelect={setDate} />
                </div>
                {date && (
                    <p className="text-center font-bold">Selected: {date.toLocaleDateString()}</p>
                )}
            </section>

            {/* Range Selection */}
            <section className="space-y-4">
                <h2 className="text-2xl font-black">Range Selection</h2>
                <p className="text-gray-600 dark:text-gray-400">
                    Select a range of dates with visual feedback.
                </p>
                <div className="flex justify-center p-8 bg-gray-100 dark:bg-gray-800 border-3 border-black dark:border-white">
                    <Calendar
                        mode="range"
                        selected={dateRange}
                        onSelect={(range) =>
                            setDateRange({
                                from: range?.from,
                                to: range?.to,
                            })
                        }
                    />
                </div>
                {dateRange.from && dateRange.to && (
                    <p className="text-center font-bold">
                        Range: {dateRange.from.toLocaleDateString()} -{' '}
                        {dateRange.to.toLocaleDateString()}
                    </p>
                )}
            </section>

            {/* With Week Numbers */}
            <section className="space-y-4">
                <h2 className="text-2xl font-black">With Week Numbers</h2>
                <p className="text-gray-600 dark:text-gray-400">
                    Display week numbers alongside the calendar.
                </p>
                <div className="flex justify-center p-8 bg-gray-100 dark:bg-gray-800 border-3 border-black dark:border-white">
                    <Calendar mode="single" showWeekNumber />
                </div>
            </section>

            {/* Disabled Dates */}
            <section className="space-y-4">
                <h2 className="text-2xl font-black">Disabled Dates</h2>
                <p className="text-gray-600 dark:text-gray-400">
                    Disable specific dates or date ranges.
                </p>
                <div className="flex justify-center p-8 bg-gray-100 dark:bg-gray-800 border-3 border-black dark:border-white">
                    <Calendar
                        mode="single"
                        disabled={[
                            { dayOfWeek: [0, 6] }, // Disable weekends
                            { before: new Date() }, // Disable past dates
                        ]}
                    />
                </div>
                <p className="text-center text-sm text-gray-500">
                    Weekends and past dates are disabled
                </p>
            </section>

            {/* Props */}
            <section className="space-y-4">
                <h2 className="text-2xl font-black">Props</h2>
                <div className="overflow-x-auto">
                    <table className="w-full border-3 border-black dark:border-white">
                        <thead className="bg-[#FFE66D] dark:bg-[#FFE66D]">
                            <tr>
                                <th className="text-left p-4 font-black border-b-3 border-black text-black">
                                    Prop
                                </th>
                                <th className="text-left p-4 font-black border-b-3 border-black text-black">
                                    Type
                                </th>
                                <th className="text-left p-4 font-black border-b-3 border-black text-black">
                                    Default
                                </th>
                                <th className="text-left p-4 font-black border-b-3 border-black text-black">
                                    Description
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="border-b border-gray-200 dark:border-gray-700">
                                <td className="p-4 font-mono text-sm">mode</td>
                                <td className="p-4 font-mono text-sm">
                                    &quot;single&quot; | &quot;range&quot; | &quot;multiple&quot;
                                </td>
                                <td className="p-4 font-mono text-sm">&quot;single&quot;</td>
                                <td className="p-4">Selection mode</td>
                            </tr>
                            <tr className="border-b border-gray-200 dark:border-gray-700">
                                <td className="p-4 font-mono text-sm">selected</td>
                                <td className="p-4 font-mono text-sm">Date | DateRange | Date[]</td>
                                <td className="p-4 font-mono text-sm">-</td>
                                <td className="p-4">Selected date(s)</td>
                            </tr>
                            <tr className="border-b border-gray-200 dark:border-gray-700">
                                <td className="p-4 font-mono text-sm">onSelect</td>
                                <td className="p-4 font-mono text-sm">function</td>
                                <td className="p-4 font-mono text-sm">-</td>
                                <td className="p-4">Callback when date is selected</td>
                            </tr>
                            <tr className="border-b border-gray-200 dark:border-gray-700">
                                <td className="p-4 font-mono text-sm">numberOfMonths</td>
                                <td className="p-4 font-mono text-sm">number</td>
                                <td className="p-4 font-mono text-sm">1</td>
                                <td className="p-4">Number of months to display</td>
                            </tr>
                            <tr className="border-b border-gray-200 dark:border-gray-700">
                                <td className="p-4 font-mono text-sm">showWeekNumber</td>
                                <td className="p-4 font-mono text-sm">boolean</td>
                                <td className="p-4 font-mono text-sm">false</td>
                                <td className="p-4">Show week numbers</td>
                            </tr>
                            <tr className="border-b border-gray-200 dark:border-gray-700">
                                <td className="p-4 font-mono text-sm">showOutsideDays</td>
                                <td className="p-4 font-mono text-sm">boolean</td>
                                <td className="p-4 font-mono text-sm">true</td>
                                <td className="p-4">Show days outside current month</td>
                            </tr>
                            <tr>
                                <td className="p-4 font-mono text-sm">disabled</td>
                                <td className="p-4 font-mono text-sm">Matcher | Matcher[]</td>
                                <td className="p-4 font-mono text-sm">-</td>
                                <td className="p-4">Dates to disable</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </section>
        </div>
    );
}
