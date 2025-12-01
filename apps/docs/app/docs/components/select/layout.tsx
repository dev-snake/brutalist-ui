import { Metadata } from 'next';
import { componentsSEO, generateComponentMetadata } from '@/lib/seo';

export const metadata: Metadata = generateComponentMetadata(componentsSEO.select);

export default function SelectLayout({ children }: { children: React.ReactNode }) {
    return children;
}
