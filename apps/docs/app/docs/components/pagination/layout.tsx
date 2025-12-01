import { Metadata } from 'next';
import { componentsSEO, generateComponentMetadata } from '@/lib/seo';

export const metadata: Metadata = generateComponentMetadata(componentsSEO.pagination);

export default function PaginationLayout({ children }: { children: React.ReactNode }) {
    return children;
}
