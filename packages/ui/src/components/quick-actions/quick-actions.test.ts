import { mount } from '@vue/test-utils'
import { Plus, Settings, Trash2 } from 'lucide-vue-next'
import { en } from '@/locales/en'
import { LOCALE_INJECTION_KEY } from '@/composables/useLocale'
import QuickActions from './QuickActions.vue'

const localeProvide = { global: { provide: { [LOCALE_INJECTION_KEY]: en } } }

describe('QuickActions', () => {
    const mockActions = [
        { label: 'New Item', icon: Plus, variant: 'primary' as const },
        { label: 'Settings', icon: Settings, variant: 'outline' as const },
        { label: 'Delete', icon: Trash2, variant: 'danger' as const },
    ]

    it('renders with default props', () => {
        const wrapper = mount(QuickActions, { ...localeProvide })
        expect(wrapper.text()).toContain('Quick Actions')
    })

    it('shows custom title', () => {
        const wrapper = mount(QuickActions, {
            props: { title: 'My Actions' },
            ...localeProvide,
        })
        expect(wrapper.text()).toContain('My Actions')
    })

    it('renders action buttons', () => {
        const wrapper = mount(QuickActions, {
            props: { actions: mockActions },
            ...localeProvide,
        })
        expect(wrapper.text()).toContain('New Item')
        expect(wrapper.text()).toContain('Settings')
        expect(wrapper.text()).toContain('Delete')
    })

    it('emits action-click with correct index', async () => {
        const wrapper = mount(QuickActions, {
            props: { actions: mockActions },
            ...localeProvide,
        })
        const buttons = wrapper.findAll('button')
        await buttons[1].trigger('click')
        expect(wrapper.emitted('action-click')).toBeTruthy()
        expect(wrapper.emitted('action-click')![0]).toEqual([1])
    })

    it('renders action icons', () => {
        const wrapper = mount(QuickActions, {
            props: { actions: mockActions },
            ...localeProvide,
        })
        const svgs = wrapper.findAll('svg')
        expect(svgs.length).toBeGreaterThanOrEqual(3)
    })

    it('renders with empty actions array', () => {
        const wrapper = mount(QuickActions, {
            props: { actions: [] },
            ...localeProvide,
        })
        const buttons = wrapper.findAll('button')
        expect(buttons.length).toBe(0)
    })

    it('renders Quick badge', () => {
        const wrapper = mount(QuickActions, { ...localeProvide })
        expect(wrapper.text()).toContain('Quick')
    })

    it('applies custom class', () => {
        const wrapper = mount(QuickActions, {
            props: { class: 'my-actions' },
            ...localeProvide,
        })
        expect(wrapper.find('[class*="my-actions"]').exists()).toBe(true)
    })
})
