<script setup lang="ts">
import { computed } from 'vue'
import { DialogOverlay as DialogOverlayPrimitive } from 'reka-ui'
import { cn } from '../../lib/utils'

interface DialogOverlayProps {
    class?: string
}

const props = defineProps<DialogOverlayProps>()

const classes = computed(() =>
    cn(
        'fixed inset-0 z-50 bg-brutal-overlay',
        'data-[state=open]:animate-in data-[state=closed]:animate-out',
        'data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0',
        props.class
    )
)
</script>

<template>
    <DialogOverlayPrimitive :class="classes" />
</template>
