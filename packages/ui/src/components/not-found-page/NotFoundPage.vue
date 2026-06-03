<script setup lang="ts">
import { computed } from 'vue'
import { ArrowLeft } from 'lucide-vue-next'
import { useLocale } from '@/composables/useLocale'
import { cn } from '../../lib/utils'
import Button from '../button/Button.vue'
import Card from '../card/Card.vue'
import GlitchText from '../glitch-text/GlitchText.vue'

interface NotFoundPageProps {
    title?: string
    description?: string
    backText?: string
    class?: string
}

const props = withDefaults(defineProps<NotFoundPageProps>(), {
    title: undefined,
    description: undefined,
    backText: undefined,
    class: '',
})

const { t } = useLocale()

const resolvedTitle = computed(() => props.title ?? t('notFoundPage.defaultTitle'))
const resolvedDescription = computed(() => props.description ?? t('notFoundPage.defaultDescription'))
const resolvedBackText = computed(() => props.backText ?? t('notFoundPage.defaultBackText'))

const emit = defineEmits<{
    back: []
}>()

const rootClasses = computed(() =>
    cn('min-h-screen flex items-center justify-center bg-brutal-bg p-4', props.class)
)
</script>

<template>
    <div :class="rootClasses">
        <div class="w-full max-w-lg text-center relative">
            <slot name="header" />

            <Card variant="elevated" class="relative p-8 sm:p-12">
                <div class="absolute -top-6 -left-6 h-16 w-16 bg-brutal-accent border-3 border-brutal rotate-12 shadow-brutal-sm" />
                <div class="absolute -bottom-4 -right-4 h-12 w-12 bg-brutal-secondary border-3 border-brutal -rotate-6 shadow-brutal-sm" />

                <div class="mb-6">
                    <GlitchText text="404" trigger="autoplay" :interval="4000" speed="fast" class="text-7xl sm:text-8xl font-black text-brutal-primary" />
                </div>

                <h1 class="text-2xl sm:text-3xl font-black tracking-tight text-brutal-fg">
                    {{ resolvedTitle }}
                </h1>

                <p class="mt-3 text-brutal-muted-foreground font-medium">
                    {{ resolvedDescription }}
                </p>

                <slot />

                <div class="mt-8">
                    <Button variant="primary" @click="emit('back')">
                        <ArrowLeft class="h-4 w-4 stroke-[3]" />
                        {{ resolvedBackText }}
                    </Button>
                </div>

                <slot name="footer" />
            </Card>
        </div>
    </div>
</template>
