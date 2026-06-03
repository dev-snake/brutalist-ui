<script setup lang="ts">
import { computed, ref } from 'vue'
import { TabsRoot } from 'reka-ui'
import { BarChart3, TrendingUp, PieChart } from 'lucide-vue-next'
import { useLocale } from '@/composables/useLocale'
import { cn } from '../../lib/utils'
import SketchyChart from '../sketchy-chart/SketchyChart.vue'
import Card from '../card/Card.vue'
import TabsList from '../tabs/TabsList.vue'
import TabsTrigger from '../tabs/TabsTrigger.vue'
import TabsContent from '../tabs/TabsContent.vue'

export interface ChartDataPoint {
    label: string
    value: number
}

interface ChartSectionProps {
    title?: string
    subtitle?: string
    chartType?: 'bar' | 'line' | 'pie'
    data?: ChartDataPoint[]
    class?: string
}

const props = withDefaults(defineProps<ChartSectionProps>(), {
    title: undefined,
    subtitle: undefined,
    chartType: 'bar',
    data: () => [],
    class: '',
})

const { t } = useLocale()

const resolvedTitle = computed(() => props.title ?? t('chartSection.defaultTitle'))
const resolvedSubtitle = computed(() => props.subtitle ?? t('chartSection.defaultSubtitle'))
const resolvedBar = computed(() => t('chartSection.bar'))
const resolvedLine = computed(() => t('chartSection.line'))
const resolvedPie = computed(() => t('chartSection.pie'))

const activeTab = ref<string>(props.chartType === 'pie' ? 'bar' : props.chartType)

const rootClasses = computed(() => cn('w-full max-w-4xl mx-auto', props.class))
</script>

<template>
    <div :class="rootClasses">
        <slot name="header">
            <div class="mb-6">
                <h2 class="text-3xl font-black tracking-tight">
                    {{ resolvedTitle }}
                </h2>
                <p v-if="resolvedSubtitle" class="mt-2 text-brutal-muted-foreground font-medium">
                    {{ resolvedSubtitle }}
                </p>
            </div>
        </slot>

        <slot>
            <TabsRoot v-model="activeTab" :default-value="chartType">
                <TabsList class="w-full">
                    <TabsTrigger value="bar">
                        <BarChart3 class="w-4 h-4 mr-2" />
                        {{ resolvedBar }}
                    </TabsTrigger>
                    <TabsTrigger value="line">
                        <TrendingUp class="w-4 h-4 mr-2" />
                        {{ resolvedLine }}
                    </TabsTrigger>
                    <TabsTrigger value="pie">
                        <PieChart class="w-4 h-4 mr-2" />
                        {{ resolvedPie }}
                    </TabsTrigger>
                </TabsList>

                <TabsContent value="bar">
                    <Card variant="flat" class="p-4">
                        <SketchyChart
                            type="bar"
                            :data="data"
                        />
                    </Card>
                </TabsContent>

                <TabsContent value="line">
                    <Card variant="flat" class="p-4">
                        <SketchyChart
                            type="line"
                            :data="data"
                        />
                    </Card>
                </TabsContent>

                <TabsContent value="pie">
                    <Card variant="flat" class="p-4">
                        <SketchyChart
                            type="pie"
                            :data="data"
                        />
                    </Card>
                </TabsContent>
            </TabsRoot>
        </slot>

        <slot name="footer" />
    </div>
</template>
