<script setup lang="ts">
import { computed, type Component } from 'vue'
import { cn } from '../../lib/utils'
import { useLocale } from '@/composables/useLocale'
import Card from '../card/Card.vue'
import CardContent from '../card/CardContent.vue'
import CardHeader from '../card/CardHeader.vue'
import Button from '../button/Button.vue'
import Badge from '../badge/Badge.vue'

export interface ActionItem {
    label: string
    icon: Component
    variant?: 'primary' | 'secondary' | 'outline' | 'danger'
}

interface QuickActionsProps {
    title?: string
    actions?: ActionItem[]
    class?: string
}

const props = withDefaults(defineProps<QuickActionsProps>(), {
    title: undefined,
    actions: () => [],
    class: '',
})

const { t } = useLocale()

const emit = defineEmits<{
    'action-click': [index: number]
}>()

const rootClasses = computed(() => cn('w-full max-w-md', props.class))

const resolvedTitle = computed(() => props.title ?? t('quickActions.defaultTitle'))
const resolvedBadge = computed(() => t('quickActions.badge'))
</script>

<template>
    <Card :class="rootClasses" variant="default">
        <CardHeader>
            <div class="flex items-center gap-2">
                <Badge variant="accent" size="sm">{{ resolvedBadge }}</Badge>
                <h3 class="text-lg font-black tracking-tight">
{{ resolvedTitle }}
</h3>
            </div>
        </CardHeader>
        <CardContent>
            <div class="grid grid-cols-2 sm:grid-cols-3 gap-3">
                <Button
                    v-for="(action, index) in actions"
                    :key="index"
                    :variant="action.variant ?? 'outline'"
                    class="flex flex-col items-center gap-2 h-auto py-3 px-2"
                    @click="emit('action-click', index)"
                >
                    <component :is="action.icon" class="h-5 w-5 stroke-[2.5]" />
                    <span class="text-xs font-bold">{{ action.label }}</span>
                </Button>
            </div>
            <slot name="actions" />
        </CardContent>
    </Card>
</template>
