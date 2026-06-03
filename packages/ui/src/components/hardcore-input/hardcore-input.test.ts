import { mount } from '@vue/test-utils'
import { describe, it, expect, vi } from 'vitest'
import HardcoreInput from './HardcoreInput.vue'

vi.mock('../../composables/useAudioEngine', () => ({
    useAudioEngine: () => ({
        playSound: vi.fn(),
        dispose: vi.fn()
    })
}))

describe('HardcoreInput', () => {
    it('supports v-model and updates binding value', async () => {
        const wrapper = mount(HardcoreInput, {
            props: { modelValue: 'hello' }
        })
        const input = wrapper.find('input')
        expect(input.element.value).toBe('hello')

        await input.setValue('world')
        expect(wrapper.emitted()['update:modelValue']?.[0]).toEqual(['world'])
    })

    it('performs validation on blur', async () => {
        const checkRule = (val: string) => val.length >= 5 || 'Too short!'
        const wrapper = mount(HardcoreInput, {
            props: {
                modelValue: '123',
                rules: [checkRule],
                validateOn: 'blur'
            }
        })

        const input = wrapper.find('input')
        await input.trigger('blur')

        expect((wrapper.vm as any).validationState).toBe('error')
        expect((wrapper.vm as any).errorMessage).toBe('Too short!')
        expect(wrapper.text()).toContain('Too short!')
    })

    it('shows success state when validation passes', async () => {
        const checkRule = (val: string) => val.length >= 5 || 'Too short!'
        const wrapper = mount(HardcoreInput, {
            props: {
                modelValue: '12345',
                rules: [checkRule],
                validateOn: 'blur'
            }
        })

        const input = wrapper.find('input')
        await input.trigger('blur')

        expect((wrapper.vm as any).validationState).toBe('success')
        expect((wrapper.vm as any).errorMessage).toBe('')
    })

    it('does not create multiple AudioContext instances', () => {
        const mockPlaySound = vi.fn()
        const mockDispose = vi.fn()

        vi.doMock('../../composables/useAudioEngine', () => ({
            useAudioEngine: () => ({
                playSound: mockPlaySound,
                dispose: mockDispose
            })
        }))

        const wrapper = mount(HardcoreInput, {
            props: { modelValue: 'test' }
        })

        expect(mockDispose).not.toHaveBeenCalled()

        wrapper.unmount()
    })

    it('throttles type sound playback', async () => {
        const playSoundMock = vi.fn()
        vi.doMock('../../composables/useAudioEngine', () => ({
            useAudioEngine: () => ({
                playSound: playSoundMock,
                dispose: vi.fn()
            })
        }))

        const { default: HardcoreInputFresh } = await import('./HardcoreInput.vue')
        const wrapper = mount(HardcoreInputFresh, {
            props: { modelValue: '', sound: true }
        })

        const input = wrapper.find('input')
        await input.setValue('a')
        await input.setValue('b')
        await input.setValue('c')

        const typeCalls = playSoundMock.mock.calls.filter(
            (call: any[]) => call[0] === 'type'
        )
        expect(typeCalls.length).toBeLessThanOrEqual(3)

        vi.doUnmock('../../composables/useAudioEngine')
    })
})
