---
title: Toggle 切换
description: 独立切换按钮，用于表示启用/关闭或选中/未选中状态。
---

# Toggle 切换

基于 reka-ui 的 Toggle 原语构建的新粗野主义风格切换按钮，支持按下状态。

## 预览

<ComponentPreview>
  <ToggleDemo />
</ComponentPreview>

## 安装

<InstallationTabs componentName="toggle" />

## 用法

```vue
<script setup>
import { ref } from 'vue'
import Toggle from '@/components/ui/toggle/Toggle.vue'
import { Bold, Italic, Underline } from 'lucide-vue-next'

const bold = ref(false)
const italic = ref(false)
const underline = ref(false)
</script>

<template>
    <div class="flex items-center gap-2">
        <Toggle v-model:pressed="bold" variant="default" size="default">
            <Bold class="h-4 w-4" />
        </Toggle>
        <Toggle v-model:pressed="italic" variant="default" size="default">
            <Italic class="h-4 w-4" />
        </Toggle>
        <Toggle v-model:pressed="underline" variant="default" size="default">
            <Underline class="h-4 w-4" />
        </Toggle>
    </div>
</template>
```

## 变体

| 变体 | 说明 |
|------|------|
| `default` | 带背景和小阴影，按下时为主色背景 |
| `outline` | 透明带边框，按下时为辅助色背景 |

## 尺寸

| 尺寸 | 高度 | 最小宽度 | 字体大小 |
|------|------|----------|----------|
| `sm` | `h-8` | `min-w-8` | `text-xs` |
| `default` | `h-10` | `min-w-10` | `text-sm` |
| `lg` | `h-12` | `min-w-12` | `text-sm` |

## 属性

| 属性 | 类型 | 默认值 |
|------|------|--------|
| `variant` | `'default' \| 'outline'` | `'default'` |
| `size` | `'sm' \| 'default' \| 'lg'` | `'default'` |
| `pressed` | `boolean` | — |
| `defaultValue` | `boolean` | — |
| `disabled` | `boolean` | — |
| `class` | `string` | — |

## 事件

| 事件 | 载荷 |
|------|------|
| `update:pressed` | `boolean` |

## 样式

- **未按下**：带背景和小阴影，悬停时上浮并增大阴影
- **按下**：主色/辅助色背景，无阴影，向下偏移（按下偏移量）
- **禁用**：降低不透明度，显示禁止光标
