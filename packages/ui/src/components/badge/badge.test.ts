import { mount } from '@vue/test-utils'
import Badge from './Badge.vue'

describe('Badge', () => {
    it('renders with default variant and size', () => {
        const wrapper = mount(Badge)
        const classes = wrapper.classes()
        expect(classes).toContain('inline-flex')
        expect(classes).toContain('items-center')
        expect(classes).toContain('border-3')
        expect(classes).toContain('border-brutal')
        expect(classes).toContain('font-bold')
        expect(classes).toContain('tracking-wide')
        expect(classes).toContain('transition-colors')
        expect(classes).toContain('bg-brutal-bg')
        expect(classes).toContain('text-brutal-fg')
        expect(classes).toContain('shadow-brutal-sm')
        expect(classes).toContain('px-3')
        expect(classes).toContain('py-1')
        expect(classes).toContain('text-sm')
    })

    describe('variant classes', () => {
        it('applies primary variant classes', () => {
            const wrapper = mount(Badge, { props: { variant: 'primary' } })
            expect(wrapper.classes()).toContain('bg-brutal-primary')
        })

        it('applies secondary variant classes', () => {
            const wrapper = mount(Badge, { props: { variant: 'secondary' } })
            expect(wrapper.classes()).toContain('bg-brutal-secondary')
        })

        it('applies accent variant classes', () => {
            const wrapper = mount(Badge, { props: { variant: 'accent' } })
            expect(wrapper.classes()).toContain('bg-brutal-accent')
        })

        it('applies danger variant classes', () => {
            const wrapper = mount(Badge, { props: { variant: 'danger' } })
            expect(wrapper.classes()).toContain('bg-brutal-destructive')
        })

        it('applies success variant classes', () => {
            const wrapper = mount(Badge, { props: { variant: 'success' } })
            expect(wrapper.classes()).toContain('bg-brutal-success')
        })

        it('applies outline variant classes', () => {
            const wrapper = mount(Badge, { props: { variant: 'outline' } })
            const classes = wrapper.classes()
            expect(classes).toContain('bg-transparent')
            expect(classes).toContain('text-brutal-fg')
        })
    })

    describe('size classes', () => {
        it('applies sm size classes', () => {
            const wrapper = mount(Badge, { props: { size: 'sm' } })
            const classes = wrapper.classes()
            expect(classes).toContain('px-2')
            expect(classes).toContain('py-0.5')
            expect(classes).toContain('text-xs')
        })

        it('applies default size classes', () => {
            const wrapper = mount(Badge, { props: { size: 'default' } })
            const classes = wrapper.classes()
            expect(classes).toContain('px-3')
            expect(classes).toContain('py-1')
            expect(classes).toContain('text-sm')
        })

        it('applies lg size classes', () => {
            const wrapper = mount(Badge, { props: { size: 'lg' } })
            const classes = wrapper.classes()
            expect(classes).toContain('px-4')
            expect(classes).toContain('py-1.5')
            expect(classes).toContain('text-base')
        })
    })

    it('renders slot content', () => {
        const wrapper = mount(Badge, {
            slots: { default: 'Hello Badge' },
        })
        expect(wrapper.text()).toBe('Hello Badge')
    })

    it('merges custom class prop', () => {
        const wrapper = mount(Badge, {
            props: { class: 'custom-class' },
        })
        expect(wrapper.classes()).toContain('custom-class')
    })
})
