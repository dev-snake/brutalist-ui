<script setup lang="ts">
import { computed, useId } from 'vue'
import { cn } from '../../lib/utils'
import { useLocale } from '@/composables/useLocale'
import { sketchyChartVariants } from './sketchy-chart-variants'

interface ChartDataItem {
    label: string
    value: number
}

interface SketchyChartProps {
    type?: 'line' | 'bar' | 'pie'
    data?: ChartDataItem[]
    sketchiness?: number
    grid?: boolean
    width?: number
    height?: number
    class?: string
}

const props = withDefaults(defineProps<SketchyChartProps>(), {
    type: 'line',
    data: () => [],
    sketchiness: 2,
    grid: true,
    width: 600,
    height: 400,
    class: '',
})

// 回退版唯一 ID 保证兼容性
const getUniqueId = () => {
    try {
        const id = useId()
        return id.replace(/:/g, '-') // 去除 ID 中可能的冒号
    } catch {
        return Math.random().toString(36).substring(2, 9)
    }
}

const uid = getUniqueId()
const filterId = `brutal-sketch-filter-${uid}`
const hatchId = `hatch-pattern-${uid}`
const { t } = useLocale()

const chartAriaLabel = computed(() => {
    if (props.type === 'line') return t('sketchyChart.lineAriaLabel')
    if (props.type === 'bar') return t('sketchyChart.barAriaLabel')
    return t('sketchyChart.pieAriaLabel')
})

// 手绘抖动强度对应的基准频率
const BASE_FREQUENCY_FACTOR = 0.015
const baseFrequency = computed(() =>
    (props.sketchiness * BASE_FREQUENCY_FACTOR).toFixed(3)
)

// 数据预处理（空数组、大容量降采样、负数取绝对值）
const processedData = computed(() => {
    if (!props.data || props.data.length === 0) return []
    
    // 负数取绝对值
    let items = props.data.map(d => ({
        label: d.label,
        value: Math.abs(d.value)
    }))

    // 大容量降采样（超过 30 项，隔项采样以防重叠）
    if (items.length > 30) {
        const step = Math.ceil(items.length / 30)
        items = items.filter((_, idx) => idx % step === 0)
    }

    return items
})

const CHART_PADDING = { top: 30, right: 30, bottom: 40, left: 60 }

const plotWidth = computed(() => props.width - CHART_PADDING.left - CHART_PADDING.right)
const plotHeight = computed(() => props.height - CHART_PADDING.top - CHART_PADDING.bottom)

const maxValue = computed(() => {
    if (processedData.value.length === 0) return 100
    const max = Math.max(...processedData.value.map(d => d.value))
    return max === 0 ? 100 : max
})

// 坐标映射
const dataToSvgX = (index: number) => {
    if (processedData.value.length <= 1) return CHART_PADDING.left + plotWidth.value / 2
    return CHART_PADDING.left + (index / (processedData.value.length - 1)) * plotWidth.value
}

const dataToSvgY = (value: number) => {
    return CHART_PADDING.top + plotHeight.value - (value / maxValue.value) * plotHeight.value
}

// 折线图 Paths
const linePath = computed(() => {
    if (processedData.value.length === 0) return ''
    return processedData.value
        .map((d, i) => `${i === 0 ? 'M' : 'L'} ${dataToSvgX(i)} ${dataToSvgY(d.value)}`)
        .join(' ')
})

// 折线图填充区域（Neobrutalist 阴影面效果）
const lineAreaPath = computed(() => {
    if (processedData.value.length === 0) return ''
    const startX = dataToSvgX(0)
    const endX = dataToSvgX(processedData.value.length - 1)
    const bottomY = CHART_PADDING.top + plotHeight.value
    return `${linePath.value} L ${endX} ${bottomY} L ${startX} ${bottomY} Z`
})

// 柱状图各 Column 算定
const BAR_GAP_RATIO = 0.25
const barWidth = computed(() => {
    const totalBars = processedData.value.length
    if (totalBars === 0) return 0
    return (plotWidth.value / totalBars) * (1 - BAR_GAP_RATIO)
})

