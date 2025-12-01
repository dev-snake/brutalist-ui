import { Metadata } from 'next';
import { componentsSEO, generateComponentMetadata } from '@/lib/seo';

export const metadata: Metadata = generateComponentMetadata(componentsSEO.toast);

export default function ToastLayout({ children }: { children: React.ReactNode }) {
    return children;
}
