---
title: SaaS Pricing
description: SaaS 风格定价区块，支持月付/年付切换和多方案对比。
---

# SaaS Pricing

新粗野主义风格的 SaaS 定价表，包含月付/年付切换、热门方案高亮和功能列表。

## 预览

<ComponentPreview>
  <SaaSPricingDemo />
</ComponentPreview>

## 安装

```bash
npx brutx-vue@latest add --block saas-pricing
```

## 用法

```vue
<script setup>
import SaaSPricing from '@/components/ui/saas-pricing/SaaSPricing.vue'

const plans = [
    {
        name: 'Starter',
        description: 'For side projects and experiments',
        priceMonthly: '$0',
        priceAnnually: '$0',
        features: [
            { text: '5 components', included: true },
            { text: 'Basic themes', included: true },
            { text: 'Community support', included: true },
            { text: 'Priority updates', included: false },
        ],
        buttonText: 'Get Started',
        buttonVariant: 'outline',
    },
    {
        name: 'Pro',
        description: 'For professional developers',
        priceMonthly: '$19',
        priceAnnually: '$15',
        features: [
            { text: 'All components', included: true },
            { text: 'All themes', included: true },
            { text: 'Priority support', included: true },
            { text: 'Priority updates', included: true },
        ],
        popular: true,
        buttonText: 'Go Pro',
        buttonVariant: 'primary',
    },
    {
        name: 'Enterprise',
        description: 'For teams and organizations',
        priceMonthly: '$49',
        priceAnnually: '$39',
        features: [
            { text: 'All components', included: true },
            { text: 'All themes', included: true },
            { text: 'Dedicated support', included: true },
            { text: 'Custom themes', included: true },
        ],
        buttonText: 'Contact Sales',
        buttonVariant: 'secondary',
    },
]
</script>

<template>
    <SaaSPricing
        title="Simple, Unapologetic Pricing"
        :plans="plans"
    />
</template>
```

## PricingPlan 类型

```ts
interface PricingFeature {
    text: string
    included: boolean
}

interface PricingPlan {
    name: string
    description: string
    priceMonthly: string
    priceAnnually: string
    features: PricingFeature[]
    popular?: boolean
    buttonText: string
    buttonVariant?: 'default' | 'primary' | 'secondary' | 'accent' | 'danger' | 'success' | 'outline' | 'ghost' | 'link'
}
```

## Props

| 属性 | 类型 | 默认值 |
|------|------|--------|
| `title` | `string` | `'Simple, Unapologetic Pricing'` |
| `subtitle` | `string` | — |
| `plans` | `PricingPlan[]` | 内置 3 个方案 |
| `class` | `string` | — |

## 特性

- **月付/年付切换**：内置计费周期切换按钮
- **热门徽章**：设置了 `popular: true` 的方案会显示脉冲徽章和放大效果
- **功能勾选图标**：已包含功能显示绿色勾选，未包含功能显示灰色问号
- **卡片变体**：热门方案使用 `interactive` 变体，其他使用 `default` 变体
