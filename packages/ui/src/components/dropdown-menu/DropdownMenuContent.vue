<script setup lang="ts">
import { computed } from 'vue'
import {
    DropdownMenuPortal as DropdownMenuPortalPrimitive,
    DropdownMenuContent as DropdownMenuContentPrimitive,
} from 'reka-ui'
import { cn } from '../../lib/utils'

interface DropdownMenuContentProps {
    sideOffset?: number
    class?: string
}

const props = withDefaults(defineProps<DropdownMenuContentProps>(), {
    sideOffset: 6,
    class: '',
})

const classes = computed(() =>
    cn(
        'z-50 min-w-[8rem] overflow-hidden p-1',
        'bg-brutal-bg text-brutal-fg border-3 border-brutal shadow-brutal rounded-brutal',
        'data-[state=open]:animate-in data-[state=closed]:animate-out',
        'data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0',
        'data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95',
        'data-[side=bottom]:slide-in-from-top-2',
        'data-[side=left]:slide-in-from-right-2',
        'data-[side=right]:slide-in-from-left-2',
        'data-[side=top]:slide-in-from-bottom-2',
        props.class
    )
)
</script>

<template>
    <DropdownMenuPortalPrimitive>
        <DropdownMenuContentPrimitive :side-offset="sideOffset" :class="classes">
            <slot />
        </DropdownMenuContentPrimitive>
    </DropdownMenuPortalPrimitive>
</template>
