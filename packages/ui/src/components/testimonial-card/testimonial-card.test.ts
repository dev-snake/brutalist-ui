import { mount } from '@vue/test-utils'
import { en } from '@/locales/en'
import { LOCALE_INJECTION_KEY } from '@/composables/useLocale'
import TestimonialCard from './TestimonialCard.vue'

const localeProvide = { global: { provide: { [LOCALE_INJECTION_KEY]: en } } }

describe('TestimonialCard', () => {
    it('renders with default props', () => {
        const wrapper = mount(TestimonialCard, { ...localeProvide })
        expect(wrapper.text()).toContain('This product has completely transformed our workflow.')
        expect(wrapper.text()).toContain('Alex Johnson')
        expect(wrapper.text()).toContain('Product Manager')
    })

    it('shows custom quote', () => {
        const wrapper = mount(TestimonialCard, {
            props: { quote: 'Amazing experience!' },
            ...localeProvide,
        })
        expect(wrapper.text()).toContain('Amazing experience!')
    })

    it('shows custom author', () => {
        const wrapper = mount(TestimonialCard, {
            props: { author: 'Jane Doe' },
            ...localeProvide,
        })
        expect(wrapper.text()).toContain('Jane Doe')
    })

    it('shows custom role', () => {
        const wrapper = mount(TestimonialCard, {
            props: { role: 'CTO' },
            ...localeProvide,
        })
        expect(wrapper.text()).toContain('CTO')
    })

    it('renders avatar with initials from author name', () => {
        const wrapper = mount(TestimonialCard, {
            props: { author: 'John Smith' },
            ...localeProvide,
        })
        expect(wrapper.text()).toContain('JS')
    })

    it('renders Verified badge', () => {
        const wrapper = mount(TestimonialCard, { ...localeProvide })
        expect(wrapper.text()).toContain('Verified')
    })

    it('renders Quote icon', () => {
        const wrapper = mount(TestimonialCard, { ...localeProvide })
        const svg = wrapper.find('svg')
        expect(svg.exists()).toBe(true)
    })

    it('applies custom class', () => {
        const wrapper = mount(TestimonialCard, {
            props: { class: 'my-testimonial' },
            ...localeProvide,
        })
        expect(wrapper.find('[class*="my-testimonial"]').exists()).toBe(true)
    })
})
