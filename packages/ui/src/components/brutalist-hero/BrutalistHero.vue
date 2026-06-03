<script setup lang="ts">
import { computed } from 'vue'
import { ArrowRight, Sparkles } from 'lucide-vue-next'
import { cn } from '../../lib/utils'
import { useLocale } from '@/composables/useLocale'
import Button from '../button/Button.vue'
import Card from '../card/Card.vue'
import CardContent from '../card/CardContent.vue'

interface BrutalistHeroProps {
    title?: string
    subtitle?: string
    primaryCtaText?: string
    secondaryCtaText?: string
    class?: string
}

const props = withDefaults(defineProps<BrutalistHeroProps>(), {
    title: undefined,
    subtitle: '',
    primaryCtaText: undefined,
    secondaryCtaText: undefined,
    class: '',
})

const { t } = useLocale()

const resolvedTitle = computed(() => props.title ?? t('brutalistHero.title'))
const resolvedPrimaryCtaText = computed(() => props.primaryCtaText ?? t('brutalistHero.primaryCtaText'))
const resolvedSecondaryCtaText = computed(() => props.secondaryCtaText ?? t('brutalistHero.secondaryCtaText'))

const emit = defineEmits<{
    primaryCta: []
    secondaryCta: []
}>()

const rootClasses = computed(() => cn('w-full', props.class))
</script>

<template>
    <div :class="rootClasses">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
                <div class="inline-flex items-center gap-2 mb-6 bg-brutal-accent px-3 py-1 border-3 border-brutal rotate-[-1deg]">
                    <Sparkles class="h-4 w-4 stroke-[3]" />
                    <span class="font-black text-sm">{{ t('brutalistHero.neoBrutalismUI') }}</span>
                </div>
                <h1 class="text-4xl lg:text-5xl font-black tracking-tight leading-tight">
{{ resolvedTitle }}
</h1>
                <p v-if="subtitle" class="mt-4 text-lg text-brutal-muted-foreground font-medium">
{{ subtitle }}
</p>
                <div class="mt-8 flex flex-wrap gap-4">
                    <Button variant="primary" size="lg" @click="emit('primaryCta')">
                        {{ resolvedPrimaryCtaText }}
                        <ArrowRight class="ml-2 h-5 w-5 stroke-[3]" />
                    </Button>
                    <Button variant="outline" size="lg" @click="emit('secondaryCta')">
{{ resolvedSecondaryCtaText }}
</Button>
                </div>
            </div>

            <div class="relative">
                <div class="absolute inset-0 bg-brutal-primary border-3 border-brutal translate-x-3 translate-y-3" />
                <Card variant="default" padding="default" class="relative bg-brutal-bg font-mono text-sm">
                    <CardContent>
                        <div class="space-y-1">
                            <p class="text-brutal-muted-foreground">
$ npx brutxui init
</p>
                            <p class="text-brutal-success font-bold">
✓ Project initialized
</p>
                            <p class="text-brutal-muted-foreground">
$ npx brutxui add button
</p>
                            <p class="text-brutal-success font-bold">
✓ Button component added
</p>
                            <p class="text-brutal-muted-foreground">
$ npx brutxui add card dialog
</p>
                            <p class="text-brutal-success font-bold">
✓ 2 components added
</p>
                            <p class="text-brutal-accent font-bold animate-pulse">
█
</p>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>
    </div>
</template>
