import { Sidebar } from '@/components/sidebar';

export default function DocsLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className="flex min-h-screen bg-white dark:bg-gray-950">
            <Sidebar />
            <main className="flex-1 p-4 pt-16 lg:pt-8 lg:p-8 w-full lg:max-w-4xl overflow-x-hidden">
                <div className="mdx-content">{children}</div>
            </main>
        </div>
    );
}
