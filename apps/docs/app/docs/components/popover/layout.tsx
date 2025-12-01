import { Metadata } from 'next';
import { componentsSEO, generateComponentMetadata } from '@/lib/seo';

export const metadata: Metadata = generateComponentMetadata(componentsSEO.popover);

export default function PopoverLayout({ children }: { children: React.ReactNode }) {
    return children;
}
