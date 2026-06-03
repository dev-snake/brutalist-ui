---
title: Loading Page
description: 全页加载状态区块，带有旋转指示器、骨架屏装饰和可选进度条。
---

# Loading Page

新粗野主义风格的全页加载状态，包含 Spinner 旋转指示器、Skeleton 装饰元素和可选的 Progress 进度条。

## 预览

<ComponentPreview>
  <LoadingPageDemo />
</ComponentPreview>

## 安装

```bash
npx brutx-vue@latest add --block loading-page
```

## 用法

```vue
<script setup>
import LoadingPage from '@/components/ui/loading-page/LoadingPage.vue'
</script>

<template>
    <LoadingPage
        title="加载中"
        description="请稍候，内容正在加载..."
    />
</template>
```

## 带进度条

```vue
<script setup>
import LoadingPage from '@/components/ui/loading-page/LoadingPage.vue'
import { ref } from 'vue'

const progress = ref(65)
</script>

<template>
    <LoadingPage
        :progress="progress"
    />
</template>
```

## Props

| 属性 | 类型 | 默认值 |
|------|------|--------|
| `title` | `string` | locale: `loadingPage.defaultTitle` |
| `description` | `string` | locale: `loadingPage.defaultDescription` |
| `progress` | `number` | — |
| `class` | `string` | — |

## Slots

| Slot | 用途 |
|------|------|
| `header` | 替换/扩展区块头部 |
| `default` | 替换区块主体内容 |
| `footer` | 替换/扩展区块底部 |

## 布局

LoadingPage 包含：
- **Skeleton 装饰**：强调色和辅助色骨架屏方块，偏移定位
- **Spinner**：大号旋转加载指示器
- **标题**：加粗、字距调整的标题文本
- **描述**：弱化文本描述
- **进度条**（可选）：当传入 `progress` 时显示 Progress 组件
