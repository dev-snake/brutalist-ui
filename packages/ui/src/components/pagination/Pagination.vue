<script setup lang="ts">
import { computed } from 'vue'
import { type VariantProps } from 'class-variance-authority'
import { ChevronLeft, ChevronRight, ChevronsLeft, ChevronsRight } from 'lucide-vue-next'
import { cn } from '../../lib/utils'
import { paginationVariants, paginationButtonVariants } from './pagination-variants'
import { useLocale } from '@/composables/useLocale'

const { t } = useLocale()

type PaginationVariantProps = VariantProps<typeof paginationVariants>

const FIRST_PAGE = 1
const MIN_PAGE_THRESHOLD = 2
const FIRST_PAGES_COUNT = 3
const ELLIPSIS_COUNT = 1

interface PaginationProps {
    currentPage: number
    totalPages: number
    siblingCount?: number
    showFirstLast?: boolean
    showPageNumbers?: boolean
    variant?: NonNullable<PaginationVariantProps['variant']>
    size?: NonNullable<PaginationVariantProps['size']>
    class?: string
}

const props = withDefaults(defineProps<PaginationProps>(), {
    siblingCount: 1,
    showFirstLast: true,
    showPageNumbers: true,
    variant: 'default',
    size: 'default',
    class: '',
})

const emit = defineEmits<{ 'update:currentPage': [page: number] }>()

function range(start: number, end: number) {
    const length = end - start + 1
    return Array.from({ length }, (_, idx) => idx + start)
}

const paginationRange = computed(() => {
    const totalPageNumbers = props.siblingCount * 2 + FIRST_PAGES_COUNT + ELLIPSIS_COUNT * 2

    if (totalPageNumbers >= props.totalPages) {
        return range(FIRST_PAGE, props.totalPages)
    }

    const leftSiblingIndex = Math.max(props.currentPage - props.siblingCount, FIRST_PAGE)
    const rightSiblingIndex = Math.min(props.currentPage + props.siblingCount, props.totalPages)

    const shouldShowLeftDots = leftSiblingIndex > MIN_PAGE_THRESHOLD
    const shouldShowRightDots = rightSiblingIndex < props.totalPages - MIN_PAGE_THRESHOLD

    const lastPageIndex = props.totalPages

    if (!shouldShowLeftDots && shouldShowRightDots) {
        const leftEndIndex = FIRST_PAGES_COUNT + 2 * props.siblingCount
        const leftRange = range(FIRST_PAGE, leftEndIndex)
        return [...leftRange, 'dots' as const, props.totalPages]
    }

    if (shouldShowLeftDots && !shouldShowRightDots) {
        const rightEndIndex = FIRST_PAGES_COUNT + 2 * props.siblingCount
        const rightRange = range(props.totalPages - rightEndIndex + 1, props.totalPages)
        return [FIRST_PAGE, 'dots' as const, ...rightRange]
    }

    if (shouldShowLeftDots && shouldShowRightDots) {
        const middleRange = range(leftSiblingIndex, rightSiblingIndex)
        return [FIRST_PAGE, 'dots' as const, ...middleRange, 'dots' as const, lastPageIndex]
    }

    return range(FIRST_PAGE, props.totalPages)
})

const navClasses = computed(() =>
    cn(paginationVariants({ variant: props.variant, size: props.size }), props.class)
)

const buttonSize = computed(() => props.size || 'default')

const dotsSizeClasses = computed(() => {
    if (buttonSize.value === 'sm') return 'h-8 w-8'
    if (buttonSize.value === 'lg') return 'h-12 w-12'
    return 'h-10 w-10'
})

const firstButtonClasses = computed(() =>
    cn(paginationButtonVariants({ size: buttonSize.value, isActive: false }))
)

const prevButtonClasses = computed(() =>
    cn(paginationButtonVariants({ size: buttonSize.value, isActive: false }))
)

const nextButtonClasses = computed(() =>
    cn(paginationButtonVariants({ size: buttonSize.value, isActive: false }))
)

const lastButtonClasses = computed(() =>
    cn(paginationButtonVariants({ size: buttonSize.value, isActive: false }))
)

const dotsClasses = computed(() =>
    cn('flex items-center justify-center font-black text-brutal-fg', dotsSizeClasses.value)
)

const pageButtonActiveClasses = computed(() =>
    cn(paginationButtonVariants({ size: buttonSize.value, isActive: true }))
)

const pageButtonInactiveClasses = computed(() =>
    cn(paginationButtonVariants({ size: buttonSize.value, isActive: false }))
)

function onPageChange(page: number) {
    if (page >= FIRST_PAGE && page <= props.totalPages) {
        emit('update:currentPage', page)
    }
}
</script>

<template>
    <nav role="navigation" :aria-label="t('pagination.label')" :class="navClasses">
        <button
            v-if="showFirstLast"
            type="button"
            :class="firstButtonClasses"
            :disabled="currentPage === 1"
            :aria-label="t('pagination.firstPage')"
            @click="onPageChange(1)"
        >
            <ChevronsLeft class="h-4 w-4 stroke-[3]" />
        </button>

        <button
            type="button"
            :class="prevButtonClasses"
            :disabled="currentPage === 1"
            :aria-label="t('pagination.previousPage')"
            @click="onPageChange(currentPage - 1)"
        >
            <ChevronLeft class="h-4 w-4 stroke-[3]" />
        </button>

        <template v-if="showPageNumbers">
            <template v-for="(pageNumber, index) in paginationRange" :key="index">
                <span
                    v-if="pageNumber === 'dots'"
                    :class="dotsClasses"
                >
                    •••
                </span>
                <button
                    v-else
                    type="button"
                    :class="currentPage === pageNumber ? pageButtonActiveClasses : pageButtonInactiveClasses"
                    :aria-label="t('pagination.page', { number: pageNumber as number })"
                    :aria-current="currentPage === pageNumber ? 'page' : undefined"
                    @click="onPageChange(pageNumber as number)"
                >
                    {{ pageNumber }}
                </button>
            </template>
        </template>

        <span v-if="!showPageNumbers" class="px-4 font-black text-brutal-fg">
            {{ currentPage }} / {{ totalPages }}
        </span>

        <button
            type="button"
            :class="nextButtonClasses"
            :disabled="currentPage === totalPages"
            :aria-label="t('pagination.nextPage')"
            @click="onPageChange(currentPage + 1)"
        >
            <ChevronRight class="h-4 w-4 stroke-[3]" />
        </button>

        <button
            v-if="showFirstLast"
            type="button"
            :class="lastButtonClasses"
            :disabled="currentPage === totalPages"
            :aria-label="t('pagination.lastPage')"
            @click="onPageChange(totalPages)"
        >
            <ChevronsRight class="h-4 w-4 stroke-[3]" />
        </button>
    </nav>
</template>