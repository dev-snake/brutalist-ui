<script setup lang="ts">
import { computed } from 'vue'
import { type VariantProps } from 'class-variance-authority'
import { cn } from '../../lib/utils'
import { alertVariants } from './alert-variants'

type AlertVariantProps = VariantProps<typeof alertVariants>

interface AlertProps {
    variant?: NonNullable<AlertVariantProps['variant']>
    class?: string
}

const props = withDefaults(defineProps<AlertProps>(), {
    variant: 'default',
    class: '',
})

const classes = computed(() =>
    cn(alertVariants({ variant: props.variant }), props.class)
)
</script>

<template>
    <div role="alert" :class="classes">
        <slot />
    </div>
</template>
