<script setup lang="ts">
import { computed } from 'vue'
import { cn } from '../lib/utils'

interface Props {
    align?: 'center' | 'start' | 'stretch'
    class?: string
}

const props = withDefaults(defineProps<Props>(), {
    align: 'center',
    class: '',
})

const containerClass = computed(() =>
    cn(
        'relative p-4 sm:p-8 flex min-h-[150px] sm:min-h-[200px] bg-brutal-muted border-3 border-brutal shadow-brutal overflow-x-auto transition-all duration-150',
        props.align === 'center'
            ? 'items-center justify-center'
            : props.align === 'start'
              ? 'items-start justify-start'
              : 'items-stretch justify-start',
        props.class,
    ),
)

const innerClass = computed(() =>
    cn(
        'w-full gap-2 sm:gap-4',
        props.align === 'center'
            ? 'flex items-center justify-center flex-wrap'
            : 'flex flex-col items-stretch',
    ),
)
</script>

<template>
    <div :class="containerClass">
        <!-- PREVIEW badge -->
        <span
            class="absolute top-0 left-0 z-20 px-2 py-0.5 text-[0.6rem] font-black uppercase tracking-[0.12em] bg-brutal-accent text-black border-b-2 border-r-2 border-brutal select-none"
        >
            Preview
        </span>
        <div :class="innerClass">
            <slot />
        </div>
    </div>
</template>
