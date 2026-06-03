import { mount } from '@vue/test-utils'
import { en } from '@/locales/en'
import { LOCALE_INJECTION_KEY } from '@/composables/useLocale'
import HeaderSection from './HeaderSection.vue'

const localeProvide = { global: { provide: { [LOCALE_INJECTION_KEY]: en } } }

const mockNavItems = [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about' },
    { label: 'Contact', href: '/contact' },
]

describe('HeaderSection', () => {
    it('renders with default props', () => {
        const wrapper = mount(HeaderSection, { ...localeProvide })
        expect(wrapper.find('header').exists()).toBe(true)
    })

    it('renders custom logo text', () => {
        const wrapper = mount(HeaderSection, {
            props: { logoText: 'MyBrand' },
            ...localeProvide,
        })
        expect(wrapper.text()).toContain('MyBrand')
    })

    it('renders nav items', () => {
        const wrapper = mount(HeaderSection, {
            props: { navItems: mockNavItems },
            ...localeProvide,
        })
        expect(wrapper.text()).toContain('Home')
        expect(wrapper.text()).toContain('About')
        expect(wrapper.text()).toContain('Contact')
    })

    it('renders CTA button text', () => {
        const wrapper = mount(HeaderSection, {
            props: { ctaText: 'Sign Up' },
            ...localeProvide,
        })
        expect(wrapper.text()).toContain('Sign Up')
    })

    it('renders with empty nav items', () => {
        const wrapper = mount(HeaderSection, {
            props: { navItems: [] },
            ...localeProvide,
        })
        expect(wrapper.find('header').exists()).toBe(true)
    })

    it('applies custom class', () => {
        const wrapper = mount(HeaderSection, {
            props: { class: 'my-header' },
            ...localeProvide,
        })
        expect(wrapper.find('header').classes()).toContain('my-header')
    })

    it('renders header slot', () => {
        const wrapper = mount(HeaderSection, {
            slots: { header: '<div class="custom-logo">Custom Logo</div>' },
            ...localeProvide,
        })
        expect(wrapper.find('.custom-logo').exists()).toBe(true)
    })

    it('renders footer slot', () => {
        const wrapper = mount(HeaderSection, {
            slots: { footer: '<div class="custom-cta">Custom CTA</div>' },
            ...localeProvide,
        })
        expect(wrapper.find('.custom-cta').exists()).toBe(true)
    })

    it('renders default slot', () => {
        const wrapper = mount(HeaderSection, {
            slots: { default: '<nav class="custom-nav">Custom Nav</nav>' },
            ...localeProvide,
        })
        expect(wrapper.find('.custom-nav').exists()).toBe(true)
    })

    it('has sticky header styling', () => {
        const wrapper = mount(HeaderSection, { ...localeProvide })
        const header = wrapper.find('header')
        expect(header.classes()).toContain('sticky')
        expect(header.classes()).toContain('border-3')
        expect(header.classes()).toContain('border-brutal')
    })
})
