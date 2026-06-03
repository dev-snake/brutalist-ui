<script setup lang="ts">
import { computed } from 'vue'
import { type VariantProps } from 'class-variance-authority'
import { cn } from '../../lib/utils'
import { skeletonVariants } from './skeleton-variants'
import Skeleton from './Skeleton.vue'

type SkeletonVariantProps = VariantProps<typeof skeletonVariants>

interface SkeletonAvatarProps {
    variant?: NonNullable<SkeletonVariantProps['variant']>
    size?: 'sm' | 'default' | 'lg' | 'xl'
    class?: string
}

const props = withDefaults(defineProps<SkeletonAvatarProps>(), {
    variant: 'default',
    size: 'default',
    class: '',
})

const sizeClasses: Record<string, string> = {
    sm: 'h-8 w-8',
    default: 'h-10 w-10',
    lg: 'h-12 w-12',
    xl: 'h-16 w-16',
}

const classes = computed(() => cn(sizeClasses[props.size], props.class))
</script>

<template>
    <Skeleton :variant="variant" :class="classes" />
</template>
