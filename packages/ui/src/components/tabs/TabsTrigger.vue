<script setup lang="ts">
import { computed } from 'vue'
import { TabsTrigger as TabsTriggerPrimitive } from 'reka-ui'
import { cn } from '../../lib/utils'

interface TabsTriggerProps {
    value: string
    disabled?: boolean
    class?: string
}

const props = defineProps<TabsTriggerProps>()

const classes = computed(() =>
    cn(
        'inline-flex items-center justify-center whitespace-nowrap px-4 py-2',
        'font-bold text-sm tracking-wide',
        'border-3 border-transparent',
        'transition-all duration-150',
        'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brutal-ring focus-visible:ring-offset-2',
        'active:translate-y-[var(--brutal-pressed-offset,2px)] active:shadow-none',
        'disabled:pointer-events-none disabled:opacity-50',
        'data-[state=active]:bg-brutal-accent data-[state=active]:text-brutal-fg data-[state=active]:border-brutal data-[state=active]:shadow-brutal-sm',
        'data-[state=inactive]:hover:bg-brutal-muted',
        props.class
    )
)
</script>

<template>
    <TabsTriggerPrimitive :value="value" :disabled="disabled" :class="classes">
        <slot />
    </TabsTriggerPrimitive>
</template>
