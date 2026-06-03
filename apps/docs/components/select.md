---
title: Select 选择器
description: 选择器组件，可替代浏览器原生下拉，提供更好的无障碍支持。
---

# Select 选择器

基于 reka-ui 的 Select 原语构建的新粗野主义风格下拉选择框，完整支持子组件。

## 预览

<ComponentPreview>
  <SelectDemo />
</ComponentPreview>

## 安装

<InstallationTabs componentName="select" />

## 用法

```vue
<script setup>
import {
    Select,
    SelectTrigger,
    SelectContent,
    SelectItem,
    SelectValue,
    SelectGroup,
    SelectLabel,
} from '@/components/ui'
</script>

<template>
    <Select>
        <SelectTrigger class="w-[280px]">
            <SelectValue placeholder="Select a fruit" />
        </SelectTrigger>
        <SelectContent>
            <SelectGroup>
                <SelectLabel>Fruits</SelectLabel>
                <SelectItem value="apple">Apple</SelectItem>
                <SelectItem value="banana">Banana</SelectItem>
                <SelectItem value="orange">Orange</SelectItem>
                <SelectItem value="grape">Grape</SelectItem>
            </SelectGroup>
        </SelectContent>
    </Select>
</template>
```

## 使用 v-model

```vue
<script setup>
import { ref } from 'vue'
import {
    Select,
    SelectTrigger,
    SelectContent,
    SelectItem,
    SelectValue,
} from '@/components/ui'

const selectedFruit = ref('')
</script>

<template>
    <Select v-model="selectedFruit">
        <SelectTrigger class="w-[280px]">
            <SelectValue placeholder="Select a fruit" />
        </SelectTrigger>
        <SelectContent>
            <SelectItem value="apple">Apple</SelectItem>
            <SelectItem value="banana">Banana</SelectItem>
            <SelectItem value="orange">Orange</SelectItem>
        </SelectContent>
    </Select>
</template>
```

## 子组件

| 组件 | 说明 |
|------|------|
| `Select` | 根组件（从 reka-ui 重新导出为 `SelectRoot`） |
| `SelectTrigger` | 打开下拉菜单的按钮 |
| `SelectContent` | 下拉内容面板 |
| `SelectItem` | 可选项 |
| `SelectValue` | 显示已选中的值 |
| `SelectGroup` | 选项分组 |
| `SelectLabel` | 分组标签 |
| `SelectSeparator` | 视觉分隔线 |
| `SelectScrollUpButton` | 向上滚动指示器 |
| `SelectScrollDownButton` | 向下滚动指示器 |

## 属性

### SelectTrigger

| 属性 | 类型 | 默认值 |
|------|------|--------|
| `class` | `string` | — |

### SelectContent

| 属性 | 类型 | 默认值 |
|------|------|--------|
| `class` | `string` | — |
| `position` | `'popper' \| 'item-aligned'` | — |

### SelectItem

| 属性 | 类型 | 默认值 |
|------|------|--------|
| `value` | `string` | —（必填） |
| `disabled` | `boolean` | — |
| `class` | `string` | — |

### SelectLabel

| 属性 | 类型 | 默认值 |
|------|------|--------|
| `class` | `string` | — |
