<script setup lang="ts">
import { computed } from 'vue'
import { cn } from '../../lib/utils'

interface CommandProps {
    class?: string
}

const props = defineProps<CommandProps>()

const classes = computed(() =>
    cn(
        'flex h-full w-full flex-col overflow-hidden',
        'bg-brutal-bg text-brutal-fg',
        props.class
    )
)
</script>

<template>
    <div :class="classes" role="combobox">
        <slot />
    </div>
</template>
