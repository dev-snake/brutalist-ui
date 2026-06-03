---
title: Tabs Nav
description: 带内容的标签页导航区块，含标签触发器和内容面板。
---

# Tabs Nav

新粗野主义风格的标签页导航区块，包含标签触发器和对应内容面板，基于 reka-ui Tabs 原语构建。

## 预览

<ComponentPreview>
  <TabsNavDemo />
</ComponentPreview>

## 安装

```bash
npx brutx-vue@latest add --block tabs-nav
```

## 用法

```vue
<script setup>
import TabsNav from '@/components/ui/tabs-nav/TabsNav.vue'

const tabs = [
    { label: 'Overview', value: 'overview' },
    { label: 'Features', value: 'features' },
    { label: 'Pricing', value: 'pricing' },
]
</script>

<template>
    <TabsNav :tabs="tabs" default-value="overview">
        <template #default>
            <!-- 自定义内容面板 -->
        </template>
    </TabsNav>
</template>
```

## 自定义内容

```vue
<script setup>
import TabsNav from '@/components/ui/tabs-nav/TabsNav.vue'
import Card from '@/components/ui/card/Card.vue'

const tabs = [
    { label: 'Tab A', value: 'a' },
    { label: 'Tab B', value: 'b' },
]
</script>

<template>
    <TabsNav :tabs="tabs">
        <template #default>
            <!-- 使用 TabsContent 自定义每个面板 -->
        </template>
    </TabsNav>
</template>
```

## Props

| 属性 | 类型 | 默认值 |
|------|------|--------|
| `tabs` | `TabItem[]` | `[]` |
| `defaultValue` | `string` | 第一个 tab 的 value |
| `class` | `string` | — |

### TabItem 类型

```ts
interface TabItem {
    label: string
    value: string
}
```

## Slots

| Slot | 用途 |
|------|------|
| `header` | 替换/扩展区块头部 |
| `default` | 替换标签内容面板区域 |
| `footer` | 替换/扩展区块底部 |

## 布局

TabsNav 包含：
- **标签触发器**：全宽水平排列的 TabsTrigger，等分宽度
- **内容面板**：默认为 Card flat 变体，显示 tab 标签文本；可通过 default slot 自定义
