<script setup lang="ts">
import { computed } from 'vue'
import { cn } from '../../lib/utils'

interface TableFooterProps {
    class?: string
}

const props = defineProps<TableFooterProps>()

const classes = computed(() =>
    cn('border-t-3 border-brutal bg-brutal-secondary font-bold [&>tr]:last:border-b-0', props.class)
)
</script>

<template>
    <tfoot :class="classes">
        <slot />
    </tfoot>
</template>
