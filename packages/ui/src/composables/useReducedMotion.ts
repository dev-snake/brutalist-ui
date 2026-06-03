import { onMounted, onUnmounted, ref } from 'vue'

export function useReducedMotion() {
    const prefersReduced = ref(false)
    let mediaQuery: MediaQueryList | null = null

    const onChange = (e: MediaQueryListEvent) => {
        prefersReduced.value = e.matches
    }

    onMounted(() => {
        if (typeof window !== 'undefined') {
            mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
            prefersReduced.value = mediaQuery.matches
            mediaQuery.addEventListener('change', onChange)
        }
    })

    onUnmounted(() => {
        mediaQuery?.removeEventListener('change', onChange)
    })

    return prefersReduced
}
