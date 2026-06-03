<script setup lang="ts">
import { computed, provide } from 'vue'
import { ToggleGroupRoot } from 'reka-ui'
import { type VariantProps } from 'class-variance-authority'
import { cn } from '../../lib/utils'
import { toggleVariants } from '../toggle/toggle-variants'
import { toggleGroupKey } from './toggle-group-key'

type ToggleVariantProps = VariantProps<typeof toggleVariants>

interface ToggleGroupProps {
    type?: 'single' | 'multiple'
    defaultValue?: string | string[]
    modelValue?: string | string[]
    variant?: NonNullable<ToggleVariantProps['variant']>
    size?: NonNullable<ToggleVariantProps['size']>
    class?: string
}

const props = withDefaults(defineProps<ToggleGroupProps>(), {
    type: 'single',
    defaultValue: undefined,
    modelValue: undefined,
    variant: 'default',
    size: 'default',
    class: '',
})

const emit = defineEmits<{ 'update:modelValue': [value: string | string[]] }>()

const classes = computed(() =>
    cn('flex items-center justify-center gap-1.5', props.class)
)

provide(toggleGroupKey, {
    variant: computed(() => props.variant),
    size: computed(() => props.size),
})
</script>

<template>
    <ToggleGroupRoot
        :type="type"
        :default-value="defaultValue"
        :model-value="modelValue"
        :class="classes"
        @update:model-value="emit('update:modelValue', $event as string | string[])"
    >
        <slot />
    </ToggleGroupRoot>
</template>
