---
title: Skeleton 骨架屏
description: 骨架屏占位组件，支持圆形、文本行、卡片等多种布局预览。
---

# Skeleton 骨架屏

新粗野主义风格的骨架屏加载组件，提供子组件用于常见加载模式。

## 预览

<ComponentPreview>
  <SkeletonDemo />
</ComponentPreview>

## 安装

<InstallationTabs componentName="skeleton" />

## 用法

### 基础骨架屏

```vue
<script setup>
import Skeleton from '@/components/ui/skeleton/Skeleton.vue'
</script>

<template>
    <Skeleton class="h-12 w-12" />
</template>
```

### SkeletonText

```vue
<script setup>
import SkeletonText from '@/components/ui/skeleton/SkeletonText.vue'
</script>

<template>
    <SkeletonText :lines="3" />
</template>
```

### SkeletonAvatar

```vue
<script setup>
import SkeletonAvatar from '@/components/ui/skeleton/SkeletonAvatar.vue'
</script>

<template>
    <SkeletonAvatar size="default" />
</template>
```

### SkeletonCard

```vue
<script setup>
import SkeletonCard from '@/components/ui/skeleton/SkeletonCard.vue'
</script>

<template>
    <SkeletonCard />
</template>
```

### SkeletonTable

```vue
<script setup>
import SkeletonTable from '@/components/ui/skeleton/SkeletonTable.vue'
</script>

<template>
    <SkeletonTable :rows="5" :columns="4" />
</template>
```

## 变体

| 变体 | 说明 |
|------|------|
| `default` | 灰色背景 |
| `primary` | 主色，30% 不透明度 |
| `secondary` | 辅助色，30% 不透明度 |
| `accent` | 强调色，30% 不透明度 |

## 子组件

| 组件 | 说明 |
|------|------|
| `Skeleton` | 基础骨架块 |
| `SkeletonText` | 多行骨架文本 |
| `SkeletonAvatar` | 圆形/方形头像占位符 |
| `SkeletonCard` | 完整卡片骨架，包含头部、内容、底部 |
| `SkeletonTable` | 表格骨架，包含行和列 |

## 属性

### Skeleton

| 属性 | 类型 | 默认值 |
|------|------|--------|
| `variant` | `'default' \| 'primary' \| 'secondary' \| 'accent'` | `'default'` |
| `class` | `string` | — |

### SkeletonText

| 属性 | 类型 | 默认值 |
|------|------|--------|
| `lines` | `number` | `3` |
| `class` | `string` | — |

### SkeletonAvatar

| 属性 | 类型 | 默认值 |
|------|------|--------|
| `size` | `'sm' \| 'default' \| 'lg'` | `'default'` |
| `class` | `string` | — |

### SkeletonTable

| 属性 | 类型 | 默认值 |
|------|------|--------|
| `rows` | `number` | `5` |
| `columns` | `number` | `4` |
| `class` | `string` | — |
