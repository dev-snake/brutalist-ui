import { Metadata } from 'next';
import { componentsSEO, generateComponentMetadata } from '@/lib/seo';

export const metadata: Metadata = generateComponentMetadata(componentsSEO.skeleton);

export default function SkeletonLayout({ children }: { children: React.ReactNode }) {
    return children;
}
