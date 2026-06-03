---
title: Pricing Section
description: 简化版定价对比区块，支持多列方案并排和热门方案强调。
---

# Pricing Section

新粗野主义风格的定价区段，包含功能列表和热门方案高亮。是 SaaSPricing 的简化替代方案，无需计费切换。

## 预览

<ComponentPreview>
  <PricingSectionDemo />
</ComponentPreview>

## 安装

```bash
npx brutx-vue@latest add --block pricing-section
```

## 用法

```vue
<script setup>
import PricingSection from '@/components/ui/pricing-section/PricingSection.vue'

const plans = [
    {
        name: 'Starter',
        price: '$0',
        description: 'For individuals getting started',
        features: [
            '5 components',
            'Classic theme',
            'Community support',
        ],
        ctaText: 'Get Started',
        variant: 'default',
    },
    {
        name: 'Pro',
        price: '$29',
        description: 'For professional developers',
        features: [
            'All components',
            'All themes',
            'Priority support',
            'CLI tool access',
        ],
        ctaText: 'Go Pro',
        popular: true,
        variant: 'primary',
    },
    {
        name: 'Enterprise',
        price: '$99',
        description: 'For teams and organizations',
        features: [
            'All components',
            'All themes',
            'Dedicated support',
            'Custom themes',
            'SLA guarantee',
        ],
        ctaText: 'Contact Sales',
        variant: 'secondary',
    },
]
</script>

<template>
    <PricingSection
        title="Simple, Transparent Brutalist Plans"
        subtitle="One-time payment. Lifetime access."
        :plans="plans"
    />
</template>
```

## BrutalistPricingPlan 类型

```ts
interface BrutalistPricingPlan {
    name: string
    price: string
    description: string
    features: string[]
    ctaText: string
    popular?: boolean
    variant: 'primary' | 'secondary' | 'default'
}
```

## Props

| 属性 | 类型 | 默认值 |
|------|------|--------|
| `title` | `string` | `'Simple, Transparent Brutalist Plans'` |
| `subtitle` | `string` | — |
| `plans` | `BrutalistPricingPlan[]` | `[]` |
| `class` | `string` | — |

## 特性

- **热门徽章**：设置了 `popular: true` 的方案会显示旋转徽章和强调色背景色调
- **功能勾选图标**：所有功能项显示绿色勾选图标
- **卡片变体**：使用 Card 的 variant 属性进行样式设置（primary、secondary、default）
