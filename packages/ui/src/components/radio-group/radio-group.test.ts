import { mount } from '@vue/test-utils'
import { h } from 'vue'
import RadioGroup from './RadioGroup.vue'
import RadioGroupItem from './RadioGroupItem.vue'

describe('RadioGroup', () => {
    it('renders with default props', () => {
        const wrapper = mount(RadioGroup, {
            attachTo: document.body,
        })
        expect(wrapper.find('[role="radiogroup"]').exists()).toBe(true)
    })

    it('emits update:modelValue', async () => {
        const wrapper = mount(RadioGroup, {
            props: { modelValue: '' },
            slots: {
                default: () => h(RadioGroupItem, { value: 'option1' }),
            },
            attachTo: document.body,
        })
        const radio = wrapper.find('[role="radio"]')
        await radio.trigger('click')
        expect(wrapper.emitted('update:modelValue')).toBeTruthy()
    })
})

describe('RadioGroupItem', () => {
    it('renders with value prop', () => {
        const wrapper = mount(RadioGroup, {
            props: { modelValue: '' },
            slots: {
                default: () => h(RadioGroupItem, { value: 'option1' }),
            },
            attachTo: document.body,
        })
        const radio = wrapper.find('[role="radio"]')
        expect(radio.exists()).toBe(true)
    })

    it('has radio role', () => {
        const wrapper = mount(RadioGroup, {
            props: { modelValue: '' },
            slots: {
                default: () => h(RadioGroupItem, { value: 'option1' }),
            },
            attachTo: document.body,
        })
        expect(wrapper.find('[role="radio"]').exists()).toBe(true)
    })
})
