import { mount } from '@vue/test-utils'
import { en } from '@/locales/en'
import { LOCALE_INJECTION_KEY } from '@/composables/useLocale'
import Spinner from './Spinner.vue'
import BlockSpinner from './BlockSpinner.vue'
import DotsSpinner from './DotsSpinner.vue'
import BarsSpinner from './BarsSpinner.vue'

const globalProvide = { provide: { [LOCALE_INJECTION_KEY]: en } }

describe('Spinner', () => {
    it('renders with default props', () => {
        const wrapper = mount(Spinner, { global: globalProvide })
        const classes = wrapper.classes()
        expect(classes).toContain('inline-block')
        expect(classes).toContain('rounded-full')
        expect(classes).toContain('animate-spin')
        expect(classes).toContain('border-3')
        expect(classes).toContain('border-brutal')
        expect(classes).toContain('h-8')
        expect(classes).toContain('w-8')
    })

    it('has role status and aria-label', () => {
        const wrapper = mount(Spinner, { global: globalProvide })
        expect(wrapper.attributes('role')).toBe('status')
        expect(wrapper.attributes('aria-label')).toBe('Loading...')
    })

    it('renders sr-only label text', () => {
        const wrapper = mount(Spinner, { global: globalProvide })
        const srOnly = wrapper.find('.sr-only')
        expect(srOnly.text()).toBe('Loading...')
    })

    it('applies variant classes', () => {
        const wrapper = mount(Spinner, { props: { variant: 'primary' }, global: globalProvide })
        expect(wrapper.classes()).toContain('border-brutal-primary')
    })

    it('applies size classes', () => {
        const wrapper = mount(Spinner, { props: { size: 'lg' }, global: globalProvide })
        expect(wrapper.classes()).toContain('h-12')
        expect(wrapper.classes()).toContain('w-12')
    })

    it('merges custom class prop', () => {
        const wrapper = mount(Spinner, {
            props: { class: 'custom-spinner' },
            global: globalProvide,
        })
        expect(wrapper.classes()).toContain('custom-spinner')
    })
})

describe('BlockSpinner', () => {
    it('renders with default props', () => {
        const wrapper = mount(BlockSpinner, { global: globalProvide })
        const classes = wrapper.classes()
        expect(classes).toContain('grid')
        expect(classes).toContain('grid-cols-2')
        expect(classes).toContain('gap-1')
    })

    it('has role status and aria-label', () => {
        const wrapper = mount(BlockSpinner, { global: globalProvide })
        expect(wrapper.attributes('role')).toBe('status')
        expect(wrapper.attributes('aria-label')).toBe('Loading...')
    })

    it('renders 4 block elements with animate-pulse', () => {
        const wrapper = mount(BlockSpinner, { global: globalProvide })
        const blocks = wrapper.findAll('div.animate-pulse')
        expect(blocks.length).toBe(4)
    })

    it('applies size classes', () => {
        const wrapper = mount(BlockSpinner, { props: { size: 'lg' }, global: globalProvide })
        expect(wrapper.classes()).toContain('h-12')
        expect(wrapper.classes()).toContain('w-12')
    })

    it('renders sr-only label text', () => {
        const wrapper = mount(BlockSpinner, { global: globalProvide })
        const srOnly = wrapper.find('.sr-only')
        expect(srOnly.text()).toBe('Loading...')
    })

    it('merges custom class prop', () => {
        const wrapper = mount(BlockSpinner, {
            props: { class: 'custom-block' },
            global: globalProvide,
        })
        expect(wrapper.classes()).toContain('custom-block')
    })
})

describe('DotsSpinner', () => {
    it('renders with default props', () => {
        const wrapper = mount(DotsSpinner, { global: globalProvide })
        const classes = wrapper.classes()
        expect(classes).toContain('flex')
        expect(classes).toContain('items-center')
        expect(classes).toContain('gap-2')
    })

    it('has role status and aria-label', () => {
        const wrapper = mount(DotsSpinner, { global: globalProvide })
        expect(wrapper.attributes('role')).toBe('status')
        expect(wrapper.attributes('aria-label')).toBe('Loading...')
    })

    it('renders 3 dot elements with animate-bounce', () => {
        const wrapper = mount(DotsSpinner, { global: globalProvide })
        const dots = wrapper.findAll('div.animate-bounce')
        expect(dots.length).toBe(3)
    })

    it('applies size classes', () => {
        const wrapper = mount(DotsSpinner, { props: { size: 'lg' }, global: globalProvide })
        expect(wrapper.classes()).toContain('gap-3')
    })

    it('renders sr-only label text', () => {
        const wrapper = mount(DotsSpinner, { global: globalProvide })
        const srOnly = wrapper.find('.sr-only')
        expect(srOnly.text()).toBe('Loading...')
    })

    it('merges custom class prop', () => {
        const wrapper = mount(DotsSpinner, {
            props: { class: 'custom-dots' },
            global: globalProvide,
        })
        expect(wrapper.classes()).toContain('custom-dots')
    })
})

describe('BarsSpinner', () => {
    it('renders with default props', () => {
        const wrapper = mount(BarsSpinner, { global: globalProvide })
        const classes = wrapper.classes()
        expect(classes).toContain('flex')
        expect(classes).toContain('items-end')
        expect(classes).toContain('gap-0.5')
    })

    it('has role status and aria-label', () => {
        const wrapper = mount(BarsSpinner, { global: globalProvide })
        expect(wrapper.attributes('role')).toBe('status')
        expect(wrapper.attributes('aria-label')).toBe('Loading...')
    })

    it('renders 5 bar elements with animate-pulse', () => {
        const wrapper = mount(BarsSpinner, { global: globalProvide })
        const bars = wrapper.findAll('div.animate-pulse')
        expect(bars.length).toBe(5)
    })

    it('applies size classes', () => {
        const wrapper = mount(BarsSpinner, { props: { size: 'lg' }, global: globalProvide })
        expect(wrapper.classes()).toContain('h-8')
    })

    it('renders sr-only label text', () => {
        const wrapper = mount(BarsSpinner, { global: globalProvide })
        const srOnly = wrapper.find('.sr-only')
        expect(srOnly.text()).toBe('Loading...')
    })

    it('merges custom class prop', () => {
        const wrapper = mount(BarsSpinner, {
            props: { class: 'custom-bars' },
            global: globalProvide,
        })
        expect(wrapper.classes()).toContain('custom-bars')
    })
})
