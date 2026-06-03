---
title: NumberInput 数字输入框
description: 数字微调输入框组件，带有一对粗野主义的加减控制按钮，提供两种加减按钮的排版布局。
---

# NumberInput 数字输入框

用于录入数字的文本框，内置了长按加减按钮连续滚动的逻辑，并支持最大值、最小值、精度步长调整。

## 预览

<ComponentPreview>
  <NumberInputDemo />
</ComponentPreview>

## 安装

<InstallationTabs componentName="number-input" />

## 用法

```vue
<script setup>
import { ref } from 'vue'
import NumberInput from '@/components/ui/number-input/NumberInput.vue'

const count = ref(5)
</script>

<template>
    <NumberInput v-model="count" :min="0" :max="10" :step="1" />
</template>
```

## 布局变体

NumberInput 提供两种按钮排版形态，通过 `layout` 属性配置：

| 布局属性 | 排版说明 |
|----------|----------|
| `split` (默认) | **双侧分立式**：减号按钮在输入框左侧，加号按钮在右侧，极具粗野对称感。 |
| `stacked` | **右侧堆叠式**：加减上下按钮成组排列在右边。 |

```vue
<template>
    <!-- 分立式 -->
    <NumberInput v-model="count" layout="split" />
    
    <!-- 堆叠式 -->
    <NumberInput v-model="count" layout="stacked" />
</template>
```

## Props

| 属性 | 类型 | 默认值 | 说明 |
|------|------|--------|------|
| `modelValue` | `number` | — | 当前输入值 |
| `min` | `number` | — | 允许的最小值 |
| `max` | `number` | — | 允许的最大值 |
| `step` | `number` | `1` | 每次微调的增减幅度 |
| `layout` | `'split' \| 'stacked'` | `'split'` | 调整按钮的布局结构 |
| `placeholder` | `string` | `""` | 占位符 |
| `disabled` | `boolean` | `false` | 是否禁用输入框及按钮 |
| `class` | `string` | `""` | 容器的自定义 CSS 类 |
