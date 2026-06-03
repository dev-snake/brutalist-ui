<script setup lang="ts">
import { computed } from 'vue'
import { type VariantProps } from 'class-variance-authority'
import { cn } from '../../lib/utils'
import { skeletonVariants } from './skeleton-variants'
import Skeleton from './Skeleton.vue'
import SkeletonText from './SkeletonText.vue'

type SkeletonVariantProps = VariantProps<typeof skeletonVariants>

interface SkeletonCardProps {
    variant?: NonNullable<SkeletonVariantProps['variant']>
    class?: string
}

const props = withDefaults(defineProps<SkeletonCardProps>(), {
    variant: 'default',
    class: '',
})

const classes = computed(() =>
    cn('p-4 border-3 border-brutal shadow-brutal bg-brutal-bg', props.class)
)
</script>

<template>
    <div :class="classes">
        <div class="space-y-4">
            <Skeleton :variant="variant" class="h-32 w-full" />
            <Skeleton :variant="variant" class="h-6 w-3/4" />
            <SkeletonText :variant="variant" :lines="2" />
            <div class="flex gap-2">
                <Skeleton :variant="variant" class="h-10 w-24" />
                <Skeleton :variant="variant" class="h-10 w-24" />
            </div>
        </div>
    </div>
</template>
