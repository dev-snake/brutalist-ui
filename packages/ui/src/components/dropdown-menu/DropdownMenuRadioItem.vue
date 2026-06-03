<script setup lang="ts">
import { computed } from 'vue'
import {
    DropdownMenuRadioItem as DropdownMenuRadioItemPrimitive,
    DropdownMenuItemIndicator as DropdownMenuItemIndicatorPrimitive,
} from 'reka-ui'
import { Circle } from 'lucide-vue-next'
import { cn } from '../../lib/utils'

interface DropdownMenuRadioItemProps {
    value: string
    class?: string
}

const props = defineProps<DropdownMenuRadioItemProps>()

const classes = computed(() =>
    cn(
        'relative flex cursor-pointer select-none items-center py-2 pl-8 pr-3',
        'font-bold outline-none transition-colors',
        'focus:bg-brutal-accent focus:text-brutal-fg',
        'focus-visible:ring-2 focus-visible:ring-brutal-ring',
        'active:translate-y-[var(--brutal-pressed-offset,2px)] active:shadow-none',
        'data-[disabled]:pointer-events-none data-[disabled]:opacity-50',
        props.class
    )
)
</script>

<template>
    <DropdownMenuRadioItemPrimitive :value="value" :class="classes">
        <span class="absolute left-2 flex h-4 w-4 items-center justify-center">
            <DropdownMenuItemIndicatorPrimitive>
                <Circle class="h-2 w-2 fill-current" />
            </DropdownMenuItemIndicatorPrimitive>
        </span>
        <slot />
    </DropdownMenuRadioItemPrimitive>
</template>
