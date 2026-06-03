import { mount } from '@vue/test-utils'
import { en } from '@/locales/en'
import { LOCALE_INJECTION_KEY } from '@/composables/useLocale'
import SaaSPricing from './SaaSPricing.vue'

const globalProvide = { global: { provide: { [LOCALE_INJECTION_KEY]: en } } }

describe('SaaSPricing', () => {
    const defaultPlans = [
        {
            name: 'Starter',
            description: 'For side projects',
            priceMonthly: '$0',
            priceAnnually: '$0',
            features: [
                { text: '5 components', included: true },
                { text: 'Priority updates', included: false },
            ],
            buttonText: 'Get Started',
            buttonVariant: 'outline' as const,
        },
        {
            name: 'Pro',
            description: 'For professionals',
            priceMonthly: '$19',
            priceAnnually: '$15',
            features: [
                { text: 'All components', included: true },
                { text: 'Priority updates', included: true },
            ],
            popular: true,
            buttonText: 'Go Pro',
            buttonVariant: 'primary' as const,
        },
    ]

    it('renders with default props', () => {
        const wrapper = mount(SaaSPricing, globalProvide)
        expect(wrapper.find('h2').text()).toBe('Simple, Unapologetic Pricing')
        expect(wrapper.findAll('.grid > div').length).toBe(3)
    })

    it('shows plan names and prices', () => {
        const wrapper = mount(SaaSPricing, {
            props: { plans: defaultPlans },
            ...globalProvide,
        })
        expect(wrapper.text()).toContain('Starter')
        expect(wrapper.text()).toContain('Pro')
        expect(wrapper.text()).toContain('$0')
        expect(wrapper.text()).toContain('$19')
    })

    it('shows monthly prices by default', () => {
        const wrapper = mount(SaaSPricing, {
            props: { plans: defaultPlans },
            ...globalProvide,
        })
        expect(wrapper.text()).toContain('$19')
        expect(wrapper.text()).toContain('/mo')
    })

    it('switches to annual prices when annually toggle is clicked', async () => {
        const wrapper = mount(SaaSPricing, {
            props: { plans: defaultPlans },
            ...globalProvide,
        })
        const buttons = wrapper.findAll('button')
        const annualButton = buttons.find(b => b.text() === 'Annually')
        expect(annualButton).toBeTruthy()
        await annualButton!.trigger('click')
        expect(wrapper.text()).toContain('$15')
        expect(wrapper.text()).toContain('billed annually')
    })

    it('switches back to monthly when monthly toggle is clicked', async () => {
        const wrapper = mount(SaaSPricing, {
            props: { plans: defaultPlans },
            ...globalProvide,
        })
        const buttons = wrapper.findAll('button')
        const annualButton = buttons.find(b => b.text() === 'Annually')
        await annualButton!.trigger('click')
        const monthlyButton = wrapper.findAll('button').find(b => b.text() === 'Monthly')
        await monthlyButton!.trigger('click')
        expect(wrapper.text()).toContain('$19')
        expect(wrapper.text()).toContain('/mo')
        expect(wrapper.text()).not.toContain('billed annually')
    })

    it('shows popular badge for popular plans', () => {
        const wrapper = mount(SaaSPricing, {
            props: { plans: defaultPlans },
            ...globalProvide,
        })
        expect(wrapper.text()).toContain('MOST POPULAR')
    })

    it('renders custom title', () => {
        const wrapper = mount(SaaSPricing, {
            props: { title: 'Custom Title' },
            ...globalProvide,
        })
        expect(wrapper.find('h2').text()).toBe('Custom Title')
    })

    it('renders subtitle when provided', () => {
        const wrapper = mount(SaaSPricing, {
            props: { subtitle: 'Custom subtitle' },
            ...globalProvide,
        })
        expect(wrapper.text()).toContain('Custom subtitle')
    })

    it('does not render subtitle when not provided', () => {
        const wrapper = mount(SaaSPricing, {
            props: { plans: [] },
            ...globalProvide,
        })
        const subtitleEl = wrapper.find('.text-center > p')
        expect(subtitleEl.exists()).toBe(false)
    })

    it('renders feature text for each plan', () => {
        const wrapper = mount(SaaSPricing, {
            props: { plans: defaultPlans },
            ...globalProvide,
        })
        expect(wrapper.text()).toContain('5 components')
        expect(wrapper.text()).toContain('Priority updates')
    })

    it('applies custom class', () => {
        const wrapper = mount(SaaSPricing, {
            props: { class: 'my-pricing' },
            ...globalProvide,
        })
        expect(wrapper.classes()).toContain('my-pricing')
    })
})
