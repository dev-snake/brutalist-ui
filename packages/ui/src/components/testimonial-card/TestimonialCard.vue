<script setup lang="ts">
import { computed } from 'vue'
import { Quote } from 'lucide-vue-next'
import { cn } from '../../lib/utils'
import { useLocale } from '@/composables/useLocale'
import Card from '../card/Card.vue'
import CardContent from '../card/CardContent.vue'
import Avatar from '../avatar/Avatar.vue'
import AvatarFallback from '../avatar/AvatarFallback.vue'
import Badge from '../badge/Badge.vue'

interface TestimonialCardProps {
    quote?: string
    author?: string
    role?: string
    class?: string
}

const props = withDefaults(defineProps<TestimonialCardProps>(), {
    quote: undefined,
    author: undefined,
    role: undefined,
    class: '',
})

const { t } = useLocale()

const rootClasses = computed(() => cn('w-full max-w-lg', props.class))

const resolvedQuote = computed(() => props.quote ?? t('testimonialCard.defaultQuote'))
const resolvedAuthor = computed(() => props.author ?? t('testimonialCard.defaultAuthor'))
const resolvedRole = computed(() => props.role ?? t('testimonialCard.defaultRole'))

const resolvedVerified = computed(() => t('testimonialCard.verified'))

const initials = computed(() => {
    return resolvedAuthor.value
        .split(' ')
        .map(w => w[0])
        .join('')
        .slice(0, 2)
        .toUpperCase()
})
</script>

<template>
    <Card :class="rootClasses" variant="default">
        <CardContent>
            <div class="flex items-start gap-4">
                <div class="shrink-0">
                    <Avatar size="lg" shape="square">
                        <AvatarFallback>{{ initials }}</AvatarFallback>
                    </Avatar>
                </div>
                <div class="flex-1 min-w-0">
                    <Quote class="h-8 w-8 stroke-[2.5] text-brutal-primary mb-2" />
                    <p class="text-base font-bold leading-relaxed">
{{ resolvedQuote }}
</p>
                    <div class="mt-4 flex items-center gap-3">
                        <div>
                            <p class="font-black text-sm">
{{ resolvedAuthor }}
</p>
                            <p class="text-xs text-brutal-muted-foreground font-medium">
{{ resolvedRole }}
</p>
                        </div>
                        <Badge variant="secondary" size="sm">
                            {{ resolvedVerified }}
                        </Badge>
                    </div>
                </div>
            </div>
            <slot name="actions" />
        </CardContent>
    </Card>
</template>
