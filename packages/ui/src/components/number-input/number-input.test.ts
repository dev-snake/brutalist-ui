import { mount } from '@vue/test-utils'
import NumberInput from './NumberInput.vue'

describe('NumberInput', () => {
    it('renders with split layout by default', () => {
        const wrapper = mount(NumberInput)
        const root = wrapper.find('[role="group"]')
        expect(root.exists()).toBe(true)
        expect(root.classes()).toContain('flex')
        expect(root.classes()).toContain('border-3')
        expect(root.classes()).toContain('border-brutal')
        expect(root.classes()).toContain('shadow-brutal')
        expect(root.classes()).toContain('rounded-brutal')
    })

    it('renders with stacked layout', () => {
        const wrapper = mount(NumberInput, {
            props: { layout: 'stacked' },
        })
        const root = wrapper.find('[role="group"]')
        expect(root.exists()).toBe(true)
        expect(root.classes()).toContain('flex')
        const input = wrapper.find('[role="spinbutton"]')
        expect(input.exists()).toBe(true)
    })

    it('applies custom class', () => {
        const wrapper = mount(NumberInput, {
            props: { class: 'custom-class' },
        })
        const root = wrapper.find('[role="group"]')
        expect(root.classes()).toContain('custom-class')
    })

    it('passes placeholder prop to input', () => {
        const wrapper = mount(NumberInput, {
            props: { placeholder: 'Enter number' },
        })
        const input = wrapper.find('input')
        expect(input.attributes('placeholder')).toBe('Enter number')
    })

    it('renders split layout with decrement and increment buttons', () => {
        const wrapper = mount(NumberInput, {
            props: { layout: 'split' },
        })
        const decrement = wrapper.find('[aria-label="Decrease"]')
        const increment = wrapper.find('[aria-label="Increase"]')
        expect(decrement.exists()).toBe(true)
        expect(increment.exists()).toBe(true)
    })

    it('renders stacked layout with increment and decrement buttons', () => {
        const wrapper = mount(NumberInput, {
            props: { layout: 'stacked' },
        })
        const decrement = wrapper.find('[aria-label="Decrease"]')
        const increment = wrapper.find('[aria-label="Increase"]')
        expect(decrement.exists()).toBe(true)
        expect(increment.exists()).toBe(true)
    })

    it('applies root variant classes', () => {
        const wrapper = mount(NumberInput)
        const root = wrapper.find('[role="group"]')
        expect(root.classes()).toContain('bg-brutal-bg')
        expect(root.classes()).toContain('overflow-hidden')
        expect(root.classes()).toContain('transition-all')
    })
})
