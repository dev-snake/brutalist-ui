<script setup lang="ts">
import { computed } from 'vue'
import { cn } from '../../lib/utils'

interface TableCellProps {
    class?: string
}

const props = defineProps<TableCellProps>()

const classes = computed(() =>
    cn(
        'p-4 align-middle font-medium',
        '[&:has([role=checkbox])]:pr-0',
        'border-r-3 border-brutal last:border-r-0',
        props.class
    )
)
</script>

<template>
    <td :class="classes">
        <slot />
    </td>
</template>
