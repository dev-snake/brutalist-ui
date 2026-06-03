<script setup lang="ts">
import { ref, computed, toRef } from 'vue'
import { cn } from '../../lib/utils'
import { useReducedMotion } from '../../composables/useReducedMotion'
import { useCanvasInteraction } from '../../composables/useCanvasInteraction'
import { useLocale } from '@/composables/useLocale'
import { scratchCardVariants } from './scratch-card-variants'

interface ScratchCardProps {
    percentage?: number
    brushRadius?: number
    overlayColor?: string
    fadeDuration?: number
    class?: string
}

const props = withDefaults(defineProps<ScratchCardProps>(), {
    percentage: 50,
    brushRadius: 20,
    overlayColor: undefined,
    fadeDuration: 300,
    class: '',
})

const emit = defineEmits<{
    progress: [percent: number]
    completed: []
}>()

const containerRef = ref<HTMLDivElement | null>(null)
const canvasRef = ref<HTMLCanvasElement | null>(null)
const prefersReducedMotion = useReducedMotion()
const { t } = useLocale()

const drawOverlay = (ctxVal: CanvasRenderingContext2D, w: number, h: number) => {
    ctxVal.clearRect(0, 0, w, h)

    if (props.overlayColor) {
        ctxVal.fillStyle = props.overlayColor
        ctxVal.fillRect(0, 0, w, h)
    } else {
        let primary = '#FF6B6B'
        let secondary = '#4ECDC4'
        let fg = '#000000'
        if (typeof document !== 'undefined') {
            const rootStyle = getComputedStyle(document.documentElement)
            primary = rootStyle.getPropertyValue('--brutal-primary').trim() || primary
            secondary = rootStyle.getPropertyValue('--brutal-secondary').trim() || secondary
            fg = rootStyle.getPropertyValue('--brutal-fg').trim() || fg
        }

        ctxVal.fillStyle = secondary
        ctxVal.fillRect(0, 0, w, h)

        ctxVal.strokeStyle = primary
        ctxVal.lineWidth = 10
        const spacing = 20
        for (let i = -h; i < w + h; i += spacing) {
            ctxVal.beginPath()
            ctxVal.moveTo(i, 0)
            ctxVal.lineTo(i + h, h)
            ctxVal.stroke()
        }

        ctxVal.strokeStyle = fg
        ctxVal.lineWidth = 2
        for (let i = -h; i < w + h; i += spacing) {
            ctxVal.beginPath()
            ctxVal.moveTo(i + 5, 0)
            ctxVal.lineTo(i + 5 + h, h)
            ctxVal.stroke()
        }
    }
}

const {
    isRevealed,
    revealAll,
    handlePointerDown,
    handlePointerMove,
    handlePointerUp,
    handleTouchStart,
    handleTouchMove,
    handleTouchEnd,
} = useCanvasInteraction({
    containerRef,
    canvasRef,
    brushRadius: toRef(props, 'brushRadius'),
    percentage: toRef(props, 'percentage'),
    fadeDuration: toRef(props, 'fadeDuration'),
    prefersReducedMotion,
    onProgress: (percent) => emit('progress', percent),
    onCompleted: () => emit('completed'),
    drawOverlay,
})

defineExpose({
    isRevealed,
    revealAll,
})

const containerClasses = computed(() =>
    cn(scratchCardVariants(), props.class)
)

const canvasStyle = computed(() => ({
    transition: `opacity ${props.fadeDuration}ms ease-out`,
    opacity: isRevealed.value ? 0 : 1,
}))
</script>

<template>
    <div
        ref="containerRef"
        :class="containerClasses"
        role="region"
        :aria-label="t('scratchCard.ariaLabel')"
        tabindex="0"
        @keydown.enter="revealAll"
        @keydown.space.prevent="revealAll"
    >
        <div class="scratch-card-content w-full h-full">
            <slot />
        </div>
        <canvas
            v-if="!isRevealed || !prefersReducedMotion"
            ref="canvasRef"
            class="absolute inset-0 cursor-crosshair touch-none select-none z-10"
            :style="canvasStyle"
            @pointerdown="handlePointerDown"
            @pointermove="handlePointerMove"
            @pointerup="handlePointerUp"
            @pointercancel="handlePointerUp"
            @touchstart="handleTouchStart"
            @touchmove="handleTouchMove"
            @touchend="handleTouchEnd"
        />
    </div>
</template>
