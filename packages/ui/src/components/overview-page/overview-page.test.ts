import { mount } from '@vue/test-utils'
import { en } from '@/locales/en'
import { LOCALE_INJECTION_KEY } from '@/composables/useLocale'
import OverviewPage from './OverviewPage.vue'
import type { OverviewStat } from './OverviewPage.vue'

const localeProvide = { global: { provide: { [LOCALE_INJECTION_KEY]: en } } }

describe('OverviewPage', () => {
    const mockStats: OverviewStat[] = [
        { title: 'Revenue', value: '$12,345', change: '+12%', trend: 'up' },
        { title: 'Users', value: '1,234', change: '-5%', trend: 'down' },
        { title: 'Orders', value: '567', change: '0%', trend: 'neutral' },
    ]

    it('renders with default props', () => {
        const wrapper = mount(OverviewPage, { ...localeProvide })
        expect(wrapper.text()).toContain('Overview')
    })

    it('shows custom title', () => {
        const wrapper = mount(OverviewPage, {
            props: { title: 'Dashboard' },
            ...localeProvide,
        })
        expect(wrapper.text()).toContain('Dashboard')
    })

    it('renders stats via DashboardStats', () => {
        const wrapper = mount(OverviewPage, {
            props: { stats: mockStats },
            ...localeProvide,
        })
        expect(wrapper.text()).toContain('Revenue')
        expect(wrapper.text()).toContain('$12,345')
        expect(wrapper.text()).toContain('Users')
        expect(wrapper.text()).toContain('1,234')
    })

    it('renders recent activity card', () => {
        const wrapper = mount(OverviewPage, { ...localeProvide })
        expect(wrapper.text()).toContain('Recent Activity')
    })

    it('renders quick stats card with stat items', () => {
        const wrapper = mount(OverviewPage, {
            props: { stats: mockStats },
            ...localeProvide,
        })
        expect(wrapper.text()).toContain('Quick Stats')
    })

    it('emits stat-click when quick stat item is clicked', async () => {
        const wrapper = mount(OverviewPage, {
            props: { stats: mockStats },
            ...localeProvide,
        })
        const statItems = wrapper.findAll('.cursor-pointer')
        expect(statItems.length).toBeGreaterThan(0)
        await statItems[0].trigger('click')
        expect(wrapper.emitted('stat-click')).toBeTruthy()
        expect(wrapper.emitted('stat-click')![0]).toEqual([0])
    })

    it('renders header slot', () => {
        const wrapper = mount(OverviewPage, {
            slots: { header: '<div class="custom-header">Custom Header</div>' },
            ...localeProvide,
        })
        expect(wrapper.text()).toContain('Custom Header')
    })

    it('renders default slot inside recent activity card', () => {
        const wrapper = mount(OverviewPage, {
            slots: { default: '<div class="custom-content">Activity Item</div>' },
            ...localeProvide,
        })
        expect(wrapper.text()).toContain('Activity Item')
    })

    it('renders footer slot', () => {
        const wrapper = mount(OverviewPage, {
            slots: { footer: '<div class="custom-footer">Custom Footer</div>' },
            ...localeProvide,
        })
        expect(wrapper.text()).toContain('Custom Footer')
    })

    it('applies custom class', () => {
        const wrapper = mount(OverviewPage, {
            props: { class: 'my-overview' },
            ...localeProvide,
        })
        expect(wrapper.find('[class*="my-overview"]').exists()).toBe(true)
    })
})
