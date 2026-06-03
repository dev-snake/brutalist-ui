<script setup lang="ts">
import { computed } from 'vue'
import { DropdownMenuSubTrigger as DropdownMenuSubTriggerPrimitive } from 'reka-ui'
import { ChevronRight } from 'lucide-vue-next'
import { cn } from '../../lib/utils'

interface DropdownMenuSubTriggerProps {
    inset?: boolean
    class?: string
}

const props = defineProps<DropdownMenuSubTriggerProps>()

const classes = computed(() =>
    cn(
        'flex cursor-pointer select-none items-center px-3 py-2',
        'font-bold outline-none',
        'focus:bg-brutal-accent focus:text-brutal-fg data-[state=open]:bg-brutal-accent data-[state=open]:text-brutal-fg',
        'active:translate-y-[var(--brutal-pressed-offset,2px)] active:shadow-none',
        'focus-visible:ring-2 focus-visible:ring-brutal-ring',
        props.inset && 'pl-8',
        props.class
    )
)
</script>

<template>
    <DropdownMenuSubTriggerPrimitive :class="classes">
        <slot />
        <ChevronRight class="ml-auto h-4 w-4 stroke-[3]" />
    </DropdownMenuSubTriggerPrimitive>
</template>
