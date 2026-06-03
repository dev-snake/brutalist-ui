<script setup lang="ts">
import { computed } from 'vue'
import { type VariantProps } from 'class-variance-authority'
import { cn } from '../../lib/utils'
import { Loader2 } from 'lucide-vue-next'
import { Primitive } from 'reka-ui'
import { buttonVariants } from './button-variants'

type ButtonVariantProps = VariantProps<typeof buttonVariants>

interface ButtonProps {
    variant?: NonNullable<ButtonVariantProps['variant']>
    size?: NonNullable<ButtonVariantProps['size']>
    asChild?: boolean
    loading?: boolean
    disabled?: boolean
    class?: string
}

const props = withDefaults(defineProps<ButtonProps>(), {
    variant: 'default',
    size: 'default',
    asChild: false,
    loading: false,
    disabled: false,
    class: '',
})

const isDisabled = computed(() => props.disabled || props.loading)

const classes = computed(() =>
    cn(buttonVariants({ variant: props.variant, size: props.size }), props.class)
)
</script>

<template>
    <Primitive
        :as="asChild ? undefined : 'button'"
        :as-child="asChild"
        :class="classes"
        :disabled="!asChild && isDisabled"
        :aria-disabled="asChild && isDisabled ? true : undefined"
    >
        <Loader2 v-if="loading" class="h-4 w-4 animate-spin" />
        <slot />
    </Primitive>
</template>
