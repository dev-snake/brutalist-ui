<script setup lang="ts">
import { computed } from 'vue'
import { type VariantProps } from 'class-variance-authority'
import { cn } from '../../lib/utils'
import { useLocale } from '@/composables/useLocale'
import { blockSpinnerVariants } from './spinner-variants'

type BlockSpinnerSize = NonNullable<VariantProps<typeof blockSpinnerVariants>['size']>

interface BlockSpinnerProps {
    size?: BlockSpinnerSize
    color?: 'default' | 'primary' | 'secondary' | 'accent' | 'mixed'
    label?: string
    class?: string
}

const props = withDefaults(defineProps<BlockSpinnerProps>(), {
    size: 'default',
    color: 'default',
    label: undefined,
    class: '',
})

const { t } = useLocale()

const resolvedLabel = computed(() => props.label ?? t('spinner.loading'))

const colorMap: Record<string, string[]> = {
    default: ['bg-brutal-fg', 'bg-brutal-fg', 'bg-brutal-fg', 'bg-brutal-fg'],
    primary: ['bg-brutal-primary', 'bg-brutal-primary', 'bg-brutal-primary', 'bg-brutal-primary'],
    secondary: ['bg-brutal-secondary', 'bg-brutal-secondary', 'bg-brutal-secondary', 'bg-brutal-secondary'],
    accent: ['bg-brutal-accent', 'bg-brutal-accent', 'bg-brutal-accent', 'bg-brutal-accent'],
    mixed: ['bg-brutal-primary', 'bg-brutal-secondary', 'bg-brutal-accent', 'bg-brutal-info'],
}

const classes = computed(() =>
    cn(blockSpinnerVariants({ size: props.size }), props.class)
)

const blockClasses = computed(() =>
    colorMap[props.color].map(blockColor =>
        cn('border-3 border-brutal', blockColor, 'animate-pulse')
    )
)
</script>

<template>
    <div :class="classes" role="status" :aria-label="resolvedLabel">
        <div
            v-for="(blockClass, i) in blockClasses"
            :key="i"
            :class="blockClass"
            :style="{ animationDelay: `${i * 150}ms`, animationDuration: '600ms' }"
        />
        <span class="sr-only">{{ resolvedLabel }}</span>
    </div>
</template>
