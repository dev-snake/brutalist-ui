import { mount } from '@vue/test-utils'
import { en } from '@/locales/en'
import { LOCALE_INJECTION_KEY } from '@/composables/useLocale'
import SuccessCard from './SuccessCard.vue'

const localeProvide = { global: { provide: { [LOCALE_INJECTION_KEY]: en } } }

describe('SuccessCard', () => {
    it('renders with default props', () => {
        const wrapper = mount(SuccessCard, { ...localeProvide })
        expect(wrapper.text()).toContain('Success')
        expect(wrapper.text()).toContain('Your action has been completed successfully.')
    })

    it('shows custom title', () => {
        const wrapper = mount(SuccessCard, {
            props: { title: 'Payment Complete' },
            ...localeProvide,
        })
        expect(wrapper.text()).toContain('Payment Complete')
    })

    it('shows custom description', () => {
        const wrapper = mount(SuccessCard, {
            props: { description: 'Your order has been placed.' },
            ...localeProvide,
        })
        expect(wrapper.text()).toContain('Your order has been placed.')
    })

    it('shows custom confirm text', () => {
        const wrapper = mount(SuccessCard, {
            props: { confirmText: 'Continue' },
            ...localeProvide,
        })
        expect(wrapper.text()).toContain('Continue')
    })

    it('shows default confirm text from i18n', () => {
        const wrapper = mount(SuccessCard, { ...localeProvide })
        expect(wrapper.text()).toContain('Confirm')
    })

    it('emits confirm when confirm button is clicked', async () => {
        const wrapper = mount(SuccessCard, { ...localeProvide })
        const button = wrapper.find('button')
        await button.trigger('click')
        expect(wrapper.emitted('confirm')).toBeTruthy()
        expect(wrapper.emitted('confirm')!.length).toBe(1)
    })

    it('renders check icon', () => {
        const wrapper = mount(SuccessCard, { ...localeProvide })
        expect(wrapper.find('svg').exists()).toBe(true)
    })

    it('renders actions slot', () => {
        const wrapper = mount(SuccessCard, {
            slots: { actions: '<div class="custom-action">Custom Action</div>' },
            ...localeProvide,
        })
        expect(wrapper.text()).toContain('Custom Action')
    })

    it('applies custom class', () => {
        const wrapper = mount(SuccessCard, {
            props: { class: 'my-success' },
            ...localeProvide,
        })
        expect(wrapper.find('[class*="my-success"]').exists()).toBe(true)
    })
})
