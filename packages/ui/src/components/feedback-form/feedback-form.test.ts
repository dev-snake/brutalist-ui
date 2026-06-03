import { mount } from '@vue/test-utils'
import { en } from '@/locales/en'
import { LOCALE_INJECTION_KEY } from '@/composables/useLocale'
import FeedbackForm from './FeedbackForm.vue'

const localeProvide = { global: { provide: { [LOCALE_INJECTION_KEY]: en } } }

describe('FeedbackForm', () => {
    it('renders with default props', () => {
        const wrapper = mount(FeedbackForm, { ...localeProvide })
        expect(wrapper.find('h2').exists()).toBe(true)
        expect(wrapper.find('form').exists()).toBe(true)
    })

    it('renders custom title', () => {
        const wrapper = mount(FeedbackForm, {
            props: { title: 'Contact Us' },
            ...localeProvide,
        })
        expect(wrapper.find('h2').text()).toBe('Contact Us')
    })

    it('renders custom description', () => {
        const wrapper = mount(FeedbackForm, {
            props: { description: 'We would love to hear from you' },
            ...localeProvide,
        })
        expect(wrapper.text()).toContain('We would love to hear from you')
    })

    it('renders custom submit text', () => {
        const wrapper = mount(FeedbackForm, {
            props: { submitText: 'Send Feedback' },
            ...localeProvide,
        })
        expect(wrapper.text()).toContain('Send Feedback')
    })

    it('renders form fields', () => {
        const wrapper = mount(FeedbackForm, { ...localeProvide })
        const inputs = wrapper.findAll('input')
        const textareas = wrapper.findAll('textarea')
        expect(inputs.length).toBe(3)
        expect(textareas.length).toBe(1)
    })

    it('renders submit button', () => {
        const wrapper = mount(FeedbackForm, { ...localeProvide })
        const button = wrapper.find('button[type="submit"]')
        expect(button.exists()).toBe(true)
    })

    it('emits submit event with form data', async () => {
        const wrapper = mount(FeedbackForm, { ...localeProvide })
        const inputs = wrapper.findAll('input')
        const textarea = wrapper.find('textarea')

        await inputs[0].setValue('John Doe')
        await inputs[1].setValue('john@example.com')
        await inputs[2].setValue('Bug Report')
        await textarea.setValue('Something went wrong')

        await wrapper.find('form').trigger('submit')

        expect(wrapper.emitted('submit')).toBeTruthy()
        expect(wrapper.emitted('submit')![0]).toEqual([{
            name: 'John Doe',
            email: 'john@example.com',
            subject: 'Bug Report',
            message: 'Something went wrong',
        }])
    })

    it('applies custom class', () => {
        const wrapper = mount(FeedbackForm, {
            props: { class: 'my-form' },
            ...localeProvide,
        })
        expect(wrapper.classes()).toContain('my-form')
    })

    it('renders header slot', () => {
        const wrapper = mount(FeedbackForm, {
            slots: { header: '<div class="custom-header">Custom Header</div>' },
            ...localeProvide,
        })
        expect(wrapper.find('.custom-header').exists()).toBe(true)
        expect(wrapper.text()).toContain('Custom Header')
    })

    it('renders footer slot', () => {
        const wrapper = mount(FeedbackForm, {
            slots: { footer: '<div class="custom-footer">Custom Footer</div>' },
            ...localeProvide,
        })
        expect(wrapper.find('.custom-footer').exists()).toBe(true)
    })

    it('renders default slot', () => {
        const wrapper = mount(FeedbackForm, {
            slots: { default: '<div class="custom-content">Custom Content</div>' },
            ...localeProvide,
        })
        expect(wrapper.find('.custom-content').exists()).toBe(true)
    })
})
