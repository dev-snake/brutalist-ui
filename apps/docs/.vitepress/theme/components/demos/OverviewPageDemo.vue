<script setup lang="ts">
import { OverviewPage } from 'brutx-ui-vue'
import type { OverviewStat } from 'brutx-ui-vue'

const stats: OverviewStat[] = [
    { title: '总收入', value: '¥128,430', change: '+12.5%', trend: 'up' },
    { title: '活跃用户', value: '2,840', change: '+8.2%', trend: 'up' },
    { title: '转化率', value: '3.6%', change: '-0.4%', trend: 'down' },
    { title: '跳出率', value: '24.1%', change: '+0.1%', trend: 'neutral' },
]
</script>

<template>
    <div class="w-full overflow-x-auto">
        <OverviewPage :stats="stats" />
    </div>
</template>
