<script setup lang="ts">
import { computed } from 'vue'
import { cn } from '../../lib/utils'

interface TableBodyProps {
    class?: string
}

const props = defineProps<TableBodyProps>()

const classes = computed(() =>
    cn(
        '[&_tr:last-child]:border-0',
        '[&_tr:nth-child(even)]:bg-brutal-muted',
        props.class
    )
)
</script>

<template>
    <tbody :class="classes">
        <slot />
    </tbody>
</template>
