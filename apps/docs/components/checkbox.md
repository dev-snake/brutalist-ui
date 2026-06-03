---
title: Checkbox 复选框
description: 复选框组件，带有厚边框和鲜明勾选图标，实现完全的键盘操作支持。
---

# Checkbox 复选框

新粗野主义风格的复选框，基于 reka-ui 的 CheckboxRoot 原语构建，带勾选指示器。

## 预览

<ComponentPreview>
  <CheckboxDemo />
</ComponentPreview>

## 安装

<InstallationTabs componentName="checkbox" />

## 用法

```vue
<script setup>
import { ref } from 'vue'
import Checkbox from '@/components/ui/checkbox/Checkbox.vue'

const checked = ref(false)
</script>

<template>
    <div class="flex items-center gap-3">
        <Checkbox v-model:checked="checked" />
        <span class="text-sm font-bold">Accept terms</span>
    </div>
</template>
```

## 搭配 Label

```vue
<script setup>
import { ref } from 'vue'
import Checkbox from '@/components/ui/checkbox/Checkbox.vue'
import Label from '@/components/ui/label/Label.vue'

const checked = ref(false)
</script>

<template>
    <div class="flex items-center gap-3">
        <Checkbox v-model:checked="checked" id="terms" />
        <Label for="terms">Accept terms and conditions</Label>
    </div>
</template>
```

## 禁用状态

```vue
<script setup>
import Checkbox from '@/components/ui/checkbox/Checkbox.vue'
</script>

<template>
    <Checkbox disabled />
</template>
```

## Props

| 属性 | 类型 | 默认值 |
|------|------|--------|
| `class` | `string` | — |
| `disabled` | `boolean` | — |

Checkbox 使用 reka-ui 的 `CheckboxRoot`，支持 `v-model:checked` 双向绑定。

## 样式

- **未选中**：白色背景，粗野主义边框和小阴影
- **已选中**：Success（绿色）背景，带勾选图标
- **禁用状态**：降低透明度，显示禁止光标
- **聚焦状态**：使用 `--brutal-ring` 令牌显示可见聚焦环
