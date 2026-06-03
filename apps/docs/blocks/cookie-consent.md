---
title: Cookie Consent
description: Cookie 同意横幅区块，固定在页面底部，带有接受和拒绝按钮。
---

# Cookie Consent

新粗野主义风格的 Cookie 同意横幅，固定在页面底部，包含 Cookie 图标、标题、描述以及接受/拒绝按钮。

## 预览

<ComponentPreview>
  <CookieConsentDemo />
</ComponentPreview>

## 安装

```bash
npx brutx-vue@latest add --block cookie-consent
```

## 用法

```vue
<script setup>
import CookieConsent from '@/components/ui/cookie-consent/CookieConsent.vue'

function handleAccept() {
    console.log('Cookies accepted')
}

function handleDecline() {
    console.log('Cookies declined')
}
</script>

<template>
    <CookieConsent
        title="We use cookies"
        description="By continuing, you agree to our cookie policy."
        accept-text="Accept"
        decline-text="Decline"
        @accept="handleAccept"
        @decline="handleDecline"
    />
</template>
```

## 自定义文本

```vue
<script setup>
import CookieConsent from '@/components/ui/cookie-consent/CookieConsent.vue'
</script>

<template>
    <CookieConsent
        title="This site uses cookies"
        description="We use cookies to improve your experience and analyze traffic."
        accept-text="Got it!"
        decline-text="No thanks"
        @accept="enableCookies"
        @decline="disableCookies"
    />
</template>
```

## Props

| 属性 | 类型 | 默认值 |
|------|------|--------|
| `title` | `string` | locale: `cookieConsent.defaultTitle` |
| `description` | `string` | locale: `cookieConsent.defaultDescription` |
| `acceptText` | `string` | locale: `cookieConsent.defaultAcceptText` |
| `declineText` | `string` | locale: `cookieConsent.defaultDeclineText` |
| `class` | `string` | — |

## 事件

| 事件 | 载荷 |
|------|------|
| `accept` | `[]` |
| `decline` | `[]` |

## Slots

| Slot | 用途 |
|------|------|
| `actions` | 额外操作按钮区域 |

## 布局

CookieConsent 包含：
- **固定定位**：`fixed bottom-0 left-0 right-0 z-50`，始终显示在页面底部
- **Cookie 图标**：lucide-vue-next 的 Cookie 图标
- **标题和描述**：左侧文本区域
- **操作按钮**：拒绝（outline 变体）和接受（primary 变体），响应式排列
- **扩展插槽**：`actions` slot 用于添加自定义操作按钮
