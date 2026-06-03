---
title: SaaS Pricing 定价
description: 完整的 SaaS 定价页面模板，包含周期切换和方案功能清单对比。
---

# SaaS Pricing 定价

新粗野主义风格的 SaaS 定价区块，支持月付/年付切换和功能对比。

## 预览

<ComponentPreview>
  <SaaSPricingDemo />
</ComponentPreview>

## 安装

<InstallationTabs componentName="saas-pricing" />

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
        subtitle="Choose the plan that fits your needs"
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

## 属性

| 属性 | 类型 | 默认值 |
|------|------|--------|
| `plans` | `PricingPlan[]` | 默认 3 个套餐 |
| `title` | `string` | locale: `saasPricing.title` |
| `subtitle` | `string` | — |
| `class` | `string` | — |

## 功能特性

- **计费切换**：在月付和年付定价之间切换
- **热门标记**：设置 `popular: true` 的套餐会获得高亮标记和缩放效果
- **功能勾选**：包含的功能显示绿色勾选，不包含的功能显示灰色图标和删除线
