import { mount } from '@vue/test-utils'
import Separator from './Separator.vue'

describe('Separator', () => {
    it('renders with default props', () => {
        const wrapper = mount(Separator, { attachTo: document.body })
        const classes = wrapper.classes()
        expect(classes).toContain('shrink-0')
        expect(classes).toContain('bg-brutal-fg')
        expect(classes).toContain('h-[3px]')
        expect(classes).toContain('w-full')
    })

    it('has separator role when decorative is false', () => {
        const wrapper = mount(Separator, {
            props: { decorative: false },
            attachTo: document.body,
        })
        expect(wrapper.attributes('role')).toBe('separator')
    })

    it('has none role when decorative is true', () => {
        const wrapper = mount(Separator, {
            props: { decorative: true },
            attachTo: document.body,
        })
        expect(wrapper.attributes('role')).toBe('none')
    })

    it('has horizontal data-orientation by default', () => {
        const wrapper = mount(Separator, { attachTo: document.body })
        expect(wrapper.attributes('data-orientation')).toBe('horizontal')
    })

    it('applies vertical orientation classes', () => {
        const wrapper = mount(Separator, {
            props: { orientation: 'vertical' },
            attachTo: document.body,
        })
        const classes = wrapper.classes()
        expect(classes).toContain('h-full')
        expect(classes).toContain('w-[3px]')
    })

    it('has vertical data-orientation when set', () => {
        const wrapper = mount(Separator, {
            props: { orientation: 'vertical' },
            attachTo: document.body,
        })
        expect(wrapper.attributes('data-orientation')).toBe('vertical')
    })

    it('applies custom class', () => {
        const wrapper = mount(Separator, {
            props: { class: 'my-separator' },
            attachTo: document.body,
        })
        expect(wrapper.classes()).toContain('my-separator')
    })

    it('has data-orientation when decorative is false', () => {
        const wrapper = mount(Separator, {
            props: { decorative: false },
            attachTo: document.body,
        })
        expect(wrapper.attributes('data-orientation')).toBe('horizontal')
    })
})
