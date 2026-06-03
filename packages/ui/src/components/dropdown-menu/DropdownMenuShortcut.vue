<script setup lang="ts">
import { computed } from 'vue'
import { cn } from '../../lib/utils'

interface DropdownMenuShortcutProps {
    class?: string
}

const props = defineProps<DropdownMenuShortcutProps>()

const classes = computed(() =>
    cn('ml-auto text-xs tracking-widest opacity-60 font-bold', props.class)
)
</script>

<template>
    <span :class="classes">
        <slot />
    </span>
</template>
