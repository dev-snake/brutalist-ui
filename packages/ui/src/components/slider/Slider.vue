<script setup lang="ts">
import { computed } from 'vue'
import {
    SliderRoot as SliderRootPrimitive,
    SliderTrack as SliderTrackPrimitive,
    SliderRange as SliderRangePrimitive,
    SliderThumb as SliderThumbPrimitive,
} from 'reka-ui'
import { cn } from '../../lib/utils'

interface SliderProps {
    defaultValue?: number[]
    modelValue?: number[]
    min?: number
    max?: number
    step?: number
    disabled?: boolean
    class?: string
}

const props = withDefaults(defineProps<SliderProps>(), {
    defaultValue: undefined,
    modelValue: undefined,
    min: 0,
    max: 100,
    step: 1,
    class: '',
})

const emit = defineEmits<{ 'update:modelValue': [value: number[]] }>()

const rootClasses = computed(() =>
    cn('relative flex w-full touch-none select-none items-center', props.class)
)

const trackClasses = computed(() =>
    cn(
        'relative h-5 w-full grow overflow-hidden rounded-brutal',
        'border-3 border-brutal bg-brutal-bg',
        'shadow-brutal-sm'
    )
)

const thumbClasses = computed(() =>
    cn(
        'block h-6 w-6 rounded-full',
        'border-3 border-brutal bg-brutal-accent',
        'shadow-brutal-sm',
        'transition-all duration-150',
        'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brutal-ring focus-visible:ring-offset-2',
        'disabled:pointer-events-none disabled:opacity-50',
        'hover:scale-110 active:scale-95',
        'cursor-grab active:cursor-grabbing'
    )
)
</script>

<template>
    <SliderRootPrimitive
        :default-value="defaultValue"
        :model-value="modelValue"
        :min="min"
        :max="max"
        :step="step"
        :disabled="disabled"
        :class="rootClasses"
        @update:model-value="emit('update:modelValue', $event!)"
    >
        <SliderTrackPrimitive :class="trackClasses">
            <SliderRangePrimitive class="absolute h-full bg-brutal-secondary" />
        </SliderTrackPrimitive>
        <SliderThumbPrimitive :class="thumbClasses" />
    </SliderRootPrimitive>
</template>
