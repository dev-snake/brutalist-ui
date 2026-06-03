<script setup lang="ts">
import { computed } from 'vue'
import { type VariantProps } from 'class-variance-authority'
import { cn } from '../../lib/utils'
import { Separator as SeparatorPrimitive } from 'reka-ui'
import { separatorVariants } from './separator-variants'

type SeparatorVariantProps = VariantProps<typeof separatorVariants>

interface SeparatorProps {
    orientation?: NonNullable<SeparatorVariantProps['orientation']>
    decorative?: boolean
    class?: string
}

const props = withDefaults(defineProps<SeparatorProps>(), {
    orientation: 'horizontal',
    decorative: true,
    class: '',
})

const classes = computed(() =>
    cn(separatorVariants({ orientation: props.orientation }), props.class)
)
</script>

<template>
    <SeparatorPrimitive
        :orientation="orientation"
        :decorative="decorative"
        :class="classes"
    >
        <slot />
    </SeparatorPrimitive>
</template>
