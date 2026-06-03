<script setup lang="ts">
import { computed, inject } from 'vue'
import { ToggleGroupItem as ToggleGroupItemPrimitive } from 'reka-ui'
import { type VariantProps } from 'class-variance-authority'
import { cn } from '../../lib/utils'
import { toggleVariants } from '../toggle/toggle-variants'
import { toggleGroupKey } from './toggle-group-key'

type ToggleVariantProps = VariantProps<typeof toggleVariants>

interface ToggleGroupItemProps {
    value: string
    variant?: NonNullable<ToggleVariantProps['variant']>
    size?: NonNullable<ToggleVariantProps['size']>
    disabled?: boolean
    class?: string
}

const props = withDefaults(defineProps<ToggleGroupItemProps>(), {
    variant: 'default',
    size: 'default',
    disabled: false,
    class: '',
})

const context = inject(toggleGroupKey, { variant: computed<NonNullable<ToggleVariantProps['variant']> | undefined>(() => undefined), size: computed<NonNullable<ToggleVariantProps['size']> | undefined>(() => undefined) })

const classes = computed(() =>
    cn(
        toggleVariants({
            variant: context.variant.value || props.variant,
            size: context.size.value || props.size,
        }),
        props.class
    )
)
</script>

<template>
    <ToggleGroupItemPrimitive :value="value" :disabled="disabled" :class="classes">
        <slot />
    </ToggleGroupItemPrimitive>
</template>
