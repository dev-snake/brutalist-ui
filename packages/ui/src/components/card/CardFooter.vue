<script setup lang="ts">
import { computed } from 'vue'
import { cn } from '../../lib/utils'

interface CardFooterProps {
    class?: string
}

const props = defineProps<CardFooterProps>()

const classes = computed(() =>
    cn('flex items-center pt-4 border-t-3 border-brutal', props.class)
)
</script>

<template>
    <div :class="classes">
        <slot />
    </div>
</template>
