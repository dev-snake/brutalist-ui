<script setup lang="ts">
import { computed } from 'vue'
import { Toggle } from 'reka-ui'
import { type VariantProps } from 'class-variance-authority'
import { cn } from '../../lib/utils'
import { toggleVariants } from './toggle-variants'

type ToggleVariantProps = VariantProps<typeof toggleVariants>

interface ToggleProps {
    defaultValue?: boolean
    pressed?: boolean
    variant?: NonNullable<ToggleVariantProps['variant']>
    size?: NonNullable<ToggleVariantProps['size']>
    disabled?: boolean
    class?: string
}

const props = withDefaults(defineProps<ToggleProps>(), {
    variant: 'default',
    size: 'default',
    disabled: false,
    class: '',
})

const emit = defineEmits<{ 'update:pressed': [value: boolean] }>()

const classes = computed(() =>
    cn(toggleVariants({ variant: props.variant, size: props.size }), props.class)
)
</script>

<template>
    <Toggle
        :default-value="defaultValue"
        :pressed="pressed"
        :disabled="disabled"
        :class="classes"
        @update:pressed="emit('update:pressed', $event)"
    >
        <slot />
    </Toggle>
</template>
