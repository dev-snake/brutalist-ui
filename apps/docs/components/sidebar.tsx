'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from 'brutalist-ui';
import { useState } from 'react';
import { Menu, X, Heart } from 'lucide-react';
import { ThemeToggle } from './theme-toggle';

const navigation = [
    { name: 'Getting Started', href: '/docs' },
    { name: 'Installation', href: '/docs/installation' },
    {
        name: 'Components',
        href: '/docs/components',
        children: [
            { name: 'Alert', href: '/docs/components/alert' },
            { name: 'Avatar', href: '/docs/components/avatar' },
            { name: 'Badge', href: '/docs/components/badge' },
            { name: 'Button', href: '/docs/components/button' },
            { name: 'Card', href: '/docs/components/card' },
            { name: 'Checkbox', href: '/docs/components/checkbox' },
            { name: 'Dialog', href: '/docs/components/dialog' },
            { name: 'Dropdown Menu', href: '/docs/components/dropdown-menu' },
            { name: 'Input', href: '/docs/components/input' },
            { name: 'Label', href: '/docs/components/label' },
            { name: 'Pagination', href: '/docs/components/pagination' },
            { name: 'Popover', href: '/docs/components/popover' },
            { name: 'Select', href: '/docs/components/select' },
            { name: 'Separator', href: '/docs/components/separator' },
            { name: 'Skeleton', href: '/docs/components/skeleton' },
            { name: 'Spinner', href: '/docs/components/spinner' },
            { name: 'Switch', href: '/docs/components/switch' },
            { name: 'Table', href: '/docs/components/table' },
            { name: 'Tabs', href: '/docs/components/tabs' },
            { name: 'Textarea', href: '/docs/components/textarea' },
            { name: 'Toast', href: '/docs/components/toast' },
            { name: 'Tooltip', href: '/docs/components/tooltip' },
        ],
    },
];

export function Sidebar() {
    const pathname = usePathname();
    const [isOpen, setIsOpen] = useState(false);

    const toggleSidebar = () => setIsOpen(!isOpen);
    const closeSidebar = () => setIsOpen(false);

    return (
        <>
            {/* Mobile Menu Button */}
            <button
                onClick={toggleSidebar}
                className="lg:hidden fixed top-4 left-4 z-50 p-2 bg-white dark:bg-gray-900 border-3 border-black dark:border-white shadow-brutal"
                aria-label="Toggle menu"
            >
                {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>

            {/* Theme Toggle for Mobile */}
            <div className="lg:hidden fixed top-4 right-4 z-50">
                <ThemeToggle />
            </div>

            {/* Overlay for mobile */}
            {isOpen && (
                <div className="lg:hidden fixed inset-0 bg-black/50 z-30" onClick={closeSidebar} />
            )}

            {/* Sidebar */}
            <aside
                className={cn(
                    'fixed lg:sticky top-0 left-0 z-40 w-64 border-r-3 border-black dark:border-white min-h-screen h-screen overflow-y-auto p-6 bg-white dark:bg-gray-950 transition-transform duration-300 ease-in-out',
                    isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'
                )}
            >
                <div className="flex items-center justify-between mb-8">
                    <Link href="/" className="block" onClick={closeSidebar}>
                        <h1 className="text-xl font-black">Brutalist UI</h1>
                    </Link>
                    <div className="hidden lg:block">
                        <ThemeToggle />
                    </div>
                </div>
                <nav className="space-y-2 pb-8">
                    {navigation.map((item) => (
                        <div key={item.name}>
                            <Link
                                href={item.href}
                                onClick={closeSidebar}
                                className={cn(
                                    'block px-3 py-2 font-bold transition-colors border-3 border-transparent',
                                    pathname === item.href
                                        ? 'bg-[#FFE66D] text-black border-black shadow-[2px_2px_0px_0px_#000000]'
                                        : 'hover:bg-gray-100 dark:hover:bg-gray-800'
                                )}
                            >
                                {item.name}
                            </Link>
                            {item.children && (
                                <div className="ml-4 mt-1 space-y-1">
                                    {item.children.map((child) => (
                                        <Link
                                            key={child.name}
                                            href={child.href}
                                            onClick={closeSidebar}
                                            className={cn(
                                                'block px-3 py-1.5 text-sm font-medium transition-colors',
                                                pathname === child.href
                                                    ? 'bg-[#FFE66D] text-black border-2 border-black'
                                                    : 'hover:bg-gray-100 dark:hover:bg-gray-800'
                                            )}
                                        >
                                            {child.name}
                                        </Link>
                                    ))}
                                </div>
                            )}
                        </div>
                    ))}

                    {/* Sponsor Button */}
                    <div className="pt-4 mt-4 border-t-2 border-gray-200 dark:border-gray-700">
                        <Link
                            href="/sponsor"
                            onClick={closeSidebar}
                            className={cn(
                                'flex items-center gap-2 px-3 py-2 font-bold transition-all border-3',
                                pathname === '/sponsor'
                                    ? 'bg-[#FF6B6B] text-white border-black shadow-[2px_2px_0px_0px_#000000]'
                                    : 'bg-[#FF6B6B] text-white border-black hover:shadow-[4px_4px_0px_0px_#000000] hover:-translate-y-0.5'
                            )}
                        >
                            <Heart className="w-4 h-4" fill="white" />
                            Sponsor
                        </Link>
                    </div>
                </nav>
            </aside>
        </>
    );
}
