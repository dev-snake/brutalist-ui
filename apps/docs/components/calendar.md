---
title: Calendar 日历
description: 日历组件，支持日期选择、标记，结合新粗野主义边框与硬质阴影设计。
---

# Calendar 日历

新粗野主义风格的日历组件，基于 v-calendar 构建，支持单日期和日期范围选择。

## 预览

<ComponentPreview>
  <ClientOnly>
    <CalendarDemo />
  </ClientOnly>
</ComponentPreview>

## 安装

<InstallationTabs componentName="calendar" />

**需要额外安装依赖：**

```bash
pnpm add v-calendar
```

## 用法

### 单日期选择

```vue
<script setup>
import { ref } from 'vue'
import Calendar from '@/components/ui/calendar/Calendar.vue'

const date = ref(null)
</script>

<template>
    <Calendar v-model="date" />
</template>
```

### 日期范围选择

```vue
<script setup>
import { ref } from 'vue'
import Calendar from '@/components/ui/calendar/Calendar.vue'

const dateRange = ref(null)
</script>

<template>
    <Calendar v-model="dateRange" :is-range="true" />
</template>
```

## Props

| 属性 | 类型 | 默认值 |
|------|------|--------|
| `modelValue` | `Date \| Date[] \| null` | — |
| `isRange` | `boolean` | `false` |
| `disabled` | `boolean` | `false` |
| `class` | `string` | — |

## 事件

| 事件 | 载荷 |
|------|------|
| `update:modelValue` | `Date \| Date[] \| null` |

## 样式

Calendar 组件对所有日期单元格使用新粗野主义样式：

- **选中日期**：Primary 背景色，带边框和阴影
- **范围日期**：范围内使用 Accent 背景色，起止日期使用 Secondary 背景色
- **今天**：Secondary 背景色，带边框
- **非当月日期**：柔和前景色，降低透明度
- **禁用状态**：降低透明度，显示禁止光标
