<script setup lang="ts">
import { computed } from 'vue'
import { cn } from '../../lib/utils'

interface CommandShortcutProps {
    class?: string
}

const props = defineProps<CommandShortcutProps>()

const classes = computed(() =>
    cn(
        'ml-auto text-xs font-black tracking-wider',
        'px-2 py-1',
        'bg-brutal-muted',
        'border-3 border-brutal',
        'text-brutal-muted-foreground',
        props.class
    )
)
</script>

<template>
    <span :class="classes" data-slot="command-shortcut">
        <slot />
    </span>
</template>
