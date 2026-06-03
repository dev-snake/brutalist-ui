import { mount } from '@vue/test-utils'
import { en } from '@/locales/en'
import { LOCALE_INJECTION_KEY } from '@/composables/useLocale'
import LoadingPage from './LoadingPage.vue'

const mockLocale = {
    ...en,
    loadingPage: {
        defaultTitle: 'Loading',
        defaultDescription: 'Please wait while we load your content.',
    },
}

const localeProvide = { [LOCALE_INJECTION_KEY]: mockLocale }

describe('LoadingPage', () => {
    it('renders with default props', () => {
        const wrapper = mount(LoadingPage, { global: { provide: localeProvide } })
        expect(wrapper.find('h1').text()).toBe('Loading')
        expect(wrapper.text()).toContain('Please wait while we load your content.')
    })

    it('shows custom title', () => {
        const wrapper = mount(LoadingPage, {
            props: { title: 'Loading Data' },
            global: { provide: localeProvide },
        })
        expect(wrapper.find('h1').text()).toBe('Loading Data')
    })

    it('shows custom description', () => {
        const wrapper = mount(LoadingPage, {
            props: { description: 'Please wait a moment' },
            global: { provide: localeProvide },
        })
        expect(wrapper.text()).toContain('Please wait a moment')
    })

    it('renders Spinner component', () => {
        const wrapper = mount(LoadingPage, { global: { provide: localeProvide } })
        const spinner = wrapper.find('[role="status"]')
        expect(spinner.exists()).toBe(true)
    })

    it('does not show Progress when progress prop is undefined', () => {
        const wrapper = mount(LoadingPage, { global: { provide: localeProvide } })
        const progressBar = wrapper.find('[role="progressbar"]')
        expect(progressBar.exists()).toBe(false)
    })

    it('shows Progress when progress prop is provided', () => {
        const wrapper = mount(LoadingPage, {
            props: { progress: 50 },
            global: { provide: localeProvide },
        })
        const progressBar = wrapper.find('[role="progressbar"]')
        expect(progressBar.exists()).toBe(true)
    })

    it('renders header slot', () => {
        const wrapper = mount(LoadingPage, {
            slots: { header: '<div data-test="header">Header Content</div>' },
            global: { provide: localeProvide },
        })
        expect(wrapper.find('[data-test="header"]').exists()).toBe(true)
        expect(wrapper.find('[data-test="header"]').text()).toBe('Header Content')
    })

    it('renders default slot', () => {
        const wrapper = mount(LoadingPage, {
            slots: { default: '<div data-test="custom">Custom Content</div>' },
            global: { provide: localeProvide },
        })
        expect(wrapper.find('[data-test="custom"]').exists()).toBe(true)
    })

    it('renders footer slot', () => {
        const wrapper = mount(LoadingPage, {
            slots: { footer: '<div data-test="footer">Footer Content</div>' },
            global: { provide: localeProvide },
        })
        expect(wrapper.find('[data-test="footer"]').exists()).toBe(true)
        expect(wrapper.find('[data-test="footer"]').text()).toBe('Footer Content')
    })

    it('applies custom class', () => {
        const wrapper = mount(LoadingPage, {
            props: { class: 'my-loading' },
            global: { provide: localeProvide },
        })
        expect(wrapper.classes()).toContain('my-loading')
    })

    it('has full viewport layout classes', () => {
        const wrapper = mount(LoadingPage, { global: { provide: localeProvide } })
        const root = wrapper.element as HTMLElement
        expect(root.classList.contains('min-h-screen')).toBe(true)
    })
})
