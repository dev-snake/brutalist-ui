<script setup lang="ts">
import { computed } from 'vue'
import { type VariantProps } from 'class-variance-authority'
import { cn } from '../../lib/utils'
import { badgeVariants } from './badge-variants'

type BadgeVariantProps = VariantProps<typeof badgeVariants>

interface BadgeProps {
    variant?: NonNullable<BadgeVariantProps['variant']>
    size?: NonNullable<BadgeVariantProps['size']>
    class?: string
}

const props = withDefaults(defineProps<BadgeProps>(), {
    variant: 'default',
    size: 'default',
    class: '',
})

const classes = computed(() =>
    cn(badgeVariants({ variant: props.variant, size: props.size }), props.class)
)
</script>

<template>
    <div :class="classes">
        <slot />
    </div>
</template>
