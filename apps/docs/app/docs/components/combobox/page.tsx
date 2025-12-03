'use client';

import * as React from 'react';
import { Combobox, ComboboxMulti } from '@/components/ui';

const frameworks = [
    { value: 'next', label: 'Next.js' },
    { value: 'react', label: 'React' },
    { value: 'vue', label: 'Vue' },
    { value: 'svelte', label: 'Svelte' },
    { value: 'angular', label: 'Angular' },
    { value: 'astro', label: 'Astro' },
    { value: 'nuxt', label: 'Nuxt' },
    { value: 'remix', label: 'Remix' },
];

const languages = [
    { value: 'typescript', label: 'TypeScript' },
    { value: 'javascript', label: 'JavaScript' },
    { value: 'python', label: 'Python' },
    { value: 'rust', label: 'Rust' },
    { value: 'go', label: 'Go' },
    { value: 'java', label: 'Java', disabled: true },
    { value: 'csharp', label: 'C#' },
    { value: 'cpp', label: 'C++' },
];

const countries = [
    { value: 'us', label: '🇺🇸 United States' },
    { value: 'uk', label: '🇬🇧 United Kingdom' },
    { value: 'ca', label: '🇨🇦 Canada' },
    { value: 'au', label: '🇦🇺 Australia' },
    { value: 'de', label: '🇩🇪 Germany' },
    { value: 'fr', label: '🇫🇷 France' },
    { value: 'jp', label: '🇯🇵 Japan' },
    { value: 'vn', label: '🇻🇳 Vietnam' },
];

