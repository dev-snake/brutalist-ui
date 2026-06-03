<script setup lang="ts">
import { computed } from 'vue'
import { type VariantProps } from 'class-variance-authority'
import { cn } from '../../lib/utils'
import { skeletonVariants } from './skeleton-variants'
import Skeleton from './Skeleton.vue'

type SkeletonVariantProps = VariantProps<typeof skeletonVariants>

interface SkeletonTableProps {
    variant?: NonNullable<SkeletonVariantProps['variant']>
    rows?: number
    columns?: number
    class?: string
}

const props = withDefaults(defineProps<SkeletonTableProps>(), {
    variant: 'default',
    rows: 5,
    columns: 4,
    class: '',
})

const DEFAULT_CELL_WIDTH_RATIOS = [0.85, 0.7, 0.9, 0.65]
const FALLBACK_CELL_WIDTH_RATIO = 0.75

const containerClasses = computed(() =>
    cn('border-3 border-brutal overflow-hidden', props.class)
)

const headerCellClasses = computed(() =>
    Array.from({ length: props.columns }, (_, i) =>
        cn('flex-1 p-3', i < props.columns - 1 && 'border-r-3 border-brutal')
    )
)

const rowClasses = computed(() =>
    Array.from({ length: props.rows }, (_, i) =>
        cn('flex', i < props.rows - 1 && 'border-b-3 border-brutal', i % 2 === 0 && 'bg-brutal-muted')
    )
)

const cellClasses = computed(() =>
    Array.from({ length: props.columns }, (_, i) =>
        cn('flex-1 p-3', i < props.columns - 1 && 'border-r-3 border-brutal')
    )
)
</script>

<template>
    <div :class="containerClasses">
        <div class="flex bg-brutal-accent border-b-3 border-brutal">
            <div
                v-for="(headerClass, colIndex) in headerCellClasses"
                :key="`header-${colIndex}`"
                :class="headerClass"
            >
                <Skeleton :variant="variant" class="h-5 w-3/4 bg-brutal-fg/20" />
            </div>
        </div>
        <div
            v-for="(rowClass, rowIndex) in rowClasses"
            :key="`row-${rowIndex}`"
            :class="rowClass"
        >
            <div
                v-for="(cellClass, colIndex) in cellClasses"
                :key="`cell-${rowIndex}-${colIndex}`"
                :class="cellClass"
            >
                <Skeleton
                    :variant="variant"
                    class="h-4"
                    :style="{ width: `${(DEFAULT_CELL_WIDTH_RATIOS[colIndex % DEFAULT_CELL_WIDTH_RATIOS.length] ?? FALLBACK_CELL_WIDTH_RATIO) * 100}%` }"
                />
            </div>
        </div>
    </div>
</template>
