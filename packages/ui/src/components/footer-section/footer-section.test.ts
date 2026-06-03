import { mount } from '@vue/test-utils'
import { en } from '@/locales/en'
import { LOCALE_INJECTION_KEY } from '@/composables/useLocale'
import FooterSection from './FooterSection.vue'

const localeProvide = { global: { provide: { [LOCALE_INJECTION_KEY]: en } } }

const mockLinkGroups = [
    {
        title: 'Product',
        links: [
            { label: 'Features', href: '/features' },
            { label: 'Pricing', href: '/pricing' },
        ],
    },
    {
        title: 'Company',
        links: [
            { label: 'About', href: '/about' },
            { label: 'Blog', href: '/blog' },
        ],
    },
    {
        title: 'Support',
        links: [
            { label: 'Help Center', href: '/help' },
            { label: 'Contact', href: '/contact' },
        ],
    },
]

describe('FooterSection', () => {
    it('renders with default props', () => {
        const wrapper = mount(FooterSection, { ...localeProvide })
        expect(wrapper.find('footer').exists()).toBe(true)
    })

    it('renders custom logo text', () => {
        const wrapper = mount(FooterSection, {
            props: { logoText: 'MyBrand' },
            ...localeProvide,
        })
        expect(wrapper.text()).toContain('MyBrand')
    })

    it('renders custom description', () => {
        const wrapper = mount(FooterSection, {
            props: { description: 'Building bold interfaces.' },
            ...localeProvide,
        })
        expect(wrapper.text()).toContain('Building bold interfaces.')
    })

    it('renders link groups', () => {
        const wrapper = mount(FooterSection, {
            props: { linkGroups: mockLinkGroups },
            ...localeProvide,
        })
        expect(wrapper.text()).toContain('Product')
        expect(wrapper.text()).toContain('Company')
        expect(wrapper.text()).toContain('Support')
    })

    it('renders link labels', () => {
        const wrapper = mount(FooterSection, {
            props: { linkGroups: mockLinkGroups },
            ...localeProvide,
        })
        expect(wrapper.text()).toContain('Features')
        expect(wrapper.text()).toContain('Pricing')
        expect(wrapper.text()).toContain('About')
        expect(wrapper.text()).toContain('Blog')
    })

    it('renders custom copyright', () => {
        const wrapper = mount(FooterSection, {
            props: { copyright: '© 2026 MyBrand. All rights reserved.' },
            ...localeProvide,
        })
        expect(wrapper.text()).toContain('© 2026 MyBrand. All rights reserved.')
    })

    it('renders with empty link groups', () => {
        const wrapper = mount(FooterSection, {
            props: { linkGroups: [] },
            ...localeProvide,
        })
        expect(wrapper.find('footer').exists()).toBe(true)
    })

    it('applies custom class', () => {
        const wrapper = mount(FooterSection, {
            props: { class: 'my-footer' },
            ...localeProvide,
        })
        expect(wrapper.find('footer').classes()).toContain('my-footer')
    })

    it('renders header slot', () => {
        const wrapper = mount(FooterSection, {
            slots: { header: '<div class="custom-header">Custom Header</div>' },
            ...localeProvide,
        })
        expect(wrapper.find('.custom-header').exists()).toBe(true)
    })

    it('renders footer slot', () => {
        const wrapper = mount(FooterSection, {
            slots: { footer: '<div class="custom-footer">Custom Footer</div>' },
            ...localeProvide,
        })
        expect(wrapper.find('.custom-footer').exists()).toBe(true)
    })

    it('renders default slot', () => {
        const wrapper = mount(FooterSection, {
            slots: { default: '<div class="custom-content">Custom Content</div>' },
            ...localeProvide,
        })
        expect(wrapper.find('.custom-content').exists()).toBe(true)
    })

    it('has border styling', () => {
        const wrapper = mount(FooterSection, { ...localeProvide })
        const footer = wrapper.find('footer')
        expect(footer.classes()).toContain('border-3')
        expect(footer.classes()).toContain('border-brutal')
    })
})
