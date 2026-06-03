import { mount } from '@vue/test-utils'
import { en } from '@/locales/en'
import { LOCALE_INJECTION_KEY } from '@/composables/useLocale'
import SettingsPage from './SettingsPage.vue'

const localeProvide = { global: { provide: { [LOCALE_INJECTION_KEY]: en } } }

const mockTabs = [
    { label: 'Profile', value: 'profile' },
    { label: 'Notifications', value: 'notifications' },
    { label: 'Security', value: 'security' },
]

describe('SettingsPage', () => {
    it('renders with default props', () => {
        const wrapper = mount(SettingsPage, { ...localeProvide })
        expect(wrapper.find('h1').exists()).toBe(true)
    })

    it('renders custom title', () => {
        const wrapper = mount(SettingsPage, {
            props: { title: 'My Settings' },
            ...localeProvide,
        })
        expect(wrapper.find('h1').text()).toBe('My Settings')
    })

    it('renders tab triggers', () => {
        const wrapper = mount(SettingsPage, {
            props: { tabs: mockTabs },
            ...localeProvide,
        })
        expect(wrapper.text()).toContain('Profile')
        expect(wrapper.text()).toContain('Notifications')
        expect(wrapper.text()).toContain('Security')
    })

    it('renders save button', () => {
        const wrapper = mount(SettingsPage, {
            props: { tabs: mockTabs },
            ...localeProvide,
        })
        const buttons = wrapper.findAll('button')
        const saveButton = buttons.find(b => b.text().includes('Save Changes'))
        expect(saveButton).toBeTruthy()
    })

    it('emits save event when save button is clicked', async () => {
        const wrapper = mount(SettingsPage, {
            props: { tabs: mockTabs },
            ...localeProvide,
        })
        const buttons = wrapper.findAll('button')
        const saveButton = buttons.find(b => b.text().includes('Save Changes'))
        await saveButton!.trigger('click')
        expect(wrapper.emitted('save')).toBeTruthy()
        expect(wrapper.emitted('save')![0][0]).toHaveProperty('tab')
        expect(wrapper.emitted('save')![0][0]).toHaveProperty('values')
    })

    it('renders form fields in tab content', () => {
        const wrapper = mount(SettingsPage, {
            props: { tabs: mockTabs },
            ...localeProvide,
        })
        expect(wrapper.find('input').exists()).toBe(true)
    })

    it('renders switch in tab content', () => {
        const wrapper = mount(SettingsPage, {
            props: { tabs: mockTabs },
            ...localeProvide,
        })
        expect(wrapper.find('[role="switch"]').exists()).toBe(true)
    })

    it('applies custom class', () => {
        const wrapper = mount(SettingsPage, {
            props: { class: 'my-settings' },
            ...localeProvide,
        })
        expect(wrapper.classes()).toContain('my-settings')
    })

    it('renders header slot', () => {
        const wrapper = mount(SettingsPage, {
            slots: { header: '<div class="custom-header">Custom Header</div>' },
            ...localeProvide,
        })
        expect(wrapper.find('.custom-header').exists()).toBe(true)
    })

    it('renders footer slot', () => {
        const wrapper = mount(SettingsPage, {
            slots: { footer: '<div class="custom-footer">Custom Footer</div>' },
            ...localeProvide,
        })
        expect(wrapper.find('.custom-footer').exists()).toBe(true)
    })

    it('renders default slot', () => {
        const wrapper = mount(SettingsPage, {
            slots: { default: '<div class="custom-content">Custom Content</div>' },
            ...localeProvide,
        })
        expect(wrapper.find('.custom-content').exists()).toBe(true)
    })

    it('renders with empty tabs array', () => {
        const wrapper = mount(SettingsPage, {
            props: { tabs: [] },
            ...localeProvide,
        })
        expect(wrapper.find('h1').exists()).toBe(true)
    })

    it('uses defaultTab prop', () => {
        const wrapper = mount(SettingsPage, {
            props: { tabs: mockTabs, defaultTab: 'notifications' },
            ...localeProvide,
        })
        expect(wrapper.text()).toContain('Profile')
        expect(wrapper.text()).toContain('Notifications')
    })
})
