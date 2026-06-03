---
title: Toggle Group 切换组
description: 切换按钮组，支持单选或多选组合，适合控制视图或排版。
---

# Toggle Group 切换组

基于 reka-ui 的 ToggleGroup 原语构建的新粗野主义风格切换按钮组，支持单选或多选。

## 预览

<ComponentPreview>
  <ToggleGroupDemo />
</ComponentPreview>

## 安装

<InstallationTabs componentName="toggle-group" />

## 用法

### 单选

```vue
<script setup>
import { ref } from 'vue'
import ToggleGroup from '@/components/ui/toggle-group/ToggleGroup.vue'
import ToggleGroupItem from '@/components/ui/toggle-group/ToggleGroupItem.vue'
import { Bold, Italic, Underline } from 'lucide-vue-next'

const selected = ref('bold')
</script>

<template>
    <ToggleGroup type="single" v-model="selected" variant="default">
        <ToggleGroupItem value="bold">
            <Bold class="h-4 w-4" />
        </ToggleGroupItem>
        <ToggleGroupItem value="italic">
            <Italic class="h-4 w-4" />
        </ToggleGroupItem>
        <ToggleGroupItem value="underline">
            <Underline class="h-4 w-4" />
        </ToggleGroupItem>
    </ToggleGroup>
</template>
```

### 多选

```vue
<script setup>
import { ref } from 'vue'
import ToggleGroup from '@/components/ui/toggle-group/ToggleGroup.vue'
import ToggleGroupItem from '@/components/ui/toggle-group/ToggleGroupItem.vue'
import { Bold, Italic, Underline } from 'lucide-vue-next'

const selected = ref(['bold'])
</script>

<template>
    <ToggleGroup type="multiple" v-model="selected" variant="default">
        <ToggleGroupItem value="bold">
            <Bold class="h-4 w-4" />
        </ToggleGroupItem>
        <ToggleGroupItem value="italic">
            <Italic class="h-4 w-4" />
        </ToggleGroupItem>
        <ToggleGroupItem value="underline">
            <Underline class="h-4 w-4" />
        </ToggleGroupItem>
    </ToggleGroup>
</template>
```

## 属性

### ToggleGroup

| 属性 | 类型 | 默认值 |
|------|------|--------|
| `type` | `'single' \| 'multiple'` | —（必填） |
| `modelValue` | `string \| string[]` | — |
| `variant` | `'default' \| 'outline'` | `'default'` |
| `size` | `'sm' \| 'default' \| 'lg'` | `'default'` |
| `disabled` | `boolean` | — |
| `class` | `string` | — |

### ToggleGroupItem

| 属性 | 类型 | 默认值 |
|------|------|--------|
| `value` | `string` | —（必填） |
| `disabled` | `boolean` | — |
| `class` | `string` | — |

## 事件

### ToggleGroup

| 事件 | 载荷 |
|------|------|
| `update:modelValue` | `string \| string[]` |
