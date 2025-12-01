import { Metadata } from 'next';
import { componentsSEO, generateComponentMetadata } from '@/lib/seo';

export const metadata: Metadata = generateComponentMetadata(componentsSEO.dialog);

export default function DialogLayout({ children }: { children: React.ReactNode }) {
    return children;
}
