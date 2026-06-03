<script setup lang="ts">
import { provide, computed } from 'vue'
import { cn } from '../../lib/utils'

interface TimelineProps {
    orientation?: 'vertical' | 'horizontal'
    class?: string
}

const props = withDefaults(defineProps<TimelineProps>(), {
    orientation: 'vertical',
    class: '',
})

provide('timeline-orientation', computed(() => props.orientation))

const classes = computed(() =>
    cn(
        'flex w-full',
        props.orientation === 'vertical' ? 'flex-col gap-6' : 'flex-row gap-6 items-start overflow-x-auto',
        props.class
    )
)
</script>

<template>
    <div :class="classes">
        <slot />
    </div>
</template>
