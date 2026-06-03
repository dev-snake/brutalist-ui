<script setup lang="ts">
import { computed } from 'vue'
import { DialogDescription as DialogDescriptionPrimitive } from 'reka-ui'
import { cn } from '../../lib/utils'

interface DialogDescriptionProps {
    class?: string
}

const props = defineProps<DialogDescriptionProps>()

const classes = computed(() =>
    cn('text-sm text-brutal-muted-foreground font-medium', props.class)
)
</script>

<template>
    <DialogDescriptionPrimitive :class="classes">
        <slot />
    </DialogDescriptionPrimitive>
</template>
