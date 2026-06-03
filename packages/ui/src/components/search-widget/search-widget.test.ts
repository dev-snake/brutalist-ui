import { mount } from '@vue/test-utils'
import { en } from '@/locales/en'
import { LOCALE_INJECTION_KEY } from '@/composables/useLocale'
import SearchWidget from './SearchWidget.vue'
import type { SearchSuggestion } from './SearchWidget.vue'

const localeProvide = { global: { provide: { [LOCALE_INJECTION_KEY]: en } } }

const sampleSuggestions: SearchSuggestion[] = [
    { label: 'Vue 3 Guide', value: 'vue3-guide', group: 'Documentation' },
    { label: 'React Guide', value: 'react-guide', group: 'Documentation' },
    { label: 'Tailwind CSS', value: 'tailwind-css', group: 'Tools' },
    { label: 'Vite Build Tool', value: 'vite', group: 'Tools' },
]

describe('SearchWidget', () => {
    it('renders with default props', () => {
        const wrapper = mount(SearchWidget, { ...localeProvide })
        expect(wrapper.find('input').exists()).toBe(true)
    })

    it('shows custom placeholder', () => {
        const wrapper = mount(SearchWidget, {
            props: { placeholder: 'Search components...' },
            ...localeProvide,
        })
        expect(wrapper.find('input').attributes('placeholder')).toBe('Search components...')
    })

    it('shows default placeholder from i18n', () => {
        const wrapper = mount(SearchWidget, { ...localeProvide })
        expect(wrapper.find('input').attributes('placeholder')).toBe('Search...')
    })

    it('emits search when input value changes', async () => {
        const wrapper = mount(SearchWidget, { ...localeProvide })
        const input = wrapper.find('input')
        await input.setValue('test query')
        expect(wrapper.emitted('search')).toBeTruthy()
        expect(wrapper.emitted('search')![0]).toEqual(['test query'])
    })

    it('shows filtered suggestions when typing', async () => {
        const wrapper = mount(SearchWidget, {
            props: { suggestions: sampleSuggestions },
            ...localeProvide,
        })
        const input = wrapper.find('input')
        await input.setValue('Vue')
        expect(wrapper.text()).toContain('Vue 3 Guide')
        expect(wrapper.text()).not.toContain('React Guide')
    })

    it('shows suggestions grouped by group field', async () => {
        const wrapper = mount(SearchWidget, {
            props: { suggestions: sampleSuggestions },
            ...localeProvide,
        })
        const input = wrapper.find('input')
        await input.setValue('Guide')
        expect(wrapper.text()).toContain('Documentation')
        expect(wrapper.text()).toContain('Vue 3 Guide')
        expect(wrapper.text()).toContain('React Guide')
    })

    it('emits select when a suggestion is clicked', async () => {
        const wrapper = mount(SearchWidget, {
            props: { suggestions: sampleSuggestions },
            ...localeProvide,
        })
        const input = wrapper.find('input')
        await input.setValue('Vue')
        const items = wrapper.findAll('[role="option"]')
        expect(items.length).toBeGreaterThan(0)
        await items[0].trigger('click')
        expect(wrapper.emitted('select')).toBeTruthy()
        expect(wrapper.emitted('select')![0][0]).toEqual({
            label: 'Vue 3 Guide',
            value: 'vue3-guide',
            group: 'Documentation',
        })
    })

    it('does not show suggestions list when query is empty', () => {
        const wrapper = mount(SearchWidget, {
            props: { suggestions: sampleSuggestions },
            ...localeProvide,
        })
        expect(wrapper.find('[role="listbox"]').exists()).toBe(false)
    })

    it('renders actions slot', () => {
        const wrapper = mount(SearchWidget, {
            slots: { actions: '<div class="custom-action">Custom Action</div>' },
            ...localeProvide,
        })
        expect(wrapper.text()).toContain('Custom Action')
    })

    it('applies custom class', () => {
        const wrapper = mount(SearchWidget, {
            props: { class: 'my-search' },
            ...localeProvide,
        })
        expect(wrapper.find('[class*="my-search"]').exists()).toBe(true)
    })
})
