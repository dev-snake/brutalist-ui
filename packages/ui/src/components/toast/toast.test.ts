import { mount } from '@vue/test-utils'
import { en } from '@/locales/en'
import { LOCALE_INJECTION_KEY } from '@/composables/useLocale'
import Toast from './Toast.vue'
import ToastContainer from './ToastContainer.vue'

const globalProvide = { provide: { [LOCALE_INJECTION_KEY]: en } }

describe('Toast', () => {
    it('renders with default variant', () => {
        const wrapper = mount(Toast, { global: globalProvide })
        expect(wrapper.classes()).toContain('border-3')
        expect(wrapper.classes()).toContain('border-brutal')
        expect(wrapper.classes()).toContain('bg-brutal-bg')
        expect(wrapper.classes()).toContain('text-brutal-fg')
    })

    it('shows title and description', () => {
        const wrapper = mount(Toast, {
            props: {
                title: 'Test Title',
                description: 'Test Description',
            },
            global: globalProvide,
        })
        expect(wrapper.text()).toContain('Test Title')
        expect(wrapper.text()).toContain('Test Description')
    })

    it('has role="alert"', () => {
        const wrapper = mount(Toast, { global: globalProvide })
        expect(wrapper.attributes('role')).toBe('alert')
    })

    it('applies custom class', () => {
        const wrapper = mount(Toast, {
            props: { class: 'custom-toast' },
            global: globalProvide,
        })
        expect(wrapper.classes()).toContain('custom-toast')
    })

    it('renders success variant', () => {
        const wrapper = mount(Toast, {
            props: { variant: 'success' },
            global: globalProvide,
        })
        expect(wrapper.classes()).toContain('bg-brutal-success')
    })

    it('renders error variant', () => {
        const wrapper = mount(Toast, {
            props: { variant: 'error' },
            global: globalProvide,
        })
        expect(wrapper.classes()).toContain('bg-brutal-destructive')
    })

    it('renders warning variant', () => {
        const wrapper = mount(Toast, {
            props: { variant: 'warning' },
            global: globalProvide,
        })
        expect(wrapper.classes()).toContain('bg-brutal-accent')
    })

    it('renders info variant', () => {
        const wrapper = mount(Toast, {
            props: { variant: 'info' },
            global: globalProvide,
        })
        expect(wrapper.classes()).toContain('bg-brutal-secondary')
    })

    it('renders different variant icons', () => {
        const variants = ['success', 'error', 'warning', 'info', 'default'] as const
        for (const variant of variants) {
            const wrapper = mount(Toast, {
                props: { variant },
                global: globalProvide,
            })
            const svg = wrapper.find('svg')
            expect(svg.exists()).toBe(true)
        }
    })

    it('shows close button', () => {
        const wrapper = mount(Toast, { global: globalProvide })
        const closeButton = wrapper.find('button[aria-label="Close"]')
        expect(closeButton.exists()).toBe(true)
    })

    it('emits close event when close button clicked', async () => {
        vi.useFakeTimers()
        const wrapper = mount(Toast, { global: globalProvide })
        const closeButton = wrapper.find('button[aria-label="Close"]')
        await closeButton.trigger('click')
        vi.advanceTimersByTime(300)
        expect(wrapper.emitted('close')).toBeTruthy()
        vi.useRealTimers()
    })

    it('renders size variants', () => {
        const wrapper = mount(Toast, {
            props: { size: 'sm' },
            global: globalProvide,
        })
        expect(wrapper.classes()).toContain('max-w-xs')
    })

    it('renders slot content', () => {
        const wrapper = mount(Toast, {
            slots: { default: '<div class="slot-content">Custom</div>' },
            global: globalProvide,
        })
        expect(wrapper.find('.slot-content').exists()).toBe(true)
    })
})

describe('ToastContainer', () => {
    it('renders with default props', () => {
        const wrapper = mount(ToastContainer)
        expect(wrapper.classes()).toContain('fixed')
        expect(wrapper.classes()).toContain('z-50')
        expect(wrapper.classes()).toContain('flex')
        expect(wrapper.classes()).toContain('flex-col')
    })

    it('applies custom class', () => {
        const wrapper = mount(ToastContainer, {
            props: { class: 'custom-container' },
        })
        expect(wrapper.classes()).toContain('custom-container')
    })

    it('supports position top-right', () => {
        const wrapper = mount(ToastContainer, {
            props: { position: 'top-right' },
        })
        expect(wrapper.classes()).toContain('top-4')
        expect(wrapper.classes()).toContain('right-4')
        expect(wrapper.classes()).toContain('items-end')
    })

    it('supports position top-left', () => {
        const wrapper = mount(ToastContainer, {
            props: { position: 'top-left' },
        })
        expect(wrapper.classes()).toContain('top-4')
        expect(wrapper.classes()).toContain('left-4')
        expect(wrapper.classes()).toContain('items-start')
    })

    it('supports position bottom-right', () => {
        const wrapper = mount(ToastContainer, {
            props: { position: 'bottom-right' },
        })
        expect(wrapper.classes()).toContain('bottom-4')
        expect(wrapper.classes()).toContain('right-4')
        expect(wrapper.classes()).toContain('items-end')
    })

    it('supports position bottom-left', () => {
        const wrapper = mount(ToastContainer, {
            props: { position: 'bottom-left' },
        })
        expect(wrapper.classes()).toContain('bottom-4')
        expect(wrapper.classes()).toContain('left-4')
        expect(wrapper.classes()).toContain('items-start')
    })

    it('supports position top-center', () => {
        const wrapper = mount(ToastContainer, {
            props: { position: 'top-center' },
        })
        expect(wrapper.classes()).toContain('top-4')
        expect(wrapper.classes()).toContain('items-center')
    })

    it('supports position bottom-center', () => {
        const wrapper = mount(ToastContainer, {
            props: { position: 'bottom-center' },
        })
        expect(wrapper.classes()).toContain('bottom-4')
        expect(wrapper.classes()).toContain('items-center')
    })

    it('renders slot content', () => {
        const wrapper = mount(ToastContainer, {
            slots: { default: '<div class="toast-item">Toast</div>' },
        })
        expect(wrapper.find('.toast-item').exists()).toBe(true)
    })
})
