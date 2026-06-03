<script setup lang="ts">
import { computed, ref, onMounted, onUnmounted } from 'vue'
import { X, CheckCircle, AlertCircle, AlertTriangle, Info, Zap } from 'lucide-vue-next'
import { type VariantProps } from 'class-variance-authority'
import { cn } from '../../lib/utils'
import { toastVariants } from './toast-variants'
import { useLocale } from '@/composables/useLocale'

type ToastVariantProps = VariantProps<typeof toastVariants>

const DEFAULT_DURATION = 5000
const LEAVE_ANIMATION_DELAY = 300

interface ToastProps {
    variant?: NonNullable<ToastVariantProps['variant']>
    size?: NonNullable<ToastVariantProps['size']>
    title?: string
    description?: string
    duration?: number
    class?: string
}

const props = withDefaults(defineProps<ToastProps>(), {
    variant: 'default',
    size: 'default',
    title: '',
    description: '',
    duration: DEFAULT_DURATION,
    class: '',
})

const emit = defineEmits<{ close: [] }>()

const { t } = useLocale()

const isLeaving = ref(false)
const timer = ref<number | undefined>(undefined)
const leaveTimer = ref<number | undefined>(undefined)

function startLeave() {
    isLeaving.value = true
    leaveTimer.value = window.setTimeout(() => {
        emit('close')
    }, LEAVE_ANIMATION_DELAY)
}

onMounted(() => {
    if (props.duration) {
        timer.value = window.setTimeout(() => {
            startLeave()
        }, props.duration)
    }
})

onUnmounted(() => {
    if (timer.value) window.clearTimeout(timer.value)
    if (leaveTimer.value) window.clearTimeout(leaveTimer.value)
})

const classes = computed(() =>
    cn(
        toastVariants({ variant: props.variant, size: props.size }),
        isLeaving.value && 'animate-out slide-out-to-right-full fade-out-0',
        props.class
    )
)

const iconComponent = computed(() => {
    switch (props.variant) {
        case 'success': return CheckCircle
        case 'error': return AlertCircle
        case 'warning': return AlertTriangle
        case 'info': return Info
        default: return Zap
    }
})

const closeClasses = computed(() =>
    cn(
        'flex-shrink-0 h-8 w-8 flex items-center justify-center',
        'border-3 border-brutal bg-brutal-bg',
        'shadow-brutal-sm',
        'transition-all duration-150',
        'hover:shadow-brutal-lg hover:-translate-x-0.5 hover:-translate-y-0.5',
        'active:translate-y-[var(--brutal-pressed-offset,2px)] active:shadow-none transition-all',
        'focus:outline-none focus:ring-2 focus:ring-brutal-ring focus:ring-offset-2'
    )
)
</script>

<template>
    <div :class="classes" role="alert">
        <div v-if="duration" class="absolute top-0 left-0 right-0 h-1 bg-brutal-fg/10 overflow-hidden">
            <div
                class="h-full bg-brutal-fg/30 animate-nb-shrink"
                :style="{ animationDuration: `${duration}ms` }"
            />
        </div>

        <div class="flex items-start gap-4 p-4 pt-5">
            <div class="flex-shrink-0 mt-0.5">
                <component :is="iconComponent" class="h-6 w-6 stroke-[2.5]" />
            </div>

            <div class="flex-1 min-w-0">
                <p v-if="title" class="font-black text-base leading-tight">
{{ title }}
</p>
                <p v-if="description" class="font-medium text-sm mt-1 opacity-80 leading-snug">
{{ description }}
</p>
                <slot />
            </div>

            <button :class="closeClasses" :aria-label="t('toast.close')" @click="startLeave">
                <X class="h-4 w-4 stroke-[3]" />
            </button>
        </div>
    </div>
</template>
