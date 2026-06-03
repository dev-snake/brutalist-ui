<script setup lang="ts">
import { computed } from 'vue'
import { Image as ImageIcon } from 'lucide-vue-next'
import { useLocale } from '@/composables/useLocale'
import { cn } from '../../lib/utils'
import Carousel from '../carousel/Carousel.vue'
import CarouselItem from '../carousel/CarouselItem.vue'
import Card from '../card/Card.vue'

export interface GalleryItem {
    src: string
    alt: string
    caption?: string
}

interface GallerySectionProps {
    title?: string
    items?: GalleryItem[]
    class?: string
}

const props = withDefaults(defineProps<GallerySectionProps>(), {
    title: undefined,
    items: () => [],
    class: '',
})

const emit = defineEmits<{
    'item-click': [index: number]
}>()

const { t } = useLocale()

const resolvedTitle = computed(() => props.title ?? t('gallerySection.defaultTitle'))
const resolvedNoItems = computed(() => t('gallerySection.noItems'))

function handleItemClick(index: number) {
    emit('item-click', index)
}

const rootClasses = computed(() => cn('w-full max-w-4xl mx-auto', props.class))
</script>

<template>
    <div :class="rootClasses">
        <slot name="header">
            <div class="mb-6">
                <h2 class="text-3xl font-black tracking-tight">
                    {{ resolvedTitle }}
                </h2>
            </div>
        </slot>

        <slot>
            <Card variant="flat" class="p-4">
                <Carousel
                    :show-arrows="true"
                    :show-dots="true"
                    size="full"
                >
                    <CarouselItem
                        v-for="(item, index) in items"
                        :key="index"
                    >
                        <div
                            class="flex flex-col items-center justify-center p-4 cursor-pointer active:translate-y-[var(--brutal-pressed-offset,2px)] active:shadow-none transition-all"
                            @click="handleItemClick(index)"
                        >
                            <div class="w-full border-3 border-brutal shadow-brutal overflow-hidden bg-brutal-bg">
                                <img
                                    :src="item.src"
                                    :alt="item.alt"
                                    class="w-full h-auto object-cover"
                                    loading="lazy"
                                >
                            </div>
                            <p v-if="item.caption" class="mt-3 text-sm font-bold text-brutal-fg text-center">
                                {{ item.caption }}
                            </p>
                        </div>
                    </CarouselItem>
                </Carousel>

                <div v-if="items.length === 0" class="flex flex-col items-center justify-center py-12 text-brutal-muted-foreground">
                    <ImageIcon class="w-12 h-12 mb-3 stroke-[2]" />
                    <p class="font-bold">
                        {{ resolvedNoItems }}
                    </p>
                </div>
            </Card>
        </slot>

        <slot name="footer" />
    </div>
</template>
