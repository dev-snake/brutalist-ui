<script setup lang="ts">
import { ChartSection } from 'brutx-ui-vue'
import type { ChartDataPoint } from 'brutx-ui-vue'

const data: ChartDataPoint[] = [
    { label: '一月', value: 65 },
    { label: '二月', value: 42 },
    { label: '三月', value: 88 },
    { label: '四月', value: 73 },
    { label: '五月', value: 56 },
    { label: '六月', value: 95 },
]
</script>

<template>
    <ChartSection :data="data" chart-type="bar" />
</template>
