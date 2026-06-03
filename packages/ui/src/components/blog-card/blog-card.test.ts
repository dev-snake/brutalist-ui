import { mount } from '@vue/test-utils'
import { en } from '@/locales/en'
import { LOCALE_INJECTION_KEY } from '@/composables/useLocale'
import BlogCard from './BlogCard.vue'

const localeProvide = { global: { provide: { [LOCALE_INJECTION_KEY]: en } } }

describe('BlogCard', () => {
    it('renders with default props', () => {
        const wrapper = mount(BlogCard, { ...localeProvide })
        expect(wrapper.text()).toContain('Getting Started with BrutxUI')
        expect(wrapper.text()).toContain('Learn how to build bold interfaces with our component library.')
    })

    it('shows custom title', () => {
        const wrapper = mount(BlogCard, {
            props: { title: 'Custom Blog Title' },
            ...localeProvide,
        })
        expect(wrapper.text()).toContain('Custom Blog Title')
    })

    it('shows custom excerpt', () => {
        const wrapper = mount(BlogCard, {
            props: { excerpt: 'A short preview of the article.' },
            ...localeProvide,
        })
        expect(wrapper.text()).toContain('A short preview of the article.')
    })

    it('shows category badge when provided', () => {
        const wrapper = mount(BlogCard, {
            props: { category: 'Vue 3' },
            ...localeProvide,
        })
        expect(wrapper.text()).toContain('Vue 3')
    })

    it('does not show category badge when not provided', () => {
        const wrapper = mount(BlogCard, { ...localeProvide })
        expect(wrapper.text()).not.toContain('Vue 3')
    })

    it('shows author and date when provided', () => {
        const wrapper = mount(BlogCard, {
            props: { author: 'Jane Doe', date: '2024-01-15' },
            ...localeProvide,
        })
        expect(wrapper.text()).toContain('Jane Doe')
        expect(wrapper.text()).toContain('2024-01-15')
    })

    it('renders Read More link', () => {
        const wrapper = mount(BlogCard, { ...localeProvide })
        expect(wrapper.text()).toContain('Read more')
    })

    it('applies custom class', () => {
        const wrapper = mount(BlogCard, {
            props: { class: 'my-blog' },
            ...localeProvide,
        })
        expect(wrapper.find('[class*="my-blog"]').exists()).toBe(true)
    })
})
