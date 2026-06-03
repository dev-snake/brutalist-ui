---
title: Separator 分隔线
description: 分隔线组件，用于在粗野主义布局中进行模块化视觉分割。
---

# Separator 分隔线

新粗野主义风格的视觉分隔线，支持水平和垂直方向。

## 预览

<ComponentPreview>
  <SeparatorDemo />
</ComponentPreview>

## 安装

<InstallationTabs componentName="separator" />

## 用法

```vue
<script setup>
import Separator from '@/components/ui/separator/Separator.vue'
</script>

<template>
    <div>
        <p class="text-sm font-medium">Content above</p>
        <Separator />
        <p class="text-sm font-medium">Content below</p>
    </div>
</template>
```

## 方向

### 水平（默认）

```vue
<script setup>
import Separator from '@/components/ui/separator/Separator.vue'
</script>

<template>
    <Separator orientation="horizontal" />
</template>
```

### 垂直

```vue
<script setup>
import Separator from '@/components/ui/separator/Separator.vue'
</script>

<template>
    <div class="flex h-8 items-center gap-4">
        <span class="text-sm font-bold">Item 1</span>
        <Separator orientation="vertical" />
        <span class="text-sm font-bold">Item 2</span>
    </div>
</template>
```

## 属性

| 属性 | 类型 | 默认值 |
|------|------|--------|
| `orientation` | `'horizontal' \| 'vertical'` | `'horizontal'` |
| `class` | `string` | — |

## 样式

- **水平**：`h-[3px] w-full` — 使用 `--brutal-border-width` 作为粗细
- **垂直**：`h-full w-[3px]` — 使用 `--brutal-border-width` 作为粗细
- 颜色：`bg-brutal-fg` — 使用 `--brutal-fg` 令牌
