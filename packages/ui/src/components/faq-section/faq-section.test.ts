import { mount } from '@vue/test-utils'
import { en } from '@/locales/en'
import { LOCALE_INJECTION_KEY } from '@/composables/useLocale'
import FaqSection from './FaqSection.vue'

const localeProvide = { global: { provide: { [LOCALE_INJECTION_KEY]: en } } }

const mockItems = [
    { question: 'What is BrutxUI?', answer: 'A Neo-Brutalist UI component library.' },
    { question: 'Is it open source?', answer: 'Yes, it is open source and free to use.' },
    { question: 'Which framework?', answer: 'Vue 3 with TypeScript support.' },
]

describe('FaqSection', () => {
    it('renders with default props', () => {
        const wrapper = mount(FaqSection, { ...localeProvide })
        expect(wrapper.find('h2').exists()).toBe(true)
    })

    it('renders custom title', () => {
        const wrapper = mount(FaqSection, {
            props: { title: 'Custom FAQ Title' },
            ...localeProvide,
        })
        expect(wrapper.find('h2').text()).toBe('Custom FAQ Title')
    })

    it('renders subtitle when provided', () => {
        const wrapper = mount(FaqSection, {
            props: { subtitle: 'Find answers to common questions' },
            ...localeProvide,
        })
        expect(wrapper.text()).toContain('Find answers to common questions')
    })

    it('renders FAQ items with questions', () => {
        const wrapper = mount(FaqSection, {
            props: { items: mockItems },
            ...localeProvide,
        })
        expect(wrapper.text()).toContain('What is BrutxUI?')
        expect(wrapper.text()).toContain('Is it open source?')
        expect(wrapper.text()).toContain('Which framework?')
    })

    it('renders FAQ answer elements', () => {
        const wrapper = mount(FaqSection, {
            props: { items: mockItems },
            ...localeProvide,
        })
        const triggers = wrapper.findAll('button[aria-expanded]')
        expect(triggers.length).toBe(3)
        expect(triggers[0].text()).toContain('What is BrutxUI?')
        expect(triggers[1].text()).toContain('Is it open source?')
        expect(triggers[2].text()).toContain('Which framework?')
    })

    it('renders with empty items array', () => {
        const wrapper = mount(FaqSection, {
            props: { items: [] },
            ...localeProvide,
        })
        const items = wrapper.findAllComponents({ name: 'AccordionItem' })
        expect(items.length).toBe(0)
    })

    it('applies custom class', () => {
        const wrapper = mount(FaqSection, {
            props: { class: 'my-faq' },
            ...localeProvide,
        })
        expect(wrapper.classes()).toContain('my-faq')
    })

    it('renders header slot', () => {
        const wrapper = mount(FaqSection, {
            slots: { header: '<div class="custom-header">Custom Header</div>' },
            ...localeProvide,
        })
        expect(wrapper.find('.custom-header').exists()).toBe(true)
        expect(wrapper.text()).toContain('Custom Header')
    })

    it('renders footer slot', () => {
        const wrapper = mount(FaqSection, {
            slots: { footer: '<div class="custom-footer">Custom Footer</div>' },
            ...localeProvide,
        })
        expect(wrapper.find('.custom-footer').exists()).toBe(true)
    })

    it('renders default slot', () => {
        const wrapper = mount(FaqSection, {
            slots: { default: '<div class="custom-content">Custom Content</div>' },
            ...localeProvide,
        })
        expect(wrapper.find('.custom-content').exists()).toBe(true)
    })
})
