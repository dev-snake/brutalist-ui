---
title: Input 输入框
description: 单行文本输入框，带新粗野主义高亮外边框和自定义占位符。
---

# Input 输入框

新粗野主义风格的文本输入框，支持变体、尺寸和 v-model 双向绑定。

## 预览

<ComponentPreview>
  <InputDemo />
</ComponentPreview>

## 安装

<InstallationTabs componentName="input" />

## 用法

```vue
<script setup>
import { ref } from 'vue'
import Input from '@/components/ui/input/Input.vue'

const value = ref('')
</script>

<template>
    <Input v-model="value" placeholder="Enter your name..." />
</template>
```

## 变体

| 变体 | 说明 |
|------|------|
| `default` | 标准边框 |
| `error` | 错误边框，聚焦时使用 Primary 阴影 |
| `success` | 成功边框，聚焦时使用 Secondary 阴影 |

## 尺寸

| 尺寸 | 高度 | 内边距 | 字体大小 |
|------|------|--------|----------|
| `sm` | `h-9` | `px-3 py-1` | `text-sm` |
| `default` | `h-11` | `px-4 py-2` | `text-base` |
| `lg` | `h-14` | `px-5 py-3` | `text-lg` |

## 搭配 Label

```vue
<script setup>
import { ref } from 'vue'
import Input from '@/components/ui/input/Input.vue'
import Label from '@/components/ui/label/Label.vue'

const email = ref('')
</script>

<template>
    <div class="space-y-2">
        <Label for="email">Email</Label>
        <Input id="email" v-model="email" type="email" placeholder="you@example.com" />
    </div>
</template>
```

## 禁用状态

```vue
<script setup>
import Input from '@/components/ui/input/Input.vue'
</script>

<template>
    <Input disabled placeholder="Disabled input" />
</template>
```

## Props

| 属性 | 类型 | 默认值 |
|------|------|--------|
| `type` | `string` | `'text'` |
| `modelValue` | `string \| number` | — |
| `variant` | `'default' \| 'error' \| 'success'` | `'default'` |
| `inputSize` | `'sm' \| 'default' \| 'lg'` | `'default'` |
| `disabled` | `boolean` | `false` |
| `placeholder` | `string` | — |
| `class` | `string` | — |

## 事件

| 事件 | 载荷 |
|------|------|
| `update:modelValue` | `string \| number` |
