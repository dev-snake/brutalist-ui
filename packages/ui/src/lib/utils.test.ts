import { describe, it, expect } from 'vitest'
import { cn } from '../lib/utils'

describe('cn', () => {
    it('should merge class names', () => {
        expect(cn('foo', 'bar')).toBe('foo bar')
    })

    it('should handle conditional classes', () => {
        const condition = false
        expect(cn('foo', condition ? 'bar' : undefined, 'baz')).toBe('foo baz')
    })

    it('should merge tailwind classes correctly', () => {
        expect(cn('px-2 py-1', 'px-4')).toBe('py-1 px-4')
    })

    it('should handle undefined and null', () => {
        expect(cn('foo', undefined, null, 'bar')).toBe('foo bar')
    })
})
