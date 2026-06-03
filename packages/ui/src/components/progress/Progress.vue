<script setup lang="ts">
import { computed } from 'vue'
import { cn } from '../../lib/utils'
import { ProgressRoot, ProgressIndicator } from 'reka-ui'

interface ProgressProps {
    class?: string
    modelValue?: number
    max?: number
}

const props = withDefaults(defineProps<ProgressProps>(), {
    class: '',
    modelValue: 0,
    max: 100,
})

const classes = computed(() =>
    cn(
        'relative h-6 w-full overflow-hidden rounded-brutal',
        'border-3 border-brutal bg-brutal-bg',
        'shadow-brutal-sm',
        props.class
    )
)

const percentage = computed(() => props.modelValue ?? 0)
</script>

<template>
    <ProgressRoot :class="classes" :model-value="modelValue" :max="max">
        <ProgressIndicator
            class="h-full w-full flex-1 bg-brutal-primary transition-all duration-300 ease-out"
            :style="{ transform: `translateX(-${100 - percentage}%)` }"
        />
    </ProgressRoot>
</template>
