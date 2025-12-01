import { Metadata } from 'next';
import { componentsSEO, generateComponentMetadata } from '@/lib/seo';

export const metadata: Metadata = generateComponentMetadata(componentsSEO.badge);

export default function BadgeLayout({ children }: { children: React.ReactNode }) {
    return children;
}
