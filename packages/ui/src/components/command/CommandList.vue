<script setup lang="ts">
import { computed } from 'vue'
import { cn } from '../../lib/utils'

interface CommandListProps {
    class?: string
}

const props = defineProps<CommandListProps>()

const classes = computed(() =>
    cn(
        'max-h-80 overflow-x-hidden overflow-y-auto scroll-py-1',
        'p-2',
        props.class
    )
)
</script>

<template>
    <div :class="classes" role="listbox" data-slot="command-list">
        <slot />
    </div>
</template>
