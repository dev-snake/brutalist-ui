<script setup lang="ts">
import { computed } from 'vue'
import { DialogTitle as DialogTitlePrimitive } from 'reka-ui'
import { cn } from '../../lib/utils'

interface DialogTitleProps {
    class?: string
}

const props = defineProps<DialogTitleProps>()

const classes = computed(() =>
    cn('text-xl font-black tracking-tight', props.class)
)
</script>

<template>
    <DialogTitlePrimitive :class="classes">
        <slot />
    </DialogTitlePrimitive>
</template>
