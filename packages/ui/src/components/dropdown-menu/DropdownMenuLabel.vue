<script setup lang="ts">
import { computed } from 'vue'
import { DropdownMenuLabel as DropdownMenuLabelPrimitive } from 'reka-ui'
import { cn } from '../../lib/utils'

interface DropdownMenuLabelProps {
    inset?: boolean
    class?: string
}

const props = defineProps<DropdownMenuLabelProps>()

const classes = computed(() =>
    cn(
        'px-3 py-2 text-sm font-black tracking-wide',
        props.inset && 'pl-8',
        props.class
    )
)
</script>

<template>
    <DropdownMenuLabelPrimitive :class="classes">
        <slot />
    </DropdownMenuLabelPrimitive>
</template>
