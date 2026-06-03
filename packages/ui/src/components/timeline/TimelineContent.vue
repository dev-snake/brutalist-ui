<script setup lang="ts">
import { computed } from 'vue'
import { cn } from '../../lib/utils'

interface TimelineContentProps {
    class?: string
}

const props = withDefaults(defineProps<TimelineContentProps>(), {
    class: '',
})

const classes = computed(() =>
    cn('flex-1 pb-4 text-sm font-bold text-brutal-fg', props.class)
)
</script>

<template>
    <div :class="classes">
        <slot />
    </div>
</template>
