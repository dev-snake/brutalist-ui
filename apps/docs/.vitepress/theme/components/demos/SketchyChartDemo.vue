<script setup lang="ts">
import { SketchyChart } from 'brutx-ui-vue'

const lineData = [
    { label: 'Jan', value: 30 },
    { label: 'Feb', value: 65 },
    { label: 'Mar', value: 45 },
    { label: 'Apr', value: 80 },
    { label: 'May', value: 55 },
    { label: 'Jun', value: 90 },
]

const barData = [
    { label: 'Vue', value: 85 },
    { label: 'React', value: 72 },
    { label: 'Svelte', value: 60 },
    { label: 'Angular', value: 48 },
]
</script>

<template>
    <div class="flex flex-col gap-8">
        <div>
            <p class="text-sm font-bold mb-2">折线图</p>
            <SketchyChart type="line" :data="lineData" />
        </div>

        <div>
            <p class="text-sm font-bold mb-2">柱状图</p>
            <SketchyChart type="bar" :data="barData" />
        </div>

        <div>
            <p class="text-sm font-bold mb-2">高抖动幅度 (sketchiness=8)</p>
            <SketchyChart type="line" :data="lineData" :sketchiness="8" />
        </div>
    </div>
</template>
