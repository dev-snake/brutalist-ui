<script setup lang="ts">
import { computed } from 'vue'
import { DropdownMenuItem as DropdownMenuItemPrimitive } from 'reka-ui'
import { cn } from '../../lib/utils'

interface DropdownMenuItemProps {
    inset?: boolean
    class?: string
}

const props = defineProps<DropdownMenuItemProps>()

const classes = computed(() =>
    cn(
        'relative flex cursor-pointer select-none items-center px-3 py-2',
        'font-bold outline-none transition-colors',
        'focus:bg-brutal-accent focus:text-brutal-fg',
        'focus-visible:ring-2 focus-visible:ring-brutal-ring',
        'active:translate-y-[var(--brutal-pressed-offset,2px)] active:shadow-none',
        'data-[disabled]:pointer-events-none data-[disabled]:opacity-50',
        props.inset && 'pl-8',
        props.class
    )
)
</script>

<template>
    <DropdownMenuItemPrimitive :class="classes">
        <slot />
    </DropdownMenuItemPrimitive>
</template>
