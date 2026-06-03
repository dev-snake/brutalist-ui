import { mount } from '@vue/test-utils'
import { FolderOpen } from 'lucide-vue-next'
import { en } from '@/locales/en'
import { LOCALE_INJECTION_KEY } from '@/composables/useLocale'
import EmptyState from './EmptyState.vue'

const localeProvide = { global: { provide: { [LOCALE_INJECTION_KEY]: en } } }

describe('EmptyState', () => {
    it('renders with default props', () => {
        const wrapper = mount(EmptyState, { ...localeProvide })
        expect(wrapper.find('h3').text()).toBe('No active deployments found')
    })

    it('shows custom title', () => {
        const wrapper = mount(EmptyState, {
            props: { title: 'No items found' },
            ...localeProvide,
        })
        expect(wrapper.find('h3').text()).toBe('No items found')
    })

    it('shows description when provided', () => {
        const wrapper = mount(EmptyState, {
            props: { description: 'Try creating a new item' },
            ...localeProvide,
        })
        expect(wrapper.text()).toContain('Try creating a new item')
    })

    it('does not render description when not provided', () => {
        const wrapper = mount(EmptyState, { ...localeProvide })
        const descEl = wrapper.find('p')
        expect(descEl.exists()).toBe(false)
    })

    it('shows default action text', () => {
        const wrapper = mount(EmptyState, { ...localeProvide })
        expect(wrapper.text()).toContain('Deploy New App')
    })

    it('shows custom action text', () => {
        const wrapper = mount(EmptyState, {
            props: { actionText: 'Create New' },
            ...localeProvide,
        })
        expect(wrapper.text()).toContain('Create New')
    })

    it('does not render action button when actionText is empty', () => {
        const wrapper = mount(EmptyState, {
            props: { actionText: '' },
            ...localeProvide,
        })
        const buttons = wrapper.findAll('button')
        expect(buttons.length).toBe(0)
    })

    it('emits action when action button is clicked', async () => {
        const wrapper = mount(EmptyState, { ...localeProvide })
        const button = wrapper.find('button')
        await button.trigger('click')
        expect(wrapper.emitted('action')).toBeTruthy()
        expect(wrapper.emitted('action')!.length).toBe(1)
    })

    it('renders default icon when icon prop is not provided', () => {
        const wrapper = mount(EmptyState, { ...localeProvide })
        expect(wrapper.findComponent(FolderOpen).exists()).toBe(true)
    })

    it('renders custom icon when icon prop is provided', () => {
        const CustomIcon = FolderOpen
        const wrapper = mount(EmptyState, {
            props: { icon: CustomIcon },
            ...localeProvide,
        })
        expect(wrapper.findComponent(CustomIcon).exists()).toBe(true)
    })

    it('applies custom class', () => {
        const wrapper = mount(EmptyState, {
            props: { class: 'my-empty' },
            ...localeProvide,
        })
        expect(wrapper.classes()).toContain('my-empty')
    })
})
