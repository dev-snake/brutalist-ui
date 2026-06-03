import { mount } from '@vue/test-utils'
import { vi } from 'vitest'
import { ref } from 'vue'
import { en } from '@/locales/en'
import { LOCALE_INJECTION_KEY } from '@/composables/useLocale'
import NotFoundPage from './NotFoundPage.vue'

vi.mock('../../composables/useReducedMotion', () => ({
    useReducedMotion: () => ref(false)
}))

const mockLocale = {
    ...en,
    notFoundPage: {
        defaultTitle: 'Page Not Found',
        defaultDescription: 'The page you are looking for does not exist.',
        defaultBackText: 'Go Back',
    },
}

const localeProvide = { [LOCALE_INJECTION_KEY]: mockLocale }

describe('NotFoundPage', () => {
    it('renders with default props', () => {
        const wrapper = mount(NotFoundPage, { global: { provide: localeProvide } })
        expect(wrapper.find('h1').text()).toBe('Page Not Found')
        expect(wrapper.text()).toContain('The page you are looking for does not exist.')
        expect(wrapper.text()).toContain('Go Back')
    })

    it('shows custom title', () => {
        const wrapper = mount(NotFoundPage, {
            props: { title: 'Custom 404' },
            global: { provide: localeProvide },
        })
        expect(wrapper.find('h1').text()).toBe('Custom 404')
    })

    it('shows custom description', () => {
        const wrapper = mount(NotFoundPage, {
            props: { description: 'This page does not exist' },
            global: { provide: localeProvide },
        })
        expect(wrapper.text()).toContain('This page does not exist')
    })

    it('shows custom back text', () => {
        const wrapper = mount(NotFoundPage, {
            props: { backText: 'Return Home' },
            global: { provide: localeProvide },
        })
        expect(wrapper.text()).toContain('Return Home')
    })

    it('renders GlitchText with 404', () => {
        const wrapper = mount(NotFoundPage, { global: { provide: localeProvide } })
        expect(wrapper.text()).toContain('404')
    })

    it('emits back event when back button is clicked', async () => {
        const wrapper = mount(NotFoundPage, { global: { provide: localeProvide } })
        const button = wrapper.find('button')
        await button.trigger('click')
        expect(wrapper.emitted('back')).toBeTruthy()
        expect(wrapper.emitted('back')!.length).toBe(1)
    })

    it('renders header slot', () => {
        const wrapper = mount(NotFoundPage, {
            slots: { header: '<div data-test="header">Header Content</div>' },
            global: { provide: localeProvide },
        })
        expect(wrapper.find('[data-test="header"]').exists()).toBe(true)
        expect(wrapper.find('[data-test="header"]').text()).toBe('Header Content')
    })

    it('renders default slot', () => {
        const wrapper = mount(NotFoundPage, {
            slots: { default: '<div data-test="custom">Custom Content</div>' },
            global: { provide: localeProvide },
        })
        expect(wrapper.find('[data-test="custom"]').exists()).toBe(true)
    })

    it('renders footer slot', () => {
        const wrapper = mount(NotFoundPage, {
            slots: { footer: '<div data-test="footer">Footer Content</div>' },
            global: { provide: localeProvide },
        })
        expect(wrapper.find('[data-test="footer"]').exists()).toBe(true)
        expect(wrapper.find('[data-test="footer"]').text()).toBe('Footer Content')
    })

    it('applies custom class', () => {
        const wrapper = mount(NotFoundPage, {
            props: { class: 'my-not-found' },
            global: { provide: localeProvide },
        })
        expect(wrapper.classes()).toContain('my-not-found')
    })

    it('has full viewport layout classes', () => {
        const wrapper = mount(NotFoundPage, { global: { provide: localeProvide } })
        const root = wrapper.element as HTMLElement
        expect(root.classList.contains('min-h-screen')).toBe(true)
    })
})
