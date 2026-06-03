<script setup lang="ts">
import { inject, computed, type ComputedRef } from 'vue'
import { cn } from '../../lib/utils'

interface TimelineSeparatorProps {
    class?: string
}

const props = withDefaults(defineProps<TimelineSeparatorProps>(), {
    class: '',
})

const orientation = inject<ComputedRef<'vertical' | 'horizontal'>>('timeline-orientation', computed(() => 'vertical'))

const classes = computed(() =>
    cn(
        'flex items-center shrink-0',
        orientation.value === 'vertical' ? 'flex-col' : 'flex-row w-full',
        props.class
    )
)
</script>

<template>
    <div :class="classes">
        <slot />
    </div>
</template>
