<script setup lang="ts">
import { ref, computed } from 'vue'
import { type VariantProps } from 'class-variance-authority'
import { cn } from '../../lib/utils'
import { useReducedMotion } from '../../composables/useReducedMotion'
import { useLocale } from '@/composables/useLocale'
import { card3dVariants, card3dShadowVariants } from './card-3d-variants'

type Card3DVariantProps = VariantProps<typeof card3dVariants>

interface Card3DProps {
    maxRotation?: number
    perspective?: number
    scale?: number
    shadowOffset?: number
    shadow?: NonNullable<Card3DVariantProps['shadow']>
    disabled?: boolean
    class?: string
}

const props = withDefaults(defineProps<Card3DProps>(), {
    maxRotation: 15,
    perspective: 1000,
    scale: 1.02,
    shadowOffset: 10,
    shadow: 'default',
    disabled: false,
    class: '',
})

const cardRef = ref<HTMLDivElement | null>(null)
const rx = ref(0)
const ry = ref(0)
const isHovered = ref(false)

const prefersReducedMotion = useReducedMotion()
const { t } = useLocale()

// 静态/初始阴影偏移量
const initialOffset = computed(() => {
    switch (props.shadow) {
        case 'lg':
            return 6
        case 'xl':
            return 8
        default:
            return 4
    }
})

// 动态阴影偏移量
const sx = ref(0)
const sy = ref(0)

const CENTER_OFFSET = 0.5

const handlePointerMove = (e: PointerEvent) => {
    if (props.disabled || prefersReducedMotion.value) return
    const rect = cardRef.value?.getBoundingClientRect()
    if (!rect) return

    isHovered.value = true
    const x = (e.clientX - rect.left) / rect.width - CENTER_OFFSET // [-0.5, 0.5]
    const y = (e.clientY - rect.top) / rect.height - CENTER_OFFSET // [-0.5, 0.5]

    rx.value = -y * props.maxRotation
    ry.value = x * props.maxRotation

    // 阴影向反方向位移，加上初始阴影值作为偏移基数
    sx.value = -x * props.shadowOffset + initialOffset.value
    sy.value = -y * props.shadowOffset + initialOffset.value
}

const handlePointerLeave = () => {
    isHovered.value = false
    rx.value = 0
    ry.value = 0
    sx.value = initialOffset.value
    sy.value = initialOffset.value
}

// 初始化时设定阴影位置
sx.value = initialOffset.value
sy.value = initialOffset.value

const cardStyles = computed(() => {
    if (props.disabled || prefersReducedMotion.value) {
        return {}
    }
    return {
        transform: isHovered.value
            ? `perspective(${props.perspective}px) rotateX(${rx.value}deg) rotateY(${ry.value}deg) scale(${props.scale})`
            : `perspective(${props.perspective}px) rotateX(0deg) rotateY(0deg) scale(1)`,
    }
})

const shadowStyles = computed(() => {
    if (props.disabled || prefersReducedMotion.value) {
        return {
            transform: `translate(${initialOffset.value}px, ${initialOffset.value}px)`,
        }
    }
    return {
        transform: `translate(${sx.value}px, ${sy.value}px)`,
    }
})

const containerClasses = computed(() =>
    cn('relative inline-block w-full', props.class)
)

const cardClasses = computed(() =>
    cn(card3dVariants({ shadow: props.shadow }))
)

const shadowClasses = computed(() =>
    cn(card3dShadowVariants())
)
</script>

<template>
    <div :class="containerClasses" role="region" :aria-label="t('card3d.ariaLabel')">
        <div
            ref="cardRef"
            :class="cardClasses"
            :style="cardStyles"
            @pointermove="handlePointerMove"
            @pointerleave="handlePointerLeave"
        >
            <slot />
        </div>
        <!-- 绝对定位的底色 div 模拟物理阴影 -->
        <div :class="shadowClasses" :style="shadowStyles" aria-hidden="true" />
    </div>
</template>
