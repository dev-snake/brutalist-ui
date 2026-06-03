<script setup lang="ts">
import { computed } from 'vue'
import { DialogTitle as DialogTitlePrimitive } from 'reka-ui'
import { cn } from '../../lib/utils'

interface SheetTitleProps {
    class?: string
}

const props = defineProps<SheetTitleProps>()

const classes = computed(() =>
    cn('text-lg font-black tracking-tight text-brutal-fg', props.class)
)
</script>

<template>
    <DialogTitlePrimitive :class="classes">
        <slot />
    </DialogTitlePrimitive>
</template>
