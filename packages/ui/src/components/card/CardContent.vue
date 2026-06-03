<script setup lang="ts">
import { computed } from 'vue'
import { cn } from '../../lib/utils'

interface CardContentProps {
    class?: string
}

const props = defineProps<CardContentProps>()

const classes = computed(() => cn(props.class))
</script>

<template>
    <div :class="classes">
        <slot />
    </div>
</template>
