<script setup lang="ts">
import { computed } from 'vue'
import {
    ScrollAreaScrollbar as ScrollAreaScrollbarPrimitive,
    ScrollAreaThumb as ScrollAreaThumbPrimitive,
} from 'reka-ui'
import { cn } from '../../lib/utils'

interface ScrollBarProps {
    orientation?: 'vertical' | 'horizontal'
    class?: string
}

const props = withDefaults(defineProps<ScrollBarProps>(), {
    orientation: 'vertical',
    class: '',
})

const classes = computed(() =>
    cn(
        'flex touch-none select-none transition-colors',
        props.orientation === 'vertical' &&
            'h-full w-3 border-l-3 border-brutal p-[1px]',
        props.orientation === 'horizontal' &&
            'h-3 flex-col border-t-3 border-brutal p-[1px]',
        props.class
    )
)
</script>

<template>
    <ScrollAreaScrollbarPrimitive :orientation="orientation" :class="classes">
        <ScrollAreaThumbPrimitive class="relative flex-1 bg-brutal-fg" />
    </ScrollAreaScrollbarPrimitive>
</template>
