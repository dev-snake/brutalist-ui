---
title: Brutalist Hero
description: 新粗野主义落地页 Hero 区段模板，包含标题、CTA 和装饰性卡片。
---

# Brutalist Hero

新粗野主义风格的 Hero 区段，适用于落地页，包含标题、副标题、CTA 按钮和装饰性代码预览卡片。

## 预览

<ComponentPreview>
  <BrutalistHeroDemo />
</ComponentPreview>

## 安装

```bash
npx brutx-vue@latest add --block brutalist-hero
```

## 用法

```vue
<script setup>
import BrutalistHero from '@/components/ui/brutalist-hero/BrutalistHero.vue'

function handlePrimary() {
    console.log('Primary CTA clicked')
}

function handleSecondary() {
    console.log('Secondary CTA clicked')
}
</script>

<template>
    <BrutalistHero
        title="Build Bold Interfaces Faster with BrutxUI"
        subtitle="A Neo-Brutalism component library for Vue 3. Bold borders, hard shadows, zero apologies."
        primary-cta-text="Get Started Now"
        secondary-cta-text="View Component Registry"
        @primary-cta="handlePrimary"
        @secondary-cta="handleSecondary"
    />
</template>
```

## Props

| 属性 | 类型 | 默认值 |
|------|------|--------|
| `title` | `string` | locale: `brutalistHero.title` |
| `subtitle` | `string` | — |
| `primaryCtaText` | `string` | locale: `brutalistHero.primaryCtaText` |
| `secondaryCtaText` | `string` | locale: `brutalistHero.secondaryCtaText` |
| `class` | `string` | — |

## 事件

| 事件 | 载荷 |
|------|------|
| `primaryCta` | `[]` |
| `secondaryCta` | `[]` |

## 布局

Hero 使用双列网格布局：
- **左列**：徽章、标题、副标题和 CTA 按钮
- **右列**：带有偏移阴影和代码预览的装饰性卡片
- 在移动端，列会垂直堆叠
