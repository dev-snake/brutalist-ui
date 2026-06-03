<script setup lang="ts">
import { ref, computed, watch, onMounted, onUnmounted, nextTick } from 'vue';
import { type VariantProps } from 'class-variance-authority';
import { cn } from '../../lib/utils';
import { counterVariants } from './counter-variants';

const DEFAULT_COUNTER_DURATION = 2000

type CounterVariantProps = VariantProps<typeof counterVariants>;

interface CounterProps {
    to: number;
    from?: number;
    duration?: number;
    decimals?: number;
    prefix?: string;
    suffix?: string;
    separator?: string;
    easing?: 'linear' | 'ease-out' | 'ease-in-out';
    autoStart?: boolean;
    size?: NonNullable<CounterVariantProps['size']>;
    class?: string;
}

const props = withDefaults(defineProps<CounterProps>(), {
    from: 0,
    duration: DEFAULT_COUNTER_DURATION,
    decimals: 0,
    prefix: '',
    suffix: '',
    separator: ',',
    easing: 'ease-out',
    autoStart: true,
    size: 'md',
});

const emit = defineEmits<{
    complete: [];
}>();

const current = ref(props.from);
const rootRef = ref<HTMLElement | null>(null);
const measureRef = ref<HTMLElement | null>(null);
const scaleFactor = ref(1);
let resizeObserver: ResizeObserver | null = null;
let rafId: number | null = null;
let startTime: number | null = null;
let scaleRafId: number | null = null;

function easingFn(t: number): number {
    if (props.easing === 'linear') return t;
    if (props.easing === 'ease-out') return 1 - Math.pow(1 - t, 3);
    return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
}

function formatNumber(val: number): string {
    const fixed = val.toFixed(props.decimals);
    if (!props.separator) return fixed;
    const [int, dec] = fixed.split('.');
    const formatted = int.replace(/\B(?=(\d{3})+(?!\d))/g, props.separator);
    return dec !== undefined ? `${formatted}.${dec}` : formatted;
}

function animate(ts: number) {
    if (startTime === null) startTime = ts;
    const elapsed = ts - startTime;
    const progress = Math.min(elapsed / props.duration, 1);
    const eased = easingFn(progress);
    current.value = props.from + (props.to - props.from) * eased;

    if (progress < 1) {
        rafId = requestAnimationFrame(animate);
    } else {
        current.value = props.to;
        emit('complete');
    }
}

function start() {
    if (rafId !== null) cancelAnimationFrame(rafId);
    startTime = null;
    current.value = props.from;
    rafId = requestAnimationFrame(animate);
}

function stop() {
    if (rafId !== null) {
        cancelAnimationFrame(rafId);
        rafId = null;
    }
}

defineExpose({ start, stop });

function scheduleUpdateScale() {
    if (scaleRafId !== null) return;
    scaleRafId = requestAnimationFrame(() => {
        scaleRafId = null;
        updateScale();
    });
}

function updateScale() {
    const measure = measureRef.value;
    const root = rootRef.value;
    if (!measure || !root) return;
    const naturalWidth = measure.scrollWidth;
    const constrainedWidth = root.clientWidth;
    if (naturalWidth > constrainedWidth) {
        scaleFactor.value = constrainedWidth / naturalWidth;
    } else {
        scaleFactor.value = 1;
    }
}

onMounted(() => {
    if (props.autoStart) start();
    nextTick(() => {
        const root = rootRef.value;
        if (!root) return;
        updateScale();
        resizeObserver = new ResizeObserver(updateScale);
        resizeObserver.observe(root);
    });
});

onUnmounted(() => {
    stop();
    if (scaleRafId !== null) {
        cancelAnimationFrame(scaleRafId);
        scaleRafId = null;
    }
    if (resizeObserver) {
        resizeObserver.disconnect();
        resizeObserver = null;
    }
});

watch(() => [props.to, props.from] as const, () => {
    if (props.autoStart) start();
});

watch(() => [props.to, props.prefix, props.suffix, props.separator, props.decimals, props.size] as const, () => {
    scheduleUpdateScale();
});

const displayValue = computed(() =>
    `${props.prefix}${formatNumber(current.value)}${props.suffix}`
);

const finalDisplayValue = computed(() =>
    `${props.prefix}${formatNumber(props.to)}${props.suffix}`
);

const scaleStyle = computed(() => {
    if (scaleFactor.value >= 1) return undefined;
    return {
        transform: `scale(${scaleFactor.value})`,
        transformOrigin: 'left center' as const,
    };
});

const classes = computed(() =>
    cn(counterVariants({ size: props.size }), props.class)
);

const measureClasses = computed(() =>
    cn(counterVariants({ size: props.size }), props.class, 'absolute invisible whitespace-nowrap !max-w-none')
);
</script>

<template>
    <span class="relative inline-flex max-w-full min-w-0">
        <span ref="measureRef" :class="measureClasses" aria-hidden="true">
            {{ finalDisplayValue }}
        </span>
        <span ref="rootRef" :class="classes" :style="scaleStyle" aria-live="polite" :aria-label="displayValue">
            {{ displayValue }}
        </span>
    </span>
</template>
