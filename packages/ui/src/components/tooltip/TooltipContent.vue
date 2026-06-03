<script setup lang="ts">
import { computed } from 'vue'
import { TooltipPortal, TooltipContent as TooltipContentPrimitive } from 'reka-ui'
import { cn } from '../../lib/utils'

interface TooltipContentProps {
    sideOffset?: number
    class?: string
}

const props = withDefaults(defineProps<TooltipContentProps>(), {
    sideOffset: 6,
    class: '',
})

const classes = computed(() =>
    cn(
        'z-50 overflow-hidden px-3 py-1.5',
        'bg-brutal-fg text-brutal-bg text-sm font-bold',
        'border-3 border-brutal rounded-brutal shadow-brutal',
        'animate-in fade-in-0 zoom-in-95',
        'data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95',
        'data-[side=bottom]:slide-in-from-top-2',
        'data-[side=left]:slide-in-from-right-2',
        'data-[side=right]:slide-in-from-left-2',
        'data-[side=top]:slide-in-from-bottom-2',
        props.class
    )
)
</script>

<template>
    <TooltipPortal>
        <TooltipContentPrimitive :side-offset="sideOffset" :class="classes">
            <slot />
        </TooltipContentPrimitive>
    </TooltipPortal>
</template>
