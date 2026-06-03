import { mount } from '@vue/test-utils'
import { en } from '@/locales/en'
import { LOCALE_INJECTION_KEY } from '@/composables/useLocale'
import DataTableSection from './DataTableSection.vue'

const localeProvide = { global: { provide: { [LOCALE_INJECTION_KEY]: en } } }

const mockColumns = [
    { key: 'name', label: 'Name', sortable: true },
    { key: 'email', label: 'Email' },
    { key: 'role', label: 'Role', sortable: true },
]

const mockRows = [
    { name: 'Alice', email: 'alice@example.com', role: 'Admin' },
    { name: 'Bob', email: 'bob@example.com', role: 'User' },
    { name: 'Charlie', email: 'charlie@example.com', role: 'Editor' },
]

describe('DataTableSection', () => {
    it('renders with default props', () => {
        const wrapper = mount(DataTableSection, { ...localeProvide })
        expect(wrapper.find('h2').exists()).toBe(true)
    })

    it('renders custom title', () => {
        const wrapper = mount(DataTableSection, {
            props: { title: 'User List' },
            ...localeProvide,
        })
        expect(wrapper.find('h2').text()).toBe('User List')
    })

    it('renders column headers', () => {
        const wrapper = mount(DataTableSection, {
            props: { columns: mockColumns },
            ...localeProvide,
        })
        expect(wrapper.text()).toContain('Name')
        expect(wrapper.text()).toContain('Email')
        expect(wrapper.text()).toContain('Role')
    })

    it('renders rows', () => {
        const wrapper = mount(DataTableSection, {
            props: { columns: mockColumns, rows: mockRows },
            ...localeProvide,
        })
        expect(wrapper.text()).toContain('Alice')
        expect(wrapper.text()).toContain('bob@example.com')
        expect(wrapper.text()).toContain('Editor')
    })

    it('shows search input when searchable is true', () => {
        const wrapper = mount(DataTableSection, {
            props: { searchable: true },
            ...localeProvide,
        })
        expect(wrapper.find('input').exists()).toBe(true)
    })

    it('hides search input when searchable is false', () => {
        const wrapper = mount(DataTableSection, {
            props: { searchable: false },
            ...localeProvide,
        })
        expect(wrapper.find('input').exists()).toBe(false)
    })

    it('emits sort event when sortable column header is clicked', async () => {
        const wrapper = mount(DataTableSection, {
            props: { columns: mockColumns, rows: mockRows },
            ...localeProvide,
        })
        const headers = wrapper.findAll('th')
        await headers[0].trigger('click')
        expect(wrapper.emitted('sort')).toBeTruthy()
        expect(wrapper.emitted('sort')![0]).toEqual([{ key: 'name', direction: 'asc' }])
    })

    it('emits row-click event when a row is clicked', async () => {
        const wrapper = mount(DataTableSection, {
            props: { columns: mockColumns, rows: mockRows },
            ...localeProvide,
        })
        const rows = wrapper.findAll('tbody tr')
        await rows[0].trigger('click')
        expect(wrapper.emitted('row-click')).toBeTruthy()
        expect(wrapper.emitted('row-click')![0]).toEqual([mockRows[0]])
    })

    it('shows no results message when rows are empty', () => {
        const wrapper = mount(DataTableSection, {
            props: { columns: mockColumns, rows: [] },
            ...localeProvide,
        })
        expect(wrapper.text()).toContain('No matching results found')
    })

    it('applies custom class', () => {
        const wrapper = mount(DataTableSection, {
            props: { class: 'my-table' },
            ...localeProvide,
        })
        expect(wrapper.classes()).toContain('my-table')
    })

    it('renders header slot', () => {
        const wrapper = mount(DataTableSection, {
            slots: { header: '<div class="custom-header">Custom Header</div>' },
            ...localeProvide,
        })
        expect(wrapper.find('.custom-header').exists()).toBe(true)
    })

    it('renders footer slot', () => {
        const wrapper = mount(DataTableSection, {
            slots: { footer: '<div class="custom-footer">Custom Footer</div>' },
            ...localeProvide,
        })
        expect(wrapper.find('.custom-footer').exists()).toBe(true)
    })

    it('renders default slot', () => {
        const wrapper = mount(DataTableSection, {
            slots: { default: '<div class="custom-content">Custom Content</div>' },
            ...localeProvide,
        })
        expect(wrapper.find('.custom-content').exists()).toBe(true)
    })

    it('filters rows by search query', async () => {
        const wrapper = mount(DataTableSection, {
            props: { columns: mockColumns, rows: mockRows, searchable: true },
            ...localeProvide,
        })
        const input = wrapper.find('input')
        await input.setValue('Alice')
        expect(wrapper.text()).toContain('Alice')
        expect(wrapper.text()).not.toContain('Bob')
    })

    it('shows pagination when total pages exceed 1', () => {
        const manyRows = Array.from({ length: 15 }, (_, i) => ({
            name: `User ${i + 1}`,
            email: `user${i + 1}@example.com`,
            role: 'User',
        }))
        const wrapper = mount(DataTableSection, {
            props: { columns: mockColumns, rows: manyRows, pageSize: 10 },
            ...localeProvide,
        })
        expect(wrapper.find('nav').exists()).toBe(true)
    })
})
