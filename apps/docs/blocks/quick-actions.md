---
title: Quick Actions
description: 快捷操作面板，含图标按钮网格和标题徽标。
---

# Quick Actions

新粗野主义风格的快捷操作面板，包含标题徽标和图标按钮网格。

## 预览

<ComponentPreview>
  <QuickActionsDemo />
</ComponentPreview>

## 安装

```bash
npx brutx-vue@latest add --block quick-actions
```

## 用法

```vue
<script setup>
import QuickActions from '@/components/ui/quick-actions/QuickActions.vue'
import { Plus, Upload, Search, Settings } from 'lucide-vue-next'

const actions = [
    { label: 'New Post', icon: Plus, variant: 'primary' },
    { label: 'Upload', icon: Upload, variant: 'secondary' },
    { label: 'Search', icon: Search, variant: 'outline' },
    { label: 'Settings', icon: Settings, variant: 'outline' },
]

function handleAction(index) {
    console.log('Action clicked:', actions[index].label)
}
</script>

<template>
    <QuickActions
        title="快捷操作"
        :actions="actions"
        @action-click="handleAction"
    />
</template>
```

## Props

| 属性 | 类型 | 默认值 |
|------|------|--------|
| `title` | `string` | locale: `quickActions.defaultTitle` |
| `actions` | `ActionItem[]` | `[]` |
| `class` | `string` | — |

### ActionItem 类型

```ts
interface ActionItem {
    label: string
    icon: Component
    variant?: 'primary' | 'secondary' | 'outline' | 'danger'
}
```

## 事件

| 事件 | 载荷 |
|------|------|
| `action-click` | `[index: number]` |

## 布局

QuickActions 包含：
- **标题区**：accent 变体 Badge + 加粗标题
- **操作网格**：2×3 响应式网格，每个按钮含图标和标签
