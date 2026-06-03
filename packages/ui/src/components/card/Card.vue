<script setup lang="ts">
import { computed } from 'vue'
import { type VariantProps } from 'class-variance-authority'
import { cn } from '../../lib/utils'
import { cardVariants } from './card-variants'

type CardVariantProps = VariantProps<typeof cardVariants>

interface CardProps {
    variant?: NonNullable<CardVariantProps['variant']>
    padding?: NonNullable<CardVariantProps['padding']>
    class?: string
}

const props = withDefaults(defineProps<CardProps>(), {
    variant: 'default',
    padding: 'default',
    class: '',
})

const classes = computed(() =>
    cn(cardVariants({ variant: props.variant, padding: props.padding }), props.class)
)
</script>

<template>
    <div :class="classes">
        <slot />
    </div>
</template>
