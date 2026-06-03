<script setup lang="ts">
import { computed } from 'vue'
import { cn } from '../../lib/utils'
import { useLocale } from '@/composables/useLocale'
import Card from '../card/Card.vue'
import CardContent from '../card/CardContent.vue'
import CardHeader from '../card/CardHeader.vue'
import Badge from '../badge/Badge.vue'
import Avatar from '../avatar/Avatar.vue'
import AvatarFallback from '../avatar/AvatarFallback.vue'

interface BlogCardProps {
    title?: string
    excerpt?: string
    author?: string
    date?: string
    category?: string
    class?: string
}

const props = withDefaults(defineProps<BlogCardProps>(), {
    title: undefined,
    excerpt: undefined,
    author: '',
    date: '',
    category: '',
    class: '',
})

const emit = defineEmits<{
    'read-more': []
}>()

const { t } = useLocale()

const rootClasses = computed(() => cn('w-full max-w-lg', props.class))

const resolvedTitle = computed(() => props.title ?? t('blogCard.defaultTitle'))
const resolvedExcerpt = computed(() => props.excerpt ?? t('blogCard.defaultExcerpt'))
const resolvedReadMore = computed(() => t('blogCard.readMore'))

const initials = computed(() => {
    if (!props.author) return ''
    return props.author
        .split(' ')
        .map(w => w[0])
        .join('')
        .slice(0, 2)
        .toUpperCase()
})
</script>

<template>
    <Card :class="rootClasses" variant="default">
        <CardHeader>
            <Badge v-if="category" variant="primary" size="sm" class="w-fit mb-2">
                {{ category }}
            </Badge>
            <h3 class="text-lg font-black tracking-tight leading-snug">
{{ resolvedTitle }}
</h3>
        </CardHeader>
        <CardContent>
            <p class="text-sm text-brutal-muted-foreground font-medium leading-relaxed">
{{ resolvedExcerpt }}
</p>
            <div class="mt-4 flex items-center justify-between">
                <div v-if="author" class="flex items-center gap-2">
                    <Avatar size="sm" shape="square">
                        <AvatarFallback>{{ initials }}</AvatarFallback>
                    </Avatar>
                    <span class="text-sm font-bold">{{ author }}</span>
                </div>
                <span v-if="date" class="text-xs text-brutal-muted-foreground font-medium">{{ date }}</span>
            </div>
            <button class="mt-3 text-sm font-bold text-brutal-primary cursor-pointer hover:underline active:translate-y-[var(--brutal-pressed-offset,2px)] active:shadow-none transition-all" @click="emit('read-more')">
                {{ resolvedReadMore }}
            </button>
            <slot name="actions" />
        </CardContent>
    </Card>
</template>
