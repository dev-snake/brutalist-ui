import { mount } from '@vue/test-utils'
import Progress from './Progress.vue'

describe('Progress', () => {
    it('renders with default modelValue and max', () => {
        const wrapper = mount(Progress, { attachTo: document.body })
        const classes = wrapper.classes()
        expect(classes).toContain('relative')
        expect(classes).toContain('h-6')
        expect(classes).toContain('w-full')
        expect(classes).toContain('overflow-hidden')
        expect(classes).toContain('rounded-brutal')
        expect(classes).toContain('border-3')
        expect(classes).toContain('border-brutal')
        expect(classes).toContain('bg-brutal-bg')
        expect(classes).toContain('shadow-brutal-sm')
    })

    it('has progress role and aria attributes', () => {
        const wrapper = mount(Progress, { attachTo: document.body })
        expect(wrapper.attributes('role')).toBe('progressbar')
    })

    it('updates progress indicator style based on modelValue', async () => {
        const wrapper = mount(Progress, {
            props: { modelValue: 50, max: 100 },
            attachTo: document.body,
        })
        const indicator = wrapper.find('.bg-brutal-primary')
        expect(indicator.exists()).toBe(true)
        const style = indicator.attributes('style')
        expect(style).toContain('translateX(-50%)')

        await wrapper.setProps({ modelValue: 75 })
        const updatedStyle = indicator.attributes('style')
        expect(updatedStyle).toContain('translateX(-25%)')
    })

    it('shows full progress at 100%', () => {
        const wrapper = mount(Progress, {
            props: { modelValue: 100, max: 100 },
            attachTo: document.body,
        })
        const indicator = wrapper.find('.bg-brutal-primary')
        const style = indicator.attributes('style')
        expect(style).toContain('translateX(-0%)')
    })

    it('shows zero progress at 0', () => {
        const wrapper = mount(Progress, {
            props: { modelValue: 0, max: 100 },
            attachTo: document.body,
        })
        const indicator = wrapper.find('.bg-brutal-primary')
        const style = indicator.attributes('style')
        expect(style).toContain('translateX(-100%)')
    })

    it('applies custom class', () => {
        const wrapper = mount(Progress, {
            props: { class: 'my-progress' },
            attachTo: document.body,
        })
        expect(wrapper.classes()).toContain('my-progress')
    })

    it('has aria-valuemin and aria-valuemax attributes', () => {
        const wrapper = mount(Progress, {
            props: { modelValue: 30, max: 100 },
            attachTo: document.body,
        })
        expect(wrapper.attributes('aria-valuemin')).toBe('0')
        expect(wrapper.attributes('aria-valuemax')).toBe('100')
        expect(wrapper.attributes('aria-valuenow')).toBe('30')
    })
})
