import { mount } from '@vue/test-utils'
import PricingSection from './PricingSection.vue'

describe('PricingSection', () => {
    const mockPlans = [
        {
            name: 'Basic',
            price: '$9',
            description: 'For beginners',
            features: ['1 project', 'Basic support'],
            ctaText: 'Start Basic',
            variant: 'default' as const,
        },
        {
            name: 'Pro',
            price: '$29',
            description: 'For professionals',
            features: ['Unlimited projects', 'Priority support', 'Custom themes'],
            ctaText: 'Go Pro',
            popular: true,
            variant: 'primary' as const,
        },
        {
            name: 'Team',
            price: '$99',
            description: 'For teams',
            features: ['Everything in Pro', 'Team management', 'SSO'],
            ctaText: 'Contact Sales',
            variant: 'secondary' as const,
        },
    ]

    it('renders with default props', () => {
        const wrapper = mount(PricingSection)
        expect(wrapper.find('h2').text()).toBe('Simple, Transparent Brutalist Plans')
    })

    it('renders with plans prop', () => {
        const wrapper = mount(PricingSection, {
            props: { plans: mockPlans },
        })
        const cards = wrapper.findAll('.grid > div')
        expect(cards.length).toBe(3)
    })

    it('shows plan names', () => {
        const wrapper = mount(PricingSection, {
            props: { plans: mockPlans },
        })
        expect(wrapper.text()).toContain('Basic')
        expect(wrapper.text()).toContain('Pro')
        expect(wrapper.text()).toContain('Team')
    })

    it('shows plan prices', () => {
        const wrapper = mount(PricingSection, {
            props: { plans: mockPlans },
        })
        expect(wrapper.text()).toContain('$9')
        expect(wrapper.text()).toContain('$29')
        expect(wrapper.text()).toContain('$99')
    })

    it('shows plan features', () => {
        const wrapper = mount(PricingSection, {
            props: { plans: mockPlans },
        })
        expect(wrapper.text()).toContain('1 project')
        expect(wrapper.text()).toContain('Priority support')
        expect(wrapper.text()).toContain('Team management')
    })

    it('shows popular badge for popular plans', () => {
        const wrapper = mount(PricingSection, {
            props: { plans: mockPlans },
        })
        expect(wrapper.text()).toContain('Most Popular Tier')
    })

    it('renders custom title', () => {
        const wrapper = mount(PricingSection, {
            props: { title: 'Custom Pricing Title' },
        })
        expect(wrapper.find('h2').text()).toBe('Custom Pricing Title')
    })

    it('renders subtitle when provided', () => {
        const wrapper = mount(PricingSection, {
            props: { subtitle: 'Choose your plan' },
        })
        expect(wrapper.text()).toContain('Choose your plan')
    })

    it('does not render subtitle when not provided', () => {
        const wrapper = mount(PricingSection)
        const subtitleEl = wrapper.find('p.text-brutal-muted-foreground')
        expect(subtitleEl.exists()).toBe(false)
    })

    it('renders with empty plans array', () => {
        const wrapper = mount(PricingSection, {
            props: { plans: [] },
        })
        const cards = wrapper.findAll('.grid > div')
        expect(cards.length).toBe(0)
    })

    it('shows lifetime pricing label', () => {
        const wrapper = mount(PricingSection, {
            props: { plans: mockPlans },
        })
        expect(wrapper.text()).toContain('/ lifetime')
    })

    it('applies custom class', () => {
        const wrapper = mount(PricingSection, {
            props: { class: 'my-pricing' },
        })
        expect(wrapper.classes()).toContain('my-pricing')
    })
})
