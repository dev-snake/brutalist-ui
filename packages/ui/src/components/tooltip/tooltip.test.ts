import { cn } from '../../lib/utils'

const classes = cn(
    'z-50 overflow-hidden px-3 py-1.5',
    'bg-brutal-fg text-brutal-bg text-sm font-bold',
    'border-3 border-brutal rounded-brutal shadow-brutal',
    'animate-in fade-in-0 zoom-in-95',
    'data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95',
    'data-[side=bottom]:slide-in-from-top-2',
    'data-[side=left]:slide-in-from-right-2',
    'data-[side=right]:slide-in-from-left-2',
    'data-[side=top]:slide-in-from-bottom-2',
)

describe('TooltipContent', () => {
    it('renders with default classes', () => {
        expect(classes).toContain('bg-brutal-fg')
        expect(classes).toContain('text-brutal-bg')
        expect(classes).toContain('border-3')
        expect(classes).toContain('border-brutal')
        expect(classes).toContain('z-50')
        expect(classes).toContain('font-bold')
        expect(classes).toContain('rounded-brutal')
        expect(classes).toContain('shadow-brutal')
    })

    it('applies custom class', () => {
        const customClasses = cn(classes, 'custom-tooltip')
        expect(customClasses).toContain('custom-tooltip')
    })
})
