---
title: Success Card
description: 成功状态卡片区块，带有勾选图标、标题、描述和确认按钮。
---

# Success Card

新粗野主义风格的成功卡片，包含成功色顶部条、装饰性勾选图标、标题、描述和确认按钮。

## 预览

<ComponentPreview>
  <SuccessCardDemo />
</ComponentPreview>

## 安装

```bash
npx brutx-vue@latest add --block success-card
```

## 用法

```vue
<script setup>
import SuccessCard from '@/components/ui/success-card/SuccessCard.vue'

function handleConfirm() {
    console.log('Confirmed')
}
</script>

<template>
    <SuccessCard
        title="Operation Successful"
        description="Your changes have been saved successfully."
        confirm-text="Continue"
        @confirm="handleConfirm"
    />
</template>
```

## 自定义文本

```vue
<script setup>
import SuccessCard from '@/components/ui/success-card/SuccessCard.vue'
</script>

<template>
    <SuccessCard
        title="Payment Complete"
        description="Your order has been placed and is being processed."
        confirm-text="View Order"
        @confirm="viewOrder"
    />
</template>
```

## Props

| 属性 | 类型 | 默认值 |
|------|------|--------|
| `title` | `string` | locale: `successCard.defaultTitle` |
| `description` | `string` | locale: `successCard.defaultDescription` |
| `confirmText` | `string` | locale: `successCard.defaultConfirmText` |
| `class` | `string` | — |

## 事件

| 事件 | 载荷 |
|------|------|
| `confirm` | `[]` |

## Slots

| Slot | 用途 |
|------|------|
| `actions` | 额外操作按钮区域 |

## 布局

SuccessCard 包含：
- **成功色顶部条**：`bg-brutal-success` 装饰条
- **装饰性勾选图标**：成功色方框内 Check 图标，带有偏移阴影背景
- **标题**：加粗、字距调整的标题
- **描述**：标题下方的弱化文本（仅在提供时显示）
- **确认按钮**：primary 变体按钮
- **扩展插槽**：`actions` slot 用于添加自定义操作按钮
