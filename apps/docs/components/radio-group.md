---
title: Radio Group 单选组
description: 单选按钮组组件，用于在互斥选项中进行单项选择。
---

# Radio Group 单选组

基于 reka-ui 的 RadioGroup 原语构建的新粗野主义风格单选组，用于单项选择。

## 预览

<ComponentPreview>
  <RadioGroupDemo />
</ComponentPreview>

## 安装

<InstallationTabs componentName="radio-group" />

## 用法

```vue
<script setup>
import { ref } from 'vue'
import RadioGroup from '@/components/ui/radio-group/RadioGroup.vue'
import RadioGroupItem from '@/components/ui/radio-group/RadioGroupItem.vue'
import Label from '@/components/ui/label/Label.vue'

const selected = ref('comfortable')
</script>

<template>
    <RadioGroup v-model="selected">
        <div class="flex items-center gap-3">
            <RadioGroupItem value="default" />
            <Label for="default">Default</Label>
        </div>
        <div class="flex items-center gap-3">
            <RadioGroupItem value="comfortable" />
            <Label for="comfortable">Comfortable</Label>
        </div>
        <div class="flex items-center gap-3">
            <RadioGroupItem value="compact" />
            <Label for="compact">Compact</Label>
        </div>
    </RadioGroup>
</template>
```

## 属性

### RadioGroup

| 属性 | 类型 | 默认值 |
|------|------|--------|
| `modelValue` | `string` | — |
| `defaultValue` | `string` | — |
| `class` | `string` | — |

### RadioGroupItem

| 属性 | 类型 | 默认值 |
|------|------|--------|
| `value` | `string` | —（必填） |
| `disabled` | `boolean` | — |
| `class` | `string` | — |

## 事件

### RadioGroup

| 事件 | 载荷 |
|------|------|
| `update:modelValue` | `string` |

## 无障碍

- 方向键在单选项之间导航
- 空格键选中当前聚焦项
- 选中项使用 `aria-checked="true"`
