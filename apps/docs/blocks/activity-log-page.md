---
title: Activity Log Page
description: 带有表格、类型徽标和分页的活动日志页面区块。
---

# Activity Log Page

新粗野主义风格的活动日志页面，包含表格视图、类型徽标和分页组件。

## 预览

<ComponentPreview>
  <ActivityLogPageDemo />
</ComponentPreview>

## 安装

```bash
npx brutx-vue@latest add --block activity-log-page
```

## 用法

```vue
<script setup>
import ActivityLogPage from '@/components/ui/activity-log-page/ActivityLogPage.vue'

const activities = [
    {
        id: '1',
        action: 'User Login',
        user: 'admin',
        timestamp: '2024-01-15 10:00',
        type: 'info',
    },
    {
        id: '2',
        action: 'Config Update',
        user: 'system',
        timestamp: '2024-01-15 09:30',
        details: 'Rate limit changed',
        type: 'warning',
    },
    {
        id: '3',
        action: 'Deploy Failed',
        user: 'ci-bot',
        timestamp: '2024-01-15 09:00',
        details: 'Build timeout',
        type: 'error',
    },
]

function handleEntryClick(id) {
    console.log('Entry clicked:', id)
}
</script>

<template>
    <ActivityLogPage
        :activities="activities"
        @entry-click="handleEntryClick"
    />
</template>
```

## Props

| 属性 | 类型 | 默认值 |
|------|------|--------|
| `title` | `string` | locale: `activityLogPage.defaultTitle` |
| `activities` | `ActivityEntry[]` | `[]` |
| `class` | `string` | — |

### ActivityEntry 接口

| 字段 | 类型 | 说明 |
|------|------|------|
| `id` | `string` | 条目唯一标识 |
| `action` | `string` | 操作描述 |
| `user` | `string` | 执行者 |
| `timestamp` | `string` | 时间戳 |
| `details` | `string` | 可选详情 |
| `type` | `'info' \| 'warning' \| 'error' \| 'success'` | 条目类型（默认 `'info'`） |

## 事件

| 事件 | 载荷 |
|------|------|
| `entry-click` | `[id: string]` |

## 插槽

| 插槽 | 说明 |
|------|------|
| `header` | 自定义页面标题区域 |
| `default` | 自定义主内容区域（替换表格和分页） |
| `footer` | 页面底部内容 |

## 布局

ActivityLogPage 包含：
- **标题**：加粗页面标题，可通过 `header` 插槽自定义
- **表格**：四列表格（操作、用户、时间戳、详情），操作列包含类型徽标
- **类型徽标映射**：`info` → default、`warning` → accent、`error` → danger、`success` → success
- **分页**：每页 10 条，自动显示分页控件
