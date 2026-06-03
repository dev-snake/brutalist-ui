---
title: FAQ Section
description: 常见问题折叠面板区块，含编号徽标和手风琴交互。
---

# FAQ Section

新粗野主义风格的常见问题区块，包含标题、副标题和带编号徽标的手风琴折叠面板。

## 预览

<ComponentPreview>
  <FaqSectionDemo />
</ComponentPreview>

## 安装

```bash
npx brutx-vue@latest add --block faq-section
```

## 用法

```vue
<script setup>
import FaqSection from '@/components/ui/faq-section/FaqSection.vue'

const items = [
    {
        question: 'What is BrutxUI?',
        answer: 'BrutxUI is a Neo-Brutalist UI component library for Vue 3.',
    },
    {
        question: 'How do I get started?',
        answer: 'Install via npm and import the components you need.',
    },
    {
        question: 'Is it free?',
        answer: 'Yes, BrutxUI is open source and free to use under the MIT license.',
    },
]

function handleItemClick(index) {
    console.log('FAQ item clicked:', items[index].question)
}
</script>

<template>
    <FaqSection
        title="常见问题"
        subtitle="查找您需要的答案"
        :items="items"
        @item-click="handleItemClick"
    />
</template>
```

## Props

| 属性 | 类型 | 默认值 |
|------|------|--------|
| `title` | `string` | locale: `faqSection.defaultTitle` |
| `subtitle` | `string` | locale: `faqSection.defaultSubtitle` |
| `items` | `FaqItem[]` | `[]` |
| `class` | `string` | — |

### FaqItem 类型

```ts
interface FaqItem {
    question: string
    answer: string
}
```

## 事件

| 事件 | 载荷 |
|------|------|
| `item-click` | `[index: number]` |

## Slots

| Slot | 用途 |
|------|------|
| `header` | 替换标题和副标题区域 |
| `default` | 替换手风琴列表区域 |
| `footer` | 替换/扩展区块底部 |

## 布局

FaqSection 包含：
- **标题区**：居中标题和副标题
- **手风琴列表**：Card 容器内的 Accordion 组件，每项含编号 Badge 和问题/答案
