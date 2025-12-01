import { Metadata } from 'next';
import { componentsSEO, generateComponentMetadata } from '@/lib/seo';

export const metadata: Metadata = generateComponentMetadata(componentsSEO.tabs);

export default function TabsLayout({ children }: { children: React.ReactNode }) {
    return children;
}
