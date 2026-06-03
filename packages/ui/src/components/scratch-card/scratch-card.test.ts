import { mount } from '@vue/test-utils'
import { describe, it, expect, vi, beforeAll } from 'vitest'
import { ref } from 'vue'
import ScratchCard from './ScratchCard.vue'

vi.mock('../../composables/useReducedMotion', () => ({
    useReducedMotion: () => ref(false)
}))

beforeAll(() => {
    HTMLCanvasElement.prototype.getContext = vi.fn().mockReturnValue({
        clearRect: vi.fn(),
        fillRect: vi.fn(),
        beginPath: vi.fn(),
        moveTo: vi.fn(),
        lineTo: vi.fn(),
        stroke: vi.fn(),
        save: vi.fn(),
        restore: vi.fn(),
        scale: vi.fn(),
        arc: vi.fn(),
        fill: vi.fn(),
        getImageData: vi.fn().mockReturnValue({
            data: new Uint8ClampedArray(400)
        })
    }) as any
})

describe('ScratchCard', () => {
    it('renders slot content', () => {
        const wrapper = mount(ScratchCard, {
            slots: { default: 'Secret Reward' }
        })
        expect(wrapper.text()).toContain('Secret Reward')
    })

    it('reveals content on Enter key press', async () => {
        const wrapper = mount(ScratchCard)
        expect((wrapper.vm as any).isRevealed).toBe(false)

        await wrapper.trigger('keydown', { key: 'Enter' })
        expect((wrapper.vm as any).isRevealed).toBe(true)
    })

    it('reveals content on Space key press', async () => {
        const wrapper = mount(ScratchCard)
        expect((wrapper.vm as any).isRevealed).toBe(false)

        await wrapper.trigger('keydown', { key: ' ' })
        expect((wrapper.vm as any).isRevealed).toBe(true)
    })

    it('emits progress event when scratching', async () => {
        const wrapper = mount(ScratchCard, {
            slots: { default: 'Content' }
        })

        const canvas = wrapper.find('canvas')
        await canvas.trigger('pointerdown', {
            clientX: 50,
            clientY: 50,
        })

        await canvas.trigger('pointermove', {
            clientX: 60,
            clientY: 60,
        })

        await canvas.trigger('pointerup')

        const progressEvents = wrapper.emitted('progress')
        expect(progressEvents).toBeTruthy()
    })

    it('emits completed event when revealAll is called', async () => {
        vi.useFakeTimers()

        const wrapper = mount(ScratchCard, {
            slots: { default: 'Content' }
        })

        ;(wrapper.vm as any).revealAll()

        await vi.advanceTimersByTimeAsync(500)

        expect(wrapper.emitted('completed')).toBeTruthy()

        vi.useRealTimers()
    })

    it('cleans up resize observer on unmount', () => {
        const wrapper = mount(ScratchCard, {
            slots: { default: 'Content' }
        })

        const disconnectSpy = vi.spyOn(ResizeObserver.prototype, 'disconnect')
        wrapper.unmount()
        expect(disconnectSpy).toHaveBeenCalled()
        disconnectSpy.mockRestore()
    })
})
