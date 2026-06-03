---
title: Button 按钮
description: 新粗野主义风格的按钮组件，提供9种颜色变体、加载动画与键盘导航。
---

# Button 按钮

新粗野主义风格的按钮组件，支持 9 种变体、5 种尺寸、加载状态和 `asChild` 组合支持。

## 预览

<ComponentPreview>
  <ButtonDemo />
</ComponentPreview>

## 安装

<InstallationTabs componentName="button" />

## 用法

```vue
<script setup>
import Button from '@/components/ui/button/Button.vue'
</script>

<template>
    <Button variant="primary" size="default">
        Click me
    </Button>
</template>
```

## 变体

| 变体 | 说明 |
|------|------|
| `default` | 背景色，硬阴影 |
| `primary` | Primary（珊瑚色）背景 |
| `secondary` | Secondary（薄荷青）背景 |
| `accent` | Accent（黄色）背景 |
| `danger` | Destructive（红色）背景，白色文字 |
| `success` | Success（绿色）背景 |
| `outline` | 透明背景，悬停时反转 |
| `ghost` | 无边框和阴影，柔和悬停效果 |
| `link` | 无边框和阴影，悬停时显示下划线 |

## 尺寸

| 尺寸 | 高度 | 内边距 | 字体大小 |
|------|------|--------|----------|
| `sm` | `h-9` | `px-3 py-1` | `text-sm` |
| `default` | `h-11` | `px-5 py-2` | `text-base` |
| `lg` | `h-14` | `px-8 py-3` | `text-lg` |
| `xl` | `h-16` | `px-10 py-4` | `text-xl` |
| `icon` | `h-11 w-11` | `p-0` | — |

## 加载状态

```vue
<script setup>
import { ref } from 'vue'
import Button from '@/components/ui/button/Button.vue'

const isLoading = ref(false)

async function handleSubmit() {
    isLoading.value = true
    await new Promise(resolve => setTimeout(resolve, 2000))
    isLoading.value = false
}
</script>

<template>
    <Button variant="primary" :loading="isLoading" @click="handleSubmit">
        Save Changes
    </Button>
</template>
```

## 禁用状态

```vue
<script setup>
import Button from '@/components/ui/button/Button.vue'
</script>

<template>
    <Button variant="primary" disabled>
        Disabled
    </Button>
</template>
```

## asChild

使用 `asChild` 将按钮样式渲染到自定义元素上（例如路由链接）：

```vue
<script setup>
import Button from '@/components/ui/button/Button.vue'
import { RouterLink } from 'vue-router'
</script>

<template>
    <Button as-child>
        <RouterLink to="/about">About</RouterLink>
    </Button>
</template>
```

## Props

| 属性 | 类型 | 默认值 |
|------|------|--------|
| `variant` | `'default' \| 'primary' \| 'secondary' \| 'accent' \| 'danger' \| 'success' \| 'outline' \| 'ghost' \| 'link'` | `'default'` |
| `size` | `'sm' \| 'default' \| 'lg' \| 'xl' \| 'icon'` | `'default'` |
| `asChild` | `boolean` | `false` |
| `loading` | `boolean` | `false` |
| `disabled` | `boolean` | `false` |
| `class` | `string` | — |
