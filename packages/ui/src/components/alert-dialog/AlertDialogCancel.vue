<script setup lang="ts">
import { computed } from 'vue'
import { AlertDialogCancel as AlertDialogCancelPrimitive } from 'reka-ui'
import { cn } from '../../lib/utils'
import { buttonVariants } from '../button/button-variants'

interface AlertDialogCancelProps {
    class?: string
}

const props = defineProps<AlertDialogCancelProps>()

const classes = computed(() =>
    cn(buttonVariants({ variant: 'outline' }), props.class)
)
</script>

<template>
    <AlertDialogCancelPrimitive :class="classes">
        <slot />
    </AlertDialogCancelPrimitive>
</template>
