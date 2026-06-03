<script setup lang="ts">
import { computed } from 'vue'
import { type VariantProps } from 'class-variance-authority'
import { cn } from '../../lib/utils'
import { useLocale } from '@/composables/useLocale'
import { dotsSpinnerVariants } from './spinner-variants'

type DotsSpinnerSize = NonNullable<VariantProps<typeof dotsSpinnerVariants>['size']>

interface DotsSpinnerProps {
    size?: DotsSpinnerSize
    color?: 'default' | 'primary' | 'secondary' | 'accent'
    label?: string
    class?: string
}

const props = withDefaults(defineProps<DotsSpinnerProps>(), {
    size: 'default',
    color: 'default',
    label: undefined,
    class: '',
})

const { t } = useLocale()

const resolvedLabel = computed(() => props.label ?? t('spinner.loading'))

const sizeMap: Record<string, string> = {
    sm: 'h-1.5 w-1.5',
    default: 'h-2.5 w-2.5',
    lg: 'h-3.5 w-3.5',
    xl: 'h-5 w-5',
}

const colorMap: Record<string, string> = {
    default: 'bg-brutal-fg',
    primary: 'bg-brutal-primary',
    secondary: 'bg-brutal-secondary',
    accent: 'bg-brutal-accent',
}

const containerClasses = computed(() =>
    cn(dotsSpinnerVariants({ size: props.size }), props.class)
)

const dotClasses = computed(() =>
    cn(sizeMap[props.size ?? 'default'], 'border-3 border-brutal', colorMap[props.color], 'animate-bounce')
)
</script>

<template>
    <div :class="containerClasses" role="status" :aria-label="resolvedLabel">
        <div
            v-for="i in 3"
            :key="i"
            :class="dotClasses"
            :style="{ animationDelay: `${(i - 1) * 100}ms`, animationDuration: '500ms' }"
        />
        <span class="sr-only">{{ resolvedLabel }}</span>
    </div>
</template>
