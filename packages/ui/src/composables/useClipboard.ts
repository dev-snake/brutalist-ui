import { ref, onUnmounted } from 'vue'

export function useClipboard(options: { duration?: number } = {}) {
    const duration = options.duration ?? 2000
    const copied = ref(false)
    const isSupported = ref(typeof navigator !== 'undefined' && !!navigator.clipboard?.writeText)

    let timeoutId: number | null = null

    onUnmounted(() => {
        if (timeoutId) clearTimeout(timeoutId)
    })

    async function copy(text: string) {
        if (!isSupported.value) return false

        try {
            await navigator.clipboard.writeText(text)
            copied.value = true

            if (timeoutId) clearTimeout(timeoutId)
            timeoutId = window.setTimeout(() => {
                copied.value = false
            }, duration)

            return true
        } catch (err) {
            console.error('Failed to copy text: ', err)
            return false
        }
    }

    return {
        copy,
        copied,
        isSupported,
    }
}
