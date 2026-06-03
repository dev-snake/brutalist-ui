<script setup lang="ts">
import { computed } from 'vue'
import { AvatarFallback as AvatarFallbackPrimitive } from 'reka-ui'
import { cn } from '../../lib/utils'

interface AvatarFallbackProps {
    class?: string
}

const props = defineProps<AvatarFallbackProps>()

const classes = computed(() =>
    cn('flex h-full w-full items-center justify-center bg-brutal-primary text-brutal-fg font-bold', props.class)
)
</script>

<template>
    <AvatarFallbackPrimitive :class="classes">
        <slot />
    </AvatarFallbackPrimitive>
</template>
