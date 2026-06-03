<script setup lang="ts">
import { computed } from 'vue'
import { Loader2 } from 'lucide-vue-next'
import { cn } from '../../lib/utils'
import { useLocale } from '@/composables/useLocale'
import { buttonVariants } from '../button/button-variants'
import { type VariantProps } from 'class-variance-authority'

type ButtonVariantProps = VariantProps<typeof buttonVariants>

interface SubmitButtonProps {
    variant?: NonNullable<ButtonVariantProps['variant']>
    size?: NonNullable<ButtonVariantProps['size']>
    pendingText?: string
    loading?: boolean
    disabled?: boolean
    class?: string
}

const props = withDefaults(defineProps<SubmitButtonProps>(), {
    variant: 'default',
    size: 'default',
    pendingText: undefined,
    loading: false,
    disabled: false,
    class: '',
})

const { t } = useLocale()

const resolvedPendingText = computed(() => props.pendingText ?? t('submitButton.submitting'))

const isDisabled = computed(() => props.disabled || props.loading)

const classes = computed(() =>
    cn(buttonVariants({ variant: props.variant, size: props.size }), props.class)
)
</script>

<template>
    <button type="submit" :class="classes" :disabled="isDisabled">
        <Loader2 v-if="loading" class="h-4 w-4 animate-spin" />
        <template v-if="loading && resolvedPendingText">
{{ resolvedPendingText }}
</template>
        <slot v-else />
    </button>
</template>
