---
title: Card 卡片
description: 卡片容器组件，支持多种内边距与可组合的头部、标题、描述和底部块。
---

# Card 卡片

新粗野主义风格的卡片容器，支持 6 种变体和可组合的子组件，用于结构化内容展示。

## 预览

<ComponentPreview>
  <CardDemo />
</ComponentPreview>

## 安装

<InstallationTabs componentName="card" />

## 用法

```vue
<script setup>
import Card from '@/components/ui/card/Card.vue'
import CardHeader from '@/components/ui/card/CardHeader.vue'
import CardTitle from '@/components/ui/card/CardTitle.vue'
import CardDescription from '@/components/ui/card/CardDescription.vue'
import CardContent from '@/components/ui/card/CardContent.vue'
import CardFooter from '@/components/ui/card/CardFooter.vue'
import Button from '@/components/ui/button/Button.vue'
</script>

<template>
    <Card variant="default">
        <CardHeader>
            <CardTitle>Payment Method</CardTitle>
            <CardDescription>Add a new payment method to your account.</CardDescription>
        </CardHeader>
        <CardContent>
            <p>Card content goes here.</p>
        </CardContent>
        <CardFooter>
            <Button variant="primary">Save</Button>
        </CardFooter>
    </Card>
</template>
```

## 变体

| 变体 | 说明 |
|------|------|
| `default` | 标准阴影 |
| `elevated` | 大阴影，用于强调 |
| `flat` | 无阴影 |
| `interactive` | 阴影加悬停上浮效果和手型光标 |
| `primary` | Primary 色阴影和边框 |
| `secondary` | Secondary 色阴影和边框 |

## 内边距

| 内边距 | 值 |
|--------|----|
| `none` | `p-0` |
| `sm` | `p-3` |
| `default` | `p-5` |
| `lg` | `p-8` |

## 子组件

| 组件 | 说明 |
|------|------|
| `Card` | 根容器，支持 variant 和 padding 属性 |
| `CardHeader` | 头部区域，带底部内边距 |
| `CardTitle` | 标题文本，加粗且带字间距 |
| `CardDescription` | 柔和的描述文本 |
| `CardContent` | 主内容区域 |
| `CardFooter` | 底部区域，弹性布局 |

## Props

### Card

| 属性 | 类型 | 默认值 |
|------|------|--------|
| `variant` | `'default' \| 'elevated' \| 'flat' \| 'interactive' \| 'primary' \| 'secondary'` | `'default'` |
| `padding` | `'none' \| 'sm' \| 'default' \| 'lg'` | `'default'` |
| `class` | `string` | — |

### CardHeader / CardTitle / CardDescription / CardContent / CardFooter

| 属性 | 类型 | 默认值 |
|------|------|--------|
| `class` | `string` | — |
