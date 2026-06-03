---
title: Footer Section
description: 页面底部信息栏区块，含 Logo、描述、链接组和版权声明。
---

# Footer Section

新粗野主义风格的页面底部信息栏，包含 Logo 文本、描述、链接组和版权声明。

## 预览

<ComponentPreview>
  <FooterSectionDemo />
</ComponentPreview>

## 安装

```bash
npx brutx-vue@latest add --block footer-section
```

## 用法

```vue
<script setup>
import FooterSection from '@/components/ui/footer-section/FooterSection.vue'

const linkGroups = [
    {
        title: 'Product',
        links: [
            { label: 'Features', href: '#features' },
            { label: 'Pricing', href: '#pricing' },
        ],
    },
    {
        title: 'Company',
        links: [
            { label: 'About', href: '/about' },
            { label: 'Blog', href: '/blog' },
        ],
    },
    {
        title: 'Support',
        links: [
            { label: 'Help Center', href: '/help' },
            { label: 'Contact', href: '/contact' },
        ],
    },
]

function handleLinkClick({ groupIndex, linkIndex }) {
    console.log('Link clicked:', linkGroups[groupIndex].links[linkIndex].label)
}
</script>

<template>
    <FooterSection
        logo-text="MyApp"
        description="Build bold interfaces faster."
        :link-groups="linkGroups"
        copyright="© 2026 MyApp. All rights reserved."
        @link-click="handleLinkClick"
    />
</template>
```

## Props

| 属性 | 类型 | 默认值 |
|------|------|--------|
| `logoText` | `string` | locale: `footerSection.defaultLogoText` |
| `description` | `string` | locale: `footerSection.defaultDescription` |
| `linkGroups` | `FooterLinkGroup[]` | `[]` |
| `copyright` | `string` | locale: `footerSection.defaultCopyright` |
| `class` | `string` | — |

### FooterLinkGroup 类型

```ts
interface FooterLinkGroup {
    title: string
    links: FooterLink[]
}

interface FooterLink {
    label: string
    href?: string
}
```

## 事件

| 事件 | 载荷 |
|------|------|
| `link-click` | `[{ groupIndex: number; linkIndex: number }]` |

## Slots

| Slot | 用途 |
|------|------|
| `header` | 替换 Logo 和描述区域 |
| `default` | 替换链接组区域 |
| `footer` | 替换版权声明区域 |

## 布局

FooterSection 包含：
- **Logo 与描述**：品牌文本和简短描述
- **链接组**：2×4 响应式网格布局，每组含标题和链接列表
- **分隔线**：Separator 组件
- **版权声明**：居中弱化文本