export default function ComboboxPage() {
    const [framework, setFramework] = React.useState('');
    const [language, setLanguage] = React.useState('');
    const [country, setCountry] = React.useState('');
    const [selectedLanguages, setSelectedLanguages] = React.useState<string[]>([]);
    const [selectedFrameworks, setSelectedFrameworks] = React.useState<string[]>([]);

    return (
        <div className="space-y-12">
            {/* Header */}
            <div className="space-y-4">
                <h1 className="text-4xl font-black">Combobox</h1>
                <p className="text-lg text-gray-600 dark:text-gray-400">
                    Autocomplete input and command palette with a list of suggestions. Built using a
                    composition of Popover and Command components.
                </p>
            </div>

            {/* Basic Example */}
            <section className="space-y-4">
                <h2 className="text-2xl font-black">Basic Combobox</h2>
                <p className="text-gray-600 dark:text-gray-400">
                    A simple combobox for selecting a framework.
                </p>
                <div className="flex flex-col items-center gap-4 p-8 bg-gray-100 dark:bg-gray-800 border-3 border-black dark:border-white">
                    <div className="w-full max-w-xs">
                        <Combobox
                            options={frameworks}
                            value={framework}
                            onValueChange={setFramework}
                            placeholder="Select framework..."
                            searchPlaceholder="Search frameworks..."
                        />
                    </div>
                    {framework && (
                        <p className="text-center font-bold">
                            Selected: {frameworks.find((f) => f.value === framework)?.label}
                        </p>
                    )}
                </div>
            </section>

            {/* With Disabled Options */}
            <section className="space-y-4">
                <h2 className="text-2xl font-black">With Disabled Options</h2>
                <p className="text-gray-600 dark:text-gray-400">Some options can be disabled.</p>
                <div className="flex flex-col items-center gap-4 p-8 bg-gray-100 dark:bg-gray-800 border-3 border-black dark:border-white">
                    <div className="w-full max-w-xs">
                        <Combobox
                            options={languages}
                            value={language}
                            onValueChange={setLanguage}
                            placeholder="Select language..."
                            searchPlaceholder="Search languages..."
                            emptyText="No language found."
                        />
                    </div>
                    {language && (
                        <p className="text-center font-bold">
                            Selected: {languages.find((l) => l.value === language)?.label}
                        </p>
                    )}
                    <p className="text-sm text-gray-500">Java is disabled</p>
                </div>
            </section>

            {/* With Emoji */}
            <section className="space-y-4">
                <h2 className="text-2xl font-black">With Custom Labels</h2>
                <p className="text-gray-600 dark:text-gray-400">
                    Labels can include emojis or any custom content.
                </p>
                <div className="flex flex-col items-center gap-4 p-8 bg-gray-100 dark:bg-gray-800 border-3 border-black dark:border-white">
                    <div className="w-full max-w-xs">
                        <Combobox
                            options={countries}
                            value={country}
                            onValueChange={setCountry}
                            placeholder="Select country..."
                            searchPlaceholder="Search countries..."
                        />
                    </div>
                    {country && (
                        <p className="text-center font-bold">
                            Selected: {countries.find((c) => c.value === country)?.label}
                        </p>
                    )}
                </div>
            </section>

            {/* Multi-select */}
            <section className="space-y-4">
                <h2 className="text-2xl font-black">Multi-Select Combobox</h2>
                <p className="text-gray-600 dark:text-gray-400">
                    Select multiple options from the list.
                </p>
                <div className="flex flex-col items-center gap-4 p-8 bg-gray-100 dark:bg-gray-800 border-3 border-black dark:border-white">
                    <div className="w-full max-w-xs">
                        <ComboboxMulti
                            options={languages}
                            value={selectedLanguages}
                            onValueChange={setSelectedLanguages}
                            placeholder="Select languages..."
                            searchPlaceholder="Search languages..."
                        />
                    </div>
                    {selectedLanguages.length > 0 && (
                        <p className="text-center font-bold">
                            Selected:{' '}
                            {selectedLanguages
                                .map((v) => languages.find((l) => l.value === v)?.label)
                                .join(', ')}
                        </p>
                    )}
                </div>
            </section>

            {/* Multi-select with max display */}
            <section className="space-y-4">
                <h2 className="text-2xl font-black">Multi-Select with Max Display</h2>
                <p className="text-gray-600 dark:text-gray-400">
                    Limit the number of displayed selections.
                </p>
                <div className="flex flex-col items-center gap-4 p-8 bg-gray-100 dark:bg-gray-800 border-3 border-black dark:border-white">
                    <div className="w-full max-w-xs">
                        <ComboboxMulti
                            options={frameworks}
                            value={selectedFrameworks}
                            onValueChange={setSelectedFrameworks}
                            placeholder="Select frameworks..."
                            searchPlaceholder="Search frameworks..."
                            maxDisplay={2}
                        />
                    </div>
                    {selectedFrameworks.length > 0 && (
                        <p className="text-center font-bold">
                            Selected:{' '}
                            {selectedFrameworks
                                .map((v) => frameworks.find((f) => f.value === v)?.label)
                                .join(', ')}
                        </p>
                    )}
                    <p className="text-sm text-gray-500">
                        Shows &quot;X selected&quot; when more than 2 items are selected
                    </p>
                </div>
            </section>

            {/* Installation */}
            <section className="space-y-4">
                <h2 className="text-2xl font-black">Installation</h2>
                <p className="text-gray-600 dark:text-gray-400">
                    The Combobox is built using a composition of the Popover and Command components.
                </p>
                <div className="bg-gray-900 text-gray-100 p-4 border-3 border-black dark:border-white font-mono text-sm overflow-x-auto">
                    <pre>npx brutalist@latest add combobox popover command</pre>
                </div>
            </section>

            {/* Props */}
            <section className="space-y-4">
                <h2 className="text-2xl font-black">Props</h2>
                <h3 className="text-xl font-black mt-6">Combobox</h3>
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
                                <td className="p-4 font-mono text-sm">options</td>
                                <td className="p-4 font-mono text-sm">ComboboxOption[]</td>
                                <td className="p-4 font-mono text-sm">required</td>
                                <td className="p-4">Array of options to display</td>
                            </tr>
                            <tr className="border-b border-gray-200 dark:border-gray-700">
                                <td className="p-4 font-mono text-sm">value</td>
                                <td className="p-4 font-mono text-sm">string</td>
                                <td className="p-4 font-mono text-sm">-</td>
                                <td className="p-4">Selected value</td>
                            </tr>
                            <tr className="border-b border-gray-200 dark:border-gray-700">
                                <td className="p-4 font-mono text-sm">onValueChange</td>
                                <td className="p-4 font-mono text-sm">
                                    (value: string) =&gt; void
                                </td>
                                <td className="p-4 font-mono text-sm">-</td>
                                <td className="p-4">Callback when value changes</td>
                            </tr>
                            <tr className="border-b border-gray-200 dark:border-gray-700">
                                <td className="p-4 font-mono text-sm">placeholder</td>
                                <td className="p-4 font-mono text-sm">string</td>
                                <td className="p-4 font-mono text-sm">
                                    &quot;Select option...&quot;
                                </td>
                                <td className="p-4">Placeholder text</td>
                            </tr>
                            <tr className="border-b border-gray-200 dark:border-gray-700">
                                <td className="p-4 font-mono text-sm">searchPlaceholder</td>
                                <td className="p-4 font-mono text-sm">string</td>
                                <td className="p-4 font-mono text-sm">&quot;Search...&quot;</td>
                                <td className="p-4">Search input placeholder</td>
                            </tr>
                            <tr className="border-b border-gray-200 dark:border-gray-700">
                                <td className="p-4 font-mono text-sm">emptyText</td>
                                <td className="p-4 font-mono text-sm">string</td>
                                <td className="p-4 font-mono text-sm">
                                    &quot;No results found.&quot;
                                </td>
                                <td className="p-4">Text when no results</td>
                            </tr>
                            <tr className="border-b border-gray-200 dark:border-gray-700">
                                <td className="p-4 font-mono text-sm">disabled</td>
                                <td className="p-4 font-mono text-sm">boolean</td>
                                <td className="p-4 font-mono text-sm">false</td>
                                <td className="p-4">Disable the combobox</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <h3 className="text-xl font-black mt-6">ComboboxMulti</h3>
                <p className="text-gray-600 dark:text-gray-400">Same props as Combobox, plus:</p>
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
                                <td className="p-4 font-mono text-sm">value</td>
                                <td className="p-4 font-mono text-sm">string[]</td>
                                <td className="p-4 font-mono text-sm">[]</td>
                                <td className="p-4">Array of selected values</td>
                            </tr>
                            <tr className="border-b border-gray-200 dark:border-gray-700">
                                <td className="p-4 font-mono text-sm">onValueChange</td>
                                <td className="p-4 font-mono text-sm">
                                    (value: string[]) =&gt; void
                                </td>
                                <td className="p-4 font-mono text-sm">-</td>
                                <td className="p-4">Callback when values change</td>
                            </tr>
                            <tr className="border-b border-gray-200 dark:border-gray-700">
                                <td className="p-4 font-mono text-sm">maxDisplay</td>
                                <td className="p-4 font-mono text-sm">number</td>
                                <td className="p-4 font-mono text-sm">3</td>
                                <td className="p-4">
                                    Max items to show before &quot;X selected&quot;
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <h3 className="text-xl font-black mt-6">ComboboxOption</h3>
                <div className="overflow-x-auto">
                    <table className="w-full border-3 border-black dark:border-white">
                        <thead className="bg-[#FFE66D] dark:bg-[#FFE66D]">
                            <tr>
                                <th className="text-left p-4 font-black border-b-3 border-black text-black">
                                    Property
                                </th>
                                <th className="text-left p-4 font-black border-b-3 border-black text-black">
                                    Type
                                </th>
                                <th className="text-left p-4 font-black border-b-3 border-black text-black">
                                    Description
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="border-b border-gray-200 dark:border-gray-700">
                                <td className="p-4 font-mono text-sm">value</td>
                                <td className="p-4 font-mono text-sm">string</td>
                                <td className="p-4">Unique value for the option</td>
                            </tr>
                            <tr className="border-b border-gray-200 dark:border-gray-700">
                                <td className="p-4 font-mono text-sm">label</td>
                                <td className="p-4 font-mono text-sm">string</td>
                                <td className="p-4">Display label</td>
                            </tr>
                            <tr className="border-b border-gray-200 dark:border-gray-700">
                                <td className="p-4 font-mono text-sm">disabled</td>
                                <td className="p-4 font-mono text-sm">boolean</td>
                                <td className="p-4">Whether the option is disabled</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </section>
        </div>
    );
}
