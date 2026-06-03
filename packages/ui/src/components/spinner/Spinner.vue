<script setup lang="ts">
import { computed } from 'vue'
import { type VariantProps } from 'class-variance-authority'
import { cn } from '../../lib/utils'
import { useLocale } from '@/composables/useLocale'
import { spinnerVariants } from './spinner-variants'

type SpinnerVariantProps = VariantProps<typeof spinnerVariants>

interface SpinnerProps {
    size?: NonNullable<SpinnerVariantProps['size']>
    variant?: NonNullable<SpinnerVariantProps['variant']>
    label?: string
    class?: string
}

const props = withDefaults(defineProps<SpinnerProps>(), {
    size: 'default',
    variant: 'default',
    label: undefined,
    class: '',
})

const { t } = useLocale()

const resolvedLabel = computed(() => props.label ?? t('spinner.loading'))

const classes = computed(() =>
    cn(spinnerVariants({ size: props.size, variant: props.variant }), props.class)
)
</script>

<template>
    <div :class="classes" role="status" :aria-label="resolvedLabel">
        <span class="sr-only">{{ resolvedLabel }}</span>
    </div>
</template>
