<script setup lang="ts">
import { computed } from 'vue'
import { cn } from '../../lib/utils'

interface TableHeadProps {
    class?: string
}

const props = defineProps<TableHeadProps>()

const classes = computed(() =>
    cn(
        'h-12 px-4 text-left align-middle font-black tracking-wide text-brutal-fg bg-brutal-accent',
        '[&:has([role=checkbox])]:pr-0',
        'border-r-3 border-brutal last:border-r-0',
        props.class
    )
)
</script>

<template>
    <th :class="classes">
        <slot />
    </th>
</template>
