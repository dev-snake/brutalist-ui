<script setup lang="ts">
import { computed } from 'vue'
import { cn } from '../../lib/utils'

interface TableRowProps {
    class?: string
}

const props = defineProps<TableRowProps>()

const classes = computed(() =>
    cn(
        'border-b-3 border-brutal transition-colors',
        'hover:bg-brutal-accent/30',
        'data-[state=selected]:bg-brutal-accent',
        props.class
    )
)
</script>

<template>
    <tr :class="classes">
        <slot />
    </tr>
</template>
