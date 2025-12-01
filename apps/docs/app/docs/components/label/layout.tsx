import { Metadata } from 'next';
import { componentsSEO, generateComponentMetadata } from '@/lib/seo';

export const metadata: Metadata = generateComponentMetadata(componentsSEO.label);

export default function LabelLayout({ children }: { children: React.ReactNode }) {
    return children;
}
