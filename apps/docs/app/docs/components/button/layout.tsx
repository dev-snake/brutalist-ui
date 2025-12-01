import { Metadata } from 'next';
import { componentsSEO, generateComponentMetadata } from '@/lib/seo';

export const metadata: Metadata = generateComponentMetadata(componentsSEO.button);

export default function ButtonLayout({ children }: { children: React.ReactNode }) {
    return children;
}
