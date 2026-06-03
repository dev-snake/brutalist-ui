import { mount } from '@vue/test-utils'
import { describe, it, expect, vi } from 'vitest'
import { ref, nextTick } from 'vue'
import GlitchText from './GlitchText.vue'

vi.mock('../../composables/useReducedMotion', () => ({
    useReducedMotion: () => ref(false)
}))

describe('GlitchText', () => {
    it('renders with default class names', () => {
        const wrapper = mount(GlitchText, {
            props: { text: 'Test Text' }
        })
        expect(wrapper.text()).toBe('Test Text')
        expect(wrapper.classes()).toContain('relative')
        expect(wrapper.classes()).toContain('inline-block')
    })

    it('prefers slot content over text prop', () => {
        const wrapper = mount(GlitchText, {
            props: { text: 'Prop Text' },
            slots: { default: 'Slot Text' }
        })
        expect(wrapper.text()).toBe('Slot Text')
    })

    it('toggles animation on click when trigger is click', async () => {
        const wrapper = mount(GlitchText, {
            props: { trigger: 'click', text: 'Click Test' }
        })

        expect(wrapper.classes()).not.toContain('is-glitching')

        await wrapper.trigger('click')
        expect(wrapper.classes()).toContain('is-glitching')

        await wrapper.trigger('click')
        expect(wrapper.classes()).not.toContain('is-glitching')
    })

    it('exposes play and stop methods', async () => {
        const wrapper = mount(GlitchText, {
            props: { trigger: 'none', text: 'Manual' }
        })

        expect(wrapper.classes()).not.toContain('is-glitching')

        wrapper.vm.play()
        await nextTick()
        expect(wrapper.classes()).toContain('is-glitching')

        wrapper.vm.stop()
        await nextTick()
        expect(wrapper.classes()).not.toContain('is-glitching')
    })

    it('applies speed variant classes', () => {
        const wrapper = mount(GlitchText, {
            props: { speed: 'slow', text: 'Slow' }
        })
        expect(wrapper.classes()).toContain('[--glitch-duration:800ms]')

        const wrapper2 = mount(GlitchText, {
            props: { speed: 'fast', text: 'Fast' }
        })
        expect(wrapper2.classes()).toContain('[--glitch-duration:100ms]')
    })
})
