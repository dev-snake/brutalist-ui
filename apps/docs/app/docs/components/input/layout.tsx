import { Metadata } from 'next';
import { componentsSEO, generateComponentMetadata } from '@/lib/seo';

export const metadata: Metadata = generateComponentMetadata(componentsSEO.input);

export default function InputLayout({ children }: { children: React.ReactNode }) {
    return children;
}
