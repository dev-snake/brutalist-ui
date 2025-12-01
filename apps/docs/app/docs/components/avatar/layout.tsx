import { Metadata } from 'next';
import { componentsSEO, generateComponentMetadata } from '@/lib/seo';

export const metadata: Metadata = generateComponentMetadata(componentsSEO.avatar);

export default function AvatarLayout({ children }: { children: React.ReactNode }) {
    return children;
}
