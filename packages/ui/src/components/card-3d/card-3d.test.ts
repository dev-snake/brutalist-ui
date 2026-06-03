import { mount } from '@vue/test-utils'
import { describe, it, expect, vi } from 'vitest'
import { ref } from 'vue'
import Card3D from './Card3D.vue'

vi.mock('../../composables/useReducedMotion', () => ({
    useReducedMotion: () => ref(false)
}))

describe('Card3D', () => {
    it('renders with default variant classes', () => {
        const wrapper = mount(Card3D)
        const card = wrapper.find('[role="region"]').find('div')
        expect(card.classes()).toContain('border-3')
        expect(card.classes()).toContain('border-brutal')
        expect(card.classes()).toContain('rounded-brutal')
    })

    it('renders slot content', () => {
        const wrapper = mount(Card3D, {
            slots: { default: 'Hello 3D' },
        })
        expect(wrapper.text()).toContain('Hello 3D')
    })

    it('merges custom class prop', () => {
        const wrapper = mount(Card3D, {
            props: { class: 'custom-class' },
        })
        expect(wrapper.classes()).toContain('custom-class')
    })

    it('resets rotation on pointer leave', async () => {
        const wrapper = mount(Card3D)
        const card = wrapper.find('[role="region"] > div:first-child')

        await card.trigger('pointermove', {
            clientX: 100,
            clientY: 100,
        })

        await card.trigger('pointerleave')

        const style = card.attributes('style') || ''
        expect(style).toContain('rotateX(0deg)')
        expect(style).toContain('rotateY(0deg)')
    })

    it('disables 3D effect when disabled prop is true', async () => {
        const wrapper = mount(Card3D, {
            props: { disabled: true },
        })
        const card = wrapper.find('[role="region"] > div:first-child')

        await card.trigger('pointermove', {
            clientX: 100,
            clientY: 100,
        })

        const style = card.attributes('style') || ''
        expect(style).toBe('')
    })

    it('respects prefers-reduced-motion', async () => {
        const wrapper = mount(Card3D, {
            props: { disabled: true },
        })
        const card = wrapper.find('[role="region"] > div:first-child')

        await card.trigger('pointermove', {
            clientX: 100,
            clientY: 100,
        })

        const style = card.attributes('style') || ''
        expect(style).not.toContain('rotateX')
        expect(style).not.toContain('rotateY')
    })

    it('applies shadow variant classes', () => {
        const wrapper = mount(Card3D, {
            props: { shadow: 'lg' },
        })
        const card = wrapper.find('[role="region"] > div:first-child')
        expect(card.classes()).toContain('shadow-brutal-lg')
    })
})
