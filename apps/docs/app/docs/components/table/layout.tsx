import { Metadata } from 'next';
import { componentsSEO, generateComponentMetadata } from '@/lib/seo';

export const metadata: Metadata = generateComponentMetadata(componentsSEO.table);

export default function TableLayout({ children }: { children: React.ReactNode }) {
    return children;
}
