<script setup lang="ts">
import { computed } from 'vue'
import { cn } from '../../lib/utils'

interface CommandSeparatorProps {
    class?: string
}

const props = defineProps<CommandSeparatorProps>()

const classes = computed(() =>
    cn('-mx-1 my-2 h-[3px] bg-brutal-fg', props.class)
)
</script>

<template>
    <div :class="classes" role="separator" />
</template>
