---
title: Testimonial Card
description: 用户评价推荐卡片，含头像、引文、署名和验证徽标。
---

# Testimonial Card

新粗野主义风格的用户评价卡片，包含头像、引文图标、评价文本、作者信息和验证徽标。

## 预览

<ComponentPreview>
  <TestimonialCardDemo />
</ComponentPreview>

## 安装

```bash
npx brutx-vue@latest add --block testimonial-card
```

## 用法

```vue
<script setup>
import TestimonialCard from '@/components/ui/testimonial-card/TestimonialCard.vue'
</script>

<template>
    <TestimonialCard
        quote="这款产品彻底改变了我们的工作流程。"
        author="张明"
        role="产品经理"
    />
</template>
```

## 多卡片布局

```vue
<script setup>
import TestimonialCard from '@/components/ui/testimonial-card/TestimonialCard.vue'

const testimonials = [
    { quote: 'Great product!', author: 'Alice', role: 'CEO' },
    { quote: 'Highly recommended.', author: 'Bob', role: 'CTO' },
    { quote: 'Love the design.', author: 'Carol', role: 'Designer' },
]
</script>

<template>
    <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        <TestimonialCard
            v-for="(t, i) in testimonials"
            :key="i"
            :quote="t.quote"
            :author="t.author"
            :role="t.role"
        />
    </div>
</template>
```

## Props

| 属性 | 类型 | 默认值 |
|------|------|--------|
| `quote` | `string` | locale: `testimonialCard.defaultQuote` |
| `author` | `string` | locale: `testimonialCard.defaultAuthor` |
| `role` | `string` | locale: `testimonialCard.defaultRole` |
| `class` | `string` | — |

## 布局

TestimonialCard 包含：
- **头像**：Avatar 组件，从作者姓名提取首字母缩写
- **引文图标**：Quote 图标，主色渲染
- **评价文本**：加粗正文
- **作者信息**：姓名和职位
- **验证徽标**：secondary 变体 Badge
