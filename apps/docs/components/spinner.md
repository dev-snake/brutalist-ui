---
title: Spinner 加载指示器
description: 加载指示器组件，提供旋转点、旋转线等多种经典粗野主义加载动画。
---

# Spinner 加载指示器

新粗野主义风格加载旋转器，提供 4 种视觉变体：标准、方块、圆点和条形。

## 预览

<ComponentPreview>
  <SpinnerDemo />
</ComponentPreview>

## 安装

<InstallationTabs componentName="spinner" />

## 用法

### Spinner（标准）

```vue
<script setup>
import Spinner from '@/components/ui/spinner/Spinner.vue'
</script>

<template>
    <Spinner size="default" variant="default" />
</template>
```

### BlockSpinner

```vue
<script setup>
import BlockSpinner from '@/components/ui/spinner/BlockSpinner.vue'
</script>

<template>
    <BlockSpinner size="default" />
</template>
```

### DotsSpinner

```vue
<script setup>
import DotsSpinner from '@/components/ui/spinner/DotsSpinner.vue'
</script>

<template>
    <DotsSpinner size="default" />
</template>
```

### BarsSpinner

```vue
<script setup>
import BarsSpinner from '@/components/ui/spinner/BarsSpinner.vue'
</script>

<template>
    <BarsSpinner size="default" />
</template>
```

## Spinner 变体

| 变体 | 说明 |
|------|------|
| `default` | 顶部和右侧边框透明，旋转 |
| `primary` | 主色边框，旋转 |
| `secondary` | 辅助色边框，旋转 |
| `accent` | 顶部和右侧强调色边框，旋转 |

## 尺寸

所有旋转器类型支持以下尺寸：

| 尺寸 | Spinner | Block | Bars | Dots |
|------|---------|-------|------|------|
| `sm` | `h-5 w-5` | `h-5 w-5` | `h-4` | `gap-1` |
| `default` | `h-8 w-8` | `h-8 w-8` | `h-6` | `gap-2` |
| `lg` | `h-12 w-12` | `h-12 w-12` | `h-8` | `gap-3` |
| `xl` | `h-16 w-16` | `h-16 w-16` | `h-12` | `gap-4` |

## 属性

### Spinner

| 属性 | 类型 | 默认值 |
|------|------|--------|
| `size` | `'sm' \| 'default' \| 'lg' \| 'xl'` | `'default'` |
| `variant` | `'default' \| 'primary' \| 'secondary' \| 'accent'` | `'default'` |
| `class` | `string` | — |

### BlockSpinner / DotsSpinner / BarsSpinner

| 属性 | 类型 | 默认值 |
|------|------|--------|
| `size` | `'sm' \| 'default' \| 'lg' \| 'xl'` | `'default'` |
| `class` | `string` | — |
