import { mount } from '@vue/test-utils'
import Alert from './Alert.vue'
import AlertTitle from './AlertTitle.vue'
import AlertDescription from './AlertDescription.vue'

describe('Alert', () => {
    it('renders with default variant', () => {
        const wrapper = mount(Alert)
        expect(wrapper.classes()).toContain('border-3')
        expect(wrapper.classes()).toContain('border-brutal')
        expect(wrapper.classes()).toContain('shadow-brutal')
        expect(wrapper.classes()).toContain('bg-brutal-bg')
        expect(wrapper.classes()).toContain('text-brutal-fg')
    })

    it('applies variant classes', () => {
        const variantMap: Record<string, string[]> = {
            default: ['bg-brutal-bg', 'text-brutal-fg'],
            primary: ['bg-brutal-primary', 'text-brutal-fg'],
            secondary: ['bg-brutal-secondary', 'text-brutal-fg'],
            success: ['bg-brutal-success', 'text-brutal-fg'],
            warning: ['bg-brutal-accent', 'text-brutal-fg'],
            danger: ['bg-brutal-destructive', 'text-brutal-fg'],
            info: ['bg-brutal-info', 'text-brutal-fg'],
        }

        Object.entries(variantMap).forEach(([variant, expectedClasses]) => {
            const wrapper = mount(Alert, { props: { variant: variant as 'default' | 'primary' | 'secondary' | 'success' | 'warning' | 'danger' | 'info' } })
            expectedClasses.forEach((cls) => {
                expect(wrapper.classes()).toContain(cls)
            })
        })
    })

    it('renders slot content', () => {
        const wrapper = mount(Alert, {
            slots: { default: '<p>Alert message</p>' },
        })
        expect(wrapper.text()).toBe('Alert message')
    })

    it('has role="alert"', () => {
        const wrapper = mount(Alert)
        expect(wrapper.attributes('role')).toBe('alert')
    })

    it('applies custom class', () => {
        const wrapper = mount(Alert, { props: { class: 'my-alert' } })
        expect(wrapper.classes()).toContain('my-alert')
    })
})

describe('AlertTitle', () => {
    it('renders slot content', () => {
        const wrapper = mount(AlertTitle, {
            slots: { default: 'Alert Title' },
        })
        expect(wrapper.text()).toBe('Alert Title')
    })

    it('renders h5 element', () => {
        const wrapper = mount(AlertTitle, {
            slots: { default: 'Title' },
        })
        expect(wrapper.element.tagName).toBe('H5')
    })

    it('applies custom class', () => {
        const wrapper = mount(AlertTitle, { props: { class: 'my-title' } })
        expect(wrapper.classes()).toContain('my-title')
    })
})

describe('AlertDescription', () => {
    it('renders slot content', () => {
        const wrapper = mount(AlertDescription, {
            slots: { default: 'Alert description text' },
        })
        expect(wrapper.text()).toBe('Alert description text')
    })

    it('renders div element', () => {
        const wrapper = mount(AlertDescription)
        expect(wrapper.element.tagName).toBe('DIV')
    })

    it('applies custom class', () => {
        const wrapper = mount(AlertDescription, { props: { class: 'my-desc' } })
        expect(wrapper.classes()).toContain('my-desc')
    })
})
