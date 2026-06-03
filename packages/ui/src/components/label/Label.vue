<script setup lang="ts">
import { computed } from 'vue'
import { type VariantProps } from 'class-variance-authority'
import { cn } from '../../lib/utils'
import { Label as LabelRoot } from 'reka-ui'
import { labelVariants } from './label-variants'

type LabelVariantProps = VariantProps<typeof labelVariants>

interface LabelProps {
    variant?: NonNullable<LabelVariantProps['variant']>
    for?: string
    class?: string
}

const props = defineProps<LabelProps>()

const classes = computed(() =>
    cn(labelVariants({ variant: props.variant }), props.class)
)
</script>

<template>
    <LabelRoot :class="classes" :for="props.for">
        <slot />
    </LabelRoot>
</template>
