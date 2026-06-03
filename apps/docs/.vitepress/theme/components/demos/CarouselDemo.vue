<script setup lang="ts">
import { ref } from 'vue'
import { Carousel, CarouselItem } from 'brutx-ui-vue'

const slides = [
    { bg: 'bg-brutal-primary', label: '🔥 新粗野主义', desc: '大胆边框 + 硬朗阴影' },
    { bg: 'bg-brutal-secondary', label: '💡 简洁至上', desc: '去掉多余的装饰' },
    { bg: 'bg-brutal-accent', label: '⚡ 高对比度', desc: '清晰的视觉层次感' },
]
</script>

<template>
    <div class="w-full max-w-xl mx-auto">
        <Carousel :loop="true" :autoplay="true" :autoplay-delay="2500" size="md">
            <CarouselItem v-for="slide in slides" :key="slide.label">
                <div :class="['w-full h-full flex flex-col items-center justify-center gap-2 border-3 border-brutal', slide.bg]">
                    <p class="text-2xl font-black tracking-tight">{{ slide.label }}</p>
                    <p class="text-sm font-bold opacity-70">{{ slide.desc }}</p>
                </div>
            </CarouselItem>
        </Carousel>
    </div>
</template>
