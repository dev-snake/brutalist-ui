<script setup lang="ts">
import { computed } from 'vue'
import { cn } from '../../lib/utils'

interface CardDescriptionProps {
    class?: string
}

const props = defineProps<CardDescriptionProps>()

const classes = computed(() =>
    cn('text-sm text-brutal-muted-foreground font-medium', props.class)
)
</script>

<template>
    <p :class="classes">
        <slot />
    </p>
</template>
