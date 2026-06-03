import { mount } from '@vue/test-utils'
import Marquee from './Marquee.vue'

describe('Marquee', () => {
    it('renders container with base classes', () => {
        const wrapper = mount(Marquee, {
            slots: { default: 'Item' },
        })
        const container = wrapper.find('div')
        expect(container.exists()).toBe(true)
        expect(container.classes()).toContain('relative')
        expect(container.classes()).toContain('flex')
        expect(container.classes()).toContain('overflow-hidden')
        expect(container.classes()).toContain('border-y-3')
        expect(container.classes()).toContain('border-brutal')
        expect(container.classes()).toContain('bg-brutal-accent')
        expect(container.classes()).toContain('text-brutal-fg')
        expect(container.classes()).toContain('font-black')
        expect(container.classes()).toContain('uppercase')
        expect(container.classes()).toContain('select-none')
    })

    it('renders two tracks', () => {
        const wrapper = mount(Marquee, {
            slots: { default: 'Item' },
        })
        const tracks = wrapper.findAll('[class*="animate-marquee"]')
        expect(tracks.length).toBe(2)
    })

    it('second track has aria-hidden attribute', () => {
        const wrapper = mount(Marquee, {
            slots: { default: 'Item' },
        })
        const tracks = wrapper.findAll('[class*="animate-marquee"]')
        expect(tracks[1].attributes('aria-hidden')).toBe('true')
    })

    it('applies left direction class by default', () => {
        const wrapper = mount(Marquee, {
            slots: { default: 'Item' },
        })
        const tracks = wrapper.findAll('[class*="animate-marquee"]')
        expect(tracks[0].classes()).toContain('animate-marquee-left')
    })

    it('applies right direction class', () => {
        const wrapper = mount(Marquee, {
            props: { direction: 'right' },
            slots: { default: 'Item' },
        })
        const tracks = wrapper.findAll('[class*="animate-marquee"]')
        expect(tracks[0].classes()).toContain('animate-marquee-right')
    })

    it('applies fade mask-image style when fade is true', () => {
        const wrapper = mount(Marquee, {
            props: { fade: true },
            slots: { default: 'Item' },
        })
        const container = wrapper.find('div')
        const classList = container.classes().join(' ')
        expect(classList).toContain('mask-image')
    })

    it('does not apply mask-image when fade is false', () => {
        const wrapper = mount(Marquee, {
            props: { fade: false },
            slots: { default: 'Item' },
        })
        const container = wrapper.find('div')
        const classList = container.classes().join(' ')
        expect(classList).not.toContain('mask-image')
    })

    it('applies custom class', () => {
        const wrapper = mount(Marquee, {
            props: { class: 'custom-class' },
            slots: { default: 'Item' },
        })
        const container = wrapper.find('div')
        expect(container.classes()).toContain('custom-class')
    })

    it('sets --speed CSS variable', () => {
        const wrapper = mount(Marquee, {
            props: { speed: 30 },
            slots: { default: 'Item' },
        })
        const container = wrapper.find('div')
        const style = container.attributes('style') ?? ''
        expect(style).toContain('--speed: 30s')
    })

    it('renders slot content in both tracks', () => {
        const wrapper = mount(Marquee, {
            slots: { default: 'MarqueeItem' },
        })
        expect(wrapper.text()).toContain('MarqueeItem')
    })
})
