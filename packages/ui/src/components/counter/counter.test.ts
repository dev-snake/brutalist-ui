import { mount } from '@vue/test-utils'
import Counter from './Counter.vue'

function getDisplaySpan(wrapper: ReturnType<typeof mount>) {
    return wrapper.find('[aria-live="polite"]')
}

describe('Counter', () => {
    let rafCallCount: number

    beforeEach(() => {
        rafCallCount = 0
        vi.stubGlobal('requestAnimationFrame', (cb: FrameRequestCallback) => {
            rafCallCount++
            cb(rafCallCount === 1 ? 0 : 3000)
            return rafCallCount
        })
        vi.stubGlobal('cancelAnimationFrame', () => {})
    })

    afterEach(() => {
        vi.unstubAllGlobals()
    })

    it('renders with default size classes', () => {
        const wrapper = mount(Counter, {
            props: { to: 100 },
        })
        const display = getDisplaySpan(wrapper)
        const classes = display.classes()
        expect(classes).toContain('inline-flex')
        expect(classes).toContain('items-baseline')
        expect(classes).toContain('tabular-nums')
        expect(classes).toContain('font-black')
        expect(classes).toContain('text-brutal-fg')
        expect(classes).toContain('text-4xl')
    })

    it('applies sm size variant classes', () => {
        const wrapper = mount(Counter, {
            props: { to: 50, size: 'sm' },
        })
        expect(getDisplaySpan(wrapper).classes()).toContain('text-2xl')
    })

    it('applies lg size variant classes', () => {
        const wrapper = mount(Counter, {
            props: { to: 50, size: 'lg' },
        })
        expect(getDisplaySpan(wrapper).classes()).toContain('text-6xl')
    })

    it('applies xl size variant classes', () => {
        const wrapper = mount(Counter, {
            props: { to: 50, size: 'xl' },
        })
        expect(getDisplaySpan(wrapper).classes()).toContain('text-8xl')
    })

    it('applies custom class', () => {
        const wrapper = mount(Counter, {
            props: { to: 100, class: 'my-counter' },
        })
        expect(getDisplaySpan(wrapper).classes()).toContain('my-counter')
    })

    it('shows prefix in display', () => {
        const wrapper = mount(Counter, {
            props: { to: 100, prefix: '$' },
        })
        expect(wrapper.text()).toContain('$')
    })

    it('shows suffix in display', () => {
        const wrapper = mount(Counter, {
            props: { to: 100, suffix: '%' },
        })
        expect(wrapper.text()).toContain('%')
    })

    it('has aria-live="polite"', () => {
        const wrapper = mount(Counter, {
            props: { to: 100 },
        })
        expect(getDisplaySpan(wrapper).attributes('aria-live')).toBe('polite')
    })

    it('has aria-label attribute', () => {
        const wrapper = mount(Counter, {
            props: { to: 100 },
        })
        expect(getDisplaySpan(wrapper).attributes('aria-label')).toBeTruthy()
    })

    it('renders as span element', () => {
        const wrapper = mount(Counter, {
            props: { to: 100 },
        })
        expect(wrapper.element.tagName).toBe('SPAN')
    })

    it('exposes start and stop methods', () => {
        const wrapper = mount(Counter, {
            props: { to: 100 },
        })
        expect(typeof (wrapper.vm as any).start).toBe('function')
        expect(typeof (wrapper.vm as any).stop).toBe('function')
    })
})
