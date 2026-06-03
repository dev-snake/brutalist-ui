import { mount } from '@vue/test-utils'
import { Activity } from 'lucide-vue-next'
import DashboardStats from './DashboardStats.vue'

describe('DashboardStats', () => {
    const mockStats = [
        {
            title: 'Revenue',
            value: '$12,345',
            description: 'Total revenue this month',
            change: '+12%',
            trend: 'up' as const,
            icon: Activity,
        },
        {
            title: 'Users',
            value: '1,234',
            description: 'Active users',
            change: '-5%',
            trend: 'down' as const,
            icon: Activity,
        },
        {
            title: 'Orders',
            value: '567',
            description: 'Total orders',
            change: '0%',
            trend: 'neutral' as const,
            icon: Activity,
            accentColor: 'secondary' as const,
            progress: 75,
        },
    ]

    it('renders with default props', () => {
        const wrapper = mount(DashboardStats)
        expect(wrapper.find('h2').text()).toBe('Overview Performance')
    })

    it('renders with stats prop', () => {
        const wrapper = mount(DashboardStats, {
            props: { stats: mockStats },
        })
        const cards = wrapper.findAll('.grid > div')
        expect(cards.length).toBe(3)
    })

    it('shows stat labels', () => {
        const wrapper = mount(DashboardStats, {
            props: { stats: mockStats },
        })
        expect(wrapper.text()).toContain('Revenue')
        expect(wrapper.text()).toContain('Users')
        expect(wrapper.text()).toContain('Orders')
    })

    it('shows stat values', () => {
        const wrapper = mount(DashboardStats, {
            props: { stats: mockStats },
        })
        expect(wrapper.text()).toContain('$12,345')
        expect(wrapper.text()).toContain('1,234')
        expect(wrapper.text()).toContain('567')
    })

    it('shows stat change values', () => {
        const wrapper = mount(DashboardStats, {
            props: { stats: mockStats },
        })
        expect(wrapper.text()).toContain('+12%')
        expect(wrapper.text()).toContain('-5%')
    })

    it('shows stat descriptions', () => {
        const wrapper = mount(DashboardStats, {
            props: { stats: mockStats },
        })
        expect(wrapper.text()).toContain('Total revenue this month')
        expect(wrapper.text()).toContain('Active users')
    })

    it('renders custom title', () => {
        const wrapper = mount(DashboardStats, {
            props: { title: 'My Dashboard' },
        })
        expect(wrapper.find('h2').text()).toBe('My Dashboard')
    })

    it('renders subtitle when provided', () => {
        const wrapper = mount(DashboardStats, {
            props: { subtitle: 'Monthly overview' },
        })
        expect(wrapper.text()).toContain('Monthly overview')
    })

    it('does not render subtitle when not provided', () => {
        const wrapper = mount(DashboardStats)
        const subtitleEl = wrapper.find('p.text-brutal-muted-foreground')
        expect(subtitleEl.exists()).toBe(false)
    })

    it('renders progress bar when progress is defined', () => {
        const wrapper = mount(DashboardStats, {
            props: { stats: mockStats },
        })
        const progressBar = wrapper.find('[style]')
        expect(progressBar.exists()).toBe(true)
    })

    it('renders with empty stats array', () => {
        const wrapper = mount(DashboardStats, {
            props: { stats: [] },
        })
        const cards = wrapper.findAll('.grid > div')
        expect(cards.length).toBe(0)
    })

    it('applies custom class', () => {
        const wrapper = mount(DashboardStats, {
            props: { class: 'my-stats' },
        })
        expect(wrapper.classes()).toContain('my-stats')
    })
})
