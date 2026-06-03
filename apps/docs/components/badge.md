---
title: Badge 徽标
description: 徽标组件，用于显示状态、分类标签，提供高对比度的亮色或暗色视觉。
---

# Badge 徽标

新粗野主义风格的行内徽章组件，用于标签、状态和分类。

## 预览

<ComponentPreview>
  <BadgeDemo />
</ComponentPreview>

## 安装

<InstallationTabs componentName="badge" />

## 用法

```vue
<script setup>
import Badge from '@/components/ui/badge/Badge.vue'
</script>

<template>
    <Badge variant="default">Default</Badge>
    <Badge variant="primary">Primary</Badge>
    <Badge variant="success">Success</Badge>
</template>
```

## 变体

| 变体 | 说明 |
|------|------|
| `default` | 背景色，带小阴影 |
| `primary` | Primary（珊瑚色）背景 |
| `secondary` | Secondary（薄荷青）背景 |
| `accent` | Accent（黄色）背景 |
| `danger` | Destructive（红色）背景 |
| `success` | Success（绿色）背景 |
| `outline` | 透明背景，无阴影 |

## 尺寸

| 尺寸 | 内边距 | 字体大小 |
|------|--------|----------|
| `sm` | `px-2 py-0.5` | `text-xs` |
| `default` | `px-3 py-1` | `text-sm` |
| `lg` | `px-4 py-1.5` | `text-base` |

```vue
<script setup>
import Badge from '@/components/ui/badge/Badge.vue'
</script>

<template>
    <Badge variant="primary" size="sm">Small</Badge>
    <Badge variant="primary" size="default">Default</Badge>
    <Badge variant="primary" size="lg">Large</Badge>
</template>
```

## Props

| 属性 | 类型 | 默认值 |
|------|------|--------|
| `variant` | `'default' \| 'primary' \| 'secondary' \| 'accent' \| 'danger' \| 'success' \| 'outline'` | `'default'` |
| `size` | `'sm' \| 'default' \| 'lg'` | `'default'` |
| `class` | `string` | — |
