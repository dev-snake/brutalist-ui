---
title: Empty State
description: 数据空状态占位区块，带有大图标、副标题和主操作按钮。
---

# Empty State

新粗野主义风格的空状态占位符，包含装饰性图标、标题、描述和操作按钮。

## 预览

<ComponentPreview>
  <EmptyStateDemo />
</ComponentPreview>

## 安装

```bash
npx brutx-vue@latest add --block empty-state
```

## 用法

```vue
<script setup>
import EmptyState from '@/components/ui/empty-state/EmptyState.vue'
import { Server } from 'lucide-vue-next'

function handleAction() {
    console.log('Action clicked')
}
</script>

<template>
    <EmptyState
        title="No active deployments found"
        description="Get started by deploying your first application to the cloud."
        action-text="Deploy New App"
        :icon="Server"
        @action="handleAction"
    />
</template>
```

## 自定义图标

```vue
<script setup>
import EmptyState from '@/components/ui/empty-state/EmptyState.vue'
import { Inbox } from 'lucide-vue-next'
</script>

<template>
    <EmptyState
        title="No messages yet"
        description="Your inbox is empty. Start a conversation."
        action-text="New Message"
        :icon="Inbox"
    />
</template>
```

## Props

| 属性 | 类型 | 默认值 |
|------|------|--------|
| `title` | `string` | locale: `emptyState.defaultTitle` |
| `description` | `string` | — |
| `actionText` | `string` | locale: `emptyState.defaultActionText` |
| `icon` | `Component` | `FolderOpen`（来自 lucide-vue-next） |
| `class` | `string` | — |

## 事件

| 事件 | 载荷 |
|------|------|
| `action` | `[]` |

## 布局

EmptyState 包含：
- **装饰性图标**：强调色方框，带有偏移阴影背景
- **标题**：加粗、字距调整的标题
- **描述**：标题下方的弱化文本
- **操作按钮**：primary 变体按钮（仅在提供了 `actionText` 时显示）
