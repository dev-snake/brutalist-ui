import { ref, type Ref } from 'vue'

const TYPE_SOUND_THROTTLE_MS = 50
const TYPE_BASE_FREQ = 220
const TYPE_FREQ_RANGE = 80
const TYPE_GAIN = 0.08
const TYPE_GAIN_END = 0.001
const TYPE_DURATION = 0.05

const SUCCESS_START_FREQ = 300
const SUCCESS_END_FREQ = 600
const SUCCESS_GAIN = 0.1
const SUCCESS_GAIN_END = 0.001
const SUCCESS_DURATION = 0.15

const FAIL_FREQ_1 = 150
const FAIL_FREQ_2 = 100
const FAIL_FREQ_SHIFT_TIME = 0.1
const FAIL_GAIN = 0.1
const FAIL_GAIN_END = 0.001
const FAIL_DURATION = 0.2

export function useAudioEngine(enabled: Ref<boolean>) {
    let audioCtx: AudioContext | null = null
    const lastTypeSoundTime = ref(0)

    const getCtx = () => {
        if (!audioCtx && typeof window !== 'undefined') {
            const AudioContextClass = window.AudioContext || (window as any).webkitAudioContext
            if (AudioContextClass) {
                audioCtx = new AudioContextClass()
            }
        }
        return audioCtx
    }

    const playSound = (type: 'type' | 'success' | 'fail') => {
        if (!enabled.value) return
        if (type === 'type') {
            const now = Date.now()
            if (now - lastTypeSoundTime.value < TYPE_SOUND_THROTTLE_MS) return
            lastTypeSoundTime.value = now
        }
        
        const ctx = getCtx()
        if (!ctx) return
        
        if (ctx.state === 'suspended') {
            ctx.resume()
        }

        const osc = ctx.createOscillator()
        const gain = ctx.createGain()
        osc.connect(gain)
        gain.connect(ctx.destination)

        if (type === 'type') {
            osc.type = 'triangle'
            osc.frequency.setValueAtTime(TYPE_BASE_FREQ + Math.random() * TYPE_FREQ_RANGE, ctx.currentTime)
            gain.gain.setValueAtTime(TYPE_GAIN, ctx.currentTime)
            gain.gain.exponentialRampToValueAtTime(TYPE_GAIN_END, ctx.currentTime + TYPE_DURATION)
            osc.start()
            osc.stop(ctx.currentTime + TYPE_DURATION)
        } else if (type === 'success') {
            osc.type = 'sine'
            osc.frequency.setValueAtTime(SUCCESS_START_FREQ, ctx.currentTime)
            osc.frequency.exponentialRampToValueAtTime(SUCCESS_END_FREQ, ctx.currentTime + SUCCESS_DURATION)
            gain.gain.setValueAtTime(SUCCESS_GAIN, ctx.currentTime)
            gain.gain.exponentialRampToValueAtTime(SUCCESS_GAIN_END, ctx.currentTime + SUCCESS_DURATION)
            osc.start()
            osc.stop(ctx.currentTime + SUCCESS_DURATION)
        } else if (type === 'fail') {
            osc.type = 'square'
            osc.frequency.setValueAtTime(FAIL_FREQ_1, ctx.currentTime)
            osc.frequency.setValueAtTime(FAIL_FREQ_2, ctx.currentTime + FAIL_FREQ_SHIFT_TIME)
            gain.gain.setValueAtTime(FAIL_GAIN, ctx.currentTime)
            gain.gain.exponentialRampToValueAtTime(FAIL_GAIN_END, ctx.currentTime + FAIL_DURATION)
            osc.start()
            osc.stop(ctx.currentTime + FAIL_DURATION)
        }
    }

    const dispose = () => {
        audioCtx?.close()
        audioCtx = null
    }

    return { playSound, dispose }
}
