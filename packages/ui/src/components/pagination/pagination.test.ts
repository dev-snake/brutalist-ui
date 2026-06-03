import { mount } from '@vue/test-utils'
import { en } from '@/locales/en'
import { LOCALE_INJECTION_KEY } from '@/composables/useLocale'
import Pagination from './Pagination.vue'

const FIRST_PAGE = 1
const FIRST_PAGES_COUNT = 3
const DEFAULT_SIBLING_COUNT = 1
const globalProvide = { global: { provide: { [LOCALE_INJECTION_KEY]: en } } }

function getPageNumbers(wrapper: ReturnType<typeof mount>) {
    return wrapper.findAll('button[aria-label^="Go to page"]').map((btn) => Number(btn.text()))
}

function getDotsCount(wrapper: ReturnType<typeof mount>) {
    return wrapper.findAll('span').filter((el) => el.text().includes('•••')).length
}

describe('Pagination', () => {
    it('renders with default props', () => {
        const wrapper = mount(Pagination, {
            props: { totalPages: 5, currentPage: 1 },
            ...globalProvide,
        })
        expect(wrapper.find('nav').exists()).toBe(true)
        expect(wrapper.find('nav').attributes('role')).toBe('navigation')
        expect(wrapper.find('nav').attributes('aria-label')).toBe('pagination')
    })

    it('emits update:currentPage when page is clicked', async () => {
        const wrapper = mount(Pagination, {
            props: { totalPages: 5, currentPage: 1 },
            ...globalProvide,
        })
        const pageButtons = wrapper.findAll('button[aria-label^="Go to page"]')
        expect(pageButtons.length).toBeGreaterThan(0)
        await pageButtons[1].trigger('click')
        expect(wrapper.emitted('update:currentPage')).toBeTruthy()
        expect(wrapper.emitted('update:currentPage')![0]).toEqual([2])
    })

    it('shows correct page numbers', () => {
        const wrapper = mount(Pagination, {
            props: { totalPages: 5, currentPage: 3 },
            ...globalProvide,
        })
        const pageButtons = wrapper.findAll('button[aria-label^="Go to page"]')
        const pageNumbers = pageButtons.map((btn) => btn.text())
        expect(pageNumbers).toContain('1')
        expect(pageNumbers).toContain('3')
        expect(pageNumbers).toContain('5')
    })

    it('applies custom class', () => {
        const wrapper = mount(Pagination, {
            props: { totalPages: 5, currentPage: 1, class: 'custom-pagination' },
            ...globalProvide,
        })
        expect(wrapper.find('nav').classes()).toContain('custom-pagination')
    })

    it('highlights current page', () => {
        const wrapper = mount(Pagination, {
            props: { totalPages: 5, currentPage: 3 },
            ...globalProvide,
        })
        const activePage = wrapper.find('button[aria-current="page"]')
        expect(activePage.exists()).toBe(true)
        expect(activePage.text()).toBe('3')
    })

    it('disables previous button on first page', () => {
        const wrapper = mount(Pagination, {
            props: { totalPages: 5, currentPage: 1 },
            ...globalProvide,
        })
        const prevButton = wrapper.find('button[aria-label="Go to previous page"]')
        expect(prevButton.attributes('disabled')).toBeDefined()
    })

    it('disables next button on last page', () => {
        const wrapper = mount(Pagination, {
            props: { totalPages: 5, currentPage: 5 },
            ...globalProvide,
        })
        const nextButton = wrapper.find('button[aria-label="Go to next page"]')
        expect(nextButton.attributes('disabled')).toBeDefined()
    })

    it('shows first and last buttons when showFirstLast is true', () => {
        const wrapper = mount(Pagination, {
            props: { totalPages: 5, currentPage: 1, showFirstLast: true },
            ...globalProvide,
        })
        expect(wrapper.find('button[aria-label="Go to first page"]').exists()).toBe(true)
        expect(wrapper.find('button[aria-label="Go to last page"]').exists()).toBe(true)
    })

    it('hides first and last buttons when showFirstLast is false', () => {
        const wrapper = mount(Pagination, {
            props: { totalPages: 5, currentPage: 1, showFirstLast: false },
            ...globalProvide,
        })
        expect(wrapper.find('button[aria-label="Go to first page"]').exists()).toBe(false)
        expect(wrapper.find('button[aria-label="Go to last page"]').exists()).toBe(false)
    })

    it('shows page counter when showPageNumbers is false', () => {
        const wrapper = mount(Pagination, {
            props: { totalPages: 5, currentPage: 3, showPageNumbers: false },
            ...globalProvide,
        })
        expect(wrapper.text()).toContain('3 / 5')
    })

    it('shows dots for large page ranges', () => {
        const wrapper = mount(Pagination, {
            props: { totalPages: 20, currentPage: 10 },
            ...globalProvide,
        })
        const dots = wrapper.findAll('span').filter((el) => el.text().includes('•••'))
        expect(dots.length).toBeGreaterThan(0)
    })

    it('emits correct page when first button clicked', async () => {
        const wrapper = mount(Pagination, {
            props: { totalPages: 5, currentPage: 3, showFirstLast: true },
            ...globalProvide,
        })
        await wrapper.find('button[aria-label="Go to first page"]').trigger('click')
        expect(wrapper.emitted('update:currentPage')![0]).toEqual([1])
    })

    it('emits correct page when last button clicked', async () => {
        const wrapper = mount(Pagination, {
            props: { totalPages: 5, currentPage: 3, showFirstLast: true },
            ...globalProvide,
        })
        await wrapper.find('button[aria-label="Go to last page"]').trigger('click')
        expect(wrapper.emitted('update:currentPage')![0]).toEqual([5])
    })

    it('emits correct page when next button clicked', async () => {
        const wrapper = mount(Pagination, {
            props: { totalPages: 5, currentPage: 3 },
            ...globalProvide,
        })
        await wrapper.find('button[aria-label="Go to next page"]').trigger('click')
        expect(wrapper.emitted('update:currentPage')![0]).toEqual([4])
    })

    it('emits correct page when previous button clicked', async () => {
        const wrapper = mount(Pagination, {
            props: { totalPages: 5, currentPage: 3 },
            ...globalProvide,
        })
        await wrapper.find('button[aria-label="Go to previous page"]').trigger('click')
        expect(wrapper.emitted('update:currentPage')![0]).toEqual([2])
    })

    it('shows right dots only when current page is near start', () => {
        const totalPages = 10
        const currentPage = FIRST_PAGE
        const wrapper = mount(Pagination, {
            props: { totalPages, currentPage },
            ...globalProvide,
        })
        const leftEndIndex = FIRST_PAGES_COUNT + 2 * DEFAULT_SIBLING_COUNT
        const expectedPages = [
            ...Array.from({ length: leftEndIndex }, (_, i) => i + FIRST_PAGE),
            totalPages,
        ]
        expect(getPageNumbers(wrapper)).toEqual(expectedPages)
        expect(getDotsCount(wrapper)).toBe(1)
    })

    it('shows left dots only when current page is near end', () => {
        const totalPages = 10
        const currentPage = totalPages
        const wrapper = mount(Pagination, {
            props: { totalPages, currentPage },
            ...globalProvide,
        })
        const rightEndIndex = FIRST_PAGES_COUNT + 2 * DEFAULT_SIBLING_COUNT
        const expectedPages = [
            FIRST_PAGE,
            ...Array.from({ length: rightEndIndex }, (_, i) => totalPages - rightEndIndex + i + 1),
        ]
        expect(getPageNumbers(wrapper)).toEqual(expectedPages)
        expect(getDotsCount(wrapper)).toBe(1)
    })

    it('shows both left and right dots when current page is in the middle', () => {
        const totalPages = 10
        const currentPage = 5
        const wrapper = mount(Pagination, {
            props: { totalPages, currentPage },
            ...globalProvide,
        })
        const leftSiblingIndex = currentPage - DEFAULT_SIBLING_COUNT
        const rightSiblingIndex = currentPage + DEFAULT_SIBLING_COUNT
        const middlePages = Array.from(
            { length: rightSiblingIndex - leftSiblingIndex + 1 },
            (_, i) => leftSiblingIndex + i
        )
        const expectedPages = [FIRST_PAGE, ...middlePages, totalPages]
        expect(getPageNumbers(wrapper)).toEqual(expectedPages)
        expect(getDotsCount(wrapper)).toBe(2)
    })

    it('applies rounded variant classes', () => {
        const wrapper = mount(Pagination, {
            props: { totalPages: 5, currentPage: 1, variant: 'rounded' },
            ...globalProvide,
        })
        expect(wrapper.find('nav').classes()).toContain('[&_button]:rounded-brutal')
    })

    it('applies minimal variant classes', () => {
        const wrapper = mount(Pagination, {
            props: { totalPages: 5, currentPage: 1, variant: 'minimal' },
            ...globalProvide,
        })
        expect(wrapper.find('nav').classes()).toContain('[&_button]:border-transparent')
        expect(wrapper.find('nav').classes()).toContain('[&_button]:shadow-none')
    })

    it('applies sm size classes', () => {
        const wrapper = mount(Pagination, {
            props: { totalPages: 5, currentPage: 1, size: 'sm' },
            ...globalProvide,
        })
        expect(wrapper.find('nav').classes()).toContain('gap-1')
    })

    it('applies lg size classes', () => {
        const wrapper = mount(Pagination, {
            props: { totalPages: 5, currentPage: 1, size: 'lg' },
            ...globalProvide,
        })
        expect(wrapper.find('nav').classes()).toContain('gap-3')
    })

    it('respects siblingCount prop for wider middle range', () => {
        const siblingCount = 2
        const totalPages = 20
        const currentPage = 10
        const wrapper = mount(Pagination, {
            props: { totalPages, currentPage, siblingCount },
            ...globalProvide,
        })
        const leftSiblingIndex = currentPage - siblingCount
        const rightSiblingIndex = currentPage + siblingCount
        const middlePages = Array.from(
            { length: rightSiblingIndex - leftSiblingIndex + 1 },
            (_, i) => leftSiblingIndex + i
        )
        const expectedPages = [FIRST_PAGE, ...middlePages, totalPages]
        expect(getPageNumbers(wrapper)).toEqual(expectedPages)
        expect(getDotsCount(wrapper)).toBe(2)
    })
})
