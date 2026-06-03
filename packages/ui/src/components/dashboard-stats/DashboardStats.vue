<script setup lang="ts">
import { computed, type Component } from 'vue'
import { ArrowUpRight, ArrowDownRight } from 'lucide-vue-next'
import { cn } from '../../lib/utils'
import Card from '../card/Card.vue'
import CardHeader from '../card/CardHeader.vue'
import CardContent from '../card/CardContent.vue'
import CardDescription from '../card/CardDescription.vue'
import Badge from '../badge/Badge.vue'

type AccentColorKey = 'primary' | 'secondary' | 'accent' | 'destructive' | 'success' | 'info'

const ACCENT_COLOR_MAP: Record<AccentColorKey, string> = {
    primary: 'bg-brutal-primary',
    secondary: 'bg-brutal-secondary',
    accent: 'bg-brutal-accent',
    destructive: 'bg-brutal-destructive',
    success: 'bg-brutal-success',
    info: 'bg-brutal-info',
}

export interface StatItem {
    title: string
    value: string
    description: string
    change: string
    trend: 'up' | 'down' | 'neutral'
    icon: Component
    accentColor?: AccentColorKey
    progress?: number
}

interface DashboardStatsProps {
    stats?: StatItem[]
    title?: string
    subtitle?: string
    class?: string
}

const props = withDefaults(defineProps<DashboardStatsProps>(), {
    title: 'Overview Performance',
    subtitle: '',
    stats: () => [],
    class: '',
})

const emit = defineEmits<{
    'stat-click': [index: number]
}>()

const rootClasses = computed(() => cn('w-full max-w-5xl mx-auto', props.class))

function getIconClasses(stat: StatItem) {
    return cn(
        'h-8 w-8 flex items-center justify-center border-3 border-brutal',
        stat.accentColor ? ACCENT_COLOR_MAP[stat.accentColor] : 'bg-brutal-primary'
    )
}

function getTrendIconClasses(stat: StatItem) {
    return cn(
        'h-4 w-4 stroke-[3]',
        stat.trend === 'up' ? 'text-brutal-success' : 'text-brutal-destructive'
    )
}

function getProgressClasses(stat: StatItem) {
    return cn(
        'h-full transition-all',
        stat.accentColor ? ACCENT_COLOR_MAP[stat.accentColor] : 'bg-brutal-primary'
    )
}
</script>

<template>
    <div :class="rootClasses">
        <div class="mb-8">
            <h2 class="text-2xl font-black tracking-tight">
{{ title }}
</h2>
            <p v-if="subtitle" class="mt-1 text-brutal-muted-foreground font-medium">
{{ subtitle }}
</p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card v-for="(stat, index) in stats" :key="stat.title" variant="default" class="cursor-pointer" @click="emit('stat-click', index)">
                <CardHeader class="pb-2">
                    <div class="flex items-center justify-between">
                        <CardDescription>{{ stat.title }}</CardDescription>
                        <div :class="getIconClasses(stat)">
                            <component :is="stat.icon" class="h-4 w-4 stroke-[3]" />
                        </div>
                    </div>
                </CardHeader>
                <CardContent>
                    <div class="text-2xl font-black">
{{ stat.value }}
</div>
                    <div class="flex items-center gap-2 mt-1">
                        <component :is="stat.trend === 'up' ? ArrowUpRight : ArrowDownRight" :class="getTrendIconClasses(stat)" />
                        <Badge :variant="stat.trend === 'up' ? 'success' : stat.trend === 'down' ? 'danger' : 'default'" size="sm">
{{ stat.change }}
</Badge>
                    </div>
                    <p class="text-xs text-brutal-muted-foreground mt-1 font-medium">
{{ stat.description }}
</p>
                    <div v-if="stat.progress !== undefined" class="mt-3 h-2 bg-brutal-muted border-3 border-brutal overflow-hidden">
                        <div :class="getProgressClasses(stat)" :style="{ width: `${stat.progress}%` }" />
                    </div>
                </CardContent>
            </Card>
        </div>
    </div>
</template>
