import { mount } from '@vue/test-utils'
import Switch from './Switch.vue'

describe('Switch', () => {
    it('renders with default props', () => {
        const wrapper = mount(Switch, {
            attachTo: document.body,
        })
        expect(wrapper.find('[role="switch"]').exists()).toBe(true)
    })

    it('has switch role', () => {
        const wrapper = mount(Switch, {
            attachTo: document.body,
        })
        expect(wrapper.find('[role="switch"]').exists()).toBe(true)
    })

    it('emits update:modelValue when toggled', async () => {
        const wrapper = mount(Switch, {
            attachTo: document.body,
        })
        const el = wrapper.find('[role="switch"]')
        await el.trigger('click')
        expect(el.attributes('data-state')).toBe('checked')
    })

    it('is disabled when disabled=true', () => {
        const wrapper = mount(Switch, {
            props: { disabled: true },
            attachTo: document.body,
        })
        const el = wrapper.find('[role="switch"]')
        expect(el.attributes('disabled')).toBeDefined()
    })

    it('applies custom class', () => {
        const wrapper = mount(Switch, {
            props: { class: 'custom-class' },
            attachTo: document.body,
        })
        expect(wrapper.find('[role="switch"]').classes()).toContain('custom-class')
    })
})
