<script setup lang="ts">
import { computed } from 'vue'
import { type VariantProps } from 'class-variance-authority'
import { cn } from '../../lib/utils'
import { useLocale } from '@/composables/useLocale'
import { barsSpinnerVariants } from './spinner-variants'

type BarsSpinnerSize = NonNullable<VariantProps<typeof barsSpinnerVariants>['size']>

interface BarsSpinnerProps {
    size?: BarsSpinnerSize
    color?: 'default' | 'primary' | 'secondary' | 'accent' | 'mixed'
    label?: string
    class?: string
}

const props = withDefaults(defineProps<BarsSpinnerProps>(), {
    size: 'default',
    color: 'default',
    label: undefined,
    class: '',
})

const { t } = useLocale()

const resolvedLabel = computed(() => props.label ?? t('spinner.loading'))

const barWidthMap: Record<string, string> = {
    sm: 'w-1',
    default: 'w-1.5',
    lg: 'w-2',
    xl: 'w-3',
}

const colorMap: Record<string, string[]> = {
    default: ['bg-brutal-fg', 'bg-brutal-fg', 'bg-brutal-fg', 'bg-brutal-fg', 'bg-brutal-fg'],
    primary: ['bg-brutal-primary', 'bg-brutal-primary', 'bg-brutal-primary', 'bg-brutal-primary', 'bg-brutal-primary'],
    secondary: ['bg-brutal-secondary', 'bg-brutal-secondary', 'bg-brutal-secondary', 'bg-brutal-secondary', 'bg-brutal-secondary'],
    accent: ['bg-brutal-accent', 'bg-brutal-accent', 'bg-brutal-accent', 'bg-brutal-accent', 'bg-brutal-accent'],
    mixed: ['bg-brutal-primary', 'bg-brutal-secondary', 'bg-brutal-accent', 'bg-brutal-info', 'bg-brutal-primary'],
}

const BAR_HEIGHT_RATIOS = [0.7, 0.55, 0.85, 0.6, 0.75]
const ANIMATION_DELAY_INCREMENT_MS = 100
const ANIMATION_DURATION_MS = 400

const containerClasses = computed(() =>
    cn(barsSpinnerVariants({ size: props.size }), props.class)
)

const barClasses = computed(() =>
    colorMap[props.color].map(barColor =>
        cn(barWidthMap[props.size ?? 'default'], 'border-3 border-brutal', barColor, 'animate-pulse origin-bottom')
    )
)
</script>

<template>
    <div :class="containerClasses" role="status" :aria-label="resolvedLabel">
        <div
            v-for="(barClass, i) in barClasses"
            :key="i"
            :class="barClass"
            :style="{
                height: `${BAR_HEIGHT_RATIOS[i] * 100}%`,
                animationDelay: `${i * ANIMATION_DELAY_INCREMENT_MS}ms`,
                animationDuration: `${ANIMATION_DURATION_MS}ms`,
            }"
        />
        <span class="sr-only">{{ resolvedLabel }}</span>
    </div>
</template>
