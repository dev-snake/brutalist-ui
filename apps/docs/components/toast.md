---
title: Toast 轻提示
description: 全局通知气泡组件，支持成功、失败、信息等多种类型的通知分发。
---

# Toast 轻提示

新粗野主义风格通知提示系统，提供 `useToast` 组合式函数、5 种变体和 `ToastContainer` 用于渲染。

## 预览

<ComponentPreview>
  <ToastDemo />
</ComponentPreview>

## 安装

<InstallationTabs componentName="toast" />

## 用法

### 1. 在应用中添加 ToastContainer

将 `ToastContainer` 放置在根 `App.vue` 中：

```vue
<script setup>
import ToastContainer from '@/components/ui/toast/ToastContainer.vue'
</script>

<template>
    <router-view />
    <ToastContainer />
</template>
```

### 2. 使用 useToast 组合式函数

```vue
<script setup>
import { useToast } from '@/composables/useToast'

const { success, error, warning, info, addToast } = useToast()

function handleSave() {
    success('Saved!', 'Your changes have been saved.')
}

function handleError() {
    error('Error', 'Something went wrong. Please try again.')
}
</script>

<template>
    <button @click="handleSave">Save</button>
    <button @click="handleError">Trigger Error</button>
</template>
```

## 变体

| 变体 | 背景 | 文字 |
|------|------|------|
| `default` | `bg-brutal-bg` | `text-brutal-fg` |
| `success` | `bg-brutal-success` | `text-black` |
| `error` | `bg-brutal-destructive` | `text-white` |
| `warning` | `bg-brutal-accent` | `text-black` |
| `info` | `bg-brutal-secondary` | `text-black` |

## 尺寸

| 尺寸 | 最大宽度 |
|------|----------|
| `sm` | `max-w-xs` |
| `default` | `max-w-sm` |
| `lg` | `max-w-md` |

## useToast API

```ts
const {
    toasts,       // Ref<ToastItem[]> - 响应式提示列表
    addToast,     // (toast: Omit<ToastItem, 'id'>) => string
    removeToast,  // (id: string) => void
    clearToasts,  // () => void
    success,      // (title: string, description?: string) => string
    error,        // (title: string, description?: string) => string
    warning,      // (title: string, description?: string) => string
    info,         // (title: string, description?: string) => string
} = useToast()
```

## 自定义提示

```vue
<script setup>
import { useToast } from '@/composables/useToast'

const { addToast } = useToast()

function showCustomToast() {
    addToast({
        variant: 'warning',
        title: 'Warning',
        description: 'Your session will expire in 5 minutes.',
        duration: 10000,
    })
}
</script>
```

## ToastItem 类型

```ts
interface ToastItem {
    id: string
    variant?: 'default' | 'success' | 'error' | 'warning' | 'info'
    title?: string
    description?: string
    duration?: number
}
```

## 属性

### Toast

| 属性 | 类型 | 默认值 |
|------|------|--------|
| `variant` | `'default' \| 'success' \| 'error' \| 'warning' \| 'info'` | `'default'` |
| `size` | `'sm' \| 'default' \| 'lg'` | `'default'` |
| `class` | `string` | — |

### ToastContainer

| 属性 | 类型 | 默认值 |
|------|------|--------|
| `class` | `string` | — |
