<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted, watch } from 'vue';
import useEmblaCarousel from 'embla-carousel-vue';
import { ChevronLeft, ChevronRight } from 'lucide-vue-next';
import { cn } from '../../lib/utils';
import { carouselRootVariants, carouselButtonVariants } from './carousel-variants';
import { useLocale } from '@/composables/useLocale';

const { t } = useLocale();

const DEFAULT_AUTOPLAY_DELAY = 3000

interface CarouselProps {
    loop?: boolean;
    autoplay?: boolean;
    autoplayDelay?: number;
    showArrows?: boolean;
    showDots?: boolean;
    size?: 'sm' | 'md' | 'lg' | 'full' | 'auto';
    class?: string;
}

const props = withDefaults(defineProps<CarouselProps>(), {
    loop: false,
    autoplay: false,
    autoplayDelay: DEFAULT_AUTOPLAY_DELAY,
    showArrows: true,
    showDots: true,
    size: 'auto',
});

const [emblaRef, emblaApi] = useEmblaCarousel({ loop: props.loop });

const selectedIndex = ref(0);
const scrollSnaps = ref<number[]>([]);
let autoplayTimer: ReturnType<typeof setInterval> | null = null;

const canScrollPrev = computed(() => props.loop || selectedIndex.value > 0);
const canScrollNext = computed(() => props.loop || selectedIndex.value < scrollSnaps.value.length - 1);

function onInit() {
    if (!emblaApi.value) return;
    scrollSnaps.value = emblaApi.value.scrollSnapList();
    selectedIndex.value = emblaApi.value.selectedScrollSnap();
}

function onSelect() {
    if (!emblaApi.value) return;
    selectedIndex.value = emblaApi.value.selectedScrollSnap();
}

function scrollPrev() {
    emblaApi.value?.scrollPrev();
}

function scrollNext() {
    emblaApi.value?.scrollNext();
}

function scrollTo(index: number) {
    emblaApi.value?.scrollTo(index);
}

function startAutoplay() {
    stopAutoplay();
    if (!props.autoplay) return;
    autoplayTimer = setInterval(() => {
        if (emblaApi.value) {
            if (!props.loop && selectedIndex.value === scrollSnaps.value.length - 1) {
                emblaApi.value.scrollTo(0);
            } else {
                emblaApi.value.scrollNext();
            }
        }
    }, props.autoplayDelay);
}

function stopAutoplay() {
    if (autoplayTimer) {
        clearInterval(autoplayTimer);
        autoplayTimer = null;
    }
}

onMounted(() => {
    if (!emblaApi.value) return;
    emblaApi.value.on('init', onInit);
    emblaApi.value.on('select', onSelect);
    emblaApi.value.on('reInit', onInit);
    onInit();
    startAutoplay();
});

watch(() => props.autoplay, (val) => {
    if (val) startAutoplay();
    else stopAutoplay();
});

watch(() => props.loop, () => {
    if (emblaApi.value) emblaApi.value.reInit({ loop: props.loop });
});

watch(() => props.autoplayDelay, () => {
    if (props.autoplay) startAutoplay();
});

onUnmounted(() => {
    stopAutoplay();
});

const rootClass = computed(() =>
    cn(carouselRootVariants({ size: props.size }), props.class)
);

const prevButtonClass = computed(() =>
    cn(carouselButtonVariants({ direction: 'prev' }))
);

const nextButtonClass = computed(() =>
    cn(carouselButtonVariants({ direction: 'next' }))
);

const dotActiveClasses = cn(
    'w-3 h-3 border-3 border-brutal rounded-brutal cursor-pointer transition-all duration-150',
    'bg-brutal-primary shadow-brutal'
)

const dotInactiveClasses = cn(
    'w-3 h-3 border-3 border-brutal rounded-brutal cursor-pointer transition-all duration-150',
    'bg-brutal-bg hover:bg-brutal-muted'
);
</script>

<template>
    <div :class="rootClass" @mouseenter="stopAutoplay" @mouseleave="startAutoplay">
        <div ref="emblaRef" class="overflow-hidden h-full">
            <div class="flex h-full">
                <slot />
            </div>
        </div>

        <button
            v-if="showArrows"
            type="button"
            :class="prevButtonClass"
            :disabled="!canScrollPrev"
            :aria-label="t('carousel.previousSlide')"
            @click="scrollPrev"
        >
            <ChevronLeft class="w-5 h-5" />
        </button>

        <button
            v-if="showArrows"
            type="button"
            :class="nextButtonClass"
            :disabled="!canScrollNext"
            :aria-label="t('carousel.nextSlide')"
            @click="scrollNext"
        >
            <ChevronRight class="w-5 h-5" />
        </button>

        <div
            v-if="showDots && scrollSnaps.length > 1"
            class="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2 z-10"
        >
            <button
                v-for="(_, i) in scrollSnaps"
                :key="i"
                type="button"
                :aria-label="t('carousel.goToSlide', { index: i + 1 })"
                :class="i === selectedIndex ? dotActiveClasses : dotInactiveClasses"
                @click="scrollTo(i)"
            />
        </div>
    </div>
</template>
