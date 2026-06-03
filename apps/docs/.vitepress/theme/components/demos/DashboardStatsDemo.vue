<script setup lang="ts">
import { DashboardStats } from 'brutx-ui-vue'
import { DollarSign } from 'lucide-vue-next'
import type { StatItem } from 'brutx-ui-vue'

const stats: StatItem[] = [
    {
        title: 'Revenue',
        value: '$45,231',
        description: 'from last month',
        change: '+20.1%',
        trend: 'up',
        icon: DollarSign,
        accentColor: 'success',
    },
]
</script>

<template>
    <DashboardStats :stats="stats" />
</template>
