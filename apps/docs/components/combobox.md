---
title: Combobox 组合框
description: 组合框（下拉搜索选择）组件，支持多选、单选，支持大数据量过滤。
---

# Combobox 组合框

新粗野主义风格的可搜索选择组件。提供单选（`Combobox`）和多选（`ComboboxMulti`）两种模式。

## 预览

<ComponentPreview>
  <ComboboxDemo />
</ComponentPreview>

## 安装

<InstallationTabs componentName="combobox" />

## 单选模式

```vue
<script setup>
import { ref } from 'vue'
import Combobox from '@/components/ui/combobox/Combobox.vue'

const selected = ref(undefined)

const options = [
    { value: 'vue', label: 'Vue' },
    { value: 'react', label: 'React' },
    { value: 'angular', label: 'Angular' },
    { value: 'svelte', label: 'Svelte' },
]
</script>

<template>
    <Combobox
        v-model="selected"
        :options="options"
        placeholder="Select a framework..."
        search-placeholder="Search frameworks..."
    />
</template>
```

## 多选模式

```vue
<script setup>
import { ref } from 'vue'
import ComboboxMulti from '@/components/ui/combobox/ComboboxMulti.vue'

const selected = ref([])

const options = [
    { value: 'vue', label: 'Vue' },
    { value: 'react', label: 'React' },
    { value: 'angular', label: 'Angular' },
    { value: 'svelte', label: 'Svelte' },
]
</script>

<template>
    <ComboboxMulti
        v-model="selected"
        :options="options"
        placeholder="Select frameworks..."
        :max-display="3"
    />
</template>
```

## ComboboxOption 类型

```ts
interface ComboboxOption {
    value: string
    label: string
    disabled?: boolean
}
```

## Props

### Combobox（单选）

| 属性 | 类型 | 默认值 |
|------|------|--------|
| `options` | `ComboboxOption[]` | —（必填） |
| `modelValue` | `string \| undefined` | — |
| `placeholder` | `string` | locale: `combobox.placeholder` |
| `searchPlaceholder` | `string` | locale: `combobox.searchPlaceholder` |
| `emptyText` | `string` | locale: `combobox.emptyText` |
| `disabled` | `boolean` | `false` |
| `class` | `string` | — |

### ComboboxMulti（多选）

| 属性 | 类型 | 默认值 |
|------|------|--------|
| `options` | `ComboboxOption[]` | —（必填） |
| `modelValue` | `string[]` | `[]` |
| `placeholder` | `string` | locale: `combobox.multiPlaceholder` |
| `searchPlaceholder` | `string` | locale: `combobox.searchPlaceholder` |
| `emptyText` | `string` | locale: `combobox.emptyText` |
| `disabled` | `boolean` | `false` |
| `maxDisplay` | `number` | `3` |
| `class` | `string` | — |

## 事件

### Combobox

| 事件 | 载荷 |
|------|------|
| `update:modelValue` | `string \| undefined` |

### ComboboxMulti

| 事件 | 载荷 |
|------|------|
| `update:modelValue` | `string[]` |
