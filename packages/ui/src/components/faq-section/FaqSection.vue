<script setup lang="ts">
import { computed } from 'vue'
import { cn } from '../../lib/utils'
import { useLocale } from '@/composables/useLocale'
import Accordion from '../accordion/Accordion.vue'
import AccordionItem from '../accordion/AccordionItem.vue'
import AccordionTrigger from '../accordion/AccordionTrigger.vue'
import AccordionContent from '../accordion/AccordionContent.vue'
import Card from '../card/Card.vue'
import Badge from '../badge/Badge.vue'

export interface FaqItem {
    question: string
    answer: string
}

interface FaqSectionProps {
    title?: string
    subtitle?: string
    items?: FaqItem[]
    class?: string
}

const props = withDefaults(defineProps<FaqSectionProps>(), {
    title: undefined,
    subtitle: undefined,
    items: () => [],
    class: '',
})

const emit = defineEmits<{
    'item-click': [index: number]
}>()

const { t } = useLocale()

const resolvedTitle = computed(() => props.title ?? t('faqSection.defaultTitle'))
const resolvedSubtitle = computed(() => props.subtitle ?? t('faqSection.defaultSubtitle'))

const rootClasses = computed(() => cn('w-full max-w-3xl mx-auto', props.class))
</script>

<template>
    <div :class="rootClasses">
        <slot name="header">
            <div class="text-center mb-8">
                <h2 class="text-3xl font-black tracking-tight">
                    {{ resolvedTitle }}
                </h2>
                <p v-if="resolvedSubtitle" class="mt-2 text-brutal-muted-foreground font-medium">
                    {{ resolvedSubtitle }}
                </p>
            </div>
        </slot>

        <slot>
            <Card variant="flat" class="p-0">
                <Accordion type="single" collapsible class="w-full">
                    <AccordionItem
                        v-for="(item, index) in items"
                        :key="index"
                        :value="String(index)"
                        class="mb-0 last:mb-0"
                        @click="emit('item-click', index)"
                    >
                        <AccordionTrigger>
                            <span class="flex items-center gap-3 text-left">
                                <Badge variant="secondary" class="shrink-0">
                                    {{ index + 1 }}
                                </Badge>
                                <span class="font-bold">{{ item.question }}</span>
                            </span>
                        </AccordionTrigger>
                        <AccordionContent>
                            <p class="text-brutal-muted-foreground font-medium pl-10">
                                {{ item.answer }}
                            </p>
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>
            </Card>
        </slot>

        <slot name="footer" />
    </div>
</template>
