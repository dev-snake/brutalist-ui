import { Metadata } from 'next';
import { componentsSEO, generateComponentMetadata } from '@/lib/seo';

export const metadata: Metadata = generateComponentMetadata(componentsSEO.card);

export default function CardLayout({ children }: { children: React.ReactNode }) {
    return children;
}
