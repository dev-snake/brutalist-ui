import { Metadata } from 'next';
import { componentsSEO, generateComponentMetadata } from '@/lib/seo';

export const metadata: Metadata = generateComponentMetadata(componentsSEO.tooltip);

export default function TooltipLayout({ children }: { children: React.ReactNode }) {
    return children;
}
