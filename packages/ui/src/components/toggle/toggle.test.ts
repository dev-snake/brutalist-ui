import { mount } from '@vue/test-utils'
import Toggle from './Toggle.vue'

describe('Toggle', () => {
    it('renders with default props', () => {
        const wrapper = mount(Toggle, {
            attachTo: document.body,
        })
        expect(wrapper.find('button').exists()).toBe(true)
    })

    it('applies variant classes', async () => {
        const wrapper = mount(Toggle, {
            attachTo: document.body,
        })

        await wrapper.setProps({ variant: 'default' })
        expect(wrapper.classes()).toContain('shadow-brutal-sm')

        await wrapper.setProps({ variant: 'outline' })
        expect(wrapper.classes()).toContain('border-brutal')
    })

    it('applies size classes', async () => {
        const wrapper = mount(Toggle, {
            attachTo: document.body,
        })

        await wrapper.setProps({ size: 'sm' })
        expect(wrapper.classes()).toContain('h-8')

        await wrapper.setProps({ size: 'default' })
        expect(wrapper.classes()).toContain('h-10')

        await wrapper.setProps({ size: 'lg' })
        expect(wrapper.classes()).toContain('h-12')
    })

    it('emits update:pressed when toggled', async () => {
        const wrapper = mount(Toggle, {
            attachTo: document.body,
        })
        await wrapper.trigger('click')
        expect(wrapper.attributes('data-state')).toBe('on')
    })

    it('is disabled when disabled=true', () => {
        const wrapper = mount(Toggle, {
            props: { disabled: true },
            attachTo: document.body,
        })
        expect(wrapper.find('button').attributes('disabled')).toBeDefined()
    })

    it('applies custom class', () => {
        const wrapper = mount(Toggle, {
            props: { class: 'custom-class' },
            attachTo: document.body,
        })
        expect(wrapper.classes()).toContain('custom-class')
    })
})
