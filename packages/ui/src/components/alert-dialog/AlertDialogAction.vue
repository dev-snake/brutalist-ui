<script setup lang="ts">
import { computed } from 'vue'
import { AlertDialogAction as AlertDialogActionPrimitive } from 'reka-ui'
import { type VariantProps } from 'class-variance-authority'
import { cn } from '../../lib/utils'
import { buttonVariants } from '../button/button-variants'

type ButtonVariantProps = VariantProps<typeof buttonVariants>

interface AlertDialogActionProps {
    variant?: NonNullable<ButtonVariantProps['variant']>
    class?: string
}

const props = withDefaults(defineProps<AlertDialogActionProps>(), {
    variant: 'primary',
    class: '',
})

const classes = computed(() =>
    cn(buttonVariants({ variant: props.variant }), props.class)
)
</script>

<template>
    <AlertDialogActionPrimitive :class="classes">
        <slot />
    </AlertDialogActionPrimitive>
</template>