const getBarX = (index: number) => {
    const totalBars = processedData.value.length
    const slotWidth = plotWidth.value / totalBars
    return CHART_PADDING.left + index * slotWidth + (slotWidth - barWidth.value) / 2
}

// 饼图计算
const PIE_COLORS = [
    'var(--brutal-primary, #FF6B6B)',
    'var(--brutal-secondary, #4ECDC4)',
    'var(--brutal-accent, #FFE66D)',
    'var(--brutal-info, #4A90D9)',
    'var(--brutal-success, #7FB069)',
    'var(--brutal-destructive, #EF476F)',
]

const pieSlices = computed(() => {
    if (processedData.value.length === 0) return []
    const total = processedData.value.reduce((sum, d) => sum + d.value, 0)
    if (total === 0) return []
    const cx = props.width / 2
    const cy = props.height / 2
    const radius = Math.min(cx, cy) * 0.7
    let currentAngle = -Math.PI / 2
    return processedData.value.map((d, i) => {
        const sliceAngle = (d.value / total) * Math.PI * 2
        const startAngle = currentAngle
        const endAngle = currentAngle + sliceAngle
        const largeArc = sliceAngle > Math.PI ? 1 : 0
        const x1 = cx + radius * Math.cos(startAngle)
        const y1 = cy + radius * Math.sin(startAngle)
        const x2 = cx + radius * Math.cos(endAngle)
        const y2 = cy + radius * Math.sin(endAngle)
        const path = [
            `M ${cx} ${cy}`,
            `L ${x1} ${y1}`,
            `A ${radius} ${radius} 0 ${largeArc} 1 ${x2} ${y2}`,
            'Z',
        ].join(' ')
        currentAngle = endAngle
        return {
            path,
            color: PIE_COLORS[i % PIE_COLORS.length],
            label: d.label,
            midAngle: (startAngle + endAngle) / 2,
            cx,
            cy,
            labelRadius: radius * 0.55,
        }
    })
})

// 自动生成 Y 轴 5 等分刻度
const yTicks = computed(() => {
    const ticks = []
    const step = maxValue.value / 4
    for (let i = 0; i <= 4; i++) {
        const val = Math.round(step * i)
        ticks.push({
            value: val,
            y: dataToSvgY(val)
        })
    }
    return ticks
})

const containerClasses = computed(() =>
    cn(sketchyChartVariants(), props.class)
)
</script>

