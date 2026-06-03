---
title: Not Found Page
description: 404 错误页面区块，带有故障文本效果和返回按钮。
---

# Not Found Page

新粗野主义风格的 404 页面，包含 GlitchText 故障效果、装饰性方块和返回首页按钮。

## 预览

<ComponentPreview>
  <NotFoundPageDemo />
</ComponentPreview>

## 安装

```bash
npx brutx-vue@latest add --block not-found-page
```

## 用法

```vue
<script setup>
import NotFoundPage from '@/components/ui/not-found-page/NotFoundPage.vue'

function handleBack() {
    window.location.href = '/'
}
</script>

<template>
    <NotFoundPage
        title="页面未找到"
        description="您访问的页面不存在或已被移除。"
        back-text="返回首页"
        @back="handleBack"
    />
</template>
```

## 自定义文本

```vue
<script setup>
import NotFoundPage from '@/components/ui/not-found-page/NotFoundPage.vue'
</script>

<template>
    <NotFoundPage
        title="Oops!"
        description="Something went wrong."
        back-text="Take me home"
        @back="() => $router.push('/')"
    />
</template>
```

## Props

| 属性 | 类型 | 默认值 |
|------|------|--------|
| `title` | `string` | locale: `notFoundPage.defaultTitle` |
| `description` | `string` | locale: `notFoundPage.defaultDescription` |
| `backText` | `string` | locale: `notFoundPage.defaultBackText` |
| `class` | `string` | — |

## 事件

| 事件 | 载荷 |
|------|------|
| `back` | `[]` |

## Slots

| Slot | 用途 |
|------|------|
| `header` | 替换/扩展区块头部 |
| `default` | 替换区块主体内容 |
| `footer` | 替换/扩展区块底部 |

## 布局

NotFoundPage 包含：
- **装饰方块**：强调色和辅助色旋转方块，偏移阴影
- **故障文本**：GlitchText 组件渲染 "404"，自动播放故障动画
- **标题**：加粗、字距调整的标题文本
- **描述**：弱化文本描述
- **返回按钮**：primary 变体，带箭头图标
