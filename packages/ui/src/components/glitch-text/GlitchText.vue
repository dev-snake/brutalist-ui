<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted, onUpdated } from 'vue'
import { type VariantProps } from 'class-variance-authority'
import { cn } from '../../lib/utils'
import { useReducedMotion } from '../../composables/useReducedMotion'
import { glitchTextVariants } from './glitch-text-variants'

type GlitchTextVariantProps = VariantProps<typeof glitchTextVariants>

interface GlitchTextProps {
    text?: string
    trigger?: 'hover' | 'click' | 'autoplay' | 'none'
    interval?: number
    speed?: NonNullable<GlitchTextVariantProps['speed']>
    class?: string
}

const props = withDefaults(defineProps<GlitchTextProps>(), {
    text: '',
    trigger: 'hover',
    interval: 3000,
    speed: 'medium',
    class: '',
})

const elementRef = ref<HTMLElement | null>(null)
const isActive = ref(false)
const prefersReducedMotion = useReducedMotion()

const displayText = ref(props.text)

function updateDisplayText() {
    if (elementRef.value) {
        displayText.value = elementRef.value.textContent || props.text
    } else {
        displayText.value = props.text
    }
}

onMounted(updateDisplayText)
onUpdated(updateDisplayText)

let autoplayTimer: any = null
let autoplayStopTimer: any = null

const startAutoplay = () => {
    stopAutoplay()
    autoplayTimer = setInterval(() => {
        if (prefersReducedMotion.value) return
        isActive.value = true
        // 开启抖动 1 秒后自动关闭，等待下一个周期，产生节奏感
        autoplayStopTimer = setTimeout(() => {
            isActive.value = false
        }, 1000)
    }, props.interval)
}

const stopAutoplay = () => {
    if (autoplayTimer) {
        clearInterval(autoplayTimer)
        autoplayTimer = null
    }
    if (autoplayStopTimer) {
        clearTimeout(autoplayStopTimer)
        autoplayStopTimer = null
    }
}

onMounted(() => {
    if (props.trigger === 'autoplay') {
        startAutoplay()
    }
})

onUnmounted(() => {
    stopAutoplay()
})

const onMouseEnter = () => {
    if (props.trigger === 'hover') {
        isActive.value = true
    } else if (props.trigger === 'autoplay') {
        // Autoplay 模式下，hover 时暂停
        isActive.value = false
        stopAutoplay()
    }
}

const onMouseLeave = () => {
    if (props.trigger === 'hover') {
        isActive.value = false
    } else if (props.trigger === 'autoplay') {
        // 离开后重新开启
        startAutoplay()
    }
}

const onClick = () => {
    if (props.trigger === 'click') {
        isActive.value = !isActive.value
    }
}

// 暴露 API 供外部程序化控制
const play = () => {
    isActive.value = true
}

const stop = () => {
    isActive.value = false
}

defineExpose({
    play,
    stop,
})

const classes = computed(() =>
    cn(
        glitchTextVariants({ speed: props.speed }),
        isActive.value && !prefersReducedMotion.value ? 'is-glitching' : '',
        props.class
    )
)
</script>

<template>
    <span
        ref="elementRef"
        :class="classes"
        :data-text="displayText"
        @mouseenter="onMouseEnter"
        @mouseleave="onMouseLeave"
        @click="onClick"
        role="status"
        aria-live="polite"
    >
        <slot>{{ text }}</slot>
    </span>
</template>

<style scoped>
.glitch-text::before,
.glitch-text::after {
    display: none;
    content: attr(data-text);
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: transparent;
    clip-path: inset(0 0 0 0);
}

.glitch-text.is-glitching::before,
.glitch-text.is-glitching::after {
    display: block;
}

.glitch-text.is-glitching::before {
    left: 2px;
    text-shadow: -2px 0 var(--brutal-destructive, #EF476F);
    animation: glitch-anim-1 var(--glitch-duration, 300ms) infinite linear alternate-reverse;
}

.glitch-text.is-glitching::after {
    left: -2px;
    text-shadow: -2px 0 var(--brutal-info, #4A90D9);
    animation: glitch-anim-2 var(--glitch-duration, 300ms) infinite linear alternate-reverse;
}

@keyframes glitch-anim-1 {
    0% {
        clip-path: inset(20% 0 70% 0);
        transform: skew(-5deg);
    }
    20% {
        clip-path: inset(60% 0 10% 0);
        transform: skew(5deg);
    }
    40% {
        clip-path: inset(40% 0 50% 0);
        transform: skew(-2deg);
    }
    60% {
        clip-path: inset(80% 0 5% 0);
        transform: skew(3deg);
    }
    80% {
        clip-path: inset(10% 0 85% 0);
        transform: skew(-4deg);
    }
    100% {
        clip-path: inset(50% 0 35% 0);
        transform: skew(1deg);
    }
}

@keyframes glitch-anim-2 {
    0% {
        clip-path: inset(10% 0 85% 0);
        transform: skew(4deg);
    }
    25% {
        clip-path: inset(40% 0 45% 0);
        transform: skew(-3deg);
    }
    50% {
        clip-path: inset(70% 0 15% 0);
        transform: skew(5deg);
    }
    75% {
        clip-path: inset(25% 0 60% 0);
        transform: skew(-2deg);
    }
    100% {
        clip-path: inset(90% 0 2% 0);
        transform: skew(3deg);
    }
}

@media (prefers-reduced-motion: reduce) {
    .glitch-text::before,
    .glitch-text::after,
    .glitch-text.is-glitching::before,
    .glitch-text.is-glitching::after {
        display: none !important;
        animation: none !important;
    }
}
</style>
