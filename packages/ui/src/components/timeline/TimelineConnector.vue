<script setup lang="ts">
import { inject, computed, type ComputedRef } from 'vue'
import { cn } from '../../lib/utils'

interface TimelineConnectorProps {
    class?: string
}

const props = withDefaults(defineProps<TimelineConnectorProps>(), {
    class: '',
})

const orientation = inject<ComputedRef<'vertical' | 'horizontal'>>('timeline-orientation', computed(() => 'vertical'))

const classes = computed(() =>
    cn(
        'bg-brutal-fg transition-all shrink-0',
        orientation.value === 'vertical' ? 'w-[3px] flex-1 min-h-8' : 'h-[3px] flex-1 min-w-8',
        props.class
    )
)
</script>

<template>
    <div :class="classes" />
</template>
