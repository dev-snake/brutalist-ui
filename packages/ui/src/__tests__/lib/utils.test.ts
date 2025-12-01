import { describe, it, expect } from 'vitest';
import { cn } from '../../lib/utils';

describe('cn utility function', () => {
    it('merges class names correctly', () => {
        const result = cn('class1', 'class2');
        expect(result).toBe('class1 class2');
    });

    it('handles conditional classes', () => {
        const result = cn('base', true && 'included', false && 'excluded');
        expect(result).toBe('base included');
    });

    it('handles undefined and null values', () => {
        const result = cn('base', undefined, null, 'end');
        expect(result).toBe('base end');
    });

    it('merges Tailwind classes correctly', () => {
        const result = cn('px-4 py-2', 'px-6');
        expect(result).toBe('py-2 px-6');
    });

    it('handles array of classes', () => {
        const result = cn(['class1', 'class2']);
        expect(result).toBe('class1 class2');
    });

    it('handles object syntax', () => {
        const result = cn({
            class1: true,
            class2: false,
            class3: true,
        });
        expect(result).toBe('class1 class3');
    });

    it('handles empty input', () => {
        const result = cn();
        expect(result).toBe('');
    });

    it('handles complex Tailwind merging', () => {
        const result = cn('bg-red-500 text-white', 'bg-blue-500', 'hover:bg-green-500');
        expect(result).toBe('text-white bg-blue-500 hover:bg-green-500');
    });

    it('preserves non-conflicting classes', () => {
        const result = cn('border-2 rounded-lg shadow-md', 'p-4 m-2');
        expect(result).toBe('border-2 rounded-lg shadow-md p-4 m-2');
    });
});
