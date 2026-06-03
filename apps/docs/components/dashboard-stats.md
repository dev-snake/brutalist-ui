---
title: Dashboard Stats 仪表盘统计
description: 仪表盘统计卡片，以大号数字、对比标签展示核心业务指标数据。
---

# Dashboard Stats 仪表盘统计

新粗野主义风格的仪表盘统计块，用于展示关键指标，支持趋势、图标和进度条。

## 预览

<ComponentPreview>
  <DashboardStatsDemo />
</ComponentPreview>

## 安装

<InstallationTabs componentName="dashboard-stats" />

## 用法

```vue
<script setup>
import DashboardStats from '@/components/ui/dashboard-stats/DashboardStats.vue'
import { DollarSign, Users, Activity } from 'lucide-vue-next'

const stats = [
    {
        title: 'Revenue',
        value: '$45,231',
        description: 'Total revenue this month',
        change: '+20.1%',
        trend: 'up',
        icon: DollarSign,
        accentColor: 'primary',
        progress: 75,
    },
    {
        title: 'Users',
        value: '+2,350',
        description: 'New users this month',
        change: '+12.5%',
        trend: 'up',
        icon: Users,
        accentColor: 'secondary',
        progress: 60,
    },
    {
        title: 'Bounce Rate',
        value: '12.3%',
        description: 'Visitor bounce rate',
        change: '-2.1%',
        trend: 'down',
        icon: Activity,
        accentColor: 'destructive',
    },
]
</script>

<template>
    <DashboardStats
        title="Overview Performance"
        subtitle="Key metrics for this month"
        :stats="stats"
    />
</template>
```

## StatItem 类型

```ts
interface StatItem {
    title: string
    value: string
    description: string
    change: string
    trend: 'up' | 'down' | 'neutral'
    icon: Component
    accentColor?: 'primary' | 'secondary' | 'accent' | 'destructive' | 'success' | 'info'
    progress?: number
}
```

## Props

| 属性 | 类型 | 默认值 |
|------|------|--------|
| `stats` | `StatItem[]` | `[]` |
| `title` | `string` | `'Overview Performance'` |
| `subtitle` | `string` | — |
| `class` | `string` | — |

## 强调色

每个统计项的 `accentColor` 属性控制图标背景和进度条颜色：

| 值 | 颜色 |
|----|------|
| `primary` | 珊瑚色（`--brutal-primary`） |
| `secondary` | 薄荷青（`--brutal-secondary`） |
| `accent` | 黄色（`--brutal-accent`） |
| `destructive` | 红色（`--brutal-destructive`） |
| `success` | 绿色（`--brutal-success`） |
| `info` | 蓝色（`--brutal-info`） |
