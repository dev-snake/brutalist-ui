<script setup lang="ts">
import { computed } from 'vue'
import { cn } from '../../lib/utils'
import { useLocale } from '@/composables/useLocale'

const { t } = useLocale()

interface ToastContainerProps {
    position?: 'top-left' | 'top-center' | 'top-right' | 'bottom-left' | 'bottom-center' | 'bottom-right'
    class?: string
}

const props = withDefaults(defineProps<ToastContainerProps>(), {
    position: 'bottom-right',
    class: '',
})

const positionMap: Record<string, string> = {
    'top-left': 'top-4 left-4 items-start',
    'top-center': 'top-4 left-1/2 -translate-x-1/2 items-center',
    'top-right': 'top-4 right-4 items-end',
    'bottom-left': 'bottom-4 left-4 items-start',
    'bottom-center': 'bottom-4 left-1/2 -translate-x-1/2 items-center',
    'bottom-right': 'bottom-4 right-4 items-end',
}

const classes = computed(() =>
    cn(
        'fixed z-50 flex flex-col gap-3 pointer-events-none p-4',
        positionMap[props.position],
        props.class
    )
)
</script>

<template>
    <div :class="classes" aria-live="polite" :aria-label="t('toast.container')">
        <slot />
    </div>
</template>
