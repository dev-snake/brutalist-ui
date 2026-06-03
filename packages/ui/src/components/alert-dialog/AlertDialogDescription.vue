<script setup lang="ts">
import { computed } from 'vue'
import { AlertDialogDescription as AlertDialogDescriptionPrimitive } from 'reka-ui'
import { cn } from '../../lib/utils'

interface AlertDialogDescriptionProps {
    class?: string
}

const props = defineProps<AlertDialogDescriptionProps>()

const classes = computed(() =>
    cn('text-sm text-brutal-muted-foreground font-medium', props.class)
)
</script>

<template>
    <AlertDialogDescriptionPrimitive :class="classes">
        <slot />
    </AlertDialogDescriptionPrimitive>
</template>
