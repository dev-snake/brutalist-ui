<script setup lang="ts">
import { computed } from 'vue'
import { cn } from '../../lib/utils'

interface TableProps {
    class?: string
}

const props = defineProps<TableProps>()

const classes = computed(() =>
    cn('w-full caption-bottom text-sm', 'border-3 border-brutal', props.class)
)
</script>

<template>
    <div class="relative w-full overflow-x-auto">
        <table :class="classes">
            <slot />
        </table>
    </div>
</template>
