<script setup lang="ts">
import { computed } from 'vue'
import { SelectTrigger as SelectTriggerPrimitive, SelectIcon as SelectIconPrimitive } from 'reka-ui'
import { ChevronDown } from 'lucide-vue-next'
import { cn } from '../../lib/utils'

interface SelectTriggerProps {
    class?: string
}

const props = defineProps<SelectTriggerProps>()

const classes = computed(() =>
    cn(
        'flex h-11 w-full items-center justify-between px-4 py-2',
        'bg-brutal-bg text-brutal-fg border-3 border-brutal',
        'font-bold placeholder:text-brutal-placeholder',
        'shadow-brutal',
        'transition-all duration-150',
        'focus:outline-none focus:shadow-brutal-lg focus:-translate-x-0.5 focus:-translate-y-0.5',
        'active:translate-y-[var(--brutal-pressed-offset,2px)] active:translate-x-0 active:shadow-none',
        'disabled:cursor-not-allowed disabled:opacity-50',
        '[&>span]:line-clamp-1',
        props.class
    )
)
</script>

<template>
    <SelectTriggerPrimitive :class="classes" aria-haspopup="listbox">
        <slot />
        <SelectIconPrimitive as-child>
            <ChevronDown class="h-5 w-5 stroke-[3]" />
        </SelectIconPrimitive>
    </SelectTriggerPrimitive>
</template>
