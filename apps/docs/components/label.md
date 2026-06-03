---
title: Label 标签
description: 关联表单项的文本标签，支持禁用状态与点击聚焦特性。
---

# Label 标签

新粗野主义风格的标签组件，用于表单字段，支持变体。

## 预览

<ComponentPreview>
  <LabelDemo />
</ComponentPreview>

## 安装

<InstallationTabs componentName="label" />

## 用法

```vue
<script setup>
import Label from '@/components/ui/label/Label.vue'
import Input from '@/components/ui/input/Input.vue'
</script>

<template>
    <div class="space-y-2">
        <Label for="email">Email</Label>
        <Input id="email" type="email" placeholder="you@example.com" />
    </div>
</template>
```

## 变体

| 变体 | 说明 |
|------|------|
| `default` | 标准前景色文字 |
| `error` | Destructive（红色）文字 |
| `success` | Success（绿色）文字 |
| `muted` | 柔和前景色文字 |

## Props

| 属性 | 类型 | 默认值 |
|------|------|--------|
| `variant` | `'default' \| 'error' \| 'success' \| 'muted'` | `'default'` |
| `class` | `string` | — |

## 无障碍

Label 组件渲染为 HTML `<label>` 元素。当使用 `for` 属性时，它会关联到匹配的表单控件，从而改善无障碍性和点击聚焦行为。
