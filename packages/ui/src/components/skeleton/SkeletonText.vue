<script setup lang="ts">
import { computed } from 'vue'
import { type VariantProps } from 'class-variance-authority'
import { cn } from '../../lib/utils'
import { skeletonVariants } from './skeleton-variants'
import Skeleton from './Skeleton.vue'

type SkeletonVariantProps = VariantProps<typeof skeletonVariants>

interface SkeletonTextProps {
    variant?: NonNullable<SkeletonVariantProps['variant']>
    lines?: number
    lastLineWidth?: string
    class?: string
}

const props = withDefaults(defineProps<SkeletonTextProps>(), {
    variant: 'default',
    lines: 3,
    lastLineWidth: '60%',
    class: '',
})

const classes = computed(() => cn('space-y-2', props.class))
</script>

<template>
    <div :class="classes">
        <Skeleton
            v-for="index in props.lines"
            :key="index"
            :variant="variant"
            class="h-4"
            :style="{ width: index === props.lines ? props.lastLineWidth : '100%' }"
        />
    </div>
</template>
