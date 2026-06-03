import { mount } from '@vue/test-utils'
import { en } from '@/locales/en'
import { LOCALE_INJECTION_KEY } from '@/composables/useLocale'
import ActivityLogPage from './ActivityLogPage.vue'

const localeProvide = { global: { provide: { [LOCALE_INJECTION_KEY]: en } } }

const mockActivities = [
    { id: '1', action: 'User logged in', user: 'Alice', timestamp: '2026-01-01 10:00', details: 'Via SSO', type: 'info' as const },
    { id: '2', action: 'File deleted', user: 'Bob', timestamp: '2026-01-01 11:00', details: 'report.pdf', type: 'warning' as const },
    { id: '3', action: 'Deploy failed', user: 'Charlie', timestamp: '2026-01-01 12:00', details: 'Build error', type: 'error' as const },
    { id: '4', action: 'Payment received', user: 'Diana', timestamp: '2026-01-01 13:00', type: 'success' as const },
]

describe('ActivityLogPage', () => {
    it('renders with default props', () => {
        const wrapper = mount(ActivityLogPage, { ...localeProvide })
        expect(wrapper.find('h1').exists()).toBe(true)
    })

    it('renders default title from i18n', () => {
        const wrapper = mount(ActivityLogPage, { ...localeProvide })
        expect(wrapper.find('h1').text()).toBe('Activity Log')
    })

    it('renders custom title', () => {
        const wrapper = mount(ActivityLogPage, {
            props: { title: 'System Log' },
            ...localeProvide,
        })
        expect(wrapper.find('h1').text()).toBe('System Log')
    })

    it('renders table headers', () => {
        const wrapper = mount(ActivityLogPage, {
            props: { activities: mockActivities },
            ...localeProvide,
        })
        expect(wrapper.text()).toContain('Action')
        expect(wrapper.text()).toContain('User')
        expect(wrapper.text()).toContain('Timestamp')
        expect(wrapper.text()).toContain('Details')
    })

    it('renders activity entries', () => {
        const wrapper = mount(ActivityLogPage, {
            props: { activities: mockActivities },
            ...localeProvide,
        })
        expect(wrapper.text()).toContain('User logged in')
        expect(wrapper.text()).toContain('File deleted')
        expect(wrapper.text()).toContain('Deploy failed')
        expect(wrapper.text()).toContain('Payment received')
    })

    it('renders user column', () => {
        const wrapper = mount(ActivityLogPage, {
            props: { activities: mockActivities },
            ...localeProvide,
        })
        expect(wrapper.text()).toContain('Alice')
        expect(wrapper.text()).toContain('Bob')
    })

    it('renders timestamp column', () => {
        const wrapper = mount(ActivityLogPage, {
            props: { activities: mockActivities },
            ...localeProvide,
        })
        expect(wrapper.text()).toContain('2026-01-01 10:00')
    })

    it('renders type badges', () => {
        const wrapper = mount(ActivityLogPage, {
            props: { activities: mockActivities },
            ...localeProvide,
        })
        expect(wrapper.text()).toContain('info')
        expect(wrapper.text()).toContain('warning')
        expect(wrapper.text()).toContain('error')
        expect(wrapper.text()).toContain('success')
    })

    it('shows dash for entries without details', () => {
        const wrapper = mount(ActivityLogPage, {
            props: { activities: mockActivities },
            ...localeProvide,
        })
        expect(wrapper.text()).toContain('—')
    })

    it('emits entry-click when a row is clicked', async () => {
        const wrapper = mount(ActivityLogPage, {
            props: { activities: mockActivities },
            ...localeProvide,
        })
        const rows = wrapper.findAll('tr')
        const dataRow = rows.find(row => row.text().includes('User logged in'))
        await dataRow!.trigger('click')
        expect(wrapper.emitted('entry-click')).toBeTruthy()
        expect(wrapper.emitted('entry-click')![0]).toEqual(['1'])
    })

    it('renders pagination when activities exceed page size', () => {
        const manyActivities = Array.from({ length: 15 }, (_, i) => ({
            id: String(i + 1),
            action: `Action ${i + 1}`,
            user: 'User',
            timestamp: '2026-01-01',
            type: 'info' as const,
        }))
        const wrapper = mount(ActivityLogPage, {
            props: { activities: manyActivities },
            ...localeProvide,
        })
        expect(wrapper.find('nav').exists()).toBe(true)
    })

    it('shows empty state when no activities', () => {
        const wrapper = mount(ActivityLogPage, {
            props: { activities: [] },
            ...localeProvide,
        })
        expect(wrapper.text()).toContain('No activity found')
    })

    it('applies custom class', () => {
        const wrapper = mount(ActivityLogPage, {
            props: { class: 'my-log' },
            ...localeProvide,
        })
        expect(wrapper.classes()).toContain('my-log')
    })

    it('renders header slot', () => {
        const wrapper = mount(ActivityLogPage, {
            slots: { header: '<div class="custom-header">Custom Header</div>' },
            ...localeProvide,
        })
        expect(wrapper.find('.custom-header').exists()).toBe(true)
    })

    it('renders footer slot', () => {
        const wrapper = mount(ActivityLogPage, {
            slots: { footer: '<div class="custom-footer">Custom Footer</div>' },
            ...localeProvide,
        })
        expect(wrapper.find('.custom-footer').exists()).toBe(true)
    })

    it('renders default slot', () => {
        const wrapper = mount(ActivityLogPage, {
            slots: { default: '<div class="custom-content">Custom Content</div>' },
            ...localeProvide,
        })
        expect(wrapper.find('.custom-content').exists()).toBe(true)
    })
})
