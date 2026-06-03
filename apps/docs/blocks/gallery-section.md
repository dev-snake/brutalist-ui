---
title: Gallery Section
description: 带有轮播图和图片卡片的画廊展示区块。
---

# Gallery Section

新粗野主义风格的画廊展示区块，包含轮播图组件和图片卡片。

## 预览

<ComponentPreview>
  <GallerySectionDemo />
</ComponentPreview>

## 安装

```bash
npx brutx-vue@latest add --block gallery-section
```

## 用法

```vue
<script setup>
import GallerySection from '@/components/ui/gallery-section/GallerySection.vue'

const items = [
    {
        src: '/images/photo1.jpg',
        alt: 'Photo 1',
        caption: 'Mountain landscape',
    },
    {
        src: '/images/photo2.jpg',
        alt: 'Photo 2',
        caption: 'Ocean sunset',
    },
    {
        src: '/images/photo3.jpg',
        alt: 'Photo 3',
    },
]

function handleItemClick(index) {
    console.log('Item clicked:', index)
}
</script>

<template>
    <GallerySection
        title="Gallery"
        :items="items"
        @item-click="handleItemClick"
    />
</template>
```

## Props

| 属性 | 类型 | 默认值 |
|------|------|--------|
| `title` | `string` | locale: `gallerySection.defaultTitle` |
| `items` | `GalleryItem[]` | `[]` |
| `class` | `string` | — |

### GalleryItem 接口

| 字段 | 类型 | 说明 |
|------|------|------|
| `src` | `string` | 图片地址 |
| `alt` | `string` | 替代文本 |
| `caption` | `string` | 可选图片说明 |

## 事件

| 事件 | 载荷 |
|------|------|
| `item-click` | `[index: number]` |

## 插槽

| 插槽 | 说明 |
|------|------|
| `header` | 自定义标题区域 |
| `default` | 自定义主内容区域（替换轮播图） |
| `footer` | 底部内容 |

## 布局

GallerySection 包含：
- **标题**：加粗区块标题
- **轮播图**：带有箭头和指示点的图片轮播，每张图片有粗边框和阴影
- **图片说明**：可选的图片标题文字
- **空状态**：当没有图片时显示图标占位
