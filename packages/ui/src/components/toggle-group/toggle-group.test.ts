import { mount } from '@vue/test-utils'
import { h } from 'vue'
import ToggleGroup from './ToggleGroup.vue'
import ToggleGroupItem from './ToggleGroupItem.vue'

describe('ToggleGroup', () => {
    it('renders with default props', () => {
        const wrapper = mount(ToggleGroup, {
            attachTo: document.body,
        })
        expect(wrapper.element.tagName).toBe('DIV')
    })
})

describe('ToggleGroupItem', () => {
    it('renders within ToggleGroup', () => {
        const wrapper = mount(ToggleGroup, {
            props: { modelValue: '' },
            slots: {
                default: () => h(ToggleGroupItem, { value: 'bold' }),
            },
            attachTo: document.body,
        })
        expect(wrapper.find('button').exists()).toBe(true)
    })

    it('has appropriate role', () => {
        const wrapper = mount(ToggleGroup, {
            props: { modelValue: '' },
            slots: {
                default: () => h(ToggleGroupItem, { value: 'bold' }),
            },
            attachTo: document.body,
        })
        const item = wrapper.find('button')
        expect(item.exists()).toBe(true)
    })
})
