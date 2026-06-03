import { mount } from '@vue/test-utils'
import Slider from './Slider.vue'

describe('Slider', () => {
    it('renders with default props', () => {
        const wrapper = mount(Slider, {
            attachTo: document.body,
        })
        expect(wrapper.find('[role="slider"]').exists()).toBe(true)
    })

    it('has slider role', () => {
        const wrapper = mount(Slider, {
            attachTo: document.body,
        })
        expect(wrapper.find('[role="slider"]').exists()).toBe(true)
    })

    it('emits update:modelValue', async () => {
        const wrapper = mount(Slider, {
            props: {
                modelValue: [50],
                min: 0,
                max: 100,
                step: 1,
            },
            attachTo: document.body,
        })
        const sliderImpl = wrapper.find('[data-slider-impl]')
        await sliderImpl.trigger('keydown', { key: 'ArrowRight' })
        expect(wrapper.emitted('update:modelValue')).toBeTruthy()
    })

    it('applies custom class', () => {
        const wrapper = mount(Slider, {
            props: { class: 'custom-class' },
            attachTo: document.body,
        })
        expect(wrapper.classes()).toContain('custom-class')
    })
})
