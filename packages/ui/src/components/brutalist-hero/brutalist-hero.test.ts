import { mount } from '@vue/test-utils'
import { en } from '@/locales/en'
import { LOCALE_INJECTION_KEY } from '@/composables/useLocale'
import BrutalistHero from './BrutalistHero.vue'

const localeProvide = { global: { provide: { [LOCALE_INJECTION_KEY]: en } } }

describe('BrutalistHero', () => {
    it('renders with default props', () => {
        const wrapper = mount(BrutalistHero, { ...localeProvide })
        expect(wrapper.find('h1').text()).toBe('Build Bold Interfaces Faster with BrutxUI')
    })

    it('shows custom title', () => {
        const wrapper = mount(BrutalistHero, {
            props: { title: 'Custom Hero Title' },
            ...localeProvide,
        })
        expect(wrapper.find('h1').text()).toBe('Custom Hero Title')
    })

    it('shows subtitle when provided', () => {
        const wrapper = mount(BrutalistHero, {
            props: { subtitle: 'A custom subtitle' },
            ...localeProvide,
        })
        expect(wrapper.text()).toContain('A custom subtitle')
    })

    it('does not render subtitle when not provided', () => {
        const wrapper = mount(BrutalistHero, { ...localeProvide })
        const subtitleEl = wrapper.find('p.text-lg')
        expect(subtitleEl.exists()).toBe(false)
    })

    it('shows default primary CTA text', () => {
        const wrapper = mount(BrutalistHero, { ...localeProvide })
        expect(wrapper.text()).toContain('Get Started Now')
    })

    it('shows default secondary CTA text', () => {
        const wrapper = mount(BrutalistHero, { ...localeProvide })
        expect(wrapper.text()).toContain('View Component Registry')
    })

    it('shows custom primary CTA text', () => {
        const wrapper = mount(BrutalistHero, {
            props: { primaryCtaText: 'Start Free' },
            ...localeProvide,
        })
        expect(wrapper.text()).toContain('Start Free')
    })

    it('shows custom secondary CTA text', () => {
        const wrapper = mount(BrutalistHero, {
            props: { secondaryCtaText: 'See Docs' },
            ...localeProvide,
        })
        expect(wrapper.text()).toContain('See Docs')
    })

    it('emits primaryCta when primary button is clicked', async () => {
        const wrapper = mount(BrutalistHero, { ...localeProvide })
        const buttons = wrapper.findAll('button')
        const primaryButton = buttons.find(b => b.text().includes('Get Started Now'))
        expect(primaryButton).toBeTruthy()
        await primaryButton!.trigger('click')
        expect(wrapper.emitted('primaryCta')).toBeTruthy()
        expect(wrapper.emitted('primaryCta')!.length).toBe(1)
    })

    it('emits secondaryCta when secondary button is clicked', async () => {
        const wrapper = mount(BrutalistHero, { ...localeProvide })
        const buttons = wrapper.findAll('button')
        const secondaryButton = buttons.find(b => b.text().includes('View Component Registry'))
        expect(secondaryButton).toBeTruthy()
        await secondaryButton!.trigger('click')
        expect(wrapper.emitted('secondaryCta')).toBeTruthy()
        expect(wrapper.emitted('secondaryCta')!.length).toBe(1)
    })

    it('renders Neo-Brutalism UI badge', () => {
        const wrapper = mount(BrutalistHero, { ...localeProvide })
        expect(wrapper.text()).toContain('Neo-Brutalism UI')
    })

    it('renders terminal code block', () => {
        const wrapper = mount(BrutalistHero, { ...localeProvide })
        expect(wrapper.text()).toContain('npx brutxui init')
    })

    it('applies custom class', () => {
        const wrapper = mount(BrutalistHero, {
            props: { class: 'my-hero' },
            ...localeProvide,
        })
        expect(wrapper.classes()).toContain('my-hero')
    })
})
