<script setup lang="ts">
import { computed } from 'vue'
import { AvatarRoot } from 'reka-ui'
import { type VariantProps } from 'class-variance-authority'
import { cn } from '../../lib/utils'
import { avatarVariants } from './avatar-variants'

type AvatarVariantProps = VariantProps<typeof avatarVariants>

interface AvatarProps {
    size?: NonNullable<AvatarVariantProps['size']>
    shape?: NonNullable<AvatarVariantProps['shape']>
    class?: string
}

const props = withDefaults(defineProps<AvatarProps>(), {
    size: 'default',
    shape: 'square',
    class: '',
})

const classes = computed(() =>
    cn(avatarVariants({ size: props.size, shape: props.shape }), props.class)
)
</script>

<template>
    <AvatarRoot :class="classes">
        <slot />
    </AvatarRoot>
</template>
