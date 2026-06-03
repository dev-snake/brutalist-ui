<script setup lang="ts">
import { computed } from 'vue'
import { useLocale } from '@/composables/useLocale'
import { cn } from '../../lib/utils'
import Skeleton from '../skeleton/Skeleton.vue'
import Spinner from '../spinner/Spinner.vue'
import Progress from '../progress/Progress.vue'

interface LoadingPageProps {
    title?: string
    description?: string
    progress?: number
    class?: string
}

const props = withDefaults(defineProps<LoadingPageProps>(), {
    title: undefined,
    description: undefined,
    progress: undefined,
    class: '',
})

const { t } = useLocale()

const resolvedTitle = computed(() => props.title ?? t('loadingPage.defaultTitle'))
const resolvedDescription = computed(() => props.description ?? t('loadingPage.defaultDescription'))

const hasProgress = computed(() => props.progress !== undefined)

const rootClasses = computed(() =>
    cn('min-h-screen flex items-center justify-center bg-brutal-bg p-4', props.class)
)
</script>

<template>
    <div :class="rootClasses">
        <div class="w-full max-w-lg text-center relative">
            <slot name="header" />

            <div class="relative border-3 border-brutal bg-brutal-bg shadow-brutal p-8 sm:p-12">
                <Skeleton variant="accent" class="absolute -top-3 -left-3 h-6 w-24" />
                <Skeleton variant="secondary" class="absolute -bottom-3 -right-3 h-6 w-32" />

                <div class="flex justify-center mb-6">
                    <Spinner size="lg" />
                </div>

                <h1 class="text-2xl sm:text-3xl font-black tracking-tight text-brutal-fg">
                    {{ resolvedTitle }}
                </h1>

                <p class="mt-3 text-brutal-muted-foreground font-medium">
                    {{ resolvedDescription }}
                </p>

                <slot />

                <div v-if="hasProgress" class="mt-6">
                    <Progress :model-value="progress" />
                </div>

                <slot name="footer" />
            </div>
        </div>
    </div>
</template>
