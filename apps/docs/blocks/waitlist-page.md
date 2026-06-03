---
title: Waitlist Page
description: 候补名单收集页模板，用于新品发布的邮箱预约收集。
---

# Waitlist Page

新粗野主义风格的候补注册页面，包含邮箱输入、CTA 按钮和社交证明指标。

## 预览

<ComponentPreview>
  <WaitlistPageDemo />
</ComponentPreview>

## 安装

```bash
npx brutx-vue@latest add --block waitlist-page
```

## 用法

```vue
<script setup>
import WaitlistPage from '@/components/ui/waitlist-page/WaitlistPage.vue'

function handleSubmit(email) {
    console.log('Waitlist signup:', email)
}
</script>

<template>
    <WaitlistPage
        title="Join the BrutxUI Waitlist Club"
        description="Be the first to know when we launch. Get early access and exclusive perks."
        cta-text="Secure Priority Access"
        :waitlist-count="1247"
        @submit="handleSubmit"
    />
</template>
```

## Props

| 属性 | 类型 | 默认值 |
|------|------|--------|
| `title` | `string` | locale: `waitlistPage.title` |
| `description` | `string` | — |
| `ctaText` | `string` | locale: `waitlistPage.ctaText` |
| `waitlistCount` | `number` | `0` |
| `class` | `string` | — |

## 事件

| 事件 | 载荷 |
|------|------|
| `submit` | `string`（邮箱地址） |

## 布局

WaitlistPage 包含：
- **徽章**：旋转的强调色徽章，带有 "Early Access" 标签
- **标题**：加粗、字距调整的标题
- **描述**：标题下方的弱化文本
- **邮箱表单**：输入框和 CTA 按钮，响应式行布局
- **社交证明**：候补人数、星级评分和在线指示器
