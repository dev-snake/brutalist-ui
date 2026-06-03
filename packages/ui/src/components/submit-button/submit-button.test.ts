import { mount } from '@vue/test-utils'
import SubmitButton from './SubmitButton.vue'

describe('SubmitButton', () => {
    it('renders with default props', () => {
        const wrapper = mount(SubmitButton)
        const button = wrapper.find('button')
        expect(button.exists()).toBe(true)
        expect(button.attributes('type')).toBe('submit')
        expect(button.attributes('disabled')).toBeUndefined()
    })

    it('shows loading spinner when loading=true', () => {
        const wrapper = mount(SubmitButton, {
            props: { loading: true },
        })
        const svg = wrapper.find('svg')
        expect(svg.exists()).toBe(true)
        expect(svg.classes()).toContain('animate-spin')
    })

    it('shows pending text when pendingText is provided and loading', () => {
        const wrapper = mount(SubmitButton, {
            props: { loading: true, pendingText: 'Saving...' },
        })
        expect(wrapper.text()).toContain('Saving...')
    })

    it('does not show pending text when not loading', () => {
        const wrapper = mount(SubmitButton, {
            props: { loading: false, pendingText: 'Saving...' },
            slots: { default: 'Submit' },
        })
        expect(wrapper.text()).toBe('Submit')
    })

    it('is disabled when loading=true', () => {
        const wrapper = mount(SubmitButton, {
            props: { loading: true },
        })
        expect(wrapper.find('button').attributes('disabled')).toBeDefined()
    })

    it('is disabled when disabled=true', () => {
        const wrapper = mount(SubmitButton, {
            props: { disabled: true },
        })
        expect(wrapper.find('button').attributes('disabled')).toBeDefined()
    })

    it('is disabled when both loading and disabled', () => {
        const wrapper = mount(SubmitButton, {
            props: { loading: true, disabled: true },
        })
        expect(wrapper.find('button').attributes('disabled')).toBeDefined()
    })

    it('renders slot content when not loading', () => {
        const wrapper = mount(SubmitButton, {
            slots: { default: 'Click me' },
        })
        expect(wrapper.text()).toBe('Click me')
    })

    it('does not render slot content when loading', () => {
        const wrapper = mount(SubmitButton, {
            props: { loading: true, pendingText: 'Processing...' },
            slots: { default: 'Click me' },
        })
        expect(wrapper.text()).not.toContain('Click me')
        expect(wrapper.text()).toContain('Processing...')
    })

    it('applies custom class', () => {
        const wrapper = mount(SubmitButton, {
            props: { class: 'custom-submit' },
        })
        expect(wrapper.find('button').classes()).toContain('custom-submit')
    })

    it('applies variant classes', () => {
        const wrapper = mount(SubmitButton, {
            props: { variant: 'primary' },
        })
        expect(wrapper.find('button').classes()).toContain('bg-brutal-primary')
    })

    it('applies size classes', () => {
        const wrapper = mount(SubmitButton, {
            props: { size: 'lg' },
        })
        expect(wrapper.find('button').classes()).toContain('h-14')
    })
})
