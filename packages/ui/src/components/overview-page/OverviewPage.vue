<script setup lang="ts">
import { computed, type Component } from 'vue'
import { Activity } from 'lucide-vue-next'
import { cn } from '../../lib/utils'
import { useLocale } from '@/composables/useLocale'
import DashboardStats from '../dashboard-stats/DashboardStats.vue'
import type { StatItem } from '../dashboard-stats/DashboardStats.vue'
import Card from '../card/Card.vue'
import CardHeader from '../card/CardHeader.vue'
import CardTitle from '../card/CardTitle.vue'
import CardContent from '../card/CardContent.vue'

export interface OverviewStat {
    title: string
    value: string
    change: string
    trend: 'up' | 'down' | 'neutral'
}

interface OverviewPageProps {
    title?: string
    stats?: OverviewStat[]
    class?: string
}

const props = withDefaults(defineProps<OverviewPageProps>(), {
    title: undefined,
    stats: () => [],
    class: '',
})

const { t } = useLocale()

const emit = defineEmits<{
    'stat-click': [index: number]
}>()

const rootClasses = computed(() => cn('w-full max-w-6xl mx-auto p-6', props.class))

const resolvedTitle = computed(() => props.title ?? t('overviewPage.defaultTitle'))
const resolvedRecentActivity = computed(() => t('overviewPage.recentActivity'))
const resolvedQuickStats = computed(() => t('overviewPage.quickStats'))

const dashboardStats = computed<StatItem[]>(() =>
    props.stats.map((stat) => ({
        title: stat.title,
        value: stat.value,
        description: '',
        change: stat.change,
        trend: stat.trend,
        icon: Activity as Component,
    }))
)

function handleStatsClick(event: MouseEvent) {
    const target = event.target as HTMLElement
    const grid = (event.currentTarget as HTMLElement).querySelector('.grid')
    if (!grid) return
    const cards = Array.from(grid.children)
    for (let i = 0; i < cards.length; i++) {
        if (cards[i].contains(target)) {
            emit('stat-click', i)
            return
        }
    }
}
</script>

<template>
    <div :class="rootClasses">
        <slot name="header">
            <h1 class="text-3xl font-black tracking-tight mb-8">
{{ resolvedTitle }}
</h1>
        </slot>

        <div @click="handleStatsClick">
            <DashboardStats :stats="dashboardStats" />
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            <Card variant="default">
                <CardHeader>
                    <CardTitle>{{ resolvedRecentActivity }}</CardTitle>
                </CardHeader>
                <CardContent>
                    <slot />
                </CardContent>
            </Card>
            <Card variant="default">
                <CardHeader>
                    <CardTitle>{{ resolvedQuickStats }}</CardTitle>
                </CardHeader>
                <CardContent>
                    <div class="space-y-3">
                        <div
                            v-for="(stat, index) in stats"
                            :key="stat.title"
                            class="flex items-center justify-between p-3 bg-brutal-muted border-3 border-brutal shadow-brutal-sm cursor-pointer hover:shadow-brutal-lg hover:-translate-x-0.5 hover:-translate-y-0.5 active:translate-y-[var(--brutal-pressed-offset,2px)] active:shadow-none transition-all"
                            @click="emit('stat-click', index)"
                        >
                            <span class="font-bold text-sm">{{ stat.title }}</span>
                            <span class="font-black">{{ stat.value }}</span>
                        </div>
                    </div>
                </CardContent>
            </Card>
        </div>

        <slot name="footer" />
    </div>
</template>