<template>
    <div :class="containerClasses">
        <svg
            role="img"
            :aria-label="chartAriaLabel"
            :viewBox="`0 0 ${width} ${height}`"
            class="w-full h-auto overflow-visible select-none"
        >
            <title>{{ chartAriaLabel }}</title>
            
            <defs>
                <!-- 手绘波动滤镜 -->
                <filter :id="filterId">
                    <feTurbulence
                        type="fractalNoise"
                        :baseFrequency="baseFrequency"
                        numOctaves="3"
                        result="noise"
                    />
                    <feDisplacementMap
                        in="SourceGraphic"
                        in2="noise"
                        :scale="sketchiness"
                        xChannelSelector="R"
                        yChannelSelector="G"
                    />
                </filter>
                
                <!-- 斜向条纹 Hatch Fill -->
                <pattern
                    :id="hatchId"
                    patternUnits="userSpaceOnUse"
                    width="10"
                    height="10"
                    patternTransform="rotate(45)"
                >
                    <line
                        x1="0"
                        y1="0"
                        x2="0"
                        y2="10"
                        stroke="var(--brutal-border-color, #000000)"
                        stroke-width="2"
                    />
                </pattern>
            </defs>

            <!-- 背景网格线 -->
            <g v-if="grid" class="chart-grid">
                <line
                    v-for="tick in yTicks"
                    :key="'grid-' + tick.value"
                    :x1="CHART_PADDING.left"
                    :y1="tick.y"
                    :x2="width - CHART_PADDING.right"
                    :y2="tick.y"
                    stroke="var(--brutal-muted, #f3f4f6)"
                    stroke-width="1.5"
                    stroke-dasharray="4 4"
                />
            </g>

            <!-- 坐标轴 -->
            <g :filter="`url(#${filterId})`" class="chart-axes">
                <!-- Y 轴 -->
                <line
                    :x1="CHART_PADDING.left"
                    :y1="CHART_PADDING.top"
                    :x2="CHART_PADDING.left"
                    :y2="height - CHART_PADDING.bottom"
                    stroke="var(--brutal-border-color, #000000)"
                    stroke-width="3"
                />
                <!-- X 轴 -->
                <line
                    :x1="CHART_PADDING.left"
                    :y1="height - CHART_PADDING.bottom"
                    :x2="width - CHART_PADDING.right"
                    :y2="height - CHART_PADDING.bottom"
                    stroke="var(--brutal-border-color, #000000)"
                    stroke-width="3"
                />
            </g>

            <!-- 数据图形展示 -->
            <g :filter="`url(#${filterId})`" class="chart-data">
                <!-- 1. 折线图 -->
                <template v-if="type === 'line' && processedData.length > 0">
                    <!-- 阴影填充区 -->
                    <path
                        :d="lineAreaPath"
                        :fill="`url(#${hatchId})`"
                        class="opacity-60"
                    />
                    <!-- 核心折线 -->
                    <path
                        :d="linePath"
                        fill="none"
                        stroke="var(--brutal-primary, #FF6B6B)"
                        stroke-width="4"
                    />
                    <!-- 折线拐点圆圈（Brutalist 粗黑边圆圈） -->
                    <circle
                        v-for="(d, i) in processedData"
                        :key="'dot-' + i"
                        :cx="dataToSvgX(i)"
                        :cy="dataToSvgY(d.value)"
                        r="6"
                        fill="var(--brutal-accent, #FFE66D)"
                        stroke="var(--brutal-border-color, #000000)"
                        stroke-width="2.5"
                    />
                </template>

                <!-- 2. 柱状图 -->
                <template v-if="type === 'bar' && processedData.length > 0">
                    <g v-for="(d, i) in processedData" :key="'bar-' + i">
                        <!-- 柱体硬影子（Neobrutalist 偏移底色块） -->
                        <rect
                            :x="getBarX(i) + 4"
                            :y="dataToSvgY(d.value) + 4"
                            :width="barWidth"
                            :height="height - CHART_PADDING.bottom - dataToSvgY(d.value)"
                            fill="var(--brutal-border-color, #000000)"
                        />
                        <!-- 柱体本体（Hatch 填充 + 粗黑边框） -->
                        <rect
                            :x="getBarX(i)"
                            :y="dataToSvgY(d.value)"
                            :width="barWidth"
                            :height="height - CHART_PADDING.bottom - dataToSvgY(d.value)"
                            :fill="`url(#${hatchId})`"
                            stroke="var(--brutal-border-color, #000000)"
                            stroke-width="3"
                        />
                    </g>
                </template>

                <!-- 3. 饼图 -->
                <template v-if="type === 'pie' && pieSlices.length > 0">
                    <g v-for="(slice, i) in pieSlices" :key="'pie-' + i">
                        <path
                            :d="slice.path"
                            :fill="slice.color"
                            stroke="var(--brutal-border-color, #000000)"
                            stroke-width="3"
                        />
                    </g>
                </template>
            </g>

            <!-- 坐标轴文本与刻度标签 -->
            <g class="chart-labels" fill="var(--brutal-fg, #000000)" font-size="12" font-weight="bold">
                <!-- Y 轴刻度标签 -->
                <text
                    v-for="tick in yTicks"
                    :key="'lbl-y-' + tick.value"
                    :x="CHART_PADDING.left - 12"
                    :y="tick.y + 4"
                    text-anchor="end"
                >
                    {{ tick.value }}
                </text>

                <!-- X 轴刻度标签 -->
                <text
                    v-for="(d, i) in processedData"
                    :key="'lbl-x-' + i"
                    :x="type === 'line' ? dataToSvgX(i) : getBarX(i) + barWidth / 2"
                    :y="height - CHART_PADDING.bottom + 20"
                    text-anchor="middle"
                >
                    {{ d.label }}
                </text>
            </g>
        </svg>
    </div>
</template>
