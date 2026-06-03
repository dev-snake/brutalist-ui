import { mount } from '@vue/test-utils'
import { en } from '@/locales/en'
import { LOCALE_INJECTION_KEY } from '@/composables/useLocale'
import CookieConsent from './CookieConsent.vue'

const localeProvide = { global: { provide: { [LOCALE_INJECTION_KEY]: en } } }

describe('CookieConsent', () => {
    it('renders with default props', () => {
        const wrapper = mount(CookieConsent, { ...localeProvide })
        expect(wrapper.text()).toContain('We use cookies')
        expect(wrapper.text()).toContain('This website uses cookies to enhance your browsing experience.')
    })

    it('shows custom title', () => {
        const wrapper = mount(CookieConsent, {
            props: { title: 'Cookie Policy' },
            ...localeProvide,
        })
        expect(wrapper.text()).toContain('Cookie Policy')
    })

    it('shows custom description', () => {
        const wrapper = mount(CookieConsent, {
            props: { description: 'We use cookies for analytics.' },
            ...localeProvide,
        })
        expect(wrapper.text()).toContain('We use cookies for analytics.')
    })

    it('shows custom accept text', () => {
        const wrapper = mount(CookieConsent, {
            props: { acceptText: 'I Agree' },
            ...localeProvide,
        })
        expect(wrapper.text()).toContain('I Agree')
    })

    it('shows custom decline text', () => {
        const wrapper = mount(CookieConsent, {
            props: { declineText: 'No Thanks' },
            ...localeProvide,
        })
        expect(wrapper.text()).toContain('No Thanks')
    })

    it('shows default accept text from i18n', () => {
        const wrapper = mount(CookieConsent, { ...localeProvide })
        expect(wrapper.text()).toContain('Accept')
    })

    it('shows default decline text from i18n', () => {
        const wrapper = mount(CookieConsent, { ...localeProvide })
        expect(wrapper.text()).toContain('Decline')
    })

    it('emits accept when accept button is clicked', async () => {
        const wrapper = mount(CookieConsent, { ...localeProvide })
        const buttons = wrapper.findAll('button')
        const acceptButton = buttons.find(b => b.text().includes('Accept'))
        expect(acceptButton).toBeTruthy()
        await acceptButton!.trigger('click')
        expect(wrapper.emitted('accept')).toBeTruthy()
        expect(wrapper.emitted('accept')!.length).toBe(1)
    })

    it('emits decline when decline button is clicked', async () => {
        const wrapper = mount(CookieConsent, { ...localeProvide })
        const buttons = wrapper.findAll('button')
        const declineButton = buttons.find(b => b.text().includes('Decline'))
        expect(declineButton).toBeTruthy()
        await declineButton!.trigger('click')
        expect(wrapper.emitted('decline')).toBeTruthy()
        expect(wrapper.emitted('decline')!.length).toBe(1)
    })

    it('renders cookie icon', () => {
        const wrapper = mount(CookieConsent, { ...localeProvide })
        expect(wrapper.find('svg').exists()).toBe(true)
    })

    it('has fixed positioning', () => {
        const wrapper = mount(CookieConsent, { ...localeProvide })
        const root = wrapper.find('div')
        expect(root.classes()).toContain('fixed')
        expect(root.classes()).toContain('bottom-0')
    })

    it('renders actions slot', () => {
        const wrapper = mount(CookieConsent, {
            slots: { actions: '<div class="custom-action">Custom Action</div>' },
            ...localeProvide,
        })
        expect(wrapper.text()).toContain('Custom Action')
    })

    it('applies custom class', () => {
        const wrapper = mount(CookieConsent, {
            props: { class: 'my-consent' },
            ...localeProvide,
        })
        expect(wrapper.find('[class*="my-consent"]').exists()).toBe(true)
    })
})
