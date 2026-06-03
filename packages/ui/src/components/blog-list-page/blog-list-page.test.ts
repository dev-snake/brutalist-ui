import { mount } from '@vue/test-utils'
import { en } from '@/locales/en'
import { LOCALE_INJECTION_KEY } from '@/composables/useLocale'
import BlogListPage from './BlogListPage.vue'

const localeProvide = { global: { provide: { [LOCALE_INJECTION_KEY]: en } } }

const mockPosts = [
    { title: 'Getting Started', excerpt: 'Learn the basics', author: 'Alice', date: '2026-01-01', category: 'Tutorial', slug: 'getting-started' },
    { title: 'Advanced Tips', excerpt: 'Go deeper', author: 'Bob', date: '2026-01-02', category: 'Guide', slug: 'advanced-tips' },
    { title: 'Release Notes', excerpt: 'What is new', author: 'Charlie', date: '2026-01-03', category: 'News', slug: 'release-notes' },
]

const mockCategories = ['Tutorial', 'Guide', 'News']

describe('BlogListPage', () => {
    it('renders with default props', () => {
        const wrapper = mount(BlogListPage, { ...localeProvide })
        expect(wrapper.find('h1').exists()).toBe(true)
    })

    it('renders default title from i18n', () => {
        const wrapper = mount(BlogListPage, { ...localeProvide })
        expect(wrapper.find('h1').text()).toBe('Blog')
    })

    it('renders custom title', () => {
        const wrapper = mount(BlogListPage, {
            props: { title: 'My Blog' },
            ...localeProvide,
        })
        expect(wrapper.find('h1').text()).toBe('My Blog')
    })

    it('renders blog post cards', () => {
        const wrapper = mount(BlogListPage, {
            props: { posts: mockPosts },
            ...localeProvide,
        })
        expect(wrapper.text()).toContain('Getting Started')
        expect(wrapper.text()).toContain('Advanced Tips')
        expect(wrapper.text()).toContain('Release Notes')
    })

    it('renders category badges', () => {
        const wrapper = mount(BlogListPage, {
            props: { posts: mockPosts, categories: mockCategories },
            ...localeProvide,
        })
        expect(wrapper.text()).toContain('Tutorial')
        expect(wrapper.text()).toContain('Guide')
        expect(wrapper.text()).toContain('News')
    })

    it('renders search input', () => {
        const wrapper = mount(BlogListPage, { ...localeProvide })
        expect(wrapper.find('input').exists()).toBe(true)
    })

    it('renders "All" category button', () => {
        const wrapper = mount(BlogListPage, {
            props: { categories: mockCategories },
            ...localeProvide,
        })
        expect(wrapper.text()).toContain('All')
    })

    it('emits post-click when a card is clicked', async () => {
        const wrapper = mount(BlogListPage, {
            props: { posts: mockPosts },
            ...localeProvide,
        })
        const cards = wrapper.findAllComponents({ name: 'Card' })
        await cards[0].trigger('click')
        expect(wrapper.emitted('post-click')).toBeTruthy()
        expect(wrapper.emitted('post-click')![0]).toEqual(['getting-started'])
    })

    it('emits category-filter when a category badge is clicked', async () => {
        const wrapper = mount(BlogListPage, {
            props: { posts: mockPosts, categories: mockCategories },
            ...localeProvide,
        })
        const badges = wrapper.findAllComponents({ name: 'Badge' })
        const categoryBadge = badges.find(b => b.text() === 'Tutorial')
        await categoryBadge!.trigger('click')
        expect(wrapper.emitted('category-filter')).toBeTruthy()
        expect(wrapper.emitted('category-filter')![0]).toEqual(['Tutorial'])
    })

    it('filters posts by search query', async () => {
        const wrapper = mount(BlogListPage, {
            props: { posts: mockPosts },
            ...localeProvide,
        })
        const input = wrapper.find('input')
        await input.setValue('Advanced')
        expect(wrapper.text()).toContain('Advanced Tips')
        expect(wrapper.text()).not.toContain('Getting Started')
    })

    it('shows empty state when no posts match', async () => {
        const wrapper = mount(BlogListPage, {
            props: { posts: mockPosts },
            ...localeProvide,
        })
        const input = wrapper.find('input')
        await input.setValue('nonexistent')
        expect(wrapper.text()).toContain('No posts found')
    })

    it('renders pagination when posts exceed page size', () => {
        const manyPosts = Array.from({ length: 10 }, (_, i) => ({
            title: `Post ${i + 1}`,
            excerpt: `Excerpt ${i + 1}`,
            author: 'Author',
            date: '2026-01-01',
            category: 'Blog',
            slug: `post-${i + 1}`,
        }))
        const wrapper = mount(BlogListPage, {
            props: { posts: manyPosts, pageSize: 6 },
            ...localeProvide,
        })
        expect(wrapper.find('nav').exists()).toBe(true)
    })

    it('applies custom class', () => {
        const wrapper = mount(BlogListPage, {
            props: { class: 'my-blog' },
            ...localeProvide,
        })
        expect(wrapper.classes()).toContain('my-blog')
    })

    it('renders header slot', () => {
        const wrapper = mount(BlogListPage, {
            slots: { header: '<div class="custom-header">Custom Header</div>' },
            ...localeProvide,
        })
        expect(wrapper.find('.custom-header').exists()).toBe(true)
    })

    it('renders footer slot', () => {
        const wrapper = mount(BlogListPage, {
            slots: { footer: '<div class="custom-footer">Custom Footer</div>' },
            ...localeProvide,
        })
        expect(wrapper.find('.custom-footer').exists()).toBe(true)
    })

    it('renders default slot', () => {
        const wrapper = mount(BlogListPage, {
            slots: { default: '<div class="custom-content">Custom Content</div>' },
            ...localeProvide,
        })
        expect(wrapper.find('.custom-content').exists()).toBe(true)
    })
})
