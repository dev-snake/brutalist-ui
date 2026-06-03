<script setup lang="ts">
import { computed } from 'vue'
import { type VariantProps } from 'class-variance-authority'
import { cn } from '../../lib/utils'
import { timelineDotVariants } from './timeline-variants'

type TimelineDotVariantProps = VariantProps<typeof timelineDotVariants>

interface Props {
    variant?: NonNullable<TimelineDotVariantProps['variant']>
    shape?: NonNullable<TimelineDotVariantProps['shape']>
    class?: string
}

const props = withDefaults(defineProps<Props>(), {
    variant: 'accent',
    shape: 'circle',
    class: '',
})

const classes = computed(() =>
    cn(timelineDotVariants({ variant: props.variant, shape: props.shape }), props.class)
)
</script>

<template>
    <div :class="classes">
        <span class="inline-flex items-center justify-center font-black">
            <slot />
        </span>
    </div>
</template>
