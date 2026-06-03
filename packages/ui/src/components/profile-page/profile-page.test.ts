import { mount } from '@vue/test-utils'
import { en } from '@/locales/en'
import { LOCALE_INJECTION_KEY } from '@/composables/useLocale'
import ProfilePage from './ProfilePage.vue'

const localeProvide = { global: { provide: { [LOCALE_INJECTION_KEY]: en } } }

describe('ProfilePage', () => {
    it('renders with default props', () => {
        const wrapper = mount(ProfilePage, { ...localeProvide })
        expect(wrapper.find('h1').exists()).toBe(true)
    })

    it('renders default title from i18n', () => {
        const wrapper = mount(ProfilePage, { ...localeProvide })
        expect(wrapper.find('h1').text()).toBe('Profile')
    })

    it('renders custom title', () => {
        const wrapper = mount(ProfilePage, {
            props: { title: 'Edit Profile' },
            ...localeProvide,
        })
        expect(wrapper.find('h1').text()).toBe('Edit Profile')
    })

    it('renders form fields', () => {
        const wrapper = mount(ProfilePage, { ...localeProvide })
        const inputs = wrapper.findAll('input')
        expect(inputs.length).toBeGreaterThanOrEqual(2)
        expect(wrapper.find('textarea').exists()).toBe(true)
    })

    it('renders name input with label', () => {
        const wrapper = mount(ProfilePage, { ...localeProvide })
        expect(wrapper.text()).toContain('Name')
    })

    it('renders email input with label', () => {
        const wrapper = mount(ProfilePage, { ...localeProvide })
        expect(wrapper.text()).toContain('Email')
    })

    it('renders bio textarea with label', () => {
        const wrapper = mount(ProfilePage, { ...localeProvide })
        expect(wrapper.text()).toContain('Bio')
    })

    it('renders save button', () => {
        const wrapper = mount(ProfilePage, { ...localeProvide })
        const buttons = wrapper.findAll('button')
        const saveButton = buttons.find(b => b.text().includes('Save'))
        expect(saveButton).toBeTruthy()
    })

    it('renders avatar with initials', () => {
        const wrapper = mount(ProfilePage, {
            props: { name: 'John Doe' },
            ...localeProvide,
        })
        expect(wrapper.text()).toContain('JD')
    })

    it('renders avatar with single name initials', () => {
        const wrapper = mount(ProfilePage, {
            props: { name: 'Alice' },
            ...localeProvide,
        })
        expect(wrapper.text()).toContain('AL')
    })

    it('populates form with prop values', () => {
        const wrapper = mount(ProfilePage, {
            props: { name: 'Jane', email: 'jane@example.com', bio: 'Hello' },
            ...localeProvide,
        })
        const inputs = wrapper.findAll('input')
        expect(inputs[0].element.value).toBe('Jane')
        expect(inputs[1].element.value).toBe('jane@example.com')
        expect(wrapper.find('textarea').element.value).toBe('Hello')
    })

    it('emits save event when save button is clicked', async () => {
        const wrapper = mount(ProfilePage, {
            props: { name: 'Jane', email: 'jane@example.com', bio: 'Hello' },
            ...localeProvide,
        })
        const buttons = wrapper.findAll('button')
        const saveButton = buttons.find(b => b.text().includes('Save'))
        await saveButton!.trigger('click')
        expect(wrapper.emitted('save')).toBeTruthy()
        expect(wrapper.emitted('save')![0][0]).toEqual({
            name: 'Jane',
            email: 'jane@example.com',
            bio: 'Hello',
        })
    })

    it('applies custom class', () => {
        const wrapper = mount(ProfilePage, {
            props: { class: 'my-profile' },
            ...localeProvide,
        })
        expect(wrapper.classes()).toContain('my-profile')
    })

    it('renders header slot', () => {
        const wrapper = mount(ProfilePage, {
            slots: { header: '<div class="custom-header">Custom Header</div>' },
            ...localeProvide,
        })
        expect(wrapper.find('.custom-header').exists()).toBe(true)
    })

    it('renders footer slot', () => {
        const wrapper = mount(ProfilePage, {
            slots: { footer: '<div class="custom-footer">Custom Footer</div>' },
            ...localeProvide,
        })
        expect(wrapper.find('.custom-footer').exists()).toBe(true)
    })

    it('renders default slot', () => {
        const wrapper = mount(ProfilePage, {
            slots: { default: '<div class="custom-content">Custom Content</div>' },
            ...localeProvide,
        })
        expect(wrapper.find('.custom-content').exists()).toBe(true)
    })
})
