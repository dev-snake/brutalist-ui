---
title: Error Card
description: 错误状态卡片区块，带有警告提示、重试和关闭按钮。
---

# Error Card

新粗野主义风格的错误卡片，包含 Alert 危险提示、标题、描述以及重试/关闭操作按钮。

## 预览

<ComponentPreview>
  <ErrorCardDemo />
</ComponentPreview>

## 安装

```bash
npx brutx-vue@latest add --block error-card
```

## 用法

```vue
<script setup>
import ErrorCard from '@/components/ui/error-card/ErrorCard.vue'

function handleRetry() {
    console.log('Retry clicked')
}

function handleDismiss() {
    console.log('Dismiss clicked')
}
</script>

<template>
    <ErrorCard
        title="Something went wrong"
        description="An unexpected error occurred. Please try again."
        retry-text="Retry"
        @retry="handleRetry"
        @dismiss="handleDismiss"
    />
</template>
```

## 自定义文本

```vue
<script setup>
import ErrorCard from '@/components/ui/error-card/ErrorCard.vue'
</script>

<template>
    <ErrorCard
        title="Upload Failed"
        description="Your file could not be uploaded. Check the format and try again."
        retry-text="Re-upload"
        @retry="retryUpload"
        @dismiss="cancelUpload"
    />
</template>
```

## Props

| 属性 | 类型 | 默认值 |
|------|------|--------|
| `title` | `string` | locale: `errorCard.defaultTitle` |
| `description` | `string` | locale: `errorCard.defaultDescription` |
| `retryText` | `string` | locale: `errorCard.defaultRetryText` |
| `class` | `string` | — |

## 事件

| 事件 | 载荷 |
|------|------|
| `retry` | `[]` |
| `dismiss` | `[]` |

## Slots

| Slot | 用途 |
|------|------|
| `actions` | 额外操作按钮区域 |

## 布局

ErrorCard 包含：
- **Alert 危险提示**：带有 AlertTriangle 图标的 danger 变体 Alert，显示标题和描述
- **操作区域**：关闭（ghost 变体）和重试（primary 变体）按钮
- **扩展插槽**：`actions` slot 用于添加自定义操作按钮
