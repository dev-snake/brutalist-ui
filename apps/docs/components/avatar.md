---
title: Avatar 头像
description: 头像组件，支持图片、回退文字以及多种形状和尺寸的粗野主义边框。
---

# Avatar 头像

新粗野主义风格的头像组件，用于显示用户头像图片，支持回退显示。

## 预览

<ComponentPreview>
  <AvatarDemo />
</ComponentPreview>

## 安装

<InstallationTabs componentName="avatar" />

## 用法

```vue
<script setup>
import Avatar from '@/components/ui/avatar/Avatar.vue'
import AvatarImage from '@/components/ui/avatar/AvatarImage.vue'
import AvatarFallback from '@/components/ui/avatar/AvatarFallback.vue'
</script>

<template>
    <Avatar size="default" shape="square">
        <AvatarImage src="/avatar.jpg" alt="User avatar" />
        <AvatarFallback>JD</AvatarFallback>
    </Avatar>
</template>
```

## 尺寸

| 尺寸 | 大小 |
|------|------|
| `sm` | `h-8 w-8`（32px） |
| `default` | `h-10 w-10`（40px） |
| `lg` | `h-14 w-14`（56px） |
| `xl` | `h-20 w-20`（80px） |

## 形状

| 形状 | 说明 |
|------|------|
| `square` | 无圆角（默认） |
| `rounded` | 使用 `--brutal-radius` 令牌 |

```vue
<script setup>
import Avatar from '@/components/ui/avatar/Avatar.vue'
import AvatarFallback from '@/components/ui/avatar/AvatarFallback.vue'
</script>

<template>
    <Avatar size="lg" shape="rounded">
        <AvatarFallback>JD</AvatarFallback>
    </Avatar>
</template>
```

## 回退行为

当图片加载失败时，`AvatarFallback` 会自动显示：

```vue
<script setup>
import Avatar from '@/components/ui/avatar/Avatar.vue'
import AvatarImage from '@/components/ui/avatar/AvatarImage.vue'
import AvatarFallback from '@/components/ui/avatar/AvatarFallback.vue'
</script>

<template>
    <Avatar>
        <AvatarImage src="/broken-url.jpg" alt="User" />
        <AvatarFallback>JD</AvatarFallback>
    </Avatar>
</template>
```

## Props

### Avatar

| 属性 | 类型 | 默认值 |
|------|------|--------|
| `size` | `'sm' \| 'default' \| 'lg' \| 'xl'` | `'default'` |
| `shape` | `'square' \| 'rounded'` | `'square'` |
| `class` | `string` | — |

### AvatarImage

| 属性 | 类型 | 默认值 |
|------|------|--------|
| `src` | `string` | — |
| `alt` | `string` | — |

### AvatarFallback

| 属性 | 类型 | 默认值 |
|------|------|--------|
| `class` | `string` | — |
